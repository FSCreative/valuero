// platform.js — VALUERO client for houses that run on the VALUERO Partner platform (gast.valuero.at).
// ---------------------------------------------------------------------------
// A house is a "platform house" when its api_url has the platform shape
//   https://gast.valuero.at/api/v/<slug>        (set automatically by syncPartnerListings)
// or when only partner_slug is set (then PARTNER_PUBLIC_URL / gast.valuero.at is used).
//
// What valuero.at uses (all read-only):
//   GET  {base}/api/public/<slug>            house profile, units, rules (public)
//   GET  {base}/api/public/<slug>/calendar   per day: free per unit, price, arrivalOk, departureOk, minNights (public)
//   GET  {base}/api/v/<slug>/api/quote       live quote incl. all rules (X-Api-Key)
//   POST {base}/api/public/<slug>/quote      fallback quote when no API key is stored (public, read-only)
// Booking itself is NOT done here: guests are handed over to the platform's booking page
//   {base}/b/<slug>?arrival=&departure=&adults=&children=<ages>&ref=valuero
// so payment, terms, confirmation mails etc. stay in one place.
// All responses are cached briefly in memory (calendar 5 min, quotes 3 min, profile 10 min).
// ---------------------------------------------------------------------------

const DEFAULT_BASE = (process.env.PARTNER_PUBLIC_URL || "https://gast.valuero.at").replace(/\/+$/, "");
const TTL = { info: 10 * 60e3, calendar: 5 * 60e3, quote: 3 * 60e3, error: 30e3 };
const DAY = 86400000;

// ---- identity -------------------------------------------------------------
function of(acc) {
  if (!acc) return null;
  const api = String(acc.api_url || "").trim();
  const m = /^(https?:\/\/[^/?#]+)\/api\/v\/([A-Za-z0-9_-]+)\/?$/.exec(api);
  if (m) return { base: m[1], slug: m[2], key: String(acc.api_key || "").trim() };
  const slug = String(acc.partner_slug || "").trim();
  if (slug && !api && /^[A-Za-z0-9_-]+$/.test(slug)) return { base: DEFAULT_BASE, slug, key: "" };
  return null;
}

// ---- tiny TTL cache with in-flight de-duplication -------------------------
const CACHE = new Map();
function cached(key, ttl, fn) {
  const now = Date.now();
  const hit = CACHE.get(key);
  if (hit && hit.exp > now) return hit.p;
  const p = Promise.resolve()
    .then(fn)
    .catch((e) => {
      // keep failures only briefly so a flaky platform does not slow every search
      CACHE.set(key, { exp: Date.now() + TTL.error, p: Promise.reject(e) });
      CACHE.get(key).p.catch(() => {});
      throw e;
    });
  CACHE.set(key, { exp: now + ttl, p });
  if (CACHE.size > 800) {
    for (const [k, v] of CACHE) if (v.exp <= now) CACHE.delete(k);
    if (CACHE.size > 800) CACHE.delete(CACHE.keys().next().value);
  }
  return p;
}

async function getJSON(url, opts, timeoutMs) {
  const res = await fetch(url, { ...(opts || {}), signal: AbortSignal.timeout(timeoutMs || 8000) });
  const text = await res.text();
  let data = null;
  try { data = text ? JSON.parse(text) : null; } catch { data = null; }
  if (!res.ok) {
    const err = new Error((data && data.error) || `Plattform ${res.status}`);
    err.status = res.status;
    throw err;
  }
  return data;
}

// ---- date helpers (UTC, ISO yyyy-mm-dd) -------------------------------------
const isISO = (s) => typeof s === "string" && /^\d{4}-\d{2}-\d{2}$/.test(s) && !isNaN(Date.parse(s + "T00:00:00Z"));
const addDays = (iso, n) => new Date(Date.parse(iso + "T00:00:00Z") + n * DAY).toISOString().slice(0, 10);
const diffDays = (a, b) => Math.round((Date.parse(b + "T00:00:00Z") - Date.parse(a + "T00:00:00Z")) / DAY);
function todayVienna() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Vienna", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
}

// ---- platform reads ---------------------------------------------------------
function info(p) {
  return cached(`info|${p.base}|${p.slug}`, TTL.info, () =>
    getJSON(`${p.base}/api/public/${encodeURIComponent(p.slug)}`, { headers: { accept: "application/json" } })
  );
}

// One calendar per house (+ person count for price tiers), always "today … +400 days".
function calendar(p, persons) {
  const n = Math.max(0, Math.min(50, parseInt(persons, 10) || 0));
  const from = todayVienna();
  const to = addDays(from, 400);
  return cached(`cal|${p.base}|${p.slug}|${n}|${from}`, TTL.calendar, () =>
    getJSON(
      `${p.base}/api/public/${encodeURIComponent(p.slug)}/calendar?from=${from}&to=${to}${n ? "&persons=" + n : ""}`,
      { headers: { accept: "application/json" } },
      10000
    ).then((d) => (Array.isArray(d) ? d : []))
  );
}

// Live quote → VALUERO's internal shape { rooms:[{roomId,name,maxGuests,offer}] }.
function quote(p, { checkin, checkout, adults, childrenAges }) {
  const ages = (childrenAges || []).map((x) => parseInt(x, 10)).filter((x) => Number.isFinite(x) && x >= 0 && x < 18);
  const ad = Math.max(1, parseInt(adults, 10) || 2);
  const key = `q|${p.base}|${p.slug}|${checkin}|${checkout}|${ad}|${ages.join(",")}`;
  return cached(key, TTL.quote, async () => {
    if (p.key) {
      const q = new URLSearchParams({ checkin, checkout, adults: String(ad), childrenAges: ages.join(",") });
      const d = await getJSON(`${p.base}/api/v/${encodeURIComponent(p.slug)}/api/quote?${q}`, {
        headers: { accept: "application/json", "x-api-key": p.key },
      });
      return {
        rooms: ((d && d.rooms) || []).map((r) => ({
          roomId: String(r.roomId),
          name: r.name || "Wohnung",
          maxGuests: r.maxGuests || 0,
          offer: r.available
            ? { available: true, nights: r.nights, currency: r.currency || "EUR", total: r.total, perNight: r.perNight, roomTotal: r.roomTotal, extraFees: r.extraFees || 0, breakdown: r.breakdown || [] }
            : { available: false, reason: r.reason || "" },
        })),
      };
    }
    const d = await getJSON(`${p.base}/api/public/${encodeURIComponent(p.slug)}/quote`, {
      method: "POST",
      headers: { accept: "application/json", "content-type": "application/json" },
      body: JSON.stringify({ arrival: checkin, departure: checkout, adults: ad, childrenAges: ages, lang: "de" }),
    });
    return {
      rooms: (Array.isArray(d) ? d : []).map((x) => {
        const q = x.quote || {};
        return {
          roomId: String(x.unitId),
          name: "Wohnung",
          maxGuests: 0,
          offer: q.ok
            ? { available: true, nights: q.nights, currency: "EUR", total: q.total, perNight: q.nights ? Math.round((q.total / q.nights) * 100) / 100 : null, breakdown: (q.lines || []).map((l) => ({ label: l.label, amount: l.amount })) }
            : { available: false, reason: (q.errors || []).map((e) => e.msg).join(" ") },
        };
      }),
    };
  });
}

function bookingUrl(p, stay, lang) {
  const q = new URLSearchParams();
  if (stay && isISO(stay.checkin) && isISO(stay.checkout)) {
    q.set("arrival", stay.checkin);
    q.set("departure", stay.checkout);
  }
  if (stay && stay.adults) q.set("adults", String(Math.max(1, parseInt(stay.adults, 10) || 2)));
  const ages = ((stay && stay.childrenAges) || []).filter((x) => Number.isFinite(+x));
  if (ages.length) q.set("children", ages.join(","));
  if (lang && lang !== "de") q.set("lang", lang);
  q.set("ref", "valuero");
  return `${p.base}/b/${encodeURIComponent(p.slug)}?${q}`;
}

// ---- pure helpers on the calendar (unit-testable) ---------------------------
// Rules that apply around a date window: allowed arrival weekdays (0=So … 6=Sa) + minimum stay.
function rulesFor(cal, from, to) {
  const days = (cal || []).filter((d) => d.bookable && (!from || d.date >= from) && (!to || d.date <= to));
  if (!days.length) return null;
  const wd = new Set();
  let minN = null;
  for (const d of days) {
    if (d.arrivalOk) wd.add(new Date(d.date + "T00:00:00Z").getUTCDay());
    const n = Number(d.minNights) || 1;
    if (d.arrivalOk && (minN == null || n < minN)) minN = n;
  }
  const arrivalDays = [...wd].sort();
  return { arrivalDays: arrivalDays.length === 7 ? [] : arrivalDays, minNights: minN && minN > 1 ? minN : 1 };
}

// Cheapest bookable nightly price ("ab … € / Nacht").
function fromPrice(cal) {
  let min = null;
  for (const d of cal || []) if (d.bookable && d.anyFree && d.minPrice > 0 && (min == null || d.minPrice < min)) min = d.minPrice;
  return min;
}

// Nearest valid stays around a wish (respects arrival/departure weekdays, min stay, occupancy).
function suggestStays(cal, { checkin, checkout }, max) {
  max = max || 3;
  if (!isISO(checkin)) return [];
  const map = new Map((cal || []).map((d) => [d.date, d]));
  const unitIds = Object.keys(((cal || [])[0] || {}).units || {});
  const reqN = isISO(checkout) ? Math.max(1, diffDays(checkin, checkout)) : 7;
  const out = [];
  for (let off = -21; off <= 42; off++) {
    const a = addDays(checkin, off);
    const d0 = map.get(a);
    if (!d0 || !d0.bookable || !d0.arrivalOk || !d0.anyFree) continue;
    const minN = Math.max(1, Number(d0.minNights) || 1);
    const start = Math.max(reqN, minN);
    for (let n = start; n <= start + 7; n++) {
      const dep = addDays(a, n);
      const dd = map.get(dep);
      if (!dd) break;
      if (!dd.departureOk) continue;
      let ok = false;
      for (const u of unitIds.length ? unitIds : [null]) {
        let all = true;
        for (let k = 0; k < n; k++) {
          const day = map.get(addDays(a, k));
          const free = day && (u ? day.units && day.units[u] && day.units[u].free : day.anyFree);
          if (!free) { all = false; break; }
        }
        if (all) { ok = true; break; }
      }
      if (ok) {
        if (!(a === checkin && dep === checkout)) out.push({ checkin: a, checkout: dep, nights: n, score: Math.abs(off) * 2 + Math.abs(n - reqN) + (off < 0 ? 1 : 0) });
        break;
      }
    }
  }
  out.sort((x, y) => x.score - y.score || (x.checkin < y.checkin ? -1 : 1));
  const seen = new Set();
  return out
    .filter((s) => (seen.has(s.checkin) ? false : seen.add(s.checkin)))
    .slice(0, max)
    .map(({ checkin, checkout, nights }) => ({ checkin, checkout, nights }));
}

// Compact calendar for the browser date picker (only what it needs).
function compactCalendar(cal) {
  const unitIds = Object.keys(((cal || [])[0] || {}).units || {});
  return (cal || []).map((d) => ({
    d: d.date,
    f: d.bookable && d.anyFree ? 1 : 0, // free (at least one unit)
    a: d.arrivalOk ? 1 : 0,
    x: d.departureOk ? 1 : 0,
    m: Number(d.minNights) || 1,
    p: d.minPrice || null,
    u: unitIds.length > 1 ? unitIds.map((u) => (d.units[u] && d.units[u].free ? 1 : 0)).join("") : undefined,
  }));
}

module.exports = { of, cached, info, calendar, quote, bookingUrl, rulesFor, fromPrice, suggestStays, compactCalendar, isISO, addDays, diffDays, todayVienna, _cache: CACHE };
