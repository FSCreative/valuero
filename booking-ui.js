// booking-ui.js — Styles und Browser-Skripte der Unterkunftssuche („Wohnung suchen“).
// ---------------------------------------------------------------------------
//  * PICKER_JS  : window.VB – Datumsbereich-Dialog (Pop-up, nie abgeschnitten, mobil als Vollbild-Sheet),
//                 Gäste-Dialog (Erwachsene/Kinder + Alter), Regel-Hinweis-Text, Suchleisten-Bindung (.vsb).
//  * SEARCH_JS  : Ergebnisliste unter /unterkuenfte (Live-Gesamtpreis, Hinweise, Alternativtermine,
//                 Übergabe an die Buchungsseite der VALUERO-Partner-Plattform, Alt-Buchungsdialog für Beds24/eigene API).
//  * DETAIL_JS  : Detailseite /unterkunft/:id – Buchungsbox, Belegungskalender, Preisaufstellung, Galerie.
// Alle Texte laufen über T() (i18n.js → JS-Tabelle), damit EN/NL mitübersetzt werden.
// Wichtig: Inhalte sind String.raw – keine Backticks und kein Dollar-Klammer-Muster im Browser-Code verwenden.
// Icons: icons.js (Lucide-Linien). Server-HTML nutzt icon(), die Browser-Skripte window.VI(name, opts) aus PICKER_JS.
// ---------------------------------------------------------------------------
const ICONS = require("./icons");
// Icons, die die Browser-Skripte brauchen (alles andere kommt fertig vom Server, z. B. featureLabels[].icon).
const CLIENT_ICONS = ["x", "chevron-left", "chevron-right", "minus", "plus", "map-pin", "calendar-days", "star", "external-link", "users", "house", "check", "images", "info", "arrow-right"];

const BOOKING_CSS = String.raw`
/* ---- Suchleiste (Pop-up-Auswahl statt nativer Felder) ---- */
.vsb{display:flex;align-items:stretch;gap:0;background:var(--surface);border:1px solid var(--line);border-radius:20px;padding:7px;box-shadow:var(--shadow);max-width:820px;margin-top:28px}
.vsb-f{flex:1 1 0;min-width:0;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:2px;padding:11px 18px;border:0;background:transparent;border-radius:14px;font:inherit;color:var(--ink);text-align:left;cursor:pointer;position:relative;transition:background .15s}
.vsb-f:hover,.vsb-f:focus-visible{background:var(--surface-2);outline:none}
.vsb-f+.vsb-f::before{content:"";position:absolute;left:0;top:14px;bottom:14px;width:1px;background:var(--line)}
.vsb-f .l{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:var(--muted)}
.vsb-f .v{font-size:15.5px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}
.vsb-f .v.ph{color:var(--muted);font-weight:500}
.vsb-dates{flex:1.6 1 0}
.vsb-go{flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;gap:8px;background:var(--accent);color:#fff;border:0;border-radius:15px;padding:0 30px;margin:5px;font:inherit;font-weight:600;font-size:15.5px;cursor:pointer;min-height:56px;box-shadow:0 10px 22px -12px rgba(31,106,73,.9);transition:background .2s,transform .2s}
.vsb-go:hover{background:var(--accent-2);transform:translateY(-1px)}
.vsb-go svg{width:17px;height:17px}
@media(max-width:680px){
  .vsb{flex-wrap:wrap;gap:8px;padding:10px}
  .vsb-f{flex:1 1 100%;border:1.5px solid var(--line);background:var(--surface-2);min-height:58px;padding:10px 14px}
  .vsb-f+.vsb-f::before{display:none}
  .vsb-f .v{font-size:17px}
  .vsb-go{flex:1 1 100%;margin:0}
}

/* ---- Dialog (Pop-up) ---- */
.vm{position:fixed;inset:0;z-index:200;display:none;align-items:center;justify-content:center;padding:16px;background:rgba(16,23,19,.55);backdrop-filter:blur(4px)}
.vm.open{display:flex}
.vm-box{background:var(--surface);color:var(--ink);border-radius:22px;box-shadow:var(--shadow);width:min(760px,100%);max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px);display:flex;flex-direction:column;overflow:hidden;animation:pop .22s ease}
.vm-box.sm{width:min(440px,100%)}
.vm-h{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:18px 22px;border-bottom:1px solid var(--line)}
.vm-h h2{font-size:22px}
.vm-h .sub{font-size:13.5px;color:var(--muted);margin-top:2px}
.vm-x{flex:0 0 auto;width:40px;height:40px;border-radius:999px;border:1px solid var(--line);background:var(--surface);font-size:22px;line-height:1;cursor:pointer;color:var(--ink);display:inline-flex;align-items:center;justify-content:center;padding:0;transition:background .15s,border-color .15s}
.vm-x:hover{background:var(--surface-2);border-color:var(--ink)}
.vm-b{padding:16px 22px;overflow:auto;-webkit-overflow-scrolling:touch;flex:1 1 auto}
.vm-f{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 22px;border-top:1px solid var(--line);background:var(--surface)}
.vm-f .sum{font-size:14px;color:var(--muted)}
.vm-f .sum b{color:var(--ink)}
.vm-f .acts{display:flex;gap:8px;flex:0 0 auto}
.vm-link{background:none;border:0;font:inherit;font-weight:600;color:var(--ink);text-decoration:underline;cursor:pointer;padding:10px 6px}
.vm-ok{background:var(--accent);color:#fff;border:0;border-radius:999px;padding:12px 22px;font:inherit;font-weight:600;cursor:pointer}
.vm-ok:disabled{opacity:.45;cursor:default}
@media(max-width:640px){
  .vm{padding:0;align-items:flex-end}
  .vm-box,.vm-box.sm{width:100%;max-height:100vh;max-height:100dvh;height:100%;border-radius:0;animation:sheetUp .3s cubic-bezier(.22,.61,.36,1)}
  .vm-box.sm{height:auto;max-height:92dvh;border-radius:22px 22px 0 0}
  .vm-f{padding-bottom:calc(14px + env(safe-area-inset-bottom))}
}

/* ---- Kalender ---- */
.rp-nav{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px}
.rp-nav button{width:40px;height:40px;border-radius:999px;border:1px solid var(--line);background:var(--surface);cursor:pointer;font-size:18px;color:var(--ink);display:inline-flex;align-items:center;justify-content:center;padding:0;transition:background .15s,border-color .15s}
.rp-nav button:hover:not(:disabled){background:var(--surface-2);border-color:var(--ink)}
.rp-nav button:disabled{opacity:.3;cursor:default}
.rp-months{display:grid;grid-template-columns:1fr 1fr;gap:28px}
.rp-m h3{font-size:17px;text-align:center;margin:0 0 10px;font-family:inherit;font-weight:700}
.rp-g{display:grid;grid-template-columns:repeat(7,1fr);row-gap:4px}
.rp-wd{font-size:11.5px;font-weight:700;color:var(--muted);text-align:center;padding:4px 0;text-transform:uppercase;letter-spacing:.06em}
.rp-d{position:relative;height:46px;border:0;background:transparent;font:inherit;font-size:15px;font-weight:600;color:var(--ink);cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1.1}
.rp-d span{position:relative;z-index:1;width:42px;height:42px;border-radius:999px;display:flex;flex-direction:column;align-items:center;justify-content:center}
.rp-d small{font-size:9.5px;font-weight:500;color:var(--muted);margin-top:1px}
.rp-d:hover:not(:disabled) span{box-shadow:inset 0 0 0 1.5px var(--ink)}
.rp-d:focus-visible{outline:none}
.rp-d:focus-visible span{box-shadow:inset 0 0 0 2px var(--accent)}
.rp-d:disabled{cursor:default;color:#b7bdb8}
.rp-d.busy:not(.start):not(.end):not(.h-in) span{text-decoration:line-through;color:#b7bdb8}
/* halbe An-/Abreisetage: h-in = ab hier belegt (unten rechts), h-out = bis hier belegt (oben links) */
.rp-d.h-in:not(.start):not(.end) span{background:linear-gradient(to bottom right,transparent calc(50% - .75px),#d3d9d1 calc(50% - .75px) calc(50% + .75px),#ececec calc(50% + .75px))}
.rp-d.h-out:not(.start):not(.end) span{background:linear-gradient(to bottom right,#ececec calc(50% - .75px),#d3d9d1 calc(50% - .75px) calc(50% + .75px),transparent calc(50% + .75px))}
.rp-d.h-in:not(.start):not(.end):disabled span{color:#9aa39d}
.rp-d.noarr:not(.in):not(.end) span{color:#9aa39d;font-weight:500}
.rp-d.in{background:#e6efe9}
.rp-d.start{background:linear-gradient(90deg,transparent 50%,#e6efe9 50%)}
.rp-d.end{background:linear-gradient(90deg,#e6efe9 50%,transparent 50%)}
.rp-d.start.end{background:transparent}
.rp-d.start span,.rp-d.end span{background:var(--ink);color:#fff}
.rp-d.start small,.rp-d.end small{color:rgba(255,255,255,.75)}
.rp-d.today span::after{content:"";position:absolute;bottom:5px;width:4px;height:4px;border-radius:2px;background:var(--accent)}
.rp-hint{display:flex;gap:10px;align-items:flex-start;background:#f6f1e4;border:1px solid #eadfc4;border-radius:14px;padding:10px 14px;font-size:14px;margin-bottom:12px;color:#5b4a22}
.rp-hint .ic{width:18px;height:18px;margin-top:1px;color:#8a6d2b}
.rp-legend{display:flex;flex-wrap:wrap;gap:14px;font-size:12.5px;color:var(--muted);margin-top:12px}
.rp-legend i{display:inline-block;width:12px;height:12px;border-radius:4px;margin-right:6px;vertical-align:-1px;border:1px solid var(--line)}
.rp-legend i.half{background:linear-gradient(to bottom right,#ececec 50%,#fff 50%)}
.rp-status{font-size:14px;color:var(--muted);margin:4px 0 10px;min-height:20px}
.rp-status b{color:var(--ink)}
.rp-status .rp-arr{margin:-2px 6px 0;color:var(--muted)}
.rp-inline .rp-months{gap:34px}
@media(max-width:640px){.rp-months{grid-template-columns:1fr;gap:18px}.rp-d{height:44px}.rp-d span{width:40px;height:40px}}

/* ---- Gäste-Dialog ---- */
.gs-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 0;border-bottom:1px solid var(--line)}
.gs-row:last-child{border-bottom:0}
.gs-row .t b{display:block;font-size:16px}
.gs-row .t span{font-size:13px;color:var(--muted)}
.gs-step{display:flex;align-items:center;gap:12px}
.gs-step button{width:38px;height:38px;border-radius:999px;border:1.5px solid var(--line);background:var(--surface);font-size:20px;line-height:1;cursor:pointer;color:var(--ink);display:inline-flex;align-items:center;justify-content:center;padding:0;transition:border-color .15s,color .15s}
.gs-step button:hover:not(:disabled){border-color:var(--accent);color:var(--accent)}
.gs-step button:disabled{opacity:.3;cursor:default}
.gs-step output{min-width:22px;text-align:center;font-weight:700;font-size:17px}
.gs-ages{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px;padding:6px 0 4px}
.gs-ages label{font-size:12.5px;color:var(--muted);display:flex;flex-direction:column;gap:4px}
.gs-ages select{border:1.5px solid var(--line);border-radius:10px;padding:9px 10px;font:inherit;font-size:15px;background:var(--surface);color:var(--ink)}

/* ---- Ergebnisliste ---- */
.rs-head{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:14px;flex-wrap:wrap}
.rs-head .rc{font-weight:600}
.rs-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:22px}
.rc{background:var(--surface);border:1px solid var(--line);border-radius:20px;overflow:hidden;display:flex;flex-direction:column;box-shadow:var(--shadow-sm);transition:box-shadow .25s,transform .25s}
.rc:hover{box-shadow:var(--shadow);transform:translateY(-3px)}
.rc-img{display:block;position:relative;aspect-ratio:16/10;background:#dfe5de linear-gradient(150deg,#3a6b54,#1f3a2c);overflow:hidden}
.rc-img img{width:100%;height:100%;object-fit:cover;transition:transform .6s ease}
.rc:hover .rc-img img{transform:scale(1.05)}
.rc-badge{position:absolute;top:12px;left:12px;background:rgba(255,255,255,.95);color:var(--accent-d);font-size:12px;font-weight:600;padding:5px 11px;border-radius:999px}
.rc-off{position:absolute;top:12px;right:12px;background:rgba(20,20,20,.72);color:#fff;font-size:11px;font-weight:600;padding:4px 9px;border-radius:20px}
.rc-body{padding:18px;display:flex;flex-direction:column;gap:8px;flex:1}
.rc-top{display:flex;justify-content:space-between;gap:10px;align-items:flex-start}
.rc h3{font-size:20px}
.rc h3 a:hover{color:var(--accent)}
.rc-rating{color:#a8873f;font-weight:600;font-size:14px;white-space:nowrap;display:inline-flex;align-items:center;gap:4px;margin-top:4px}
.rc-rating .ic{width:15px;height:15px}
.rc-meta{font-size:13.5px;color:var(--muted);display:flex;flex-wrap:wrap;gap:4px 14px}
.rc-meta span{display:inline-flex;align-items:center;gap:5px}
.rc-meta .ic{width:15px;height:15px;color:var(--accent)}
.rc-rule{display:inline-flex;align-items:center;gap:6px;align-self:flex-start;background:#f6f1e4;color:#6b5626;border-radius:999px;padding:4px 11px;font-size:12.5px;font-weight:600}
.rc-rule .ic{width:14px;height:14px}
.rc-desc{color:var(--muted);font-size:14px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.rc-feats{display:flex;flex-wrap:wrap;gap:6px;font-size:12px;color:var(--muted)}
.rc-feats span{background:var(--surface-2);border-radius:999px;padding:3px 10px 3px 8px;display:inline-flex;align-items:center;gap:5px;line-height:1.4}
.rc-feats .ic{width:14px;height:14px;color:var(--accent)}
.rc-price{margin-top:auto;border-top:1px solid var(--line);padding-top:14px;display:flex;justify-content:space-between;align-items:flex-end;gap:12px;flex-wrap:wrap}
.rc-price .pp{font-size:13px;color:var(--muted);line-height:1.4;min-width:0}
.rc-price .pp b{display:block;font-family:ui-serif,Georgia,"Iowan Old Style","Palatino Linotype",Palatino,"Times New Roman",serif;font-size:24px;color:var(--ink);font-weight:600;line-height:1.15}
.rc-price .pp .no{color:#9a3b2e;font-weight:600;font-size:14px}
.rc-act{display:flex;gap:8px;flex-wrap:wrap}
.rc-btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;border-radius:999px;padding:11px 18px;font:inherit;font-weight:600;font-size:14.5px;cursor:pointer;border:0;background:var(--accent);color:#fff;white-space:nowrap}
.rc-btn:hover{background:var(--accent-2)}
.rc-btn.ghost{background:var(--surface);color:var(--ink);border:1.5px solid var(--line)}
.rc-btn.ghost:hover{border-color:var(--ink);background:var(--surface)}
.rc-btn .ic{width:16px;height:16px}
.rc-alt{width:100%;display:flex;flex-direction:column;gap:6px}
.rc-alt .lbl{font-size:12.5px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.08em}
.rc-alt button{display:flex;justify-content:space-between;gap:10px;width:100%;text-align:left;border:1.5px solid var(--line);background:var(--surface);border-radius:12px;padding:10px 12px;font:inherit;font-size:14px;cursor:pointer;color:var(--ink)}
.rc-alt button:hover{border-color:var(--accent);background:#f3f8f5}
.rc-alt button b{white-space:nowrap}
.rc-muted{opacity:.7}
.rc-muted:hover{opacity:1}
.rs-near{grid-column:1/-1;margin-top:10px}
.rs-near h3{font-size:20px}
.rs-near p{color:var(--muted);font-size:14px}
.rs-empty{grid-column:1/-1;background:var(--surface);border:1px dashed var(--line);border-radius:18px;padding:28px;text-align:center;color:var(--muted)}
.sk{background:var(--surface);border:1px solid var(--line);border-radius:20px;overflow:hidden}
.sk .a{aspect-ratio:16/10;background:linear-gradient(90deg,#ece7dc 25%,#f5f1e8 37%,#ece7dc 63%);background-size:400% 100%;animation:skel 1.3s ease infinite}
.sk .b{height:14px;margin:16px 18px 0;border-radius:7px;background:#ece7dc}
.sk .b.s{width:55%}.sk .b.t{width:35%;margin-bottom:18px}
@keyframes skel{0%{background-position:100% 50%}100%{background-position:0 50%}}
@media(max-width:1100px) and (min-width:901px){.rs-grid{grid-template-columns:1fr}}
@media(max-width:680px){.rs-grid{grid-template-columns:1fr}}

/* ---- Detailseite ---- */
.dx-gal{display:grid;grid-template-columns:2fr 1fr 1fr;grid-template-rows:200px 200px;gap:8px;border-radius:22px;overflow:hidden;margin-bottom:28px;position:relative}
.dx-gal button{border:0;padding:0;background:#dfe5de;cursor:zoom-in;overflow:hidden;display:block}
.dx-gal button img{width:100%;height:100%;object-fit:cover;transition:transform .5s}
.dx-gal button:hover img{transform:scale(1.04)}
.dx-gal .g0{grid-row:1/3}
.dx-gal.n1{grid-template-columns:1fr;grid-template-rows:420px}
.dx-gal.n1 .g0{grid-row:auto}
.dx-gal.n2{grid-template-columns:2fr 1fr;grid-template-rows:408px}
.dx-gal.n2 .g0{grid-row:auto}
.dx-gal.n3{grid-template-columns:2fr 1fr}
.dx-gal.n4 .g3{grid-column:2/4}
.dx-all{position:absolute;right:14px;bottom:14px;background:rgba(255,255,255,.95);border:0;border-radius:999px;padding:9px 16px;font:inherit;font-weight:600;font-size:14px;cursor:pointer;box-shadow:0 6px 18px -8px rgba(0,0,0,.5);display:inline-flex;align-items:center;gap:7px;color:var(--ink)}
.dx-all .ic{width:17px;height:17px}
.dx-cols{display:grid;grid-template-columns:1fr 380px;gap:40px;align-items:start}
.dx-main h2{font-size:26px;margin:30px 0 12px}
.dx-main h2:first-child{margin-top:0}
.dx-desc p{margin:0 0 12px;color:#323b35;font-size:16.5px}
.dx-high{list-style:none;padding:0;display:grid;gap:8px;margin:0 0 6px}
.dx-high li{display:flex;align-items:flex-start;gap:10px}
.dx-high li .ic{width:18px;height:18px;margin-top:3px;color:var(--accent)}
.dx-feats{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px}
.dx-feats span{display:flex;align-items:center;gap:11px;background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:10px 12px;font-size:14.5px;line-height:1.3}
.dx-feats .ic{width:20px;height:20px;color:var(--accent)}
.dx-facts{display:grid;grid-template-columns:repeat(auto-fill,minmax(185px,1fr));gap:10px;margin-bottom:6px}
@media(max-width:480px){.dx-facts{grid-template-columns:repeat(auto-fill,minmax(140px,1fr))}.dx-facts>div{padding:10px 11px;gap:9px}.dx-facts .fi{width:32px;height:32px;border-radius:9px}.dx-facts .fi .ic{width:18px;height:18px}.dx-facts span{font-size:14.5px}}
.dx-facts>div{display:flex;align-items:center;gap:12px;background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:12px 14px}
.dx-facts .fi{flex:0 0 auto;width:38px;height:38px;border-radius:11px;background:#eaf2ed;color:var(--accent);display:flex;align-items:center;justify-content:center}
.dx-facts .fi .ic{width:20px;height:20px}
.dx-facts p{margin:0;min-width:0;line-height:1.35}
.dx-facts b{display:block;font-size:11.5px;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);font-weight:700}
.dx-facts span{font-weight:600}
.detail-rooms li{display:flex;align-items:center;flex-wrap:wrap;gap:4px 10px}
.detail-rooms li .ic{width:18px;height:18px;color:var(--accent)}
.dx-cal{background:var(--surface);border:1px solid var(--line);border-radius:22px;padding:18px 20px}
.dx-small{font-size:14px;color:var(--muted)}
.bx{position:sticky;top:92px;background:var(--surface);border:1px solid var(--line);border-radius:22px;padding:22px;box-shadow:var(--shadow-sm);display:flex;flex-direction:column;gap:14px}
.bx-price{font-size:14px;color:var(--muted)}
.bx-price b{font-family:ui-serif,Georgia,"Iowan Old Style","Palatino Linotype",Palatino,"Times New Roman",serif;font-size:28px;color:var(--ink);font-weight:600}
.bx-fields{border:1.5px solid var(--line);border-radius:16px;overflow:hidden}
.bx-fields .vsb-f{width:100%;border-radius:0;padding:12px 16px}
.bx-fields .vsb-f+.vsb-f{border-top:1.5px solid var(--line)}
.bx-fields .vsb-f+.vsb-f::before{display:none}
.bx-lines{display:flex;flex-direction:column;gap:7px;font-size:14.5px}
.bx-lines .r{display:flex;justify-content:space-between;gap:12px}
.bx-lines .r.tot{border-top:1px solid var(--line);padding-top:10px;margin-top:3px;font-weight:700;font-size:16px}
.bx-msg{border-radius:14px;padding:12px 14px;font-size:14px;background:#fbefec;color:#7c2d22}
.bx-msg.info{background:#f6f1e4;color:#5b4a22;display:flex;align-items:flex-start;gap:9px}
.bx-msg.info .ic{width:18px;height:18px;margin-top:1px;color:#8a6d2b}
.bx-cta{width:100%;justify-content:center;font-size:16px;padding:15px 20px}
.bx-cta[aria-disabled=true]{opacity:.5;pointer-events:none}
.bx-note{font-size:12.5px;color:var(--muted);text-align:center;line-height:1.45}
.dx-mbar{display:none}
@media(max-width:900px){
  .dx-cols{grid-template-columns:1fr}
  .bx{position:static}
  .dx-gal{grid-template-columns:1fr 1fr;grid-template-rows:240px 120px}
  .dx-gal .g0{grid-column:1/3;grid-row:auto}
  .dx-gal .g3,.dx-gal .g4{display:none}
  .dx-gal.n2{grid-template-rows:240px 120px}
  .dx-gal.n2 .g1{grid-column:1/3}
  .dx-gal.n1{grid-template-rows:260px}
  .dx-gal.n1 .g0{grid-column:auto}
  .dx-mbar{display:flex;align-items:center;justify-content:space-between;gap:12px;position:fixed;left:0;right:0;bottom:0;z-index:70;background:var(--surface);border-top:1px solid var(--line);padding:10px 16px calc(10px + env(safe-area-inset-bottom));box-shadow:0 -10px 30px -18px rgba(0,0,0,.4)}
  .dx-mbar .pp{font-size:13px;color:var(--muted);line-height:1.3;min-width:0}
  .dx-mbar .pp b{display:block;font-size:18px;color:var(--ink)}
  .dx-mbar .btn{white-space:nowrap;flex:0 0 auto;padding:12px 18px}
  body.has-dxbar{padding-bottom:76px}
}
/* Lightbox */
.lb{position:fixed;inset:0;z-index:210;background:rgba(10,14,12,.94);display:none;align-items:center;justify-content:center}
.lb.open{display:flex}
.lb img{max-width:calc(100vw - 32px);max-height:calc(100vh - 120px);object-fit:contain;border-radius:8px}
.lb button{position:absolute;background:rgba(255,255,255,.14);color:#fff;border:0;width:48px;height:48px;border-radius:999px;font-size:24px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;transition:background .15s}
.lb button:hover{background:rgba(255,255,255,.26)}
.lb button .ic{width:24px;height:24px}
.lb .x{top:16px;right:16px}.lb .p{left:16px;top:50%;margin-top:-24px}.lb .n{right:16px;top:50%;margin-top:-24px}
.lb .c{position:absolute;bottom:20px;left:0;right:0;text-align:center;color:#fff;font-size:14px}
/* ---- Handy & Tablet: Werkzeugleiste (Filter/Sortieren), Filter als Bottom-Sheet ---- */
.rs-bar,.fp-foot{display:none}
.vm-f:empty{display:none}
.vm-opts{display:flex;flex-direction:column;gap:8px;padding:4px 0 8px}
.vm-opt{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:52px;padding:0 16px;border:1.5px solid var(--line);border-radius:14px;background:var(--surface);font:inherit;font-size:16px;font-weight:600;color:var(--ink);text-align:left;cursor:pointer}
.vm-opt.on{border-color:var(--accent);background:#f1f7f3;color:var(--accent-d)}
.vm-opt.on::after{content:"";flex:0 0 auto;width:20px;height:20px;background:currentColor;-webkit-mask:` + ICONS.cssUrl("check", 2.5) + String.raw` center/contain no-repeat;mask:` + ICONS.cssUrl("check", 2.5) + String.raw` center/contain no-repeat}
@media(max-width:900px){
  .rs-wrap{display:flex;flex-direction:column}
  .rs-intro{order:2;margin:30px 0 0!important;font-size:14.5px}
  .rs-bar{display:flex;gap:10px;position:sticky;top:74px;z-index:30;margin:0 -24px 14px;padding:10px 24px;background:rgba(244,241,234,.94);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}
  .rs-bar-btn{flex:1 1 0;min-width:0;display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:46px;padding:0 14px;border:1.5px solid var(--line);border-radius:999px;background:var(--surface);color:var(--ink);font:inherit;font-weight:600;font-size:15px;cursor:pointer;box-shadow:var(--shadow-sm)}
  .rs-bar-btn svg{width:18px;height:18px;flex:0 0 auto}
  .rs-bar-btn span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .rs-bar-btn.on{border-color:var(--accent);color:var(--accent-d)}
  .rs-badge{display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;min-width:22px;height:22px;padding:0 6px;border-radius:999px;background:var(--accent);color:#fff;font-size:12.5px;font-weight:700}
  .rs-badge[hidden]{display:none}
  .fp-sortgroup{display:none}
  .filters-panel{position:fixed;left:0;right:0;bottom:0;top:auto;z-index:120;max-height:88vh;max-height:88dvh;padding:0;gap:0;border:0;border-radius:22px 22px 0 0;overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;box-shadow:0 -20px 50px -20px rgba(0,0,0,.45);transform:translateY(105%);visibility:hidden;transition:transform .32s cubic-bezier(.22,.61,.36,1),visibility 0s linear .32s}
  .filters-panel.open{transform:none;visibility:visible;transition:transform .32s cubic-bezier(.22,.61,.36,1)}
  .filters-panel .fp-close{position:sticky;top:0;z-index:2;display:flex;align-items:center;justify-content:space-between;padding:10px 12px 10px 20px;background:var(--surface);border-bottom:1px solid var(--line);font-family:ui-serif,Georgia,"Iowan Old Style","Palatino Linotype",Palatino,"Times New Roman",serif;font-size:21px;font-weight:600}
  .filters-panel .fp-close button{width:44px;height:44px;border-radius:999px;border:1px solid var(--line);background:var(--surface);font-size:22px;line-height:1;cursor:pointer;color:var(--ink);display:inline-flex;align-items:center;justify-content:center;padding:0}
  .filters-panel .fp-group{padding:16px 20px 4px;border-top:1px solid var(--line)}
  .filters-panel .fp-sortgroup+.fp-group{border-top:0}
  .filters-panel .pill{min-height:44px;padding:0 16px;font-size:14.5px}
  .filters-panel .chk{min-height:44px;font-size:15px}
  .filters-panel .chk input{width:20px;height:20px}
  .price-range input[type=range]{height:44px}
  .fp-foot{display:flex;position:sticky;bottom:0;z-index:2;align-items:center;justify-content:space-between;gap:12px;margin-top:12px;padding:12px 20px calc(12px + env(safe-area-inset-bottom));background:var(--surface);border-top:1px solid var(--line)}
  .fp-foot .vm-link{min-height:44px}
  .fp-foot .vm-ok{flex:1 1 auto;min-height:50px;padding:0 16px;font-size:16px;white-space:nowrap}
  .filters-backdrop{position:fixed;inset:0;background:rgba(16,23,19,.5);opacity:0;pointer-events:none;transition:opacity .3s;z-index:110}
  .filters-backdrop.open{opacity:1;pointer-events:auto}
  .results-col{min-width:0}
  .bx{scroll-margin-top:84px}
}
@media(min-width:901px){.filters-panel .fp-close{display:none}}
@media(max-width:900px){.rs-bar{top:58px}}
@media(max-width:720px){.rs-section{padding-top:14px!important}}
@media(max-width:480px){.rs-bar{margin:0 -18px 14px;padding:10px 18px}}

/* ---- Handy: Ergebniskarten, Pop-ups, Kalender ---- */
@media(max-width:680px){
  .rs-head{margin-bottom:10px}
  .rs-count{font-size:14.5px;color:var(--muted)}
  .rs-grid{gap:18px}
  .rc-body{padding:16px}
  .rc h3{font-size:19px}
  .rc h3 a{display:block;padding:12px 0;margin:-12px 0}
  .rc-price{flex-direction:column;align-items:stretch;gap:12px}
  .rc-act{width:100%}
  .rc-act .rc-btn{flex:1 1 0;min-height:48px;font-size:15px}
  .rc-alt button{min-height:48px;align-items:center}
  .vsb-f{min-height:58px}
  .vsb-go{min-height:52px;font-size:16px}
  .bx{padding:18px}
}
@media(max-width:640px){
  .vm-h{padding:10px 10px 10px 18px}
  .vm-h h2{font-size:20px}
  .vm-x{width:44px;height:44px}
  .vm-b{padding:0 16px 14px;overscroll-behavior:contain}
  .vm-box.sm .vm-b{padding-top:6px}
  .vm-b:has(+ .vm-f:empty){padding-bottom:calc(16px + env(safe-area-inset-bottom))}
  .vm-f{padding:12px 16px calc(12px + env(safe-area-inset-bottom))}
  .vm-ok{min-height:48px;padding:12px 26px;font-size:16px}
  .vm-link{min-height:44px}
  .gs-step button{width:44px;height:44px}
  .gs-ages select{min-height:44px;font-size:16px}
  .rp-nav button{width:44px;height:44px}
  .rp-status{min-height:44px}
  /* Pop-up-Kalender am Handy: Monate untereinander zum Scrollen, Hinweis bleibt oben stehen */
  .rp-scroll .rp-status{position:sticky;top:0;z-index:3;margin:0 -16px 6px;padding:10px 16px;background:var(--surface);border-bottom:1px solid var(--line);font-size:15px;line-height:1.45}
  .rp-scroll .rp-hint{margin-top:12px}
  .rp-scroll .rp-nav{display:none}
  .rp-scroll .rp-months{grid-template-columns:1fr;gap:20px}
  .rp-scroll .rp-m h3{text-align:left;font-size:17px;margin:4px 0 6px}
  .dx-cal{padding:12px 10px}
}

/* ---- Detailseite am Handy: wischbare Galerie, Buchungsleiste über der Tab-Leiste ---- */
.dx-galwrap{position:relative;margin-bottom:28px}
.dx-gal{margin-bottom:0}
.dx-gal .gx,.dx-count{display:none}
@media(max-width:720px){
  .dx-galwrap{margin:0 -24px 22px}
  .dx-gal,.dx-gal.n1,.dx-gal.n2,.dx-gal.n3,.dx-gal.n4,.dx-gal.n5{display:flex;gap:0;border-radius:0;overflow-x:auto;overflow-y:hidden;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none;overscroll-behavior-x:contain}
  .dx-gal::-webkit-scrollbar{display:none}
  .dx-gal button,.dx-gal .gx,.dx-gal .g3,.dx-gal .g4{display:block;flex:0 0 100%;width:100%;height:auto;aspect-ratio:4/3;max-height:60vh;scroll-snap-align:start;scroll-snap-stop:always;grid-row:auto;grid-column:auto;cursor:pointer}
  .dx-gal button:hover img{transform:none}
  .dx-all{right:12px;bottom:12px;min-height:44px;font-size:13.5px}
  .dx-count{display:block;position:absolute;left:12px;bottom:12px;background:rgba(12,20,15,.66);color:#fff;font-size:13px;font-weight:600;padding:7px 12px;border-radius:999px;pointer-events:none}
  .dx-main h2{font-size:23px;margin-top:26px}
}
@media(max-width:900px){
  .dx-mbar{bottom:calc(var(--tabbar-h,60px) + env(safe-area-inset-bottom));padding:8px 12px 8px 16px;min-height:66px}
  .dx-mbar .pp{flex:1 1 auto;min-width:0;min-height:48px;background:none;border:0;padding:2px 0;font:inherit;font-size:12.5px;line-height:1.3;color:var(--muted);text-align:left;cursor:pointer}
  .dx-mbar .pp b{font-size:18px;white-space:nowrap}
  .dx-mbar .pp span{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .dx-mbar .pp u{text-decoration:underline;text-underline-offset:2px;color:var(--ink)}
  .dx-mbar .btn{min-height:48px;padding:0 18px}
  body.has-dxbar{padding-bottom:calc(var(--tabbar-h,60px) + 74px + env(safe-area-inset-bottom))}
}
@media(max-width:480px){.dx-galwrap{margin:0 -18px 22px}}
.lb .c{bottom:calc(20px + env(safe-area-inset-bottom))}
`;

// ---------------------------------------------------------------------------
const PICKER_JS = "\n<script>\n" + ICONS.clientLib(CLIENT_ICONS) + String.raw`(function(){
  var VI=window.VI;
  var L=window.__LOCALE||'de-AT';
  function pad(n){return (n<10?'0':'')+n}
  function iso(d){return d.getUTCFullYear()+'-'+pad(d.getUTCMonth()+1)+'-'+pad(d.getUTCDate())}
  function parse(s){return new Date(s+'T00:00:00Z')}
  function add(s,n){var d=parse(s);d.setUTCDate(d.getUTCDate()+n);return iso(d)}
  function nights(a,b){return Math.round((parse(b)-parse(a))/864e5)}
  function today(){var d=new Date();return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate())}
  function fmt(s,long){if(!s)return '';try{return new Intl.DateTimeFormat(L,long?{weekday:'short',day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}:{weekday:'short',day:'2-digit',month:'2-digit',timeZone:'UTC'}).format(parse(s))}catch(e){return s}}
  function fmtRange(a,b){return a&&b?fmt(a)+' – '+fmt(b):''}
  function euro(n,c){try{return new Intl.NumberFormat(L,{style:'currency',currency:c||'EUR',minimumFractionDigits:2,maximumFractionDigits:2}).format(n)}catch(e){return '€ '+(Math.round((+n||0)*100)/100).toFixed(2)}}
  function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  var WD_ADV=['sonntags','montags','dienstags','mittwochs','donnerstags','freitags','samstags'];
  var WD_S=['So','Mo','Di','Mi','Do','Fr','Sa'];
  function hintText(r){
    if(!r)return '';var p=[];
    if(r.arrivalDays&&r.arrivalDays.length){
      if(r.arrivalDays.length===1)p.push(T('Anreise nur '+WD_ADV[r.arrivalDays[0]]));
      else p.push(T('Anreise: {d}',{d:r.arrivalDays.map(function(x){return T(WD_S[x])}).join(', ')}));
    }
    if(r.minNights>1)p.push(T('mind. {n} Nächte',{n:r.minNights}));
    return p.join(' · ');
  }
  // Ablehnungsgrund der Plattform verständlich zusammenfassen (Regeln vs. belegt).
  function whyText(reason,rules){
    var r=String(reason||'').replace(/\s+/g,' ').trim(),h=hintText(rules);
    var ruleHit=/anreise|abreise|mindest|aufenthalt|arrival|departure|minimum|nächte|nights/i.test(r);
    var taken=/belegt|vergeben|taken|occupied|nicht verfügbar|not available/i.test(r);
    if(ruleHit&&h)return T('Hier gilt: {r}.',{r:h})+(taken?' '+T('Außerdem ist der Zeitraum teilweise belegt.'):'');
    if(taken||!r)return T('Für deine Daten leider schon belegt.');
    return r;
  }
  function guestsText(a,ages){var s=T(a===1?'{n} Erwachsener':'{n} Erwachsene',{n:a});if(ages.length)s+=', '+T(ages.length===1?'{n} Kind':'{n} Kinder',{n:ages.length});return s}

  // ---------- generic modal ----------
  var lastFocus=null;
  function modal(title,sub,bodyHTML,footHTML,small){
    var m=document.createElement('div');m.className='vm';
    m.innerHTML='<div class="vm-box'+(small?' sm':'')+'" role="dialog" aria-modal="true" aria-label="'+esc(title)+'">'
      +'<div class="vm-h"><div><h2>'+esc(title)+'</h2>'+(sub?'<div class="sub">'+sub+'</div>':'')+'</div><button type="button" class="vm-x" aria-label="'+esc(T('Schließen'))+'">'+VI('x',{size:20,stroke:2})+'</button></div>'
      +'<div class="vm-b">'+bodyHTML+'</div><div class="vm-f">'+footHTML+'</div></div>';
    document.body.appendChild(m);
    lastFocus=document.activeElement;
    var prevOv=document.body.style.overflow;document.body.style.overflow='hidden';
    function close(){document.removeEventListener('keydown',onKey);m.remove();document.body.style.overflow=prevOv;if(lastFocus&&lastFocus.focus)lastFocus.focus();}
    function onKey(e){if(e.key==='Escape')close();
      if(e.key==='Tab'){var f=m.querySelectorAll('button:not(:disabled),select,[tabindex="0"]');if(!f.length)return;var first=f[0],last=f[f.length-1];
        if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}}
    document.addEventListener('keydown',onKey);
    m.addEventListener('click',function(e){if(e.target===m)close()});
    m.querySelector('.vm-x').addEventListener('click',close);
    requestAnimationFrame(function(){m.classList.add('open');var x=m.querySelector('.vm-x');if(x)x.focus();});
    m.classList.add('open');
    return {el:m,close:close};
  }

  // ---------- calendar (shared by dialog + inline) ----------
  // avail: {map:{iso:{f,a,x,m,p,u,h}}, rules} | null  (h: 1 = Anreisetag einer Buchung, 2 = Abreisetag einer Buchung → halb belegt)
  function Calendar(host,o){
    var st={ci:o.checkin||'',co:o.checkout||'',view:null};
    var av=o.avail||null,t0=today();
    var maxDay=av&&av.last?av.last:add(t0,730);
    // o.scroll (Handy-Pop-up): Monate ab heute untereinander zum Scrollen statt Blättern
    var first=o.scroll?t0:(st.ci||t0);st.view=first.slice(0,7)+'-01';
    function day(s){return av?av.map[s]:null}
    function unitFreeRun(ci,co){ // all nights free in one unit?
      if(!av)return true;var d0=day(ci);if(!d0)return false;var n=nights(ci,co);
      if(d0.u){for(var u=0;u<d0.u.length;u++){var ok=true;for(var k=0;k<n;k++){var x=day(add(ci,k));if(!x||!x.u||x.u.charAt(u)!=='1'){ok=false;break}}if(ok)return true}return false}
      for(var k2=0;k2<n;k2++){var y=day(add(ci,k2));if(!y||!y.f)return false}return true;
    }
    function canArrive(s){if(s<t0||s>maxDay)return false;if(!av)return true;var d=day(s);return !!(d&&d.f&&d.a)}
    function canDepart(s){if(!st.ci||s<=st.ci)return false;if(s>maxDay)return false;if(!av)return nights(st.ci,s)<=60;var d=day(s),d0=day(st.ci);if(!d||!d.x)return false;if(d0&&nights(st.ci,s)<(d0.m||1))return false;return unitFreeRun(st.ci,s)}
    function monthHTML(ym){
      var d=parse(ym),y=d.getUTCFullYear(),m=d.getUTCMonth();
      var name;try{name=new Intl.DateTimeFormat(L,{month:'long',year:'numeric',timeZone:'UTC'}).format(d)}catch(e){name=ym.slice(0,7)}
      var h='<div class="rp-m"><h3>'+esc(name)+'</h3><div class="rp-g" role="grid">';
      for(var i=1;i<=7;i++)h+='<div class="rp-wd" aria-hidden="true">'+esc(T(WD_S[i%7]))+'</div>';
      var lead=(d.getUTCDay()+6)%7;for(var j=0;j<lead;j++)h+='<div></div>';
      var dim=new Date(Date.UTC(y,m+1,0)).getUTCDate();
      for(var k=1;k<=dim;k++){
        var s=y+'-'+pad(m+1)+'-'+pad(k),info=day(s),cls='rp-d',dis=false;
        var picking=!st.ci||st.co; // picking arrival
        if(s<t0||s>maxDay)dis=true;
        else if(picking){dis=!canArrive(s);if(av&&info&&info.f&&!info.a)cls+=' noarr'}
        else{dis=!(canDepart(s)||canArrive(s)||s===st.ci)}
        if(av&&info&&!info.f&&s>=t0)cls+=' busy';
        var half=av&&info&&s>=t0&&s<=maxDay?info.h:0,tip='';
        if(half===1){cls+=' h-in';tip=T('Ab dieser Nacht belegt – Abreise möglich')}
        else if(half===2){cls+=' h-out';tip=T('Bis hier belegt – Anreise möglich')}
        if(s===st.ci)cls+=' start';if(s===st.co)cls+=' end';
        if(st.ci&&st.co&&s>st.ci&&s<st.co)cls+=' in';
        if(s===t0)cls+=' today';
        var price=av&&info&&info.f&&info.p&&!dis?'<small>'+Math.round(info.p)+'</small>':'';
        h+='<button type="button" class="'+cls+'" data-d="'+s+'"'+(dis?' disabled':'')+(tip?' title="'+esc(tip)+'"':'')+' aria-label="'+esc(fmt(s,true)+(tip?', '+tip:''))+'"'+(s===st.ci||s===st.co?' aria-pressed="true"':'')+'><span>'+k+price+'</span></button>';
      }
      return h+'</div></div>';
    }
    function status(){
      var r=av&&av.rules?hintText(av.rules):'';
      if(!st.ci)return T('Wähle dein Anreisedatum.');
      if(!st.co){var d0=day(st.ci),mn=d0&&d0.m>1?d0.m:0;return '<b>'+esc(fmt(st.ci))+'</b>'+VI('arrow-right',{size:15,stroke:2,cls:'rp-arr'})+T('Wähle dein Abreisedatum.')+(mn?' ('+T('mind. {n} Nächte',{n:mn})+')':'')}
      var n=nights(st.ci,st.co);return '<b>'+esc(fmtRange(st.ci,st.co))+'</b> · '+T(n===1?'{n} Nacht':'{n} Nächte',{n:n});
    }
    function monthsHTML(){
      if(!o.scroll)return monthHTML(st.view)+monthHTML(add(st.view,32).slice(0,7)+'-01');
      var h='',m=st.view;for(var i=0;i<12&&m.slice(0,7)<=maxDay.slice(0,7);i++){h+=monthHTML(m);m=add(m,32).slice(0,7)+'-01'}return h;
    }
    function render(){
      var v2=add(st.view,32).slice(0,7)+'-01';
      var canPrev=st.view>t0.slice(0,7)+'-01';
      var canNext=v2.slice(0,7)<maxDay.slice(0,7);
      var hint=av&&av.rules?hintText(av.rules):'';
      if(o.scroll)host.classList.add('rp-scroll');
      host.innerHTML=(hint&&o.showHint!==false?'<div class="rp-hint">'+VI('calendar-days')+'<span>'+esc(hint)+(av.rules.arrivalDays&&av.rules.arrivalDays.length?' – '+esc(T('nicht wählbare Tage sind ausgegraut.')):'')+'</span></div>':'')
        +'<div class="rp-status" aria-live="polite">'+status()+'</div>'
        +'<div class="rp-nav"><button type="button" class="pv" aria-label="'+esc(T('Vorheriger Monat'))+'"'+(canPrev?'':' disabled')+'>'+VI('chevron-left',{size:20,stroke:2})+'</button><button type="button" class="nx" aria-label="'+esc(T('Nächster Monat'))+'"'+(canNext?'':' disabled')+'>'+VI('chevron-right',{size:20,stroke:2})+'</button></div>'
        +'<div class="rp-months">'+monthsHTML()+'</div>'
        +(av?'<div class="rp-legend"><span><i style="background:#fff"></i>'+esc(T('frei'))+'</span><span><i style="background:#eee;text-decoration:line-through"></i>'+esc(T('belegt'))+'</span><span><i class="half"></i>'+esc(T('An-/Abreisetag'))+'</span>'+(hint?'<span><i style="background:#f6f1e4"></i>'+esc(T('grau: keine Anreise möglich'))+'</span>':'')+'</div>':'');
      host.querySelector('.pv').onclick=function(){st.view=add(st.view,-1).slice(0,7)+'-01';render()};
      host.querySelector('.nx').onclick=function(){st.view=add(st.view,32).slice(0,7)+'-01';render()};
      Array.prototype.forEach.call(host.querySelectorAll('.rp-d:not(:disabled)'),function(b){b.onclick=function(){pick(b.getAttribute('data-d'))}});
      if(o.onRender)o.onRender(st);
    }
    function pick(s){
      if(st.ci&&!st.co&&s===st.ci){st.ci=''}
      else if(st.ci&&!st.co&&canDepart(s))st.co=s;
      else if(canArrive(s)){st.ci=s;st.co=''}
      render();
      var b=host.querySelector('[data-d="'+s+'"]');if(b)b.focus(o.scroll?{preventScroll:true}:undefined);
      if(o.onChange)o.onChange(st.ci,st.co);
    }
    render();
    return {get:function(){return {checkin:st.ci,checkout:st.co}},set:function(ci,co){st.ci=ci||'';st.co=co||'';if(ci&&!o.scroll)st.view=ci.slice(0,7)+'-01';render()},clear:function(){st.ci='';st.co='';render();if(o.onChange)o.onChange('','')}};
  }

  function openDates(o){
    var sub=o.title2?esc(o.title2):'';
    var md=modal(T('Reisedaten wählen'),sub,'<div class="rp"></div>',
      '<div class="sum"></div><div class="acts"><button type="button" class="vm-link clr">'+esc(T('Löschen'))+'</button><button type="button" class="vm-ok">'+esc(T('Übernehmen'))+'</button></div>');
    var sum=md.el.querySelector('.sum'),ok=md.el.querySelector('.vm-ok');
    function upd(ci,co){ok.disabled=!(ci&&co)&&!!ci;sum.innerHTML=ci&&co?'<b>'+esc(T(nights(ci,co)===1?'{n} Nacht':'{n} Nächte',{n:nights(ci,co)}))+'</b>':''}
    var scroll=!!(window.matchMedia&&window.matchMedia('(max-width:640px)').matches);
    var cal=Calendar(md.el.querySelector('.rp'),{checkin:o.checkin,checkout:o.checkout,avail:o.avail,onChange:upd,scroll:scroll});
    upd(o.checkin,o.checkout);
    if(scroll&&o.checkin){var sel=md.el.querySelector('[data-d="'+o.checkin+'"]'),vb=md.el.querySelector('.vm-b');if(sel&&vb)vb.scrollTop=Math.max(0,sel.getBoundingClientRect().top-vb.getBoundingClientRect().top-140)}
    md.el.querySelector('.clr').onclick=function(){cal.clear()};
    ok.onclick=function(){var v=cal.get();md.close();if(o.onApply)o.onApply(v.checkin&&v.checkout?v.checkin:'',v.checkin&&v.checkout?v.checkout:'')};
  }

  function openGuests(o){
    var a=o.adults||2,ages=(o.ages||[]).slice(),max=o.max||0;
    var md=modal(T('Wer reist mit?'),max?esc(T('max. {n} Gäste',{n:max})):'','<div class="gs"></div>',
      '<div class="sum"></div><div class="acts"><button type="button" class="vm-ok">'+esc(T('Übernehmen'))+'</button></div>',true);
    var box=md.el.querySelector('.gs');
    function row(key,t,s,v,min,mx){return '<div class="gs-row"><div class="t"><b>'+esc(t)+'</b><span>'+esc(s)+'</span></div><div class="gs-step"><button type="button" data-k="'+key+'" data-s="-1" aria-label="'+esc(T('weniger'))+' '+esc(t)+'"'+(v<=min?' disabled':'')+'>'+VI('minus',{stroke:2})+'</button><output aria-live="polite">'+v+'</output><button type="button" data-k="'+key+'" data-s="1" aria-label="'+esc(T('mehr'))+' '+esc(t)+'"'+(v>=mx?' disabled':'')+'>'+VI('plus',{stroke:2})+'</button></div></div>'}
    function render(){
      var tot=a+ages.length,full=max&&tot>=max;
      var h=row('a',T('Erwachsene'),T('ab 18 Jahren'),a,1,full?a:20)+row('c',T('Kinder'),T('0 bis 17 Jahre'),ages.length,0,full?ages.length:8);
      if(ages.length){h+='<div class="gs-ages">';ages.forEach(function(v,i){var opts='';for(var y=0;y<18;y++)opts+='<option value="'+y+'"'+(y===v?' selected':'')+'>'+T(y===1?'{n} Jahr':'{n} Jahre',{n:y})+'</option>';h+='<label>'+esc(T('Alter Kind {n}',{n:i+1}))+'<select data-i="'+i+'">'+opts+'</select></label>'});h+='</div><p class="dx-small" style="margin-top:6px">'+esc(T('Alter bei Anreise – wichtig für Kinderpreise.'))+'</p>'}
      box.innerHTML=h;
      md.el.querySelector('.sum').textContent=guestsText(a,ages);
      Array.prototype.forEach.call(box.querySelectorAll('button[data-k]'),function(b){b.onclick=function(){var s=+b.getAttribute('data-s');if(b.getAttribute('data-k')==='a')a=Math.max(1,a+s);else if(s>0)ages.push(8);else ages.pop();render();var nb=box.querySelector('button[data-k="'+b.getAttribute('data-k')+'"][data-s="'+s+'"]');if(nb&&!nb.disabled)nb.focus()}});
      Array.prototype.forEach.call(box.querySelectorAll('select[data-i]'),function(sel){sel.onchange=function(){ages[+sel.getAttribute('data-i')]=+sel.value}});
    }
    render();
    md.el.querySelector('.vm-ok').onclick=function(){md.close();if(o.onApply)o.onApply(a,ages)};
  }

  // ---------- search bar binding ----------
  function readForm(f){var g=function(n){return f.querySelector('input[name='+n+']')};
    return {checkin:g('checkin').value,checkout:g('checkout').value,adults:parseInt(g('adults').value,10)||2,
      ages:(g('childrenAges').value||'').split(',').filter(function(x){return x!==''}).map(Number)}}
  function writeForm(f,v){var g=function(n){return f.querySelector('input[name='+n+']')};
    if('checkin' in v){g('checkin').value=v.checkin||'';g('checkout').value=v.checkout||''}
    if('adults' in v){g('adults').value=v.adults;g('childrenAges').value=(v.ages||[]).join(',')}
    labels(f)}
  function labels(f){var v=readForm(f),d=f.querySelector('[data-v=dates]'),g=f.querySelector('[data-v=guests]');
    if(d){if(v.checkin&&v.checkout){d.textContent=fmtRange(v.checkin,v.checkout)+' · '+T(nights(v.checkin,v.checkout)===1?'{n} Nacht':'{n} Nächte',{n:nights(v.checkin,v.checkout)});d.classList.remove('ph')}else{d.textContent=T('Anreise – Abreise');d.classList.add('ph')}}
    if(g)g.textContent=guestsText(v.adults,v.ages)}
  function bind(f){
    if(f.__vb)return;f.__vb=1;labels(f);
    var bd=f.querySelector('[data-open=dates]'),bg=f.querySelector('[data-open=guests]');
    if(bd)bd.addEventListener('click',function(){var v=readForm(f);var o={checkin:v.checkin,checkout:v.checkout,onApply:function(ci,co){writeForm(f,{checkin:ci,checkout:co});f.dispatchEvent(new CustomEvent('vb:change'))}};
      if(f.__avail){o.avail=f.__avail}openDates(o)});
    if(bg)bg.addEventListener('click',function(){var v=readForm(f);openGuests({adults:v.adults,ages:v.ages,max:f.__max||0,onApply:function(a,ages){writeForm(f,{adults:a,ages:ages});f.dispatchEvent(new CustomEvent('vb:change'))}})});
    f.addEventListener('submit',function(){ // leere Felder nicht in die URL schreiben
      Array.prototype.forEach.call(f.querySelectorAll('input[type=hidden]'),function(i){i.disabled=!i.value});
      setTimeout(function(){Array.prototype.forEach.call(f.querySelectorAll('input[type=hidden]'),function(i){i.disabled=false})},0)});
  }
  Array.prototype.forEach.call(document.querySelectorAll('form.vsb,.vsb-bind'),bind);

  window.VB={whyText:whyText,iso:iso,add:add,nights:nights,today:today,fmt:fmt,fmtRange:fmtRange,euro:euro,esc:esc,hintText:hintText,guestsText:guestsText,
    modal:modal,Calendar:Calendar,openDates:openDates,openGuests:openGuests,readForm:readForm,writeForm:writeForm,bind:bind};
})();
</script>`;

// ---------------------------------------------------------------------------
const SEARCH_JS = String.raw`
<script>
(function(){
  var V=window.VB;if(!V)return;
  var VI=window.VI;
  var $=function(s,r){return (r||document).querySelector(s)};
  var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
  var esc=V.esc,euro=V.euro;
  var form=$('#searchForm'),results=$('#results');
  var flt={type:'',loc:'',features:[],priceMax:0,sort:'best'};
  var last={results:[]};
  function cur(){return V.readForm(form)}
  function qs(v){var p=[];if(v.checkin&&v.checkout){p.push('checkin='+v.checkin,'checkout='+v.checkout)}p.push('adults='+v.adults);if(v.ages.length)p.push('childrenAges='+v.ages.join(','));return p.join('&')}

  var loaded=false;
  // ---- Filter-Panel (Desktop: Seitenleiste, Handy/Tablet: Bottom-Sheet) ----
  function refresh(){updFilterUi(null);if(loaded)render(last)}
  $$('.pills').forEach(function(p){p.addEventListener('click',function(e){var b=e.target.closest('.pill');if(!b)return;
    $$('.pill',p).forEach(function(x){x.classList.remove('active');x.setAttribute('aria-pressed','false')});b.classList.add('active');b.setAttribute('aria-pressed','true');
    flt[p.getAttribute('data-group')]=b.getAttribute('data-val');refresh()})});
  $$('.f-feat').forEach(function(ch){ch.addEventListener('change',function(){flt.features=$$('.f-feat').filter(function(x){return x.checked}).map(function(x){return x.value});refresh()})});
  var price=$('#f-price');
  function priceLbl(){$('#priceLbl').textContent=flt.priceMax?T('bis {p} / Nacht',{p:euro(flt.priceMax)}):T('egal')}
  if(price)price.addEventListener('input',function(){var v=parseInt(price.value,10);flt.priceMax=v>=parseInt(price.max,10)?0:v;priceLbl();refresh()});
  var SORTS=[['best','Empfohlen'],['price-asc','Preis: aufsteigend'],['price-desc','Preis: absteigend']];
  var sort=$('#f-sort');if(sort)sort.addEventListener('change',function(){setSort(sort.value)});
  function sortLabel(){for(var i=0;i<SORTS.length;i++)if(SORTS[i][0]===flt.sort)return T(SORTS[i][1]);return T('Empfohlen')}
  function setSort(v){flt.sort=v;if(sort)sort.value=v;var l=$('#sortLbl');if(l)l.textContent=sortLabel();if(loaded)render(last)}

  // Handy/Tablet: „Filter“-Knopf mit Anzahl aktiver Filter öffnet das Sheet, „Sortieren“ ein Pop-up.
  var fp=$('#filtersPanel'),fbd=$('#filtersBackdrop'),fbtn=$('#filterToggle'),sbtn=$('#sortToggle'),fApply=$('#fltApply'),fpFocus=null;
  function activeCount(){return (flt.type?1:0)+(flt.loc?1:0)+(flt.priceMax?1:0)+flt.features.length}
  function updFilterUi(hits){
    var n=activeCount(),b=$('#fltCount');if(b){b.textContent=n;b.hidden=!n}
    if(fbtn){fbtn.classList.toggle('on',!!n);fbtn.setAttribute('aria-label',n?T('Filter ({n} aktiv)',{n:n}):T('Filter'))}
    if(fApply&&hits!=null)fApply.textContent=hits?T(hits===1?'{n} Unterkunft anzeigen':'{n} Unterkünfte anzeigen',{n:hits}):T('Keine Treffer – Filter lockern');
    else if(fApply&&!loaded)fApply.textContent=T('Ergebnisse anzeigen');
  }
  function fpKey(e){
    if(e.key==='Escape'){closeF();return}
    if(e.key==='Tab'){var f=$$('button:not(:disabled),input:not(:disabled),select',fp).filter(function(x){return x.offsetParent!==null});if(!f.length)return;var a=f[0],z=f[f.length-1];
      if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}
  }
  function openF(){if(!fp)return;fpFocus=document.activeElement;fp.classList.add('open');fp.setAttribute('role','dialog');fp.setAttribute('aria-modal','true');
    if(fbd)fbd.classList.add('open');document.body.style.overflow='hidden';document.addEventListener('keydown',fpKey);
    setTimeout(function(){var x=$('#fltClose');if(x)x.focus()},60)}
  function closeF(){if(!fp||!fp.classList.contains('open'))return;fp.classList.remove('open');fp.removeAttribute('role');fp.removeAttribute('aria-modal');
    if(fbd)fbd.classList.remove('open');document.body.style.overflow='';document.removeEventListener('keydown',fpKey);if(fpFocus&&fpFocus.focus)fpFocus.focus()}
  function resetFilters(){flt.type='';flt.loc='';flt.features=[];flt.priceMax=0;
    $$('.pills').forEach(function(p){$$('.pill',p).forEach(function(x,i){x.classList.toggle('active',!i);x.setAttribute('aria-pressed',i?'false':'true')})});
    $$('.f-feat').forEach(function(x){x.checked=false});
    if(price){price.value=price.max;priceLbl()}
    refresh()}
  if(fbtn)fbtn.addEventListener('click',openF);
  if(fbd)fbd.addEventListener('click',closeF);
  var fClose=$('#fltClose');if(fClose)fClose.addEventListener('click',closeF);
  var fReset=$('#fltReset');if(fReset)fReset.addEventListener('click',resetFilters);
  if(fApply)fApply.addEventListener('click',function(){closeF();var t=$('.results-col');if(t)window.scrollTo({top:Math.max(0,t.getBoundingClientRect().top+window.scrollY-140),behavior:'smooth'})});
  window.addEventListener('resize',function(){if(window.matchMedia&&!window.matchMedia('(max-width:900px)').matches)closeF()});
  if(sbtn)sbtn.addEventListener('click',function(){
    var md=V.modal(T('Sortieren nach'),'','<div class="vm-opts" role="radiogroup">'+SORTS.map(function(x){var on=x[0]===flt.sort;
      return '<button type="button" role="radio" aria-checked="'+on+'" class="vm-opt'+(on?' on':'')+'" data-v="'+x[0]+'">'+esc(T(x[1]))+'</button>'}).join('')+'</div>','',true);
    $$('.vm-opt',md.el).forEach(function(b){b.onclick=function(){md.close();setSort(b.getAttribute('data-v'))}});
  });

  form.addEventListener('submit',function(e){e.preventDefault();run()});
  form.addEventListener('vb:change',run);

  function skeleton(){var h='';for(var i=0;i<4;i++)h+='<div class="sk" aria-hidden="true"><div class="a"></div><div class="b"></div><div class="b s"></div><div class="b t"></div></div>';return h}
  var seq=0;
  function run(){
    var v=cur(),my=++seq;
    history.replaceState(null,'',(window.__BASE||'')+'/unterkuenfte?'+qs(v));
    loaded=false;results.setAttribute('aria-busy','true');results.innerHTML=skeleton();
    $('#resCount').textContent=T('Suche läuft …');
    fetch('/api/search?lang='+(window.__LANG||'de')+'&'+qs(v)).then(function(r){if(!r.ok)throw 0;return r.json()}).then(function(d){if(my!==seq)return;last=d;loaded=true;render(d);openFromUrl()})
      .catch(function(){if(my!==seq)return;results.innerHTML='<div class="rs-empty">'+T('Fehler beim Laden. Bitte erneut versuchen.')+' <button type="button" class="rc-btn ghost" id="retry">'+T('Erneut laden')+'</button></div>';var b=$('#retry');if(b)b.onclick=run})
      .then(function(){results.removeAttribute('aria-busy')});
  }

  function perNight(x){var o=x.offer;if(o&&o.available&&o.total&&o.nights)return o.total/o.nights;return x.fromPrice||null}
  function matches(x){
    if(flt.type&&String(x.type||'').toLowerCase()!==flt.type)return false;
    if(flt.loc&&String(x.location||'').toLowerCase()!==flt.loc)return false;
    for(var i=0;i<flt.features.length;i++)if((x.features||[]).indexOf(flt.features[i])<0)return false;
    if(flt.priceMax){var p=perNight(x);if(p!=null&&p>flt.priceMax)return false}
    return true;
  }
  function tier(x){if(x.offer&&x.offer.available)return 0;if(x.connected&&!(x.offer&&(x.offer.available===false||x.offer.error)))return 1;if(x.connected)return 2;return 3}
  function sortList(a){a=a.slice();
    if(flt.sort==='price-asc'||flt.sort==='price-desc'){var dir=flt.sort==='price-asc'?1:-1;
      return a.sort(function(x,y){var px=perNight(x),py=perNight(y);if(px==null&&py==null)return tier(x)-tier(y);if(px==null)return 1;if(py==null)return -1;return tier(x)-tier(y)||dir*(px-py)})}
    return a.sort(function(x,y){return tier(x)-tier(y)})}

  function render(d){
    var v=cur(),all=d.results||[],hit=[],miss=[];
    all.forEach(function(x){(matches(x)?hit:miss).push(x)});hit=sortList(hit);
    var nights=d.nights||0;
    $('#resCount').textContent=T(hit.length===1?'{n} Unterkunft':'{n} Unterkünfte',{n:hit.length})+(nights?' · '+V.fmtRange(d.checkin,d.checkout)+' · '+T(nights===1?'{n} Nacht':'{n} Nächte',{n:nights}):' · '+T('Reisedaten wählen für Live-Preise'));
    var h='';
    if(hit.length)h+=hit.map(function(x){return card(x,false,v)}).join('');
    else h+='<div class="rs-empty">'+(all.length?T('Keine Unterkunft passt exakt zu deinen Filtern.'):T('Für {n} Gäste haben wir leider nichts gefunden. Probiere es mit weniger Personen.',{n:d.guests||''}))+'</div>';
    if(hit.length<3&&miss.length){h+='<div class="rs-near"><h3>'+T('Knapp außerhalb deiner Filter')+'</h3><p>'+T('Vielleicht trotzdem das Richtige?')+'</p></div>'+sortList(miss).map(function(x){return card(x,true,v)}).join('')}
    results.innerHTML=h;bind();updFilterUi(hit.length);
  }

  function detailHref(x,v){return (window.__BASE||'')+x.url+'?'+qs(v)}
  function card(x,muted,v){
    var href=detailHref(x,v);
    var img=x.image?'<img src="'+esc(x.image)+'" alt="'+esc(x.name)+'" loading="lazy" decoding="async">':'';
    var meta=[];if(x.location)meta.push(VI('map-pin',{size:15})+esc(x.location));if(x.type)meta.push(VI('house',{size:15})+esc(x.type));if(x.maxGuests)meta.push(VI('users',{size:15})+esc(T('bis {n} Gäste',{n:x.maxGuests})));
    var rule=x.rules?V.hintText(x.rules):'';
    var feats=(x.featureLabels||[]).slice(0,4).map(function(f){return '<span>'+(f.icon||'')+esc(T(f.label))+'</span>'}).join('');
    return '<article class="rc'+(muted?' rc-muted':'')+'">'
      +'<a class="rc-img" href="'+href+'" tabindex="-1" aria-hidden="true">'+img+(x.badge?'<span class="rc-badge">'+esc(x.badge)+'</span>':'')+(muted?'<span class="rc-off">'+T('außerhalb der Filter')+'</span>':'')+'</a>'
      +'<div class="rc-body"><div class="rc-top"><h3><a href="'+href+'">'+esc(x.name)+'</a></h3>'+(x.rating?'<span class="rc-rating">'+VI('star',{size:15,fill:1})+esc(x.rating)+'</span>':'')+'</div>'
      +'<div class="rc-meta">'+meta.map(function(m){return '<span>'+m+'</span>'}).join('')+'</div>'
      +(rule?'<span class="rc-rule">'+VI('calendar-days',{size:14})+esc(rule)+'</span>':'')
      +(x.description?'<p class="rc-desc">'+esc(x.description)+'</p>':'')
      +(feats?'<div class="rc-feats">'+feats+'</div>':'')
      +priceBox(x,v,href)+'</div></article>';
  }
  function guestsShort(v){return T('{n} Erw.',{n:v.adults})+(v.ages.length?' + '+T('{n} Kind(er)',{n:v.ages.length}):'')}
  function priceBox(x,v,href){
    var o=x.offer,hasDates=!!(v.checkin&&v.checkout);
    if(!x.connected){
      return '<div class="rc-price"><div class="pp">'+T('Preise & Buchung auf der Website der Unterkunft')+'</div><div class="rc-act">'
        +(x.link?'<a class="rc-btn ghost" href="'+esc(x.link)+'" target="_blank" rel="noopener">'+T('Zur Website')+VI('external-link',{size:16})+'</a>':'')+'<a class="rc-btn" href="'+href+'">'+T('Details')+'</a></div></div>';}
    if(!hasDates){
      return '<div class="rc-price"><div class="pp">'+(x.fromPrice?T('ab {p} / Nacht',{p:'<b>'+euro(x.fromPrice)+'</b>'}):T('Live-Preis für deine Reisedaten'))+'</div><div class="rc-act"><button type="button" class="rc-btn" data-dates="1">'+T('Reisedaten wählen')+'</button></div></div>';}
    if(!o||o.error)return '<div class="rc-price"><div class="pp">'+T('Preis gerade nicht abrufbar.')+'</div><div class="rc-act"><a class="rc-btn ghost" href="'+href+'">'+T('Details')+'</a></div></div>';
    if(o&&o.available){
      var n=o.nights||V.nights(v.checkin,v.checkout);
      var cta=x.platform?'<a class="rc-btn" href="'+esc(x.bookUrl)+'" data-handover="1">'+T('Zur Buchung')+'</a>':'<button type="button" class="rc-btn" data-book="'+x.id+'">'+T('Jetzt buchen')+'</button>';
      return '<div class="rc-price"><div class="pp"><b>'+euro(o.total,o.currency)+'</b>'+T('gesamt für {n} Nächte',{n:n})+' · '+guestsShort(v)+((o.breakdown||[]).length>1?'<br>'+T('inkl. Endreinigung & Gebühren'):'')+'</div><div class="rc-act"><a class="rc-btn ghost" href="'+href+'">'+T('Details')+'</a>'+cta+'</div></div>';}
    // nicht verfügbar → Grund + nächste passende Termine
    var why=esc(V.whyText(o&&o.reason,x.rules));
    var alts=(x.suggestions||[]).map(function(s){return '<button type="button" data-ci="'+s.checkin+'" data-co="'+s.checkout+'"><span>'+esc(V.fmtRange(s.checkin,s.checkout))+' · '+T('{n} Nächte',{n:s.nights})+'</span><b>'+euro(s.total,s.currency)+'</b></button>'}).join('');
    return '<div class="rc-price"><div class="pp"><span class="no">'+T('Nicht verfügbar')+'</span><br>'+why+'</div>'
      +(alts?'<div class="rc-alt"><span class="lbl">'+T('Passende Termine in der Nähe')+'</span>'+alts+'</div>':'<div class="rc-act"><a class="rc-btn ghost" href="'+href+'">'+T('Belegung ansehen')+'</a></div>')+'</div>';
  }

  function bind(){
    $$('[data-dates]',results).forEach(function(b){b.onclick=function(){var f=form.querySelector('[data-open=dates]');if(f)f.click()}});
    $$('[data-ci]',results).forEach(function(b){b.onclick=function(){V.writeForm(form,{checkin:b.getAttribute('data-ci'),checkout:b.getAttribute('data-co')});window.scrollTo({top:Math.max(0,form.getBoundingClientRect().top+window.scrollY-110),behavior:'smooth'});run()}});
    $$('[data-book]',results).forEach(function(b){b.onclick=function(){openBooking(find(b.getAttribute('data-book')))}});
  }
  function find(id){return (last.results||[]).filter(function(x){return String(x.id)===String(id)})[0]}
  var autoOpened=false;
  var bookParam=(/[?&]book=(\d+)/.exec(location.search)||[])[1];
  function openFromUrl(){if(autoOpened)return;autoOpened=true;if(bookParam){var x=find(bookParam);if(x&&x.offer&&x.offer.available&&!x.platform)openBooking(x)}}

  // ---- Alt-Buchungsdialog (Beds24 / eigene Partner-API, z. B. Antonhaus) ----
  var ov=$('#bkOverlay'),bkAcc=null,bkRoom=null;
  function avail(acc){return (acc.rooms||[]).filter(function(r){return r.offer&&r.offer.available})}
  function roomSub(r){var s=[];if(r.size)s.push(r.size+' m²');if(r.bedrooms)s.push(T('{n} Schlafzi.',{n:r.bedrooms}));if(r.maxGuests)s.push(T('bis {n} Gäste',{n:r.maxGuests}));return s.join(' · ')}
  function summary(){var v=cur(),o=(bkRoom&&bkRoom.offer)||{};
    var s='<div class="row"><span>'+T('An-/Abreise')+'</span><span>'+esc(V.fmtRange(v.checkin,v.checkout))+'</span></div><div class="row"><span>'+T('Gäste')+'</span><span>'+guestsShort(v)+'</span></div>';
    if(bkRoom&&bkRoom.name&&bkAcc.roomCount>1)s+='<div class="row"><span>'+T('Zimmer')+'</span><span>'+esc(bkRoom.name)+'</span></div>';
    (o.breakdown||[]).forEach(function(b){s+='<div class="row"><span>'+esc(b.label)+'</span><span>'+euro(b.amount,o.currency)+'</span></div>'});
    if(o.total!=null)s+='<div class="row total"><span>'+T('Gesamt')+'</span><span>'+euro(o.total,o.currency)+'</span></div>';
    $('#bk-summary').innerHTML=s}
  function openBooking(acc){
    if(!acc||!ov)return;var rs=avail(acc);if(!rs.length)return;
    bkAcc=acc;bkRoom=rs[0];$('#bk-title').textContent=acc.name;$('#bk-accId').value=acc.id;$('#bk-msg').innerHTML='';
    var rp=$('#bk-rooms');
    if(rs.length>1){rp.innerHTML='<div class="dt-sec-title" style="font-size:15px;margin-top:0">'+T('Zimmer wählen')+'</div><div class="rooms-pick">'+rs.map(function(r,i){return '<label class="room-opt'+(i?'':' sel')+'"><input type="radio" name="bkroom" value="'+esc(r.roomId)+'"'+(i?'':' checked')+'><span><span class="rn">'+esc(r.name||T('Zimmer'))+'</span>'+(roomSub(r)?'<span class="rg"> · '+roomSub(r)+'</span>':'')+'</span><span class="rp"><b>'+euro(r.offer.total,r.offer.currency)+'</b>'+T('gesamt')+'</span></label>'}).join('')+'</div>';
      $$('#bk-rooms input[name=bkroom]').forEach(function(inp){inp.onchange=function(){bkRoom=rs.filter(function(r){return String(r.roomId)===String(inp.value)})[0];$$('#bk-rooms .room-opt').forEach(function(o){o.classList.remove('sel')});inp.closest('.room-opt').classList.add('sel');summary()}})}
    else rp.innerHTML='';
    summary();$('#bk-form').style.display='';$('#bk-actions').style.display='';
    ov.classList.add('open');ov.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
    var fi=ov.querySelector('input[name=firstName]');if(fi)setTimeout(function(){fi.focus()},50);
  }
  function closeBooking(){ov.classList.remove('open');ov.setAttribute('aria-hidden','true');document.body.style.overflow=''}
  function msg(t,h){$('#bk-msg').innerHTML='<div class="msg '+t+'">'+h+'</div>'}
  if(ov){
    $('#bk-close').onclick=closeBooking;$('#bk-cancel').onclick=closeBooking;
    ov.addEventListener('click',function(e){if(e.target===ov)closeBooking()});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&ov.classList.contains('open'))closeBooking()});
    $('#bk-submit').onclick=function(){
      var f=$('#bk-form'),v=cur();
      var data={accId:$('#bk-accId').value,roomId:(bkRoom&&bkRoom.roomId)||'',roomName:(bkRoom&&bkRoom.name)||'',checkin:v.checkin,checkout:v.checkout,adults:v.adults,childrenAges:v.ages,guests:v.adults+v.ages.length,
        title:f.title.value,firstName:f.firstName.value.trim(),lastName:f.lastName.value.trim(),email:f.email.value.trim(),phone:f.phone.value.trim(),notes:f.notes.value.trim()};
      if(!data.firstName||!data.lastName||!data.email){msg('err',T('Bitte Vorname, Nachname und E-Mail ausfüllen.'));return}
      if(!f.agb.checked){msg('err',T('Bitte AGB & Datenschutz akzeptieren.'));return}
      var btn=$('#bk-submit');btn.disabled=true;btn.textContent=T('Wird gebucht…');
      fetch('/api/book?lang='+(window.__LANG||'de'),{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(data)}).then(function(r){return r.json()}).then(function(res){
        btn.disabled=false;btn.textContent=T('Jetzt verbindlich buchen');
        if(res.ok){$('#bk-form').style.display='none';$('#bk-actions').style.display='none';$('#bk-rooms').innerHTML='';
          msg('ok','<b>'+T('Buchung bestätigt!')+'</b><br>'+T('Buchungsnummer:')+' <b>'+esc(res.bookingId||'—')+'</b><br>'+T('Du erhältst in Kürze eine Bestätigung per E-Mail.')+(res.demo?'<br><em>'+T('(Demo-Modus – keine echte Buchung erstellt)')+'</em>':''))}
        else msg('err',esc(res.error||T('Buchung fehlgeschlagen.')))
      }).catch(function(){btn.disabled=false;btn.textContent=T('Jetzt verbindlich buchen');msg('err',T('Netzwerkfehler. Bitte erneut versuchen.'))});
    };
  }
  run();
})();
</script>`;

// ---------------------------------------------------------------------------
const DETAIL_JS = String.raw`
<script>
(function(){
  var V=window.VB;if(!V)return;
  var VI=window.VI;
  var $=function(s,r){return (r||document).querySelector(s)};
  var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
  var esc=V.esc,euro=V.euro;
  // ---- Galerie / Lightbox ----
  var imgs=window.__DX_IMGS||[],lb=null,li=0;
  function showLb(i){li=(i+imgs.length)%imgs.length;if(!lb){lb=document.createElement('div');lb.className='lb';lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');
      lb.innerHTML='<img alt=""><button type="button" class="x" aria-label="'+esc(T('Schließen'))+'">'+VI('x',{size:24,stroke:2})+'</button><button type="button" class="p" aria-label="'+esc(T('Vorheriges Bild'))+'">'+VI('chevron-left',{size:26,stroke:2})+'</button><button type="button" class="n" aria-label="'+esc(T('Nächstes Bild'))+'">'+VI('chevron-right',{size:26,stroke:2})+'</button><div class="c"></div>';
      document.body.appendChild(lb);lb.querySelector('.x').onclick=closeLb;lb.querySelector('.p').onclick=function(){showLb(li-1)};lb.querySelector('.n').onclick=function(){showLb(li+1)};
      lb.addEventListener('click',function(e){if(e.target===lb)closeLb()});
      document.addEventListener('keydown',function(e){if(!lb||!lb.classList.contains('open'))return;if(e.key==='Escape')closeLb();if(e.key==='ArrowLeft')showLb(li-1);if(e.key==='ArrowRight')showLb(li+1)});
      var sx=null;lb.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});lb.addEventListener('touchend',function(e){if(sx==null)return;var dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>40)showLb(li+(dx<0?1:-1));sx=null})}
    lb.querySelector('img').src=imgs[li];lb.querySelector('.c').textContent=(li+1)+' / '+imgs.length;lb.classList.add('open');document.body.style.overflow='hidden';lb.querySelector('.x').focus()}
  function closeLb(){lb.classList.remove('open');document.body.style.overflow=''}
  $$('[data-lb]').forEach(function(b){b.onclick=function(){showLb(+b.getAttribute('data-lb'))}});
  // Handy: Galerie ist ein wischbares Karussell – Zähler „2 / 7“ mitführen
  var gal=$('#dxGal'),gcount=$('#dxCount');
  if(gal&&gcount){var gt=null;gal.addEventListener('scroll',function(){if(gt)return;gt=requestAnimationFrame(function(){gt=null;var w=gal.clientWidth||1;gcount.textContent=(Math.round(gal.scrollLeft/w)+1)+' / '+imgs.length})},{passive:true})}

  // ---- Buchungsbox ----
  var bx=$('#bx');if(!bx)return;
  var id=bx.getAttribute('data-id'),isPlat=bx.getAttribute('data-platform')==='1',conn=bx.getAttribute('data-connected')==='1';
  var form=$('#bxForm'),out=$('#bxOut'),cta=$('#bxCta'),priceEl=$('#bxPrice'),mbar=$('#dxMbar');
  var availData=null,inlineCal=null,fromPrice=null,maxG=+bx.getAttribute('data-max')||0;
  form.__max=maxG;
  function cur(){return V.readForm(form)}
  function qs(v){var p=[];if(v.checkin&&v.checkout)p.push('checkin='+v.checkin,'checkout='+v.checkout);p.push('adults='+v.adults);if(v.ages.length)p.push('childrenAges='+v.ages.join(','));return p.join('&')}
  function syncUrl(){history.replaceState(null,'',location.pathname+'?'+qs(cur()))}
  function setCta(label,href,disabled,onclick){cta.textContent=label;if(href){cta.setAttribute('href',href)}else cta.removeAttribute('href');cta.setAttribute('aria-disabled',disabled?'true':'false');cta.onclick=onclick||null;
    if(mbar){var mb=$('.btn',mbar);mb.textContent=label;if(href)mb.setAttribute('href',href);else mb.removeAttribute('href');mb.onclick=onclick||(href?null:function(e){e.preventDefault();openDates()});}}
  function setMbarPrice(h){if(mbar)$('.pp',mbar).innerHTML=h}
  // Preis in der Handy-Leiste antippen: ohne Daten → Kalender, sonst zur Preisaufstellung springen
  if(mbar)$('.pp',mbar).addEventListener('click',function(){var v=cur();if(!(v.checkin&&v.checkout)){openDates();return}bx.scrollIntoView({behavior:'smooth',block:'start'})});
  function openDates(){form.querySelector('[data-open=dates]').click()}
  function guestsShort(v){return T('{n} Erw.',{n:v.adults})+(v.ages.length?' + '+T('{n} Kind(er)',{n:v.ages.length}):'')}

  function load(){
    var v=cur();syncUrl();
    if(inlineCal)inlineCal.set(v.checkin,v.checkout);
    if(!(v.checkin&&v.checkout)){
      out.innerHTML=availData&&availData.rules&&V.hintText(availData.rules)?'<div class="bx-msg info">'+VI('calendar-days')+'<span>'+esc(V.hintText(availData.rules))+'</span></div>':'';
      setCta(T('Reisedaten wählen'),null,false,function(e){e.preventDefault();openDates()});
      setMbarPrice(fromPrice?T('ab {p} / Nacht',{p:'<b>'+euro(fromPrice)+'</b>'}):'<b>'+esc(T('Verfügbarkeit prüfen'))+'</b>');
      return;
    }
    out.innerHTML='<div class="dx-small" aria-live="polite">'+T('Preis wird berechnet …')+'</div>';
    setCta(T('Preis wird berechnet …'),null,true);
    fetch('/api/quote/'+id+'?lang='+(window.__LANG||'de')+'&'+qs(v)).then(function(r){return r.json()}).then(function(d){
      if(!d.ok||!d.acc)throw 0;render(d.acc,v)}).catch(function(){out.innerHTML='<div class="bx-msg">'+T('Preis gerade nicht abrufbar. Bitte später erneut versuchen.')+'</div>';setCta(T('Erneut versuchen'),null,false,function(e){e.preventDefault();load()})});
  }
  function render(a,v){
    var o=a.offer;
    if(a.fromPrice)fromPrice=a.fromPrice;
    if(a.maxGuests&&v.adults+v.ages.length>a.maxGuests){out.innerHTML='<div class="bx-msg">'+T('Diese Unterkunft ist für maximal {n} Gäste.',{n:a.maxGuests})+'</div>';setCta(T('Gäste anpassen'),null,false,function(e){e.preventDefault();form.querySelector('[data-open=guests]').click()});return}
    if(o&&o.available){
      var h='<div class="bx-lines">';(o.breakdown||[]).forEach(function(b){h+='<div class="r"><span>'+esc(b.label)+'</span><span>'+euro(b.amount,o.currency)+'</span></div>'});
      h+='<div class="r tot"><span>'+T('Gesamt')+' ('+T('{n} Nächte',{n:o.nights})+')</span><span>'+euro(o.total,o.currency)+'</span></div></div>';
      out.innerHTML=h;
      priceEl.innerHTML='<b>'+euro(o.total,o.currency)+'</b> '+T('gesamt');
      setMbarPrice('<b>'+euro(o.total,o.currency)+'</b><span>'+esc(T(o.nights===1?'{n} Nacht':'{n} Nächte',{n:o.nights}))+' · '+guestsShort(v)+'</span><span><u>'+esc(T('Preisdetails'))+'</u></span>');
      if(a.platform)setCta(T('Weiter zur Buchung'),a.bookUrl,false);
      else setCta(T('Jetzt buchen'),(window.__BASE||'')+'/unterkuenfte?'+qs(v)+'&book='+id,false);
      return;
    }
    if(!o||o.error){out.innerHTML='<div class="bx-msg">'+T('Preis gerade nicht abrufbar. Bitte später erneut versuchen.')+'</div>';setCta(T('Erneut versuchen'),null,false,function(e){e.preventDefault();load()});return}
    var h2='<div class="bx-msg"><b>'+T('Für diese Daten nicht verfügbar.')+'</b><br>'+esc(V.whyText(o&&o.reason,a.rules))+'</div>';
    if(a.suggestions&&a.suggestions.length){h2+='<div class="rc-alt"><span class="lbl">'+T('Passende Termine in der Nähe')+'</span>'+a.suggestions.map(function(s){return '<button type="button" data-ci="'+s.checkin+'" data-co="'+s.checkout+'"><span>'+esc(V.fmtRange(s.checkin,s.checkout))+' · '+T('{n} Nächte',{n:s.nights})+'</span><b>'+euro(s.total,s.currency)+'</b></button>'}).join('')+'</div>'}
    out.innerHTML=h2;
    $$('[data-ci]',out).forEach(function(b){b.onclick=function(){V.writeForm(form,{checkin:b.getAttribute('data-ci'),checkout:b.getAttribute('data-co')});load()}});
    setCta(T('Andere Daten wählen'),null,false,function(e){e.preventDefault();openDates()});
    setMbarPrice('<b>'+esc(T('Nicht verfügbar'))+'</b><span>'+esc(V.fmtRange(v.checkin,v.checkout))+'</span>');
  }
  form.addEventListener('vb:change',load);
  form.addEventListener('submit',function(e){e.preventDefault();load()});

  function initAvail(){
    if(!isPlat){load();return}
    fetch('/api/calendar/'+id).then(function(r){return r.json()}).then(function(d){
      if(!d.ok||!d.days)throw 0;
      var map={};d.days.forEach(function(x){map[x.d]=x});
      availData={map:map,rules:d.rules,last:d.days.length?d.days[d.days.length-1].d:null};
      form.__avail=availData;
      var host=$('#dxCal');
      if(host){host.innerHTML='';inlineCal=V.Calendar(host,{avail:availData,checkin:cur().checkin,checkout:cur().checkout,onChange:function(ci,co){if(ci&&co){V.writeForm(form,{checkin:ci,checkout:co});load()}}})}
      load();
    }).catch(function(){var host=$('#dxCal');if(host)host.innerHTML='<p class="dx-small">'+T('Belegung gerade nicht abrufbar.')+'</p>';load()});
  }
  if(conn)initAvail();
})();
</script>`;

module.exports = { BOOKING_CSS, PICKER_JS, SEARCH_JS, DETAIL_JS };
