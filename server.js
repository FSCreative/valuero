// VALUERO — gebündelte App (öffentliche Website + Admin-CMS). Auto-generiert.

/* ===== styles ===== */
// CSS for the public site and the admin area, exported as strings.

const publicCSS = `
:root{
  --bg:#f4f1ea; --surface:#ffffff; --surface-2:#efeae0;
  --ink:#141b16; --muted:#5f6b64; --line:#e7e1d5;
  --accent:#1f6a49; --accent-2:#2c8760; --accent-d:#154a34; --gold:#c2a05c;
  --radius:22px; --radius-sm:14px;
  --shadow:0 34px 64px -34px rgba(20,27,22,.42); --shadow-sm:0 12px 32px -18px rgba(20,27,22,.30);
  --maxw:1200px;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{
  font-family:"Inter",system-ui,-apple-system,Segoe UI,Roboto,sans-serif;
  background:var(--bg); color:var(--ink); line-height:1.6;
  -webkit-font-smoothing:antialiased; overflow-x:hidden;
}
h1,h2,h3,.display{font-family:"Fraunces","Georgia",serif; font-weight:600; line-height:1.08; letter-spacing:-.01em}
a{color:inherit;text-decoration:none}
img{max-width:100%;display:block}
.container{max-width:var(--maxw);margin:0 auto;padding:0 24px}
.accent{color:var(--accent)}
.muted{color:var(--muted)}

/* NAV */
.nav{position:sticky;top:0;z-index:50;backdrop-filter:saturate(160%) blur(16px);
  background:rgba(16,23,19,.86);border-bottom:1px solid rgba(255,255,255,.08)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;gap:18px;height:74px;max-width:var(--maxw);margin:0 auto;padding:0 24px}
.brand{display:flex;align-items:center;gap:10px;font-family:"Fraunces",serif;font-weight:600;font-size:24px;letter-spacing:.04em;color:#fff}
.brand svg{width:34px;height:24px}
.nav-links{display:flex;align-items:center;gap:28px}
.nav-links a{font-size:15px;font-weight:500;color:#b6c2ba;position:relative;padding:4px 0;transition:color .2s}
.nav-links a:hover,.nav-links a.active{color:#fff}
.nav-links a.active::after{content:"";position:absolute;left:0;right:0;bottom:-2px;height:2px;background:var(--accent);border-radius:2px}
.nav-links a.nav-cta{display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;line-height:1;white-space:nowrap;background:var(--accent);color:#fff!important;padding:11px 22px;border-radius:999px;font-size:14px;font-weight:600;letter-spacing:.01em;box-shadow:0 6px 18px -8px rgba(47,110,82,.9);transition:background .2s,transform .2s,box-shadow .2s}
.nav-links a.nav-cta:hover{background:#3a8763;transform:translateY(-1px);box-shadow:0 10px 22px -8px rgba(47,110,82,1)}
.nav-links a.nav-cta::after{display:none!important}
.burger{display:none;flex-direction:column;gap:5px;background:none;border:0;cursor:pointer;padding:8px}
.burger span{width:24px;height:2px;background:#fff;border-radius:2px;transition:.3s}
.brand-logo{height:36px;width:auto;display:block}
.brand-has-logo{gap:0}
.foot-logo{height:46px}
.hero-logo{height:clamp(74px,15vw,168px);width:auto;display:block;margin:0 0 22px;filter:drop-shadow(0 10px 26px rgba(0,0,0,.14))}

/* HERO */
.hero{position:relative;min-height:82vh;display:flex;align-items:center;overflow:hidden;
  background:radial-gradient(120% 90% at 15% 0%,#e6eee6 0%,#eef0e8 42%,#f4f1ea 100%)}
.hero-mtn{position:absolute;left:0;right:0;bottom:-1px;width:100%;height:auto;z-index:1}
.hero-bg-img{position:absolute;inset:0;background-size:cover;background-position:center;z-index:0}
.hero-bg-img::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(245,242,236,.35),rgba(245,242,236,.85))}
.hero .container{position:relative;z-index:2;padding-top:40px;padding-bottom:120px}
.hero .eyebrow{display:inline-flex;align-items:center;gap:8px;text-transform:uppercase;letter-spacing:.2em;font-size:12px;font-weight:700;color:var(--accent-d);margin-bottom:20px;background:rgba(31,106,73,.09);padding:7px 14px;border-radius:999px}
.hero h1{font-size:clamp(44px,7.4vw,90px);max-width:15ch;letter-spacing:-.025em;line-height:1.02}
.hero p.lead{font-size:clamp(17px,2.2vw,23px);color:var(--muted);max-width:54ch;margin-top:22px}
.hero-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:22px}

/* BUTTONS */
.btn{display:inline-flex;align-items:center;gap:8px;border-radius:999px;padding:14px 28px;font-weight:600;font-size:15px;cursor:pointer;border:1px solid transparent;transition:transform .2s,background .2s,box-shadow .2s;font-family:inherit}
.btn-primary{background:var(--accent);color:#fff;box-shadow:0 10px 24px -12px rgba(31,106,73,.9)}
.btn-primary:hover{background:var(--accent-2);transform:translateY(-2px);box-shadow:0 16px 30px -12px rgba(31,106,73,1)}
.btn-ghost{background:rgba(255,255,255,.6);border-color:var(--line);color:var(--ink);backdrop-filter:blur(6px)}
.btn-ghost:hover{background:var(--surface);border-color:var(--accent);transform:translateY(-2px)}

/* SECTIONS */
section{position:relative}
.section{padding:90px 0}
.section-head{max-width:620px;margin-bottom:46px}
.section-head .eyebrow{text-transform:uppercase;letter-spacing:.24em;font-size:12px;font-weight:600;color:var(--accent);margin-bottom:14px}
.section-head h2{font-size:clamp(30px,4.5vw,46px)}
.section-head p{color:var(--muted);font-size:18px;margin-top:14px}

/* HOME CATEGORY CARDS */
.cat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.cat-card{position:relative;border-radius:var(--radius);overflow:hidden;min-height:420px;display:flex;align-items:flex-end;
  box-shadow:var(--shadow);color:#fff;background:#2a3a30;isolation:isolate}
.cat-card .ph{position:absolute;inset:0;background-size:cover;background-position:center;transition:transform .7s ease;z-index:-2}
.cat-card::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,20,14,0) 30%,rgba(10,20,14,.82));z-index:-1}
.cat-card:hover .ph{transform:scale(1.06)}
.cat-card .cc-body{padding:28px}
.cat-card h3{font-size:27px;color:#fff;display:flex;align-items:center;gap:8px}
.cat-card p{color:rgba(255,255,255,.86);margin-top:8px;font-size:15px}
.cat-card .cc-arrow{margin-top:16px;font-size:14px;font-weight:600;letter-spacing:.04em;display:inline-flex;gap:6px;align-items:center}

/* FILTER BAR */
.filters{display:flex;flex-wrap:wrap;gap:24px;margin-bottom:34px;padding:22px;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius)}
.filter-group{display:flex;flex-direction:column;gap:8px}
.filter-group .fl{font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:var(--muted)}
.pills{display:flex;flex-wrap:wrap;gap:8px}
.pill{border:1px solid var(--line);background:var(--bg);border-radius:999px;padding:7px 14px;font-size:13px;font-weight:500;cursor:pointer;transition:.15s;color:var(--ink)}
.pill:hover{border-color:var(--accent)}
.pill.active{background:var(--accent);border-color:var(--accent);color:#fff}

/* LISTING GRID */
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px}
.card{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;display:flex;flex-direction:column;transition:.25s;box-shadow:0 10px 30px -22px rgba(22,32,27,.5)}
.card:hover{transform:translateY(-5px);box-shadow:var(--shadow)}
.card-img{aspect-ratio:4/3;background-size:cover;background-position:center;position:relative;background-color:#dfe5de;transition:transform .6s ease}
.card:hover .card-img{transform:scale(1.05)}
.card-badge{position:absolute;top:12px;left:12px;background:rgba(255,255,255,.92);color:var(--accent-d);font-size:12px;font-weight:600;padding:5px 11px;border-radius:999px}
.card-body{padding:20px 20px 22px;display:flex;flex-direction:column;gap:10px;flex:1}
.card-body h3{font-size:21px}
.card-meta{display:flex;flex-wrap:wrap;gap:8px;font-size:12px;color:var(--muted)}
.chip{background:var(--surface-2);border-radius:999px;padding:4px 10px;font-weight:500}
.rating{color:var(--gold);font-weight:600;font-size:14px}
.card p.desc{color:var(--muted);font-size:14.5px;flex:1}
.card .card-foot{margin-top:6px}
.card-link{color:var(--accent);font-weight:600;font-size:14px;display:inline-flex;align-items:center;gap:6px}
.no-results{grid-column:1/-1;text-align:center;color:var(--muted);padding:40px}

/* PAGE HERO (subpages) */
.page-hero{padding:66px 0 32px;background:radial-gradient(110% 100% at 12% 0%,#e6eee6,#f4f1ea 70%)}
.page-hero .eyebrow{text-transform:uppercase;letter-spacing:.24em;font-size:12px;font-weight:600;color:var(--accent);margin-bottom:12px}
.page-hero h1{font-size:clamp(32px,5.5vw,58px)}
.page-hero p{color:var(--muted);font-size:18px;margin-top:14px;max-width:60ch}

/* ABOUT */
.about-meaning{display:flex;gap:40px;flex-wrap:wrap;font-size:19px;color:var(--muted);margin-bottom:10px}
.about-block{display:grid;grid-template-columns:1fr 1fr;gap:50px;align-items:center;padding:60px 0;border-top:1px solid var(--line)}
.about-block h2{font-size:clamp(28px,4vw,42px)}
.about-block p{color:var(--muted);font-size:17px;margin-top:14px}
.about-visual{aspect-ratio:4/3;border-radius:var(--radius);background:linear-gradient(150deg,#2f6e52,#234f3c);box-shadow:var(--shadow);position:relative;overflow:hidden;background-size:cover;background-position:center}

/* FORM */
.form-wrap{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:34px;max-width:680px;box-shadow:0 10px 30px -22px rgba(22,32,27,.4)}
.form-row{display:flex;flex-direction:column;gap:6px;margin-bottom:18px}
.form-row.two{display:grid;grid-template-columns:1fr 1fr;gap:16px}
label{font-size:13px;font-weight:600;color:var(--ink)}
input,select,textarea{font-family:inherit;font-size:15px;padding:12px 14px;border:1px solid var(--line);border-radius:12px;background:var(--bg);color:var(--ink);width:100%}
input:focus,select:focus,textarea:focus{outline:none;border-color:var(--accent);background:#fff}
textarea{resize:vertical;min-height:90px}
.form-note{font-size:13px;color:var(--muted);margin:6px 0 18px}
.form-success{background:#e6f1ea;border:1px solid #bfdcc9;color:var(--accent-d);padding:14px 18px;border-radius:12px;margin-bottom:20px}

/* FOOTER */
.footer{background:#16201b;color:#cdd6cf;margin-top:60px;padding:56px 0 30px}
.footer .brand{color:#fff}
.foot-grid{display:flex;justify-content:space-between;flex-wrap:wrap;gap:30px;margin-bottom:36px}
.foot-col h4{color:#fff;font-family:"Fraunces",serif;font-size:18px;margin-bottom:12px}
.foot-col a{display:block;color:#aab6ad;font-size:14px;padding:3px 0}
.foot-col a:hover{color:#fff}
.foot-bottom{border-top:1px solid rgba(255,255,255,.12);padding-top:20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;font-size:13px;color:#8b988e}
.foot-admin{border:1px solid rgba(255,255,255,.18);color:#aab6ad;padding:5px 13px;border-radius:999px;font-size:12px;font-weight:600;transition:.2s}
.foot-admin:hover{background:var(--accent);border-color:var(--accent);color:#fff}

/* LEGAL / RICH TEXT */
.rich{max-width:760px}
.rich h2{font-size:30px;margin:0 0 18px}
.rich h3{font-size:20px;margin:26px 0 8px}
.rich p{color:var(--muted);margin-bottom:12px}

.reveal{opacity:0;transform:translateY(22px);transition:opacity .7s ease,transform .7s ease}
.reveal.in{opacity:1;transform:none}

/* RESPONSIVE */
@media(max-width:900px){
  .cat-grid{grid-template-columns:1fr 1fr}
  .grid{grid-template-columns:1fr 1fr}
  .about-block{grid-template-columns:1fr;gap:24px}
}
@media(max-width:720px){
  .nav-inner{height:62px}
  .nav-links{position:fixed;inset:62px 0 auto 0;flex-direction:column;align-items:flex-start;background:rgba(16,23,19,.97);padding:20px 24px 26px;gap:6px;border-bottom:1px solid rgba(255,255,255,.08);box-shadow:0 20px 40px -20px rgba(0,0,0,.5);transform:translateY(-130%);transition:transform .35s ease;z-index:40}
  .nav-links.open{transform:none}
  .nav-links a{padding:11px 0;font-size:17px;width:100%}
  .nav-links a.nav-cta{margin-top:8px;padding:12px 22px;align-self:flex-start}
  .burger{display:flex}
  .cat-grid,.grid{grid-template-columns:1fr;gap:18px}
  .form-row.two{grid-template-columns:1fr;gap:0}
  .hero{min-height:auto}
  .hero .container{padding-top:34px;padding-bottom:90px}
  .about-meaning{gap:10px;flex-direction:column;font-size:17px}
  .section{padding:56px 0}
  .page-hero{padding:44px 0 24px}
  .footer{padding:44px 0 26px}
  .foot-grid{flex-direction:column;gap:26px}
  .foot-bottom{flex-direction:column;align-items:flex-start;text-align:left}
  .filters{padding:18px;gap:18px}
  .about-block{padding:40px 0}
  .form-wrap{padding:24px 20px}
  .hero-actions .btn,.hero-actions{width:100%}
  .hero-actions{flex-direction:column}
}
@media(max-width:480px){
  .container{padding:0 18px}
  .nav-inner{padding:0 18px}
  .card-body{padding:18px 16px 20px}
  .section-head h2{font-size:28px}
  .cat-card{min-height:340px}
}
@media(prefers-reduced-motion:reduce){.reveal{opacity:1;transform:none}.cat-card .ph{transition:none}}

/* ===== BOOKING TOOL ===== */
.searchbar{display:flex;flex-wrap:wrap;gap:0;background:var(--surface);border:1px solid var(--line);border-radius:20px;padding:7px;box-shadow:var(--shadow);align-items:stretch}
.searchbar .sf{display:flex;flex-direction:column;justify-content:center;gap:2px;flex:1 1 150px;padding:11px 18px;border-radius:14px;transition:background .15s;position:relative;cursor:text}
.searchbar .sf:hover{background:var(--surface-2)}
.searchbar .sf+.sf::before{content:"";position:absolute;left:0;top:14px;bottom:14px;width:1px;background:var(--line)}
.searchbar .sf label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:var(--muted)}
.searchbar .sf input,.searchbar .sf select{border:0;background:transparent;padding:2px 0;font-size:15.5px;font-weight:600;color:var(--ink);font-family:inherit;width:100%;cursor:pointer}
.searchbar .sf input:focus,.searchbar .sf select:focus{outline:none}
.searchbar .sf.go{flex:0 0 auto;padding:5px;align-items:stretch;justify-content:stretch}
.searchbar .sf.go::before{display:none}
.searchbar .btn-search{display:inline-flex;align-items:center;gap:8px;background:var(--accent);color:#fff;border:0;border-radius:15px;padding:0 30px;font-weight:600;font-size:15.5px;cursor:pointer;white-space:nowrap;min-height:56px;font-family:inherit;transition:background .2s,transform .2s;box-shadow:0 10px 22px -12px rgba(31,106,73,.9)}
.searchbar .btn-search::before{content:"\\1F50D";font-size:15px}
.searchbar .btn-search:hover{background:var(--accent-2);transform:translateY(-1px)}
.hero .searchbar{margin-top:28px;max-width:820px}
.booking-hero{padding-bottom:26px}
.booking-layout{display:grid;grid-template-columns:262px 1fr;gap:28px;align-items:start}
.filters-panel{position:sticky;top:92px;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:20px;display:flex;flex-direction:column;gap:18px}
.filters-panel h4{font-size:12px;text-transform:uppercase;letter-spacing:.11em;color:var(--muted);margin-bottom:10px}
.fp-group{border-top:1px solid var(--line);padding-top:16px}
.fp-group:first-child{border-top:0;padding-top:0}
.chk{display:flex;align-items:center;gap:9px;font-size:14px;padding:5px 0;cursor:pointer;color:var(--ink)}
.chk input{accent-color:var(--accent);width:16px;height:16px}
.price-range{display:flex;flex-direction:column;gap:8px}
.price-range input[type=range]{width:100%;accent-color:var(--accent)}
.price-range .lbl{font-size:14px;font-weight:600;color:var(--accent-d)}
.results-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;gap:12px;flex-wrap:wrap}
.results-head .rc{font-weight:600;font-size:15px}
.results-head select{border:1px solid var(--line);border-radius:10px;padding:9px 12px;font-size:14px;background:var(--surface);color:var(--ink);font-family:inherit}
.booking-grid{grid-template-columns:repeat(2,1fr)}
.bk-card{background:var(--surface);border:1px solid var(--line);border-radius:20px;overflow:hidden;display:flex;flex-direction:column;box-shadow:var(--shadow-sm);transition:transform .25s,box-shadow .25s}
.bk-card:hover{transform:translateY(-5px);box-shadow:var(--shadow)}
.bk-card .img{aspect-ratio:16/10;background-size:cover;background-position:center;position:relative;background-color:#dfe5de;transition:transform .6s ease}
.bk-card:hover .img{transform:scale(1.06)}
.bk-card .img.noimg{background:linear-gradient(150deg,#3a6b54,#1f3a2c)}
.bk-card .badge{position:absolute;top:12px;left:12px;background:rgba(255,255,255,.94);color:var(--accent-d);font-size:12px;font-weight:600;padding:5px 11px;border-radius:999px}
.bk-card .body{padding:18px;display:flex;flex-direction:column;gap:9px;flex:1}
.bk-card h3{font-size:20px}
.bk-card .desc{color:var(--muted);font-size:14px}
.bk-card .feat-row{display:flex;flex-wrap:wrap;gap:6px;font-size:12px;color:var(--muted)}
.bk-card .feat-row .fi{background:var(--surface-2);border-radius:999px;padding:3px 9px}
.price-box{margin-top:auto;border-top:1px solid var(--line);padding-top:14px;display:flex;justify-content:space-between;align-items:flex-end;gap:10px}
.price-box .pn{font-size:13px;color:var(--muted);line-height:1.35}
.price-box .pn b{font-family:"Fraunces",serif;font-size:23px;color:var(--ink)}
.price-box .pn .tot{display:block;font-size:12px;color:var(--muted);margin-top:2px}
.btn-book{background:var(--accent);color:#fff;border:0;border-radius:12px;padding:12px 20px;font-weight:600;font-size:14px;cursor:pointer;white-space:nowrap;font-family:inherit;transition:background .2s,transform .2s;box-shadow:0 8px 18px -10px rgba(31,106,73,.9)}
.btn-book:hover{background:var(--accent-2);transform:translateY(-1px)}
.btn-web{display:inline-block;background:transparent;border:1px solid var(--line);color:var(--accent-d);border-radius:10px;padding:10px 16px;font-weight:600;font-size:14px;transition:.2s}
.btn-web:hover{border-color:var(--accent);background:var(--surface-2)}
.note-web{font-size:13px;color:var(--muted)}
.soldout{color:#b4553f;font-weight:600;font-size:14px}
.loading,.empty{grid-column:1/-1;text-align:center;color:var(--muted);padding:46px}
.bk-overlay{position:fixed;inset:0;background:rgba(16,23,19,.55);backdrop-filter:blur(4px);z-index:100;display:none;align-items:flex-start;justify-content:center;padding:38px 16px;overflow:auto}
.bk-overlay.open{display:flex}
.bk-modal{background:var(--surface);border-radius:20px;max-width:560px;width:100%;box-shadow:var(--shadow);overflow:hidden;animation:pop .25s ease}
@keyframes pop{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
.bk-modal .mh{padding:22px 24px;border-bottom:1px solid var(--line);display:flex;justify-content:space-between;align-items:flex-start;gap:12px}
.bk-modal .mh h3{font-size:22px}
.bk-modal .mh .es{font-size:13px;color:var(--muted);margin-top:2px}
.bk-modal .mb{padding:22px 24px;display:flex;flex-direction:column;gap:16px}
.bk-close{background:none;border:0;font-size:26px;cursor:pointer;color:var(--muted);line-height:1;padding:0}
.summary{background:var(--surface-2);border-radius:12px;padding:14px 16px;font-size:14px;display:flex;flex-direction:column;gap:6px}
.summary .row{display:flex;justify-content:space-between;gap:12px}
.summary .total{border-top:1px solid var(--line);padding-top:8px;margin-top:2px;font-weight:700;font-size:16px}
.bk-form{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.bk-form .full{grid-column:1/-1}
.bk-form label{font-size:12px;font-weight:600;display:block;margin-bottom:4px;color:var(--ink)}
.bk-form .chk{font-size:13px}
.msg{padding:13px 15px;border-radius:10px;font-size:14px;line-height:1.5}
.msg.err{background:#fbe8e4;color:#a23b26;border:1px solid #f0c4b9}
.msg.ok{background:#e6f1ea;color:var(--accent-d);border:1px solid #bfdcc9}
@media(max-width:900px){.booking-layout{grid-template-columns:1fr}.filters-panel{position:static}.booking-grid{grid-template-columns:1fr 1fr}}
@media(max-width:680px){.booking-grid{grid-template-columns:1fr}.bk-form{grid-template-columns:1fr}.searchbar{gap:2px}.searchbar .sf{flex:1 1 100%}.searchbar .sf+.sf::before{display:none}.searchbar .sf.go{padding-top:6px}.searchbar .btn-search{width:100%;justify-content:center}}
`;

const adminCSS = `
:root{--bg:#0f1512;--surface:#172019;--surface-2:#1e2a22;--ink:#eaf0ec;--muted:#92a298;--line:#28352c;--accent:#48a87a;--accent-d:#2f6e52;--danger:#d96a5b;--radius:14px}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:"Inter",system-ui,sans-serif;background:var(--bg);color:var(--ink);line-height:1.55}
a{color:var(--accent);text-decoration:none}
.admin-shell{display:flex;min-height:100vh}
.sidebar{width:248px;background:var(--surface);border-right:1px solid var(--line);padding:24px 18px;position:sticky;top:0;height:100vh;flex-shrink:0}
.sidebar .logo{font-family:"Fraunces",serif;font-size:22px;letter-spacing:.05em;margin-bottom:4px;color:#fff}
.sidebar .sub{font-size:12px;color:var(--muted);margin-bottom:26px}
.sidebar nav a{display:flex;align-items:center;justify-content:space-between;padding:11px 14px;border-radius:10px;color:var(--muted);font-size:14.5px;font-weight:500;margin-bottom:4px}
.sidebar nav a:hover{background:var(--surface-2);color:var(--ink)}
.sidebar nav a.active{background:var(--accent-d);color:#fff}
.sidebar .badge{background:var(--danger);color:#fff;font-size:11px;font-weight:700;border-radius:999px;padding:2px 8px}
.sidebar .foot{position:absolute;bottom:20px;left:18px;right:18px;font-size:13px}
.main{flex:1;padding:34px 40px;max-width:1080px}
.page-title{display:flex;align-items:center;justify-content:space-between;margin-bottom:26px;gap:16px;flex-wrap:wrap}
.page-title h1{font-family:"Fraunces",serif;font-size:30px;color:#fff}
.btn{display:inline-flex;align-items:center;gap:7px;border-radius:10px;padding:10px 18px;font-weight:600;font-size:14px;cursor:pointer;border:1px solid transparent;font-family:inherit;transition:.15s}
.btn-primary{background:var(--accent);color:#06140d}
.btn-primary:hover{background:#5cbf8c}
.btn-ghost{background:var(--surface-2);color:var(--ink);border-color:var(--line)}
.btn-ghost:hover{border-color:var(--accent)}
.btn-danger{background:transparent;color:var(--danger);border-color:var(--danger)}
.btn-danger:hover{background:var(--danger);color:#fff}
.btn-sm{padding:7px 13px;font-size:13px}
.cards-list{display:flex;flex-direction:column;gap:12px}
.row{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:16px 18px;display:flex;align-items:center;gap:16px}
.row .thumb{width:64px;height:64px;border-radius:10px;background:var(--surface-2);background-size:cover;background-position:center;flex-shrink:0}
.row .info{flex:1;min-width:0}
.row .info h3{font-size:16px;margin-bottom:3px}
.row .info p{font-size:13px;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.row .acts{display:flex;gap:8px;flex-shrink:0}
.tag{display:inline-block;font-size:11px;font-weight:600;padding:3px 9px;border-radius:999px;background:var(--surface-2);color:var(--muted);margin-right:6px}
.tag.pending{background:#3a2d18;color:#e0b15a}
.tag.approved{background:#1c3326;color:#5cbf8c}
.tag.rejected{background:#3a2020;color:#d96a5b}
.form-card{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:28px;max-width:760px}
.fr{display:flex;flex-direction:column;gap:6px;margin-bottom:16px}
.fr.two{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.admin-shell label{font-size:13px;font-weight:600}
.admin-shell input,.admin-shell select,.admin-shell textarea{font-family:inherit;font-size:14px;padding:11px 13px;border:1px solid var(--line);border-radius:10px;background:var(--bg);color:var(--ink);width:100%}
.admin-shell input:focus,.admin-shell select:focus,.admin-shell textarea:focus{outline:none;border-color:var(--accent)}
.admin-shell textarea{resize:vertical;min-height:80px}
.hint{font-size:12px;color:var(--muted)}
.imgprev{width:120px;height:90px;border-radius:10px;background:var(--surface-2);background-size:cover;background-position:center;margin-top:8px;border:1px solid var(--line)}
.form-actions{display:flex;gap:10px;margin-top:8px}
.stat-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:30px}
.stat{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:20px}
.stat .n{font-family:"Fraunces",serif;font-size:34px;color:#fff}
.stat .l{font-size:13px;color:var(--muted)}
.login-wrap{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px}
.login-card{background:var(--surface);border:1px solid var(--line);border-radius:18px;padding:38px;width:100%;max-width:380px}
.login-card .logo{font-family:"Fraunces",serif;font-size:26px;color:#fff;letter-spacing:.05em;text-align:center;margin-bottom:6px}
.login-card .sub{text-align:center;color:var(--muted);font-size:13px;margin-bottom:24px}
.err{background:#3a2020;color:#e89b8f;border:1px solid #5e2f2f;padding:10px 14px;border-radius:10px;font-size:13px;margin-bottom:16px}
.section-divider{border:0;border-top:1px solid var(--line);margin:26px 0}
.wd-group{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:22px;margin-bottom:18px}
.wd-group h3{font-family:"Fraunces",serif;font-size:18px;color:#fff;margin-bottom:14px}
.section-sep{display:flex;align-items:center;gap:10px;margin:26px 0 14px;font-family:"Fraunces",serif;font-size:17px;color:#fff}
.section-sep::after{content:"";flex:1;height:1px;background:var(--line)}
.feature-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px 14px;margin-top:4px}
.feat{display:flex;align-items:center;gap:8px;font-weight:500;font-size:13.5px;color:var(--ink);cursor:pointer;background:var(--bg);border:1px solid var(--line);border-radius:10px;padding:9px 11px;transition:.15s}
.feat:hover{border-color:var(--accent)}
.feat input{width:auto!important;accent-color:var(--accent);flex:0 0 auto}
.feat span{user-select:none}
.beds-badge{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:600;padding:3px 10px;border-radius:999px;border:1px solid var(--line)}
.beds-badge.on{background:rgba(72,168,122,.16);color:var(--accent);border-color:rgba(72,168,122,.4)}
.beds-badge.off{background:var(--surface-2);color:var(--muted)}
@media(max-width:760px){.sidebar{display:none}.main{padding:20px}.fr.two,.stat-grid,.feature-grid{grid-template-columns:1fr 1fr}}
`;


/* ===== views ===== */
// Public site HTML rendering.

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Booking-tool feature set (booking.com-style filters). The admin picks which
// apply to each accommodation; guests filter by them on the Unterkünfte page.
const FEATURES = [
  { key: "wifi", label: "WLAN", icon: "📶" },
  { key: "parking", label: "Parkplatz", icon: "🅿️" },
  { key: "garage", label: "Tiefgarage", icon: "🚗" },
  { key: "ski", label: "Ski In & Out", icon: "🎿" },
  { key: "sauna", label: "Sauna", icon: "🧖" },
  { key: "steam", label: "Dampfbad", icon: "💨" },
  { key: "wellness", label: "Wellness / Spa", icon: "💆" },
  { key: "pool", label: "Pool", icon: "🏊" },
  { key: "breakfast", label: "Frühstück", icon: "🥐" },
  { key: "kitchen", label: "Küche", icon: "🍳" },
  { key: "pets", label: "Haustiere erlaubt", icon: "🐾" },
  { key: "family", label: "Familienfreundlich", icon: "👨‍👩‍👧" },
  { key: "balcony", label: "Balkon / Terrasse", icon: "🌄" },
  { key: "mountainview", label: "Bergblick", icon: "⛰️" },
  { key: "tv", label: "TV", icon: "📺" },
  { key: "washer", label: "Waschmaschine", icon: "🧺" },
  { key: "evcharge", label: "E-Ladestation", icon: "🔌" },
  { key: "nonsmoking", label: "Nichtraucher", icon: "🚭" },
  { key: "crib", label: "Kinderbett", icon: "🍼" },
];
const FEATURE_LABEL = Object.fromEntries(FEATURES.map((f) => [f.key, f.label]));
const FEATURE_ICON = Object.fromEntries(FEATURES.map((f) => [f.key, f.icon]));

// Parse a stored feature string ("wifi,sauna" or "wifi|sauna") into keys.
function parseFeatures(str) {
  return String(str || "")
    .split(/[,|]/)
    .map((s) => s.trim())
    .filter((k) => FEATURE_LABEL[k]);
}

const MTN = `<svg viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 22 L12 5 L17 13 L21 7 L32 22 Z" fill="currentColor"/><path d="M12 5 L15 10 L13.5 12 L10.5 9 Z" fill="#fff" opacity=".85"/></svg>`;

function gradientFor(seed) {
  const palettes = [
    "linear-gradient(150deg,#3a6b54,#1f3a2c)",
    "linear-gradient(150deg,#4a6c7a,#243640)",
    "linear-gradient(150deg,#7a6a4a,#3a3024)",
    "linear-gradient(150deg,#5a7a52,#2c3a24)",
    "linear-gradient(150deg,#6a5a7a,#2f2440)",
  ];
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return palettes[h % palettes.length];
}

function imgStyle(image, seed) {
  if (image && image.length > 5)
    return `background-image:url('${esc(image)}')`;
  return `background-image:${gradientFor(seed || "v")}`;
}

function brandMark(c, variant) {
  c = c || {};
  if (c.logo_image) {
    const cls = variant === "foot" ? "brand-logo foot-logo" : "brand-logo";
    return `<a class="brand brand-has-logo" href="/"><img class="${cls}" src="${esc(
      c.logo_image
    )}" alt="VALUERO"></a>`;
  }
  const accent = variant === "foot" ? "" : "accent";
  return `<a class="brand" href="/"><span class="${accent}">${MTN}</span>VALUERO</a>`;
}

function nav(active, c) {
  const link = (href, label) =>
    `<a href="${href}" class="${active === href ? "active" : ""}">${label}</a>`;
  return `
  <header class="nav">
    <div class="nav-inner">
      ${brandMark(c)}
      <nav class="nav-links" id="navlinks">
        ${link("/", "Home")}
        ${link("/unterkuenfte", "Unterkünfte")}
        ${link("/gastronomie", "Gastronomie")}
        ${link("/veranstaltungen", "Veranstaltungen")}
        ${link("/ueber-uns", "Über Valuero")}
        <a class="nav-cta" href="/ueber-uns#anfrage">Partner werden</a>
      </nav>
      <button class="burger" id="burger" aria-label="Menü"><span></span><span></span><span></span></button>
    </div>
  </header>`;
}

function footer(c) {
  const y = new Date().getFullYear();
  return `
  <footer class="footer">
    <div class="container">
      <div class="foot-grid">
        <div class="foot-col">
          ${brandMark(c, "foot")}
          <p style="color:#9aa79d;font-size:14px;margin-top:12px;max-width:34ch">${esc(
            c.site_tagline
          )} im Hochmontafon.</p>
        </div>
        <div class="foot-col">
          <h4>Entdecken</h4>
          <a href="/unterkuenfte">Unterkünfte</a>
          <a href="/gastronomie">Gastronomie</a>
          <a href="/veranstaltungen">Veranstaltungen</a>
          <a href="/ueber-uns">Über Valuero</a>
        </div>
        <div class="foot-col">
          <h4>Rechtliches</h4>
          <a href="/agb">AGB</a>
          <a href="/datenschutz">Datenschutz</a>
          <a href="/impressum">Impressum</a>
        </div>
        <div class="foot-col">
          <h4>Kontakt</h4>
          <a href="mailto:${esc(c.contact_email)}">${esc(c.contact_email)}</a>
          <a href="https://www.fs-creative.at" target="_blank" rel="noopener">www.fs-creative.at</a>
        </div>
      </div>
      <div class="foot-bottom">
        <span>© ${y} by FS Creative</span>
        <span>VALUERO – ${esc(c.site_tagline)}</span>
        <a href="/admin" class="foot-admin">Admin</a>
      </div>
    </div>
  </footer>`;
}

const SCRIPT = `
<script>
(function(){
  var b=document.getElementById('burger'),n=document.getElementById('navlinks');
  if(b)b.addEventListener('click',function(){n.classList.toggle('open')});
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.08});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
  // Reveal anything already within (or near) the viewport on load.
  function revealVisible(){
    var vh=window.innerHeight||document.documentElement.clientHeight;
    document.querySelectorAll('.reveal:not(.in)').forEach(function(el){
      if(el.getBoundingClientRect().top < vh*0.92) el.classList.add('in');
    });
  }
  revealVisible();
  window.addEventListener('load',revealVisible);
  setTimeout(revealVisible,400);
  // Date inputs: min = today; departure must be after arrival.
  var today=new Date().toISOString().slice(0,10);
  document.querySelectorAll('input[type=date]').forEach(function(d){if(!d.min)d.min=today});
  document.querySelectorAll('.searchbar').forEach(function(sb){
    var ci=sb.querySelector('input[name=checkin]'),co=sb.querySelector('input[name=checkout]');
    if(ci&&co){ci.addEventListener('change',function(){
      var d=new Date(ci.value);d.setDate(d.getDate()+1);var min=d.toISOString().slice(0,10);
      co.min=min;if(!co.value||co.value<=ci.value)co.value=min;});}
  });
})();
</script>`;

function layout({ title, active, body, content, extraScript }) {
  return `<!doctype html><html lang="de"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="VALUERO – ${esc(content.site_tagline)} im Hochmontafon. Unterkünfte, Gastronomie und Veranstaltungen.">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<style>${publicCSS}</style>
</head><body>
${nav(active, content)}
${body}
${footer(content)}
${SCRIPT}
${extraScript || ""}
</body></html>`;
}

/* ---------------- HOME ---------------- */
function homePage(c) {
  const heroImg = c.home_hero_image
    ? `<div class="hero-bg-img" style="background-image:url('${esc(
        c.home_hero_image
      )}')"></div>`
    : "";
  const cat = (href, title, text, img, seed) => `
    <a class="cat-card reveal" href="${href}">
      <div class="ph" style="${imgStyle(img, seed)}"></div>
      <div class="cc-body">
        <h3>${title}</h3>
        <p>${esc(text)}</p>
        <span class="cc-arrow">Entdecken →</span>
      </div>
    </a>`;
  const body = `
  <section class="hero">
    ${heroImg}
    <svg class="hero-mtn" viewBox="0 0 1440 220" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 220 L260 70 L420 150 L640 30 L820 140 L1040 60 L1240 160 L1440 90 L1440 220 Z" fill="#cdd8cd" opacity=".55"/>
      <path d="M0 220 L300 120 L520 180 L760 90 L980 170 L1200 110 L1440 180 L1440 220 Z" fill="#b7c6b8" opacity=".55"/>
    </svg>
    <div class="container">
      ${c.logo_image ? `<img class="hero-logo" src="${esc(c.logo_image)}" alt="VALUERO">` : ""}
      <div class="eyebrow">${esc(c.site_tagline)} · Hochmontafon</div>
      <h1>${esc(c.home_hero_title)}</h1>
      <p class="lead">${esc(c.home_hero_sub)}</p>
      ${searchBar({})}
      <div class="hero-actions">
        <a class="btn btn-ghost" href="/unterkuenfte">Alle Unterkünfte ansehen</a>
        <a class="btn btn-ghost" href="/veranstaltungen">Veranstaltungen</a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head reveal">
        <div class="eyebrow">Willkommen</div>
        <h2>Dein Urlaub. Regional kuratiert.</h2>
        <p>${esc(c.home_intro)}</p>
      </div>
      <div class="cat-grid">
        ${cat("/unterkuenfte", "Unterkünfte", c.home_card_unterkuenfte, c.unterkuenfte_hero_image, "unterkuenfte")}
        ${cat("/gastronomie", "Gastronomie", c.home_card_gastronomie, c.gastronomie_hero_image, "gastronomie")}
        ${cat("/veranstaltungen", "Veranstaltungen", c.home_card_veranstaltungen, c.veranstaltungen_hero_image, "events")}
      </div>
    </div>
  </section>`;
  return layout({ title: "VALUERO | " + c.site_tagline, active: "/", body, content: c });
}

/* ---------------- LISTING (Unterkünfte / Gastro) ---------------- */
function listingCard(item, isGastro) {
  const tagsStr = isGastro ? item.tags : item.amenities;
  const tags = (tagsStr || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const dataLoc = esc(item.location || "");
  const dataType = esc(item.type || "");
  const dataTags = esc((tags.join("|") || "").toLowerCase());
  const titleInner = `${esc(item.name)}`;
  const title = item.link
    ? `<a href="${esc(item.link)}" target="_blank" rel="noopener">${titleInner}</a>`
    : titleInner;
  return `
  <article class="card reveal" data-loc="${dataLoc}" data-type="${dataType}" data-tags="${dataTags}">
    <div class="card-img" style="${imgStyle(item.image, item.name)}">
      ${item.badge ? `<span class="card-badge">${esc(item.badge)}</span>` : ""}
    </div>
    <div class="card-body">
      <h3>${title}</h3>
      ${item.rating ? `<div class="rating">★ ${esc(item.rating)}</div>` : ""}
      <p class="desc">${esc(item.description)}</p>
      <div class="card-meta">
        ${item.location ? `<span class="chip">${esc(item.location)}</span>` : ""}
        ${item.type ? `<span class="chip">${esc(item.type)}</span>` : ""}
      </div>
      ${
        item.link
          ? `<div class="card-foot"><a class="card-link" href="${esc(
              item.link
            )}" target="_blank" rel="noopener">Direkt buchen →</a></div>`
          : ""
      }
    </div>
  </article>`;
}

function uniq(arr) {
  return Array.from(new Set(arr.filter(Boolean)));
}

function filterBar(items, isGastro) {
  const locs = uniq(items.map((i) => i.location));
  const types = uniq(items.map((i) => i.type));
  const tagSet = uniq(
    items
      .flatMap((i) => (isGastro ? i.tags : i.amenities || "").split(","))
      .map((s) => s.trim())
  );
  const pillRow = (label, group, values) => `
    <div class="filter-group">
      <span class="fl">${label}</span>
      <div class="pills" data-group="${group}">
        <button class="pill active" data-val="">Alle</button>
        ${values
          .map((v) => `<button class="pill" data-val="${esc(v).toLowerCase()}">${esc(v)}</button>`)
          .join("")}
      </div>
    </div>`;
  return `
  <div class="filters">
    ${pillRow("Ort", "loc", locs)}
    ${pillRow(isGastro ? "Art" : "Unterkunftstyp", "type", types)}
    ${tagSet.length ? pillRow(isGastro ? "Angebot" : "Annehmlichkeiten", "tags", tagSet) : ""}
  </div>`;
}

const FILTER_SCRIPT = `
<script>
(function(){
  var sel={loc:'',type:'',tags:''};
  document.querySelectorAll('.pills').forEach(function(p){
    p.addEventListener('click',function(e){
      var b=e.target.closest('.pill');if(!b)return;
      var g=p.getAttribute('data-group');
      p.querySelectorAll('.pill').forEach(function(x){x.classList.remove('active')});
      b.classList.add('active');sel[g]=b.getAttribute('data-val');apply();
    });
  });
  function apply(){
    var any=false;
    document.querySelectorAll('.card').forEach(function(c){
      var loc=(c.getAttribute('data-loc')||'').toLowerCase();
      var type=(c.getAttribute('data-type')||'').toLowerCase();
      var tags=(c.getAttribute('data-tags')||'');
      var ok=(!sel.loc||loc===sel.loc)&&(!sel.type||type===sel.type)&&(!sel.tags||tags.split('|').indexOf(sel.tags)>-1);
      c.style.display=ok?'':'none';if(ok)any=true;
    });
    var nr=document.getElementById('noresults');if(nr)nr.style.display=any?'none':'block';
  }
})();
</script>`;

/* ---------------- BOOKING TOOL (Unterkünfte) ---------------- */
// Search bar used on the home hero and on top of the Unterkünfte tool.
function searchBar(prefill) {
  prefill = prefill || {};
  const ci = esc(prefill.checkin || "");
  const co = esc(prefill.checkout || "");
  const g = parseInt(prefill.guests, 10) || 2;
  const guestOpts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    .map((n) => `<option value="${n}" ${n === g ? "selected" : ""}>${n} ${n === 1 ? "Gast" : "Gäste"}</option>`)
    .join("");
  return `
  <form class="searchbar" id="searchForm" action="/unterkuenfte" method="get">
    <div class="sf"><label>Anreise</label><input type="date" name="checkin" value="${ci}" required></div>
    <div class="sf"><label>Abreise</label><input type="date" name="checkout" value="${co}" required></div>
    <div class="sf" style="flex:0 1 150px"><label>Gäste</label><select name="guests">${guestOpts}</select></div>
    <div class="sf go"><button class="btn-search" type="submit">Verfügbarkeit finden</button></div>
  </form>`;
}

// The booking overlay (guest details + confirmation), populated by JS.
function bookingOverlayHTML() {
  return `
  <div class="bk-overlay" id="bkOverlay" aria-hidden="true">
    <div class="bk-modal" role="dialog" aria-modal="true" aria-labelledby="bk-title">
      <div class="mh">
        <div><h3 id="bk-title">Buchung</h3><div class="es">Sichere Buchung über VALUERO</div></div>
        <button class="bk-close" id="bk-close" aria-label="Schließen">×</button>
      </div>
      <div class="mb">
        <div class="summary" id="bk-summary"></div>
        <div id="bk-msg"></div>
        <form class="bk-form" id="bk-form" onsubmit="return false">
          <input type="hidden" id="bk-accId">
          <div>
            <label>Anrede</label>
            <select name="title"><option value="">–</option><option>Herr</option><option>Frau</option><option>Divers</option></select>
          </div>
          <div><label>Vorname *</label><input name="firstName" required></div>
          <div><label>Nachname *</label><input name="lastName" required></div>
          <div><label>E-Mail *</label><input name="email" type="email" required></div>
          <div class="full"><label>Telefon</label><input name="phone" type="tel"></div>
          <div class="full"><label>Anmerkungen (optional)</label><textarea name="notes" rows="2" placeholder="z. B. späte Anreise, Kinderbett …"></textarea></div>
          <div class="full"><label class="chk"><input type="checkbox" name="agb"> Ich akzeptiere die <a href="/agb" target="_blank">AGB</a> &amp; <a href="/datenschutz" target="_blank">Datenschutz</a>.</label></div>
        </form>
        <div class="form-actions" id="bk-actions" style="display:flex;gap:10px;justify-content:flex-end">
          <button class="btn btn-ghost" id="bk-cancel" type="button">Abbrechen</button>
          <button class="btn btn-primary" id="bk-submit" type="button">Jetzt verbindlich buchen</button>
        </div>
      </div>
    </div>
  </div>`;
}

function bookingToolPage(c, items) {
  const prefill = c.__prefill || {};
  const types = uniq(items.map((i) => i.type));
  const locs = uniq(items.map((i) => i.location));
  const featFilter = FEATURES.filter((f) => items.some((i) => parseFeatures(i.features).includes(f.key)));
  const pillRow = (group, values) => `
    <div class="pills" data-group="${group}">
      <button type="button" class="pill active" data-val="">Alle</button>
      ${values
        .map((v) => `<button type="button" class="pill" data-val="${esc(String(v).toLowerCase())}">${esc(v)}</button>`)
        .join("")}
    </div>`;
  const featChecks = featFilter
    .map(
      (f) =>
        `<label class="chk"><input type="checkbox" class="f-feat" value="${f.key}"> ${f.icon} ${esc(f.label)}</label>`
    )
    .join("");
  const body = `
  <section class="page-hero booking-hero">
    <div class="container">
      <div class="eyebrow">${esc(c.site_tagline)}</div>
      <h1>${esc(c.unterkuenfte_title)}</h1>
      <p>${esc(c.unterkuenfte_sub)}</p>
      ${searchBar(prefill)}
    </div>
  </section>
  <section class="section" style="padding-top:34px">
    <div class="container">
      <p class="muted reveal" style="max-width:72ch;margin-bottom:24px">${esc(c.unterkuenfte_intro)}</p>
      <div class="booking-layout">
        <aside class="filters-panel">
          <div class="fp-group"><h4>Unterkunftstyp</h4>${pillRow("type", types)}</div>
          <div class="fp-group"><h4>Ort</h4>${pillRow("loc", locs)}</div>
          <div class="fp-group"><h4>Preis / Nacht</h4>
            <div class="price-range"><span class="lbl" id="priceLbl">egal</span>
            <input type="range" id="f-price" min="0" max="400" step="10" value="400"></div>
          </div>
          ${featChecks ? `<div class="fp-group"><h4>Ausstattung</h4>${featChecks}</div>` : ""}
        </aside>
        <div class="results-col">
          <div class="results-head">
            <span class="rc" id="resCount">Lädt…</span>
            <select id="f-sort">
              <option value="best">Empfohlen</option>
              <option value="price-asc">Preis: aufsteigend</option>
              <option value="price-desc">Preis: absteigend</option>
            </select>
          </div>
          <div id="results" class="grid booking-grid"><div class="loading">Lädt Unterkünfte…</div></div>
          <noscript><div class="grid">${items.map((i) => listingCard(i, false)).join("")}</div></noscript>
        </div>
      </div>
    </div>
  </section>
  ${bookingOverlayHTML()}`;
  return layout({
    title: "Unterkünfte | VALUERO",
    active: "/unterkuenfte",
    body,
    content: c,
    extraScript: BOOKING_SCRIPT,
  });
}

const BOOKING_SCRIPT = `
<script>
(function(){
  var $=function(s,r){return (r||document).querySelector(s)};
  var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
  function qp(n){var m=new RegExp('[?&]'+n+'=([^&]*)').exec(location.search);return m?decodeURIComponent(m[1].replace(/\\+/g,' ')):''}
  function euro(n,c){c=c||'EUR';try{return new Intl.NumberFormat('de-AT',{style:'currency',currency:c,maximumFractionDigits:0}).format(n)}catch(e){return '\\u20ac '+Math.round(n)}}
  function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function fmt(d){if(!d)return '';var p=d.split('-');return p[2]+'.'+p[1]+'.'+p[0]}

  var form=$('#searchForm'), results=$('#results');
  var fv=function(n){return form&&form[n]?form[n].value:''};
  var state={checkin:qp('checkin')||fv('checkin'),checkout:qp('checkout')||fv('checkout'),guests:qp('guests')||fv('guests'),type:'',loc:'',features:[],priceMax:0,sort:'best'};
  var last={results:[]};

  $$('.pills').forEach(function(p){p.addEventListener('click',function(e){
    var b=e.target.closest('.pill');if(!b)return;
    $$('.pill',p).forEach(function(x){x.classList.remove('active')});b.classList.add('active');
    state[p.getAttribute('data-group')]=b.getAttribute('data-val');run();});});
  $$('.f-feat').forEach(function(ch){ch.addEventListener('change',function(){
    state.features=$$('.f-feat').filter(function(x){return x.checked}).map(function(x){return x.value});run();});});
  var price=$('#f-price');
  if(price){
    price.addEventListener('input',function(){var v=parseInt(price.value,10);state.priceMax=v>=400?0:v;
      $('#priceLbl').textContent=state.priceMax?('bis '+euro(state.priceMax)+' / Nacht'):'egal';});
    price.addEventListener('change',run);
  }
  var sort=$('#f-sort');if(sort)sort.addEventListener('change',function(){state.sort=sort.value;renderList(last)});

  if(form)form.addEventListener('submit',function(e){e.preventDefault();
    state.checkin=form.checkin.value;state.checkout=form.checkout.value;state.guests=form.guests?form.guests.value:'';
    history.replaceState(null,'','/unterkuenfte?checkin='+state.checkin+'&checkout='+state.checkout+'&guests='+(state.guests||''));
    run();});

  function params(){var p=[];
    if(state.checkin)p.push('checkin='+state.checkin);
    if(state.checkout)p.push('checkout='+state.checkout);
    if(state.guests)p.push('guests='+state.guests);
    if(state.type)p.push('type='+encodeURIComponent(state.type));
    if(state.loc)p.push('loc='+encodeURIComponent(state.loc));
    if(state.features.length)p.push('features='+state.features.join(','));
    if(state.priceMax)p.push('priceMax='+state.priceMax);
    return p.join('&');}

  function run(){results.innerHTML='<div class="loading">Suche Unterkünfte…</div>';
    fetch('/api/search?'+params()).then(function(r){return r.json()}).then(function(d){last=d;renderList(d)})
    .catch(function(){results.innerHTML='<div class="empty">Fehler beim Laden. Bitte erneut versuchen.</div>'});}

  function price1(x){return (x.offer&&x.offer.available&&x.offer.perNight)?x.offer.perNight:9e9}
  function sortResults(list){var a=list.slice();
    if(state.sort==='price-asc')a.sort(function(x,y){return price1(x)-price1(y)});
    else if(state.sort==='price-desc')a.sort(function(x,y){return (price1(y)===9e9?-1:price1(y))-(price1(x)===9e9?-1:price1(x))});
    return a;}

  function renderList(d){var list=sortResults(d.results||[]);var cnt=$('#resCount');
    if(cnt)cnt.textContent=(d.count||list.length)+' Unterkünfte'+(d.nights?(' \\u00b7 '+d.nights+' Nächte'):'');
    if(!list.length){results.innerHTML='<div class="empty">Keine Unterkünfte für diese Auswahl.</div>';return;}
    results.innerHTML=list.map(card).join('');bindCards();}

  function feats(acc){return (acc.featureLabels||[]).slice(0,4).map(function(f){return '<span class="fi">'+f.icon+' '+esc(f.label)+'</span>'}).join('')}

  function card(acc){
    var img=acc.image?('style="background-image:url(\\''+esc(acc.image)+'\\')"'):'class="img noimg"';
    var imgTag=acc.image?('<div class="img" '+img+'>'):'<div '+img+'>';
    var badge=acc.badge?'<span class="badge">'+esc(acc.badge)+'</span>':'';
    return '<article class="bk-card">'+imgTag+badge+'</div><div class="body">'
      +'<h3>'+esc(acc.name)+'</h3>'
      +(acc.rating?'<div class="rating" style="color:#bfa06a;font-weight:600;font-size:14px">\\u2605 '+esc(acc.rating)+'</div>':'')
      +'<div class="feat-row">'+(acc.location?'<span class="fi">\\ud83d\\udccd '+esc(acc.location)+'</span>':'')+(acc.type?'<span class="fi">'+esc(acc.type)+'</span>':'')+'</div>'
      +'<p class="desc">'+esc(acc.description)+'</p>'
      +'<div class="feat-row">'+feats(acc)+'</div>'
      +priceBox(acc)+'</div></article>';}

  function priceBox(acc){
    if(!acc.connected){
      var web=acc.link?'<a class="btn-web" href="'+esc(acc.link)+'" target="_blank" rel="noopener">Zur Website \\u2192</a>':'<span class="note-web">Auf Anfrage</span>';
      return '<div class="price-box"><span class="pn note-web">Preise siehe Website</span>'+web+'</div>';}
    var o=acc.offer;
    if(!o)return '<div class="price-box"><span class="pn note-web">Termine wählen für Live-Preis</span><button class="btn-book" data-pick="1">Verfügbarkeit</button></div>';
    if(o.error)return '<div class="price-box"><span class="pn note-web">Preis derzeit nicht verfügbar</span></div>';
    if(o.available===false)return '<div class="price-box"><span class="soldout">Für diese Daten belegt</span><button class="btn-web" data-pick="1">Andere Daten</button></div>';
    return '<div class="price-box"><span class="pn">ab <b>'+euro(o.perNight,o.currency)+'</b> / Nacht<span class="tot">'+euro(o.total,o.currency)+' gesamt \\u00b7 '+o.nights+' Nächte</span></span>'
      +'<button class="btn-book" data-book="'+acc.id+'">Jetzt buchen</button></div>';}

  function bindCards(){
    $$('[data-book]').forEach(function(b){b.addEventListener('click',function(){openBooking(findAcc(b.getAttribute('data-book')))})});
    $$('[data-pick]').forEach(function(b){b.addEventListener('click',function(){if(form&&form.checkin){form.checkin.focus();}window.scrollTo({top:0,behavior:'smooth'})})});}
  function findAcc(id){var m=(last.results||[]).filter(function(x){return String(x.id)===String(id)});return m[0]}

  // ---- overlay ----
  var ov=$('#bkOverlay');
  function openBooking(acc){if(!acc)return;
    if(!state.checkin||!state.checkout){alert('Bitte zuerst An- und Abreise wählen.');if(form&&form.checkin)form.checkin.focus();return;}
    var o=acc.offer||{};
    $('#bk-title').textContent=acc.name;
    var s='<div class="row"><span>An-/Abreise</span><span>'+fmt(state.checkin)+' \\u2192 '+fmt(state.checkout)+'</span></div>'
      +'<div class="row"><span>Nächte</span><span>'+(o.nights||'')+'</span></div>'
      +'<div class="row"><span>Gäste</span><span>'+(state.guests||2)+'</span></div>';
    if(o.roomTotal)s+='<div class="row"><span>Unterkunft</span><span>'+euro(o.roomTotal,o.currency)+'</span></div>';
    if(o.extraFees)s+='<div class="row"><span>Endreinigung / Gebühren</span><span>'+euro(o.extraFees,o.currency)+'</span></div>';
    if(o.total)s+='<div class="row total"><span>Gesamt</span><span>'+euro(o.total,o.currency)+'</span></div>';
    $('#bk-summary').innerHTML=s;
    $('#bk-accId').value=acc.id;$('#bk-msg').innerHTML='';
    $('#bk-form').style.display='';$('#bk-actions').style.display='';
    ov.classList.add('open');ov.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}
  function closeBooking(){ov.classList.remove('open');ov.setAttribute('aria-hidden','true');document.body.style.overflow=''}
  function msg(t,html){$('#bk-msg').innerHTML='<div class="msg '+t+'">'+html+'</div>'}
  if(ov){
    $('#bk-close').addEventListener('click',closeBooking);
    $('#bk-cancel').addEventListener('click',closeBooking);
    ov.addEventListener('click',function(e){if(e.target===ov)closeBooking()});
    $('#bk-submit').addEventListener('click',function(){
      var f=$('#bk-form');
      var data={accId:$('#bk-accId').value,checkin:state.checkin,checkout:state.checkout,guests:state.guests||2,
        title:f.title.value,firstName:f.firstName.value.trim(),lastName:f.lastName.value.trim(),
        email:f.email.value.trim(),phone:f.phone.value.trim(),notes:f.notes.value.trim()};
      if(!data.firstName||!data.lastName||!data.email){msg('err','Bitte Vorname, Nachname und E-Mail ausfüllen.');return;}
      if(!f.agb.checked){msg('err','Bitte AGB &amp; Datenschutz akzeptieren.');return;}
      var btn=$('#bk-submit');btn.disabled=true;btn.textContent='Wird gebucht…';
      fetch('/api/book',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(data)})
        .then(function(r){return r.json()}).then(function(res){
          btn.disabled=false;btn.textContent='Jetzt verbindlich buchen';
          if(res.ok){$('#bk-form').style.display='none';$('#bk-actions').style.display='none';
            msg('ok','<b>Buchung bestätigt!</b><br>Buchungsnummer: <b>'+(res.bookingId||'\\u2014')+'</b><br>Du erhältst in Kürze eine Bestätigung per E-Mail.'+(res.demo?'<br><em>(Demo-Modus \\u2013 keine echte Buchung erstellt)</em>':''));
          }else{msg('err',res.error||'Buchung fehlgeschlagen.')}
        }).catch(function(){btn.disabled=false;btn.textContent='Jetzt verbindlich buchen';msg('err','Netzwerkfehler. Bitte erneut versuchen.')});
    });
  }
  run();
})();
</script>`;

function listingPage(c, items, kind) {
  const isGastro = kind === "gastro";
  if (!isGastro) return bookingToolPage(c, items);
  const title = isGastro ? c.gastronomie_title : c.unterkuenfte_title;
  const sub = isGastro ? c.gastronomie_sub : c.unterkuenfte_sub;
  const intro = isGastro ? c.gastronomie_intro : c.unterkuenfte_intro;
  const active = isGastro ? "/gastronomie" : "/unterkuenfte";
  const pageTitle = (isGastro ? "Gastronomie" : "Unterkünfte") + " | VALUERO";
  const body = `
  <section class="page-hero">
    <div class="container">
      <div class="eyebrow">${esc(c.site_tagline)}</div>
      <h1>${esc(title)}</h1>
      <p>${esc(sub)}</p>
    </div>
  </section>
  <section class="section" style="padding-top:46px">
    <div class="container">
      <p class="muted reveal" style="max-width:70ch;margin-bottom:30px">${esc(intro)}</p>
      ${filterBar(items, isGastro)}
      <div class="grid">
        ${items.map((i) => listingCard(i, isGastro)).join("")}
        <div class="no-results" id="noresults" style="display:none">Keine Einträge für diese Auswahl.</div>
      </div>
    </div>
  </section>`;
  return layout({
    title: pageTitle,
    active,
    body,
    content: c,
    extraScript: FILTER_SCRIPT,
  });
}

/* ---------------- EVENTS ---------------- */
function eventsPage(c, events, opts) {
  opts = opts || {};
  const evCard = (e) => `
  <article class="card reveal" data-loc="${esc((e.location || "").toLowerCase())}" data-type="${esc(
    (e.type || "").toLowerCase()
  )}">
    <div class="card-img" style="${imgStyle(e.image, e.name)}">
      ${e.type ? `<span class="card-badge">${esc(e.type)}</span>` : ""}
    </div>
    <div class="card-body">
      <h3>${
        e.website
          ? `<a href="${esc(e.website)}" target="_blank" rel="noopener">${esc(e.name)}</a>`
          : esc(e.name)
      }</h3>
      <p class="desc">${esc(e.description)}</p>
      <div class="card-meta">
        ${e.location ? `<span class="chip">📍 ${esc(e.location)}</span>` : ""}
        ${e.date_text ? `<span class="chip">🗓 ${esc(e.date_text)}</span>` : ""}
      </div>
    </div>
  </article>`;
  const success = opts.success
    ? `<div class="form-success">Danke! Deine Veranstaltung wurde eingereicht und erscheint nach kurzer Prüfung.</div>`
    : "";
  const body = `
  <section class="page-hero">
    <div class="container">
      <div class="eyebrow">${esc(c.site_tagline)}</div>
      <h1>${esc(c.veranstaltungen_title)}</h1>
      <p>${esc(c.veranstaltungen_sub)}</p>
    </div>
  </section>
  <section class="section" style="padding-top:46px">
    <div class="container">
      <p class="muted reveal" style="max-width:70ch;margin-bottom:30px">${esc(
        c.veranstaltungen_intro
      )}</p>
      <div class="grid">
        ${
          events.length
            ? events.map(evCard).join("")
            : `<div class="no-results">Aktuell sind keine Veranstaltungen eingetragen.</div>`
        }
      </div>
    </div>
  </section>
  <section class="section" id="einreichen" style="padding-top:0">
    <div class="container">
      <div class="section-head reveal">
        <div class="eyebrow">Mitmachen</div>
        <h2>Deine Veranstaltung einreichen</h2>
        <p>Reiche dein Event ein – nach kurzer Prüfung durch uns erscheint es auf dieser Seite.</p>
      </div>
      ${success}
      <form class="form-wrap reveal" method="POST" action="/veranstaltungen/einreichen" id="evform">
        <div class="form-row">
          <label>Veranstaltungsname *</label>
          <input name="name" required maxlength="120">
        </div>
        <div class="form-row">
          <label>Kurze Beschreibung *</label>
          <textarea name="description" required maxlength="600"></textarea>
        </div>
        <div class="form-row two">
          <div class="form-row" style="margin:0">
            <label>Veranstaltungsort *</label>
            <input name="location" required maxlength="120">
          </div>
          <div class="form-row" style="margin:0">
            <label>Art der Veranstaltung *</label>
            <input name="type" required maxlength="60" placeholder="z. B. Zeltfest, Konzert">
          </div>
        </div>
        <div class="form-row two">
          <div class="form-row" style="margin:0">
            <label>Datum *</label>
            <input name="date_text" required maxlength="60" placeholder="z. B. 24. Juli 2026">
          </div>
          <div class="form-row" style="margin:0">
            <label>Website (optional)</label>
            <input name="website" maxlength="200" placeholder="https://">
          </div>
        </div>
        <div class="form-row">
          <label>Bild (optional)</label>
          <input type="file" accept="image/*" id="evimg">
          <input type="hidden" name="image" id="evimgdata">
          <span class="form-note">Wird automatisch verkleinert. Alternativ Bilder an ${esc(
            c.contact_email
          )} senden.</span>
        </div>
        <div class="form-row">
          <label>Deine E-Mail (optional, für Rückfragen)</label>
          <input name="submitter" type="email" maxlength="160">
        </div>
        <button class="btn btn-primary" type="submit">Einreichen</button>
      </form>
    </div>
  </section>`;
  const imgScript = `
<script>
(function(){
  var f=document.getElementById('evimg'),d=document.getElementById('evimgdata');
  if(!f)return;
  f.addEventListener('change',function(){
    var file=f.files[0];if(!file)return;
    var r=new FileReader();
    r.onload=function(ev){
      var img=new Image();
      img.onload=function(){
        var max=1200,w=img.width,h=img.height;
        if(w>max){h=h*max/w;w=max;}
        var cv=document.createElement('canvas');cv.width=w;cv.height=h;
        cv.getContext('2d').drawImage(img,0,0,w,h);
        d.value=cv.toDataURL('image/jpeg',0.8);
      };
      img.src=ev.target.result;
    };
    r.readAsDataURL(file);
  });
})();
</script>`;
  return layout({
    title: "Veranstaltungen | VALUERO",
    active: "/veranstaltungen",
    body,
    content: c,
    extraScript: imgScript,
  });
}

/* ---------------- ABOUT ---------------- */
function aboutPage(c) {
  const v1 = c.about_hero_image
    ? `style="background-image:url('${esc(c.about_hero_image)}')"`
    : "";
  const body = `
  <section class="page-hero">
    <div class="container">
      <div class="eyebrow">${esc(c.site_tagline)}</div>
      <h1>${esc(c.about_title)}</h1>
      <div class="about-meaning" style="margin-top:18px">${esc(c.about_meaning)}</div>
    </div>
  </section>
  <section class="section" style="padding-top:50px">
    <div class="container">
      <div class="section-head reveal" id="anfrage">
        <div class="eyebrow">Für Partner</div>
        <h2>${esc(c.about_lead)}</h2>
        <p>Du betreibst eine Unterkunft oder Gastronomie im Montafon? Werde Teil von Valuero.</p>
        <div class="hero-actions"><a class="btn btn-primary" href="mailto:${esc(
          c.contact_email
        )}?subject=Anfrage%20Valuero%20Partner">Jetzt anfragen</a></div>
      </div>
      <div class="about-block reveal">
        <div>
          <h2>${esc(c.about_block1_title)}</h2>
          <p>${esc(c.about_block1_text)}</p>
        </div>
        <div class="about-visual" ${v1}></div>
      </div>
      <div class="about-block reveal">
        <div class="about-visual" style="background:linear-gradient(150deg,#4a6c7a,#243640)"></div>
        <div>
          <h2>${esc(c.about_block2_title)}</h2>
          <p>${esc(c.about_block2_text)}</p>
        </div>
      </div>
    </div>
  </section>`;
  return layout({
    title: "Über Valuero | VALUERO",
    active: "/ueber-uns",
    body,
    content: c,
  });
}

/* ---------------- LEGAL / RICH ---------------- */
function legalPage(c, title, html, active) {
  const body = `
  <section class="page-hero">
    <div class="container">
      <div class="eyebrow">${esc(c.site_tagline)}</div>
      <h1>${esc(title)}</h1>
    </div>
  </section>
  <section class="section" style="padding-top:40px">
    <div class="container"><div class="rich">${html}</div></div>
  </section>`;
  return layout({ title: title + " | VALUERO", active: active || "", body, content: c });
}

const FAVICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 24"><rect width="34" height="24" rx="5" fill="#2f6e52"/><path d="M5 20 L13 7 L17 13 L20 9 L29 20 Z" fill="#fff"/></svg>`;

const V = { esc, homePage, listingPage, eventsPage, aboutPage, legalPage, FAVICON };

/* ===== admin-views ===== */
// Admin area HTML rendering.

function shell({ title, active, body, pendingCount }) {
  const link = (href, label, badge) =>
    `<a href="${href}" class="${active === href ? "active" : ""}">${label}${
      badge ? `<span class="badge">${badge}</span>` : ""
    }</a>`;
  return `<!doctype html><html lang="de"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)} · Valuero Admin</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>${adminCSS}</style></head><body>
<div class="admin-shell">
  <aside class="sidebar">
    <div class="logo">VALUERO</div>
    <div class="sub">Admin-Bereich</div>
    <nav>
      ${link("/admin", "Übersicht")}
      ${link("/admin/unterkuenfte", "Unterkünfte")}
      ${link("/admin/gastronomie", "Gastronomie")}
      ${link("/admin/veranstaltungen", "Veranstaltungen", pendingCount)}
      ${link("/admin/webdesign", "Webdesign")}
    </nav>
    <div class="foot">
      <a href="/" target="_blank">↗ Website ansehen</a><br>
      <a href="/admin/logout">Abmelden</a>
    </div>
  </aside>
  <main class="main">${body}</main>
</div>
${UPLOAD_SCRIPT}
</body></html>`;
}

const UPLOAD_SCRIPT = `
<script>
(function(){
  document.querySelectorAll('input[type=file][data-target]').forEach(function(f){
    f.addEventListener('change',function(){
      var file=f.files[0];if(!file)return;
      var target=document.getElementById(f.getAttribute('data-target'));
      var prev=document.getElementById(f.getAttribute('data-preview'));
      var r=new FileReader();
      r.onload=function(ev){
        var img=new Image();
        img.onload=function(){
          var max=1400,w=img.width,h=img.height;
          if(w>max){h=h*max/w;w=max;}
          var cv=document.createElement('canvas');cv.width=w;cv.height=h;
          cv.getContext('2d').drawImage(img,0,0,w,h);
          // Keep transparency for PNG/SVG/WebP (e.g. logos); use JPEG only for opaque photos.
          var keepAlpha=/png|svg|webp/i.test(file.type);
          var data=keepAlpha?cv.toDataURL('image/png'):cv.toDataURL('image/jpeg',0.82);
          target.value=data;
          if(prev)prev.style.backgroundImage="url('"+data+"')";
        };
        img.src=ev.target.result;
      };
      r.readAsDataURL(file);
    });
  });
})();
</script>`;

function loginPage(error) {
  return `<!doctype html><html lang="de"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Login · Valuero Admin</title>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>${adminCSS}</style></head><body>
<div class="login-wrap"><form class="login-card" method="POST" action="/admin/login">
  <div class="logo">VALUERO</div>
  <div class="sub">Admin-Anmeldung</div>
  ${error ? `<div class="err">${esc(error)}</div>` : ""}
  <div class="fr"><label>Passwort</label><input type="password" name="password" autofocus required></div>
  <button class="btn btn-primary" style="width:100%;justify-content:center" type="submit">Anmelden</button>
</form></div></body></html>`;
}

function dashboard(counts) {
  const body = `
  <div class="page-title"><h1>Übersicht</h1></div>
  <div class="stat-grid">
    <div class="stat"><div class="n">${counts.acc}</div><div class="l">Unterkünfte</div></div>
    <div class="stat"><div class="n">${counts.gas}</div><div class="l">Gastronomie</div></div>
    <div class="stat"><div class="n">${counts.ev}</div><div class="l">Veranstaltungen</div></div>
    <div class="stat"><div class="n">${counts.pending}</div><div class="l">Zur Freigabe</div></div>
  </div>
  <div class="form-card">
    <h3 style="font-family:Fraunces,serif;font-size:20px;margin-bottom:10px">Willkommen, Simon 👋</h3>
    <p class="hint" style="font-size:14px;line-height:1.7">Hier verwaltest du alle Inhalte deiner Valuero-Website. Lege Unterkünfte, Gastro-Partner und Veranstaltungen an, bearbeite oder lösche sie. Eingereichte Veranstaltungen erscheinen unter „Veranstaltungen“ und gehen erst nach deiner Freigabe online. Unter „Webdesign“ änderst du alle Texte und Bilder der einzelnen Seiten.</p>
    ${
      counts.pending
        ? `<p style="margin-top:14px"><a class="btn btn-primary btn-sm" href="/admin/veranstaltungen">${counts.pending} Veranstaltung(en) freigeben →</a></p>`
        : ""
    }
  </div>`;
  return shell({ title: "Übersicht", active: "/admin", body, pendingCount: counts.pending });
}

function entryList(kind, label, items, pendingCount) {
  const base = "/admin/" + kind;
  const rows = items
    .map((it) => {
      const sub = [it.location, it.type, it.rating].filter(Boolean).join(" · ");
      const status =
        kind === "veranstaltungen"
          ? `<span class="tag ${it.status}">${
              it.status === "pending"
                ? "Zur Freigabe"
                : it.status === "approved"
                ? "Online"
                : "Abgelehnt"
            }</span>`
          : "";
      const imgStyle = it.image ? `style="background-image:url('${esc(it.image)}')"` : "";
      const approveBtn =
        kind === "veranstaltungen" && it.status !== "approved"
          ? `<form method="POST" action="${base}/${it.id}/approve" style="display:inline"><button class="btn btn-primary btn-sm">Freigeben</button></form>`
          : "";
      return `<div class="row">
        <div class="thumb" ${imgStyle}></div>
        <div class="info"><h3>${esc(it.name)} ${status}</h3><p>${esc(
        sub || it.date_text || ""
      )}</p></div>
        <div class="acts">
          ${approveBtn}
          <a class="btn btn-ghost btn-sm" href="${base}/${it.id}/edit">Bearbeiten</a>
          <form method="POST" action="${base}/${it.id}/delete" style="display:inline" onsubmit="return confirm('Wirklich löschen?')"><button class="btn btn-danger btn-sm">Löschen</button></form>
        </div>
      </div>`;
    })
    .join("");
  const body = `
  <div class="page-title"><h1>${label}</h1><a class="btn btn-primary" href="${base}/new">+ Neu anlegen</a></div>
  <div class="cards-list">${rows || `<p class="hint">Noch keine Einträge.</p>`}</div>`;
  return shell({ title: label, active: base, body, pendingCount });
}

function fieldImage(value) {
  const prev = value ? `style="background-image:url('${esc(value)}')"` : "";
  return `
    <label>Bild</label>
    <input type="file" accept="image/*" data-target="imgfield" data-preview="imgprev">
    <input type="hidden" name="image" id="imgfield" value="${esc(value || "")}">
    <div class="imgprev" id="imgprev" ${prev}></div>
    <span class="hint">Bild auswählen – wird automatisch verkleinert. Leer lassen für Platzhalter.</span>`;
}

// Beds24 connection + booking-tool filters — only for accommodations.
function accBookingFields(it) {
  const sel = parseFeatures(it.features);
  const connected = String(it.beds24_property_id || "").trim() && String(it.beds24_room_id || "").trim();
  const badge = connected
    ? `<span class="beds-badge on">● Beds24 verbunden – Live-Buchung aktiv</span>`
    : `<span class="beds-badge off">○ Keine API – zeigt „Preise siehe Website"</span>`;
  const featBoxes = FEATURES.map((f) => {
    const on = sel.includes(f.key);
    return `<label class="feat"><input type="checkbox" name="features" value="${f.key}" ${
      on ? "checked" : ""
    }><span>${f.icon} ${esc(f.label)}</span></label>`;
  }).join("");
  return `
    <div class="section-sep">Buchungstool &amp; Beds24 ${badge}</div>
    <p class="hint" style="margin:-6px 0 14px">Property- und Zimmer-ID eintragen, damit VALUERO Live-Preise, Verfügbarkeit und die komplette Buchungsstrecke anzeigt. Bleiben die Felder leer, erscheint die Unterkunft ohne Preis mit dem Hinweis „Preise siehe Website" und einem Button zur oben eingetragenen Website.</p>
    <div class="fr two">
      <div class="fr" style="margin:0"><label>Beds24 Property-ID</label><input name="beds24_property_id" value="${esc(
        it.beds24_property_id
      )}" placeholder="z. B. 123456" inputmode="numeric"></div>
      <div class="fr" style="margin:0"><label>Beds24 Zimmer-ID (Room-ID)</label><input name="beds24_room_id" value="${esc(
        it.beds24_room_id
      )}" placeholder="z. B. 678901" inputmode="numeric"></div>
    </div>
    <div class="fr two">
      <div class="fr" style="margin:0"><label>Max. Gäste</label><input type="number" min="0" name="max_guests" value="${esc(
        it.max_guests ? it.max_guests : ""
      )}" placeholder="z. B. 4"></div>
      <div class="fr" style="margin:0"><label>Eigener API-Token (optional)</label><input name="beds24_token" value="${esc(
        it.beds24_token
      )}" placeholder="nur falls eigenes Beds24-Konto"></div>
    </div>
    <div class="fr">
      <label>Ausstattung &amp; Filter (Booking-Tool)</label>
      <div class="feature-grid">${featBoxes}</div>
      <span class="hint">Ausgewählte Merkmale erscheinen als Filter im Buchungstool und als Icons auf der Unterkunft.</span>
    </div>`;
}

function entryForm(kind, label, it, pendingCount) {
  it = it || {};
  const base = "/admin/" + kind;
  const isNew = !it.id;
  const action = isNew ? `${base}/new` : `${base}/${it.id}/edit`;
  const isGastro = kind === "gastronomie";
  const isEvent = kind === "veranstaltungen";
  let fields;
  if (isEvent) {
    fields = `
      <div class="fr"><label>Name *</label><input name="name" required value="${esc(it.name)}"></div>
      <div class="fr"><label>Beschreibung</label><textarea name="description">${esc(
        it.description
      )}</textarea></div>
      <div class="fr two">
        <div class="fr" style="margin:0"><label>Ort</label><input name="location" value="${esc(
          it.location
        )}"></div>
        <div class="fr" style="margin:0"><label>Art</label><input name="type" value="${esc(
          it.type
        )}"></div>
      </div>
      <div class="fr two">
        <div class="fr" style="margin:0"><label>Datum (Text)</label><input name="date_text" value="${esc(
          it.date_text
        )}" placeholder="z. B. 24. Juli 2026"></div>
        <div class="fr" style="margin:0"><label>Website</label><input name="website" value="${esc(
          it.website
        )}"></div>
      </div>
      <div class="fr"><label>Status</label><select name="status">
        <option value="approved" ${it.status === "approved" ? "selected" : ""}>Online</option>
        <option value="pending" ${it.status === "pending" ? "selected" : ""}>Zur Freigabe</option>
        <option value="rejected" ${it.status === "rejected" ? "selected" : ""}>Abgelehnt</option>
      </select></div>
      <div class="fr">${fieldImage(it.image)}</div>`;
  } else {
    const tagLabel = isGastro ? "Angebot (Komma-getrennt)" : "Annehmlichkeiten (Komma-getrennt)";
    const tagName = isGastro ? "tags" : "amenities";
    const tagVal = isGastro ? it.tags : it.amenities;
    fields = `
      <div class="fr"><label>Name *</label><input name="name" required value="${esc(it.name)}"></div>
      <div class="fr"><label>Beschreibung</label><textarea name="description">${esc(
        it.description
      )}</textarea></div>
      <div class="fr two">
        <div class="fr" style="margin:0"><label>Ort</label><input name="location" value="${esc(
          it.location
        )}" placeholder="z. B. Gaschurn"></div>
        <div class="fr" style="margin:0"><label>${
          isGastro ? "Art" : "Unterkunftstyp"
        }</label><input name="type" value="${esc(it.type)}"></div>
      </div>
      <div class="fr two">
        <div class="fr" style="margin:0"><label>Bewertung</label><input name="rating" value="${esc(
          it.rating
        )}" placeholder="z. B. 4,7/5"></div>
        <div class="fr" style="margin:0"><label>Badge</label><input name="badge" value="${esc(
          it.badge
        )}" placeholder="z. B. Ski In & Out"></div>
      </div>
      <div class="fr"><label>${tagLabel}</label><input name="${tagName}" value="${esc(
      tagVal
    )}"></div>
      <div class="fr"><label>${
        isGastro ? "Link (Website)" : "Website / externer Buchungslink"
      }</label><input name="link" value="${esc(
        it.link
      )}" placeholder="https://"></div>
      <div class="fr">${fieldImage(it.image)}</div>
      ${kind === "unterkuenfte" ? accBookingFields(it) : ""}`;
  }
  const body = `
  <div class="page-title"><h1>${isNew ? "Neu" : "Bearbeiten"} · ${label}</h1>
    <a class="btn btn-ghost" href="${base}">← Zurück</a></div>
  <form class="form-card" method="POST" action="${action}">
    ${fields}
    <div class="form-actions"><button class="btn btn-primary" type="submit">Speichern</button>
    <a class="btn btn-ghost" href="${base}">Abbrechen</a></div>
  </form>`;
  return shell({ title: label, active: base, body, pendingCount });
}

function webdesignPage(c, pendingCount, saved) {
  const ta = (key, label, hint) =>
    `<div class="fr"><label>${label}</label><textarea name="${key}" rows="3">${esc(
      c[key]
    )}</textarea>${hint ? `<span class="hint">${hint}</span>` : ""}</div>`;
  const txt = (key, label) =>
    `<div class="fr"><label>${label}</label><input name="${key}" value="${esc(c[key])}"></div>`;
  const imgField = (key, label) => {
    const prev = c[key] ? `style="background-image:url('${esc(c[key])}')"` : "";
    return `<div class="fr"><label>${label}</label>
      <input type="file" accept="image/*" data-target="f_${key}" data-preview="p_${key}">
      <input type="hidden" name="${key}" id="f_${key}" value="${esc(c[key] || "")}">
      <div class="imgprev" id="p_${key}" ${prev}></div></div>`;
  };
  const body = `
  <div class="page-title"><h1>Webdesign</h1><span class="hint">Texte & Bilder aller Seiten</span></div>
  ${saved ? `<div style="background:#1c3326;color:#5cbf8c;border:1px solid #2f6e52;padding:12px 16px;border-radius:10px;margin-bottom:18px">Gespeichert ✓</div>` : ""}
  <form method="POST" action="/admin/webdesign">
    <div class="wd-group"><h3>Allgemein</h3>
      ${txt("site_tagline", "Slogan (Untertitel)")}
      ${txt("contact_email", "Kontakt-E-Mail")}
      ${imgField("logo_image", "Logo (Kopfzeile, Fußzeile & groß im Hero)")}
      <span class="hint">Am besten ein transparentes PNG. Leer lassen = Standard-Schriftzug „VALUERO“. Tipp: helles/weißes Logo wirkt am besten, da es auch in der dunklen Fußzeile angezeigt wird.</span>
    </div>
    <div class="wd-group"><h3>Startseite</h3>
      ${txt("home_hero_title", "Hero-Titel")}
      ${ta("home_hero_sub", "Hero-Untertitel")}
      ${ta("home_intro", "Intro-Text")}
      ${ta("home_card_unterkuenfte", "Kachel: Unterkünfte")}
      ${ta("home_card_gastronomie", "Kachel: Gastronomie")}
      ${ta("home_card_veranstaltungen", "Kachel: Veranstaltungen")}
      ${imgField("home_hero_image", "Hero-Hintergrundbild (optional)")}
    </div>
    <div class="wd-group"><h3>Unterkünfte (Seite)</h3>
      ${txt("unterkuenfte_title", "Titel")}
      ${txt("unterkuenfte_sub", "Untertitel")}
      ${ta("unterkuenfte_intro", "Intro-Text")}
      ${imgField("unterkuenfte_hero_image", "Bild für Startseiten-Kachel")}
    </div>
    <div class="wd-group"><h3>Gastronomie (Seite)</h3>
      ${txt("gastronomie_title", "Titel")}
      ${txt("gastronomie_sub", "Untertitel")}
      ${ta("gastronomie_intro", "Intro-Text")}
      ${imgField("gastronomie_hero_image", "Bild für Startseiten-Kachel")}
    </div>
    <div class="wd-group"><h3>Veranstaltungen (Seite)</h3>
      ${txt("veranstaltungen_title", "Titel")}
      ${txt("veranstaltungen_sub", "Untertitel")}
      ${ta("veranstaltungen_intro", "Intro-Text")}
      ${imgField("veranstaltungen_hero_image", "Bild für Startseiten-Kachel")}
    </div>
    <div class="wd-group"><h3>Über Valuero</h3>
      ${txt("about_title", "Titel")}
      ${ta("about_meaning", "Bedeutung (Valu / ero)")}
      ${ta("about_lead", "Leitsatz")}
      ${txt("about_block1_title", "Block 1 – Titel")}
      ${ta("about_block1_text", "Block 1 – Text")}
      ${txt("about_block2_title", "Block 2 – Titel")}
      ${ta("about_block2_text", "Block 2 – Text")}
      ${imgField("about_hero_image", "Bild Block 1 (optional)")}
    </div>
    <div class="wd-group"><h3>Rechtstexte (HTML erlaubt)</h3>
      ${ta("impressum_html", "Impressum")}
      ${ta("datenschutz_html", "Datenschutz")}
      ${ta("agb_html", "AGB")}
    </div>
    <button class="btn btn-primary" type="submit">Alle Änderungen speichern</button>
  </form>`;
  return shell({ title: "Webdesign", active: "/admin/webdesign", body, pendingCount });
}

const A = { loginPage, dashboard, entryList, entryForm, webdesignPage };

/* ===== auth ===== */
// Minimal cookie-based admin auth (single password, no external deps).
const crypto = require("crypto");

const SECRET = process.env.SESSION_SECRET || "valuero-dev-secret-change-me";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "valuero-admin";
const COOKIE = "vsess";
const MAX_AGE = 1000 * 60 * 60 * 24 * 14; // 14 days

function sign(payload) {
  const data = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const mac = crypto.createHmac("sha256", SECRET).update(data).digest("base64url");
  return data + "." + mac;
}

function verify(token) {
  if (!token || token.indexOf(".") < 0) return null;
  const [data, mac] = token.split(".");
  const expected = crypto.createHmac("sha256", SECRET).update(data).digest("base64url");
  if (
    mac.length !== expected.length ||
    !crypto.timingSafeEqual(Buffer.from(mac), Buffer.from(expected))
  )
    return null;
  try {
    const payload = JSON.parse(Buffer.from(data, "base64url").toString());
    if (payload.exp && Date.now() > payload.exp) return null;
    return payload;
  } catch (e) {
    return null;
  }
}

function parseCookies(req) {
  const out = {};
  const raw = req.headers.cookie;
  if (!raw) return out;
  raw.split(";").forEach((p) => {
    const i = p.indexOf("=");
    if (i > -1) out[p.slice(0, i).trim()] = decodeURIComponent(p.slice(i + 1).trim());
  });
  return out;
}

function checkPassword(pw) {
  if (typeof pw !== "string" || pw.length === 0) return false;
  const a = Buffer.from(pw);
  const b = Buffer.from(ADMIN_PASSWORD);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

function issueCookie(res) {
  const token = sign({ admin: true, exp: Date.now() + MAX_AGE });
  res.setHeader(
    "Set-Cookie",
    `${COOKIE}=${token}; HttpOnly; Path=/; Max-Age=${Math.floor(
      MAX_AGE / 1000
    )}; SameSite=Lax`
  );
}

function clearCookie(res) {
  res.setHeader("Set-Cookie", `${COOKIE}=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax`);
}

function isAuthed(req) {
  const cookies = parseCookies(req);
  return !!verify(cookies[COOKIE]);
}

function requireAuth(req, res, next) {
  if (isAuthed(req)) return next();
  res.redirect("/admin/login");
}

const auth = { checkPassword, issueCookie, clearCookie, isAuthed, requireAuth };

/* ===== db ===== */
// Database layer for VALUERO — PostgreSQL via the `pg` pool.
// Creates the schema on boot and seeds initial content migrated from valuero.at.
const { Pool } = require("pg");

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
  connectionString,
  ssl: process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: false } : false,
});

function query(text, params) {
  return pool.query(text, params);
}

async function init() {
  await query(`
    CREATE TABLE IF NOT EXISTS accommodations (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT DEFAULT '',
      location TEXT DEFAULT '',
      type TEXT DEFAULT '',
      rating TEXT DEFAULT '',
      badge TEXT DEFAULT '',
      amenities TEXT DEFAULT '',
      link TEXT DEFAULT '',
      image TEXT DEFAULT '',
      sort INTEGER DEFAULT 0,
      created_at TIMESTAMPTZ DEFAULT now()
    );
  `);
  await query(`
    CREATE TABLE IF NOT EXISTS gastro (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT DEFAULT '',
      location TEXT DEFAULT '',
      type TEXT DEFAULT '',
      rating TEXT DEFAULT '',
      badge TEXT DEFAULT '',
      tags TEXT DEFAULT '',
      link TEXT DEFAULT '',
      image TEXT DEFAULT '',
      sort INTEGER DEFAULT 0,
      created_at TIMESTAMPTZ DEFAULT now()
    );
  `);
  await query(`
    CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT DEFAULT '',
      location TEXT DEFAULT '',
      type TEXT DEFAULT '',
      date_text TEXT DEFAULT '',
      website TEXT DEFAULT '',
      image TEXT DEFAULT '',
      status TEXT DEFAULT 'pending',
      submitter TEXT DEFAULT '',
      created_at TIMESTAMPTZ DEFAULT now()
    );
  `);
  await query(`
    CREATE TABLE IF NOT EXISTS content (
      key TEXT PRIMARY KEY,
      value TEXT DEFAULT ''
    );
  `);
  // ---- Beds24 / booking-tool columns on accommodations (idempotent) ----
  await query(`ALTER TABLE accommodations ADD COLUMN IF NOT EXISTS beds24_property_id TEXT DEFAULT ''`);
  await query(`ALTER TABLE accommodations ADD COLUMN IF NOT EXISTS beds24_room_id TEXT DEFAULT ''`);
  await query(`ALTER TABLE accommodations ADD COLUMN IF NOT EXISTS beds24_token TEXT DEFAULT ''`);
  await query(`ALTER TABLE accommodations ADD COLUMN IF NOT EXISTS features TEXT DEFAULT ''`);
  await query(`ALTER TABLE accommodations ADD COLUMN IF NOT EXISTS max_guests INTEGER DEFAULT 0`);
  // ---- Bookings placed through VALUERO (audit trail / fallback record) ----
  await query(`
    CREATE TABLE IF NOT EXISTS bookings (
      id SERIAL PRIMARY KEY,
      accommodation_id INTEGER,
      accommodation_name TEXT DEFAULT '',
      beds24_booking_id TEXT DEFAULT '',
      checkin DATE,
      checkout DATE,
      guests INTEGER DEFAULT 2,
      first_name TEXT DEFAULT '',
      last_name TEXT DEFAULT '',
      email TEXT DEFAULT '',
      phone TEXT DEFAULT '',
      notes TEXT DEFAULT '',
      total NUMERIC DEFAULT 0,
      currency TEXT DEFAULT 'EUR',
      status TEXT DEFAULT 'new',
      created_at TIMESTAMPTZ DEFAULT now()
    );
  `);
  await seed();
  await enrich();
}

// Normalize a Wix media URL to a light, consistently-sized card image.
function normWix(u) {
  if (!u) return "";
  const m = u.match(/^(https:\/\/static\.wixstatic\.com\/media\/[^/]+)/);
  if (!m) return u;
  return m[1] + "/v1/fill/w_1200,h_800,al_c,q_82,enc_auto/photo.jpg";
}

// Fill in real links + photos (migrated from valuero.at and the partner sites).
// Idempotent: only sets a field if it is currently empty, so admin edits are kept.
async function enrich() {
  const W = normWix;
  const acc = [
    ["Haus Felder – Garfrescha", "https://www.hausfelder-garfrescha.com/", W("https://static.wixstatic.com/media/dc121b_b5f5eacfd817468b8ff7b1e46138b61a~mv2.jpg/v1/crop/img.jpg")],
    ["Alt Montafon", "https://www.alt-montafon.com/", ""],
    ["Landhaus Angelika", "https://www.landhausangelika.at/", W("https://static.wixstatic.com/media/d2f3ea_14eec665631c449c8ca60c85f365d56d~mv2.jpg/v1/fit/img.jpg")],
    ["Haus Lerch", "https://www.ferienhaus-lerch.com/", W("https://static.wixstatic.com/media/3dcb39_0c84c369268c4bc2801e1aa830463d12~mv2_d_3072_2304_s_2.jpg/v1/fill/img.jpg")],
    ["Chalet Antonhaus", "https://www.antonhaus.at/", W("https://static.wixstatic.com/media/d2f3ea_cc69fcc08a514d63ad2fc3512685b1aa~mv2.jpeg/v1/fill/img.jpeg")],
    ["Haus zur Kapelle", "https://www.alphuette.at/", W("https://static.wixstatic.com/media/d2f3ea_4b74363394a1453ba82ba17c142448b1~mv2.png/v1/fit/img.png")],
  ];
  const gas = [
    ["La Torteria", "https://www.la-torteria.at/", W("https://static.wixstatic.com/media/d2f3ea_d045d75d0c0c4447b7dd3b16a5ecf785~mv2.jpeg/v1/fill/img.jpeg")],
    ["Blauer Anton", "https://www.antonhaus.at/blaueranton", W("https://static.wixstatic.com/media/d2f3ea_f299e7c05a5948caaec520f7a00f04e8~mv2.jpg/v1/fill/img.jpg")],
    ["La Taverna", "https://www.la-taverna-pizzeria.at/", W("https://static.wixstatic.com/media/11062b_b6f3a9bdc88b4195b4af6792d79e28ac~mv2.jpg")],
    ["Alt Montafon", "https://www.alt-montafon.com/alt-montafon-gaschurn", ""],
  ];
  for (const [name, link, image] of acc) {
    await query(
      `UPDATE accommodations
         SET link = COALESCE(NULLIF(link,''), $2),
             image = CASE WHEN $3 <> '' AND COALESCE(image,'')='' THEN $3 ELSE image END
       WHERE name = $1`,
      [name, link, image]
    );
  }
  // Feature keys + capacity for the booking-tool filters. Only fills empty
  // values, so admin edits are preserved.
  const accMeta = [
    ["Haus Felder – Garfrescha", "ski,parking,wifi,mountainview,nonsmoking,tv", 6],
    ["Alt Montafon", "steam,parking,wifi,kitchen,nonsmoking,tv", 4],
    ["Landhaus Angelika", "breakfast,pets,parking,family,wifi,mountainview", 5],
    ["Haus Lerch", "parking,wifi,garage,kitchen,nonsmoking,tv", 4],
    ["Chalet Antonhaus", "sauna,steam,wellness,breakfast,parking,wifi", 6],
    ["Haus zur Kapelle", "ski,sauna,parking,wifi,mountainview,nonsmoking", 5],
  ];
  for (const [name, features, maxGuests] of accMeta) {
    await query(
      `UPDATE accommodations
         SET features = CASE WHEN COALESCE(features,'')='' THEN $2 ELSE features END,
             max_guests = CASE WHEN COALESCE(max_guests,0)=0 THEN $3 ELSE max_guests END
       WHERE name = $1`,
      [name, features, maxGuests]
    );
  }
  for (const [name, link, image] of gas) {
    await query(
      `UPDATE gastro
         SET link = COALESCE(NULLIF(link,''), $2),
             image = CASE WHEN $3 <> '' AND COALESCE(image,'')='' THEN $3 ELSE image END
       WHERE name = $1`,
      [name, link, image]
    );
  }
  await query(
    `UPDATE events
       SET website = COALESCE(NULLIF(website,''), $2),
           image = CASE WHEN $3 <> '' AND COALESCE(image,'')='' THEN $3 ELSE image END
     WHERE name = $1`,
    ["Musikfest Gaschurn", "https://musikfest26.at/", normWix("https://static.wixstatic.com/media/d2f3ea_817c6e0ac86e444ca10a73d0f6ea3544~mv2.jpg/v1/fill/img.jpg")]
  );
}

async function seedContent(key, value) {
  await query(
    `INSERT INTO content (key, value) VALUES ($1, $2)
     ON CONFLICT (key) DO NOTHING`,
    [key, value]
  );
}

async function seed() {
  // ---- Content defaults (editable via Webdesign admin) ----
  const defaults = {
    site_tagline: "Urlaub im Montafon",
    logo_image: "",
    home_hero_title: "Dein Urlaubsplatz im Hochmontafon finden.",
    home_hero_sub:
      "Sorgfältig ausgewählte Unterkünfte, Gastronomie und Veranstaltungen – mitten im Hochmontafon.",
    home_intro:
      "Valuero ist deine Tourismusplattform im Hochmontafon. Wir bringen Gäste und regionale Partner zusammen – einfach, persönlich und mit echtem Bergpanorama.",
    home_card_unterkuenfte:
      "Ausgewählte Unterkünfte aller Art für deinen Traumurlaub im Hochmontafon.",
    home_card_gastronomie:
      "Essen & Trinken oder beim gemütlichen Kaffee das Bergpanorama genießen.",
    home_card_veranstaltungen: "Wohin während deinem Aufenthalt im Hochmontafon.",
    unterkuenfte_title: "Finde deinen perfekten Urlaubsspot.",
    unterkuenfte_sub: "Wir haben da was für euch.",
    unterkuenfte_intro:
      "Unsere Partner bieten alle einen Mindeststandard: Parkplätze, WiFi, Nichtraucher im Haus und TV. Einfach auf den Unterkunftsnamen klicken und direkt auf der jeweiligen Website buchen – so garantieren wir immer die besten Preise. Die Bewertungen basieren auf dem Durchschnitt mehrerer Online-Portale.",
    gastronomie_title: "Hunger oder Durst?",
    gastronomie_sub: "Wir haben da was für euch.",
    gastronomie_intro:
      "Essen & Trinken oder beim gemütlichen Kaffee das Bergpanorama genießen – unsere gastronomischen Partner im Hochmontafon.",
    veranstaltungen_title: "Wohin im Hochmontafon.",
    veranstaltungen_sub: "Wir haben da was für euch.",
    veranstaltungen_intro:
      "Veranstaltungen, Feste und Highlights während deinem Aufenthalt. Du veranstaltest selbst etwas? Reiche dein Event unten ein – nach kurzer Prüfung erscheint es hier.",
    about_title: "Was ist Valuero?",
    about_meaning:
      "Valu = Vallüla – der markante Berg am Talende. ero = Luft – die reinste Bergluft im Montafon.",
    about_lead:
      "Deine neue Tourismusplattform im Hochmontafon. Website, Buchungsportal, Marketing – all das bietet Valuero.",
    about_block1_title: "Einfach. Preiswert. Support.",
    about_block1_text:
      "Wir übernehmen alles für dich: Vom Design der Website über die Einrichtung der Buchungsplattform bis hin zum laufenden Support und der Bewerbung. Und noch viel besser: alles zum Pauschalpreis!",
    about_block2_title: "Marketing. Machen. Wir.",
    about_block2_text:
      "Wir bewerben unser Portal online sowie offline, um allen Kunden einen Mehrwert zu bieten – ohne dass eigenes Geld für Werbung eingesetzt werden muss.",
    contact_email: "simon@fs-creative.at",
    impressum_html:
      "<h2>Impressum</h2><p>Angaben gemäß §5 ECG, §25 MedienG und §14 UGB</p><p><strong>Valuero – Plattform für Ferienwohnungen im Montafon</strong></p><p>Betreiber: Simon Leonhard Felder – FS Creative<br>UID-Nummer: ATU82622967</p><p>Unternehmensgegenstand: Marketingagentur – gegenständlich Werbeplattform für Gastro und Unterkünfte im Montafon</p><p>Sitz des Unternehmens:<br>Dorfstraße 3, Gaschurn, Vorarlberg, Österreich</p><p>E-Mail: simon@fs-creative.at<br>Web: www.fs-creative.at</p><p>Aufsichtsbehörde: Bezirkshauptmannschaft Bludenz<br>Mitgliedschaft: Mitglied der Wirtschaftskammer Vorarlberg<br>Anwendbare Rechtsvorschriften: Gewerbeordnung (GewO) – www.ris.bka.gv.at</p><h3>Haftung für Inhalte</h3><p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p><p>Fotos: Vallüla Titelbild by Robinhood50 / Wikimedia Commons – CC BY-SA 4.0. Bilder der Unterkünfte und Gastros: Genehmigungen der jeweiligen Inhaber, welche selbst für die Weitergabe verantwortlich sind. Restliche Bilder: FS Creative & Canva.</p><h3>Haftung für Links</h3><p>Unsere Website enthält Links zu externen Websites Dritter. Auf deren Inhalte haben wir keinen Einfluss. Für diese fremden Inhalte wird keine Gewähr übernommen.</p><h3>Urheberrecht</h3><p>Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht.</p><h3>EU-Streitbeilegung</h3><p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit: https://ec.europa.eu/consumers/odr</p>",
    datenschutz_html:
      "<h2>Datenschutz</h2><p>Wir freuen uns über dein Interesse an Valuero. Der Schutz deiner personenbezogenen Daten ist uns ein wichtiges Anliegen. Diesen Text kannst du im Admin-Bereich unter „Webdesign“ jederzeit anpassen.</p>",
    agb_html:
      "<h2>AGB</h2><p>Hier stehen die Allgemeinen Geschäftsbedingungen. Diesen Text kannst du im Admin-Bereich unter „Webdesign“ jederzeit anpassen.</p>",
    home_hero_image: "",
    unterkuenfte_hero_image: "",
    gastronomie_hero_image: "",
    veranstaltungen_hero_image: "",
    about_hero_image: "",
  };
  for (const [k, v] of Object.entries(defaults)) await seedContent(k, v);

  // ---- Accommodations (only if table empty) ----
  const acc = await query("SELECT COUNT(*)::int AS c FROM accommodations");
  if (acc.rows[0].c === 0) {
    const rows = [
      ["Haus Felder – Garfrescha", "Dein Urlaub auf über 1.500 Höhenmeter direkt im Skigebiet.", "Gaschurn", "Ski In & Out", "4,7/5", "Ski In & Out", "Ski In & Out, Parkplatz, WiFi", ""],
      ["Alt Montafon", "Unsere Appartements sind alle in Laufnähe zu Bus, Ortskern und Nahversorgern.", "Gaschurn", "Appartements", "4,3/5", "Dampfbad", "Dampfbad, Parkplatz, WiFi", ""],
      ["Landhaus Angelika", "Urlaub am Bauernhof und das mitten im Ski- und Wandergebiet Gaschurn.", "Gaschurn", "Ferienwohnung", "4,5/5", "Bauernhof", "Frühstücksservice, Haustiere erlaubt, Parkplatz", ""],
      ["Haus Lerch", "Mehrere neu renovierte Wohnungen können Sie hier direkt in St. Gallenkirch buchen.", "St. Gallenkirch", "Ferienwohnung", "4,3/5", "Skiraum", "Parkplatz, WiFi, Tiefgarage", ""],
      ["Chalet Antonhaus", "Traditioneller Charme trifft auf puren Alpen-Luxus. Mit Tagescafé und Wellness.", "Gaschurn", "Appartements", "4,8/5", "Eigene Gastro", "Sauna, Dampfbad, Frühstücksservice", ""],
      ["Haus zur Kapelle", "Unser Haus liegt auf 1.500 m Seehöhe inmitten dem sportlichsten Skigebiet im Montafon.", "Gaschurn", "Ski In & Out", "4,8/5", "Ski In & Out", "Ski In & Out, Sauna, Parkplatz", ""],
    ];
    let i = 0;
    for (const r of rows) {
      await query(
        `INSERT INTO accommodations (name, description, location, type, rating, badge, amenities, link, sort)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
        [...r, i++]
      );
    }
  }

  // ---- Gastronomie (only if empty) ----
  const gas = await query("SELECT COUNT(*)::int AS c FROM gastro");
  if (gas.rows[0].c === 0) {
    const rows = [
      ["La Torteria", "Die kleine Konditorei, die von Do–So auch ein feines Kaffee mit hausgemachten Leckereien beheimatet.", "Gaschurn", "Konditorei", "4,9/5", "Alles hausgemacht", "Kaffee, Kuchen, Frühstück", ""],
      ["Blauer Anton", "Das Tagescafé des ehemaligen legendären Brunellawirtes Frank.", "Gaschurn", "Café", "4,6/5", "Urige Gaststube", "Kaffee, Drinks, Speisen", ""],
      ["La Taverna", "Unsere legendäre Pizzeria mitten im Dorf.", "Gaschurn", "Pizzeria", "4,4/5", "Pizza-Klassiker", "Pizza, Pasta, Drinks", ""],
      ["Alt Montafon", "Klassisch österreichische Küche.", "Gaschurn", "Restaurant", "4,3/5", "Gut bürgerlich", "Gut Bürgerlich, Fleischgerichte, Speisen", ""],
    ];
    let i = 0;
    for (const r of rows) {
      await query(
        `INSERT INTO gastro (name, description, location, type, rating, badge, tags, link, sort)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
        [...r, i++]
      );
    }
  }

  // ---- Events (only if empty) ----
  const ev = await query("SELECT COUNT(*)::int AS c FROM events");
  if (ev.rows[0].c === 0) {
    await query(
      `INSERT INTO events (name, description, location, type, date_text, website, status)
       VALUES ($1,$2,$3,$4,$5,$6,'approved')`,
      [
        "Musikfest Gaschurn",
        "100 Jahre Bürgermusik Gaschurn-Partenen mit 3-tägigem Zeltfest u. v. m.",
        "Versettlaparkplatz Gaschurn",
        "Zeltfest",
        "24. Juli 2026",
        "",
      ]
    );
  }
}

// Content helpers
async function getAllContent() {
  const r = await query("SELECT key, value FROM content");
  const map = {};
  for (const row of r.rows) map[row.key] = row.value;
  return map;
}
async function setContent(key, value) {
  await query(
    `INSERT INTO content (key, value) VALUES ($1,$2)
     ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value`,
    [key, value]
  );
}

const db = { pool, query, init, getAllContent, setContent };

/* ===== server ===== */
// VALUERO — public website + admin CMS.
const express = require("express");
const beds24 = require("./beds24");

const app = express();
app.disable("x-powered-by");
app.use(express.urlencoded({ extended: true, limit: "14mb" }));
app.use(express.json({ limit: "14mb" }));

// ---- helpers ----
async function pendingCount() {
  const r = await db.query("SELECT COUNT(*)::int AS c FROM events WHERE status='pending'");
  return r.rows[0].c;
}

const KIND = {
  unterkuenfte: {
    table: "accommodations",
    label: "Unterkünfte",
    cols: [
      "name", "description", "location", "type", "rating", "badge", "amenities", "link", "image",
      "beds24_property_id", "beds24_room_id", "beds24_token", "features", "max_guests",
    ],
  },
  gastronomie: {
    table: "gastro",
    label: "Gastronomie",
    cols: ["name", "description", "location", "type", "rating", "badge", "tags", "link", "image"],
  },
  veranstaltungen: {
    table: "events",
    label: "Veranstaltungen",
    cols: ["name", "description", "location", "type", "date_text", "website", "image", "status"],
  },
};

function valuesFor(cols, body) {
  return cols.map((c) => {
    let v = body[c];
    if (Array.isArray(v)) v = v.join(","); // multi-value checkboxes (features)
    if (v == null) v = "";
    if (c === "max_guests") return String(parseInt(v, 10) || 0); // INTEGER column
    return String(v);
  });
}

// =================== PUBLIC ===================
app.get("/favicon.svg", (req, res) => {
  res.type("image/svg+xml").send(V.FAVICON);
});

app.get("/", async (req, res, next) => {
  try {
    const c = await db.getAllContent();
    res.send(V.homePage(c));
  } catch (e) {
    next(e);
  }
});

app.get("/unterkuenfte", async (req, res, next) => {
  try {
    const c = await db.getAllContent();
    c.__prefill = {
      checkin: req.query.checkin || "",
      checkout: req.query.checkout || "",
      guests: req.query.guests || "",
    };
    const items = (await db.query("SELECT * FROM accommodations ORDER BY sort, id")).rows;
    res.send(V.listingPage(c, items, "acc"));
  } catch (e) {
    next(e);
  }
});

app.get("/gastronomie", async (req, res, next) => {
  try {
    const c = await db.getAllContent();
    const items = (await db.query("SELECT * FROM gastro ORDER BY sort, id")).rows;
    res.send(V.listingPage(c, items, "gastro"));
  } catch (e) {
    next(e);
  }
});

app.get("/veranstaltungen", async (req, res, next) => {
  try {
    const c = await db.getAllContent();
    const items = (
      await db.query("SELECT * FROM events WHERE status='approved' ORDER BY id DESC")
    ).rows;
    res.send(V.eventsPage(c, items, { success: req.query.ok === "1" }));
  } catch (e) {
    next(e);
  }
});

app.post("/veranstaltungen/einreichen", async (req, res, next) => {
  try {
    const b = req.body;
    if (!b.name || !b.description) return res.redirect("/veranstaltungen#einreichen");
    await db.query(
      `INSERT INTO events (name, description, location, type, date_text, website, image, submitter, status)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,'pending')`,
      [
        String(b.name).slice(0, 160),
        String(b.description).slice(0, 800),
        String(b.location || "").slice(0, 160),
        String(b.type || "").slice(0, 80),
        String(b.date_text || "").slice(0, 80),
        String(b.website || "").slice(0, 300),
        String(b.image || "").slice(0, 4000000),
        String(b.submitter || "").slice(0, 200),
      ]
    );
    res.redirect("/veranstaltungen?ok=1#einreichen");
  } catch (e) {
    next(e);
  }
});

app.get("/ueber-uns", async (req, res, next) => {
  try {
    res.send(V.aboutPage(await db.getAllContent()));
  } catch (e) {
    next(e);
  }
});

app.get("/impressum", async (req, res, next) => {
  try {
    const c = await db.getAllContent();
    res.send(V.legalPage(c, "Impressum", c.impressum_html, ""));
  } catch (e) {
    next(e);
  }
});
app.get("/datenschutz", async (req, res, next) => {
  try {
    const c = await db.getAllContent();
    res.send(V.legalPage(c, "Datenschutz", c.datenschutz_html, ""));
  } catch (e) {
    next(e);
  }
});
app.get("/agb", async (req, res, next) => {
  try {
    const c = await db.getAllContent();
    res.send(V.legalPage(c, "AGB", c.agb_html, ""));
  } catch (e) {
    next(e);
  }
});

// =================== BOOKING API (Beds24) ===================
function validDate(s) {
  return typeof s === "string" && /^\d{4}-\d{2}-\d{2}$/.test(s) && !isNaN(new Date(s + "T00:00:00Z"));
}
// Map a DB accommodation row to the public shape used by the booking tool.
function publicAcc(row) {
  const featureKeys = parseFeatures(row.features);
  return {
    id: row.id,
    name: row.name,
    description: row.description || "",
    location: row.location || "",
    type: row.type || "",
    rating: row.rating || "",
    badge: row.badge || "",
    image: row.image || "",
    link: row.link || "",
    features: featureKeys,
    featureLabels: featureKeys.map((k) => ({ key: k, label: FEATURE_LABEL[k], icon: FEATURE_ICON[k] })),
    maxGuests: row.max_guests || 0,
    connected: beds24.isConnected(row),
  };
}

// GET /api/search — accommodations + live price/availability for dates & filters.
app.get("/api/search", async (req, res, next) => {
  try {
    const { checkin, checkout } = req.query;
    const guests = Math.max(0, parseInt(req.query.guests, 10) || 0);
    const wantFeatures = String(req.query.features || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    const type = String(req.query.type || "").toLowerCase();
    const loc = String(req.query.loc || "").toLowerCase();
    const priceMax = parseInt(req.query.priceMax, 10) || 0;
    const datesValid = validDate(checkin) && validDate(checkout) && beds24.nights(checkin, checkout) > 0;

    const rows = (await db.query("SELECT * FROM accommodations ORDER BY sort, id")).rows;
    const results = [];
    for (const row of rows) {
      const acc = publicAcc(row);
      if (type && acc.type.toLowerCase() !== type) continue;
      if (loc && acc.location.toLowerCase() !== loc) continue;
      if (wantFeatures.length && !wantFeatures.every((f) => acc.features.includes(f))) continue;
      if (guests && acc.maxGuests && guests > acc.maxGuests) continue;

      let offer = null;
      if (datesValid && acc.connected) {
        try {
          offer = await beds24.getStayOffer(db, row, checkin, checkout, guests || 2);
        } catch (e) {
          console.error("Beds24 offer error", acc.name, e.message);
          offer = { error: true, available: false };
        }
      }
      if (priceMax && offer && offer.available && offer.perNight && offer.perNight > priceMax) continue;
      results.push({ ...acc, offer });
    }
    // Available first, then connected, then original order.
    results.sort((a, b) => {
      const av = (x) => (x.offer && x.offer.available ? 0 : 1);
      const cn = (x) => (x.connected ? 0 : 1);
      return av(a) - av(b) || cn(a) - cn(b);
    });
    res.json({
      checkin: datesValid ? checkin : null,
      checkout: datesValid ? checkout : null,
      nights: datesValid ? beds24.nights(checkin, checkout) : 0,
      guests: guests || null,
      count: results.length,
      results,
    });
  } catch (e) {
    next(e);
  }
});

// GET /api/quote/:id — fresh price for one accommodation + stay.
app.get("/api/quote/:id", async (req, res, next) => {
  try {
    const row = (await db.query("SELECT * FROM accommodations WHERE id=$1", [req.params.id])).rows[0];
    if (!row) return res.status(404).json({ ok: false, error: "Unterkunft nicht gefunden." });
    const { checkin, checkout } = req.query;
    const guests = Math.max(1, parseInt(req.query.guests, 10) || 2);
    if (!validDate(checkin) || !validDate(checkout) || beds24.nights(checkin, checkout) < 1)
      return res.status(400).json({ ok: false, error: "Bitte gültige An- und Abreise wählen." });
    if (!beds24.isConnected(row))
      return res.json({ ok: true, connected: false, acc: publicAcc(row), offer: null });
    const offer = await beds24.getStayOffer(db, row, checkin, checkout, guests);
    res.json({ ok: true, connected: true, acc: publicAcc(row), offer });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message || "Preis konnte nicht geladen werden." });
  }
});

// GET /api/calendar/:id — per-day availability & price for the date picker.
app.get("/api/calendar/:id", async (req, res, next) => {
  try {
    const row = (await db.query("SELECT * FROM accommodations WHERE id=$1", [req.params.id])).rows[0];
    if (!row) return res.status(404).json({ ok: false, error: "Unterkunft nicht gefunden." });
    const from = validDate(req.query.from) ? req.query.from : new Date().toISOString().slice(0, 10);
    const to = validDate(req.query.to)
      ? req.query.to
      : new Date(Date.now() + 180 * 86400000).toISOString().slice(0, 10);
    const cal = await beds24.getCalendar(db, row, from, to);
    res.json({ ok: true, connected: beds24.isConnected(row), calendar: cal });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message || "Kalender konnte nicht geladen werden." });
  }
});

// POST /api/book — create a booking through Beds24 (full funnel).
app.post("/api/book", async (req, res, next) => {
  try {
    const b = req.body || {};
    const id = parseInt(b.accId, 10) || 0;
    const row = (await db.query("SELECT * FROM accommodations WHERE id=$1", [id])).rows[0];
    if (!row) return res.status(404).json({ ok: false, error: "Unterkunft nicht gefunden." });
    if (!beds24.isConnected(row))
      return res.status(400).json({ ok: false, error: "Diese Unterkunft bietet keine Online-Buchung." });
    if (!validDate(b.checkin) || !validDate(b.checkout) || beds24.nights(b.checkin, b.checkout) < 1)
      return res.status(400).json({ ok: false, error: "Bitte gültige An- und Abreise wählen." });
    if (!b.firstName || !b.lastName || !b.email)
      return res.status(400).json({ ok: false, error: "Bitte Vorname, Nachname und E-Mail angeben." });
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(b.email)))
      return res.status(400).json({ ok: false, error: "Bitte eine gültige E-Mail-Adresse angeben." });

    const guests = Math.max(1, parseInt(b.guests, 10) || 2);
    // Re-price server-side; never trust a client-supplied total.
    let offer = null;
    try {
      offer = await beds24.getStayOffer(db, row, b.checkin, b.checkout, guests);
    } catch (e) {
      console.error("Re-quote failed", e.message);
    }
    if (offer && offer.available === false)
      return res.status(409).json({ ok: false, error: "Für diese Daten leider nicht mehr verfügbar." });

    const result = await beds24.createBooking(db, row, {
      checkin: b.checkin,
      checkout: b.checkout,
      guests,
      adults: Math.max(1, parseInt(b.adults, 10) || guests),
      children: Math.max(0, parseInt(b.children, 10) || 0),
      title: b.title || "",
      firstName: String(b.firstName).slice(0, 80),
      lastName: String(b.lastName).slice(0, 80),
      email: String(b.email).slice(0, 160),
      phone: String(b.phone || "").slice(0, 60),
      notes: String(b.notes || "").slice(0, 1000),
    });

    await db.query(
      `INSERT INTO bookings (accommodation_id, accommodation_name, beds24_booking_id, checkin, checkout, guests,
         first_name, last_name, email, phone, notes, total, currency, status)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)`,
      [
        id, row.name, String(result.bookingId || ""), b.checkin, b.checkout, guests,
        String(b.firstName).slice(0, 80), String(b.lastName).slice(0, 80), String(b.email).slice(0, 160),
        String(b.phone || "").slice(0, 60), String(b.notes || "").slice(0, 1000),
        offer ? offer.total || 0 : 0, offer ? offer.currency || "EUR" : "EUR", result.status || "new",
      ]
    );
    res.json({
      ok: true,
      bookingId: result.bookingId,
      demo: !!result.demo,
      status: result.status,
      total: offer ? offer.total : null,
      currency: offer ? offer.currency : "EUR",
    });
  } catch (e) {
    console.error("Booking failed", e);
    res.status(500).json({ ok: false, error: e.message || "Buchung fehlgeschlagen. Bitte später erneut versuchen." });
  }
});

// =================== ADMIN AUTH ===================
app.get("/admin/login", (req, res) => {
  if (auth.isAuthed(req)) return res.redirect("/admin");
  res.send(A.loginPage(req.query.e ? "Falsches Passwort." : ""));
});
app.post("/admin/login", (req, res) => {
  if (auth.checkPassword(req.body.password)) {
    auth.issueCookie(res);
    return res.redirect("/admin");
  }
  res.redirect("/admin/login?e=1");
});
app.get("/admin/logout", (req, res) => {
  auth.clearCookie(res);
  res.redirect("/admin/login");
});

// all /admin routes below require auth
app.use("/admin", auth.requireAuth);

app.get("/admin", async (req, res, next) => {
  try {
    const acc = (await db.query("SELECT COUNT(*)::int AS c FROM accommodations")).rows[0].c;
    const gas = (await db.query("SELECT COUNT(*)::int AS c FROM gastro")).rows[0].c;
    const ev = (await db.query("SELECT COUNT(*)::int AS c FROM events")).rows[0].c;
    const pending = await pendingCount();
    res.send(A.dashboard({ acc, gas, ev, pending }));
  } catch (e) {
    next(e);
  }
});

// ---- generic entry CRUD ----
function registerEntry(kind) {
  const cfg = KIND[kind];
  const base = "/admin/" + kind;

  app.get(base, async (req, res, next) => {
    try {
      const order =
        kind === "veranstaltungen"
          ? "ORDER BY (status='pending') DESC, id DESC"
          : "ORDER BY sort, id";
      const items = (await db.query(`SELECT * FROM ${cfg.table} ${order}`)).rows;
      res.send(A.entryList(kind, cfg.label, items, await pendingCount()));
    } catch (e) {
      next(e);
    }
  });

  app.get(base + "/new", async (req, res, next) => {
    try {
      res.send(A.entryForm(kind, cfg.label, {}, await pendingCount()));
    } catch (e) {
      next(e);
    }
  });

  app.post(base + "/new", async (req, res, next) => {
    try {
      const cols = cfg.cols;
      const vals = valuesFor(cols, req.body);
      const ph = cols.map((_, i) => "$" + (i + 1)).join(",");
      await db.query(
        `INSERT INTO ${cfg.table} (${cols.join(",")}) VALUES (${ph})`,
        vals
      );
      res.redirect(base);
    } catch (e) {
      next(e);
    }
  });

  app.get(base + "/:id/edit", async (req, res, next) => {
    try {
      const r = await db.query(`SELECT * FROM ${cfg.table} WHERE id=$1`, [req.params.id]);
      if (!r.rows[0]) return res.redirect(base);
      res.send(A.entryForm(kind, cfg.label, r.rows[0], await pendingCount()));
    } catch (e) {
      next(e);
    }
  });

  app.post(base + "/:id/edit", async (req, res, next) => {
    try {
      const cols = cfg.cols;
      const vals = valuesFor(cols, req.body);
      const set = cols.map((c, i) => `${c}=$${i + 1}`).join(",");
      vals.push(req.params.id);
      await db.query(`UPDATE ${cfg.table} SET ${set} WHERE id=$${vals.length}`, vals);
      res.redirect(base);
    } catch (e) {
      next(e);
    }
  });

  app.post(base + "/:id/delete", async (req, res, next) => {
    try {
      await db.query(`DELETE FROM ${cfg.table} WHERE id=$1`, [req.params.id]);
      res.redirect(base);
    } catch (e) {
      next(e);
    }
  });

  if (kind === "veranstaltungen") {
    app.post(base + "/:id/approve", async (req, res, next) => {
      try {
        await db.query("UPDATE events SET status='approved' WHERE id=$1", [req.params.id]);
        res.redirect(base);
      } catch (e) {
        next(e);
      }
    });
  }
}
registerEntry("unterkuenfte");
registerEntry("gastronomie");
registerEntry("veranstaltungen");

// ---- Webdesign ----
app.get("/admin/webdesign", async (req, res, next) => {
  try {
    const c = await db.getAllContent();
    res.send(A.webdesignPage(c, await pendingCount(), req.query.saved === "1"));
  } catch (e) {
    next(e);
  }
});
app.post("/admin/webdesign", async (req, res, next) => {
  try {
    const keys = Object.keys(req.body);
    for (const k of keys) await db.setContent(k, String(req.body[k]));
    res.redirect("/admin/webdesign?saved=1");
  } catch (e) {
    next(e);
  }
});

// ---- 404 + error ----
app.use((req, res) => res.status(404).send("Nicht gefunden – <a href='/'>zur Startseite</a>"));
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Serverfehler. Bitte später erneut versuchen.");
});

const PORT = process.env.PORT || 3000;
function start() {
  db.init()
    .then(() => {
      app.listen(PORT, () => console.log("VALUERO läuft auf Port " + PORT));
    })
    .catch((e) => {
      console.error("DB-Init fehlgeschlagen:", e);
      // Start anyway so health checks don't hard-fail; pages will error until DB is up.
      app.listen(PORT, () => console.log("VALUERO (ohne DB) auf Port " + PORT));
    });
}
if (require.main === module) start();
module.exports = { app, V, A, db, auth, start };

