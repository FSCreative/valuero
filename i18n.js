// VALUERO — internationalisation (DE default, EN, NL).
//
// Design (kept deliberately cookie-free: Valuero sets no cookies besides the admin session):
//  * German stays at the root (/unterkuenfte). English lives under /en/…, Dutch under /nl/….
//    The URL carries the language, so it is bookmarkable, crawlable (hreflang) and needs no storage.
//  * A middleware strips the prefix, remembers the language in AsyncLocalStorage, and wraps
//    res.send / res.json / res.redirect so that HTML for EN/NL is translated on the way out and
//    internal links get the language prefix.
//  * UI strings live in the tables below as   "Deutsch": ["English", "Nederlands"].
//    Text that is not in a table (partner/CMS content, legal texts) simply stays German.
//  * Strings used by the inline browser scripts live in JS (exposed to the page as window.__T).
const { AsyncLocalStorage } = require("async_hooks");

const LANGS = ["de", "en", "nl"];
const DEFAULT = "de";
const LANG_LABEL = { de: "Deutsch", en: "English", nl: "Nederlands" };
const OG_LOCALE = { de: "de_AT", en: "en_GB", nl: "nl_NL" };
const IN_LANGUAGE = { de: "de-AT", en: "en", nl: "nl" };
const NUM_LOCALE = { de: "de-AT", en: "en-GB", nl: "nl-NL" };

const als = new AsyncLocalStorage();
const store = () => als.getStore() || null;
const getLang = () => (als.getStore() || {}).lang || DEFAULT;

// Paths that are never language-prefixed.
const NO_PREFIX = /^\/(admin|img|api|favicon\.svg|sitemap\.xml|robots\.txt)(\/|\?|#|$)/;
function localizePath(p, lang) {
  lang = lang || getLang();
  if (lang === DEFAULT || typeof p !== "string" || !p.startsWith("/") || p.startsWith("//")) return p;
  if (NO_PREFIX.test(p)) return p;
  if (/^\/(en|nl)(\/|\?|#|$)/.test(p)) return p;
  return "/" + lang + (p === "/" ? "/" : p);
}

/* ------------------------------------------------------------------ */
/* UI strings (server-rendered HTML: text nodes + some attributes)      */
/* ------------------------------------------------------------------ */
const UI = {
  // ---- navigation / footer ----
  "Home": ["Home", "Home"],
  "Unterkünfte": ["Accommodations", "Accommodaties"],
  "Gastronomie": ["Dining", "Eten & drinken"],
  "Veranstaltungen": ["Events", "Evenementen"],
  "Über Valuero": ["About Valuero", "Over Valuero"],
  "Partner werden": ["Become a partner", "Partner worden"],
  "Menü": ["Menu", "Menu"],
  "Gastro": ["Dining", "Eten"],
  "Events": ["Events", "Evenementen"],
  "Über": ["About", "Over"],
  "Hauptnavigation": ["Main navigation", "Hoofdnavigatie"],
  "Entdecken": ["Discover", "Ontdekken"],
  "Entdecken →": ["Discover →", "Ontdekken →"],
  "Beliebte Unterkünfte": ["Popular accommodations", "Populaire accommodaties"],
  "Ferienwohnung Montafon": ["Holiday apartment Montafon", "Vakantieappartement Montafon"],
  "Chalet Montafon": ["Chalet Montafon", "Chalet Montafon"],
  "Appartement Gaschurn": ["Apartment Gaschurn", "Appartement Gaschurn"],
  "Ski-in-Ski-out Montafon": ["Ski-in/ski-out Montafon", "Ski-in-ski-out Montafon"],
  "Ferienwohnung St. Gallenkirch": ["Holiday apartment St. Gallenkirch", "Vakantieappartement St. Gallenkirch"],
  "Urlaub im Montafon": ["Holidays in the Montafon", "Vakantie in het Montafon"],
  "Skiurlaub Montafon": ["Ski holiday Montafon", "Skivakantie Montafon"],
  "Wanderurlaub Montafon": ["Hiking holiday Montafon", "Wandelvakantie Montafon"],
  "Familienurlaub Montafon": ["Family holiday Montafon", "Gezinsvakantie Montafon"],
  "Wellnessurlaub Montafon": ["Wellness holiday Montafon", "Wellnessvakantie Montafon"],
  "Sommerurlaub Montafon": ["Summer holiday Montafon", "Zomervakantie Montafon"],
  "Rechtliches": ["Legal", "Juridisch"],
  "AGB": ["Terms & Conditions", "Algemene voorwaarden"],
  "Datenschutz": ["Privacy policy", "Privacybeleid"],
  "Impressum": ["Legal notice", "Colofon"],
  "Kontakt": ["Contact", "Contact"],
  "Nach oben scrollen": ["Scroll to top", "Naar boven scrollen"],
  "Brotkrumen": ["Breadcrumbs", "Kruimelpad"],
  "Nicht gefunden –": ["Not found –", "Niet gevonden –"],
  "zur Startseite": ["back to the home page", "terug naar de startpagina"],
  "Serverfehler. Bitte später erneut versuchen.": ["Server error. Please try again later.", "Serverfout. Probeer het later opnieuw."],

  // ---- home ----
  "Alle Unterkünfte ansehen": ["View all accommodations", "Alle accommodaties bekijken"],
  "Willkommen": ["Welcome", "Welkom"],
  "Dein Urlaub. Regional kuratiert.": ["Your holiday. Regionally curated.", "Jouw vakantie. Regionaal samengesteld."],
  "Beliebte Suchen": ["Popular searches", "Populaire zoekopdrachten"],
  "Finde deinen Urlaub im Montafon": ["Find your holiday in the Montafon", "Vind jouw vakantie in het Montafon"],
  "Unterkunftstypen": ["Accommodation types", "Accommodatietypen"],
  "Urlaubsarten": ["Types of holiday", "Soorten vakantie"],
  "Orte": ["Places", "Plaatsen"],
  "Genuss & Events": ["Food & events", "Genieten & evenementen"],

  // ---- CMS defaults (used when the admin has not changed the seeded text) ----
  "Dein Urlaubsplatz im Hochmontafon finden.": ["Find your holiday spot in the Hochmontafon.", "Vind jouw vakantieplek in het Hochmontafon."],
  "Sorgfältig ausgewählte Unterkünfte, Gastronomie und Veranstaltungen – mitten im Hochmontafon.": ["Carefully selected accommodations, dining and events – right in the heart of the Hochmontafon.", "Zorgvuldig geselecteerde accommodaties, horeca en evenementen – midden in het Hochmontafon."],
  "Valuero ist deine Tourismusplattform im Hochmontafon. Wir bringen Gäste und regionale Partner zusammen – einfach, persönlich und mit echtem Bergpanorama.": ["Valuero is your tourism platform in the Hochmontafon. We bring guests and regional partners together – simple, personal and with a genuine mountain panorama.", "Valuero is jouw toerismeplatform in het Hochmontafon. Wij brengen gasten en regionale partners samen – eenvoudig, persoonlijk en met een echt bergpanorama."],
  "Ausgewählte Unterkünfte aller Art für deinen Traumurlaub im Hochmontafon.": ["Hand-picked accommodations of every kind for your dream holiday in the Hochmontafon.", "Geselecteerde accommodaties van allerlei soort voor jouw droomvakantie in het Hochmontafon."],
  "Essen & Trinken oder beim gemütlichen Kaffee das Bergpanorama genießen.": ["Eat & drink or enjoy the mountain panorama over a cosy coffee.", "Eten & drinken of genieten van het bergpanorama bij een gezellige koffie."],
  "Wohin während deinem Aufenthalt im Hochmontafon.": ["Where to go during your stay in the Hochmontafon.", "Waar naartoe tijdens je verblijf in het Hochmontafon."],
  "Finde deinen perfekten Urlaubsspot.": ["Find your perfect holiday spot.", "Vind jouw perfecte vakantieplek."],
  "Wir haben da was für euch.": ["We have something for you.", "Wij hebben iets voor jullie."],
  "Unsere Partner bieten alle einen Mindeststandard: Parkplätze, WiFi, Nichtraucher im Haus und TV. Einfach auf den Unterkunftsnamen klicken und direkt auf der jeweiligen Website buchen – so garantieren wir immer die besten Preise. Die Bewertungen basieren auf dem Durchschnitt mehrerer Online-Portale.": ["All our partners offer a minimum standard: parking, Wi-Fi, non-smoking house and TV. Simply click the accommodation name and book directly on its website – that way we always guarantee the best prices. Ratings are based on the average of several online portals.", "Al onze partners bieden een minimumstandaard: parkeerplaats, wifi, rookvrij huis en tv. Klik gewoon op de naam van de accommodatie en boek direct op de betreffende website – zo garanderen we altijd de beste prijzen. De beoordelingen zijn gebaseerd op het gemiddelde van meerdere online portalen."],
  "Hunger oder Durst?": ["Hungry or thirsty?", "Honger of dorst?"],
  "Essen & Trinken oder beim gemütlichen Kaffee das Bergpanorama genießen – unsere gastronomischen Partner im Hochmontafon.": ["Eat & drink or enjoy the mountain panorama over a cosy coffee – our dining partners in the Hochmontafon.", "Eten & drinken of genieten van het bergpanorama bij een gezellige koffie – onze horecapartners in het Hochmontafon."],
  "Wohin im Hochmontafon.": ["Where to go in the Hochmontafon.", "Waar naartoe in het Hochmontafon."],
  "Veranstaltungen, Feste und Highlights während deinem Aufenthalt. Du veranstaltest selbst etwas? Reiche dein Event ein – nach kurzer Prüfung erscheint es hier.": ["Events, festivals and highlights during your stay. Organising something yourself? Submit your event – after a short review it will appear here.", "Evenementen, feesten en hoogtepunten tijdens je verblijf. Organiseer je zelf iets? Dien je evenement in – na een korte controle verschijnt het hier."],
  "Was ist Valuero?": ["What is Valuero?", "Wat is Valuero?"],
  "Valu = Vallüla – der markante Berg am Talende. ero = Luft – die reinste Bergluft im Montafon.": ["Valu = Vallüla – the striking mountain at the end of the valley. ero = air – the purest mountain air in the Montafon.", "Valu = Vallüla – de markante berg aan het einde van het dal. ero = lucht – de zuiverste berglucht van het Montafon."],
  "Deine neue Tourismusplattform im Hochmontafon. Website, Buchungsportal, Marketing – all das bietet Valuero.": ["Your new tourism platform in the Hochmontafon. Website, booking portal, marketing – Valuero offers it all.", "Jouw nieuwe toerismeplatform in het Hochmontafon. Website, boekingsportaal, marketing – Valuero biedt het allemaal."],
  "Einfach. Preiswert. Support.": ["Simple. Affordable. Support.", "Eenvoudig. Voordelig. Support."],
  "Wir übernehmen alles für dich: Vom Design der Website über die Einrichtung der Buchungsplattform bis hin zum laufenden Support und der Bewerbung. Und noch viel besser: alles zum Pauschalpreis!": ["We take care of everything for you: from the website design and setting up the booking platform to ongoing support and promotion. And even better: all for a flat fee!", "Wij nemen alles uit handen: van het ontwerp van de website en het inrichten van het boekingsplatform tot doorlopende support en promotie. En nog beter: alles voor een vaste prijs!"],
  "Marketing. Machen. Wir.": ["Marketing. Done. By us.", "Marketing. Doen. Wij."],
  "Wir bewerben unser Portal online sowie offline, um allen Kunden einen Mehrwert zu bieten – ohne dass eigenes Geld für Werbung eingesetzt werden muss.": ["We promote our portal online and offline to add value for all customers – without you having to spend your own money on advertising.", "Wij promoten ons portaal online en offline om alle klanten meerwaarde te bieden – zonder dat je zelf geld aan reclame hoeft uit te geven."],

  // ---- page titles / meta descriptions ----
  "Urlaub im Montafon – Ferienwohnungen, Chalets & Appartements | VALUERO": ["Holidays in the Montafon – Holiday apartments, chalets & apartments | VALUERO", "Vakantie in het Montafon – Vakantieappartementen, chalets & appartementen | VALUERO"],
  "Unterkünfte im Montafon – Ferienwohnungen & Chalets buchen | VALUERO": ["Accommodations in the Montafon – Book holiday apartments & chalets | VALUERO", "Accommodaties in het Montafon – Vakantieappartementen & chalets boeken | VALUERO"],
  "Unterkünfte | VALUERO": ["Accommodations | VALUERO", "Accommodaties | VALUERO"],
  "Gastronomie | VALUERO": ["Dining | VALUERO", "Eten & drinken | VALUERO"],
  "Veranstaltungen im Montafon – Feste, Konzerte & Highlights | VALUERO": ["Events in the Montafon – Festivals, concerts & highlights | VALUERO", "Evenementen in het Montafon – Feesten, concerten & hoogtepunten | VALUERO"],
  "Über Valuero – Tourismusplattform im Hochmontafon | VALUERO": ["About Valuero – Tourism platform in the Hochmontafon | VALUERO", "Over Valuero – Toerismeplatform in het Hochmontafon | VALUERO"],
  "Impressum | VALUERO": ["Legal notice | VALUERO", "Colofon | VALUERO"],
  "Datenschutz | VALUERO": ["Privacy policy | VALUERO", "Privacybeleid | VALUERO"],
  "AGB | VALUERO": ["Terms & Conditions | VALUERO", "Algemene voorwaarden | VALUERO"],
  "Unterkünfte im Montafon: Ferienwohnungen, Chalets & Appartements mit tagesaktuellen Preisen. Reisedaten wählen, vergleichen und viele direkt online buchen.": ["Accommodations in the Montafon: holiday apartments, chalets & apartments with up-to-date prices. Choose your dates, compare and book many of them directly online.", "Accommodaties in het Montafon: vakantieappartementen, chalets & appartementen met actuele prijzen. Kies je reisdata, vergelijk en boek er veel direct online."],
  "Unterkünfte Montafon, Ferienwohnung Montafon, Chalet Montafon, Appartement Gaschurn, buchen": ["Accommodations Montafon, holiday apartment Montafon, chalet Montafon, apartment Gaschurn, book", "Accommodaties Montafon, vakantieappartement Montafon, chalet Montafon, appartement Gaschurn, boeken"],
  "Gastronomie im Hochmontafon: Restaurants, Cafés, Konditoreien und Pizzerias in Gaschurn und Umgebung – regionale Partner auf VALUERO.": ["Dining in the Hochmontafon: restaurants, cafés, pastry shops and pizzerias in Gaschurn and the surrounding area – regional partners on VALUERO.", "Eten & drinken in het Hochmontafon: restaurants, cafés, banketbakkers en pizzeria's in Gaschurn en omgeving – regionale partners op VALUERO."],
  "Gastronomie Montafon, Restaurant Gaschurn, Café Montafon, Pizzeria Gaschurn": ["Dining Montafon, restaurant Gaschurn, café Montafon, pizzeria Gaschurn", "Eten & drinken Montafon, restaurant Gaschurn, café Montafon, pizzeria Gaschurn"],
  "Veranstaltungen im Montafon: Feste, Zeltfeste, Konzerte und Highlights in Gaschurn und im Hochmontafon – jetzt entdecken.": ["Events in the Montafon: festivals, tent parties, concerts and highlights in Gaschurn and the Hochmontafon – discover them now.", "Evenementen in het Montafon: feesten, tentfeesten, concerten en hoogtepunten in Gaschurn en het Hochmontafon – ontdek ze nu."],
  "Veranstaltungen Montafon, Events Gaschurn, Feste Montafon, Zeltfest": ["Events Montafon, events Gaschurn, festivals Montafon, tent party", "Evenementen Montafon, evenementen Gaschurn, feesten Montafon, tentfeest"],
  "Was ist VALUERO? Deine Tourismusplattform im Hochmontafon – Website, Buchungsportal und Marketing für Unterkünfte und Gastronomie.": ["What is VALUERO? Your tourism platform in the Hochmontafon – website, booking portal and marketing for accommodations and dining.", "Wat is VALUERO? Jouw toerismeplatform in het Hochmontafon – website, boekingsportaal en marketing voor accommodaties en horeca."],

  // ---- search bar / booking tool ----
  "📅 Anreise": ["📅 Check-in", "📅 Aankomst"],
  "📅 Abreise": ["📅 Check-out", "📅 Vertrek"],
  "Erwachsene": ["Adults", "Volwassenen"],
  "Kinder": ["Children", "Kinderen"],
  "Finden": ["Search", "Zoeken"],
  "Alter der Kinder (bei Anreise)": ["Age of children (at check-in)", "Leeftijd van de kinderen (bij aankomst)"],
  "Buchung": ["Booking", "Boeking"],
  "Sichere Buchung über VALUERO": ["Secure booking via VALUERO", "Veilig boeken via VALUERO"],
  "Schließen": ["Close", "Sluiten"],
  "Anrede": ["Title", "Aanhef"],
  "Herr": ["Mr", "Dhr."],
  "Frau": ["Ms", "Mevr."],
  "Divers": ["Other", "Anders"],
  "Vorname *": ["First name *", "Voornaam *"],
  "Nachname *": ["Last name *", "Achternaam *"],
  "E-Mail *": ["Email *", "E-mail *"],
  "Telefon": ["Phone", "Telefoon"],
  "Anmerkungen (optional)": ["Notes (optional)", "Opmerkingen (optioneel)"],
  "z. B. späte Anreise, Kinderbett …": ["e.g. late arrival, cot …", "bijv. late aankomst, kinderbed …"],
  "Ich akzeptiere die": ["I accept the", "Ik accepteer de"],
  "Abbrechen": ["Cancel", "Annuleren"],
  "Jetzt verbindlich buchen": ["Book now (binding)", "Nu bindend boeken"],
  "⚙︎ Filter & Sortierung": ["⚙︎ Filters & sorting", "⚙︎ Filters & sortering"],
  "Filter": ["Filters", "Filters"],
  "Sortierung": ["Sorting", "Sortering"],
  "Empfohlen": ["Recommended", "Aanbevolen"],
  "Preis: aufsteigend": ["Price: low to high", "Prijs: oplopend"],
  "Preis: absteigend": ["Price: high to low", "Prijs: aflopend"],
  "Unterkunftstyp": ["Accommodation type", "Type accommodatie"],
  "Ort": ["Location", "Locatie"],
  "Preis / Nacht": ["Price / night", "Prijs / nacht"],
  "egal": ["any", "maakt niet uit"],
  "Ausstattung": ["Amenities", "Voorzieningen"],
  "Alle": ["All", "Alle"],
  "Ski-in-Ski-out Gaschurn": ["Ski-in/ski-out Gaschurn", "Ski-in-ski-out Gaschurn"],
  "Lädt…": ["Loading…", "Laden…"],
  "Lädt Unterkünfte…": ["Loading accommodations…", "Accommodaties laden…"],
  "Art": ["Type", "Soort"],
  "Angebot": ["Offering", "Aanbod"],
  "Annehmlichkeiten": ["Amenities", "Voorzieningen"],
  "Keine Einträge für diese Auswahl.": ["No entries for this selection.", "Geen vermeldingen voor deze selectie."],
  "Direkt buchen →": ["Book direct →", "Direct boeken →"],
  "Details & buchen →": ["Details & booking →", "Details & boeken →"],
  "Mehr erfahren →": ["Learn more →", "Meer informatie →"],
  "Anzeige · Liefer-Partner": ["Ad · Delivery partner", "Advertentie · Bezorgpartner"],
  "Lieber liefern lassen?": ["Prefer to have it delivered?", "Liever laten bezorgen?"],
  "Bestell dein Essen online im Montafon –": ["Order your food online in the Montafon –", "Bestel je eten online in het Montafon –"],
  "Lieferung oder Abholung": ["delivery or pick-up", "bezorging of afhalen"],
  "bei lokalen Restaurants.": ["from local restaurants.", "bij lokale restaurants."],
  "Jetzt bei kochdu.at bestellen →": ["Order at kochdu.at now →", "Nu bestellen bij kochdu.at →"],
  "Zu kochdu.at – Essen bestellen im Montafon": ["To kochdu.at – order food in the Montafon", "Naar kochdu.at – eten bestellen in het Montafon"],

  // ---- feature categories & labels ----
  "Beliebt": ["Popular", "Populair"],
  "Küche & Verpflegung": ["Kitchen & meals", "Keuken & maaltijden"],
  "Wellness & Freizeit": ["Wellness & leisure", "Wellness & vrije tijd"],
  "Lage & Aussicht": ["Location & views", "Ligging & uitzicht"],
  "Außenbereich": ["Outdoor area", "Buitenruimte"],
  "Komfort & Technik": ["Comfort & technology", "Comfort & techniek"],
  "Parken & Anreise": ["Parking & arrival", "Parkeren & aankomst"],
  "Familie & Barrierefreiheit": ["Family & accessibility", "Gezin & toegankelijkheid"],
  "WLAN": ["Wi-Fi", "Wifi"],
  "WiFi": ["Wi-Fi", "Wifi"],
  "Parkplatz": ["Parking", "Parkeerplaats"],
  "Haustiere erlaubt": ["Pets allowed", "Huisdieren toegestaan"],
  "Familienfreundlich": ["Family-friendly", "Gezinsvriendelijk"],
  "Nichtraucher": ["Non-smoking", "Rookvrij"],
  "Langzeit möglich": ["Long stays possible", "Langverblijf mogelijk"],
  "Küche": ["Kitchen", "Keuken"],
  "Geschirrspüler": ["Dishwasher", "Vaatwasser"],
  "Kaffeemaschine": ["Coffee machine", "Koffiemachine"],
  "Backofen": ["Oven", "Oven"],
  "Mikrowelle": ["Microwave", "Magnetron"],
  "Frühstück": ["Breakfast", "Ontbijt"],
  "Frühstücksservice": ["Breakfast service", "Ontbijtservice"],
  "Sauna": ["Sauna", "Sauna"],
  "Dampfbad": ["Steam bath", "Stoombad"],
  "Wellness / Spa": ["Wellness / spa", "Wellness / spa"],
  "Pool": ["Pool", "Zwembad"],
  "Whirlpool": ["Hot tub", "Whirlpool"],
  "Fitnessraum": ["Fitness room", "Fitnessruimte"],
  "Ski In & Out": ["Ski-in/ski-out", "Ski-in-ski-out"],
  "Skiraum": ["Ski room", "Skiruimte"],
  "Bergblick": ["Mountain view", "Uitzicht op de bergen"],
  "Zentrale Lage": ["Central location", "Centrale ligging"],
  "Ruhige Lage": ["Quiet location", "Rustige ligging"],
  "Garten": ["Garden", "Tuin"],
  "Balkon / Terrasse": ["Balcony / terrace", "Balkon / terras"],
  "Grillplatz": ["BBQ area", "Barbecueplek"],
  "Liegestühle": ["Sun loungers", "Ligstoelen"],
  "TV": ["TV", "TV"],
  "Smart-TV": ["Smart TV", "Smart-tv"],
  "Klimaanlage": ["Air conditioning", "Airconditioning"],
  "Heizung": ["Heating", "Verwarming"],
  "Kamin": ["Fireplace", "Open haard"],
  "Waschmaschine": ["Washing machine", "Wasmachine"],
  "Trockner": ["Dryer", "Droger"],
  "Föhn": ["Hairdryer", "Haardroger"],
  "Safe": ["Safe", "Kluis"],
  "Tiefgarage": ["Underground garage", "Ondergrondse garage"],
  "Kostenlose Parkplätze": ["Free parking", "Gratis parkeren"],
  "E-Ladestation": ["EV charging station", "Oplaadpunt voor elektrische auto's"],
  "Kinderbett": ["Cot", "Kinderbed"],
  "Hochstuhl": ["High chair", "Kinderstoel"],
  "Spielplatz": ["Playground", "Speeltuin"],
  "Barrierefrei": ["Wheelchair accessible", "Toegankelijk"],
  "Aufzug": ["Lift", "Lift"],

  // ---- types / badges / tags that appear in the seeded partner data ----
  "Ferienwohnung": ["Holiday apartment", "Vakantieappartement"],
  "Appartements": ["Apartments", "Appartementen"],
  "Appartement": ["Apartment", "Appartement"],
  "Chalet": ["Chalet", "Chalet"],
  "Bauernhof": ["Farm", "Boerderij"],
  "Eigene Gastro": ["Own restaurant", "Eigen horeca"],
  "Konditorei": ["Pastry shop", "Banketbakkerij"],
  "Café": ["Café", "Café"],
  "Pizzeria": ["Pizzeria", "Pizzeria"],
  "Restaurant": ["Restaurant", "Restaurant"],
  "Kaffee": ["Coffee", "Koffie"],
  "Kuchen": ["Cake", "Gebak"],
  "Drinks": ["Drinks", "Drankjes"],
  "Speisen": ["Dishes", "Gerechten"],
  "Pizza": ["Pizza", "Pizza"],
  "Pasta": ["Pasta", "Pasta"],
  "Gut Bürgerlich": ["Traditional home cooking", "Goed burgerlijk"],
  "Gut bürgerlich": ["Traditional home cooking", "Goed burgerlijk"],
  "Fleischgerichte": ["Meat dishes", "Vleesgerechten"],
  "Alles hausgemacht": ["Everything homemade", "Alles huisgemaakt"],
  "Urige Gaststube": ["Rustic tavern", "Rustieke gaststube"],
  "Pizza-Klassiker": ["Pizza classics", "Pizzaklassiekers"],
  "Zeltfest": ["Tent party", "Tentfeest"],
  "Konzert": ["Concert", "Concert"],

  // ---- events ----
  "Aktuell sind keine kommenden Veranstaltungen eingetragen.": ["There are currently no upcoming events listed.", "Er staan momenteel geen komende evenementen vermeld."],
  "Bereits gewesen": ["Past events", "Al geweest"],
  "Ein kleiner Rückblick auf vergangene Highlights.": ["A short look back at past highlights.", "Een kleine terugblik op voorbije hoogtepunten."],
  "Details ansehen →": ["View details →", "Details bekijken →"],
  "Mitmachen": ["Get involved", "Doe mee"],
  "Deine Veranstaltung einreichen": ["Submit your event", "Dien je evenement in"],
  "Reiche dein Event ein – nach kurzer Prüfung durch uns erscheint es auf dieser Seite.": ["Submit your event – after a short review by us it will appear on this page.", "Dien je evenement in – na een korte controle door ons verschijnt het op deze pagina."],
  "Danke! Deine Veranstaltung wurde eingereicht und erscheint nach kurzer Prüfung.": ["Thank you! Your event has been submitted and will appear after a short review.", "Bedankt! Je evenement is ingediend en verschijnt na een korte controle."],
  "Veranstaltungsname *": ["Event name *", "Naam van het evenement *"],
  "Kurze Beschreibung *": ["Short description *", "Korte beschrijving *"],
  "Veranstaltungsort *": ["Event location *", "Locatie van het evenement *"],
  "Art der Veranstaltung *": ["Type of event *", "Soort evenement *"],
  "z. B. Zeltfest, Konzert": ["e.g. tent party, concert", "bijv. tentfeest, concert"],
  "Datum (von) *": ["Date (from) *", "Datum (van) *"],
  "Bis (optional, bei mehrtägigen)": ["Until (optional, for multi-day events)", "Tot (optioneel, bij meerdaagse evenementen)"],
  "Uhrzeit / Zusatz (optional)": ["Time / additional info (optional)", "Tijd / toelichting (optioneel)"],
  "z. B. ab 18 Uhr": ["e.g. from 6 pm", "bijv. vanaf 18.00 uur"],
  "Website (optional)": ["Website (optional)", "Website (optioneel)"],
  "Deine E-Mail (optional, für Rückfragen)": ["Your email (optional, for questions)", "Jouw e-mail (optioneel, voor vragen)"],
  "Bilder (optional – mehrere möglich)": ["Images (optional – several possible)", "Afbeeldingen (optioneel – meerdere mogelijk)"],
  "Mit dem Absenden stimmst du zu, dass wir deine Angaben zur Prüfung und Veröffentlichung der Veranstaltung verarbeiten. Details in unserer": ["By submitting you agree that we process your details to review and publish the event. Details in our", "Door te verzenden ga je ermee akkoord dat wij je gegevens verwerken om het evenement te controleren en te publiceren. Details in onze"],
  "Datenschutzerklärung": ["privacy policy", "privacyverklaring"],
  ". Bitte nur Bilder einreichen, an denen du die Rechte hast.": [". Please only submit images you hold the rights to.", ". Dien alleen afbeeldingen in waarvan je de rechten hebt."],
  "Einreichen": ["Submit", "Indienen"],
  "Zur Veranstaltung ↗": ["To the event ↗", "Naar het evenement ↗"],
  "Termin:": ["Date:", "Datum:"],
  "Ort:": ["Location:", "Locatie:"],
  "Veranstaltung": ["Event", "Evenement"],
  "Aktuell keine Einträge – schau bald wieder vorbei.": ["No entries at the moment – check back soon.", "Momenteel geen vermeldingen – kom snel weer eens kijken."],
  "Weitere Veranstaltungen": ["More events", "Meer evenementen"],

  // ---- about ----
  "Für Partner": ["For partners", "Voor partners"],
  "Du betreibst eine Unterkunft oder Gastronomie im Montafon? Werde Teil von Valuero.": ["Do you run an accommodation or restaurant in the Montafon? Become part of Valuero.", "Heb je een accommodatie of horecazaak in het Montafon? Word onderdeel van Valuero."],
  "Jetzt anfragen": ["Enquire now", "Nu aanvragen"],

  // ---- detail / landing pages ----
  "Unterkunft": ["Accommodation", "Accommodatie"],
  "Zimmer": ["Rooms", "Kamers"],
  "Jetzt buchen": ["Book now", "Nu boeken"],
  "Reisedaten wählen und direkt online buchen.": ["Choose your travel dates and book directly online.", "Kies je reisdata en boek direct online."],
  "Reisedaten wählen und Verfügbarkeit prüfen.": ["Choose your travel dates and check availability.", "Kies je reisdata en controleer de beschikbaarheid."],
  "Verfügbarkeit & Preise": ["Availability & prices", "Beschikbaarheid & prijzen"],
  "Verfügbarkeit & Preise prüfen": ["Check availability & prices", "Beschikbaarheid & prijzen bekijken"],
  "Zur Website ↗": ["To the website ↗", "Naar de website ↗"],
  "Website": ["Website", "Website"],
  "Weitere Unterkünfte": ["More accommodations", "Meer accommodaties"],
  "Ebenfalls beliebt": ["Also popular", "Ook populair"],
  "FAQ": ["FAQ", "Veelgestelde vragen"],
  "Häufige Fragen": ["Frequently asked questions", "Veelgestelde vragen"],
  "Aktuell keine passenden Einträge – sieh dir alle": ["No matching entries at the moment – see all", "Momenteel geen passende vermeldingen – bekijk alle"],
  "an.": [".", "."],
  "Dieser Text liegt nur auf Deutsch vor und ist in dieser Fassung rechtsverbindlich.": ["This text is only available in German, and the German version is the legally binding one.", "Deze tekst is alleen in het Duits beschikbaar; alleen de Duitse versie is juridisch bindend."],

  // ---- 404 etc. ----
  "Menü öffnen": ["Open menu", "Menu openen"],
};

/* Substring replacements for text that is composed from CMS values + fixed words. */
const PARTS = [
  ["Urlaub im Montafon", "Holidays in the Montafon", "Vakantie in het Montafon"],
  [" im Hochmontafon.", ", Hochmontafon.", ", Hochmontafon."],
  ["Unterkünfte · ", "Accommodations · ", "Accommodaties · "],
  ["Urlaub · ", "Holidays · ", "Vakantie · "],
  ["Gastronomie · ", "Dining · ", "Eten & drinken · "],
  [" – Details ansehen", " – view details", " – details bekijken"],
  [" | Veranstaltung Montafon | VALUERO", " | Event Montafon | VALUERO", " | Evenement Montafon | VALUERO"],
  ["Mehrere Bilder möglich – werden im Detailfenster durchgeschaltet. Erstes Bild = Titelbild. Alternativ an", "Several images possible – they are shown one after another in the detail window. First image = cover image. Alternatively send them to", "Meerdere afbeeldingen mogelijk – ze worden in het detailvenster doorgebladerd. Eerste afbeelding = omslagafbeelding. Of stuur ze naar"],
  [" senden.", ".", "."],
];

/* Regex rules for strings with numbers. */
const RULES = [
  [/^(\d+) J\.$/, ["$1 yrs", "$1 jr."]],
  [/^· bis (\d+) Gäste$/, ["· up to $1 guests", "· max. $1 gasten"]],
];

/* ------------------------------------------------------------------ */
/* Strings used by the inline browser scripts (window.T)               */
/* ------------------------------------------------------------------ */
const JS = {
  "Wir prüfen Live-Verfügbarkeit und Preise": ["We are checking live availability and prices", "We controleren live beschikbaarheid en prijzen"],
  "Wir vergleichen die besten Angebote im Montafon": ["We are comparing the best offers in the Montafon", "We vergelijken de beste aanbiedingen in het Montafon"],
  "Wir holen die tagesaktuellen Preise": ["We are fetching today's prices", "We halen de actuele prijzen op"],
  "Kurzweil für die Wartezeit: tippe die Berge": ["A little fun while you wait: tap the mountains", "Tijdverdrijf tijdens het wachten: tik op de bergen"],
  "Einen Moment …": ["One moment …", "Een ogenblik …"],
  "Fehler beim Laden. Bitte erneut versuchen.": ["Error while loading. Please try again.", "Fout bij het laden. Probeer het opnieuw."],
  "{n} Unterkunft": ["{n} accommodation", "{n} accommodatie"],
  "{n} Unterkünfte": ["{n} accommodations", "{n} accommodaties"],
  "{n} Nächte": ["{n} nights", "{n} nachten"],
  "Keine Unterkünfte für diese Auswahl.": ["No accommodations for this selection.", "Geen accommodaties voor deze selectie."],
  "Keine Unterkunft passt exakt zu deinen Filtern – sieh dir die Vorschläge unten an.": ["No accommodation matches your filters exactly – have a look at the suggestions below.", "Geen enkele accommodatie past precies bij je filters – bekijk de suggesties hieronder."],
  "Passt nicht exakt zu deinen Filtern – aber einen Blick wert": ["Not an exact match for your filters – but worth a look", "Past niet precies bij je filters – maar wel een blik waard"],
  "Diese Unterkünfte fallen knapp aus deiner Auswahl. Vielleicht trotzdem das Richtige?": ["These accommodations just miss your selection. Maybe still the right one?", "Deze accommodaties vallen net buiten je selectie. Misschien toch de juiste?"],
  "{n} Zimmer": ["{n} rooms", "{n} kamers"],
  "außerhalb der Filter": ["outside your filters", "buiten je filters"],
  "Details & Bilder ansehen →": ["View details & photos →", "Details & foto's bekijken →"],
  "Zur Website →": ["To the website →", "Naar de website →"],
  "Auf Anfrage": ["On request", "Op aanvraag"],
  "Preise siehe Website": ["See website for prices", "Zie website voor prijzen"],
  "Termine wählen für Live-Preis": ["Choose dates for a live price", "Kies data voor een actuele prijs"],
  "Verfügbarkeit": ["Availability", "Beschikbaarheid"],
  "Preis derzeit nicht verfügbar": ["Price currently unavailable", "Prijs momenteel niet beschikbaar"],
  "Für diese Daten belegt": ["Booked for these dates", "Bezet voor deze data"],
  "Andere Daten": ["Other dates", "Andere data"],
  "ab {p} / Nacht": ["from {p} / night", "vanaf {p} / nacht"],
  "{p} gesamt · {n} Nächte": ["{p} total · {n} nights", "{p} totaal · {n} nachten"],
  "bis {p} / Nacht": ["up to {p} / night", "tot {p} / nacht"],
  "Jetzt buchen": ["Book now", "Nu boeken"],
  "m²": ["m²", "m²"],
  "{n} Schlafzi.": ["{n} bedrooms", "{n} slaapkamers"],
  "{n} Bäder": ["{n} bathrooms", "{n} badkamers"],
  "bis {n} Gäste": ["up to {n} guests", "max. {n} gasten"],
  "An-/Abreise": ["Check-in / check-out", "Aankomst / vertrek"],
  "Nächte": ["Nights", "Nachten"],
  "Gäste": ["Guests", "Gasten"],
  "{n} Erw.": ["{n} adults", "{n} volw."],
  "{n} Kind(er)": ["{n} child(ren)", "{n} kind(eren)"],
  "Zimmer": ["Room", "Kamer"],
  "Unterkunft": ["Accommodation", "Accommodatie"],
  "Endreinigung / Gebühren": ["Final cleaning / fees", "Eindschoonmaak / kosten"],
  "Gesamt": ["Total", "Totaal"],
  "gesamt": ["total", "totaal"],
  "Bitte zuerst An- und Abreise wählen.": ["Please choose check-in and check-out dates first.", "Kies eerst een aankomst- en vertrekdatum."],
  "Für diese Daten leider nicht verfügbar.": ["Unfortunately not available for these dates.", "Helaas niet beschikbaar voor deze data."],
  "Zimmer wählen": ["Choose a room", "Kies een kamer"],
  "Bitte Vorname, Nachname und E-Mail ausfüllen.": ["Please fill in first name, last name and email.", "Vul voornaam, achternaam en e-mail in."],
  "Bitte AGB & Datenschutz akzeptieren.": ["Please accept the Terms & Conditions and privacy policy.", "Accepteer de algemene voorwaarden en het privacybeleid."],
  "Wird gebucht…": ["Booking…", "Wordt geboekt…"],
  "Jetzt verbindlich buchen": ["Book now (binding)", "Nu bindend boeken"],
  "Buchung bestätigt!": ["Booking confirmed!", "Boeking bevestigd!"],
  "Buchungsnummer:": ["Booking number:", "Boekingsnummer:"],
  "Du erhältst in Kürze eine Bestätigung per E-Mail.": ["You will shortly receive a confirmation by email.", "Je ontvangt binnenkort een bevestiging per e-mail."],
  "(Demo-Modus – keine echte Buchung erstellt)": ["(Demo mode – no real booking created)", "(Demomodus – geen echte boeking aangemaakt)"],
  "Buchung fehlgeschlagen.": ["Booking failed.", "Boeking mislukt."],
  "Netzwerkfehler. Bitte erneut versuchen.": ["Network error. Please try again.", "Netwerkfout. Probeer het opnieuw."],
  "Verfügbare Zimmer": ["Available rooms", "Beschikbare kamers"],
  "Für diese Daten leider nicht verfügbar – bitte andere Daten wählen.": ["Unfortunately not available for these dates – please choose other dates.", "Helaas niet beschikbaar voor deze data – kies andere data."],
  "Wähle oben Anreise & Abreise für Live-Preise.": ["Choose check-in & check-out above for live prices.", "Kies hierboven aankomst & vertrek voor actuele prijzen."],
  "Preise & Buchung direkt über die Website der Unterkunft.": ["Prices & booking directly via the accommodation's website.", "Prijzen & boeken direct via de website van de accommodatie."],
  "Zur Veranstaltung ↗": ["To the event ↗", "Naar het evenement ↗"],
  "Titel": ["Cover", "Omslag"],
  "Bild entfernen": ["Remove image", "Afbeelding verwijderen"],
  "J.": ["yrs", "jr."],
  // rotating food words on the Gastronomie banner
  "Pizza 🍕": ["Pizza 🍕", "Pizza 🍕"],
  "Burger 🍔": ["Burger 🍔", "Burger 🍔"],
  "Döner 🌯": ["Kebab 🌯", "Döner 🌯"],
  "Sushi 🍣": ["Sushi 🍣", "Sushi 🍣"],
  "Pasta 🍝": ["Pasta 🍝", "Pasta 🍝"],
  "Griechisch 🥙": ["Greek 🥙", "Grieks 🥙"],
};

/* Labels that come back from the JSON API (price breakdown, errors, feature labels …). */
const API = {
  "Grundpreis": ["Base price", "Basisprijs"],
  "Kinder-Rabatt": ["Child discount", "Kinderkorting"],
  "Endreinigung": ["Final cleaning", "Eindschoonmaak"],
  "Gästetaxe": ["Tourist tax", "Toeristenbelasting"],
  "Kurtaxe": ["Tourist tax", "Toeristenbelasting"],
  "Zusatz": ["Extra", "Extra"],
  "Unterkunft nicht gefunden.": ["Accommodation not found.", "Accommodatie niet gevonden."],
  "Bitte gültige An- und Abreise wählen.": ["Please choose valid check-in and check-out dates.", "Kies een geldige aankomst- en vertrekdatum."],
  "Bitte Vorname, Nachname und E-Mail angeben.": ["Please enter first name, last name and email.", "Vul voornaam, achternaam en e-mail in."],
  "Bitte eine gültige E-Mail-Adresse angeben.": ["Please enter a valid email address.", "Vul een geldig e-mailadres in."],
  "Diese Unterkunft bietet keine Online-Buchung.": ["This accommodation does not offer online booking.", "Deze accommodatie biedt geen online boeking."],
  "Bitte ein Zimmer auswählen.": ["Please select a room.", "Selecteer een kamer."],
  "Für diese Daten leider nicht mehr verfügbar.": ["Unfortunately no longer available for these dates.", "Helaas niet meer beschikbaar voor deze data."],
  "Buchung fehlgeschlagen. Bitte später erneut versuchen.": ["Booking failed. Please try again later.", "Boeking mislukt. Probeer het later opnieuw."],
  "Buchung fehlgeschlagen.": ["Booking failed.", "Boeking mislukt."],
  "Preis konnte nicht geladen werden.": ["The price could not be loaded.", "De prijs kon niet worden geladen."],
  "Kalender konnte nicht geladen werden.": ["The calendar could not be loaded.", "De kalender kon niet worden geladen."],
  "Partner-Buchung abgelehnt.": ["Partner booking rejected.", "Partnerboeking geweigerd."],
};
const API_KEYS = new Set(["error", "label", "type", "badge"]);

/* ------------------------------------------------------------------ */
/* SEO landing pages (composed sentences) — per language              */
/* ------------------------------------------------------------------ */
// Named templates, {vars} are substituted. German is authoritative for de.
const SX = {
  default_desc: {
    de: "VALUERO – {tag} im Hochmontafon. Ferienwohnungen, Chalets & Appartements, Gastronomie und Veranstaltungen – mit Live-Preisen buchen.",
    en: "VALUERO – {tag} in the Hochmontafon. Holiday apartments, chalets & apartments, dining and events – book with live prices.",
    nl: "VALUERO – {tag} in het Hochmontafon. Vakantieappartementen, chalets & appartementen, horeca en evenementen – boek met actuele prijzen.",
  },
  acc_title: { de: "{label} {name} – jetzt buchen | VALUERO", en: "{label} {name} – book now | VALUERO", nl: "{label} {name} – nu boeken | VALUERO" },
  acc_h1: { de: "{label} {where}", en: "{label} {where}", nl: "{label} {where}" },
  acc_intro: {
    de: "{label} {where}: Entdecke handverlesene {labelLower} für {benefit}. Auf VALUERO vergleichst du Ausstattung und Lage, siehst tagesaktuelle Preise und buchst viele Unterkünfte direkt online.",
    en: "{label} {where}: discover hand-picked {labelLower} for {benefit}. On VALUERO you compare amenities and location, see up-to-date prices and book many accommodations directly online.",
    nl: "{label} {where}: ontdek zorgvuldig geselecteerde {labelLower} voor {benefit}. Op VALUERO vergelijk je voorzieningen en ligging, zie je actuele prijzen en boek je veel accommodaties direct online.",
  },
  acc_desc: {
    de: "{label} {where} ✓ handverlesen ✓ tagesaktuelle Preise ✓ direkt online buchen. Jetzt deine {one} im Hochmontafon finden.",
    en: "{label} {where} ✓ hand-picked ✓ up-to-date prices ✓ book directly online. Find your {one} in the Hochmontafon now.",
    nl: "{label} {where} ✓ zorgvuldig geselecteerd ✓ actuele prijzen ✓ direct online boeken. Vind nu jouw {one} in het Hochmontafon.",
  },
  acc_keywords: {
    de: "{label}, {one} {name}, Unterkunft {name}, Montafon, Hochmontafon, buchen",
    en: "{label}, {one} {name}, accommodation {name}, Montafon, Hochmontafon, book",
    nl: "{label}, {one} {name}, accommodatie {name}, Montafon, Hochmontafon, boeken",
  },
  acc_faq_q: { de: "Wie finde ich eine {one} {where}?", en: "How do I find a {one} {where}?", nl: "Hoe vind ik een {one} {where}?" },
  acc_faq_a: {
    de: "Gib oben deine Reisedaten ein, filtere nach Ausstattung und vergleiche verfügbare {labelLower} {where} mit tagesaktuellen Preisen.",
    en: "Enter your travel dates above, filter by amenities and compare available {labelLower} {where} with up-to-date prices.",
    nl: "Vul hierboven je reisdata in, filter op voorzieningen en vergelijk beschikbare {labelLower} {where} met actuele prijzen.",
  },
  acc_eyebrow: { de: "Unterkünfte · {name}", en: "Accommodations · {name}", nl: "Accommodaties · {name}" },
  urlaub_title: { de: "{h1} {where} – Unterkünfte & Tipps | VALUERO", en: "{h1} {where} – accommodations & tips | VALUERO", nl: "{h1} {where} – accommodaties & tips | VALUERO" },
  urlaub_desc: {
    de: "{h1} {where}: passende Unterkünfte mit tagesaktuellen Preisen, Tipps und Highlights. Jetzt planen und direkt online buchen.",
    en: "{h1} {where}: suitable accommodations with up-to-date prices, tips and highlights. Plan now and book directly online.",
    nl: "{h1} {where}: passende accommodaties met actuele prijzen, tips en hoogtepunten. Plan nu en boek direct online.",
  },
  urlaub_keywords: { de: "{h1}, {h1} {name}, Montafon, Unterkunft, buchen", en: "{h1}, {h1} {name}, Montafon, accommodation, book", nl: "{h1}, {h1} {name}, Montafon, accommodatie, boeken" },
  urlaub_faq_q: { de: "Wann ist die beste Zeit für {h1} {where}?", en: "When is the best time for a {h1Lower} {where}?", nl: "Wanneer is de beste tijd voor {h1Lower} {where}?" },
  urlaub_faq_a: {
    de: "Das Hochmontafon ist ganzjährig ein tolles Ziel – im Winter für Skifahren, im Sommer für Wandern und Bergtouren. Prüfe die Verfügbarkeit deiner Wunschunterkunft direkt online.",
    en: "The Hochmontafon is a great destination all year round – for skiing in winter, for hiking and mountain tours in summer. Check the availability of your preferred accommodation directly online.",
    nl: "Het Hochmontafon is het hele jaar door een geweldige bestemming – in de winter om te skiën, in de zomer om te wandelen en bergtochten te maken. Controleer direct online de beschikbaarheid van je favoriete accommodatie.",
  },
  urlaub_eyebrow: { de: "Urlaub · {name}", en: "Holidays · {name}", nl: "Vakantie · {name}" },
  urlaub_crumb: { de: "Urlaub", en: "Holidays", nl: "Vakantie" },
  gastro_title: { de: "{label} {name} – die besten Adressen | VALUERO", en: "{label} {name} – the best addresses | VALUERO", nl: "{label} {name} – de beste adressen | VALUERO" },
  gastro_desc: {
    de: "{label} {where}: {intro} Entdecke die besten gastronomischen Adressen im Hochmontafon.",
    en: "{label} {where}: {intro} Discover the best places to eat and drink in the Hochmontafon.",
    nl: "{label} {where}: {intro} Ontdek de beste adressen om te eten en te drinken in het Hochmontafon.",
  },
  gastro_keywords: { de: "{label}, {one} {name}, Gastronomie Montafon, essen {name}", en: "{label}, {one} {name}, dining Montafon, eat {name}", nl: "{label}, {one} {name}, eten & drinken Montafon, eten {name}" },
  gastro_eyebrow: { de: "Gastronomie · {name}", en: "Dining · {name}", nl: "Eten & drinken · {name}" },
  event_title: { de: "{label} im Montafon | VALUERO", en: "{label} in the Montafon | VALUERO", nl: "{label} in het Montafon | VALUERO" },
  event_h1: { de: "{label} im Hochmontafon", en: "{label} in the Hochmontafon", nl: "{label} in het Hochmontafon" },
  event_desc: {
    de: "{intro} Alle {labelLower} im Montafon auf einen Blick.",
    en: "{intro} All {labelLower} in the Montafon at a glance.",
    nl: "{intro} Alle {labelLower} in het Montafon in één oogopslag.",
  },
  event_keywords: { de: "{label}, Veranstaltungen Montafon, Events Gaschurn", en: "{label}, events Montafon, events Gaschurn", nl: "{label}, evenementen Montafon, evenementen Gaschurn" },
  faq1_q: { de: "Wie buche ich eine Unterkunft im Montafon?", en: "How do I book accommodation in the Montafon?", nl: "Hoe boek ik een accommodatie in het Montafon?" },
  faq1_a: {
    de: "Wähle auf VALUERO deine Reisedaten, vergleiche verfügbare Unterkünfte mit tagesaktuellen Preisen und buche viele davon direkt online – oder gehe auf die Website der Unterkunft.",
    en: "Choose your travel dates on VALUERO, compare available accommodations with up-to-date prices and book many of them directly online – or go to the accommodation's website.",
    nl: "Kies op VALUERO je reisdata, vergelijk beschikbare accommodaties met actuele prijzen en boek er veel direct online – of ga naar de website van de accommodatie.",
  },
  faq2_q: { de: "Sind die angezeigten Preise tagesaktuell?", en: "Are the prices shown up to date?", nl: "Zijn de getoonde prijzen actueel?" },
  faq2_a: {
    de: "Ja. Bei angebundenen Unterkünften siehst du live die aktuelle Verfügbarkeit und den Preis für deinen gewählten Zeitraum.",
    en: "Yes. For connected accommodations you see live availability and the price for your chosen period.",
    nl: "Ja. Bij aangesloten accommodaties zie je live de actuele beschikbaarheid en de prijs voor jouw gekozen periode.",
  },
  faq3_q: { de: "Welche Orte gehören zum Hochmontafon?", en: "Which villages belong to the Hochmontafon?", nl: "Welke dorpen horen bij het Hochmontafon?" },
  faq3_a: {
    de: "Zum Hochmontafon zählen unter anderem Gaschurn, Partenen, St. Gallenkirch und Garfrescha – alle mit direktem Zugang zu den Skigebieten und Wanderregionen.",
    en: "The Hochmontafon includes Gaschurn, Partenen, St. Gallenkirch and Garfrescha, among others – all with direct access to the ski areas and hiking regions.",
    nl: "Tot het Hochmontafon behoren onder meer Gaschurn, Partenen, St. Gallenkirch en Garfrescha – allemaal met directe toegang tot de skigebieden en wandelregio's.",
  },
};

// Per-slug labels for the SEO tables in server.js.
const SEO = {
  loc: {
    montafon: { where: ["in the Montafon", "in het Montafon"] },
    hochmontafon: { where: ["in the Hochmontafon", "in het Hochmontafon"] },
    gaschurn: { where: ["in Gaschurn", "in Gaschurn"] },
    "st-gallenkirch": { where: ["in St. Gallenkirch", "in St. Gallenkirch"] },
    partenen: { where: ["in Partenen", "in Partenen"] },
    garfrescha: { where: ["in Garfrescha", "in Garfrescha"] },
  },
  acc: {
    ferienwohnung: { label: ["Holiday apartments", "Vakantieappartementen"], one: ["holiday apartment", "vakantieappartement"], benefit: ["a flexible self-catering holiday", "een flexibele vakantie op eigen gelegenheid"] },
    appartement: { label: ["Apartments", "Appartementen"], one: ["apartment", "appartement"], benefit: ["modern comfort with your own kitchen", "modern comfort met eigen keuken"] },
    chalet: { label: ["Chalets", "Chalets"], one: ["chalet", "chalet"], benefit: ["rustic cosiness with plenty of privacy", "rustieke gezelligheid met veel privacy"] },
    ferienhaus: { label: ["Holiday homes", "Vakantiehuizen"], one: ["holiday home", "vakantiehuis"], benefit: ["having the whole house to yourself", "het hele huis voor jezelf"] },
    "ski-in-ski-out": { label: ["Ski-in/ski-out accommodations", "Ski-in-ski-out accommodaties"], one: ["ski-in/ski-out accommodation", "ski-in-ski-out accommodatie"], benefit: ["direct access to the slopes", "directe toegang tot de piste"] },
    bauernhof: { label: ["Farm holidays", "Vakanties op de boerderij"], one: ["farm stay", "boerderijverblijf"], benefit: ["nature at its purest and animals up close", "pure natuur en dieren van dichtbij"] },
    wellness: { label: ["Accommodations with wellness", "Accommodaties met wellness"], one: ["wellness accommodation", "wellness-accommodatie"], benefit: ["sauna, steam bath & relaxation", "sauna, stoombad & ontspanning"] },
    "mit-pool": { label: ["Accommodations with pool", "Accommodaties met zwembad"], one: ["accommodation with pool", "accommodatie met zwembad"], benefit: ["swimming fun after a day in the mountains", "zwemplezier na een dag in de bergen"] },
    haustierfreundlich: { label: ["Pet-friendly accommodations", "Huisdiervriendelijke accommodaties"], one: ["pet-friendly accommodation", "huisdiervriendelijke accommodatie"], benefit: ["a holiday with your four-legged friend", "een vakantie met je viervoeter"] },
    familienfreundlich: { label: ["Family-friendly accommodations", "Gezinsvriendelijke accommodaties"], one: ["family-friendly accommodation", "gezinsvriendelijke accommodatie"], benefit: ["a relaxed family holiday", "een ontspannen gezinsvakantie"] },
  },
  vac: {
    skiurlaub: { h1: ["Ski holiday", "Skivakantie"], intro: ["The Montafon is a winter dream: over 200 km of pistes, modern lifts and snow-sure slopes from Silvretta Montafon to Gargellen. From your accommodation straight onto the piste, in the evening to a cosy mountain hut – find your ski accommodation here with up-to-date prices.", "Het Montafon is een winterdroom: ruim 200 kilometer piste, moderne liften en sneeuwzekere hellingen van Silvretta Montafon tot Gargellen. Van je accommodatie direct de piste op, 's avonds naar een gezellige berghut – vind hier je skiaccommodatie met actuele prijzen."] },
    winterurlaub: { h1: ["Winter holiday", "Wintervakantie"], intro: ["Skiing, tobogganing, winter hiking or simply enjoying the snowy mountain panorama: winter in the Hochmontafon has something for everyone. Compare accommodations, see live prices and book many of them directly online.", "Skiën, sleeën, winterwandelen of gewoon genieten van het besneeuwde bergpanorama: de winter in het Hochmontafon heeft voor ieder wat wils. Vergelijk accommodaties, bekijk actuele prijzen en boek er veel direct online."] },
    wanderurlaub: { h1: ["Hiking holiday", "Wandelvakantie"], intro: ["From easy valley paths to high-alpine tours around Piz Buin and Vallüla: the Montafon is a hiker's paradise. Find the right accommodation as a base camp for your mountain tours.", "Van gemoedelijke dalwandelingen tot hoogalpiene tochten rond Piz Buin en Vallüla: het Montafon is een paradijs voor wandelaars. Vind de juiste accommodatie als basiskamp voor je bergtochten."] },
    sommerurlaub: { h1: ["Summer holiday", "Zomervakantie"], intro: ["Mountain air, mountain lakes and endless hiking trails – summer in the Hochmontafon is wonderfully cool and active. Here you will find holiday apartments and chalets for your summer holiday.", "Berglucht, bergmeren en eindeloze wandelroutes – de zomer in het Hochmontafon is heerlijk koel en actief. Hier vind je vakantieappartementen en chalets voor je zomervakantie."] },
    familienurlaub: { h1: ["Family holiday", "Gezinsvakantie"], intro: ["Child-friendly accommodations, safe hiking trails and plenty of space to play: the Montafon is ideal for a family holiday. We show you family-friendly holiday apartments with live prices.", "Kindvriendelijke accommodaties, veilige wandelpaden en volop ruimte om te spelen: het Montafon is ideaal voor een gezinsvakantie. Wij tonen je gezinsvriendelijke vakantieappartementen met actuele prijzen."] },
    wellnessurlaub: { h1: ["Wellness holiday", "Wellnessvakantie"], intro: ["Sauna, steam bath and mountain panorama: after an active day you relax in our wellness accommodations in the Hochmontafon. Compare now and book directly.", "Sauna, stoombad en bergpanorama: na een actieve dag ontspan je in onze wellness-accommodaties in het Hochmontafon. Vergelijk nu en boek direct."] },
    bergurlaub: { h1: ["Mountain holiday", "Bergvakantie"], intro: ["In the heart of the Hochmontafon mountains – at up to 1,500 m above sea level. Enjoy pure mountain air, panoramas and peace in a hand-picked accommodation.", "Midden in de bergen van het Hochmontafon – tot op 1.500 m hoogte. Geniet van pure berglucht, panorama en rust in een zorgvuldig geselecteerde accommodatie."] },
    gruppenreise: { h1: ["Group trips & large accommodations", "Groepsreizen & grote accommodaties"], intro: ["A larger group? In the Montafon you will find spacious holiday homes and apartments for families, friends and clubs – with room for many and live prices.", "Met een grotere groep? In het Montafon vind je ruime vakantiehuizen en appartementen voor families, vrienden en verenigingen – met plek voor velen en actuele prijzen."] },
    romantikurlaub: { h1: ["Romantic getaway", "Romantische vakantie"], intro: ["Just the two of you in the mountains: cosy chalets, open fires and starry skies above the Montafon. Find the perfect accommodation for your romantic break.", "Samen met z'n tweeën in de bergen: gezellige chalets, haardvuur en een sterrenhemel boven het Montafon. Vind de perfecte accommodatie voor jullie romantische uitje."] },
  },
  gastro: {
    restaurants: { label: ["Restaurants", "Restaurants"], one: ["restaurant", "restaurant"], intro: ["From classic Austrian to modern: the best restaurants in the Hochmontafon for your dinner after a day in the mountains.", "Van klassiek Oostenrijks tot modern: de beste restaurants van het Hochmontafon voor je diner na een dag in de bergen."] },
    cafes: { label: ["Cafés & pastry shops", "Cafés & banketbakkerijen"], one: ["café", "café"], intro: ["Coffee, homemade cakes and mountain views – the most beautiful cafés and pastry shops in the Montafon.", "Koffie, huisgemaakt gebak en bergpanorama – de mooiste cafés en banketbakkerijen van het Montafon."] },
    pizzeria: { label: ["Pizzerias", "Pizzeria's"], one: ["pizzeria", "pizzeria"], intro: ["Crispy pizza and Italian classics in the heart of the Montafon.", "Knapperige pizza en Italiaanse klassiekers midden in het Montafon."] },
  },
  event: {
    feste: { label: ["Festivals & tent parties", "Feesten & tentfeesten"], intro: ["Tent parties, village festivals and celebrations in the Hochmontafon – you won't miss a highlight here.", "Tentfeesten, dorpsfeesten en vieringen in het Hochmontafon – hier mis je geen hoogtepunt."] },
    konzerte: { label: ["Concerts & music", "Concerten & muziek"], intro: ["Live music and concerts in the Montafon.", "Livemuziek en concerten in het Montafon."] },
    sommer: { label: ["Summer events", "Zomerevenementen"], intro: ["What's on in the Montafon summer? All festivals, markets and highlights at a glance.", "Wat is er te doen in de Montafon-zomer? Alle feesten, markten en hoogtepunten in één oogopslag."] },
    winter: { label: ["Winter events", "Winterevenementen"], intro: ["Winter events, ski-hut parties and highlights in the Hochmontafon.", "Winterevenementen, skihutfeesten en hoogtepunten in het Hochmontafon."] },
  },
};

/* ------------------------------------------------------------------ */
/* Lookup helpers                                                      */
/* ------------------------------------------------------------------ */
const IDX = { en: 0, nl: 1 };
const decode = (s) => s.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
const encode = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const encodeAttr = (s) => encode(s).replace(/"/g, "&quot;");

function pickFrom(table, key, lang) {
  const e = table[key];
  return e ? e[IDX[lang]] : undefined;
}
function lookup(key, lang) {
  let v = pickFrom(UI, key, lang);
  if (v === undefined) v = pickFrom(JS, key, lang);
  if (v === undefined) v = pickFrom(API, key, lang);
  return v;
}

// Translate a plain (entity-decoded) string; returns undefined when nothing matched.
function translatePlain(text, lang) {
  const direct = lookup(text, lang);
  if (direct !== undefined) return direct;
  if (text.indexOf(" · ") !== -1) {
    let any = false;
    const pieces = text.split(" · ").map((p) => {
      const r = translatePlain(p, lang);
      if (r !== undefined) any = true;
      return r === undefined ? p : r;
    });
    if (any) return pieces.join(" · ");
  }
  for (const [re, tr] of RULES) if (re.test(text)) return text.replace(re, tr[IDX[lang]]);
  let out = text;
  let hit = false;
  // longest first so that specific fragments win over short ones
  for (const p of PARTS_SORTED) {
    if (out.includes(p[0])) {
      out = out.split(p[0]).join(p[IDX[lang] + 1]);
      hit = true;
    }
  }
  return hit ? out : undefined;
}
const PARTS_SORTED = PARTS.slice().sort((a, b) => b[0].length - a[0].length);

// Translate the HTML produced by the page templates.
function translateHtml(html, lang) {
  if (lang === DEFAULT || !IDX.hasOwnProperty(lang)) return html;
  // Plain (non-HTML) responses such as the error text.
  if (html.indexOf("<") === -1) {
    const r = translatePlain(decode(html.trim()), lang);
    return r === undefined ? html : encode(r);
  }
  const segs = html.split(/(<script\b[\s\S]*?<\/script>|<style\b[\s\S]*?<\/style>)/i);
  for (let i = 0; i < segs.length; i += 2) {
    let s = segs[i];
    // text nodes
    s = s.replace(/>([^<>]*[A-Za-zÄÖÜäöüß][^<>]*)</g, (m, txt) => {
      const lead = txt.match(/^\s*/)[0];
      const trail = txt.match(/\s*$/)[0];
      const core = decode(txt.trim().replace(/\s+/g, " "));
      const r = translatePlain(core, lang);
      return r === undefined ? m : ">" + lead + encode(r) + trail + "<";
    });
    // attributes
    s = s.replace(/(\s(?:placeholder|title|aria-label|alt|content))="([^"]*)"/g, (m, attr, val) => {
      if (!/[A-Za-zÄÖÜäöüß]/.test(val)) return m;
      const r = translatePlain(decode(val), lang);
      return r === undefined ? m : attr + '="' + encodeAttr(r) + '"';
    });
    // internal links / form targets get the language prefix (language switchers opt out via data-ls)
    s = s.replace(/<(a|form)\b[^>]*>/g, (tag) => {
      if (tag.indexOf("data-ls") !== -1) return tag;
      return tag.replace(/\b(href|action)="(\/[^"]*)"/, (m, attr, val) => attr + '="' + localizePath(val, lang) + '"');
    });
    segs[i] = s;
  }
  return segs.join("");
}

// Translate selected string fields of a JSON API payload.
function translateJson(v, lang) {
  if (lang === DEFAULT || !IDX.hasOwnProperty(lang)) return v;
  if (Array.isArray(v)) return v.map((x) => translateJson(x, lang));
  if (v && typeof v === "object") {
    const out = {};
    for (const k of Object.keys(v)) {
      const val = v[k];
      if (typeof val === "string" && API_KEYS.has(k)) {
        const r = lookup(val, lang);
        out[k] = r === undefined ? val : r;
        if (k === "type") out.typeDe = val; // filters compare against the German value
      } else out[k] = translateJson(val, lang);
    }
    return out;
  }
  return v;
}

// Named, parameterised sentence (SEO landing pages …).
function sx(key, vars, lang) {
  lang = lang || getLang();
  const t = SX[key];
  const tpl = (t && (t[lang] || t.de)) || key;
  return tpl.replace(/\{(\w+)\}/g, (m, k) => (vars && vars[k] != null ? vars[k] : m));
}
// Label of an SEO table entry in the current language (German = the entry itself).
function seoLabel(kind, entry, field, lang) {
  lang = lang || getLang();
  if (lang === DEFAULT) return entry[field];
  const e = SEO[kind] && SEO[kind][entry.slug];
  const v = e && e[field];
  return v ? v[IDX[lang]] : entry[field];
}
// Translate using the browser-script table only (e.g. "Zimmer" as a single room).
function tjs(text, lang) {
  lang = lang || getLang();
  if (lang === DEFAULT) return text;
  const v = pickFrom(JS, text, lang);
  return v === undefined ? text : v;
}
// Generic one-off string translation from the UI table (falls back to the German text).
function t(text, lang) {
  lang = lang || getLang();
  if (lang === DEFAULT) return text;
  const r = translatePlain(text, lang);
  return r === undefined ? text : r;
}

// ---- dates ----
const MONTHS = {
  de: ["Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  nl: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
};
const MONTHS_SHORT = {
  de: ["Jän", "Feb", "März", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  nl: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
};
const WEEKDAYS = {
  de: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
  en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  nl: ["zo", "ma", "di", "wo", "do", "vr", "za"],
};

/* ------------------------------------------------------------------ */
/* Browser bootstrap, language switcher, hreflang                      */
/* ------------------------------------------------------------------ */
function clientBootstrap(lang) {
  lang = lang || getLang();
  const dict = {};
  if (lang !== DEFAULT) for (const k of Object.keys(JS)) dict[k] = JS[k][IDX[lang]];
  const json = JSON.stringify(dict).replace(/</g, "\\u003c").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  return (
    "<script>window.__LANG=" + JSON.stringify(lang) + ";window.__BASE=" + JSON.stringify(lang === DEFAULT ? "" : "/" + lang) +
    ";window.__LOCALE=" + JSON.stringify(NUM_LOCALE[lang]) + ";window.__T=" + json +
    ";window.T=function(s,v){var t=(window.__T&&window.__T[s]);if(t==null)t=s;if(v)for(var k in v)t=t.split('{'+k+'}').join(v[k]);return t;};</script>"
  );
}

// Path + query of the current request without the language prefix (for the switcher).
function currentPath() {
  const s = store();
  return s && s.url ? s.url : "/";
}
function switcherHTML(extraClass) {
  const cur = getLang();
  const p = currentPath();
  const links = LANGS.map((l) => {
    const href = l === DEFAULT ? p : localizePath(p, l);
    const on = l === cur;
    return `<a href="${encodeAttr(href)}" data-ls hreflang="${l}" lang="${l}" title="${LANG_LABEL[l]}"${on ? ' aria-current="true" class="on"' : ""}>${l.toUpperCase()}</a>`;
  }).join("");
  // aria-label is intentionally trilingual so it is understood regardless of the page language
  return `<div class="lang-sw${extraClass ? " " + extraClass : ""}" role="group" aria-label="Sprache / Language / Taal">${links}</div>`;
}
function hreflangTags(origin) {
  const s = store();
  const path = s && s.path ? s.path : "/";
  const tags = LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${encodeAttr(origin + localizePath(path, l))}">`);
  tags.push(`<link rel="alternate" hreflang="x-default" href="${encodeAttr(origin + path)}">`);
  return tags.join("\n");
}

/* ------------------------------------------------------------------ */
/* Express middleware                                                  */
/* ------------------------------------------------------------------ */
function middleware(req, res, next) {
  let lang = DEFAULT;
  const m = /^\/(en|nl)(?=\/|$)/.exec(req.url.split("?")[0]);
  if (m) {
    lang = m[1];
    req.url = req.url.slice(m[0].length) || "/";
    if (req.url[0] !== "/") req.url = "/" + req.url; // "/en?x=1" → "/?x=1"
  }
  const bare = req.url.split("?")[0];
  // The admin area stays German; /en/admin is just /admin.
  if (/^\/admin(\/|$)/.test(bare)) lang = DEFAULT;
  // The JSON API follows the language of the page that calls it (?lang=, else Referer).
  if (/^\/api\//.test(bare)) {
    let q = null;
    const qm = /[?&]lang=(en|nl|de)\b/.exec(req.url);
    if (qm) q = qm[1];
    else {
      const ref = req.headers.referer || "";
      const rm = /^https?:\/\/[^/]+\/(en|nl)(?:\/|\?|#|$)/.exec(ref);
      q = rm ? rm[1] : null;
    }
    lang = q || DEFAULT;
  }
  req.lang = lang;
  const st = { lang, req, url: req.url, path: bare };

  if (lang !== DEFAULT) {
    const origSend = res.send.bind(res);
    res.send = function (body) {
      if (typeof body === "string") {
        const ct = String(res.get("Content-Type") || "");
        if (!ct || /text\/html/i.test(ct)) body = translateHtml(body, lang);
      }
      return origSend(body);
    };
    const origJson = res.json.bind(res);
    res.json = function (obj) {
      return origJson(translateJson(obj, lang));
    };
    const origRedirect = res.redirect.bind(res);
    res.redirect = function (a, b) {
      if (typeof a === "number") return origRedirect(a, localizePath(b, lang));
      return origRedirect(localizePath(a, lang));
    };
    res.setHeader("Content-Language", lang);
  }
  als.run(st, next);
}

module.exports = {
  LANGS, DEFAULT, LANG_LABEL, OG_LOCALE, IN_LANGUAGE, NUM_LOCALE,
  middleware, getLang, store, localizePath, translateHtml, translateJson, translatePlain,
  sx, seoLabel, t, tjs, clientBootstrap, switcherHTML, hreflangTags,
  MONTHS, MONTHS_SHORT, WEEKDAYS,
  _tables: { UI, JS, API, PARTS, RULES, SX, SEO },
};
