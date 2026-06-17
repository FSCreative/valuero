// VALUERO — gebündelte App (öffentliche Website + Admin-CMS). Auto-generiert.

/* ===== styles ===== */
// CSS for the public site and the admin area, exported as strings.

const publicCSS = `
:root{
  --bg:#f5f2ec; --surface:#ffffff; --surface-2:#efe9df;
  --ink:#16201b; --muted:#5e6a61; --line:#e4ddd0;
  --accent:#2f6e52; --accent-d:#234f3c; --gold:#bfa06a;
  --radius:18px; --shadow:0 18px 50px -24px rgba(22,32,27,.35);
  --maxw:1180px;
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
.nav{position:sticky;top:0;z-index:50;backdrop-filter:saturate(160%) blur(14px);
  background:rgba(245,242,236,.78);border-bottom:1px solid var(--line)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;height:72px;max-width:var(--maxw);margin:0 auto;padding:0 24px}
.brand{display:flex;align-items:center;gap:10px;font-family:"Fraunces",serif;font-weight:600;font-size:24px;letter-spacing:.04em}
.brand svg{width:34px;height:24px}
.nav-links{display:flex;align-items:center;gap:30px}
.nav-links a{font-size:15px;font-weight:500;color:var(--muted);position:relative;padding:4px 0;transition:color .2s}
.nav-links a:hover,.nav-links a.active{color:var(--ink)}
.nav-links a.active::after{content:"";position:absolute;left:0;right:0;bottom:-2px;height:2px;background:var(--accent);border-radius:2px}
.nav-cta{background:var(--accent);color:#fff!important;padding:9px 18px;border-radius:999px;font-size:14px}
.nav-cta:hover{background:var(--accent-d)}
.burger{display:none;flex-direction:column;gap:5px;background:none;border:0;cursor:pointer;padding:8px}
.burger span{width:24px;height:2px;background:var(--ink);border-radius:2px;transition:.3s}

/* HERO */
.hero{position:relative;min-height:78vh;display:flex;align-items:center;overflow:hidden;
  background:linear-gradient(160deg,#dfe7e0 0%,#eef0e8 40%,#f5f2ec 100%)}
.hero-mtn{position:absolute;left:0;right:0;bottom:-1px;width:100%;height:auto;z-index:1}
.hero-bg-img{position:absolute;inset:0;background-size:cover;background-position:center;z-index:0}
.hero-bg-img::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(245,242,236,.35),rgba(245,242,236,.85))}
.hero .container{position:relative;z-index:2;padding-top:40px;padding-bottom:120px}
.hero .eyebrow{text-transform:uppercase;letter-spacing:.28em;font-size:12px;font-weight:600;color:var(--accent);margin-bottom:18px}
.hero h1{font-size:clamp(40px,7vw,84px);max-width:14ch}
.hero p.lead{font-size:clamp(17px,2.2vw,22px);color:var(--muted);max-width:52ch;margin-top:22px}
.hero-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:34px}

/* BUTTONS */
.btn{display:inline-flex;align-items:center;gap:8px;border-radius:999px;padding:13px 26px;font-weight:600;font-size:15px;cursor:pointer;border:1px solid transparent;transition:.2s;font-family:inherit}
.btn-primary{background:var(--accent);color:#fff}
.btn-primary:hover{background:var(--accent-d);transform:translateY(-2px)}
.btn-ghost{background:transparent;border-color:var(--line);color:var(--ink)}
.btn-ghost:hover{background:var(--surface);border-color:var(--accent)}

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
.card-img{aspect-ratio:4/3;background-size:cover;background-position:center;position:relative;background-color:#dfe5de}
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
.page-hero{padding:64px 0 30px;background:linear-gradient(160deg,#e3ebe3,#f5f2ec)}
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
  .nav-links{position:fixed;inset:72px 0 auto 0;flex-direction:column;background:var(--bg);padding:24px;gap:18px;border-bottom:1px solid var(--line);transform:translateY(-130%);transition:transform .35s ease;z-index:40}
  .nav-links.open{transform:none}
  .burger{display:flex}
  .cat-grid,.grid{grid-template-columns:1fr}
  .form-row.two{grid-template-columns:1fr}
  .hero{min-height:70vh}
  .about-meaning{gap:14px;flex-direction:column}
}
@media(prefers-reduced-motion:reduce){.reveal{opacity:1;transform:none}.cat-card .ph{transition:none}}
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
@media(max-width:760px){.sidebar{display:none}.main{padding:20px}.fr.two,.stat-grid{grid-template-columns:1fr 1fr}}
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

function nav(active) {
  const link = (href, label) =>
    `<a href="${href}" class="${active === href ? "active" : ""}">${label}</a>`;
  return `
  <header class="nav">
    <div class="nav-inner">
      <a class="brand" href="/"><span class="accent">${MTN}</span>VALUERO</a>
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
          <a class="brand" href="/"><span>${MTN}</span>VALUERO</a>
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
${nav(active)}
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
      <div class="eyebrow">${esc(c.site_tagline)} · Hochmontafon</div>
      <h1>${esc(c.home_hero_title)}</h1>
      <p class="lead">${esc(c.home_hero_sub)}</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="/unterkuenfte">Unterkünfte finden</a>
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

function listingPage(c, items, kind) {
  const isGastro = kind === "gastro";
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
          var data=cv.toDataURL('image/jpeg',0.82);
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
      <div class="fr"><label>Link (Buchung/Website)</label><input name="link" value="${esc(
        it.link
      )}" placeholder="https://"></div>
      <div class="fr">${fieldImage(it.image)}</div>`;
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
    cols: ["name", "description", "location", "type", "rating", "badge", "amenities", "link", "image"],
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
    if (v == null) v = "";
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

