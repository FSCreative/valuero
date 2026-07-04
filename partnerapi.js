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
function base(acc) {
  return String(acc.api_url || "").trim().replace(/\/+$/, "");
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
    offer:
      r.available
        ? {
            available: true,
            nights: r.nights || 0,
            currency: r.currency || (data && data.currency) || "EUR",
            perNight: r.perNight != null ? r.perNight : r.total && r.nights ? Math.round(r.total / r.nights) : null,
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

module.exports = { hasApi, getOffer, createBooking };
