// beds24.js — Beds24 API v2 client for VALUERO
// ---------------------------------------------------------------------------
// Handles: token management (invite code / refresh token / long-life token,
// optionally overridden per accommodation), live pricing & availability
// (/inventory/rooms/offers + /inventory/rooms/calendar) and booking creation
// (POST /bookings). Ships with a deterministic DEMO mode so the whole booking
// flow can be previewed before real Beds24 credentials are wired in.
//
// Configure via environment variables (set these in Railway):
//   BEDS24_API_BASE          default "https://api.beds24.com/v2"
//   BEDS24_INVITE_CODE       one-time invite code (read+write scopes). Exchanged
//                            once for a refresh token which is then stored in the
//                            `content` table and reused automatically.
//   BEDS24_REFRESH_TOKEN     a refresh token (read+write). Preferred for bookings.
//   BEDS24_LONG_LIFE_TOKEN   a long-life token (READ ONLY — prices/availability
//                            work, but creating bookings does NOT).
//   BEDS24_DEMO=true         preview mode: every accommodation behaves as if it
//                            were Beds24-connected, with generated prices.
//
// Per accommodation (set in the Admin edit form): beds24_property_id,
// beds24_room_id and an optional beds24_token override (used directly).
// ---------------------------------------------------------------------------

const BASE = (process.env.BEDS24_API_BASE || "https://api.beds24.com/v2").replace(/\/+$/, "");
const DEMO = process.env.BEDS24_DEMO === "true";

const GLOBAL_LONG_LIFE = (process.env.BEDS24_LONG_LIFE_TOKEN || "").trim();
const GLOBAL_REFRESH = (process.env.BEDS24_REFRESH_TOKEN || "").trim();
const GLOBAL_INVITE = (process.env.BEDS24_INVITE_CODE || "").trim();

// In-memory access-token cache (shared, account-level). { token, exp }
let mem = { token: "", exp: 0 };
// Short cache for offer/calendar reads to stay under the API credit limit.
const readCache = new Map(); // key -> { data, exp }
const READ_TTL_MS = 5 * 60 * 1000;

// ---- low-level fetch wrapper ---------------------------------------------
async function apiFetch(path, { method = "GET", headers = {}, query, body } = {}) {
  const url = new URL(BASE + path);
  if (query) {
    for (const [k, v] of Object.entries(query)) {
      if (v == null || v === "") continue;
      if (Array.isArray(v)) v.forEach((x) => url.searchParams.append(k, x));
      else url.searchParams.append(k, v);
    }
  }
  const h = { accept: "application/json", ...headers };
  if (body) h["content-type"] = "application/json";
  const res = await fetch(url, {
    method,
    headers: h,
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let data;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }
  if (!res.ok) {
    const err = new Error(`Beds24 ${res.status} on ${method} ${path}`);
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

// ---- token management -----------------------------------------------------
async function getStored(db, key) {
  if (!db) return "";
  try {
    const r = await db.query("SELECT value FROM content WHERE key=$1", [key]);
    return (r.rows[0] && r.rows[0].value) || "";
  } catch {
    return "";
  }
}
async function setStored(db, key, value) {
  if (!db) return;
  try {
    await db.setContent(key, value);
  } catch {
    /* ignore */
  }
}

// Resolve a usable access token for the shared account.
// Priority: valid cached token > refresh token (env/stored) > invite code
// (exchanged once, refresh token stored) > long-life token (read only).
async function getAccountToken(db) {
  if (mem.token && mem.exp > Date.now() + 60_000) return mem.token;

  let refresh = GLOBAL_REFRESH || (await getStored(db, "beds24_refresh_token"));

  if (!refresh) {
    const invite = GLOBAL_INVITE || (await getStored(db, "beds24_invite_code"));
    if (invite) {
      const setup = await apiFetch("/authentication/setup", { headers: { code: invite } });
      if (setup && setup.refreshToken) {
        refresh = setup.refreshToken;
        await setStored(db, "beds24_refresh_token", refresh);
        // Invite codes are single-use; drop it once exchanged.
        await setStored(db, "beds24_invite_code", "");
      }
      if (setup && setup.token) {
        mem = { token: setup.token, exp: Date.now() + (setup.expiresIn || 3600) * 1000 };
        return mem.token;
      }
    }
  }

  if (refresh) {
    const t = await apiFetch("/authentication/token", { headers: { refreshToken: refresh } });
    mem = { token: t.token, exp: Date.now() + (t.expiresIn || 3600) * 1000 };
    return mem.token;
  }

  if (GLOBAL_LONG_LIFE) return GLOBAL_LONG_LIFE;
  return "";
}

// Token to use for a specific accommodation. A per-accommodation token (a
// partner on their own Beds24 account) is used directly; otherwise the shared
// account token is used.
async function tokenForAcc(db, acc) {
  const per = acc && (acc.beds24_token || "").trim();
  if (per) return per;
  return getAccountToken(db);
}

// ---- helpers --------------------------------------------------------------
// True when this accommodation is wired to Beds24 (or when demo mode is on).
function isConnected(acc) {
  if (DEMO) return true;
  return !!(acc && String(acc.beds24_property_id || "").trim() && String(acc.beds24_room_id || "").trim());
}

function nights(checkin, checkout) {
  const a = new Date(checkin + "T00:00:00Z");
  const b = new Date(checkout + "T00:00:00Z");
  const n = Math.round((b - a) / 86400000);
  return n > 0 ? n : 0;
}

// Deterministic pseudo-random in [0,1) from a string seed.
function seeded(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return ((h >>> 0) % 100000) / 100000;
}

// ---- DEMO data ------------------------------------------------------------
function demoNightly(acc, dateStr) {
  const base = 90 + Math.floor(seeded("base" + acc.id + acc.name) * 140); // 90–230
  const d = new Date(dateStr + "T00:00:00Z");
  const dow = d.getUTCDay(); // 0 Sun .. 6 Sat
  const weekend = dow === 5 || dow === 6 ? 1.25 : 1;
  const month = d.getUTCMonth(); // winter high season Dec–Mar
  const season = month === 11 || month <= 2 ? 1.35 : month >= 5 && month <= 8 ? 1.1 : 0.9;
  const wobble = 0.9 + seeded(dateStr + acc.id) * 0.2;
  return Math.round((base * weekend * season * wobble) / 5) * 5;
}
function demoAvailable(acc, dateStr) {
  // ~15% of nights blocked, deterministically.
  return seeded("avail" + acc.id + dateStr) > 0.15;
}
function demoOffer(acc, checkin, checkout, guests) {
  const n = nights(checkin, checkout);
  if (!n) return { available: false, nights: 0 };
  let total = 0;
  let available = true;
  const days = [];
  for (let i = 0; i < n; i++) {
    const d = new Date(checkin + "T00:00:00Z");
    d.setUTCDate(d.getUTCDate() + i);
    const ds = d.toISOString().slice(0, 10);
    const price = demoNightly(acc, ds);
    if (!demoAvailable(acc, ds)) available = false;
    total += price;
    days.push({ date: ds, price });
  }
  const cleaning = 35;
  const minStay = 2;
  if (n < minStay) available = false;
  return {
    available,
    nights: n,
    currency: "EUR",
    perNight: Math.round(total / n),
    roomTotal: total,
    extraFees: available ? cleaning : 0,
    total: available ? total + cleaning : total,
    minStay,
    maxGuests: acc.max_guests || 4,
    days,
    demo: true,
  };
}
function demoCalendar(acc, from, to) {
  const out = [];
  const start = new Date(from + "T00:00:00Z");
  const end = new Date(to + "T00:00:00Z");
  for (let d = new Date(start); d <= end; d.setUTCDate(d.getUTCDate() + 1)) {
    const ds = d.toISOString().slice(0, 10);
    out.push({ date: ds, price: demoNightly(acc, ds), available: demoAvailable(acc, ds), minStay: 2 });
  }
  return out;
}

// ---- tolerant parsers for live responses ----------------------------------
// The exact field names of /inventory/rooms/offers can vary by account setup;
// these parsers look at the most likely locations and fall back gracefully.
function num(v) {
  const n = parseFloat(v);
  return isFinite(n) ? n : null;
}
function parseOffer(raw, acc, checkin, checkout, guests) {
  const n = nights(checkin, checkout);
  const data = (raw && raw.data) || raw;
  const entry = Array.isArray(data) ? data[0] : data;
  if (!entry) return { available: false, nights: n };

  // Offers array (each offer = a price for the whole stay)
  const offers = entry.offers || entry.offer || (entry.roomTypes && entry.roomTypes[0] && entry.roomTypes[0].offers);
  let price = null;
  let available = false;
  if (Array.isArray(offers) && offers.length) {
    const priced = offers
      .map((o) => num(o.price ?? o.total ?? o.roomPrice ?? o.amount))
      .filter((x) => x != null);
    if (priced.length) {
      price = Math.min(...priced);
      available = true;
    } else {
      available = true;
    }
  } else if (num(entry.price ?? entry.total) != null) {
    price = num(entry.price ?? entry.total);
    available = price != null;
  }

  if (price == null) return { available: false, nights: n };
  return {
    available,
    nights: n,
    currency: entry.currency || "EUR",
    perNight: n ? Math.round(price / n) : price,
    roomTotal: price,
    extraFees: 0,
    total: price,
    minStay: entry.minStay || 1,
    maxGuests: acc.max_guests || null,
    raw: undefined,
  };
}

// ---- public API -----------------------------------------------------------

// Live (or demo) price + availability for a specific stay.
async function getStayOffer(db, acc, checkin, checkout, guests) {
  if (!isConnected(acc)) return null;
  if (DEMO || (acc.beds24_demo === true)) return demoOffer(acc, checkin, checkout, guests);

  const cacheKey = ["offer", acc.beds24_property_id, acc.beds24_room_id, checkin, checkout, guests].join(":");
  const c = readCache.get(cacheKey);
  if (c && c.exp > Date.now()) return c.data;

  const token = await tokenForAcc(db, acc);
  if (!token) return null;
  const raw = await apiFetch("/inventory/rooms/offers", {
    headers: { token },
    query: {
      propertyId: acc.beds24_property_id,
      roomId: acc.beds24_room_id,
      arrival: checkin,
      departure: checkout,
      numAdults: guests || 2,
    },
  });
  const parsed = parseOffer(raw, acc, checkin, checkout, guests);
  readCache.set(cacheKey, { data: parsed, exp: Date.now() + READ_TTL_MS });
  return parsed;
}

// Per-day calendar (prices + availability) for the date picker.
async function getCalendar(db, acc, from, to) {
  if (!isConnected(acc)) return [];
  if (DEMO || acc.beds24_demo === true) return demoCalendar(acc, from, to);

  const cacheKey = ["cal", acc.beds24_property_id, acc.beds24_room_id, from, to].join(":");
  const c = readCache.get(cacheKey);
  if (c && c.exp > Date.now()) return c.data;

  const token = await tokenForAcc(db, acc);
  if (!token) return [];
  const raw = await apiFetch("/inventory/rooms/calendar", {
    headers: { token },
    query: {
      propertyId: acc.beds24_property_id,
      roomId: acc.beds24_room_id,
      startDate: from,
      endDate: to,
    },
  });
  const data = (raw && raw.data) || raw || [];
  const entry = Array.isArray(data) ? data[0] : data;
  const cal = (entry && (entry.calendar || entry.days)) || [];
  const out = cal.map((row) => ({
    date: row.from || row.date || row.day,
    price: num(row.price1 ?? row.price ?? row.roomPrice),
    available: (row.numAvailable ?? row.available ?? row.numAvail ?? 1) > 0,
    minStay: row.minStay || row.minimumStay || 1,
  }));
  readCache.set(cacheKey, { data: out, exp: Date.now() + READ_TTL_MS });
  return out;
}

// Create a booking. Returns { ok, bookingId, status, demo, raw }.
async function createBooking(db, acc, booking) {
  if (DEMO || acc.beds24_demo === true) {
    return { ok: true, demo: true, bookingId: "DEMO-" + Date.now().toString(36).toUpperCase(), status: "confirmed" };
  }
  const token = await tokenForAcc(db, acc);
  if (!token) throw new Error("Keine Beds24-Zugangsdaten hinterlegt (Buchung nicht möglich).");

  const payload = [
    {
      propertyId: Number(acc.beds24_property_id) || acc.beds24_property_id,
      roomId: Number(acc.beds24_room_id) || acc.beds24_room_id,
      status: "new",
      arrival: booking.checkin,
      departure: booking.checkout,
      numAdult: booking.adults || booking.guests || 2,
      numChild: booking.children || 0,
      title: booking.title || "",
      firstName: booking.firstName || "",
      lastName: booking.lastName || "",
      email: booking.email || "",
      phone: booking.phone || "",
      notes: booking.notes || "",
      referer: "VALUERO",
    },
  ];
  const raw = await apiFetch("/bookings", { method: "POST", headers: { token }, body: payload });
  const item = Array.isArray(raw) ? raw[0] : raw;
  const ok = !!(item && item.success);
  const bookingId = item && item.new && (item.new.id || item.new.bookId);
  if (!ok) {
    const msg =
      (item && item.errors && item.errors[0] && (item.errors[0].message || item.errors[0].field)) ||
      "Buchung von Beds24 abgelehnt.";
    const err = new Error(msg);
    err.data = raw;
    throw err;
  }
  return { ok, bookingId, status: "confirmed", raw: undefined };
}

module.exports = {
  DEMO,
  isConnected,
  nights,
  getStayOffer,
  getCalendar,
  createBooking,
  getAccountToken,
  _demo: { demoOffer, demoCalendar },
};
