import { useState, useEffect, useRef } from "react";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,300;1,9..144,400&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --crema: #FFF9F0;
    --carbon: #1C1C1E;
    --sol: #F7C132;
    --guayaba: #FF5459;
    --guayaba-dark: #e04046;
    --aqua: #00B896;
    --ff-display: 'Fraunces', Georgia, serif;
    --ff-body: 'DM Sans', system-ui, sans-serif;
    --ff-mono: 'DM Mono', monospace;
  }
  .hj-root {
    background: var(--crema);
    color: var(--carbon);
    font-family: var(--ff-body);
    font-size: 16px;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
  }
  /* NAV */
  .nav {
    position: sticky; top: 0; z-index: 100;
    background: rgba(255,249,240,0.93);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(28,28,30,0.08);
  }
  .nav-inner {
    max-width: 1120px; margin: 0 auto; padding: 0 24px;
    height: 64px; display: flex; align-items: center;
    justify-content: space-between; gap: 32px;
  }
  .nav-logo {
    font-family: var(--ff-display); font-weight: 700; font-size: 22px;
    color: var(--carbon); text-decoration: none; letter-spacing: -0.5px;
  }
  .nav-logo span { color: var(--sol); }
  .nav-links { display: flex; gap: 28px; list-style: none; }
  .nav-links a { font-size: 14px; font-weight: 500; color: var(--carbon); text-decoration: none; opacity: 0.65; transition: opacity .2s; }
  .nav-links a:hover { opacity: 1; }
  .btn-p {
    display: inline-flex; align-items: center;
    background: var(--guayaba); color: #fff;
    font-family: var(--ff-body); font-weight: 600; font-size: 14px;
    padding: 10px 20px; border-radius: 6px; text-decoration: none;
    border: none; cursor: pointer; transition: background .2s;
    white-space: nowrap;
  }
  .btn-p:hover { background: var(--guayaba-dark); }
  .btn-s {
    display: inline-flex; align-items: center;
    background: transparent; color: var(--carbon);
    font-family: var(--ff-body); font-weight: 600; font-size: 14px;
    padding: 10px 20px; border-radius: 6px; text-decoration: none;
    border: 1.5px solid var(--carbon); cursor: pointer; transition: background .2s;
  }
  .btn-s:hover { background: rgba(28,28,30,0.05); }

  /* HERO */
  .hero { max-width: 720px; margin: 0 auto; padding: 88px 24px 72px; text-align: center; }
  .eyebrow {
    font-family: var(--ff-mono); font-size: 11px; letter-spacing: .12em;
    text-transform: uppercase; opacity: .45; margin-bottom: 24px;
  }
  .eyebrow span { color: var(--aqua); opacity: 1; }
  .hero h1 {
    font-family: var(--ff-display); font-size: clamp(40px, 6vw, 64px);
    font-weight: 700; line-height: 1.1; letter-spacing: -1.5px;
    color: var(--carbon); margin-bottom: 24px;
  }
  .hero h1 em { font-style: italic; font-weight: 300; }
  .hero-sub {
    font-size: 18px; line-height: 1.65; opacity: .72;
    max-width: 500px; margin: 0 auto 40px;
  }
  .cta-row { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 80px; }
  .cta-row .btn-p, .cta-row .btn-s { font-size: 16px; padding: 14px 28px; border-radius: 8px; }

  /* MANIFESTO */
  .manifesto { max-width: 620px; margin: 0 auto; padding: 0 24px 96px; }
  .manifesto-label {
    font-family: var(--ff-mono); font-size: 10px; letter-spacing: .14em;
    text-transform: uppercase; opacity: .38; margin-bottom: 32px;
    display: flex; align-items: center; gap: 12px;
  }
  .manifesto-label::before { content: ''; display: block; width: 32px; height: 1px; background: var(--carbon); opacity: .3; }
  .manifesto-body {
    font-family: var(--ff-display); font-size: clamp(17px, 2.2vw, 20px);
    font-weight: 300; line-height: 1.8; color: var(--carbon);
  }
  .manifesto-body p { margin-bottom: 1.4em; }
  .sol-hi { font-weight: 600; background: linear-gradient(180deg, transparent 60%, rgba(247,193,50,.38) 60%); }
  .signature { font-style: italic; opacity: .6; font-size: .93em; }
  .rule { border: none; border-top: 1px solid rgba(28,28,30,.09); margin: 0; }

  /* PROOF */
  .proof { padding: 52px 24px; max-width: 1120px; margin: 0 auto; }
  .proof-label { font-family: var(--ff-mono); font-size: 10px; letter-spacing: .13em; text-transform: uppercase; opacity: .4; text-align: center; margin-bottom: 28px; }
  .proof-logos { display: flex; align-items: center; justify-content: center; gap: 48px; flex-wrap: wrap; }
  .proof-logo { display: flex; align-items: center; gap: 10px; opacity: .6; }
  .proof-icon {
    width: 36px; height: 36px; border-radius: 8px; background: var(--carbon);
    display: flex; align-items: center; justify-content: center;
    color: var(--crema); font-family: var(--ff-display); font-weight: 700; font-size: 13px;
  }
  .proof-name { font-weight: 600; font-size: 14px; }

  /* SECTION */
  .section { max-width: 1120px; margin: 0 auto; padding: 88px 24px; }
  .section-narrow { max-width: 800px; }
  .section-hd { margin-bottom: 52px; }
  .sec-eye { font-family: var(--ff-mono); font-size: 10px; letter-spacing: .13em; text-transform: uppercase; opacity: .4; margin-bottom: 14px; }
  .section h2 {
    font-family: var(--ff-display); font-size: clamp(26px, 3.5vw, 38px);
    font-weight: 600; line-height: 1.2; letter-spacing: -.8px; max-width: 600px;
  }

  /* CARDS */
  .cards { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
  .card {
    border: 1.5px solid rgba(28,28,30,.1); border-radius: 12px;
    padding: 36px 32px; display: flex; flex-direction: column; gap: 18px;
    transition: border-color .2s, transform .2s; background: var(--crema);
    text-decoration: none; color: inherit; cursor: pointer;
  }
  .card:hover { border-color: var(--sol); transform: translateY(-3px); }
  .card-num { font-family: var(--ff-display); font-size: 52px; font-weight: 700; line-height: 1; color: var(--sol); letter-spacing: -2px; }
  .card h3 { font-family: var(--ff-display); font-size: 21px; font-weight: 600; letter-spacing: -.3px; line-height: 1.25; }
  .card p { font-size: 14px; line-height: 1.7; opacity: .68; flex: 1; }
  .card-link { font-size: 13px; font-weight: 600; display: inline-flex; align-items: center; gap: 6px; }

  /* STEPS */
  .steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; margin-bottom: 52px; }
  .step-num {
    font-family: var(--ff-display); font-size: 12px; font-weight: 600;
    opacity: .28; margin-bottom: 16px; display: flex; align-items: center; gap: 10px;
  }
  .step-num::after { content: ''; flex: 1; height: 1px; background: var(--carbon); opacity: .15; }
  .step h3 { font-family: var(--ff-display); font-size: 19px; font-weight: 600; letter-spacing: -.3px; margin-bottom: 10px; }
  .step p { font-size: 14px; line-height: 1.7; opacity: .68; }

  /* PRICING */
  .pricing-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
  .pricing-card {
    border: 2px solid var(--carbon); border-radius: 16px;
    padding: 44px 40px; background: var(--carbon); color: var(--crema);
  }
  .price-amt { font-family: var(--ff-display); font-size: clamp(48px, 6vw, 68px); font-weight: 700; letter-spacing: -3px; line-height: 1; margin-bottom: 4px; }
  .price-amt span { font-size: 20px; font-weight: 400; letter-spacing: -.3px; opacity: .65; }
  .price-meta { font-family: var(--ff-mono); font-size: 10px; letter-spacing: .1em; text-transform: uppercase; opacity: .45; margin-bottom: 32px; margin-top: 10px; }
  .price-rule { border: none; border-top: 1px solid rgba(255,249,240,.1); margin-bottom: 24px; }
  .price-incl { list-style: none; display: flex; flex-direction: column; gap: 11px; margin-bottom: 24px; }
  .price-incl li { font-size: 15px; display: flex; align-items: center; gap: 10px; }
  .price-incl li::before { content: '✓'; color: var(--aqua); font-weight: 700; font-size: 12px; flex-shrink: 0; }
  .price-no { list-style: none; display: flex; flex-direction: column; gap: 7px; }
  .price-no li { font-size: 13px; opacity: .45; display: flex; align-items: center; gap: 8px; }
  .price-no li::before { content: '×'; font-size: 12px; }
  .price-ctx { padding-top: 4px; }
  .price-big { font-family: var(--ff-display); font-size: clamp(28px, 3.5vw, 42px); font-weight: 700; letter-spacing: -1.5px; line-height: 1.2; margin-bottom: 20px; }
  .price-big span { color: var(--guayaba); }
  .price-ctx p { font-size: 15px; line-height: 1.75; opacity: .72; margin-bottom: 24px; }
  .price-ctx a { font-size: 14px; font-weight: 600; color: var(--carbon); text-decoration: underline; text-underline-offset: 3px; opacity: .65; }

  /* AI ADD-ON */
  .ai-addon {
    margin-top: 16px;
    border: 1.5px solid rgba(0,184,150,.35);
    border-radius: 12px;
    padding: 24px 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    background: rgba(0,184,150,.04);
  }
  .ai-addon-badge {
    display: inline-block;
    font-family: var(--ff-mono);
    font-size: 9px;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: var(--aqua);
    border: 1px solid rgba(0,184,150,.4);
    border-radius: 20px;
    padding: 3px 10px;
    margin-bottom: 8px;
  }
  .ai-addon-title {
    font-family: var(--ff-display);
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -.3px;
    margin-bottom: 6px;
  }
  .ai-addon-desc {
    font-size: 13px;
    line-height: 1.65;
    opacity: .62;
    max-width: 340px;
  }
  .ai-addon-price {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-shrink: 0;
  }
  .ai-addon-amt {
    font-family: var(--ff-display);
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -1.5px;
    line-height: 1;
    color: var(--aqua);
  }
  .ai-addon-per {
    font-family: var(--ff-mono);
    font-size: 10px;
    letter-spacing: .1em;
    text-transform: uppercase;
    opacity: .5;
    margin-top: 4px;
  }

  /* FAQ */
  .faq-item { border-top: 1px solid rgba(28,28,30,.1); }
  .faq-item:last-child { border-bottom: 1px solid rgba(28,28,30,.1); }
  .faq-q {
    width: 100%; background: none; border: none; cursor: pointer;
    text-align: left; padding: 22px 0;
    display: flex; justify-content: space-between; align-items: center; gap: 24px;
  }
  .faq-qt { font-family: var(--ff-display); font-size: 17px; font-weight: 600; color: var(--carbon); letter-spacing: -.2px; }
  .faq-icon {
    width: 26px; height: 26px; border: 1.5px solid rgba(28,28,30,.2);
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; font-size: 16px; line-height: 1; color: var(--carbon);
    transition: transform .3s, background .2s, border-color .2s;
  }
  .faq-icon.open { transform: rotate(45deg); background: var(--sol); border-color: var(--sol); }
  .faq-a { padding-bottom: 20px; font-size: 15px; line-height: 1.75; opacity: .68; max-width: 680px; }

  /* FINAL CTA */
  .final { background: var(--carbon); color: var(--crema); text-align: center; }
  .final-inner { max-width: 680px; margin: 0 auto; padding: 112px 24px; }
  .final h2 {
    font-family: var(--ff-display); font-size: clamp(26px, 4vw, 44px);
    font-weight: 700; line-height: 1.2; letter-spacing: -1px; margin-bottom: 18px;
    color: var(--crema);
  }
  .final p { font-size: 16px; line-height: 1.7; opacity: .6; margin-bottom: 40px; }
  .final-ctas { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 36px; }
  .final-ctas .btn-p { font-size: 16px; padding: 15px 32px; border-radius: 8px; }
  .btn-wa {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent; color: var(--crema);
    font-family: var(--ff-body); font-weight: 600; font-size: 16px;
    padding: 15px 32px; border-radius: 8px; text-decoration: none;
    border: 1.5px solid rgba(255,249,240,.22); cursor: pointer;
    transition: border-color .2s;
  }
  .btn-wa:hover { border-color: rgba(255,249,240,.45); }
  .final-trust { font-size: 12px; opacity: .38; display: flex; align-items: center; justify-content: center; gap: 16px; flex-wrap: wrap; }

  /* FOOTER */
  footer { background: var(--carbon); border-top: 1px solid rgba(255,249,240,.05); color: var(--crema); padding: 60px 24px 0; }
  .footer-grid { max-width: 1120px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 44px; padding-bottom: 56px; }
  .footer-logo { font-family: var(--ff-display); font-weight: 700; font-size: 20px; color: var(--crema); text-decoration: none; display: block; margin-bottom: 10px; }
  .footer-logo span { color: var(--sol); }
  .footer-tag { font-size: 13px; opacity: .45; line-height: 1.6; margin-bottom: 22px; }
  .footer-social { display: flex; gap: 10px; }
  .footer-social a {
    width: 30px; height: 30px; border: 1px solid rgba(255,249,240,.12);
    border-radius: 6px; display: flex; align-items: center; justify-content: center;
    color: var(--crema); text-decoration: none; font-size: 11px; font-weight: 600;
    opacity: .55; transition: opacity .2s;
  }
  .footer-social a:hover { opacity: 1; }
  .footer-col h4 { font-family: var(--ff-mono); font-size: 9px; letter-spacing: .15em; text-transform: uppercase; opacity: .35; margin-bottom: 18px; }
  .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 9px; }
  .footer-col ul li a { font-size: 13px; color: var(--crema); text-decoration: none; opacity: .55; transition: opacity .2s; }
  .footer-col ul li a:hover { opacity: 1; }
  .footer-bottom {
    max-width: 1120px; margin: 0 auto; padding: 18px 0;
    border-top: 1px solid rgba(255,249,240,.06);
    display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;
  }
  .footer-bottom span, .footer-bottom a { font-size: 11px; opacity: .3; color: var(--crema); text-decoration: none; }
  .footer-legal { display: flex; gap: 18px; }

  /* RESPONSIVE */
  @media (max-width: 900px) {
    .nav-links, .nav-cta-desk { display: none; }
    .cards { grid-template-columns: 1fr; }
    .steps { grid-template-columns: 1fr 1fr; gap: 24px; }
    .pricing-wrap { grid-template-columns: 1fr; gap: 36px; }
    .footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
  }
  @media (max-width: 600px) {
    .steps { grid-template-columns: 1fr; }
    .footer-grid { grid-template-columns: 1fr; }
    .final-inner { padding: 80px 20px; }
    .pricing-card { padding: 32px 24px; }
    .hero { padding: 64px 20px 56px; }
  }
`;

const faqData = [
  {
    q: "¿Qué pasa si quiero cancelar?",
    a: "El contrato mínimo es 24 meses. Si cancelas antes, no hay penalización económica — pero pierdes acceso a la plataforma, ya que el código y la infraestructura son de HeyJimmi. Tus datos siempre son tuyos: te los entregamos en el formato que necesites en cualquier momento."
  },
  {
    q: "¿Puedo pedir funciones específicas para mi negocio?",
    a: "Sí, ese es exactamente el punto. Cada plataforma se construye según lo que tu negocio necesita hoy. Si en el camino necesitas algo nuevo, lo platicamos y lo integramos. No estás comprando un producto de catálogo — estás contratando un equipo que construye lo que tú necesitas."
  },
  {
    q: "¿Cuánto tarda en estar lista mi plataforma?",
    a: "Cuatro semanas desde que firmamos. Sin excepciones. Si hay un retraso de nuestra parte, no te cobramos esas semanas. El plazo es nuestro compromiso, no una estimación optimista."
  },
  {
    q: "¿Necesito saber de tecnología para trabajar con ustedes?",
    a: "Para nada. Nosotros hablamos en tu idioma, no en el nuestro. Tu trabajo es describirnos qué necesita tu negocio; el nuestro es construirlo. Nunca te vamos a mandar un documento con siglas que no entiende nadie."
  },
  {
    q: "¿Solo trabajan en Puebla?",
    a: "No — trabajamos con negocios en toda la República Mexicana. Puebla es nuestra base, pero hemos entregado plataformas para clientes en otras ciudades y lo hacemos completamente en remoto."
  }
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-q" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className="faq-qt">{q}</span>
        <span className={`faq-icon${open ? " open" : ""}`}>+</span>
      </button>
      {open && <div className="faq-a">{a}</div>}
    </div>
  );
}

function FadeIn({ children, delay = 0, style: extraStyle = {} }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(18px)", transition: `opacity .6s ${delay}s ease, transform .6s ${delay}s ease`, ...extraStyle }}>
      {children}
    </div>
  );
}

export default function HeyJimmi() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [manifestoVis, setManifestoVis] = useState(false);
  const manifestoRef = useRef(null);

  useEffect(() => {
    const el = manifestoRef.current;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setManifestoVis(true); obs.disconnect(); } }, { threshold: 0.06 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="hj-root">
      <style>{style}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-logo">Hey<span>Jimmi</span></a>
          <ul className="nav-links">
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Cómo funciona</a></li>
            <li><a href="#">Precios</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
          <a href="#" className="btn-p nav-cta-desk">Agenda tu demo</a>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "4px" }} className="hamburger">☰</button>
        </div>
        {menuOpen && (
          <div style={{ padding: "16px 24px 24px", borderTop: "1px solid rgba(28,28,30,.08)", display: "flex", flexDirection: "column", gap: "12px" }}>
            {["Nosotros", "Cómo funciona", "Precios", "Blog"].map(l => (
              <a key={l} href="#" style={{ fontSize: 15, fontWeight: 500, color: "var(--carbon)", textDecoration: "none", padding: "8px 0", borderBottom: "1px solid rgba(28,28,30,.06)" }}>{l}</a>
            ))}
            <a href="#" className="btn-p" style={{ marginTop: 8, justifyContent: "center", fontSize: 15, padding: "14px" }}>Agenda tu demo</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <div className="hero">
        <p className="eyebrow">Software a la medida&nbsp;&nbsp;·&nbsp;&nbsp;<span>Desde $2,500 MXN/mes</span></p>
        <h1>Tu negocio merece<br />su propia plataforma.<br /><em>Sin pagar una fortuna.</em></h1>
        <p className="hero-sub">Construimos la app de tu negocio en 4 semanas, sin costo inicial. Software que se adapta a ti, no al revés.</p>
        <div className="cta-row">
          <a href="#" className="btn-p">Agenda una demo gratis</a>
          <a href="#como-funciona" className="btn-s">Ver cómo funciona ↓</a>
        </div>
      </div>

      {/* MANIFESTO */}
      <div ref={manifestoRef} className="manifesto" style={{ opacity: manifestoVis ? 1 : 0, transform: manifestoVis ? "translateY(0)" : "translateY(24px)", transition: "opacity .8s ease, transform .8s ease" }}>
        <div className="manifesto-label">El manifiesto</div>
        <div className="manifesto-body">
          <p>Tu negocio no necesita un ERP.</p>
          <p>No necesita una suite de 300 módulos que te tardaste seis meses en implementar y que nadie en tu equipo sabe usar. No necesita a una agencia con 40 personas, presentaciones en PowerPoint de 90 diapositivas y una cuenta de cobro que parece el PIB de un municipio.</p>
          <p>Necesita <span className="sol-hi">exactamente lo que necesita</span>. Ni más, ni menos.</p>
          <p>Eso es lo que hacemos.</p>
          <p>Somos un equipo <span className="sol-hi">deliberadamente pequeño</span> — que construye plataformas digitales a la medida para negocios como el tuyo. Condominios, academias, medios locales, empresas que venden algo real a personas reales.</p>
          <p>Sin costo inicial. Sin sorpresas en la factura. Sin reuniones para hablar de las reuniones.</p>
          <p>$2,500 pesos al mes, IVA incluido. Tu plataforma lista en cuatro semanas. Y si en algún momento no te sirve, te vas sin penalización.</p>
          <p>Creemos que la tecnología no debería ser privilegio de las empresas grandes. Que una PyME en Puebla merece las mismas herramientas que una corporación en la Ciudad de México — sin pagar lo mismo que ellos.</p>
          <p>No somos para todos. Si buscas cientos de funciones que quizás algún día uses, hay muchas opciones por ahí. Pero si quieres algo que resuelva <span className="sol-hi">tu problema específico</span>, que funcione desde el primer día y que crezca contigo — aquí estamos.</p>
          <p className="signature">— Hector y el equipo de HeyJimmi</p>
        </div>
      </div>

      <hr className="rule" />

      {/* PROOF */}
      <FadeIn>
        <div className="proof">
          <p className="proof-label">Plataformas activas hoy mismo en Puebla</p>
          <div className="proof-logos">
            {[["L+", "LO+ News"], ["AL", "Academia Latinoamericana Antienvejecimiento"], ["TW", "The Woods"]].map(([icon, name]) => (
              <div key={name} className="proof-logo">
                <div className="proof-icon">{icon}</div>
                <span className="proof-name">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <hr className="rule" />

      {/* VERTICALS */}
      <div className="section">
        <FadeIn>
          <div className="section-hd">
            <p className="sec-eye">Para quién</p>
            <h2>¿A qué tipo de negocio le hacemos plataformas?</h2>
          </div>
        </FadeIn>
        <div className="cards">
          {[
            ["01", "Condominios y fraccionamientos", "Reservas de amenidades, directorio vecinal, comunicados push y mucho más. Para administradores que quieren dejar de depender de WhatsApp y grupos de chat para gestionar su fraccionamiento."],
            ["02", "Academias y escuelas", "Membresías, cursos en línea, pagos integrados y CRM de alumnos. Para directores que quieren crecer su academia sin contratar más personal administrativo."],
            ["03", "Medios de comunicación locales", "CMS editorial, directorio de negocios, publicidad digital y analytics. Para directores que quieren un medio digital profesional — no un blog mal mantenido."],
            ["04", "Empresas de servicio B2B", "CRM de clientes, seguimiento de cotizaciones, inventario y KPIs de ventas. Para dueños que quieren saber exactamente qué está pasando en su empresa — sin depender de llamadas ni hojas de cálculo."],
          ].map(([num, title, desc], i) => (
            <FadeIn key={num} delay={i * 0.08}>
              <a href="#" className="card">
                <div className="card-num">{num}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className="card-link">Ver plataforma →</span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>

      <hr className="rule" />

      {/* HOW IT WORKS */}
      <div className="section" id="como-funciona">
        <FadeIn>
          <div className="section-hd">
            <p className="sec-eye">El proceso</p>
            <h2>De cero a tu plataforma en 4 semanas.</h2>
          </div>
        </FadeIn>
        <div className="steps">
          {[
            ["01", "Platicamos", "Una llamada de 30 minutos. Entendemos tu negocio, te mostramos lo que hemos construido, y te decimos honestamente si podemos ayudarte. Sin compromiso y sin venderte nada que no necesites."],
            ["02", "Proponemos", "Te mandamos una propuesta con alcance, tiempos y precio. Sin letra chica. Sin \u2018m\u00e1s adelante te cobramos por esto\u2019. Lo que dice el documento es lo que pagas."],
            ["03", "Construimos", "Tu plataforma en cuatro semanas. Con actualizaciones reales durante el proceso — no silencio radiofónico y una sorpresa al final."],
            ["04", "Crecemos juntos", "$2,500 al mes, IVA incluido. Soporte, mantenimiento y nuevas funciones conforme las necesitas. Sin contratos trampa y sin costos ocultos."],
          ].map(([num, title, desc], i) => (
            <FadeIn key={num} delay={i * 0.1}>
              <div className="step">
                <div className="step-num">{num}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn>
          <a href="#" className="btn-p" style={{ fontSize: 15, padding: "13px 28px", borderRadius: 8 }}>Agenda tu llamada →</a>
        </FadeIn>
      </div>

      <hr className="rule" />

      {/* PRICING */}
      <div className="section">
        <FadeIn>
          <div className="section-hd">
            <p className="sec-eye">Precios</p>
            <h2>Un precio. Sin sorpresas.</h2>
          </div>
        </FadeIn>
        <div className="pricing-wrap">
          <FadeIn>
            <div>
              <div className="pricing-card">
                <div className="price-amt">$2,500<span> MXN</span></div>
                <div style={{ fontSize: 16, opacity: .5, fontFamily: "var(--ff-body)", marginTop: 4 }}>/ mes</div>
                <div className="price-meta">IVA incluido · Sin costo de inicio · Contrato mínimo 24 meses</div>
                <hr className="price-rule" />
                <ul className="price-incl">
                  {["Plataforma personalizada", "Hosting incluido", "Mantenimiento continuo", "Soporte directo", "Nuevas funciones"].map(i => <li key={i}>{i}</li>)}
                </ul>
                <hr className="price-rule" />
                <ul className="price-no">
                  {["Sin setup fee", "Sin costo por usuario", "Sin módulos adicionales", "Sin sorpresas en la factura"].map(i => <li key={i}>{i}</li>)}
                </ul>
              </div>

              {/* AI ADD-ON */}
              <div className="ai-addon">
                <div className="ai-addon-left">
                  <div className="ai-addon-badge">Add-on opcional</div>
                  <div className="ai-addon-title">Módulo IA</div>
                  <div className="ai-addon-desc">Generación de propuestas, transcripción de voz, respuestas inteligentes y resúmenes automáticos. Se integra a tu plataforma — no es un chatbot genérico.</div>
                </div>
                <div className="ai-addon-price">
                  <span className="ai-addon-amt">+$1,000</span>
                  <span className="ai-addon-per">MXN / mes</span>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="price-ctx">
              <div className="price-big">Cero de inicio.<br /><span>Empiezas a pagar cuando tu plataforma ya funciona.</span></div>
              <p>Las agencias tradicionales cobran entre $80,000 y $300,000 MXN solo por construir la plataforma. Eso sin contar el mantenimiento anual. Nosotros hacemos algo diferente: cero de inicio, y empiezas a pagar cuando tu plataforma ya está lista y funcionando.</p>
              <a href="#">Ver todos los detalles →</a>
            </div>
          </FadeIn>
        </div>
      </div>

      <hr className="rule" />

      {/* FAQ */}
      <div className="section section-narrow" style={{ maxWidth: 800 }}>
        <FadeIn>
          <div className="section-hd">
            <p className="sec-eye">FAQ</p>
            <h2>Preguntas que nos hacen seguido</h2>
          </div>
        </FadeIn>
        <FadeIn>
          <div>{faqData.map(item => <FaqItem key={item.q} {...item} />)}</div>
        </FadeIn>
      </div>

      {/* FINAL CTA */}
      <div className="final">
        <div className="final-inner">
          <h2>¿Tu negocio tiene un problema que el software de siempre no resuelve?</h2>
          <p>Cuéntanos. La primera llamada es gratis, sin compromiso, y sin que nadie te intente vender algo que no necesitas.</p>
          <div className="final-ctas">
            <a href="#" className="btn-p">Agenda una demo →</a>
            <a href="https://wa.me/52XXXXXXXXXX" className="btn-wa">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Escríbenos por WhatsApp
            </a>
          </div>
          <div className="final-trust">
            <span>Respondemos en menos de 24 horas</span>
            <span>·</span>
            <span>Puebla, México</span>
            <span>·</span>
            <span>hola@heyjimmi.com</span>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-grid">
          <div>
            <a href="#" className="footer-logo">Hey<span>Jimmi</span></a>
            <p className="footer-tag">La app de tu negocio, sin complicaciones.</p>
            <div className="footer-social">
              {[["Ig", "Instagram"], ["Tk", "TikTok"], ["X", "X"]].map(([l, name]) => (
                <a key={name} href="#" aria-label={name}>{l}</a>
              ))}
            </div>
          </div>
          <div className="footer-col">
            <h4>Para quién</h4>
            <ul>
              {["Condominios", "Academias", "Medios locales", "Empresas B2B"].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Empresa</h4>
            <ul>
              {["Nosotros", "Cómo funciona", "Precios", "Clientes"].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Blog</h4>
            <ul>
              {["Todos los artículos", "Para condominios", "Para academias", "Para empresas B2B"].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Orizaba Holdings LLC</span>
          <div className="footer-legal">
            <a href="#">Aviso de privacidad</a>
            <a href="#">Términos y condiciones</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
