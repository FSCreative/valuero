# VALUERO

Tourismusplattform im Hochmontafon — öffentliche Website + Admin-CMS + Buchungstool
mit Beds24-Anbindung. Eine einzelne Node.js/Express-App mit PostgreSQL.

## Was die App kann

- **Öffentliche Website**: Startseite, Unterkünfte, Gastronomie, Veranstaltungen,
  Über uns, Impressum/Datenschutz/AGB.
- **Admin-CMS** (`/admin`): Unterkünfte, Gastro und Events pflegen, Webdesign-Texte
  und Bilder bearbeiten.
- **Buchungstool im Booking.com-Stil**: Suchleiste (Anreise/Abreise/Gäste) auf der
  Startseite und das komplette Tool unter **Unterkünfte** — mit Filtern, tagesaktuellen
  Live-Preisen, Verfügbarkeit und kompletter Buchungsstrecke über **Beds24**.

## Beds24-Anbindung (Preise · Verfügbarkeit · Buchung)

Die Anbindung funktioniert **pro Unterkunft** und wird im Admin gepflegt:
`Admin → Unterkünfte → Bearbeiten → Abschnitt „Buchungstool & Beds24"`.

- **Property-ID + Zimmer-ID gesetzt** → die Unterkunft zeigt Live-Preise,
  Verfügbarkeit und die vollständige Buchungsstrecke direkt auf Valuero.
- **Felder leer** → die Unterkunft erscheint trotzdem, aber **ohne Preis**, mit dem
  Hinweis „Preise siehe Website" und einem Button zur hinterlegten Website.

Zusätzlich pro Unterkunft einstellbar: **max. Gäste** (für den Gäste-Filter) und die
**Ausstattungs-Merkmale** (WLAN, Parkplatz, Sauna, Ski In & Out …), die im Buchungstool
als Filter erscheinen.

### Einrichtung des Zugangs (einmalig)

1. In Beds24 unter **SETTINGS → MARKETPLACE → API** einen **Invite-Code** erzeugen.
   Scopes: `read:inventory`, `read:properties`, `read:bookings`, `write:bookings`.
   (Für Buchungen wird ein **Refresh-Token** benötigt — ein reiner Long-Life-Token
   kann nur lesen.)
2. Den Code in Railway als `BEDS24_INVITE_CODE` setzen. Beim ersten Start tauscht
   Valuero ihn automatisch gegen ein dauerhaftes Refresh-Token (in der DB gespeichert).
3. Pro Unterkunft im Admin die **Property-ID** und **Zimmer-ID** aus Beds24 eintragen.

> Hat ein Partner ein **eigenes** Beds24-Konto, kann pro Unterkunft ein eigener
> API-Token im Feld „Eigener API-Token" hinterlegt werden.

### Zum Ausprobieren ohne echte Daten

`BEDS24_DEMO=true` setzen → alle Unterkünfte zeigen realistische Beispielpreise und
sind test-buchbar (es wird keine echte Buchung erstellt). Für den Livebetrieb wieder
auf `false`.

## Umgebungsvariablen

Siehe [`.env.example`](./.env.example). Wichtigste: `DATABASE_URL`, `ADMIN_PASSWORD`,
`SESSION_SECRET` und die `BEDS24_*`-Variablen.

## Lokal starten

```bash
npm install
# .env.example nach .env kopieren und ausfüllen (mind. DATABASE_URL)
BEDS24_DEMO=true npm start   # http://localhost:3000
```

## Deployment (Railway)

Die App startet mit `npm start` (`node server.js`) und legt die DB-Tabellen beim
ersten Start selbst an (inkl. der neuen Buchungs-Spalten — bestehende Daten bleiben
erhalten). Nach dem Push ins GitHub-Repo `FSCreative/valuero` deployt Railway
automatisch. Die `BEDS24_*`-Variablen in Railway unter **Variables** setzen.

## Aufbau

- `server.js` — komplette App: Styles, öffentliche Views, Admin-CMS, DB-Layer,
  Routing, Buchungs-API (`/api/search`, `/api/quote/:id`, `/api/calendar/:id`,
  `/api/book`).
- `beds24.js` — Beds24-API-v2-Client: Token-Management, Preise/Verfügbarkeit
  (`/inventory/rooms/offers` + `/calendar`), Buchung (`POST /bookings`), Demo-Modus.
- `test/` — Offline-Testharness (`harness.js`) und Vorschau-Generator (`preview.js`).

> Hinweis: Die Feld-Namen der Beds24-`offers`-Antwort können je nach Konto-Setup
> leicht abweichen. `beds24.js` parst tolerant; die Stelle ist dort kommentiert und
> lässt sich bei Bedarf mit den echten Zugangsdaten feinjustieren.
