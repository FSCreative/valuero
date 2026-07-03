// beds24.js — Beds24 API v2 client for VALUERO
// ---------------------------------------------------------------------------
// Handles: token management (invite code / refresh token / long-life token,
// optionally overridden per accommodation), live pricing & availability
// (/inventory/rooms/offers + /inventory/rooms/calendar) and booking creation
// (POST /bookings). Every accommodation can have MULTIPLE rooms — each room
// carries its own Beds24 room id, so offers/calendar/bookings are per-room.
// Ships with a deterministic DEMO mode so the whole booking flow can be
// previewed before real Beds24 credentials are wired in.
//
// Configure via environment variables (set these in Railway):
//   BEDS24_API_BASE          default "https://api.beds24.com/v2"
//   BEDS24_INVITE_CODE       one-time invite code (read+write scopes). Exchanged
//                            once for a refresh token stored in the `content`
//                            table and reused automatically.
//   BEDS24_REFRESH_TOKEN     a refresh token (read+write). Preferred for bookings.
//   BEDS24_LONG_LIFE_TOKEN   a long-life token (READ ONLY — no bookings).
//   BEDS24_DEMO=true         preview mode: every room behaves as connected with
//                            generated prices.
// ---------------------------------------------------------------------------

const BASE = (process.env.BEDS24_API_BASE || "https://api.beds24.com/v2").replace(/\/+$/, "");
const DEMO = process.env.BEDS24_DEMO === "true";

const GLOBAL_LONG_LIFE = (process.env.BEDS24_LONG_LIFE_TOKEN || "").trim();
const GLOBAL_REFRESH = (process.env.BEDS24_REFRESH_TOKEN || "").trim();
const GLOBAL_INVITE = (process.env.BEDS24_INVITE_CODE || "").trim();

let mem = { token: "", exp: 0 };
const readCache = new Map();
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
  const res = await fetch(url, { method, headers: h, body: body ? JSON.stringify(body) : undefined });
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

async function tokenForAcc(db, acc) {
  const per = acc && (acc.beds24_token || "").trim();
  if (per) return per;
  return getAccountToken(db);
}

// ---- helpers --------------------------------------------------------------
function roomIdOf(room) {
  return room ? String(room.beds24_room_id || room.roomId || "").trim() : "";
}
// Connected = demo, or this accommodation has a property id and this room a room id.
function isConnected(acc, room) {
  if (DEMO) return true;
  return !!(acc && String(acc.beds24_property_id || "").trim() && roomIdOf(room));
}
function nights(checkin, checkout) {
  const a = new Date(checkin + "T00:00:00Z");
  const b = new Date(checkout + "T00:00:00Z");
  const n = Math.round((b - a) / 86400000);
  return n > 0 ? n : 0;
}
function seeded(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return ((h >>> 0) % 100000) / 100000;
}
function roomSeed(acc, room) {
  return String(acc.id) + "-" + (room ? String(room.id || roomIdOf(room) || "0") : "0");
}

// ---- DEMO data ------------------------------------------------------------
function demoNightly(acc, room, dateStr) {
  const base = 80 + Math.floor(seeded("base" + roomSeed(acc, room) + acc.name) * 160); // 80–240
  const d = new Date(dateStr + "T00:00:00Z");
  const dow = d.getUTCDay();
  const weekend = dow === 5 || dow === 6 ? 1.25 : 1;
  const month = d.getUTCMonth();
  const season = month === 11 || month <= 2 ? 1.35 : month >= 5 && month <= 8 ? 1.1 : 0.9;
  const wobble = 0.9 + seeded(dateStr + roomSeed(acc, room)) * 0.2;
  return Math.round((base * weekend * season * wobble) / 5) * 5;
}
function demoAvailable(acc, room, dateStr) {
  return seeded("avail" + roomSeed(acc, room) + dateStr) > 0.15;
}
function demoOffer(acc, room, checkin, checkout, guests) {
  const n = nights(checkin, checkout);
  if (!n) return { available: false, nights: 0 };
  let total = 0;
  let available = true;
  for (let i = 0; i < n; i++) {
    const d = new Date(checkin + "T00:00:00Z");
    d.setUTCDate(d.getUTCDate() + i);
    const ds = d.toISOString().slice(0, 10);
    if (!demoAvailable(acc, room, ds)) available = false;
    total += demoNightly(acc, room, ds);
  }
  const minStay = 2;
  const cleaning = 35;
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
    maxGuests: (room && room.max_guests) || acc.max_guests || 4,
    demo: true,
  };
}
function demoCalendar(acc, room, from, to) {
  const out = [];
  const start = new Date(from + "T00:00:00Z");
  const end = new Date(to + "T00:00:00Z");
  for (let d = new Date(start); d <= end; d.setUTCDate(d.getUTCDate() + 1)) {
    const ds = d.toISOString().slice(0, 10);
    out.push({ date: ds, price: demoNightly(acc, room, ds), available: demoAvailable(acc, room, ds), minStay: 2 });
  }
  return out;
}

// ---- tolerant parsers for live responses ----------------------------------
function num(v) {
  const n = parseFloat(v);
  return isFinite(n) ? n : null;
}
function parseOffer(raw, acc, room, checkin, checkout) {
  const n = nights(checkin, checkout);
  const data = (raw && raw.data) || raw;
  const entry = Array.isArray(data) ? data[0] : data;
  if (!entry) return { available: false, nights: n };
  const offers = entry.offers || entry.offer || (entry.roomTypes && entry.roomTypes[0] && entry.roomTypes[0].offers);
  let price = null;
  let available = false;
  if (Array.isArray(offers) && offers.length) {
    const priced = offers.map((o) => num(o.price ?? o.total ?? o.roomPrice ?? o.amount)).filter((x) => x != null);
    if (priced.length) {
      price = Math.min(...priced);
      available = true;
    } else available = true;
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
    maxGuests: (room && room.max_guests) || acc.max_guests || null,
  };
}

// ---- public API -----------------------------------------------------------
// Live (or demo) price + availability for a specific room + stay.
async function getStayOffer(db, acc, room, checkin, checkout, guests) {
  if (!isConnected(acc, room)) return null;
  if (DEMO || acc.beds24_demo === true) return demoOffer(acc, room, checkin, checkout, guests);
  const rid = roomIdOf(room);
  const cacheKey = ["offer", acc.beds24_property_id, rid, checkin, checkout, guests].join(":");
  const c = readCache.get(cacheKey);
  if (c && c.exp > Date.now()) return c.data;
  const token = await tokenForAcc(db, acc);
  if (!token) return null;
  const raw = await apiFetch("/inventory/rooms/offers", {
    headers: { token },
    query: {
      propertyId: acc.beds24_property_id,
      roomId: rid,
      arrival: checkin,
      departure: checkout,
      numAdults: guests || 2,
    },
  });
  const parsed = parseOffer(raw, acc, room, checkin, checkout);
  readCache.set(cacheKey, { data: parsed, exp: Date.now() + READ_TTL_MS });
  return parsed;
}

async function getCalendar(db, acc, room, from, to) {
  if (!isConnected(acc, room)) return [];
  if (DEMO || acc.beds24_demo === true) return demoCalendar(acc, room, from, to);
  const rid = roomIdOf(room);
  const token = await tokenForAcc(db, acc);
  if (!token) return [];
  const raw = await apiFetch("/inventory/rooms/calendar", {
    headers: { token },
    query: { propertyId: acc.beds24_property_id, roomId: rid, startDate: from, endDate: to },
  });
  const data = (raw && raw.data) || raw || [];
  const entry = Array.isArray(data) ? data[0] : data;
  const cal = (entry && (entry.calendar || entry.days)) || [];
  return cal.map((row) => ({
    date: row.from || row.date || row.day,
    price: num(row.price1 ?? row.price ?? row.roomPrice),
    available: (row.numAvailable ?? row.available ?? row.numAvail ?? 1) > 0,
    minStay: row.minStay || row.minimumStay || 1,
  }));
}

// Create a booking for a specific room. Returns { ok, bookingId, status, demo }.
async function createBooking(db, acc, room, booking) {
  if (DEMO || acc.beds24_demo === true) {
    return { ok: true, demo: true, bookingId: "DEMO-" + Date.now().toString(36).toUpperCase(), status: "confirmed" };
  }
  const rid = roomIdOf(room);
  if (!acc.beds24_property_id || !rid) throw new Error("Unterkunft/Zimmer nicht mit Beds24 verbunden.");
  const token = await tokenForAcc(db, acc);
  if (!token) throw new Error("Keine Beds24-Zugangsdaten hinterlegt (Buchung nicht möglich).");
  const payload = [
    {
      propertyId: Number(acc.beds24_property_id) || acc.beds24_property_id,
      roomId: Number(rid) || rid,
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
  return { ok, bookingId, status: "confirmed" };
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
