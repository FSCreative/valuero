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
  font-family:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  background:var(--bg); color:var(--ink); line-height:1.6;
  -webkit-font-smoothing:antialiased; overflow-x:hidden;
}
h1,h2,h3,.display{font-family:ui-serif,Georgia,"Iowan Old Style","Palatino Linotype",Palatino,"Times New Roman",serif; font-weight:600; line-height:1.08; letter-spacing:-.01em}
a{color:inherit;text-decoration:none}
img{max-width:100%;display:block}
.container{max-width:var(--maxw);margin:0 auto;padding:0 24px}
.accent{color:var(--accent)}
.muted{color:var(--muted)}

/* NAV */
.nav{position:sticky;top:0;z-index:50;backdrop-filter:saturate(160%) blur(16px);
  background:rgba(16,23,19,.86);border-bottom:1px solid rgba(255,255,255,.08)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;gap:18px;height:74px;max-width:var(--maxw);margin:0 auto;padding:0 24px}
.brand{display:flex;align-items:center;gap:10px;font-family:ui-serif,Georgia,"Iowan Old Style","Palatino Linotype",Palatino,"Times New Roman",serif;font-weight:600;font-size:24px;letter-spacing:.04em;color:#fff}
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
.foot-col h4{color:#fff;font-family:ui-serif,Georgia,"Iowan Old Style","Palatino Linotype",Palatino,"Times New Roman",serif;font-size:18px;margin-bottom:12px}
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
  .burger{display:none}
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
.searchbar .child-ages{border-top:1px solid var(--line);margin-top:2px;padding:10px 18px 4px}
.searchbar .child-ages label{display:block;margin-bottom:2px}
.searchbar .ages-row{display:flex;flex-wrap:wrap;gap:8px}
.searchbar .age-sel{border:1px solid var(--line);border-radius:10px;padding:8px 10px;font-size:14px;background:var(--bg);color:var(--ink);font-family:inherit}
.booking-hero{padding-bottom:26px}
.booking-layout{display:grid;grid-template-columns:262px 1fr;gap:28px;align-items:start}
.filters-panel{position:sticky;top:92px;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:20px;display:flex;flex-direction:column;gap:18px}
.filters-panel h4{font-size:12px;text-transform:uppercase;letter-spacing:.11em;color:var(--muted);margin-bottom:10px}
.fp-subgroup{margin-bottom:12px}
.fp-subgroup h5{font-size:12.5px;font-weight:700;color:var(--ink);margin:10px 0 3px}
.fp-subgroup:first-child h5{margin-top:0}
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
.fp-sort{width:100%;border:1px solid var(--line);border-radius:10px;padding:10px 12px;font-size:14px;background:var(--surface);color:var(--ink);font-family:inherit;cursor:pointer}
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
.price-box .pn b{font-family:ui-serif,Georgia,"Iowan Old Style","Palatino Linotype",Palatino,"Times New Roman",serif;font-size:23px;color:var(--ink)}
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
.bk-card .body{cursor:pointer}
.card-open{font-size:13px;font-weight:600;color:var(--accent);display:inline-flex;align-items:center;gap:5px;margin-top:2px}
/* room picker */
.rooms-pick{display:flex;flex-direction:column;gap:8px;margin:2px 0 4px}
.room-opt{display:flex;align-items:flex-start;gap:10px;border:1px solid var(--line);border-radius:12px;padding:11px 14px;cursor:pointer;transition:.15s}
.room-opt .rd{display:block;font-size:12.5px;color:var(--muted);margin-top:4px;line-height:1.45;max-width:60ch}
.room-opt .rf{display:flex;flex-wrap:wrap;gap:6px;margin-top:7px}
.room-opt .rf span{background:var(--surface-2);border:1px solid var(--line);border-radius:20px;padding:2px 9px;font-size:11.5px;color:var(--ink)}
.room-opt:hover{border-color:var(--accent)}
.room-opt.sel{border-color:var(--accent);background:rgba(31,106,73,.06)}
.room-opt input{accent-color:var(--accent);width:17px;height:17px;flex:0 0 auto}
.room-opt .rn{font-weight:600;font-size:14.5px}
.room-opt .rg{font-size:12.5px;color:var(--muted)}
.room-opt .rp{margin-left:auto;text-align:right;font-size:13px;color:var(--muted);white-space:nowrap}
.room-opt .rp b{font-family:ui-serif,Georgia,"Iowan Old Style","Palatino Linotype",Palatino,"Times New Roman",serif;font-size:18px;color:var(--ink);display:block}
.room-opt.soldout{opacity:.55}
.room-opt.soldout .rp{color:#b4553f}
/* detail modal */
.dt-modal{max-width:760px;padding:0;position:relative}
.dt-close{position:absolute;top:12px;right:12px;background:rgba(255,255,255,.92);border-radius:999px;width:38px;height:38px;display:flex;align-items:center;justify-content:center;z-index:3;box-shadow:0 4px 14px -6px rgba(0,0,0,.4)}
.dt-gallery .main{width:100%;height:360px;background-size:cover;background-position:center;background-color:#dfe5de}
.dt-gallery .main.noimg{background:linear-gradient(150deg,#3a6b54,#1f3a2c)}
.dt-thumbs{display:flex;gap:8px;padding:10px 20px 0;overflow-x:auto}
.dt-thumbs .th{width:88px;height:62px;border-radius:9px;background-size:cover;background-position:center;cursor:pointer;flex:0 0 auto;border:2px solid transparent}
.dt-thumbs .th.active{border-color:var(--accent)}
.dt-body{padding:18px 24px 24px}
.dt-head{display:flex;justify-content:space-between;align-items:flex-start;gap:12px}
.dt-head h3{font-size:26px}
.dt-rating{color:var(--gold);font-weight:600;white-space:nowrap}
.dt-meta{display:flex;flex-wrap:wrap;gap:8px;margin:10px 0 12px}
.dt-meta .chip{background:var(--surface-2);border-radius:999px;padding:4px 11px;font-size:13px}
.dt-desc{color:var(--muted);margin:2px 0 16px;line-height:1.65}
.dt-feats{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:18px}
.dt-feats .fi{background:var(--surface-2);border-radius:999px;padding:6px 12px;font-size:13px}
.dt-sec-title{font-family:ui-serif,Georgia,"Iowan Old Style","Palatino Linotype",Palatino,"Times New Roman",serif;font-size:18px;margin:4px 0 10px}
.dt-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px;align-items:center}
.dt-actions .btn{flex:0 0 auto}
.dt-web{color:var(--accent);font-weight:600;display:inline-flex;align-items:center;gap:6px}
/* ===== SEO pages ===== */
.crumbs{display:flex;flex-wrap:wrap;align-items:center;gap:6px;font-size:13px;color:var(--muted);margin-bottom:14px}
.crumbs a{color:var(--muted)}
.crumbs a:hover{color:var(--accent)}
.crumbs span{opacity:.6}
.crumbs .cur{color:var(--ink);font-weight:600;opacity:1}
.faq{max-width:820px;display:flex;flex-direction:column;gap:10px}
.faq-item{background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:4px 18px}
.faq-item summary{cursor:pointer;font-weight:600;padding:14px 0;list-style:none;display:flex;justify-content:space-between;align-items:center;gap:12px}
.faq-item summary::-webkit-details-marker{display:none}
.faq-item summary::after{content:"+";font-size:22px;color:var(--accent);font-weight:400}
.faq-item[open] summary::after{content:"–"}
.faq-item p{color:var(--muted);padding:0 0 16px;margin:0;line-height:1.6}
.link-cloud{display:flex;flex-wrap:wrap;gap:9px}
.link-cloud a{background:var(--surface);border:1px solid var(--line);border-radius:999px;padding:8px 15px;font-size:14px;font-weight:500;color:var(--ink);transition:.15s}
.link-cloud a:hover{border-color:var(--accent);color:var(--accent);transform:translateY(-1px)}
.hub-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:26px}
.hub-col h4{font-family:ui-serif,Georgia,"Iowan Old Style","Palatino Linotype",Palatino,"Times New Roman",serif;font-size:18px;margin-bottom:10px}
.hub-col a{display:block;color:var(--muted);font-size:14.5px;padding:4px 0;transition:.15s}
.hub-col a:hover{color:var(--accent)}
.detail-gallery{margin-bottom:26px}
.dg-main{width:100%;height:clamp(260px,42vw,460px);border-radius:var(--radius);background-size:cover;background-position:center;box-shadow:var(--shadow-sm)}
.dg-thumbs{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin-top:10px}
.dg-th{aspect-ratio:4/3;border-radius:12px;background-size:cover;background-position:center}
.detail-cols{display:grid;grid-template-columns:1fr 320px;gap:34px;align-items:start}
.detail-feats{display:flex;flex-wrap:wrap;gap:9px;margin:6px 0 8px}
.detail-feats .fi{background:var(--surface-2);border-radius:999px;padding:7px 13px;font-size:14px}
.detail-rooms{list-style:none;display:flex;flex-direction:column;gap:8px;padding:0}
.detail-rooms li{background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:12px 16px}
.detail-cta{position:sticky;top:92px;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:22px;box-shadow:var(--shadow-sm)}
.detail-cta h3{font-size:22px}
@media(max-width:820px){.hub-grid{grid-template-columns:1fr 1fr}.detail-cols{grid-template-columns:1fr}.detail-cta{position:static}.dg-thumbs{grid-template-columns:repeat(4,1fr)}}
@media(max-width:520px){.hub-grid{grid-template-columns:1fr}.dg-thumbs{grid-template-columns:repeat(3,1fr)}}
/* ===== MOBILE + INTERACTIVITY ===== */
.to-top{position:fixed;right:16px;bottom:16px;width:46px;height:46px;border-radius:50%;background:var(--accent);color:#fff;border:0;display:flex;align-items:center;justify-content:center;font-size:20px;cursor:pointer;box-shadow:0 10px 24px -10px rgba(31,106,73,.9);opacity:0;transform:translateY(14px);pointer-events:none;transition:opacity .25s,transform .25s,background .2s;z-index:60}
.to-top.show{opacity:1;transform:none;pointer-events:auto}
.to-top:hover{background:var(--accent-2)}
.btn:active,.btn-search:active,.btn-book:active,.btn-web:active,.pill:active,.nav-cta:active{transform:scale(.96)}
.bk-card,.card,.cat-card,.hub-col a,.link-cloud a{-webkit-tap-highlight-color:transparent}
@media(hover:none){.bk-card:active{transform:scale(.99)}}
/* ===== App-like mobile: bottom tab bar, bottom-sheet modals, native finish ===== */
html{-webkit-text-size-adjust:100%}
*{-webkit-tap-highlight-color:transparent}
.tabbar{display:none}
@keyframes sheetUp{from{transform:translateY(100%)}to{transform:none}}
@media(max-width:720px){
  .tabbar{display:flex;position:fixed;left:0;right:0;bottom:0;z-index:70;background:rgba(255,255,255,.94);backdrop-filter:saturate(1.5) blur(16px);-webkit-backdrop-filter:saturate(1.5) blur(16px);border-top:1px solid var(--line);padding:6px 4px calc(6px + env(safe-area-inset-bottom));box-shadow:0 -10px 26px -18px rgba(0,0,0,.5)}
  .tabbar .tab{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;padding:6px 2px;color:var(--muted);font-size:10.5px;font-weight:600;text-decoration:none;border-radius:13px;transition:color .15s,background .15s,transform .1s}
  .tabbar .tab .ti,.tabbar .tab .ti svg{width:24px;height:24px;display:block}
  .tabbar .tab .tl{line-height:1;letter-spacing:.01em}
  .tabbar .tab.active{color:var(--accent)}
  .tabbar .tab.active .ti{transform:translateY(-1px)}
  .tabbar .tab:active{background:var(--surface-2);transform:scale(.93)}
  body{padding-bottom:calc(58px + env(safe-area-inset-bottom))}
  .to-top{bottom:calc(76px + env(safe-area-inset-bottom));right:14px}
  .detail-mobilecta{bottom:calc(58px + env(safe-area-inset-bottom))}
  .footer{padding-bottom:26px}
  .bk-card:active,.ev-card:active,.card:active,.cat-card:active,.hub-col a:active{transform:scale(.985)}
}
@media(max-width:640px){
  .bk-overlay{align-items:flex-end;padding:0}
  .bk-modal{max-width:none;width:100%;border-radius:22px 22px 0 0;max-height:92vh;overflow:auto;-webkit-overflow-scrolling:touch;animation:sheetUp .34s cubic-bezier(.22,.61,.36,1);padding-bottom:env(safe-area-inset-bottom)}
  .bk-modal .grab{display:block;width:40px;height:5px;margin:9px auto 0;border-radius:3px;background:var(--line)}
  .dt-modal{border-radius:22px 22px 0 0}
  .bk-close.dt-close{top:12px;right:12px}
}
.bk-modal .grab{display:none}
.filter-toggle{display:none}
@media(max-width:900px){
  .filter-toggle{display:inline-flex;align-items:center;gap:8px;position:sticky;top:74px;z-index:30;background:var(--surface);border:1px solid var(--line);border-radius:999px;padding:11px 20px;font-weight:600;font-size:15px;color:var(--ink);cursor:pointer;box-shadow:var(--shadow-sm);margin-bottom:14px;font-family:inherit}
  .filters-panel{position:fixed!important;left:0!important;right:0!important;bottom:0!important;top:auto!important;width:auto!important;max-width:none!important;max-height:84vh;height:auto;z-index:120;transform:translateY(110%)!important;transition:transform .34s cubic-bezier(.22,.61,.36,1)!important;border-radius:22px 22px 0 0;overflow-y:auto;-webkit-overflow-scrolling:touch;padding-top:6px;padding-bottom:calc(20px + env(safe-area-inset-bottom));box-shadow:0 -20px 50px -20px rgba(0,0,0,.45)}
  .filters-panel::before{content:"";display:block;width:40px;height:5px;margin:2px auto 12px;border-radius:3px;background:var(--line)}
  .filters-panel.open{transform:translateY(0)!important}
  .filters-backdrop{position:fixed;inset:0;background:rgba(16,23,19,.5);opacity:0;pointer-events:none;transition:opacity .3s;z-index:110}
  .filters-backdrop.open{opacity:1;pointer-events:auto}
  .filters-panel .fp-close{display:flex;align-items:center;justify-content:space-between;font-family:ui-serif,Georgia,"Iowan Old Style","Palatino Linotype",Palatino,"Times New Roman",serif;font-size:20px;margin-bottom:6px}
  .filters-panel .fp-close button{background:none;border:0;font-size:26px;cursor:pointer;color:var(--muted)}
}
@media(min-width:901px){.filters-panel .fp-close{display:none}}
/* ---- Events grid, date badges, gallery preview ---- */
.ev-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:24px}
.ev-grid-past{grid-template-columns:repeat(auto-fill,minmax(215px,1fr));gap:16px;margin-top:16px}
.ev-card{background:var(--surface);border:1px solid var(--line);border-radius:18px;overflow:hidden;cursor:pointer;display:flex;flex-direction:column;transition:transform .18s,box-shadow .18s;box-shadow:var(--shadow)}
.ev-card:hover{transform:translateY(-4px);box-shadow:0 22px 40px -22px rgba(0,0,0,.35)}
.ev-card:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.ev-img{position:relative;height:190px;background-size:cover;background-position:center;background-color:#dfe5de}
.ev-date{position:absolute;top:12px;left:12px;background:var(--accent);color:#fff;border-radius:13px;padding:8px 11px;text-align:center;line-height:1;box-shadow:0 8px 18px -8px rgba(0,0,0,.55);min-width:54px}
.ev-date .d{display:block;font-size:25px;font-weight:800}
.ev-date .m{display:block;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;margin-top:4px}
.ev-date .y{display:block;font-size:10px;font-weight:600;opacity:.82;margin-top:2px;letter-spacing:.04em}
.ev-date-text{padding:9px 13px}
.ev-date-text .m{font-size:13px;letter-spacing:.02em;text-transform:none}
.ev-type{position:absolute;bottom:12px;right:12px;background:rgba(12,20,15,.66);color:#fff;font-size:12px;font-weight:600;padding:5px 11px;border-radius:20px;backdrop-filter:blur(3px)}
.ev-cbody{padding:16px 18px 18px;display:flex;flex-direction:column;gap:7px;flex:1}
.ev-cbody h3{margin:0;font-size:19px;line-height:1.25}
.ev-when{color:var(--accent);font-weight:700;font-size:13.5px}
.ev-desc{color:var(--muted);font-size:14.5px;margin:0;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.ev-meta{display:flex;flex-wrap:wrap;gap:7px;margin-top:2px}
.ev-open{margin-top:auto;color:var(--accent);font-weight:700;font-size:13.5px}
.ev-small{opacity:.7;filter:grayscale(.4);box-shadow:none}
.ev-small:hover{opacity:1;filter:none}
.ev-small .ev-img{height:120px}
.ev-small .ev-cbody{padding:12px 14px}
.ev-small .ev-cbody h3{font-size:16px}
.ev-small .ev-desc{-webkit-line-clamp:2;font-size:13.5px}
.ev-small .ev-date{min-width:44px;padding:5px 8px}
.ev-small .ev-date .d{font-size:19px}
.ev-past-head{margin-top:54px;border-top:1px solid var(--line);padding-top:30px}
.ev-past-head h2{margin:0 0 4px}
.ev-bigdate{font-size:17px;font-weight:700;color:var(--accent);margin:2px 0 10px}
.ev-prev{display:flex;flex-wrap:wrap;gap:12px;margin-top:12px}
.ev-prev .evp{position:relative;width:88px;height:66px;border-radius:11px;background-size:cover;background-position:center;box-shadow:0 4px 10px -4px rgba(0,0,0,.45)}
.ev-prev .evp button{position:absolute;top:-8px;right:-8px;width:23px;height:23px;border-radius:50%;border:2px solid #fff;background:#c0392b;color:#fff;font-size:13px;line-height:1;cursor:pointer;box-shadow:0 2px 6px rgba(0,0,0,.4)}
.ev-prev .evp .star{position:absolute;bottom:4px;left:4px;background:rgba(0,0,0,.55);color:#ffd94a;font-size:11px;padding:1px 5px;border-radius:6px}
@media(max-width:680px){.ev-grid{grid-template-columns:1fr}.ev-grid-past{grid-template-columns:1fr 1fr;gap:12px}}
/* ---- Search loading screen (minimalist tap game) ---- */
.loadgame{grid-column:1/-1;border:1px solid var(--line);border-radius:20px;padding:24px 22px;background:var(--surface);text-align:center;box-shadow:var(--shadow-sm)}
.lg-title{font-family:ui-serif,Georgia,"Iowan Old Style","Palatino Linotype",Palatino,"Times New Roman",serif;font-weight:600;font-size:19px;color:var(--ink);display:flex;align-items:center;justify-content:center;gap:11px}
.lg-spin{width:16px;height:16px;border:2px solid var(--line);border-top-color:var(--accent);border-radius:50%;display:inline-block;animation:lgspin .8s linear infinite;flex:0 0 auto}
@keyframes lgspin{to{transform:rotate(360deg)}}
.lg-sub{color:var(--muted);font-size:13.5px;margin-top:6px}
.lg-sub b{color:var(--accent);font-weight:600}
.lg-play{position:relative;height:150px;max-width:460px;margin:16px auto 2px;border-radius:14px;background:var(--surface-2);overflow:hidden;cursor:pointer;touch-action:manipulation}
.lg-berg{position:absolute;width:48px;height:38px;margin:-19px 0 0 -24px;color:var(--accent);opacity:0;transform:scale(.4) translateY(6px);transform-origin:bottom center;transition:opacity .16s ease,transform .16s ease;filter:drop-shadow(0 5px 8px rgba(31,106,73,.45));will-change:transform,opacity;cursor:pointer}
.lg-berg svg{width:100%;height:100%;display:block;pointer-events:none}
.lg-berg.on{opacity:1;transform:scale(1) translateY(0)}
.lg-berg.pop{transform:scale(1.25) translateY(-3px)}
.lg-bar{height:3px;max-width:460px;margin:10px auto 0;border-radius:2px;background:var(--line);overflow:hidden;position:relative}
.lg-bar::after{content:"";position:absolute;left:-40%;top:0;bottom:0;width:40%;background:var(--accent);border-radius:2px;animation:lgbar 1.1s ease-in-out infinite}
@keyframes lgbar{to{left:110%}}
.lg-foot{color:var(--muted);font-size:12px;margin-top:9px}
@keyframes lgdots{0%{content:""}25%{content:"."}50%{content:".."}75%{content:"..."}}
@media(max-width:480px){.lg-play{height:128px}.lg-berg{width:52px;height:41px;margin:-20px 0 0 -26px}}
/* near-miss (filtered-out) results shown greyed + small */
.near-head{grid-column:1/-1;margin:22px 0 2px;border-top:1px dashed var(--line);padding-top:20px}
.near-head h3{margin:0 0 4px;font-size:19px}
.near-head p{margin:0;color:var(--muted);font-size:14px}
.bk-card-muted{opacity:.66;filter:grayscale(.5);background:var(--surface-2)}
.bk-card-muted:hover{opacity:1;filter:none}
.bk-card-muted .off-badge{position:absolute;top:10px;right:10px;background:rgba(20,20,20,.72);color:#fff;font-size:11px;font-weight:600;padding:4px 9px;border-radius:20px;backdrop-filter:blur(2px)}
/* sticky mobile CTA on accommodation detail pages */
.detail-mobilecta{display:none}
@media(max-width:820px){
  .detail-cta{display:none}
  .detail-mobilecta{display:flex;gap:10px;position:fixed;left:0;right:0;bottom:0;z-index:70;background:var(--surface);border-top:1px solid var(--line);padding:12px 16px;box-shadow:0 -10px 30px -18px rgba(0,0,0,.4)}
  .detail-mobilecta .btn{flex:1;justify-content:center}
  body.has-mobilecta{padding-bottom:76px}
}
/* ===== kochdu.at ad banner ===== */
.kochdu{position:relative;display:flex;align-items:center;gap:26px;overflow:hidden;border-radius:22px;padding:34px 38px;color:#fff;background:linear-gradient(120deg,#6645ef 0%,#8a5cff 46%,#5a38d6 100%);box-shadow:0 24px 50px -24px rgba(102,69,239,.65);text-decoration:none;transition:transform .25s,box-shadow .25s}
.kochdu:hover{transform:translateY(-3px);box-shadow:0 32px 62px -22px rgba(102,69,239,.85)}
.kochdu-glow{position:absolute;inset:-45%;background:radial-gradient(circle at 30% 20%,rgba(255,255,255,.28),transparent 42%);animation:kochduShimmer 6s ease-in-out infinite;pointer-events:none}
@keyframes kochduShimmer{0%,100%{transform:translate(0,0)}50%{transform:translate(12%,10%)}}
.kochdu-txt{position:relative;z-index:2;flex:1}
.kochdu-eyebrow{text-transform:uppercase;letter-spacing:.16em;font-size:11px;font-weight:700;opacity:.85}
.kochdu h2{color:#fff;font-size:clamp(26px,3.4vw,38px);margin:8px 0 6px}
.kochdu p{color:rgba(255,255,255,.92);font-size:16px;max-width:54ch}
.kochdu-rot{display:inline-block;font-weight:700;transition:opacity .2s;min-width:118px}
.kochdu-chips{display:flex;flex-wrap:wrap;gap:7px;margin:14px 0 18px}
.kochdu-chips span{background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.28);border-radius:999px;padding:4px 12px;font-size:12.5px;font-weight:500}
.kochdu-btn{display:inline-flex;align-items:center;gap:8px;background:#fff;color:#5a38d6;font-weight:700;font-size:15px;padding:13px 24px;border-radius:999px;box-shadow:0 8px 20px -8px rgba(0,0,0,.35);transition:transform .2s}
.kochdu:hover .kochdu-btn{transform:translateX(4px)}
.kochdu-art{position:relative;z-index:2;flex:0 0 auto}
.kochdu-scooter{font-size:96px;display:block;filter:drop-shadow(0 10px 18px rgba(0,0,0,.3));animation:kochduBob 2.4s ease-in-out infinite}
@keyframes kochduBob{0%,100%{transform:translateY(0) rotate(-4deg)}50%{transform:translateY(-10px) rotate(4deg)}}
@media(max-width:680px){.kochdu{flex-direction:column-reverse;text-align:center;padding:26px 22px}.kochdu p{max-width:none}.kochdu-chips{justify-content:center}.kochdu-scooter{font-size:70px}}
@media(prefers-reduced-motion:reduce){.kochdu-glow,.kochdu-scooter{animation:none}}
@media(max-width:900px){.booking-layout{grid-template-columns:1fr}.filters-panel{position:static}.booking-grid{grid-template-columns:1fr 1fr}}
@media(max-width:680px){.booking-grid{grid-template-columns:1fr}.bk-form{grid-template-columns:1fr}.searchbar{gap:8px;padding:10px}.searchbar .sf{flex:1 1 100%;border:1.5px solid var(--line);border-radius:14px;background:var(--surface-2);padding:10px 14px;min-height:58px;justify-content:center}.searchbar .sf:focus-within{border-color:var(--accent);background:var(--surface)}.searchbar .sf+.sf::before{display:none}.searchbar .sf label{font-size:11.5px;margin-bottom:3px}.searchbar .sf input,.searchbar .sf select{font-size:17px}.searchbar .sf-date{flex:1 1 46%!important}.searchbar .sf-date input{min-height:26px;-webkit-appearance:none;appearance:none}.searchbar .sf.go{padding:0;border:0;min-height:0}.searchbar .btn-search{width:100%;justify-content:center}}
/* Make the date value clearly visible (never a bare grey placeholder) */
.searchbar .sf-date input[type=date]{color:var(--ink);font-weight:700}
.searchbar .sf-date input[type=date]::-webkit-calendar-picker-indicator{opacity:.85;cursor:pointer}
`;

const adminCSS = `
:root{--bg:#0f1512;--surface:#172019;--surface-2:#1e2a22;--ink:#eaf0ec;--muted:#92a298;--line:#28352c;--accent:#48a87a;--accent-d:#2f6e52;--danger:#d96a5b;--radius:14px}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:var(--bg);color:var(--ink);line-height:1.55}
a{color:var(--accent);text-decoration:none}
.admin-shell{display:flex;min-height:100vh}
.sidebar{width:248px;background:var(--surface);border-right:1px solid var(--line);padding:24px 18px;position:sticky;top:0;height:100vh;flex-shrink:0}
.sidebar .logo{font-family:ui-serif,Georgia,"Iowan Old Style","Palatino Linotype",Palatino,"Times New Roman",serif;font-size:22px;letter-spacing:.05em;margin-bottom:4px;color:#fff}
.sidebar .sub{font-size:12px;color:var(--muted);margin-bottom:26px}
.sidebar nav a{display:flex;align-items:center;justify-content:space-between;padding:11px 14px;border-radius:10px;color:var(--muted);font-size:14.5px;font-weight:500;margin-bottom:4px}
.sidebar nav a:hover{background:var(--surface-2);color:var(--ink)}
.sidebar nav a.active{background:var(--accent-d);color:#fff}
.sidebar .badge{background:var(--danger);color:#fff;font-size:11px;font-weight:700;border-radius:999px;padding:2px 8px}
.sidebar .foot{position:absolute;bottom:20px;left:18px;right:18px;font-size:13px}
.main{flex:1;padding:34px 40px;max-width:1080px}
.page-title{display:flex;align-items:center;justify-content:space-between;margin-bottom:26px;gap:16px;flex-wrap:wrap}
.page-title h1{font-family:ui-serif,Georgia,"Iowan Old Style","Palatino Linotype",Palatino,"Times New Roman",serif;font-size:30px;color:#fff}
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
.stat .n{font-family:ui-serif,Georgia,"Iowan Old Style","Palatino Linotype",Palatino,"Times New Roman",serif;font-size:34px;color:#fff}
.stat .l{font-size:13px;color:var(--muted)}
.login-wrap{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px}
.login-card{background:var(--surface);border:1px solid var(--line);border-radius:18px;padding:38px;width:100%;max-width:380px}
.login-card .logo{font-family:ui-serif,Georgia,"Iowan Old Style","Palatino Linotype",Palatino,"Times New Roman",serif;font-size:26px;color:#fff;letter-spacing:.05em;text-align:center;margin-bottom:6px}
.login-card .sub{text-align:center;color:var(--muted);font-size:13px;margin-bottom:24px}
.err{background:#3a2020;color:#e89b8f;border:1px solid #5e2f2f;padding:10px 14px;border-radius:10px;font-size:13px;margin-bottom:16px}
.section-divider{border:0;border-top:1px solid var(--line);margin:26px 0}
.wd-group{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:22px;margin-bottom:18px}
.wd-group h3{font-family:ui-serif,Georgia,"Iowan Old Style","Palatino Linotype",Palatino,"Times New Roman",serif;font-size:18px;color:#fff;margin-bottom:14px}
.section-sep{display:flex;align-items:center;gap:10px;margin:26px 0 14px;font-family:ui-serif,Georgia,"Iowan Old Style","Palatino Linotype",Palatino,"Times New Roman",serif;font-size:17px;color:#fff}
.section-sep::after{content:"";flex:1;height:1px;background:var(--line)}
.feature-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px 14px;margin-top:4px}
.feat-cat{margin-bottom:14px}
.feat-cat h5{font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:var(--accent);margin:0 0 6px}
.feat{display:flex;align-items:center;gap:8px;font-weight:500;font-size:13.5px;color:var(--ink);cursor:pointer;background:var(--bg);border:1px solid var(--line);border-radius:10px;padding:9px 11px;transition:.15s}
.feat:hover{border-color:var(--accent)}
.feat input{width:auto!important;accent-color:var(--accent);flex:0 0 auto}
.feat span{user-select:none}
.beds-badge{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:600;padding:3px 10px;border-radius:999px;border:1px solid var(--line)}
.beds-badge.on{background:rgba(72,168,122,.16);color:var(--accent);border-color:rgba(72,168,122,.4)}
.beds-badge.off{background:var(--surface-2);color:var(--muted)}
.room-row{display:flex;gap:10px;align-items:flex-end;background:var(--bg);border:1px solid var(--line);border-radius:12px;padding:12px;margin-bottom:10px}
.room-row .fr{margin:0}
.room-row label{font-size:11px;text-transform:uppercase;letter-spacing:.08em;color:var(--muted)}
.btn-remove{flex:0 0 auto;width:38px;height:42px;border:1px solid var(--line);background:var(--surface-2);color:var(--danger);border-radius:10px;font-size:20px;line-height:1;cursor:pointer;transition:.15s}
.btn-remove:hover{background:var(--danger);color:#fff;border-color:var(--danger)}
@media(max-width:760px){.room-row{flex-wrap:wrap}.room-row .fr{flex:1 1 100%!important}.btn-remove{width:100%}}
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

// Booking-tool feature set (booking.com-style filters), grouped into logical
// categories. The admin ticks which apply to each accommodation; guests filter
// by them on the Unterkünfte page. Keys are stable — never rename existing ones.
const FEATURE_CATEGORIES = [
  { cat: "Beliebt", items: [
    { key: "wifi", label: "WLAN", icon: "📶" },
    { key: "parking", label: "Parkplatz", icon: "🅿️" },
    { key: "pets", label: "Haustiere erlaubt", icon: "🐾" },
    { key: "family", label: "Familienfreundlich", icon: "👨‍👩‍👧" },
    { key: "nonsmoking", label: "Nichtraucher", icon: "🚭" },
    { key: "longstay", label: "Langzeit möglich", icon: "🗓️" },
  ] },
  { cat: "Küche & Verpflegung", items: [
    { key: "kitchen", label: "Küche", icon: "🍳" },
    { key: "dishwasher", label: "Geschirrspüler", icon: "🍽️" },
    { key: "coffee", label: "Kaffeemaschine", icon: "☕" },
    { key: "oven", label: "Backofen", icon: "🔥" },
    { key: "microwave", label: "Mikrowelle", icon: "🍲" },
    { key: "breakfast", label: "Frühstück", icon: "🥐" },
  ] },
  { cat: "Wellness & Freizeit", items: [
    { key: "sauna", label: "Sauna", icon: "🧖" },
    { key: "steam", label: "Dampfbad", icon: "💨" },
    { key: "wellness", label: "Wellness / Spa", icon: "💆" },
    { key: "pool", label: "Pool", icon: "🏊" },
    { key: "whirlpool", label: "Whirlpool", icon: "🛁" },
    { key: "fitness", label: "Fitnessraum", icon: "🏋️" },
  ] },
  { cat: "Lage & Aussicht", items: [
    { key: "ski", label: "Ski In & Out", icon: "🎿" },
    { key: "skiroom", label: "Skiraum", icon: "⛷️" },
    { key: "mountainview", label: "Bergblick", icon: "⛰️" },
    { key: "central", label: "Zentrale Lage", icon: "📍" },
    { key: "quiet", label: "Ruhige Lage", icon: "🤫" },
    { key: "garden", label: "Garten", icon: "🌳" },
  ] },
  { cat: "Außenbereich", items: [
    { key: "balcony", label: "Balkon / Terrasse", icon: "🌄" },
    { key: "bbq", label: "Grillplatz", icon: "🍖" },
    { key: "sunloungers", label: "Liegestühle", icon: "🌞" },
  ] },
  { cat: "Komfort & Technik", items: [
    { key: "tv", label: "TV", icon: "📺" },
    { key: "smarttv", label: "Smart-TV", icon: "🖥️" },
    { key: "aircon", label: "Klimaanlage", icon: "❄️" },
    { key: "heating", label: "Heizung", icon: "🌡️" },
    { key: "fireplace", label: "Kamin", icon: "🔥" },
    { key: "washer", label: "Waschmaschine", icon: "🧺" },
    { key: "dryer", label: "Trockner", icon: "🌀" },
    { key: "hairdryer", label: "Föhn", icon: "💇" },
    { key: "safe", label: "Safe", icon: "🔒" },
  ] },
  { cat: "Parken & Anreise", items: [
    { key: "garage", label: "Tiefgarage", icon: "🚗" },
    { key: "freeparking", label: "Kostenlose Parkplätze", icon: "🆓" },
    { key: "evcharge", label: "E-Ladestation", icon: "🔌" },
  ] },
  { cat: "Familie & Barrierefreiheit", items: [
    { key: "crib", label: "Kinderbett", icon: "🍼" },
    { key: "highchair", label: "Hochstuhl", icon: "🪑" },
    { key: "playground", label: "Spielplatz", icon: "🛝" },
    { key: "accessible", label: "Barrierefrei", icon: "♿" },
    { key: "elevator", label: "Aufzug", icon: "🛗" },
  ] },
];
const FEATURES = FEATURE_CATEGORIES.flatMap((c) => c.items);
const FEATURE_LABEL = Object.fromEntries(FEATURES.map((f) => [f.key, f.label]));
const FEATURE_ICON = Object.fromEntries(FEATURES.map((f) => [f.key, f.icon]));

// Parse a stored feature string ("wifi,sauna" or "wifi|sauna") into keys.
function parseFeatures(str) {
  return String(str || "")
    .split(/[,|]/)
    .map((s) => s.trim())
    .filter((k) => FEATURE_LABEL[k]);
}

// Parse a gallery field (URLs separated by newlines or "|") into a URL list.
// Accepts http(s) URLs and inline base64 data URLs (user-uploaded event photos).
function parseGallery(str) {
  return String(str || "")
    .split(/\r?\n|\|/)
    .map((s) => s.trim())
    .filter((u) => /^https?:\/\//.test(u) || /^data:image\//.test(u));
}

const MONTHS_DE = ["Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
const MONTHS_DE_SHORT = ["Jän", "Feb", "März", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];
const WEEKDAYS_DE = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
function todayISO() {
  const d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
// Normalize a DATE value (pg Date object or string) to a "YYYY-MM-DD" string.
function dateISO(v) {
  if (!v) return "";
  if (typeof v === "string") return /^\d{4}-\d{2}-\d{2}/.test(v) ? v.slice(0, 10) : "";
  const d = new Date(v);
  if (isNaN(d.getTime())) return "";
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
function bigDate(iso) {
  const p = String(iso).split("-");
  return {
    d: parseInt(p[2], 10) || "",
    m: MONTHS_DE_SHORT[(parseInt(p[1], 10) || 1) - 1] || "",
    y: p[0] || "",
  };
}
function formatDateDE(iso) {
  const p = String(iso).split("-");
  if (p.length < 3) return "";
  const dt = new Date(parseInt(p[0], 10), (parseInt(p[1], 10) || 1) - 1, parseInt(p[2], 10) || 1);
  return WEEKDAYS_DE[dt.getDay()] + ", " + (parseInt(p[2], 10) || 1) + ". " + (MONTHS_DE[(parseInt(p[1], 10) || 1) - 1] || "") + " " + p[0];
}
// Format a date range for display, always incl. the year, compacted sensibly:
//   same day        → "Sa, 24. Juli 2026"
//   same month/year → "24.–26. Juli 2026"
//   same year       → "29. Juli – 2. August 2026"
//   different year  → "30. Dezember 2026 – 2. Jänner 2027"
function formatRangeDE(startISO, endISO) {
  if (!startISO) return "";
  if (!endISO || endISO <= startISO) return formatDateDE(startISO);
  const a = startISO.split("-"),
    b = endISO.split("-");
  const dA = parseInt(a[2], 10),
    mA = parseInt(a[1], 10),
    yA = a[0];
  const dB = parseInt(b[2], 10),
    mB = parseInt(b[1], 10),
    yB = b[0];
  const monA = MONTHS_DE[mA - 1] || "",
    monB = MONTHS_DE[mB - 1] || "";
  if (yA === yB && mA === mB) return dA + ".–" + dB + ". " + monA + " " + yA;
  if (yA === yB) return dA + ". " + monA + " – " + dB + ". " + monB + " " + yA;
  return dA + ". " + monA + " " + yA + " – " + dB + ". " + monB + " " + yB;
}
// Best-effort parse of a German free-text date ("24. Juli 2026", "24.07.2026",
// "24.7.26") into ISO, so legacy events without event_date still sort/display.
function parseGermanDate(text) {
  const s = String(text || "").trim();
  if (!s) return "";
  let m = s.match(/(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{2,4})/); // 24.07.2026 / 24.7.26
  if (m) {
    let y = parseInt(m[3], 10);
    if (y < 100) y += 2000;
    return y + "-" + String(parseInt(m[2], 10)).padStart(2, "0") + "-" + String(parseInt(m[1], 10)).padStart(2, "0");
  }
  m = s.match(/(\d{1,2})\.?\s*([A-Za-zäöüÄÖÜ]+)\s+(\d{4})/); // 24. Juli 2026
  if (m) {
    const mon = m[2].toLowerCase();
    let idx = MONTHS_DE.findIndex((x) => x.toLowerCase() === mon);
    if (idx < 0) idx = MONTHS_DE_SHORT.findIndex((x) => x.toLowerCase().replace(".", "") === mon.slice(0, 3));
    if (idx >= 0) return m[3] + "-" + String(idx + 1).padStart(2, "0") + "-" + String(parseInt(m[1], 10)).padStart(2, "0");
  }
  return "";
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
    return `background-image:url('${esc(pimg(image))}')`;
  return `background-image:${gradientFor(seed || "v")}`;
}

function brandMark(c, variant) {
  c = c || {};
  if (c.logo_image) {
    const cls = variant === "foot" ? "brand-logo foot-logo" : "brand-logo";
    return `<a class="brand brand-has-logo" href="/"><img class="${cls}" src="${esc(
      pimg(c.logo_image)
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

// App-style bottom tab bar (mobile only). Icons are inline SVG so they inherit
// the active colour and stay crisp. Highlights the current section.
function bottomNav(active) {
  const ICON = {
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></svg>',
    bed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8v12M3 12h18v8M21 12v8M7 12V9.5a1.5 1.5 0 0 1 1.5-1.5H21"/><circle cx="7.5" cy="12" r="0" /></svg>',
    fork: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v7a2 2 0 0 0 4 0V3M8 10v11M17 3c-1.5 0-2.5 1.8-2.5 4.5S15.5 12 17 12s2.5-1.8 2.5-4.5S18.5 3 17 3zM17 12v9"/></svg>',
    cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="16" rx="2.5"/><path d="M3.5 9.5h17M8 3v4M16 3v4"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
  };
  const tab = (href, icon, label) =>
    `<a href="${href}" class="tab${active === href ? " active" : ""}"><span class="ti">${ICON[icon]}</span><span class="tl">${label}</span></a>`;
  return `
  <nav class="tabbar" aria-label="Hauptnavigation">
    ${tab("/", "home", "Home")}
    ${tab("/unterkuenfte", "bed", "Unterkünfte")}
    ${tab("/gastronomie", "fork", "Gastro")}
    ${tab("/veranstaltungen", "cal", "Events")}
    ${tab("/ueber-uns", "info", "Über")}
  </nav>`;
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
          <h4>Beliebte Unterkünfte</h4>
          <a href="/unterkuenfte/ferienwohnung-montafon">Ferienwohnung Montafon</a>
          <a href="/unterkuenfte/chalet-montafon">Chalet Montafon</a>
          <a href="/unterkuenfte/appartement-gaschurn">Appartement Gaschurn</a>
          <a href="/unterkuenfte/ski-in-ski-out-montafon">Ski-in-Ski-out Montafon</a>
          <a href="/unterkuenfte/ferienwohnung-st-gallenkirch">Ferienwohnung St. Gallenkirch</a>
        </div>
        <div class="foot-col">
          <h4>Urlaub im Montafon</h4>
          <a href="/urlaub/skiurlaub-montafon">Skiurlaub Montafon</a>
          <a href="/urlaub/wanderurlaub-montafon">Wanderurlaub Montafon</a>
          <a href="/urlaub/familienurlaub-montafon">Familienurlaub Montafon</a>
          <a href="/urlaub/wellnessurlaub-montafon">Wellnessurlaub Montafon</a>
          <a href="/urlaub/sommerurlaub-montafon">Sommerurlaub Montafon</a>
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
      var d7=new Date(ci.value);d7.setDate(d7.getDate()+7);var sug=d7.toISOString().slice(0,10);
      co.min=min;if(!co.value||co.value<=ci.value)co.value=sug;});}
    var childSel=sb.querySelector('.sf-children'),wrap=sb.querySelector('.child-ages'),row=sb.querySelector('.ages-row');
    function renderAges(){
      if(!childSel||!row)return;
      var n=parseInt(childSel.value,10)||0;
      var vals=Array.prototype.map.call(row.querySelectorAll('select'),function(s){return s.value});
      var html='';
      for(var i=0;i<n;i++){var v=vals[i]!=null?vals[i]:6;html+='<select name="childAge" class="age-sel">';
        for(var a=0;a<18;a++){html+='<option value="'+a+'"'+(a==v?' selected':'')+'>'+a+' J.</option>';}html+='</select>';}
      row.innerHTML=html;if(wrap)wrap.style.display=n>0?'':'none';
    }
    if(childSel)childSel.addEventListener('change',renderAges);
  });
  var tt=document.getElementById('toTop');
  if(tt){window.addEventListener('scroll',function(){if(window.scrollY>500)tt.classList.add('show');else tt.classList.remove('show');},{passive:true});
    tt.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});}
  var ftBtn=document.querySelector('.filter-toggle'),fp=document.querySelector('.filters-panel'),bd=document.querySelector('.filters-backdrop');
  if(ftBtn&&fp){
    var openF=function(){fp.classList.add('open');if(bd)bd.classList.add('open');document.body.style.overflow='hidden';};
    var closeF=function(){fp.classList.remove('open');if(bd)bd.classList.remove('open');document.body.style.overflow='';};
    ftBtn.addEventListener('click',openF);if(bd)bd.addEventListener('click',closeF);
    var fc=fp.querySelector('.fp-close button');if(fc)fc.addEventListener('click',closeF);
  }
})();
</script>`;

function layout({ title, active, body, content, extraScript, seo }) {
  seo = seo || {};
  const desc =
    seo.description ||
    "VALUERO – " + (content.site_tagline || "Urlaub im Montafon") + " im Hochmontafon. Ferienwohnungen, Chalets & Appartements, Gastronomie und Veranstaltungen – mit Live-Preisen buchen.";
  const canonical = seo.canonical || "";
  const ogImage = seo.ogImage || content.home_hero_image || content.logo_image || "";
  const robots = seo.robots || "index,follow";
  const jsonLdArr = seo.jsonLd ? (Array.isArray(seo.jsonLd) ? seo.jsonLd : [seo.jsonLd]) : [];
  const jsonLd = jsonLdArr
    .filter(Boolean)
    .map((o) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, "\\u003c")}</script>`)
    .join("");
  return `<!doctype html><html lang="de"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#16231b">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
${seo.keywords ? `<meta name="keywords" content="${esc(seo.keywords)}">` : ""}
<meta name="robots" content="${esc(robots)}">
<meta name="author" content="VALUERO – FS Creative">
${canonical ? `<link rel="canonical" href="${esc(canonical)}">` : ""}
<meta property="og:type" content="${esc(seo.ogType || "website")}">
<meta property="og:site_name" content="VALUERO">
<meta property="og:locale" content="de_AT">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
${canonical ? `<meta property="og:url" content="${esc(canonical)}">` : ""}
${ogImage ? `<meta property="og:image" content="${esc(ogImage)}">` : ""}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
${ogImage ? `<meta name="twitter:image" content="${esc(ogImage)}">` : ""}
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<style>${publicCSS}</style>
${jsonLd}
</head><body>
${nav(active, content)}
${body}
${footer(content)}
${bottomNav(active)}
<button class="to-top" id="toTop" aria-label="Nach oben scrollen">↑</button>
${SCRIPT}
${extraScript || ""}
</body></html>`;
}

/* ---------------- HOME ---------------- */
function homePage(c, req) {
  const heroImg = c.home_hero_image
    ? `<div class="hero-bg-img" style="background-image:url('${esc(
        pimg(c.home_hero_image)
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
      ${c.logo_image ? `<img class="hero-logo" src="${esc(pimg(c.logo_image))}" alt="VALUERO">` : ""}
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
  </section>

  <section class="section" style="padding-top:0">
    <div class="container">
      <div class="section-head reveal"><div class="eyebrow">Beliebte Suchen</div><h2>Finde deinen Urlaub im Montafon</h2></div>
      <div class="hub-grid">
        <div class="hub-col reveal">
          <h4>Unterkunftstypen</h4>
          ${SEO_ACC_TYPES.slice(0, 7).map((t) => `<a href="/unterkuenfte/${t.slug}-montafon">${esc(t.label)} Montafon</a>`).join("")}
        </div>
        <div class="hub-col reveal">
          <h4>Urlaubsarten</h4>
          ${SEO_VACATION_TYPES.slice(0, 7).map((v) => `<a href="/urlaub/${v.slug}-montafon">${esc(v.h1)} Montafon</a>`).join("")}
        </div>
        <div class="hub-col reveal">
          <h4>Orte</h4>
          ${SEO_LOCATIONS.filter((l) => l.loc).map((l) => `<a href="/unterkuenfte/ferienwohnung-${l.slug}">Ferienwohnung ${esc(l.name)}</a>`).join("")}
          <a href="/unterkuenfte/ski-in-ski-out-gaschurn">Ski-in-Ski-out Gaschurn</a>
        </div>
        <div class="hub-col reveal">
          <h4>Genuss & Events</h4>
          ${SEO_GASTRO_TYPES.map((g) => `<a href="/gastronomie/${g.slug}-montafon">${esc(g.label)} Montafon</a>`).join("")}
          ${SEO_EVENT_TOPICS.map((e) => `<a href="/veranstaltungen/${e.slug}">${esc(e.label)}</a>`).join("")}
        </div>
      </div>
    </div>
  </section>`;
  const seo = req
    ? {
        canonical: absUrl(req, "/"),
        jsonLd: [orgJsonLd(req), websiteJsonLd(req)],
        keywords: "Montafon, Urlaub Montafon, Ferienwohnung Montafon, Chalet Montafon, Unterkunft Gaschurn, Skiurlaub Montafon",
      }
    : undefined;
  return layout({ title: "Urlaub im Montafon – Ferienwohnungen, Chalets & Appartements | VALUERO", active: "/", body, content: c, seo });
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
// Sensible placeholder stay: next Saturday (≥7 days out) + 7 nights, so the
// date fields never show an empty grey "tt.mm.jjjj" (esp. important on mobile).
function defaultStay() {
  const iso = (d) =>
    d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  const s = new Date();
  let add = (6 - s.getDay() + 7) % 7;
  if (add < 7) add += 7; // always a Saturday at least a week out
  s.setDate(s.getDate() + add);
  const e = new Date(s);
  e.setDate(e.getDate() + 7);
  return { checkin: iso(s), checkout: iso(e) };
}

function searchBar(prefill) {
  prefill = prefill || {};
  const def = defaultStay();
  const ci = esc(prefill.checkin || def.checkin);
  const co = esc(prefill.checkout || def.checkout);
  const ages = (prefill.childrenAges || []).map((n) => parseInt(n, 10)).filter((n) => Number.isFinite(n) && n >= 0);
  const adults = parseInt(prefill.adults, 10) || parseInt(prefill.guests, 10) || 2;
  const children = ages.length || parseInt(prefill.children, 10) || 0;
  const opt = (n, sel) => `<option value="${n}" ${n === sel ? "selected" : ""}>${n}</option>`;
  const adultOpts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => opt(n, adults)).join("");
  const childOpts = [0, 1, 2, 3, 4, 5, 6].map((n) => opt(n, children)).join("");
  const ageSel = (v) =>
    `<select name="childAge" class="age-sel">${Array.from({ length: 18 }, (_, a) => `<option value="${a}" ${a === v ? "selected" : ""}>${a} J.</option>`).join("")}</select>`;
  const agesHtml = ages.map((a) => ageSel(a)).join("");
  return `
  <form class="searchbar" id="searchForm" action="/unterkuenfte" method="get">
    <div class="sf sf-date"><label>📅 Anreise</label><input type="date" name="checkin" value="${ci}" required></div>
    <div class="sf sf-date"><label>📅 Abreise</label><input type="date" name="checkout" value="${co}" required></div>
    <div class="sf" style="flex:0 1 120px"><label>Erwachsene</label><select name="adults">${adultOpts}</select></div>
    <div class="sf" style="flex:0 1 108px"><label>Kinder</label><select name="children" class="sf-children">${childOpts}</select></div>
    <div class="sf go"><button class="btn-search" type="submit">Finden</button></div>
    <div class="sf child-ages" style="flex:1 1 100%;${children ? "" : "display:none"}"><label>Alter der Kinder (bei Anreise)</label><div class="ages-row">${agesHtml}</div></div>
  </form>`;
}

// The booking overlay (guest details + confirmation), populated by JS.
function bookingOverlayHTML() {
  return `
  <div class="bk-overlay" id="bkOverlay" aria-hidden="true">
    <div class="bk-modal" role="dialog" aria-modal="true" aria-labelledby="bk-title">
      <div class="grab" aria-hidden="true"></div>
      <div class="mh">
        <div><h3 id="bk-title">Buchung</h3><div class="es">Sichere Buchung über VALUERO</div></div>
        <button class="bk-close" id="bk-close" aria-label="Schließen">×</button>
      </div>
      <div class="mb">
        <div id="bk-rooms"></div>
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

// Detail window (gallery + description + rooms + website link), filled by JS.
function detailOverlayHTML() {
  return `
  <div class="bk-overlay" id="dtOverlay" aria-hidden="true">
    <div class="bk-modal dt-modal" role="dialog" aria-modal="true" aria-labelledby="dt-title">
      <div class="grab" aria-hidden="true"></div>
      <button class="bk-close dt-close" id="dt-close" aria-label="Schließen">×</button>
      <div class="dt-gallery"><div class="main" id="dt-main"></div><div class="dt-thumbs" id="dt-thumbs"></div></div>
      <div class="dt-body">
        <div class="dt-head"><h3 id="dt-title"></h3><div class="dt-rating" id="dt-rating"></div></div>
        <div class="dt-meta" id="dt-meta"></div>
        <p class="dt-desc" id="dt-desc"></p>
        <div class="dt-feats" id="dt-feats"></div>
        <div id="dt-rooms"></div>
        <div class="dt-actions" id="dt-actions"></div>
      </div>
    </div>
  </div>`;
}

function bookingToolPage(c, items) {
  const prefill = c.__prefill || {};
  const types = uniq(items.map((i) => i.type));
  const locs = uniq(items.map((i) => i.location));
  const presentKeys = new Set(
    FEATURES.filter((f) => items.some((i) => parseFeatures(i.features).includes(f.key))).map((f) => f.key)
  );
  const pillRow = (group, values) => `
    <div class="pills" data-group="${group}">
      <button type="button" class="pill active" data-val="">Alle</button>
      ${values
        .map((v) => `<button type="button" class="pill" data-val="${esc(String(v).toLowerCase())}">${esc(v)}</button>`)
        .join("")}
    </div>`;
  // Amenity filters grouped by category — only categories with a present feature show.
  const featChecks = FEATURE_CATEGORIES.map((c) => {
    const present = c.items.filter((f) => presentKeys.has(f.key));
    if (!present.length) return "";
    return `<div class="fp-subgroup"><h5>${esc(c.cat)}</h5>${present
      .map((f) => `<label class="chk"><input type="checkbox" class="f-feat" value="${f.key}"> ${f.icon} ${esc(f.label)}</label>`)
      .join("")}</div>`;
  }).join("");
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
      <button type="button" class="filter-toggle" id="filterToggle">⚙︎ Filter &amp; Sortierung</button>
      <div class="filters-backdrop"></div>
      <div class="booking-layout">
        <aside class="filters-panel">
          <div class="fp-close">Filter<button type="button" aria-label="Schließen">×</button></div>
          <div class="fp-group"><h4>Sortierung</h4>
            <select id="f-sort" class="fp-sort">
              <option value="best">Empfohlen</option>
              <option value="price-asc">Preis: aufsteigend</option>
              <option value="price-desc">Preis: absteigend</option>
            </select>
          </div>
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
          </div>
          <div id="results" class="grid booking-grid"><div class="loading">Lädt Unterkünfte…</div></div>
          <noscript><div class="grid">${items.map((i) => seoAccCard(i)).join("")}</div></noscript>
        </div>
      </div>
    </div>
  </section>
  ${bookingOverlayHTML()}
  ${detailOverlayHTML()}`;
  return layout({
    title: "Unterkünfte im Montafon – Ferienwohnungen & Chalets buchen | VALUERO",
    active: "/unterkuenfte",
    body,
    content: c,
    extraScript: BOOKING_SCRIPT,
    seo: c.__seo,
  });
}

const BOOKING_SCRIPT = `
<script>
(function(){
  var $=function(s,r){return (r||document).querySelector(s)};
  var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
  function qp(n){var m=new RegExp('[?&]'+n+'=([^&]*)').exec(location.search);return m?decodeURIComponent(m[1].replace(/\\+/g,' ')):''}
  function euro(n,c){c=c||'EUR';try{return new Intl.NumberFormat('de-AT',{style:'currency',currency:c,minimumFractionDigits:2,maximumFractionDigits:2}).format(n)}catch(e){return '\\u20ac '+(Math.round((Number(n)||0)*100)/100).toFixed(2)}}
  function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
  function fmt(d){if(!d)return '';var p=d.split('-');return p[2]+'.'+p[1]+'.'+p[0]}

  var form=$('#searchForm'), results=$('#results');
  var fv=function(n){return form&&form[n]?form[n].value:''};
  function readAges(){return $$('.searchbar .ages-row select').map(function(s){return s.value}).filter(function(v){return v!==''&&v!=null})}
  var state={checkin:qp('checkin')||fv('checkin'),checkout:qp('checkout')||fv('checkout'),adults:fv('adults')||qp('adults')||'2',childrenAges:readAges(),type:'',loc:'',features:[],priceMax:0,sort:'best'};
  state.guests=(parseInt(state.adults,10)||0)+state.childrenAges.length;
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
    state.checkin=form.checkin.value;state.checkout=form.checkout.value;
    state.adults=form.adults?form.adults.value:'2';state.childrenAges=readAges();
    state.guests=(parseInt(state.adults,10)||0)+state.childrenAges.length;
    history.replaceState(null,'','/unterkuenfte?checkin='+state.checkin+'&checkout='+state.checkout+'&adults='+state.adults+'&childrenAges='+state.childrenAges.join(','));
    run();});

  function params(){var p=[];var ad=parseInt(state.adults,10)||0;
    if(state.checkin)p.push('checkin='+state.checkin);
    if(state.checkout)p.push('checkout='+state.checkout);
    if(ad)p.push('adults='+ad);
    if(state.childrenAges.length)p.push('childrenAges='+state.childrenAges.join(','));
    var g=ad+state.childrenAges.length;if(g)p.push('guests='+g);
    if(state.type)p.push('type='+encodeURIComponent(state.type));
    if(state.loc)p.push('loc='+encodeURIComponent(state.loc));
    if(state.features.length)p.push('features='+state.features.join(','));
    if(state.priceMax)p.push('priceMax='+state.priceMax);
    return p.join('&');}

  var LGMSG=['Wir prüfen Live-Verfügbarkeit und Preise','Wir vergleichen die besten Angebote im Montafon','Wir holen die tagesaktuellen Preise'];
  function loadGameHTML(){
    var msg=LGMSG[(Math.random()*LGMSG.length)|0];
    return '<div class="loadgame" id="loadgame">'
      +'<div class="lg-title"><span class="lg-spin"></span>'+msg+'</div>'
      +'<div class="lg-sub">Kurzweil für die Wartezeit: tippe die Berge &nbsp;\\u00b7&nbsp; <b id="lgScore">0</b></div>'
      +'<div class="lg-play" id="lgPlay" aria-hidden="true"></div>'
      +'<div class="lg-bar"></div>'
      +'<div class="lg-foot">Einen Moment \\u2026</div></div>';
  }
  function startLoadGame(){
    var play=$('#lgPlay');if(!play)return;
    var score=0,alive=true,scoreEl=$('#lgScore');
    function spawn(){
      if(!document.body.contains(play)){alive=false;return;}
      var d=document.createElement('div');d.className='lg-berg';
      d.innerHTML='<svg viewBox="0 0 44 34" xmlns="http://www.w3.org/2000/svg"><path d="M2 32 L16 6 L23 18 L28 10 L42 32 Z" fill="currentColor"/><path d="M16 6 L20 12 L18 14 L13 10 Z" fill="#fff" opacity=".9"/><path d="M28 10 L31 15 L29.5 16.5 L26.5 13 Z" fill="#fff" opacity=".9"/></svg>';
      var pad=26,w=play.clientWidth||300,h=play.clientHeight||150;
      d.style.left=(pad+Math.random()*(w-2*pad))+'px';
      d.style.top=(pad+Math.random()*(h-2*pad))+'px';
      play.appendChild(d);
      requestAnimationFrame(function(){d.classList.add('on');});
      var life=setTimeout(remove,1200);
      function remove(){clearTimeout(life);if(d.parentNode)d.parentNode.removeChild(d);}
      d.addEventListener('pointerdown',function(e){e.stopPropagation();score++;if(scoreEl)scoreEl.textContent=score;d.classList.add('pop');setTimeout(remove,90);});
      setTimeout(function(){if(alive)spawn();},520+Math.random()*260);
    }
    spawn();
  }
  function run(){results.innerHTML=loadGameHTML();startLoadGame();
    fetch('/api/search?'+params()).then(function(r){return r.json()}).then(function(d){last=d;renderList(d)})
    .catch(function(){results.innerHTML='<div class="empty">Fehler beim Laden. Bitte erneut versuchen.</div>'});}

  function matchesFilters(x){
    if(state.type && String(x.type||'').toLowerCase()!==state.type)return false;
    if(state.loc && String(x.location||'').toLowerCase()!==state.loc)return false;
    if(state.features&&state.features.length){var f=x.features||[];for(var i=0;i<state.features.length;i++){if(f.indexOf(state.features[i])<0)return false;}}
    if(state.priceMax){var p=(x.offer&&x.offer.available&&x.offer.perNight)?x.offer.perNight:null;if(p!=null&&p>state.priceMax)return false;}
    return true;
  }

  function pn(x){return (x.offer&&x.offer.available&&x.offer.perNight)?x.offer.perNight:null}
  // Ranking tiers for the default sort:
  //  0 = jetzt buchbar mit Live-Preis, 1 = anbindungsfähig, aber für diese Daten
  //  kein Preis, 2 = nur Website (keine Direktbuchung/kein Preis).
  function tier(x){
    if(x.offer&&x.offer.available&&x.offer.perNight!=null)return 0;
    if(x.connected)return 1;
    return 2;
  }
  function shuffle(arr){for(var i=arr.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=arr[i];arr[i]=arr[j];arr[j]=t;}return arr;}
  function sortResults(list){
    var a=list.slice();
    if(state.sort==='price-asc'||state.sort==='price-desc'){
      a.sort(function(x,y){
        if(tier(x)!==tier(y))return tier(x)-tier(y);            // Angebote mit Preis zuerst
        var px=pn(x),py=pn(y);
        if(px==null&&py==null)return 0;if(px==null)return 1;if(py==null)return -1;
        return state.sort==='price-asc'?px-py:py-px;
      });
      return a;
    }
    // "Empfohlen": nach Rang gruppieren, innerhalb jeder Gruppe bei jedem Neuladen
    // neu mischen → mit Preis+Verfügbarkeit oben (gemischt), Website-only ganz unten (gemischt).
    var g=[[],[],[]];
    a.forEach(function(x){g[tier(x)].push(x);});
    return shuffle(g[0]).concat(shuffle(g[1]),shuffle(g[2]));
  }

  function renderList(d){
    var all=d.results||[];
    var matched=[],excluded=[];
    all.forEach(function(x){(matchesFilters(x)?matched:excluded).push(x);});
    matched=sortResults(matched);
    var cnt=$('#resCount');
    if(cnt)cnt.textContent=matched.length+' '+(matched.length===1?'Unterkunft':'Unterkünfte')+(d.nights?(' \\u00b7 '+d.nights+' Nächte'):'');
    if(!matched.length && !excluded.length){results.innerHTML='<div class="empty">Keine Unterkünfte für diese Auswahl.</div>';return;}
    var html='';
    if(matched.length)html+=matched.map(function(a){return card(a,false)}).join('');
    else html+='<div class="empty" style="grid-column:1/-1">Keine Unterkunft passt exakt zu deinen Filtern \\u2013 sieh dir die Vorschläge unten an.</div>';
    // Few exact matches → show the filtered-out near-misses greyed & small.
    if(matched.length<3 && excluded.length){
      html+='<div class="near-head"><h3>Passt nicht exakt zu deinen Filtern \\u2013 aber einen Blick wert</h3>'
        +'<p>Diese Unterkünfte fallen knapp aus deiner Auswahl. Vielleicht trotzdem das Richtige?</p></div>';
      html+=sortResults(excluded).map(function(a){return card(a,true)}).join('');
    }
    results.innerHTML=html;bindCards();}

  function feats(acc){return (acc.featureLabels||[]).slice(0,4).map(function(f){return '<span class="fi">'+f.icon+' '+esc(f.label)+'</span>'}).join('')}

  function card(acc,muted){
    var img=acc.image?('style="background-image:url(\\''+esc(acc.image)+'\\')"'):'class="img noimg"';
    var imgTag=acc.image?('<div class="img" '+img+'>'):'<div '+img+'>';
    var badge=acc.badge?'<span class="badge">'+esc(acc.badge)+'</span>':'';
    var rooms=(acc.roomCount>1)?'<span class="fi">\\ud83d\\udecf '+acc.roomCount+' Zimmer</span>':'';
    return '<article class="bk-card'+(muted?' bk-card-muted':'')+'" data-detail="'+acc.id+'">'+imgTag+badge+(muted?'<span class="off-badge">au\\u00dferhalb der Filter</span>':'')+'</div><div class="body">'
      +'<h3>'+esc(acc.name)+'</h3>'
      +(acc.rating?'<div class="rating" style="color:#bfa06a;font-weight:600;font-size:14px">\\u2605 '+esc(acc.rating)+'</div>':'')
      +'<div class="feat-row">'+(acc.location?'<span class="fi">\\ud83d\\udccd '+esc(acc.location)+'</span>':'')+(acc.type?'<span class="fi">'+esc(acc.type)+'</span>':'')+rooms+'</div>'
      +'<p class="desc">'+esc(acc.description)+'</p>'
      +'<div class="feat-row">'+feats(acc)+'</div>'
      +'<span class="card-open">Details &amp; Bilder ansehen \\u2192</span>'
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
    $$('.bk-card').forEach(function(c){c.addEventListener('click',function(e){
      if(e.target.closest('button,a'))return;
      openDetail(findAcc(c.getAttribute('data-detail')));});});
    $$('[data-book]').forEach(function(b){b.addEventListener('click',function(e){e.stopPropagation();openBooking(findAcc(b.getAttribute('data-book')))})});
    $$('[data-pick]').forEach(function(b){b.addEventListener('click',function(e){e.stopPropagation();if(form&&form.checkin){form.checkin.focus();}window.scrollTo({top:0,behavior:'smooth'})})});}
  function findAcc(id){var m=(last.results||[]).filter(function(x){return String(x.id)===String(id)});return m[0]}

  // ---- booking overlay (with room picker) ----
  var ov=$('#bkOverlay'), bkAcc=null, bkRoom=null;
  function roomsWithOffers(acc){return (acc.rooms||[]).filter(function(r){return r.offer&&r.offer.available})}
  // Short room detail line (size, bedrooms, capacity, floor) — explains price differences.
  function roomSub(r){var s=[];if(r.size)s.push(r.size+' m\\u00b2');if(r.bedrooms)s.push(r.bedrooms+' Schlafzi.');if(r.bathrooms&&r.bathrooms>1)s.push(r.bathrooms+' Bäder');if(r.maxGuests)s.push('bis '+r.maxGuests+' Gäste');if(r.floor)s.push(esc(r.floor));return s.join(' \\u00b7 ');}
  function renderBkSummary(){
    var o=(bkRoom&&bkRoom.offer)||{};
    var s='<div class="row"><span>An-/Abreise</span><span>'+fmt(state.checkin)+' \\u2192 '+fmt(state.checkout)+'</span></div>'
      +'<div class="row"><span>Nächte</span><span>'+(o.nights||'')+'</span></div>'
      +'<div class="row"><span>Gäste</span><span>'+(parseInt(state.adults,10)||2)+' Erw.'+(state.childrenAges.length?' + '+state.childrenAges.length+' Kind(er)':'')+'</span></div>'
      +((bkRoom&&bkRoom.name&&bkAcc&&bkAcc.roomCount>1)?'<div class="row"><span>Zimmer</span><span>'+esc(bkRoom.name)+'</span></div>':'');
    // Jede Preisposition einzeln (Grundpreis, Kinder-Rabatt, Endreinigung, Gästetaxe …).
    var bd=o.breakdown||[];
    if(bd.length){bd.forEach(function(b){s+='<div class="row"><span>'+esc(b.label)+'</span><span>'+euro(b.amount,o.currency)+'</span></div>';});}
    else{
      if(o.roomTotal)s+='<div class="row"><span>Unterkunft</span><span>'+euro(o.roomTotal,o.currency)+'</span></div>';
      if(o.extraFees)s+='<div class="row"><span>Endreinigung / Gebühren</span><span>'+euro(o.extraFees,o.currency)+'</span></div>';
    }
    if(o.total!=null)s+='<div class="row total"><span>Gesamt</span><span>'+euro(o.total,o.currency)+'</span></div>';
    $('#bk-summary').innerHTML=s;
  }
  function openBooking(acc){
    if(!acc)return;
    if(!acc.connected){if(acc.link)window.open(acc.link,'_blank','noopener');return;}
    if(!state.checkin||!state.checkout){alert('Bitte zuerst An- und Abreise wählen.');if(form&&form.checkin)form.checkin.focus();return;}
    var avail=roomsWithOffers(acc);
    if(!avail.length){alert('Für diese Daten leider nicht verfügbar.');return;}
    bkAcc=acc;bkRoom=avail[0];
    $('#bk-title').textContent=acc.name;$('#bk-accId').value=acc.id;$('#bk-msg').innerHTML='';
    var rp=$('#bk-rooms');
    if(avail.length>1){
      rp.innerHTML='<div class="dt-sec-title" style="font-size:15px;margin-top:0">Zimmer wählen</div><div class="rooms-pick">'+avail.map(function(r,i){
        return '<label class="room-opt'+(i===0?' sel':'')+'"><input type="radio" name="bkroom" value="'+esc(r.roomId)+'"'+(i===0?' checked':'')+'>'
          +'<span><span class="rn">'+esc(r.name||'Zimmer')+'</span>'+(roomSub(r)?'<span class="rg"> · '+roomSub(r)+'</span>':'')+(r.description?'<span class="rd">'+esc(r.description)+'</span>':'')+'</span>'
          +'<span class="rp"><b>'+euro(r.offer.total,r.offer.currency)+'</b>gesamt</span></label>';
      }).join('')+'</div>';
      $$('#bk-rooms input[name=bkroom]').forEach(function(inp){inp.addEventListener('change',function(){
        bkRoom=avail.filter(function(r){return String(r.roomId)===String(inp.value)})[0];
        $$('#bk-rooms .room-opt').forEach(function(o){o.classList.remove('sel')});inp.closest('.room-opt').classList.add('sel');
        renderBkSummary();});});
    } else rp.innerHTML='';
    renderBkSummary();
    $('#bk-form').style.display='';$('#bk-actions').style.display='';
    ov.classList.add('open');ov.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
  }
  function closeBooking(){ov.classList.remove('open');ov.setAttribute('aria-hidden','true');document.body.style.overflow=''}
  function msg(t,html){$('#bk-msg').innerHTML='<div class="msg '+t+'">'+html+'</div>'}
  if(ov){
    $('#bk-close').addEventListener('click',closeBooking);
    $('#bk-cancel').addEventListener('click',closeBooking);
    ov.addEventListener('click',function(e){if(e.target===ov)closeBooking()});
    $('#bk-submit').addEventListener('click',function(){
      var f=$('#bk-form');
      var data={accId:$('#bk-accId').value,roomId:(bkRoom&&bkRoom.roomId)||'',roomName:(bkRoom&&bkRoom.name)||'',
        checkin:state.checkin,checkout:state.checkout,adults:parseInt(state.adults,10)||2,childrenAges:state.childrenAges||[],guests:state.guests||2,
        title:f.title.value,firstName:f.firstName.value.trim(),lastName:f.lastName.value.trim(),
        email:f.email.value.trim(),phone:f.phone.value.trim(),notes:f.notes.value.trim()};
      if(!data.firstName||!data.lastName||!data.email){msg('err','Bitte Vorname, Nachname und E-Mail ausfüllen.');return;}
      if(!f.agb.checked){msg('err','Bitte AGB &amp; Datenschutz akzeptieren.');return;}
      var btn=$('#bk-submit');btn.disabled=true;btn.textContent='Wird gebucht…';
      fetch('/api/book',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(data)})
        .then(function(r){return r.json()}).then(function(res){
          btn.disabled=false;btn.textContent='Jetzt verbindlich buchen';
          if(res.ok){$('#bk-form').style.display='none';$('#bk-actions').style.display='none';$('#bk-rooms').innerHTML='';
            msg('ok','<b>Buchung bestätigt!</b><br>Buchungsnummer: <b>'+(res.bookingId||'\\u2014')+'</b><br>Du erhältst in Kürze eine Bestätigung per E-Mail.'+(res.demo?'<br><em>(Demo-Modus \\u2013 keine echte Buchung erstellt)</em>':''));
          }else{msg('err',res.error||'Buchung fehlgeschlagen.')}
        }).catch(function(){btn.disabled=false;btn.textContent='Jetzt verbindlich buchen';msg('err','Netzwerkfehler. Bitte erneut versuchen.')});
    });
  }
  // ---- detail window (gallery + info + website link) ----
  var dt=$('#dtOverlay');
  function openDetail(acc){
    if(!acc)return;
    var imgs=(acc.images&&acc.images.length)?acc.images:(acc.image?[acc.image]:[]);
    var main=$('#dt-main');
    if(imgs.length){main.className='main';main.style.backgroundImage="url('"+imgs[0]+"')";}else{main.className='main noimg';main.style.backgroundImage='';}
    var th=$('#dt-thumbs');
    if(imgs.length>1){th.style.display='';th.innerHTML=imgs.map(function(u,i){return '<div class="th'+(i===0?' active':'')+'" data-i="'+i+'" style="background-image:url(\\''+u+'\\')"></div>';}).join('');
      $$('#dt-thumbs .th').forEach(function(t){t.addEventListener('click',function(){main.style.backgroundImage="url('"+imgs[+t.getAttribute('data-i')]+"')";$$('#dt-thumbs .th').forEach(function(x){x.classList.remove('active')});t.classList.add('active');});});
    }else{th.style.display='none';th.innerHTML='';}
    $('#dt-title').textContent=acc.name;
    $('#dt-rating').innerHTML=acc.rating?('\\u2605 '+esc(acc.rating)):'';
    $('#dt-meta').innerHTML=(acc.location?'<span class="chip">\\ud83d\\udccd '+esc(acc.location)+'</span>':'')+(acc.type?'<span class="chip">'+esc(acc.type)+'</span>':'')+(acc.maxGuests?'<span class="chip">bis '+acc.maxGuests+' Gäste</span>':'')+(acc.roomCount>1?'<span class="chip">'+acc.roomCount+' Zimmer</span>':'');
    $('#dt-desc').textContent=acc.description||'';
    $('#dt-feats').innerHTML=(acc.featureLabels||[]).map(function(f){return '<span class="fi">'+f.icon+' '+esc(f.label)+'</span>';}).join('');
    var rhtml='';
    if(acc.connected){
      var avail=roomsWithOffers(acc);
      if(state.checkin&&state.checkout){
        if(avail.length)rhtml='<div class="dt-sec-title">Verfügbare Zimmer</div><div class="rooms-pick">'+avail.map(function(r){return '<div class="room-opt"><span><span class="rn">'+esc(r.name||'Zimmer')+'</span>'+(roomSub(r)?'<span class="rg"> · '+roomSub(r)+'</span>':'')+(r.description?'<span class="rd">'+esc(r.description)+'</span>':'')+(r.features&&r.features.length?'<span class="rf">'+r.features.slice(0,5).map(function(f){return '<span>'+esc(f)+'</span>'}).join('')+'</span>':'')+'</span><span class="rp"><b>'+euro(r.offer.total,r.offer.currency)+'</b>gesamt</span></div>';}).join('')+'</div>';
        else rhtml='<p class="note-web">Für diese Daten leider nicht verfügbar – bitte andere Daten wählen.</p>';
      }else rhtml='<p class="note-web">Wähle oben Anreise &amp; Abreise für Live-Preise.</p>';
    }else rhtml='<p class="note-web">Preise &amp; Buchung direkt über die Website der Unterkunft.</p>';
    $('#dt-rooms').innerHTML=rhtml;
    var a='';
    if(acc.connected){var canBook=state.checkin&&state.checkout&&roomsWithOffers(acc).length;a+='<button class="btn btn-primary" id="dt-book"'+(canBook?'':' disabled style="opacity:.5;cursor:default"')+'>Jetzt buchen</button>';}
    if(acc.link)a+='<a class="dt-web" href="'+esc(acc.link)+'" target="_blank" rel="noopener">Zur Website \\u2192</a>';
    $('#dt-actions').innerHTML=a;
    var b=$('#dt-book');if(b)b.addEventListener('click',function(){closeDetail();openBooking(acc);});
    dt.classList.add('open');dt.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
  }
  function closeDetail(){dt.classList.remove('open');dt.setAttribute('aria-hidden','true');document.body.style.overflow=''}
  if(dt){$('#dt-close').addEventListener('click',closeDetail);dt.addEventListener('click',function(e){if(e.target===dt)closeDetail();});}
  run();
})();
</script>`;

// Interactive ad banner for the delivery partner kochdu.at (Gastronomie page).
function kochduBanner() {
  return `
  <a class="kochdu reveal" href="https://www.kochdu.at" target="_blank" rel="noopener sponsored" aria-label="Zu kochdu.at – Essen bestellen im Montafon">
    <div class="kochdu-glow"></div>
    <div class="kochdu-txt">
      <span class="kochdu-eyebrow">Anzeige · Liefer-Partner</span>
      <h2>Lieber liefern lassen?</h2>
      <p>Bestell dein Essen online im Montafon – <b>Lieferung oder Abholung</b> bei lokalen Restaurants. <span class="kochdu-rot" id="kochduRot">Pizza 🍕</span></p>
      <div class="kochdu-chips"><span>Gaschurn</span><span>St. Gallenkirch</span><span>Partenen</span><span>Gortipohl</span></div>
      <span class="kochdu-btn">Jetzt bei kochdu.at bestellen →</span>
    </div>
    <div class="kochdu-art"><span class="kochdu-scooter">🛵</span></div>
  </a>
  <script>(function(){var el=document.getElementById('kochduRot');if(!el)return;var w=['Pizza 🍕','Burger 🍔','Döner 🌯','Sushi 🍣','Pasta 🍝','Griechisch 🥙'];var i=0;setInterval(function(){i=(i+1)%w.length;el.style.opacity='0';setTimeout(function(){el.textContent=w[i];el.style.opacity='1';},200);},2200);})();</script>`;
}

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
  <section class="section" style="padding-top:34px;padding-bottom:0"><div class="container">${kochduBanner()}</div></section>
  <section class="section" style="padding-top:20px">
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
    seo: c.__seo,
  });
}

/* ---------------- EVENTS ---------------- */
function eventsPage(c, events, opts) {
  opts = opts || {};
  // Split into upcoming (or undated) and past; sort by real date.
  // _iso = start date (real column, or parsed from legacy free-text date_text).
  // _end = optional end date for multi-day events. _sortEnd drives past/upcoming.
  const today = todayISO();
  const withISO = (events || []).map((e) => {
    const start = dateISO(e.event_date) || parseGermanDate(e.date_text);
    const end = dateISO(e.event_end_date);
    // date_text only counts as extra info (e.g. time) when a real date column exists.
    const extra = e.event_date ? e.date_text || "" : "";
    return { ...e, _iso: start, _end: end, _extra: extra, _sortEnd: end && end > start ? end : start };
  });
  const upcoming = withISO
    .filter((e) => !e._iso || e._sortEnd >= today)
    .sort((a, b) => {
      if (a._iso && b._iso) return a._iso < b._iso ? -1 : a._iso > b._iso ? 1 : 0;
      if (a._iso) return -1;
      if (b._iso) return 1;
      return (b.id || 0) - (a.id || 0);
    });
  const past = withISO
    .filter((e) => e._iso && e._sortEnd < today)
    .sort((a, b) => (a._iso < b._iso ? 1 : a._iso > b._iso ? -1 : 0))
    .slice(0, 5);
  const all = upcoming.concat(past);
  const whenLabel = (e) => (e._iso ? formatRangeDE(e._iso, e._end) : e.date_text || "");
  // Data for the JS detail modal (index-addressed, matches card data-evidx).
  const evData = all.map((e) => ({
    name: e.name || "",
    type: e.type || "",
    location: e.location || "",
    description: e.description || "",
    website: e.website || "",
    dateLabel: whenLabel(e),
    dateText: e._extra,
    images: [e.image].concat(parseGallery(e.gallery)).filter((u, i, a) => u && a.indexOf(u) === i).map(pimg),
  }));

  const badge = (e) => {
    if (e._iso) {
      const b = bigDate(e._iso);
      let day = String(b.d);
      if (e._end && e._end > e._iso) {
        const eb = bigDate(e._end);
        day = eb.m === b.m && eb.y === b.y ? b.d + "–" + eb.d : b.d + "–…";
      }
      return `<div class="ev-date"><span class="d">${day}</span><span class="m">${b.m}</span><span class="y">${b.y}</span></div>`;
    }
    return e.date_text ? `<div class="ev-date ev-date-text"><span class="m">${esc(e.date_text)}</span></div>` : "";
  };
  const evCard = (e, idx, small) => `
  <article class="ev-card${small ? " ev-small" : ""} reveal" data-evidx="${idx}" role="button" tabindex="0" aria-label="${esc(e.name)} – Details ansehen">
    <div class="ev-img" style="${imgStyle(e.image, e.name)}">
      ${badge(e)}
      ${e.type ? `<span class="ev-type">${esc(e.type)}</span>` : ""}
    </div>
    <div class="ev-cbody">
      <h3>${esc(e.name)}</h3>
      ${
        whenLabel(e)
          ? `<div class="ev-when">${esc(whenLabel(e))}${e._extra ? " · " + esc(e._extra) : ""}</div>`
          : ""
      }
      <p class="ev-desc">${esc(e.description)}</p>
      <div class="ev-meta">${e.location ? `<span class="chip">📍 ${esc(e.location)}</span>` : ""}${
    e.website ? `<span class="chip">🔗 Website</span>` : ""
  }</div>
      <span class="ev-open">Details ansehen →</span>
    </div>
  </article>`;
  const upHtml = upcoming.map((e, i) => evCard(e, i, false)).join("");
  const pastHtml = past.map((e, i) => evCard(e, upcoming.length + i, true)).join("");
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
      ${
        upcoming.length
          ? `<div class="ev-grid">${upHtml}</div>`
          : `<div class="no-results">Aktuell sind keine kommenden Veranstaltungen eingetragen.</div>`
      }
      ${
        past.length
          ? `<div class="ev-past-head reveal"><h2>Bereits gewesen</h2><p class="muted">Ein kleiner Rückblick auf vergangene Highlights.</p></div><div class="ev-grid ev-grid-past">${pastHtml}</div>`
          : ""
      }
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
            <label>Datum (von) *</label>
            <input type="date" name="event_date" required>
          </div>
          <div class="form-row" style="margin:0">
            <label>Bis (optional, bei mehrtägigen)</label>
            <input type="date" name="event_end_date">
          </div>
        </div>
        <div class="form-row">
          <label>Uhrzeit / Zusatz (optional)</label>
          <input name="date_text" maxlength="60" placeholder="z. B. ab 18 Uhr">
        </div>
        <div class="form-row two">
          <div class="form-row" style="margin:0">
            <label>Website (optional)</label>
            <input name="website" maxlength="200" placeholder="https://">
          </div>
          <div class="form-row" style="margin:0">
            <label>Deine E-Mail (optional, für Rückfragen)</label>
            <input name="submitter" type="email" maxlength="160">
          </div>
        </div>
        <div class="form-row">
          <label>Bilder (optional – mehrere möglich)</label>
          <input type="file" accept="image/*" id="evimg" multiple>
          <input type="hidden" name="image" id="evimgdata">
          <input type="hidden" name="gallery" id="evgallery">
          <div class="ev-prev" id="evprev"></div>
          <span class="form-note">Mehrere Bilder möglich – werden im Detailfenster durchgeschaltet. Erstes Bild = Titelbild. Alternativ an ${esc(
            c.contact_email
          )} senden.</span>
        </div>
        <p class="form-note" style="margin-bottom:14px">Mit dem Absenden stimmst du zu, dass wir deine Angaben zur Prüfung und Veröffentlichung der Veranstaltung verarbeiten. Details in unserer <a href="/datenschutz" class="accent">Datenschutzerklärung</a>. Bitte nur Bilder einreichen, an denen du die Rechte hast.</p>
        <button class="btn btn-primary" type="submit">Einreichen</button>
      </form>
    </div>
  </section>
  ${evDetailOverlayHTML()}`;
  const evJson = JSON.stringify(evData)
    .replace(/</g, "\\u003c")
    .replace(/[\u2028\u2029]/g, function (m) { return m === " " ? "\\u2028" : "\\u2029"; });
  const evScript = `
<script>
(function(){
  var EV=${evJson};
  var $=function(s){return document.querySelector(s)};
  var $$=function(s){return Array.prototype.slice.call(document.querySelectorAll(s))};
  function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}

  // ---- detail modal (gallery carousel + info + website link) ----
  var ov=document.getElementById('evOverlay');
  function openEv(i){
    var e=EV[i];if(!e||!ov)return;
    var imgs=e.images||[];
    var main=document.getElementById('ev-main');
    if(imgs.length){main.className='main';main.style.backgroundImage="url('"+imgs[0]+"')";}else{main.className='main noimg';main.style.backgroundImage='';}
    var th=document.getElementById('ev-thumbs');
    if(imgs.length>1){th.style.display='';th.innerHTML=imgs.map(function(u,k){return '<div class="th'+(k===0?' active':'')+'" data-i="'+k+'" style="background-image:url(\\''+u+'\\')"></div>';}).join('');
      $$('#ev-thumbs .th').forEach(function(t){t.addEventListener('click',function(){main.style.backgroundImage="url('"+imgs[+t.getAttribute('data-i')]+"')";$$('#ev-thumbs .th').forEach(function(x){x.classList.remove('active')});t.classList.add('active');});});
    }else{th.style.display='none';th.innerHTML='';}
    document.getElementById('ev-title').textContent=e.name;
    document.getElementById('ev-date').textContent=e.dateLabel||'';
    document.getElementById('ev-meta').innerHTML=(e.type?'<span class="chip">'+esc(e.type)+'</span>':'')+(e.location?'<span class="chip">\\ud83d\\udccd '+esc(e.location)+'</span>':'')+(e.dateText&&e.dateLabel!==e.dateText?'<span class="chip">\\ud83d\\udd53 '+esc(e.dateText)+'</span>':'');
    document.getElementById('ev-desc').textContent=e.description||'';
    document.getElementById('ev-actions').innerHTML=e.website?'<a class="btn btn-primary" href="'+esc(e.website)+'" target="_blank" rel="noopener">Zur Veranstaltung \\u2197</a>':'';
    ov.classList.add('open');ov.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
  }
  function closeEv(){if(!ov)return;ov.classList.remove('open');ov.setAttribute('aria-hidden','true');document.body.style.overflow='';}
  $$('.ev-card').forEach(function(card){
    function go(){openEv(parseInt(card.getAttribute('data-evidx'),10));}
    card.addEventListener('click',go);
    card.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();go();}});
  });
  if(ov){document.getElementById('ev-close').addEventListener('click',closeEv);ov.addEventListener('click',function(e){if(e.target===ov)closeEv();});document.addEventListener('keydown',function(e){if(e.key==='Escape')closeEv();});}

  // ---- submission form: multiple image uploads with preview ----
  var f=document.getElementById('evimg'),gField=document.getElementById('evgallery'),iField=document.getElementById('evimgdata'),prev=document.getElementById('evprev');
  var pics=[];
  function sync(){
    if(iField)iField.value=pics[0]||'';
    if(gField)gField.value=pics.slice(1).join('\\n');
    if(prev){prev.innerHTML=pics.map(function(u,k){return '<div class="evp" style="background-image:url(\\''+u+'\\')">'+(k===0?'<span class="star">Titel</span>':'')+'<button type="button" data-k="'+k+'" aria-label="Bild entfernen">\\u00d7</button></div>';}).join('');
      $$('#evprev .evp button').forEach(function(b){b.addEventListener('click',function(){pics.splice(+b.getAttribute('data-k'),1);sync();});});}
  }
  function addFile(file){var r=new FileReader();r.onload=function(ev){var img=new Image();img.onload=function(){var max=1400,w=img.width,h=img.height;if(w>max){h=h*max/w;w=max;}var cv=document.createElement('canvas');cv.width=w;cv.height=h;cv.getContext('2d').drawImage(img,0,0,w,h);pics.push(cv.toDataURL('image/jpeg',0.82));sync();};img.src=ev.target.result;};r.readAsDataURL(file);}
  if(f){f.addEventListener('change',function(){Array.prototype.forEach.call(f.files,addFile);f.value='';});}
})();
</script>`;
  return layout({
    title: "Veranstaltungen im Montafon – Feste, Konzerte & Highlights | VALUERO",
    active: "/veranstaltungen",
    body,
    content: c,
    extraScript: evScript,
    seo: c.__seo,
  });
}

// Event detail window (gallery carousel + info + website link), filled by JS.
function evDetailOverlayHTML() {
  return `
  <div class="bk-overlay" id="evOverlay" aria-hidden="true">
    <div class="bk-modal dt-modal" role="dialog" aria-modal="true" aria-labelledby="ev-title">
      <div class="grab" aria-hidden="true"></div>
      <button class="bk-close dt-close" id="ev-close" aria-label="Schließen">×</button>
      <div class="dt-gallery"><div class="main" id="ev-main"></div><div class="dt-thumbs" id="ev-thumbs"></div></div>
      <div class="dt-body">
        <div class="dt-head"><h3 id="ev-title"></h3></div>
        <div class="ev-bigdate" id="ev-date"></div>
        <div class="dt-meta" id="ev-meta"></div>
        <p class="dt-desc" id="ev-desc"></p>
        <div class="dt-actions" id="ev-actions"></div>
      </div>
    </div>
  </div>`;
}

/* ---------------- ABOUT ---------------- */
function aboutPage(c) {
  const v1 = c.about_hero_image
    ? `style="background-image:url('${esc(pimg(c.about_hero_image))}')"`
    : "";
  const v2 = c.about_block2_image
    ? `style="background-image:url('${esc(pimg(c.about_block2_image))}')"`
    : `style="background:linear-gradient(150deg,#4a6c7a,#243640)"`;
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
        <div class="about-visual" ${v2}></div>
        <div>
          <h2>${esc(c.about_block2_title)}</h2>
          <p>${esc(c.about_block2_text)}</p>
        </div>
      </div>
    </div>
  </section>`;
  return layout({
    title: "Über Valuero – Tourismusplattform im Hochmontafon | VALUERO",
    active: "/ueber-uns",
    body,
    content: c,
    seo: c.__seo,
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
  return layout({ title: title + " | VALUERO", active: active || "", body, content: c, seo: c.__seo });
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
    <h3 style="font-family:ui-serif,Georgia,"Iowan Old Style","Palatino Linotype",Palatino,"Times New Roman",serif;font-size:20px;margin-bottom:10px">Willkommen, Simon 👋</h3>
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
      const imgStyle = it.image ? `style="background-image:url('${esc(pimg(it.image))}')"` : "";
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
  const prev = value ? `style="background-image:url('${esc(pimg(value))}')"` : "";
  return `
    <label>Bild</label>
    <input type="file" accept="image/*" data-target="imgfield" data-preview="imgprev">
    <input type="hidden" name="image" id="imgfield" value="${esc(value || "")}">
    <div class="imgprev" id="imgprev" ${prev}></div>
    <span class="hint">Bild auswählen – wird automatisch verkleinert. Leer lassen für Platzhalter.</span>`;
}

// Admin gallery editor for events: add / delete / replace multiple images and
// pick the title image. Writes hidden fields image (first) + gallery (rest).
function eventGalleryEditor(it) {
  const imgs = [it.image].concat(parseGallery(it.gallery)).filter((u, i, a) => u && a.indexOf(u) === i);
  const json = JSON.stringify(imgs).replace(/</g, "\\u003c");
  return `
    <label>Bilder (Galerie)</label>
    <div class="evadmin">
      <style>
        .evadmin .ev-prev{display:flex;flex-wrap:wrap;gap:14px;margin:10px 0}
        .evadmin .evp{position:relative;width:112px;height:82px;border-radius:10px;background-size:cover;background-position:center;background-color:var(--surface-2,#eee);box-shadow:0 3px 8px -3px rgba(0,0,0,.4)}
        .evadmin .evp .rm{position:absolute;top:-8px;right:-8px;width:23px;height:23px;border-radius:50%;border:2px solid #fff;background:#c0392b;color:#fff;font-size:12px;line-height:1;cursor:pointer;padding:0}
        .evadmin .evp .mk{position:absolute;bottom:5px;left:5px;background:rgba(0,0,0,.62);color:#fff;border:0;font-size:10px;padding:2px 7px;border-radius:6px;cursor:pointer}
        .evadmin .evp .star{position:absolute;bottom:5px;left:5px;background:#1f6a49;color:#fff;font-size:10px;padding:2px 7px;border-radius:6px}
        .evadmin .ev-empty{color:var(--muted,#888);font-size:13px;margin:6px 0}
      </style>
      <input type="hidden" name="image" id="ev_image" value="">
      <input type="hidden" name="gallery" id="ev_gallery" value="">
      <div class="ev-prev" id="ev_admin_prev"></div>
      <input type="file" accept="image/*" id="ev_admin_add" multiple>
      <span class="hint">Erstes Bild = Titelbild. „Titel“ holt ein Bild nach vorne, „×“ löscht es. Neue Bilder oben hinzufügen (mehrere möglich).</span>
    </div>
    <script>(function(){
      var pics=${json};
      var iF=document.getElementById('ev_image'),gF=document.getElementById('ev_gallery'),prev=document.getElementById('ev_admin_prev'),add=document.getElementById('ev_admin_add');
      // Preview external images through our own /img proxy (DSGVO + CSP);
      // the stored value in the hidden field stays the original URL.
      function disp(u){if(/^data:|^\\//.test(u))return u;
        var b=btoa(unescape(encodeURIComponent(u))).replace(/\\+/g,'-').replace(/\\//g,'_').replace(/=+$/,'');
        return '/img?u='+b;}
      function sync(){
        iF.value=pics[0]||'';gF.value=pics.slice(1).join('\\n');
        if(!pics.length){prev.innerHTML='<div class="ev-empty">Noch keine Bilder – unten hinzufügen.</div>';return;}
        prev.innerHTML=pics.map(function(u,k){return '<div class="evp" style="background-image:url(\\''+disp(u)+'\\')">'+(k===0?'<span class="star">Titel</span>':'<button type="button" class="mk" data-k="'+k+'">Titel</button>')+'<button type="button" class="rm" data-k="'+k+'" aria-label="Löschen">\\u00d7</button></div>';}).join('');
        Array.prototype.forEach.call(prev.querySelectorAll('.rm'),function(b){b.addEventListener('click',function(){pics.splice(+b.getAttribute('data-k'),1);sync();});});
        Array.prototype.forEach.call(prev.querySelectorAll('.mk'),function(b){b.addEventListener('click',function(){var k=+b.getAttribute('data-k');var x=pics.splice(k,1)[0];pics.unshift(x);sync();});});
      }
      function addFile(file){var r=new FileReader();r.onload=function(ev){var img=new Image();img.onload=function(){var max=1400,w=img.width,h=img.height;if(w>max){h=h*max/w;w=max;}var cv=document.createElement('canvas');cv.width=w;cv.height=h;cv.getContext('2d').drawImage(img,0,0,w,h);var keepAlpha=/png|svg|webp/i.test(file.type);pics.push(keepAlpha?cv.toDataURL('image/png'):cv.toDataURL('image/jpeg',0.82));sync();};img.src=ev.target.result;};r.readAsDataURL(file);}
      add.addEventListener('change',function(){Array.prototype.forEach.call(add.files,addFile);add.value='';});
      sync();
    })();</script>`;
}

// One editable room row in the admin form.
function roomRow(r) {
  r = r || {};
  return `
  <div class="room-row">
    <input type="hidden" name="room_row_id" value="${esc(r.id || "")}">
    <div class="fr" style="margin:0;flex:2"><label>Zimmername</label><input name="room_name" value="${esc(
      r.name || ""
    )}" placeholder="z. B. Doppelzimmer Bergblick"></div>
    <div class="fr" style="margin:0;flex:1.2"><label>Beds24 Zimmer-ID</label><input name="room_beds24_id" value="${esc(
      r.beds24_room_id || ""
    )}" placeholder="z. B. 678901" inputmode="numeric"></div>
    <div class="fr" style="margin:0;flex:.7"><label>Max. Gäste</label><input type="number" min="0" name="room_max_guests" value="${esc(
      r.max_guests ? r.max_guests : ""
    )}"></div>
    <button type="button" class="btn-remove" title="Zimmer entfernen" aria-label="Zimmer entfernen">×</button>
  </div>`;
}

// Beds24 connection + rooms + booking-tool filters — only for accommodations.
function accBookingFields(it) {
  const sel = parseFeatures(it.features);
  let rooms = it.__rooms && it.__rooms.length ? it.__rooms : [];
  if (!rooms.length && String(it.beds24_room_id || "").trim()) {
    rooms = [{ id: "", name: it.type || "Zimmer", beds24_room_id: it.beds24_room_id, max_guests: it.max_guests }];
  }
  const connected =
    String(it.beds24_property_id || "").trim() && rooms.some((r) => String(r.beds24_room_id || "").trim());
  const badge = connected
    ? `<span class="beds-badge on">● Beds24 verbunden – Live-Buchung aktiv</span>`
    : `<span class="beds-badge off">○ Keine API – zeigt „Preise siehe Website"</span>`;
  const roomRows = (rooms.length ? rooms : [{}]).map(roomRow).join("");
  const featBoxes = FEATURE_CATEGORIES.map((c) =>
    `<div class="feat-cat"><h5>${esc(c.cat)}</h5><div class="feature-grid">${c.items
      .map((f) => {
        const on = sel.includes(f.key);
        return `<label class="feat"><input type="checkbox" name="features" value="${f.key}" ${
          on ? "checked" : ""
        }><span>${f.icon} ${esc(f.label)}</span></label>`;
      })
      .join("")}</div></div>`
  ).join("");
  const apiOn = String(it.api_url || "").trim();
  return `
    <div class="section-sep">Externe Buchungs-API ${
      apiOn
        ? `<span class="beds-badge on">● aktiv – Preise/Buchung von der eigenen App</span>`
        : `<span class="beds-badge off">○ optional</span>`
    }</div>
    <p class="hint" style="margin:-6px 0 14px">Nur ausfüllen, wenn diese Unterkunft eine <b>eigene Buchungs-App mit Sonderlogik</b> hat (z. B. Antonhaus/Alpinappart mit Kindertarifen &amp; Zuschlägen). Dann holt Valuero Preise, Verfügbarkeit und Buchung von dort – statt aus Beds24. Leer lassen → Beds24 wird genutzt.</p>
    <div class="fr two">
      <div class="fr" style="margin:0"><label>Buchungs-API URL</label><input name="api_url" value="${esc(
        it.api_url
      )}" placeholder="https://…up.railway.app"></div>
      <div class="fr" style="margin:0"><label>API-Key</label><input name="api_key" value="${esc(
        it.api_key
      )}" placeholder="Schlüssel der Partner-App"></div>
    </div>

    <div class="section-sep">Buchungstool &amp; Beds24 ${badge}</div>
    <p class="hint" style="margin:-6px 0 14px">Property-ID eintragen und pro Zimmer eine Beds24 Zimmer-ID. Dann zeigt VALUERO Live-Preise, Verfügbarkeit und die komplette Buchungsstrecke (bei mehreren Zimmern wählt der Gast das Zimmer). Ohne Zimmer-ID erscheint die Unterkunft ohne Preis mit „Preise siehe Website" und einem Button zur oben eingetragenen Website.</p>
    <div class="fr two">
      <div class="fr" style="margin:0"><label>Beds24 Property-ID</label><input name="beds24_property_id" value="${esc(
        it.beds24_property_id
      )}" placeholder="z. B. 123456" inputmode="numeric"></div>
      <div class="fr" style="margin:0"><label>Eigener API-Token (optional)</label><input name="beds24_token" value="${esc(
        it.beds24_token
      )}" placeholder="nur falls eigenes Beds24-Konto"></div>
    </div>
    <div class="fr" style="margin-bottom:6px"><label>Zimmer</label>
      <div id="roomsList">${roomRows}</div>
      <button type="button" class="btn btn-ghost btn-sm" id="addRoom" style="align-self:flex-start;margin-top:2px">+ Zimmer hinzufügen</button>
    </div>
    <div class="fr two">
      <div class="fr" style="margin:0"><label>Max. Gäste gesamt (Filter, optional)</label><input type="number" min="0" name="max_guests" value="${esc(
        it.max_guests ? it.max_guests : ""
      )}" placeholder="z. B. 6"></div>
      <div></div>
    </div>
    <div class="fr">
      <label>Ausstattung &amp; Filter (Booking-Tool)</label>
      <div class="feat-cats">${featBoxes}</div>
      <span class="hint">Ausgewählte Merkmale erscheinen (kategorisiert) als Filter im Buchungstool und als Icons auf der Unterkunft.</span>
    </div>
    <script>
    (function(){
      var list=document.getElementById('roomsList'),add=document.getElementById('addRoom');
      if(!list||!add)return;
      function bind(){Array.prototype.forEach.call(list.querySelectorAll('.btn-remove'),function(b){b.onclick=function(){if(list.querySelectorAll('.room-row').length>1)b.closest('.room-row').remove();else{b.closest('.room-row').querySelectorAll('input').forEach(function(i){i.value=''});}};});}
      add.onclick=function(){
        var t='<div class="room-row"><input type="hidden" name="room_row_id" value="">'
          +'<div class="fr" style="margin:0;flex:2"><label>Zimmername</label><input name="room_name" placeholder="z. B. Doppelzimmer Bergblick"></div>'
          +'<div class="fr" style="margin:0;flex:1.2"><label>Beds24 Zimmer-ID</label><input name="room_beds24_id" placeholder="z. B. 678901" inputmode="numeric"></div>'
          +'<div class="fr" style="margin:0;flex:.7"><label>Max. Gäste</label><input type="number" min="0" name="room_max_guests"></div>'
          +'<button type="button" class="btn-remove" title="Zimmer entfernen">\\u00d7</button></div>';
        list.insertAdjacentHTML('beforeend',t);bind();
      };
      bind();
    })();
    </script>`;
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
        <div class="fr" style="margin:0"><label>Datum (von)</label><input type="date" name="event_date" value="${esc(
          dateISO(it.event_date)
        )}"></div>
        <div class="fr" style="margin:0"><label>Bis (bei mehrtägigen)</label><input type="date" name="event_end_date" value="${esc(
          dateISO(it.event_end_date)
        )}"></div>
      </div>
      <div class="fr two">
        <div class="fr" style="margin:0"><label>Uhrzeit / Zusatz</label><input name="date_text" value="${esc(
          it.date_text
        )}" placeholder="z. B. ab 18 Uhr"></div>
        <div class="fr" style="margin:0"><label>Website</label><input name="website" value="${esc(it.website)}"></div>
      </div>
      <div class="fr"><label>Status</label><select name="status">
        <option value="approved" ${it.status === "approved" ? "selected" : ""}>Online</option>
        <option value="pending" ${it.status === "pending" ? "selected" : ""}>Zur Freigabe</option>
        <option value="rejected" ${it.status === "rejected" ? "selected" : ""}>Abgelehnt</option>
      </select></div>
      <div class="fr">${eventGalleryEditor(it)}</div>`;
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
      ${
        kind === "unterkuenfte"
          ? `<div class="fr"><label>Galerie-Bilder (eine Bild-URL pro Zeile)</label><textarea name="gallery" rows="3" placeholder="https://…&#10;https://…">${esc(
              it.gallery
            )}</textarea><span class="hint">Erscheinen im Detail-Fenster der Unterkunft. Das Hauptbild oben ist das erste Bild.</span></div>`
          : ""
      }
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
    const prev = c[key] ? `style="background-image:url('${esc(pimg(c[key]))}')"` : "";
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
  await query(`ALTER TABLE accommodations ADD COLUMN IF NOT EXISTS gallery TEXT DEFAULT ''`);
  await query(`ALTER TABLE accommodations ADD COLUMN IF NOT EXISTS api_url TEXT DEFAULT ''`);
  await query(`ALTER TABLE accommodations ADD COLUMN IF NOT EXISTS api_key TEXT DEFAULT ''`);
  // ---- Event columns: real date range (for sorting/past-events) + image gallery ----
  await query(`ALTER TABLE events ADD COLUMN IF NOT EXISTS event_date DATE`);
  await query(`ALTER TABLE events ADD COLUMN IF NOT EXISTS event_end_date DATE`);
  await query(`ALTER TABLE events ADD COLUMN IF NOT EXISTS gallery TEXT DEFAULT ''`);
  // ---- Rooms per accommodation (each maps to one Beds24 room id) ----
  await query(`
    CREATE TABLE IF NOT EXISTS rooms (
      id SERIAL PRIMARY KEY,
      accommodation_id INTEGER REFERENCES accommodations(id) ON DELETE CASCADE,
      name TEXT DEFAULT '',
      beds24_room_id TEXT DEFAULT '',
      max_guests INTEGER DEFAULT 0,
      sort INTEGER DEFAULT 0,
      created_at TIMESTAMPTZ DEFAULT now()
    );
  `);
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

  // ---- Booking-tool intro text (replace the old "book on their website" copy) ----
  const newIntro =
    "Wähle deine Reisedaten und finde sofort verfügbare Unterkünfte mit tagesaktuellen Preisen – viele direkt hier buchbar. Unsere Partner bieten alle einen Mindeststandard: Parkplatz, WLAN, Nichtraucher im Haus und TV. Ein Klick auf eine Unterkunft öffnet Details und Bilder; Unterkünfte ohne Online-Buchung erkennst du am Website-Button. Die Bewertungen basieren auf dem Durchschnitt mehrerer Online-Portale.";
  await query(
    `UPDATE content SET value=$1 WHERE key='unterkuenfte_intro' AND value LIKE '%direkt auf der jeweiligen Website%'`,
    [newIntro]
  );

  // ---- Images (license-free Unsplash + partner-site photos). Only fill empties. ----
  const US = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;
  const WX = (idext) =>
    `https://static.wixstatic.com/media/${idext}/v1/fill/w_1280,h_853,al_c,q_82,enc_auto/photo.jpg`;

  const contentImgs = {
    unterkuenfte_hero_image: US("1566475955255-404134a79aeb"),
    gastronomie_hero_image: US("1598022186152-1b66e6c38245"),
    veranstaltungen_hero_image: US("1760822398930-3c874f786597"),
    about_hero_image: US("1638658978541-17a4532e99ed"),
    home_hero_image: US("1525638248862-171adada295c"),
  };
  for (const [k, v] of Object.entries(contentImgs)) {
    await query(`UPDATE content SET value=$2 WHERE key=$1 AND COALESCE(value,'')=''`, [k, v]);
  }

  // Accommodation card image (only if empty) + gallery (real partner photos where available)
  const accImgs = [
    ["Haus Felder – Garfrescha", "", [WX("dc121b_3e1052d59351461d8388b67bde691cf1~mv2.jpg"), US("1610803523148-a0052fa341bb"), US("1631630259742-c0f0b17c6c10")]],
    ["Alt Montafon", US("1631941150945-837cb81fc7e2"), [US("1551927411-95e412943b58"), US("1664369058082-ee8e36028106"), US("1566475955255-404134a79aeb")]],
    ["Landhaus Angelika", "", [WX("d2f3ea_165e82a9460c488ebed6c0f8c621cef2~mv2.jpg"), WX("d2f3ea_dbb61fc69afc4f6fbc253bf16c8c5da6~mv2.jpg"), US("1668105334079-9e78b4105c51")]],
    ["Haus Lerch", "", [WX("3dcb39_2e8278a8ae7d4a4b9698c9d405fb432a~mv2.jpg"), US("1697807713040-b5fb60d6f012"), US("1684670158497-053b54633632")]],
    ["Chalet Antonhaus", "", [WX("d2f3ea_b3872a8dd8c3455087ce1522e9135e7c~mv2.jpg"), WX("d2f3ea_0f17479d8ae34df995bb0198b5756fd1~mv2.jpg"), WX("d2f3ea_7260c08c0cf0449d93ed120e3410363c~mv2.jpg"), WX("d2f3ea_34b915914cfc430cb436f8a816bc0abb~mv2.jpg")]],
    ["Haus zur Kapelle", "", [WX("d2f3ea_022496001a774d348ec6dea8f2525abf~mv2.jpg"), WX("d2f3ea_1ee736c6355546979d861be6cfcc8fcc~mv2.jpg"), WX("d2f3ea_f61466e8fc754018b0cca5042162ae98~mv2.jpg"), US("1684670158497-053b54633632")]],
  ];
  for (const [name, card, gal] of accImgs) {
    await query(
      `UPDATE accommodations
         SET image = CASE WHEN COALESCE(image,'')='' AND $2 <> '' THEN $2 ELSE image END,
             gallery = CASE WHEN COALESCE(gallery,'')='' THEN $3 ELSE gallery END
       WHERE name=$1`,
      [name, card, gal.join("\n")]
    );
  }

  // Gastro card image (only if empty)
  const gasImgs = [["Alt Montafon", US("1697807713040-b5fb60d6f012")]];
  for (const [name, img] of gasImgs) {
    await query(`UPDATE gastro SET image=CASE WHEN COALESCE(image,'')='' THEN $2 ELSE image END WHERE name=$1`, [name, img]);
  }

  // "Marketing. Machen. Wir." – Montafon-Bild (nur wenn leer)
  await query(
    `INSERT INTO content (key,value) VALUES ('about_block2_image',$1)
     ON CONFLICT (key) DO UPDATE SET value=CASE WHEN COALESCE(content.value,'')='' THEN EXCLUDED.value ELSE content.value END`,
    [US("1566475955255-404134a79aeb")]
  );

  // ---- One-time curation: Unterkunftstyp + passende Filter je Unterkunft ----
  const cvr = await query("SELECT value FROM content WHERE key='curate_v'");
  if (((cvr.rows[0] && cvr.rows[0].value) || "") !== "2") {
    const curate = [
      ["Haus Felder – Garfrescha", "Ski In & Out", "ski,skiroom,parking,wifi,mountainview,nonsmoking,tv,kitchen,balcony"],
      ["Alt Montafon", "Appartements", "steam,parking,wifi,kitchen,tv,nonsmoking,central,balcony"],
      ["Landhaus Angelika", "Ferienwohnung", "breakfast,pets,parking,family,wifi,mountainview,garden,kitchen,nonsmoking"],
      ["Haus Lerch", "Ferienwohnung", "parking,garage,wifi,kitchen,tv,nonsmoking,skiroom,balcony,washer"],
      ["Chalet Antonhaus", "Chalet", "sauna,steam,wellness,breakfast,parking,wifi,tv,kitchen,mountainview,central,balcony,nonsmoking"],
      ["Haus zur Kapelle", "Ski In & Out", "ski,skiroom,sauna,parking,wifi,mountainview,nonsmoking,kitchen,balcony"],
      ["Alpinappart Wachter", "Ferienwohnung", "wifi,parking,kitchen,dishwasher,washer,dryer,balcony,mountainview,tv,nonsmoking,family,garden"],
    ];
    for (const [name, type, features] of curate) {
      await query(`UPDATE accommodations SET type=$2, features=$3 WHERE name=$1`, [name, type, features]);
    }
    await query(`INSERT INTO content (key,value) VALUES ('curate_v','2') ON CONFLICT (key) DO UPDATE SET value='2'`);
  }

  // ---- Kurzbeschreibungen für einzelne Kacheln (versioniert, einmalig) ----
  const descv = await query("SELECT value FROM content WHERE key='acc_desc_v'");
  if (((descv.rows[0] && descv.rows[0].value) || "") !== "3") {
    const descs = [
      [
        "Alpinappart Wachter",
        "Helle Ferienwohnung an der Sonnenseite von Gaschurn: per Schiebewand flexibel von gemütlich-kompakt bis großzügig für bis zu 10 Personen – 130 m², 4 Schlafzimmer, 2 Bäder, Balkon. Nur 2 Min. zur Skibushaltestelle (gratis zur Silvretta Montafon), 10 Min. ins Zentrum. Familiär geführt von Anna & Joel.",
      ],
      [
        "Chalet Antonhaus",
        "Vier liebevoll eingerichtete Chalet-Appartements mit alpinem Luxus-Charme in Gaschurn: hochwertige Ausstattung, Infrarotkabine und Salzstein-Schlafzimmer. Großer Garten mit Fass-Sauna und Badefass, Frühstücksservice, beheiztes Skidepot und hundefreundlich – dazu die eigene Gaststube „Blauer Anton“. Gastgeber: Frank & Angelika.",
      ],
      [
        "Haus Felder – Garfrescha",
        "Neu errichtete Berghütte (2020) auf rund 1.500 m in Garfrescha oberhalb von St. Gallenkirch – mitten im Skigebiet Silvretta Montafon und in der schönen Maisäß-Landschaft. Modern und gemütlich für bis zu 5 Personen: Ski in & out im Winter, Ruhe und echtes Bergerlebnis im Sommer. Gastgeberin: Barbara Felder & Familie.",
      ],
      [
        "Landhaus Angelika",
        "Urlaub am Land bei Familie Wittwer in Gaschurn: gemütliche Ferienwohnung mit echtem Bauernhof-Flair – hier weckt schon mal der Hahn. Viel zu entdecken am Hof und im ganzen Tal, ideal für Familien, Kinder und Vierbeiner. Als BergePLUS-Partner mit täglich wechselndem Erlebnisprogramm für Groß und Klein.",
      ],
      [
        "Haus Lerch",
        "Top ausgestattete, kinderfreundliche Ferienwohnungen (Montiel & Grandau) in ruhiger, zentraler Lage in St. Gallenkirch – nahe den Ski- und Wandergebieten der Silvretta Montafon. Gratis WLAN, Parkplätze direkt am Haus, Trockenraum mit Schuhtrockner, Brötchenservice und Busanbindung. Nichtraucherhaus. Gastgeberin: Andrea Lerch.",
      ],
      [
        "Haus zur Kapelle",
        "Gemütliche Alphütte auf 1.500 m in der idyllischen Maisäß-Landschaft von Garfrescha, mitten im Skigebiet Silvretta Montafon Nova. Im Winter autofrei, nur per Doppelsessellift erreichbar (Dauerparkplatz an der Talstation) – ideal für Familien. Im Sommer perfekter Ausgangspunkt für Wanderungen und Radtouren.",
      ],
    ];
    for (const [name, description] of descs) {
      await query(`UPDATE accommodations SET description=$2 WHERE name=$1`, [name, description]);
    }
    await query(`INSERT INTO content (key,value) VALUES ('acc_desc_v','3') ON CONFLICT (key) DO UPDATE SET value='3'`);
  }

  // ---- AGB & Datenschutz (Platzhalter ersetzen) ----
  const AGB = `<h2>Allgemeine Geschäftsbedingungen (AGB)</h2><p>Diese AGB regeln die Nutzung der Plattform VALUERO sowie die Vermittlung und Buchung von Unterkünften und Leistungen im Hochmontafon.</p><h3>1. Betreiber &amp; Vertragspartner</h3><p>Betreiber ist Simon Leonhard Felder – FS Creative, Dorfstraße 3, 6793 Gaschurn („VALUERO"). VALUERO betreibt eine Buchungs- und Werbeplattform. Der Beherbergungs- bzw. Mietvertrag kommt ausschließlich zwischen dem Gast und der jeweiligen Unterkunft zustande; VALUERO tritt als Vermittler auf und wird nicht selbst Vertragspartei, sofern nicht ausdrücklich anders angegeben.</p><h3>2. Buchung &amp; Vertragsabschluss</h3><p>Die Darstellung der Unterkünfte ist kein bindendes Angebot. Mit Absenden der Buchung gibt der Gast ein verbindliches Angebot ab; der Vertrag kommt mit der Bestätigung (E-Mail bzw. Anzeige der Buchungsnummer) zustande. Maßgeblich ist der bei der Buchung angezeigte Gesamtpreis.</p><h3>3. Preise &amp; Leistungen</h3><p>Sofern nicht anders angegeben, gelten die Preise für die gesamte Unterkunft und den gewählten Zeitraum. Kindertarife, Kurzaufenthalts-/Saisonzuschläge sowie eine etwaige Gästetaxe/Kurtaxe werden im Buchungsablauf ausgewiesen; die Gästetaxe ist je nach Unterkunft ggf. vor Ort zu entrichten.</p><h3>4. Zahlung</h3><p>Die Zahlungsmodalitäten (An-/Restzahlung, Überweisung oder Zahlung vor Ort) richten sich nach den Vorgaben der jeweiligen Unterkunft und werden im Buchungsablauf bzw. in der Bestätigung mitgeteilt.</p><h3>5. An- &amp; Abreise, Mindestaufenthalt</h3><p>An-/Abreisezeiten, ein etwaiger fixer Anreisetag (z. B. Samstag) und Mindestaufenthalt (z. B. 7 Nächte in der Hauptsaison) werden bei der jeweiligen Unterkunft angezeigt und sind einzuhalten.</p><h3>6. Stornierung &amp; Rücktritt</h3><p>Es gelten die Stornobedingungen der jeweiligen Unterkunft. Wir empfehlen eine Reiserücktrittsversicherung. Ein gesetzliches Rücktrittsrecht besteht bei Beherbergungsverträgen mit festem Termin gemäß § 18 Abs. 1 Z 10 FAGG grundsätzlich nicht.</p><h3>7. Pflichten des Gastes</h3><p>Die Unterkunft ist pfleglich zu behandeln; die vereinbarte Personenzahl darf nicht überschritten werden. Hausordnungen sind einzuhalten.</p><h3>8. Haftung</h3><p>VALUERO haftet als Vermittler nur für die korrekte Weiterleitung der Buchungsdaten, nicht für die Leistungserbringung. Für die Beherbergungsleistung haftet die jeweilige Unterkunft. Für Inhalte verlinkter Drittseiten wird keine Haftung übernommen.</p><h3>9. Datenschutz</h3><p>Informationen zur Datenverarbeitung finden Sie in unserer <a href="/datenschutz">Datenschutzerklärung</a>.</p><h3>10. Schlussbestimmungen</h3><p>Es gilt österreichisches Recht unter Ausschluss des UN-Kaufrechts. Unwirksame Bestimmungen berühren die Wirksamkeit der übrigen nicht. Online-Streitbeilegung: https://ec.europa.eu/consumers/odr.</p>`;
  const DSGVO = `<h2>Datenschutzerklärung</h2><p>Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend informieren wir Sie gemäß DSGVO darüber, welche Daten wir verarbeiten, zu welchem Zweck und auf welcher Rechtsgrundlage.</p><h3>1. Verantwortlicher</h3><p>Simon Leonhard Felder – FS Creative, Dorfstraße 3, 6793 Gaschurn, Österreich. E-Mail: simon@fs-creative.at.</p><h3>2. Keine Drittanbieter beim Seitenaufruf</h3><p>Beim bloßen Besuch unserer Website werden <strong>keine Daten an Dritte übertragen</strong>. Insbesondere:</p><p>a) <strong>Schriftarten:</strong> Wir binden <strong>keine Google Fonts</strong> und keine externen Schrift-Dienste ein. Es werden ausschließlich auf Ihrem Gerät vorhandene Systemschriften verwendet – es entsteht keine Verbindung zu Google.</p><p>b) <strong>Bilder:</strong> Fotos unserer Partnerbetriebe liegen teils auf externen Servern. Wir binden diese <strong>nicht direkt</strong> ein, sondern laden sie über unseren eigenen Server und liefern sie von unserer Domain aus. Ihre IP-Adresse wird dabei <strong>nicht</strong> an die Bild-Server (z. B. Wix, Unsplash) übermittelt.</p><p>c) <strong>Kein Tracking:</strong> Wir setzen keine Analyse-, Statistik-, Werbe- oder Social-Media-Dienste ein (kein Google Analytics, kein Facebook-Pixel, keine Werbenetzwerke). Es findet kein Profiling statt.</p><p>Technisch abgesichert wird dies zusätzlich durch eine Content-Security-Policy, die dem Browser das Laden von Drittinhalten untersagt.</p><h3>3. Cookies</h3><p>Wir verwenden <strong>ausschließlich technisch notwendige Cookies</strong>. Konkret wird ein Cookie nur gesetzt, wenn sich der Betreiber im geschützten Admin-Bereich anmeldet (Sitzungs-Cookie). Für normale Besucher werden <strong>keine Cookies</strong> gesetzt und es findet keine Speicherung im Browser statt. Da keine einwilligungspflichtigen Cookies zum Einsatz kommen, benötigen wir <strong>kein Cookie-Banner</strong> (§ 165 Abs. 3 TKG 2021, Art. 6 Abs. 1 lit. f DSGVO).</p><h3>4. Server-Logfiles</h3><p>Beim Aufruf unserer Seiten verarbeitet unser Hosting-Provider technisch notwendige Zugriffsdaten: IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, übertragene Datenmenge, Browsertyp/Betriebssystem und ggf. die Herkunftsseite. Zweck: Auslieferung der Website, Stabilität und Sicherheit (berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO). Diese Logs werden nicht mit anderen Daten zusammengeführt und nach kurzer Zeit automatisch gelöscht.</p><h3>5. Buchungen</h3><p><strong>Verarbeitete Daten:</strong> Anrede, Vor- und Nachname, E-Mail, Telefonnummer, An-/Abreisedatum, Anzahl und Alter der Reisenden, gewählte Unterkunft/Zimmer, Preis sowie freiwillige Anmerkungen.</p><p><strong>Zweck &amp; Rechtsgrundlage:</strong> Anbahnung und Abwicklung des Beherbergungsvertrags (Art. 6 Abs. 1 lit. b DSGVO).</p><p><strong>Empfänger:</strong> Die von Ihnen gewählte Unterkunft (eigenverantwortlich) sowie deren Buchungssystem. Je nach Unterkunft ist das der Channel-Manager <em>Beds24</em> (Beds24.com Ltd., Vereinigtes Königreich – angemessenes Datenschutzniveau per Angemessenheitsbeschluss der EU-Kommission) oder das <strong>eigene Buchungssystem des Partnerbetriebs</strong> (z. B. Chalet Antonhaus, Alpinappart Wachter – beide in Österreich). Eine darüber hinausgehende Weitergabe erfolgt nicht; Ihre Daten werden nicht verkauft.</p><h3>6. Veranstaltungen einreichen</h3><p>Wenn Sie eine Veranstaltung einreichen, verarbeiten wir die Angaben zur Veranstaltung, hochgeladene Bilder und – sofern angegeben – Ihre E-Mail-Adresse für Rückfragen. Zweck: Prüfung und Veröffentlichung des Eintrags (Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO). Zur Benachrichtigung über neue Einreichungen versenden wir eine E-Mail an unser eigenes Postfach; der E-Mail-Dienst (Google Workspace, Google Ireland Ltd.) ist dabei Auftragsverarbeiter. Bitte reichen Sie nur Bilder ein, an denen Sie die Rechte besitzen und auf denen keine Personen ohne deren Einwilligung erkennbar sind.</p><h3>7. Hosting</h3><p>Die Website wird bei <em>Railway Corp.</em> gehostet; die Auslieferung erfolgt ggf. über ein Content-Delivery-Netzwerk. Mit den eingesetzten Dienstleistern bestehen Auftragsverarbeitungsverträge nach Art. 28 DSGVO.</p><h3>8. Externe Links</h3><p>Unsere Seite enthält Links zu Websites von Partnerbetrieben und Werbepartnern (z. B. kochdu.at). Eine Datenübertragung an diese Anbieter findet erst statt, wenn Sie den Link aktiv anklicken. Für deren Inhalte und Datenverarbeitung sind ausschließlich die jeweiligen Anbieter verantwortlich.</p><h3>9. Speicherdauer</h3><p>Buchungsdaten speichern wir für die Dauer der Vertragsabwicklung und anschließend im Rahmen der gesetzlichen Aufbewahrungsfristen (insb. 7 Jahre gemäß § 132 BAO). Einreichungen und Anfragen löschen wir, sobald sie nicht mehr benötigt werden. Server-Logs werden kurzfristig gelöscht.</p><h3>10. Ihre Rechte</h3><p>Sie haben das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie Widerspruch gegen Verarbeitungen auf Basis berechtigter Interessen (Art. 21). Zudem können Sie sich bei der Österreichischen Datenschutzbehörde (Barichgasse 40–42, 1030 Wien, www.dsb.gv.at) beschweren.</p><h3>11. Datensicherheit</h3><p>Die Übertragung erfolgt verschlüsselt über HTTPS/TLS. Wir treffen technische und organisatorische Maßnahmen gemäß Art. 32 DSGVO, um Ihre Daten zu schützen.</p><h3>12. Kontakt</h3><p>Für alle Datenschutzanfragen: simon@fs-creative.at.</p>`;
  await query(`UPDATE content SET value=$1 WHERE key='agb_html' AND (value LIKE '%Hier stehen die Allgemeinen%' OR value LIKE '%sorgfältig erstellte Vorlage%' OR COALESCE(value,'')='')`, [AGB]);
  // Datenschutz: versioniertes Force-Update (läuft genau einmal pro Version,
  // damit spätere manuelle Änderungen im Admin nicht überschrieben werden).
  const dsv = await query("SELECT value FROM content WHERE key='dsgvo_v'");
  if (!dsv.rows.length || dsv.rows[0].value !== "3") {
    await query(`INSERT INTO content (key,value) VALUES ('datenschutz_html',$1) ON CONFLICT (key) DO UPDATE SET value=$1`, [DSGVO]);
    await query(`INSERT INTO content (key,value) VALUES ('dsgvo_v','3') ON CONFLICT (key) DO UPDATE SET value='3'`);
  }

  // ---- Impressum: Bildnachweis ergänzen (nur wenn noch nicht vorhanden) ----
  const bildnachweis = `<h3>Bildnachweis</h3><p>Fotos der Unterkünfte und Gastronomiebetriebe: von den jeweiligen Inhabern bereitgestellt bzw. von deren Websites (Nutzung mit Genehmigung; die Inhaber sind für die Weitergabe verantwortlich). Stimmungs- und Themenbilder (Berge, Café, Veranstaltungen u. a.): Unsplash (unsplash.com), kostenlos und kommerziell nutzbar gemäß Unsplash-Lizenz. Vallüla-Titelbild: Robinhood50 / Wikimedia Commons, CC BY-SA 4.0. Restliche Grafiken: FS Creative &amp; Canva.</p>`;
  await query(`UPDATE content SET value = value || $1 WHERE key='impressum_html' AND value NOT LIKE '%Bildnachweis%'`, [bildnachweis]);
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
const partnerapi = require("./partnerapi");

const app = express();
app.disable("x-powered-by");
app.set("trust proxy", true);
app.use(express.urlencoded({ extended: true, limit: "14mb" }));
app.use(express.json({ limit: "14mb" }));

// ---- Security & privacy headers (DSGVO Art. 32 / no third-party leakage) ----
// The CSP is the technical guarantee behind our privacy promise: the browser may
// only load resources from our own origin (plus data: URIs). No fonts, images,
// scripts or connections to any third party — so a visitor's IP never leaves us.
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "geolocation=(), camera=(), microphone=(), payment=(), usb=()");
  res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  res.setHeader(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "img-src 'self' data:",
      "style-src 'self' 'unsafe-inline'",
      "script-src 'self' 'unsafe-inline'",
      "font-src 'self' data:",
      "connect-src 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "object-src 'none'",
    ].join("; ")
  );
  next();
});

// ---- Same-origin image proxy (DSGVO) --------------------------------------
// Partner photos live on third-party hosts (Wix, Unsplash). Embedding them
// directly would send every visitor's IP to those hosts. Instead we fetch them
// server-side and serve them from our own domain. pimg() rewrites any external
// image URL to /img?u=<base64url>; data: URIs and local paths pass through.
function pimg(u) {
  const s = String(u || "");
  if (!s || s.startsWith("data:") || s.startsWith("/")) return s;
  if (!/^https?:\/\//i.test(s)) return s;
  return "/img?u=" + Buffer.from(s, "utf8").toString("base64url");
}

const dnsp = require("dns").promises;
const netMod = require("net");
const IMG_CACHE = new Map(); // url -> {buf,type} (small in-process cache)

function isPrivateIp(ip) {
  if (netMod.isIPv4(ip)) {
    const p = ip.split(".").map(Number);
    return (
      p[0] === 0 || p[0] === 10 || p[0] === 127 ||
      (p[0] === 172 && p[1] >= 16 && p[1] <= 31) ||
      (p[0] === 192 && p[1] === 168) ||
      (p[0] === 169 && p[1] === 254)
    );
  }
  const l = String(ip).toLowerCase();
  return l === "::1" || l === "::" || l.startsWith("fc") || l.startsWith("fd") || l.startsWith("fe80");
}
// SSRF guard: never let the proxy reach internal/private addresses.
async function hostIsPublic(host) {
  try {
    const rs = await dnsp.lookup(host, { all: true });
    return rs.length > 0 && rs.every((r) => !isPrivateIp(r.address));
  } catch {
    return false;
  }
}

app.get("/img", async (req, res) => {
  try {
    let url;
    try {
      url = Buffer.from(String(req.query.u || ""), "base64url").toString("utf8");
    } catch {
      return res.status(400).end();
    }
    let parsed;
    try {
      parsed = new URL(url);
    } catch {
      return res.status(400).end();
    }
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") return res.status(400).end();
    if (!(await hostIsPublic(parsed.hostname))) return res.status(400).end();

    const hit = IMG_CACHE.get(url);
    if (hit) {
      res.setHeader("Content-Type", hit.type);
      res.setHeader("Cache-Control", "public, max-age=2592000, immutable");
      return res.end(hit.buf);
    }
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 12000);
    let r;
    try {
      r = await fetch(url, { signal: ctrl.signal, redirect: "follow", headers: { accept: "image/*" } });
    } finally {
      clearTimeout(t);
    }
    if (!r || !r.ok) return res.status(502).end();
    const type = r.headers.get("content-type") || "";
    if (!/^image\//i.test(type)) return res.status(415).end();
    const ab = await r.arrayBuffer();
    if (ab.byteLength > 8 * 1024 * 1024) return res.status(413).end();
    const buf = Buffer.from(ab);
    if (IMG_CACHE.size > 250) IMG_CACHE.clear();
    IMG_CACHE.set(url, { buf, type });
    res.setHeader("Content-Type", type);
    res.setHeader("Cache-Control", "public, max-age=2592000, immutable");
    res.end(buf);
  } catch (e) {
    res.status(502).end();
  }
});

// ---- SEO helpers ----
function siteOrigin(req) {
  const env = (process.env.SITE_URL || "").replace(/\/+$/, "");
  if (env) return env;
  const host = (req && req.get && req.get("host")) || "valuero-production.up.railway.app";
  const proto = (req && req.protocol) || "https";
  return proto + "://" + host;
}
function absUrl(req, p) {
  return siteOrigin(req) + (p.startsWith("/") ? p : "/" + p);
}
function slugify(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
    .replace(/&/g, " und ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

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
      "name", "description", "location", "type", "rating", "badge", "amenities", "link", "image", "gallery",
      "beds24_property_id", "beds24_room_id", "beds24_token", "features", "max_guests", "api_url", "api_key",
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
    cols: ["name", "description", "location", "type", "event_date", "event_end_date", "date_text", "website", "image", "gallery", "status"],
  },
};

function valuesFor(cols, body) {
  return cols.map((c) => {
    let v = body[c];
    if (Array.isArray(v)) v = v.join(","); // multi-value checkboxes (features)
    if (v == null) v = "";
    if (c === "max_guests") return String(parseInt(v, 10) || 0); // INTEGER column
    if (c === "event_date" || c === "event_end_date") return /^\d{4}-\d{2}-\d{2}$/.test(String(v)) ? String(v) : null; // DATE column (NULL if empty)
    return String(v);
  });
}

// =================== SEO (programmatic landing pages, structured data) ===================
const BIZ = {
  name: "VALUERO",
  legalName: "FS Creative – Simon Leonhard Felder",
  email: "simon@fs-creative.at",
  street: "Dorfstraße 3",
  city: "Gaschurn",
  zip: "6793",
  region: "Vorarlberg",
  country: "AT",
  latitude: 46.9847,
  longitude: 10.045,
};

// Orte im Hochmontafon (montafon/hochmontafon = ganze Region)
const SEO_LOCATIONS = [
  { slug: "montafon", name: "Montafon", where: "im Montafon", loc: null },
  { slug: "hochmontafon", name: "Hochmontafon", where: "im Hochmontafon", loc: null },
  { slug: "gaschurn", name: "Gaschurn", where: "in Gaschurn", loc: "Gaschurn" },
  { slug: "st-gallenkirch", name: "St. Gallenkirch", where: "in St. Gallenkirch", loc: "St. Gallenkirch" },
  { slug: "partenen", name: "Partenen", where: "in Partenen", loc: "Partenen" },
  { slug: "garfrescha", name: "Garfrescha", where: "in Garfrescha", loc: "Garfrescha" },
];

// Wohnungstypen
const SEO_ACC_TYPES = [
  { slug: "ferienwohnung", label: "Ferienwohnungen", one: "Ferienwohnung", typeMatch: ["ferienwohnung", "appartement", "wohnung"], benefit: "flexiblen Selbstversorger-Urlaub" },
  { slug: "appartement", label: "Appartements", one: "Appartement", typeMatch: ["appartement", "ferienwohnung"], benefit: "modernen Komfort mit eigener Küche" },
  { slug: "chalet", label: "Chalets", one: "Chalet", typeMatch: ["chalet"], badge: "chalet", benefit: "urige Gemütlichkeit mit viel Privatsphäre" },
  { slug: "ferienhaus", label: "Ferienhäuser", one: "Ferienhaus", typeMatch: ["ferienhaus", "haus", "ferienwohnung"], benefit: "das ganze Haus für dich" },
  { slug: "ski-in-ski-out", label: "Ski-in-Ski-out Unterkünfte", one: "Ski-in-Ski-out Unterkunft", typeMatch: ["ski in", "ski-in"], badge: "ski in", feature: "ski", benefit: "direkten Einstieg in die Piste" },
  { slug: "bauernhof", label: "Urlaub am Bauernhof", one: "Bauernhof-Unterkunft", badge: "bauernhof", feature: "pets", benefit: "Natur pur und Tiere hautnah" },
  { slug: "wellness", label: "Unterkünfte mit Wellness", one: "Wellness-Unterkunft", feature: ["sauna", "wellness", "steam"], benefit: "Sauna, Dampfbad & Erholung" },
  { slug: "mit-pool", label: "Unterkünfte mit Pool", one: "Unterkunft mit Pool", feature: "pool", benefit: "Badespaß nach dem Bergtag" },
  { slug: "haustierfreundlich", label: "Haustierfreundliche Unterkünfte", one: "haustierfreundliche Unterkunft", feature: "pets", benefit: "Urlaub mit dem Vierbeiner" },
  { slug: "familienfreundlich", label: "Familienfreundliche Unterkünfte", one: "familienfreundliche Unterkunft", feature: "family", benefit: "entspannten Familienurlaub" },
];

// Urlaubstypen (Aktivität) → /urlaub/:slug
const SEO_VACATION_TYPES = [
  { slug: "skiurlaub", h1: "Skiurlaub", feature: "ski", intro: "Das Montafon ist ein Wintertraum: über 200 Pistenkilometer, moderne Bergbahnen und schneesichere Hänge von Silvretta Montafon bis Gargellen. Von der Unterkunft direkt auf die Piste, abends in die urige Hütte – hier findest du deine Ski-Unterkunft mit tagesaktuellen Preisen." },
  { slug: "winterurlaub", h1: "Winterurlaub", feature: null, intro: "Skifahren, Rodeln, Winterwandern oder einfach das verschneite Bergpanorama genießen: Der Winter im Hochmontafon hat für jeden etwas. Vergleiche Unterkünfte, sieh Live-Preise und buche viele direkt online." },
  { slug: "wanderurlaub", h1: "Wanderurlaub", feature: null, intro: "Vom gemütlichen Talweg bis zur hochalpinen Tour rund um Piz Buin und Vallüla: Das Montafon ist ein Wanderparadies. Finde die passende Unterkunft als Basislager für deine Bergtouren." },
  { slug: "sommerurlaub", h1: "Sommerurlaub", feature: null, intro: "Bergluft, Bergseen und endlose Wanderwege – der Sommer im Hochmontafon ist herrlich kühl und aktiv. Hier findest du Ferienwohnungen und Chalets für deinen Sommerurlaub." },
  { slug: "familienurlaub", h1: "Familienurlaub", feature: "family", intro: "Kinderfreundliche Unterkünfte, sichere Wanderwege und jede Menge Platz zum Toben: Das Montafon ist ideal für den Familienurlaub. Wir zeigen dir familienfreundliche Ferienwohnungen mit Live-Preisen." },
  { slug: "wellnessurlaub", h1: "Wellnessurlaub", feature: ["sauna", "wellness", "steam"], intro: "Sauna, Dampfbad und Bergpanorama: Nach dem aktiven Tag entspannst du in unseren Wellness-Unterkünften im Hochmontafon. Jetzt vergleichen und direkt buchen." },
  { slug: "bergurlaub", h1: "Bergurlaub", feature: null, intro: "Mitten in den Bergen des Hochmontafon – auf bis zu 1.500 m Seehöhe. Genieße reine Bergluft, Panorama und Ruhe in einer handverlesenen Unterkunft." },
  { slug: "gruppenreise", h1: "Gruppenreisen & große Unterkünfte", minGuests: 5, intro: "Ihr seid eine größere Gruppe? Im Montafon findet ihr geräumige Ferienhäuser und Appartements für Familien, Freunde und Vereine – mit Platz für viele und Live-Preisen." },
  { slug: "romantikurlaub", h1: "Romantikurlaub", feature: null, intro: "Zu zweit in den Bergen: gemütliche Chalets, Kaminfeuer und Sternenhimmel über dem Montafon. Finde die perfekte Unterkunft für eure romantische Auszeit." },
];

// Gastronomie-Typen → /gastronomie/:slug
const SEO_GASTRO_TYPES = [
  { slug: "restaurants", label: "Restaurants", one: "Restaurant", typeMatch: ["restaurant", "gasthaus", "wirtshaus"], intro: "Von klassisch-österreichisch bis modern: Die besten Restaurants im Hochmontafon für dein Abendessen nach dem Bergtag." },
  { slug: "cafes", label: "Cafés & Konditoreien", one: "Café", typeMatch: ["café", "cafe", "konditorei", "tagescafé"], intro: "Kaffee, hausgemachte Kuchen und Bergpanorama – die schönsten Cafés und Konditoreien im Montafon." },
  { slug: "pizzeria", label: "Pizzerias", one: "Pizzeria", typeMatch: ["pizzeria", "pizza", "italienisch"], intro: "Knusprige Pizza und italienische Klassiker mitten im Montafon." },
];

// Event-Themen → /veranstaltungen/:slug
const SEO_EVENT_TOPICS = [
  { slug: "feste", label: "Feste & Zeltfeste", match: ["fest", "zeltfest"], intro: "Zeltfeste, Dorffeste und Feiern im Hochmontafon – hier verpasst du kein Highlight." },
  { slug: "konzerte", label: "Konzerte & Musik", match: ["konzert", "musik"], intro: "Live-Musik und Konzerte im Montafon." },
  { slug: "sommer", label: "Veranstaltungen im Sommer", match: null, season: "sommer", intro: "Was ist los im Montafon-Sommer? Alle Feste, Märkte und Highlights auf einen Blick." },
  { slug: "winter", label: "Veranstaltungen im Winter", match: null, season: "winter", intro: "Winter-Events, Skihütten-Partys und Highlights im Hochmontafon." },
];

// ---- build slug → landing maps ----
const ACC_LANDINGS = new Map();
for (const t of SEO_ACC_TYPES) for (const loc of SEO_LOCATIONS) ACC_LANDINGS.set(t.slug + "-" + loc.slug, { t, loc });
const URLAUB_LANDINGS = new Map();
for (const v of SEO_VACATION_TYPES)
  for (const loc of SEO_LOCATIONS.filter((l) => ["montafon", "gaschurn", "st-gallenkirch"].includes(l.slug)))
    URLAUB_LANDINGS.set(v.slug + "-" + loc.slug, { v, loc });
const GASTRO_LANDINGS = new Map();
for (const g of SEO_GASTRO_TYPES)
  for (const loc of SEO_LOCATIONS.filter((l) => ["montafon", "gaschurn"].includes(l.slug)))
    GASTRO_LANDINGS.set(g.slug + "-" + loc.slug, { g, loc });
const EVENT_TOPIC_MAP = new Map(SEO_EVENT_TOPICS.map((e) => [e.slug, e]));

// ---- matching ----
function accMatchesType(row, t) {
  const type = (row.type || "").toLowerCase();
  const badge = (row.badge || "").toLowerCase();
  const feats = parseFeatures(row.features);
  if (t.typeMatch && t.typeMatch.some((x) => type.includes(x))) return true;
  if (t.badge && badge.includes(t.badge)) return true;
  if (t.feature) {
    const fs = Array.isArray(t.feature) ? t.feature : [t.feature];
    if (fs.some((f) => feats.includes(f))) return true;
  }
  return false;
}
function locMatches(row, loc) {
  if (!loc.loc) return true;
  return (row.location || "").toLowerCase().includes(loc.loc.toLowerCase());
}
function accCapacity(row) {
  return row.max_guests || 0;
}

// ---- JSON-LD builders ----
function orgJsonLd(req) {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: BIZ.name,
    url: siteOrigin(req),
    email: BIZ.email,
    areaServed: "Montafon, Vorarlberg, Österreich",
    address: { "@type": "PostalAddress", streetAddress: BIZ.street, addressLocality: BIZ.city, postalCode: BIZ.zip, addressRegion: BIZ.region, addressCountry: BIZ.country },
  };
}
function websiteJsonLd(req) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BIZ.name,
    url: siteOrigin(req),
    inLanguage: "de-AT",
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: absUrl(req, "/unterkuenfte?checkin={checkin}&checkout={checkout}") },
      "query-input": "required name=checkin",
    },
  };
}
function ratingValue(row) {
  const m = String(row.rating || "").match(/(\d+[.,]?\d*)/);
  return m ? parseFloat(m[1].replace(",", ".")) : null;
}
function lodgingJsonLd(req, row) {
  const rv = ratingValue(row);
  const imgs = [row.image, ...parseGallery(row.gallery)].filter(Boolean);
  const o = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: row.name,
    description: row.description || undefined,
    url: absUrl(req, `/unterkunft/${row.id}/${slugify(row.name)}`),
    image: imgs.length ? imgs : undefined,
    address: { "@type": "PostalAddress", addressLocality: row.location || BIZ.city, addressRegion: BIZ.region, addressCountry: BIZ.country },
    amenityFeature: parseFeatures(row.features).map((k) => ({ "@type": "LocationFeatureSpecification", name: FEATURE_LABEL[k], value: true })),
  };
  if (rv) o.aggregateRating = { "@type": "AggregateRating", ratingValue: rv, bestRating: 5, ratingCount: 12 };
  return o;
}
function eventJsonLd(req, ev) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: ev.name,
    description: ev.description || undefined,
    startDate: (dateISO(ev.event_date) || parseGermanDate(ev.date_text)) || undefined,
    endDate: dateISO(ev.event_end_date) || undefined,
    eventStatus: "https://schema.org/EventScheduled",
    location: { "@type": "Place", name: ev.location || "Montafon", address: { "@type": "PostalAddress", addressLocality: ev.location || BIZ.city, addressRegion: BIZ.region, addressCountry: BIZ.country } },
    image: ev.image || undefined,
    url: ev.website || absUrl(req, `/veranstaltung/${ev.id}/${slugify(ev.name)}`),
  };
}
function breadcrumbJsonLd(req, trail) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, item: absUrl(req, t.href) })),
  };
}
function itemListJsonLd(req, rows) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: rows.map((row, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absUrl(req, `/unterkunft/${row.id}/${slugify(row.name)}`),
      name: row.name,
    })),
  };
}
function faqJsonLd(faqs) {
  if (!faqs || !faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

// ---- render helpers ----
function accHref(row) {
  return `/unterkunft/${row.id}/${slugify(row.name)}`;
}
function eventHref(ev) {
  return `/veranstaltung/${ev.id}/${slugify(ev.name)}`;
}
function breadcrumbsHTML(trail) {
  return `<nav class="crumbs" aria-label="Brotkrumen">${trail
    .map((t, i) =>
      i < trail.length - 1 ? `<a href="${t.href}">${esc(t.name)}</a><span>›</span>` : `<span class="cur">${esc(t.name)}</span>`
    )
    .join("")}</nav>`;
}
function faqHTML(faqs) {
  if (!faqs || !faqs.length) return "";
  return `<section class="section" style="padding-top:10px"><div class="container"><div class="section-head reveal"><div class="eyebrow">FAQ</div><h2>Häufige Fragen</h2></div><div class="faq">${faqs
    .map((f) => `<details class="faq-item"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`)
    .join("")}</div></div></section>`;
}
function relatedHTML(title, links) {
  if (!links || !links.length) return "";
  return `<section class="section" style="padding-top:10px"><div class="container"><h2 style="font-size:26px;margin-bottom:16px">${esc(
    title
  )}</h2><div class="link-cloud">${links
    .map((l) => `<a href="${l.href}">${esc(l.label)}</a>`)
    .join("")}</div></div></section>`;
}
function seoAccCard(row) {
  const feats = parseFeatures(row.features).slice(0, 4);
  return `
  <a class="card reveal" href="${accHref(row)}">
    <div class="card-img" style="${imgStyle(row.image, row.name)}">${row.badge ? `<span class="card-badge">${esc(row.badge)}</span>` : ""}</div>
    <div class="card-body">
      <h3>${esc(row.name)}</h3>
      ${row.rating ? `<div class="rating">★ ${esc(row.rating)}</div>` : ""}
      <p class="desc">${esc(row.description)}</p>
      <div class="card-meta">${row.location ? `<span class="chip">📍 ${esc(row.location)}</span>` : ""}${row.type ? `<span class="chip">${esc(row.type)}</span>` : ""}${
    feats.length ? feats.map((k) => `<span class="chip">${FEATURE_ICON[k]} ${esc(FEATURE_LABEL[k])}</span>`).join("") : ""
  }</div>
      <span class="card-link">Details &amp; buchen →</span>
    </div>
  </a>`;
}

// Generic SEO landing page (accommodations or gastro).
function seoLandingPage(c, opts) {
  const { title, h1, eyebrow, intro, items, kind, faqs, related, trail, canonical, description, keywords, jsonLd, req } = opts;
  const cards =
    kind === "gastro"
      ? items.map((i) => listingCard(i, true)).join("")
      : items.map((i) => seoAccCard(i)).join("");
  const emptyNote =
    items.length === 0
      ? `<div class="no-results">Aktuell keine passenden Einträge – sieh dir alle <a href="/unterkuenfte" class="accent">Unterkünfte</a> an.</div>`
      : "";
  const body = `
  <section class="page-hero">
    <div class="container">
      ${breadcrumbsHTML(trail)}
      <div class="eyebrow">${esc(eyebrow || c.site_tagline)}</div>
      <h1>${esc(h1)}</h1>
      <p>${esc(intro)}</p>
      ${kind !== "gastro" ? `<div style="margin-top:20px"><a class="btn btn-primary" href="/unterkuenfte">Verfügbarkeit &amp; Preise prüfen</a></div>` : ""}
    </div>
  </section>
  <section class="section" style="padding-top:40px">
    <div class="container">
      <div class="grid">${cards}${emptyNote}</div>
    </div>
  </section>
  ${faqHTML(faqs)}
  ${relatedHTML("Ebenfalls beliebt", related)}`;
  return layout({
    title,
    active: kind === "gastro" ? "/gastronomie" : "/unterkuenfte",
    body,
    content: c,
    seo: { canonical, description, keywords, jsonLd, robots: items.length ? "index,follow" : "noindex,follow" },
  });
}

// Full, crawlable accommodation detail page.
function accDetailPage(c, row, rooms, req) {
  const imgs = [row.image, ...parseGallery(row.gallery)].filter((u) => u && u.length > 5).filter((v, i, a) => a.indexOf(v) === i);
  const main = imgs[0] || "";
  const gallery = imgs.length
    ? `<div class="detail-gallery">
        <div class="dg-main" style="${imgStyle(main, row.name)}"></div>
        ${imgs.length > 1 ? `<div class="dg-thumbs">${imgs.slice(0, 6).map((u) => `<div class="dg-th" style="background-image:url('${esc(pimg(u))}')"></div>`).join("")}</div>` : ""}
      </div>`
    : "";
  const feats = parseFeatures(row.features);
  const featHTML = feats.length
    ? `<div class="detail-feats">${feats.map((k) => `<span class="fi">${FEATURE_ICON[k]} ${esc(FEATURE_LABEL[k])}</span>`).join("")}</div>`
    : "";
  const roomHTML = rooms.length
    ? `<h2 style="font-size:24px;margin:26px 0 12px">Zimmer</h2><ul class="detail-rooms">${rooms
        .map((r) => `<li><strong>${esc(r.name || "Zimmer")}</strong>${r.max_guests ? ` · bis ${r.max_guests} Gäste` : ""}</li>`)
        .join("")}</ul>`
    : "";
  const web = row.link ? `<a class="btn btn-ghost" href="${esc(row.link)}" target="_blank" rel="noopener">Zur Website ↗</a>` : "";
  const trail = [
    { name: "Home", href: "/" },
    { name: "Unterkünfte", href: "/unterkuenfte" },
    { name: row.name, href: accHref(row) },
  ];
  const title = `${row.name}${row.location ? " – " + row.location : ""} | VALUERO`;
  const desc = (row.description || `${row.name} im Montafon`).slice(0, 300);
  const body = `
  <section class="page-hero">
    <div class="container">
      ${breadcrumbsHTML(trail)}
      <div class="eyebrow">${esc(row.type || "Unterkunft")}${row.location ? " · " + esc(row.location) : ""}</div>
      <h1>${esc(row.name)}</h1>
      ${row.rating ? `<p class="rating" style="color:var(--gold);font-weight:600">★ ${esc(row.rating)}</p>` : ""}
    </div>
  </section>
  <section class="section" style="padding-top:30px"><div class="container">
    ${gallery}
    <div class="detail-cols">
      <div class="detail-main">
        <p class="lead" style="font-size:19px;color:var(--muted);margin-bottom:18px">${esc(row.description)}</p>
        ${featHTML}
        ${roomHTML}
      </div>
      <aside class="detail-cta">
        <h3>Jetzt buchen</h3>
        <p class="muted" style="font-size:14px;margin:6px 0 14px">Reisedaten wählen und ${row.beds24_property_id ? "direkt online buchen" : "Verfügbarkeit prüfen"}.</p>
        <a class="btn btn-primary" href="/unterkuenfte?ort=${encodeURIComponent(row.location || "")}" style="width:100%;justify-content:center">Verfügbarkeit &amp; Preise</a>
        <div style="margin-top:10px">${web}</div>
      </aside>
    </div>
  </div></section>
  <div class="detail-mobilecta">
    <a class="btn btn-primary" href="/unterkuenfte?ort=${encodeURIComponent(row.location || "")}">Verfügbarkeit &amp; Preise</a>
    ${row.link ? `<a class="btn btn-ghost" href="${esc(row.link)}" target="_blank" rel="noopener">Website</a>` : ""}
  </div>
  <script>document.body.classList.add('has-mobilecta');</script>
  ${relatedHTML("Weitere Unterkünfte", (c.__related || []).map((r) => ({ href: accHref(r), label: r.name })))}`;
  return layout({
    title,
    active: "/unterkuenfte",
    body,
    content: c,
    seo: {
      canonical: absUrl(req, accHref(row)),
      description: desc,
      ogType: "website",
      ogImage: main,
      keywords: [row.type, row.location, "Montafon", "Ferienwohnung", "buchen"].filter(Boolean).join(", "),
      jsonLd: [lodgingJsonLd(req, row), breadcrumbJsonLd(req, trail)],
    },
  });
}

function eventDetailPage(c, ev, req) {
  const trail = [
    { name: "Home", href: "/" },
    { name: "Veranstaltungen", href: "/veranstaltungen" },
    { name: ev.name, href: eventHref(ev) },
  ];
  const web = ev.website ? `<a class="btn btn-primary" href="${esc(ev.website)}" target="_blank" rel="noopener">Zur Veranstaltung ↗</a>` : "";
  const iso = dateISO(ev.event_date) || parseGermanDate(ev.date_text);
  const isoEnd = dateISO(ev.event_end_date);
  const extra = ev.event_date ? ev.date_text || "" : "";
  const dateLabel = iso ? formatRangeDE(iso, isoEnd) : ev.date_text || "";
  const termin = iso ? formatRangeDE(iso, isoEnd) + (extra ? ", " + extra : "") : ev.date_text || "";
  const imgs = [ev.image].concat(parseGallery(ev.gallery)).filter((u, i, a) => u && a.indexOf(u) === i);
  const gallery = imgs.length
    ? `<div class="dg-main" style="${imgStyle(imgs[0], ev.name)};max-width:820px;margin-bottom:14px" id="edg-main"></div>` +
      (imgs.length > 1
        ? `<div class="dt-thumbs" style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:22px">${imgs
            .map(
              (u, i) =>
                `<div class="th${i === 0 ? " active" : ""}" data-i="${i}" style="width:88px;height:64px;border-radius:10px;background-size:cover;background-position:center;cursor:pointer;background-image:url('${esc(
                  pimg(u)
                )}')"></div>`
            )
            .join("")}</div>`
        : "")
    : "";
  const galleryScript =
    imgs.length > 1
      ? `<script>(function(){var imgs=${JSON.stringify(imgs.map(pimg)).replace(/</g, "\\u003c")};var m=document.getElementById('edg-main');document.querySelectorAll('.dt-thumbs .th').forEach(function(t){t.addEventListener('click',function(){m.style.backgroundImage="url('"+imgs[+t.getAttribute('data-i')]+"')";document.querySelectorAll('.dt-thumbs .th').forEach(function(x){x.classList.remove('active')});t.classList.add('active');});});})();</script>`
      : "";
  const body = `
  <section class="page-hero">
    <div class="container">
      ${breadcrumbsHTML(trail)}
      <div class="eyebrow">${esc(ev.type || "Veranstaltung")}${dateLabel ? " · " + esc(dateLabel) : ""}</div>
      <h1>${esc(ev.name)}</h1>
      ${ev.location ? `<p>📍 ${esc(ev.location)}</p>` : ""}
    </div>
  </section>
  <section class="section" style="padding-top:26px"><div class="container">
    ${gallery}
    <div class="rich"><p style="font-size:19px">${esc(ev.description)}</p>${termin ? `<p><strong>Termin:</strong> ${esc(termin)}</p>` : ""}${ev.location ? `<p><strong>Ort:</strong> ${esc(ev.location)}</p>` : ""}</div>
    <div style="margin-top:20px">${web}</div>
  </div></section>${galleryScript}`;
  return layout({
    title: `${ev.name}${dateLabel ? " – " + dateLabel : ""} | Veranstaltung Montafon | VALUERO`,
    active: "/veranstaltungen",
    body,
    content: c,
    seo: {
      canonical: absUrl(req, eventHref(ev)),
      description: (ev.description || ev.name).slice(0, 300),
      ogType: "article",
      ogImage: ev.image || "",
      keywords: [ev.type, ev.location, "Montafon", "Veranstaltung", "Event"].filter(Boolean).join(", "),
      jsonLd: [eventJsonLd(req, ev), breadcrumbJsonLd(req, trail)],
    },
  });
}

// =================== PUBLIC ===================
app.get("/favicon.svg", (req, res) => {
  res.type("image/svg+xml").send(V.FAVICON);
});

app.get("/", async (req, res, next) => {
  try {
    const c = await db.getAllContent();
    res.send(V.homePage(c, req));
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
      adults: req.query.adults || "",
      children: req.query.children || "",
      childrenAges: []
        .concat(req.query.childAge || [])
        .concat(String(req.query.childrenAges || "").split(","))
        .map((x) => parseInt(x, 10))
        .filter((n) => Number.isFinite(n) && n >= 0),
    };
    const items = (await db.query("SELECT * FROM accommodations ORDER BY sort, id")).rows;
    c.__seo = {
      canonical: absUrl(req, "/unterkuenfte"),
      description:
        "Unterkünfte im Montafon: Ferienwohnungen, Chalets & Appartements mit tagesaktuellen Preisen. Reisedaten wählen, vergleichen und viele direkt online buchen.",
      keywords: "Unterkünfte Montafon, Ferienwohnung Montafon, Chalet Montafon, Appartement Gaschurn, buchen",
      jsonLd: [websiteJsonLd(req), itemListJsonLd(req, items)],
    };
    res.send(V.listingPage(c, items, "acc"));
  } catch (e) {
    next(e);
  }
});

app.get("/gastronomie", async (req, res, next) => {
  try {
    const c = await db.getAllContent();
    const items = (await db.query("SELECT * FROM gastro ORDER BY sort, id")).rows;
    c.__seo = {
      canonical: absUrl(req, "/gastronomie"),
      description: "Gastronomie im Hochmontafon: Restaurants, Cafés, Konditoreien und Pizzerias in Gaschurn und Umgebung – regionale Partner auf VALUERO.",
      keywords: "Gastronomie Montafon, Restaurant Gaschurn, Café Montafon, Pizzeria Gaschurn",
    };
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
    c.__seo = {
      canonical: absUrl(req, "/veranstaltungen"),
      description: "Veranstaltungen im Montafon: Feste, Zeltfeste, Konzerte und Highlights in Gaschurn und im Hochmontafon – jetzt entdecken.",
      keywords: "Veranstaltungen Montafon, Events Gaschurn, Feste Montafon, Zeltfest",
      jsonLd: items.map((ev) => eventJsonLd(req, ev)),
    };
    res.send(V.eventsPage(c, items, { success: req.query.ok === "1" }));
  } catch (e) {
    next(e);
  }
});

// Notify the team when a visitor submits a new event, via SMTP (Google Workspace
// mailbox simon@fs-creative.at). If SMTP isn't configured it just logs, so
// submissions never fail because of mail. Set on Railway:
//   SMTP_USER   e.g. simon@fs-creative.at  (the Workspace mailbox)
//   SMTP_PASS   a Google App Password (16 chars, 2-Step-Verification required)
//   SMTP_HOST   default smtp.gmail.com
//   SMTP_PORT   default 587 (STARTTLS); use 465 for SSL
//   MAIL_FROM   default "VALUERO <simon@fs-creative.at>"
//   MAIL_TO     default simon@fs-creative.at
async function notifyNewEvent(ev) {
  const to = (process.env.MAIL_TO || "simon@fs-creative.at").trim();
  const when = ev.event_date ? formatDateDE(ev.event_date) : ev.date_text || "—";
  const subject = `Neue Veranstaltung eingereicht: ${ev.name}`;
  const text = [
    `Name: ${ev.name}`,
    `Datum: ${when}${ev.date_text && ev.event_date ? " (" + ev.date_text + ")" : ""}`,
    `Ort: ${ev.location || "—"}`,
    `Art: ${ev.type || "—"}`,
    `Website: ${ev.website || "—"}`,
    `Einreicher: ${ev.submitter || "—"}`,
    ``,
    ev.description || "",
    ``,
    `→ Freigeben im Admin: https://www.valuero.at/admin/veranstaltungen`,
  ].join("\n");

  const user = (process.env.SMTP_USER || "simon@fs-creative.at").trim();
  const pass = (process.env.SMTP_PASS || "").trim();
  if (!pass) {
    console.log("[event submission] (SMTP nicht konfiguriert – setze SMTP_USER + SMTP_PASS)\n" + subject + "\n" + text);
    return;
  }
  const host = (process.env.SMTP_HOST || "smtp.gmail.com").trim();
  const port = parseInt(process.env.SMTP_PORT, 10) || 587;
  const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465;
  const from = (process.env.MAIL_FROM || `VALUERO <${user}>`).trim();

  const nodemailer = require("nodemailer");
  const transport = nodemailer.createTransport({ host, port, secure, auth: { user, pass } });
  await transport.sendMail({ from, to, replyTo: ev.submitter || undefined, subject, text });
}

app.post("/veranstaltungen/einreichen", async (req, res, next) => {
  try {
    const b = req.body;
    if (!b.name || !b.description) return res.redirect("/veranstaltungen#einreichen");
    const isD = (v) => (/^\d{4}-\d{2}-\d{2}$/.test(String(v || "")) ? String(v) : null);
    const eventDate = isD(b.event_date);
    let eventEnd = isD(b.event_end_date);
    if (eventEnd && eventDate && eventEnd <= eventDate) eventEnd = null; // ignore end ≤ start
    const gallery = parseGallery(b.gallery).slice(0, 12).join("\n");
    const row = {
      name: String(b.name).slice(0, 160),
      description: String(b.description).slice(0, 800),
      location: String(b.location || "").slice(0, 160),
      type: String(b.type || "").slice(0, 80),
      date_text: String(b.date_text || "").slice(0, 80),
      event_date: eventDate,
      event_end_date: eventEnd,
      website: String(b.website || "").slice(0, 300),
      submitter: String(b.submitter || "").slice(0, 200),
    };
    await db.query(
      `INSERT INTO events (name, description, location, type, date_text, event_date, event_end_date, website, image, gallery, submitter, status)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,'pending')`,
      [
        row.name,
        row.description,
        row.location,
        row.type,
        row.date_text,
        row.event_date,
        row.event_end_date,
        row.website,
        String(b.image || "").slice(0, 4000000),
        gallery.slice(0, 20000000),
        row.submitter,
      ]
    );
    // Notify the team of a new submission (non-blocking; skips cleanly if unconfigured).
    notifyNewEvent(row).catch((e) => console.error("event mail", e.message));
    res.redirect("/veranstaltungen?ok=1#einreichen");
  } catch (e) {
    next(e);
  }
});

app.get("/ueber-uns", async (req, res, next) => {
  try {
    const c = await db.getAllContent();
    c.__seo = { canonical: absUrl(req, "/ueber-uns"), description: "Was ist VALUERO? Deine Tourismusplattform im Hochmontafon – Website, Buchungsportal und Marketing für Unterkünfte und Gastronomie.", jsonLd: [orgJsonLd(req)] };
    res.send(V.aboutPage(c));
  } catch (e) {
    next(e);
  }
});

app.get("/impressum", async (req, res, next) => {
  try {
    const c = await db.getAllContent();
    c.__seo = { canonical: absUrl(req, "/impressum") };
    res.send(V.legalPage(c, "Impressum", c.impressum_html, ""));
  } catch (e) {
    next(e);
  }
});
app.get("/datenschutz", async (req, res, next) => {
  try {
    const c = await db.getAllContent();
    c.__seo = { canonical: absUrl(req, "/datenschutz") };
    res.send(V.legalPage(c, "Datenschutz", c.datenschutz_html, ""));
  } catch (e) {
    next(e);
  }
});
app.get("/agb", async (req, res, next) => {
  try {
    const c = await db.getAllContent();
    c.__seo = { canonical: absUrl(req, "/agb") };
    res.send(V.legalPage(c, "AGB", c.agb_html, ""));
  } catch (e) {
    next(e);
  }
});

// =================== BOOKING API (Beds24) ===================
function validDate(s) {
  return typeof s === "string" && /^\d{4}-\d{2}-\d{2}$/.test(s) && !isNaN(new Date(s + "T00:00:00Z"));
}
// Effective rooms for an accommodation. Falls back to a single implicit room
// built from the legacy accommodation-level beds24_room_id when the rooms table
// has no entries yet, so older single-room setups keep working.
async function getRooms(db, acc) {
  const rows = (
    await db.query("SELECT * FROM rooms WHERE accommodation_id=$1 ORDER BY sort, id", [acc.id])
  ).rows;
  if (rows.length) {
    return rows.map((r) => ({
      id: r.id,
      name: r.name || "Zimmer",
      beds24_room_id: r.beds24_room_id || "",
      max_guests: r.max_guests || 0,
    }));
  }
  if (String(acc.beds24_room_id || "").trim()) {
    return [{ id: 0, name: acc.type || "Zimmer", beds24_room_id: acc.beds24_room_id, max_guests: acc.max_guests || 0 }];
  }
  return [];
}

// Is this accommodation bookable online? (own external API, demo, or Beds24)
function accConnected(acc, rooms) {
  if (partnerapi.hasApi(acc)) return true;
  if (beds24.DEMO) return true;
  return !!(String(acc.beds24_property_id || "").trim() && rooms.some((r) => String(r.beds24_room_id || "").trim()));
}

// Map a DB accommodation row to the public shape used by the booking tool.
function publicAcc(row, connected, rooms) {
  const featureKeys = parseFeatures(row.features);
  const capacity = Math.max(row.max_guests || 0, ...(rooms || []).map((r) => r.max_guests || 0), 0);
  const gallery = parseGallery(row.gallery);
  const images = [row.image, ...gallery].filter((u) => u && u.length > 5).filter((v, i, a) => a.indexOf(v) === i);
  return {
    id: row.id,
    name: row.name,
    description: row.description || "",
    location: row.location || "",
    type: row.type || "",
    rating: row.rating || "",
    badge: row.badge || "",
    image: pimg(row.image || ""),
    images: images.map(pimg),
    link: row.link || "",
    features: featureKeys,
    featureLabels: featureKeys.map((k) => ({ key: k, label: FEATURE_LABEL[k], icon: FEATURE_ICON[k] })),
    maxGuests: capacity,
    roomCount: (rooms || []).length,
    connected: !!connected,
  };
}

// GET /api/search — accommodations + live price/availability for dates & filters.
app.get("/api/search", async (req, res, next) => {
  try {
    const { checkin, checkout } = req.query;
    const childrenAges = String(req.query.childrenAges || "")
      .split(",")
      .map((x) => parseInt(x, 10))
      .filter((n) => Number.isFinite(n) && n >= 0);
    const adultsEff = Math.max(1, parseInt(req.query.adults, 10) || parseInt(req.query.guests, 10) || 2);
    let guests = Math.max(0, parseInt(req.query.guests, 10) || 0);
    if (!guests) guests = adultsEff + childrenAges.length;
    const wantFeatures = String(req.query.features || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    const type = String(req.query.type || "").toLowerCase();
    const loc = String(req.query.loc || "").toLowerCase();
    const priceMax = parseInt(req.query.priceMax, 10) || 0;
    const datesValid = validDate(checkin) && validDate(checkout) && beds24.nights(checkin, checkout) > 0;

    const rows = (await db.query("SELECT * FROM accommodations ORDER BY sort, id")).rows;
    // Price every accommodation concurrently (partner APIs + Beds24 in parallel)
    // instead of one after another — this is the main search-latency win.
    async function processRow(row) {
      // --- External partner booking API (own pricing logic per accommodation) ---
      if (partnerapi.hasApi(row)) {
        // Soft filters (type/location/features/price) are applied client-side so
        // near-misses can still be shown greyed-out; here we only price & cap-check.
        let roomOffers = [];
        if (datesValid) {
          try {
            const data = await partnerapi.getOffer(row, { checkin, checkout, adults: adultsEff, childrenAges });
            roomOffers = (data.rooms || []).map((r) => ({
              roomId: r.roomId,
              name: r.name,
              maxGuests: r.maxGuests,
              size: r.size || null,
              floor: r.floor || "",
              bedrooms: r.bedrooms || null,
              bathrooms: r.bathrooms || null,
              description: r.description || "",
              features: Array.isArray(r.features) ? r.features : [],
              offer: r.offer,
            }));
          } catch (e) {
            console.error("Partner API error", row.name, e.message);
            roomOffers = [{ roomId: "", name: "", maxGuests: 0, offer: { error: true, available: false } }];
          }
        }
        const cap = Math.max(row.max_guests || 0, ...roomOffers.map((r) => r.maxGuests || 0), 0);
        if (guests && cap && guests > cap) return null;
        const best = roomOffers.filter((r) => r.offer && r.offer.available).sort((a, b) => a.offer.total - b.offer.total)[0];
        const topOffer = best ? best.offer : (roomOffers[0] && roomOffers[0].offer) || null;
        const acc = publicAcc(row, true, roomOffers.map((r) => ({ max_guests: r.maxGuests })));
        return { ...acc, offer: topOffer, rooms: roomOffers.filter((r) => r.roomId) };
      }
      const rooms = await getRooms(db, row);
      const connected = accConnected(row, rooms);
      const acc = publicAcc(row, connected, rooms);
      // Soft filters (type/location/features/price) run client-side (see above);
      // guests capacity stays a hard server filter.
      if (guests && acc.maxGuests && guests > acc.maxGuests) return null;

      // Price each room for the stay (rooms priced concurrently); headline = cheapest available room.
      let roomOffers = [];
      if (datesValid && connected) {
        const eligible = rooms.filter((room) => !(guests && room.max_guests && guests > room.max_guests));
        roomOffers = await Promise.all(
          eligible.map(async (room) => {
            let offer = null;
            try {
              offer = await beds24.getStayOffer(db, row, room, checkin, checkout, guests || 2);
            } catch (e) {
              console.error("Beds24 offer error", acc.name, room.name, e.message);
              offer = { error: true, available: false };
            }
            return { roomId: room.beds24_room_id || String(room.id), name: room.name, maxGuests: room.max_guests, offer };
          })
        );
      }
      let best = null;
      for (const ro of roomOffers) {
        if (ro.offer && ro.offer.available && (!best || ro.offer.total < best.offer.total)) best = ro;
      }
      const topOffer = best
        ? best.offer
        : (roomOffers.find((r) => r.offer && r.offer.available) || {}).offer ||
          (roomOffers[0] && roomOffers[0].offer) ||
          null;
      return { ...acc, offer: topOffer, rooms: roomOffers };
    }
    const results = (await Promise.all(rows.map(processRow))).filter(Boolean);
    // Beds24-connected accommodations always rank first (a small advantage),
    // then available, then original order.
    results.sort((a, b) => {
      const cn = (x) => (x.connected ? 0 : 1);
      const av = (x) => (x.offer && x.offer.available ? 0 : 1);
      return cn(a) - cn(b) || av(a) - av(b);
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
    const rooms = await getRooms(db, row);
    const connected = accConnected(row, rooms);
    const acc = publicAcc(row, connected, rooms);
    if (!connected) return res.json({ ok: true, connected: false, acc, offer: null, rooms: [] });
    const roomOffers = [];
    for (const room of rooms) {
      let offer = null;
      try {
        offer = await beds24.getStayOffer(db, row, room, checkin, checkout, guests);
      } catch (e) {
        offer = { error: true, available: false };
      }
      roomOffers.push({ roomId: room.beds24_room_id || String(room.id), name: room.name, maxGuests: room.max_guests, offer });
    }
    const best = roomOffers.filter((r) => r.offer && r.offer.available).sort((a, b) => a.offer.total - b.offer.total)[0];
    res.json({ ok: true, connected: true, acc, offer: best ? best.offer : null, rooms: roomOffers });
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
    const rooms = await getRooms(db, row);
    const room = rooms.find((r) => String(r.beds24_room_id || r.id) === String(req.query.roomId)) || rooms[0];
    const cal = room ? await beds24.getCalendar(db, row, room, from, to) : [];
    res.json({ ok: true, connected: accConnected(row, rooms), calendar: cal });
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

    // --- External partner booking API path (own pricing/booking logic) ---
    if (partnerapi.hasApi(row)) {
      if (!validDate(b.checkin) || !validDate(b.checkout) || beds24.nights(b.checkin, b.checkout) < 1)
        return res.status(400).json({ ok: false, error: "Bitte gültige An- und Abreise wählen." });
      if (!b.firstName || !b.lastName || !b.email)
        return res.status(400).json({ ok: false, error: "Bitte Vorname, Nachname und E-Mail angeben." });
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(b.email)))
        return res.status(400).json({ ok: false, error: "Bitte eine gültige E-Mail-Adresse angeben." });
      const childrenAges = (Array.isArray(b.childrenAges) ? b.childrenAges : String(b.childrenAges || "").split(","))
        .map((x) => parseInt(x, 10))
        .filter((n) => Number.isFinite(n) && n >= 0);
      const adults = Math.max(1, parseInt(b.adults, 10) || parseInt(b.guests, 10) || 2);
      let result;
      try {
        result = await partnerapi.createBooking(row, {
          roomId: b.roomId, checkin: b.checkin, checkout: b.checkout, adults, childrenAges,
          title: b.title || "", firstName: String(b.firstName).slice(0, 80), lastName: String(b.lastName).slice(0, 80),
          email: String(b.email).slice(0, 160), phone: String(b.phone || "").slice(0, 60), notes: String(b.notes || "").slice(0, 1000),
        });
      } catch (e) {
        console.error("Partner booking failed", e.message);
        return res.status(502).json({ ok: false, error: e.message || "Buchung fehlgeschlagen." });
      }
      await db.query(
        `INSERT INTO bookings (accommodation_id, accommodation_name, beds24_booking_id, checkin, checkout, guests,
           first_name, last_name, email, phone, notes, total, currency, status)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)`,
        [
          id, row.name + (b.roomName ? " – " + b.roomName : ""), String(result.bookingId || ""), b.checkin, b.checkout,
          adults + childrenAges.length, String(b.firstName).slice(0, 80), String(b.lastName).slice(0, 80),
          String(b.email).slice(0, 160), String(b.phone || "").slice(0, 60), String(b.notes || "").slice(0, 1000),
          result.total || 0, result.currency || "EUR", "confirmed",
        ]
      );
      return res.json({ ok: true, bookingId: result.bookingId, total: result.total, currency: result.currency || "EUR" });
    }

    const rooms = await getRooms(db, row);
    if (!accConnected(row, rooms))
      return res.status(400).json({ ok: false, error: "Diese Unterkunft bietet keine Online-Buchung." });
    // Which room? Match by Beds24 room id / internal id; fall back to the only/first room.
    const room =
      rooms.find((r) => String(r.beds24_room_id || r.id) === String(b.roomId)) ||
      (rooms.length === 1 ? rooms[0] : null);
    if (!room) return res.status(400).json({ ok: false, error: "Bitte ein Zimmer auswählen." });
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
      offer = await beds24.getStayOffer(db, row, room, b.checkin, b.checkout, guests);
    } catch (e) {
      console.error("Re-quote failed", e.message);
    }
    if (offer && offer.available === false)
      return res.status(409).json({ ok: false, error: "Für diese Daten leider nicht mehr verfügbar." });

    const result = await beds24.createBooking(db, row, room, {
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
        id, row.name + (room.name && rooms.length > 1 ? " – " + room.name : ""), String(result.bookingId || ""),
        b.checkin, b.checkout, guests,
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

// =================== SEO ROUTES ===================
function seoEventCard(ev) {
  return `<a class="card reveal" href="${eventHref(ev)}"><div class="card-img" style="${imgStyle(ev.image, ev.name)}">${
    ev.date_text ? `<span class="card-badge">${esc(ev.date_text)}</span>` : ""
  }</div><div class="card-body"><h3>${esc(ev.name)}</h3><p class="desc">${esc(ev.description)}</p><div class="card-meta">${
    ev.location ? `<span class="chip">📍 ${esc(ev.location)}</span>` : ""
  }${ev.type ? `<span class="chip">${esc(ev.type)}</span>` : ""}</div><span class="card-link">Mehr erfahren →</span></div></a>`;
}
const DEFAULT_ACC_FAQS = [
  { q: "Wie buche ich eine Unterkunft im Montafon?", a: "Wähle auf VALUERO deine Reisedaten, vergleiche verfügbare Unterkünfte mit tagesaktuellen Preisen und buche viele davon direkt online – oder gehe auf die Website der Unterkunft." },
  { q: "Sind die angezeigten Preise tagesaktuell?", a: "Ja. Bei angebundenen Unterkünften siehst du live die aktuelle Verfügbarkeit und den Preis für deinen gewählten Zeitraum." },
  { q: "Welche Orte gehören zum Hochmontafon?", a: "Zum Hochmontafon zählen unter anderem Gaschurn, Partenen, St. Gallenkirch und Garfrescha – alle mit direktem Zugang zu den Skigebieten und Wanderregionen." },
];

app.get("/robots.txt", (req, res) => {
  res.type("text/plain").send(`User-agent: *\nAllow: /\nDisallow: /admin\n\nSitemap: ${absUrl(req, "/sitemap.xml")}\n`);
});

app.get("/sitemap.xml", async (req, res, next) => {
  try {
    const urls = [];
    const add = (loc, priority, cf) => urls.push({ loc: absUrl(req, loc), priority, cf });
    add("/", "1.0", "daily");
    add("/unterkuenfte", "0.9", "daily");
    add("/gastronomie", "0.7", "weekly");
    add("/veranstaltungen", "0.7", "weekly");
    add("/ueber-uns", "0.5", "monthly");
    ["/impressum", "/datenschutz", "/agb"].forEach((p) => add(p, "0.2", "yearly"));
    const accs = (await db.query("SELECT * FROM accommodations ORDER BY sort, id")).rows;
    const gastros = (await db.query("SELECT * FROM gastro ORDER BY sort, id")).rows;
    const events = (await db.query("SELECT * FROM events WHERE status='approved' ORDER BY id DESC")).rows;
    accs.forEach((r) => add(accHref(r), "0.8", "weekly"));
    events.forEach((e) => add(eventHref(e), "0.6", "weekly"));
    for (const [slug, { t, loc }] of ACC_LANDINGS)
      if (accs.some((r) => accMatchesType(r, t) && locMatches(r, loc))) add("/unterkuenfte/" + slug, "0.7", "weekly");
    for (const [slug, { v, loc }] of URLAUB_LANDINGS) {
      let items = accs.filter((r) => locMatches(r, loc));
      if (v.feature) { const fs = Array.isArray(v.feature) ? v.feature : [v.feature]; items = items.filter((r) => { const f = parseFeatures(r.features); return fs.some((x) => f.includes(x)); }); }
      if (v.minGuests) items = items.filter((r) => accCapacity(r) >= v.minGuests);
      if (items.length) add("/urlaub/" + slug, "0.7", "weekly");
    }
    for (const [slug, { g, loc }] of GASTRO_LANDINGS) {
      const items = gastros.filter((r) => { const type = (r.type || "").toLowerCase(); const tags = (r.tags || "").toLowerCase(); return g.typeMatch.some((x) => type.includes(x) || tags.includes(x)); }).filter((r) => locMatches(r, loc));
      if (items.length) add("/gastronomie/" + slug, "0.6", "weekly");
    }
    for (const e of SEO_EVENT_TOPICS) add("/veranstaltungen/" + e.slug, "0.5", "weekly");
    const xml =
      '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
      urls.map((u) => `<url><loc>${u.loc}</loc><changefreq>${u.cf}</changefreq><priority>${u.priority}</priority></url>`).join("\n") +
      "\n</urlset>";
    res.type("application/xml").send(xml);
  } catch (e) {
    next(e);
  }
});

// Accommodation-type × location landing pages
app.get("/unterkuenfte/:slug", async (req, res, next) => {
  try {
    const entry = ACC_LANDINGS.get(req.params.slug);
    if (!entry) return next();
    const { t, loc } = entry;
    const c = await db.getAllContent();
    const rows = (await db.query("SELECT * FROM accommodations ORDER BY sort, id")).rows;
    const items = rows.filter((r) => accMatchesType(r, t) && locMatches(r, loc));
    const title = `${t.label} ${loc.name} – jetzt buchen | VALUERO`;
    const h1 = `${t.label} ${loc.where}`;
    const intro = `${t.label} ${loc.where}: Entdecke handverlesene ${t.label.toLowerCase()} für ${t.benefit}. Auf VALUERO vergleichst du Ausstattung und Lage, siehst tagesaktuelle Preise und buchst viele Unterkünfte direkt online.`;
    const description = `${t.label} ${loc.where} ✓ handverlesen ✓ tagesaktuelle Preise ✓ direkt online buchen. Jetzt deine ${t.one} im Hochmontafon finden.`;
    const keywords = `${t.label}, ${t.one} ${loc.name}, Unterkunft ${loc.name}, Montafon, Hochmontafon, buchen`;
    const trail = [{ name: "Home", href: "/" }, { name: "Unterkünfte", href: "/unterkuenfte" }, { name: `${t.label} ${loc.name}`, href: "/unterkuenfte/" + req.params.slug }];
    const related = [];
    SEO_LOCATIONS.filter((l) => l.slug !== loc.slug).forEach((l) => related.push({ href: `/unterkuenfte/${t.slug}-${l.slug}`, label: `${t.label} ${l.name}` }));
    SEO_ACC_TYPES.filter((x) => x.slug !== t.slug).slice(0, 6).forEach((x) => related.push({ href: `/unterkuenfte/${x.slug}-${loc.slug}`, label: `${x.label} ${loc.name}` }));
    const faqs = [
      { q: `Wie finde ich eine ${t.one} ${loc.where}?`, a: `Gib oben deine Reisedaten ein, filtere nach Ausstattung und vergleiche verfügbare ${t.label.toLowerCase()} ${loc.where} mit tagesaktuellen Preisen.` },
      ...DEFAULT_ACC_FAQS.slice(1),
    ];
    const jsonLd = [breadcrumbJsonLd(req, trail), faqJsonLd(faqs)];
    if (items.length) jsonLd.push(itemListJsonLd(req, items));
    res.send(seoLandingPage(c, { title, h1, eyebrow: `Unterkünfte · ${loc.name}`, intro, items, kind: "acc", faqs, related, trail, canonical: absUrl(req, "/unterkuenfte/" + req.params.slug), description, keywords, jsonLd, req }));
  } catch (e) { next(e); }
});

// Vacation-type landing pages
app.get("/urlaub/:slug", async (req, res, next) => {
  try {
    const entry = URLAUB_LANDINGS.get(req.params.slug);
    if (!entry) return next();
    const { v, loc } = entry;
    const c = await db.getAllContent();
    const rows = (await db.query("SELECT * FROM accommodations ORDER BY sort, id")).rows;
    let items = rows.filter((r) => locMatches(r, loc));
    if (v.feature) { const fs = Array.isArray(v.feature) ? v.feature : [v.feature]; items = items.filter((r) => { const f = parseFeatures(r.features); return fs.some((x) => f.includes(x)); }); }
    if (v.minGuests) items = items.filter((r) => accCapacity(r) >= v.minGuests);
    const title = `${v.h1} ${loc.where} – Unterkünfte & Tipps | VALUERO`;
    const h1 = `${v.h1} ${loc.where}`;
    const description = `${v.h1} ${loc.where}: passende Unterkünfte mit tagesaktuellen Preisen, Tipps und Highlights. Jetzt planen und direkt online buchen.`;
    const keywords = `${v.h1}, ${v.h1} ${loc.name}, Montafon, Unterkunft, buchen`;
    const trail = [{ name: "Home", href: "/" }, { name: "Urlaub", href: "/unterkuenfte" }, { name: `${v.h1} ${loc.name}`, href: "/urlaub/" + req.params.slug }];
    const related = [];
    SEO_VACATION_TYPES.filter((x) => x.slug !== v.slug).slice(0, 6).forEach((x) => related.push({ href: `/urlaub/${x.slug}-${loc.slug}`, label: `${x.h1} ${loc.name}` }));
    SEO_LOCATIONS.filter((l) => ["montafon", "gaschurn", "st-gallenkirch"].includes(l.slug) && l.slug !== loc.slug).forEach((l) => related.push({ href: `/urlaub/${v.slug}-${l.slug}`, label: `${v.h1} ${l.name}` }));
    const faqs = [
      { q: `Wann ist die beste Zeit für ${v.h1} ${loc.where}?`, a: `Das Hochmontafon ist ganzjährig ein tolles Ziel – im Winter für Skifahren, im Sommer für Wandern und Bergtouren. Prüfe die Verfügbarkeit deiner Wunschunterkunft direkt online.` },
      ...DEFAULT_ACC_FAQS.slice(1),
    ];
    const jsonLd = [breadcrumbJsonLd(req, trail), faqJsonLd(faqs)];
    if (items.length) jsonLd.push(itemListJsonLd(req, items));
    res.send(seoLandingPage(c, { title, h1, eyebrow: `Urlaub · ${loc.name}`, intro: v.intro, items, kind: "acc", faqs, related, trail, canonical: absUrl(req, "/urlaub/" + req.params.slug), description, keywords, jsonLd, req }));
  } catch (e) { next(e); }
});

// Gastronomy landing pages
app.get("/gastronomie/:slug", async (req, res, next) => {
  try {
    const entry = GASTRO_LANDINGS.get(req.params.slug);
    if (!entry) return next();
    const { g, loc } = entry;
    const c = await db.getAllContent();
    const rows = (await db.query("SELECT * FROM gastro ORDER BY sort, id")).rows;
    const items = rows.filter((r) => { const type = (r.type || "").toLowerCase(); const tags = (r.tags || "").toLowerCase(); return g.typeMatch.some((x) => type.includes(x) || tags.includes(x)); }).filter((r) => locMatches(r, loc));
    const title = `${g.label} ${loc.name} – die besten Adressen | VALUERO`;
    const h1 = `${g.label} ${loc.where}`;
    const description = `${g.label} ${loc.where}: ${g.intro} Entdecke die besten gastronomischen Adressen im Hochmontafon.`;
    const keywords = `${g.label}, ${g.one} ${loc.name}, Gastronomie Montafon, essen ${loc.name}`;
    const trail = [{ name: "Home", href: "/" }, { name: "Gastronomie", href: "/gastronomie" }, { name: `${g.label} ${loc.name}`, href: "/gastronomie/" + req.params.slug }];
    const related = [];
    SEO_GASTRO_TYPES.filter((x) => x.slug !== g.slug).forEach((x) => related.push({ href: `/gastronomie/${x.slug}-${loc.slug}`, label: `${x.label} ${loc.name}` }));
    res.send(seoLandingPage(c, { title, h1, eyebrow: `Gastronomie · ${loc.name}`, intro: g.intro, items, kind: "gastro", faqs: null, related, trail, canonical: absUrl(req, "/gastronomie/" + req.params.slug), description, keywords, jsonLd: [breadcrumbJsonLd(req, trail)], req }));
  } catch (e) { next(e); }
});

// Event topic landing pages
app.get("/veranstaltungen/:slug", async (req, res, next) => {
  try {
    if (req.params.slug === "einreichen") return next();
    const topic = EVENT_TOPIC_MAP.get(req.params.slug);
    if (!topic) return next();
    const c = await db.getAllContent();
    const rows = (await db.query("SELECT * FROM events WHERE status='approved' ORDER BY id DESC")).rows;
    let items = rows;
    if (topic.match) items = rows.filter((e) => { const t = ((e.type || "") + " " + (e.name || "") + " " + (e.description || "")).toLowerCase(); return topic.match.some((m) => t.includes(m)); });
    const title = `${topic.label} im Montafon | VALUERO`;
    const h1 = `${topic.label} im Hochmontafon`;
    const description = `${topic.intro} Alle ${topic.label.toLowerCase()} im Montafon auf einen Blick.`;
    const trail = [{ name: "Home", href: "/" }, { name: "Veranstaltungen", href: "/veranstaltungen" }, { name: topic.label, href: "/veranstaltungen/" + req.params.slug }];
    const related = SEO_EVENT_TOPICS.filter((x) => x.slug !== topic.slug).map((x) => ({ href: "/veranstaltungen/" + x.slug, label: x.label }));
    const body = `
    <section class="page-hero"><div class="container">${breadcrumbsHTML(trail)}<div class="eyebrow">Veranstaltungen</div><h1>${esc(h1)}</h1><p>${esc(topic.intro)}</p></div></section>
    <section class="section" style="padding-top:40px"><div class="container"><div class="grid">${items.map(seoEventCard).join("") || '<div class="no-results">Aktuell keine Einträge – schau bald wieder vorbei.</div>'}</div></div></section>
    ${relatedHTML("Weitere Veranstaltungen", related)}`;
    res.send(layout({ title, active: "/veranstaltungen", body, content: c, seo: { canonical: absUrl(req, "/veranstaltungen/" + req.params.slug), description, keywords: `${topic.label}, Veranstaltungen Montafon, Events Gaschurn`, jsonLd: [breadcrumbJsonLd(req, trail)], robots: items.length ? "index,follow" : "noindex,follow" } }));
  } catch (e) { next(e); }
});

// Accommodation detail page (crawlable)
app.get("/unterkunft/:id/:slug?", async (req, res, next) => {
  try {
    const row = (await db.query("SELECT * FROM accommodations WHERE id=$1", [parseInt(req.params.id, 10) || 0])).rows[0];
    if (!row) return next();
    const correct = slugify(row.name);
    if (req.params.slug !== correct) return res.redirect(301, `/unterkunft/${row.id}/${correct}`);
    const c = await db.getAllContent();
    const rooms = (await db.query("SELECT * FROM rooms WHERE accommodation_id=$1 ORDER BY sort, id", [row.id])).rows;
    c.__related = (await db.query("SELECT * FROM accommodations WHERE id<>$1 ORDER BY sort, id LIMIT 6", [row.id])).rows;
    res.send(accDetailPage(c, row, rooms, req));
  } catch (e) { next(e); }
});

// Event detail page (crawlable)
app.get("/veranstaltung/:id/:slug?", async (req, res, next) => {
  try {
    const ev = (await db.query("SELECT * FROM events WHERE id=$1 AND status='approved'", [parseInt(req.params.id, 10) || 0])).rows[0];
    if (!ev) return next();
    const correct = slugify(ev.name);
    if (req.params.slug !== correct) return res.redirect(301, `/veranstaltung/${ev.id}/${correct}`);
    const c = await db.getAllContent();
    res.send(eventDetailPage(c, ev, req));
  } catch (e) { next(e); }
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
// Persist the room rows submitted with an accommodation form (parallel arrays).
async function syncRooms(accId, body) {
  const arr = (v) => (v == null ? [] : Array.isArray(v) ? v : [v]);
  const names = arr(body.room_name);
  const rids = arr(body.room_beds24_id);
  const maxg = arr(body.room_max_guests);
  const rowIds = arr(body.room_row_id);
  const n = Math.max(names.length, rids.length, maxg.length, rowIds.length);
  const keep = [];
  for (let i = 0; i < n; i++) {
    const name = String(names[i] || "").trim();
    const rid = String(rids[i] || "").trim();
    const mg = parseInt(maxg[i], 10) || 0;
    const rowId = parseInt(rowIds[i], 10) || 0;
    if (!name && !rid) continue; // skip empty rows
    if (rowId) {
      await db.query(
        "UPDATE rooms SET name=$1, beds24_room_id=$2, max_guests=$3, sort=$4 WHERE id=$5 AND accommodation_id=$6",
        [name || "Zimmer", rid, mg, i, rowId, accId]
      );
      keep.push(rowId);
    } else {
      const r = await db.query(
        "INSERT INTO rooms (accommodation_id, name, beds24_room_id, max_guests, sort) VALUES ($1,$2,$3,$4,$5) RETURNING id",
        [accId, name || "Zimmer", rid, mg, i]
      );
      keep.push(r.rows[0].id);
    }
  }
  if (keep.length) {
    await db.query(`DELETE FROM rooms WHERE accommodation_id=$1 AND id <> ALL($2::int[])`, [accId, keep]);
  } else {
    await db.query("DELETE FROM rooms WHERE accommodation_id=$1", [accId]);
  }
}

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
      const r = await db.query(
        `INSERT INTO ${cfg.table} (${cols.join(",")}) VALUES (${ph}) RETURNING id`,
        vals
      );
      if (kind === "unterkuenfte") await syncRooms(r.rows[0].id, req.body);
      res.redirect(base);
    } catch (e) {
      next(e);
    }
  });

  app.get(base + "/:id/edit", async (req, res, next) => {
    try {
      const r = await db.query(`SELECT * FROM ${cfg.table} WHERE id=$1`, [req.params.id]);
      if (!r.rows[0]) return res.redirect(base);
      const row = r.rows[0];
      if (kind === "unterkuenfte") {
        row.__rooms = (
          await db.query("SELECT * FROM rooms WHERE accommodation_id=$1 ORDER BY sort, id", [row.id])
        ).rows;
      }
      res.send(A.entryForm(kind, cfg.label, row, await pendingCount()));
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
      if (kind === "unterkuenfte") await syncRooms(req.params.id, req.body);
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

