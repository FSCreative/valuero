// partnerapi.js — VALUERO client for a per-accommodation external booking API.
// ---------------------------------------------------------------------------
// Some accommodations run their OWN booking app (e.g. Antonhaus, Alpinappart)
// with custom pricing rules (child tariffs, short-stay surcharges, Gästetaxe…).
// Instead of re-implementing those rules here, VALUERO calls that app's API so
// prices/availability/booking match the partner site 1:1. Opt-in per
// accommodation via the admin fields `api_url` + `api_key`; accommodations
// without an api_url keep using Beds24 directly (or the website fallback).
//
// Shared contract every partner app implements:
//   GET  {api_url}/api/quote?checkin=&checkout=&adults=&childrenAges=a,b   (X-Api-Key)
//        → { ok, currency, rooms:[{ roomId,name,available,reason,nights,
//            perNight,roomTotal,extraFees,total,maxGuests,breakdown:[{label,amount}] }] }
//   POST {api_url}/api/book   body {roomId,checkin,checkout,adults,childrenAges,
//        title,firstName,lastName,email,phone,notes}  (X-Api-Key) → { ok,bookingId,total }
//   GET  {api_url}/api/rooms  → { ok, rooms:[{roomId,name,maxGuests}] }
// ---------------------------------------------------------------------------

function hasApi(acc) {
  return !!(acc && String(acc.api_url || "").trim());
}
// api_url prefixed with "alpin+" → the Alpinappart-style native API
// (whole-apartment pricing, age-group children). Otherwise the standard contract.
function apiType(acc) {
  return String(acc.api_url || "").trim().toLowerCase().startsWith("alpin+") ? "alpin" : "standard";
}
function base(acc) {
  return String(acc.api_url || "").trim().replace(/^alpin\+/i, "").replace(/\/+$/, "");
}
function headers(acc) {
  const h = { accept: "application/json" };
  const key = String(acc.api_key || "").trim();
  if (key) h["x-api-key"] = key;
  return h;
}

async function call(url, opts, timeoutMs) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs || 12000);
  try {
    const res = await fetch(url, { ...opts, signal: ctrl.signal });
    const text = await res.text();
    let data;
    try { data = text ? JSON.parse(text) : null; } catch { data = null; }
    if (!res.ok) {
      const err = new Error((data && data.error) || `Partner-API ${res.status}`);
      err.status = res.status;
      throw err;
    }
    return data;
  } finally {
    clearTimeout(t);
  }
}

// Live quote for a stay. Returns { rooms:[{roomId,name,maxGuests,offer}] } in
// VALUERO's internal shape, or null when not configured.
async function getOffer(acc, { checkin, checkout, adults, childrenAges }) {
  if (!hasApi(acc)) return null;
  if (apiType(acc) === "alpin") return getOfferAlpin(acc, { checkin, checkout, adults, childrenAges });
  const q = new URLSearchParams({
    checkin,
    checkout,
    adults: String(adults || 2),
    childrenAges: (childrenAges || []).join(","),
  });
  const data = await call(base(acc) + "/api/quote?" + q.toString(), { headers: headers(acc) });
  const rooms = ((data && data.rooms) || []).map((r) => ({
    roomId: String(r.roomId),
    name: r.name || "Zimmer",
    maxGuests: r.maxGuests || 0,
    size: r.size || null,
    floor: r.floor || "",
    bedrooms: r.bedrooms || null,
    bathrooms: r.bathrooms || null,
    description: r.description || "",
    features: Array.isArray(r.features) ? r.features : [],
    offer:
      r.available
        ? {
            available: true,
            nights: r.nights || 0,
            currency: r.currency || (data && data.currency) || "EUR",
            perNight: r.total && r.nights ? Math.round((r.total / r.nights) * 100) / 100 : r.perNight != null ? r.perNight : null,
            roomTotal: r.roomTotal != null ? r.roomTotal : r.total,
            extraFees: r.extraFees || 0,
            total: r.total,
            breakdown: r.breakdown || [],
          }
        : { available: false, reason: r.reason || "" },
  }));
  return { currency: (data && data.currency) || "EUR", rooms };
}

// Create a booking through the partner API. Returns { ok, bookingId, total, currency }.
async function createBooking(acc, booking) {
  if (!hasApi(acc)) throw new Error("Keine externe Buchungs-API hinterlegt.");
  if (apiType(acc) === "alpin") return createBookingAlpin(acc, booking);
  const data = await call(
    base(acc) + "/api/book",
    {
      method: "POST",
      headers: { ...headers(acc), "content-type": "application/json" },
      body: JSON.stringify(booking),
    },
    20000
  );
  if (!data || data.ok !== true) {
    throw new Error((data && data.error) || "Partner-Buchung abgelehnt.");
  }
  return { ok: true, bookingId: data.bookingId, total: data.total, currency: data.currency || "EUR" };
}

// ---- Alpinappart-style adapter (whole apartment, age-group children) --------
// Maps VALUERO's individual child ages to the partner's age groups (with
// minAge/maxAge from GET /api/prices); ages above the top group count as adults.
async function alpinPrices(acc) {
  return call(base(acc) + "/api/prices", { headers: headers(acc) });
}
function mapAges(prices, adults, childrenAges) {
  const groups = (prices && prices.childAgeGroups) || [];
  const children = {};
  groups.forEach((g) => (children[g.id] = 0));
  let adultsEff = Math.max(1, adults || 2);
  (childrenAges || []).forEach((age) => {
    const g = groups.find((x) => age >= x.minAge && age <= x.maxAge);
    if (g) children[g.id] = (children[g.id] || 0) + 1;
    else adultsEff += 1; // teens above the top group are charged as adults
  });
  return { adultsEff, children, maxGuests: (prices && prices.maxPersons) || 0 };
}

async function getOfferAlpin(acc, { checkin, checkout, adults, childrenAges }) {
  const prices = await alpinPrices(acc);
  const { adultsEff, children, maxGuests } = mapAges(prices, adults, childrenAges);
  const q = await call(
    base(acc) + "/api/quote",
    {
      method: "POST",
      headers: { ...headers(acc), "content-type": "application/json" },
      body: JSON.stringify({ checkin, checkout, adults: adultsEff, children }),
    },
    18000
  );
  const errs = (q && q.errors) || [];
  const available = !!(q && q.available && errs.length === 0);
  // Grandtotal incl. all extras (Endreinigung, Gästetaxe …) is the price the
  // guest actually pays — mirror it 1:1 so VALUERO shows the same as the partner.
  const roomTotal = q && q.total != null ? q.total : null; // reine Unterkunft (nach Kinderrabatt)
  const extrasTotal = q && q.extrasTotal != null ? q.extrasTotal : ((q && q.extras) || []).reduce((s, e) => s + (Number(e.amount) || 0), 0);
  const grand = q && q.grandTotal != null ? q.grandTotal : (roomTotal != null ? roomTotal + (extrasTotal || 0) : null);
  const breakdown = [];
  if (q && q.base != null) breakdown.push({ label: "Grundpreis", amount: q.base });
  if (q && q.discount > 0) breakdown.push({ label: "Kinder-Rabatt", amount: -q.discount });
  ((q && q.extras) || []).forEach((e) => {
    const amt = Number(e.amount) || 0;
    if (amt) breakdown.push({ label: e.label || e.name || "Zusatz", amount: amt });
  });
  return {
    currency: "EUR",
    rooms: [
      {
        roomId: "wohnung",
        name: "Ferienwohnung",
        maxGuests,
        offer: available
          ? {
              available: true,
              nights: q.nights,
              currency: "EUR",
              perNight: q.nights ? Math.round((grand / q.nights) * 100) / 100 : null,
              roomTotal: roomTotal,
              extraFees: extrasTotal || 0,
              total: grand,
              breakdown,
            }
          : { available: false, reason: errs.join(" ") || "Für diese Daten nicht verfügbar." },
      },
    ],
  };
}

async function createBookingAlpin(acc, booking) {
  const prices = await alpinPrices(acc);
  const { adultsEff, children } = mapAges(prices, booking.adults, booking.childrenAges);
  const name = ((booking.firstName || "") + " " + (booking.lastName || "")).trim();
  const d = await call(
    base(acc) + "/api/book",
    {
      method: "POST",
      headers: { ...headers(acc), "content-type": "application/json" },
      body: JSON.stringify({
        checkin: booking.checkin, checkout: booking.checkout,
        name, email: booking.email, phone: booking.phone || "", note: booking.notes || "",
        adults: adultsEff, children,
      }),
    },
    20000
  );
  return { ok: true, bookingId: (d && (d.bookingNo || d.bookingId)) || "", total: d && (d.grandTotal != null ? d.grandTotal : d.total), currency: "EUR" };
}

module.exports = { hasApi, apiType, getOffer, createBooking };
