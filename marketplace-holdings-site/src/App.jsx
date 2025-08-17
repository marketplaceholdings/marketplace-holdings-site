/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";

/* -------------------------------------------------
   THEME (tokens)
-------------------------------------------------- */
const theme = {
  red: "#e11d48",
  text: "#0f172a",
  subtext: "#475569",
  border: "#e5e7eb",
  bg: "#ffffff",
  bgAlt: "#f8fafc",

  radius: { sm: 8, md: 12, lg: 16, xl: 24, pill: 999 },
  space: (n) => `${n * 4}px`,
  shadow: {
    sm: "0 1px 2px rgba(2,6,23,.06)",
    md: "0 8px 30px rgba(2,6,23,.08)",
    lg: "0 18px 60px rgba(2,6,23,.12)",
  },
};

/* -------------------------------------------------
   GLOBAL UTILS
-------------------------------------------------- */
const Section = ({ children, alt = false, id }) => (
  <section id={id} style={{ borderTop: `1px solid ${theme.border}`, background: alt ? theme.bgAlt : theme.bg }}>
    <Container>
      <div style={{ padding: "80px 0" }}>{children}</div>
    </Container>
  </section>
);

const Container = ({ children, wide = false }) => (
  <div
    style={{
      maxWidth: wide ? 1320 : 1120,
      margin: "0 auto",
      padding: "0 20px",
    }}
  >
    {children}
  </div>
);

/* -------------------------------------------------
   TYPOGRAPHY
-------------------------------------------------- */
const stack =
  "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji";

const H1 = ({ children }) => (
  <h1
    style={{
      margin: 0,
      fontFamily: stack,
      fontSize: "clamp(36px, 5vw, 60px)",
      lineHeight: 1.06,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      color: theme.text,
    }}
  >
    {children}
  </h1>
);

const H2 = ({ children }) => (
  <h2
    style={{
      margin: 0,
      fontFamily: stack,
      fontSize: "clamp(22px, 2.2vw, 30px)",
      lineHeight: 1.15,
      fontWeight: 800,
      letterSpacing: "-0.01em",
      color: theme.text,
    }}
  >
    {children}
  </h2>
);

const H3 = ({ children }) => (
  <h3
    style={{
      margin: 0,
      fontFamily: stack,
      fontSize: 18,
      lineHeight: 1.25,
      fontWeight: 800,
      color: theme.text,
    }}
  >
    {children}
  </h3>
);

const P = ({ children, dim = false, size = 16, style }) => (
  <p
    style={{
      marginTop: theme.space(3),
      color: dim ? theme.subtext : theme.text,
      fontSize: size,
      lineHeight: 1.7,
      fontFamily: stack,
      ...style,
    }}
  >
    {children}
  </p>
);

/* -------------------------------------------------
   IMAGE UTILITIES (placeholders)
-------------------------------------------------- */
const PH = (w = 1200, h = 800, label = "Placeholder") =>
  `data:image/svg+xml;utf8,` +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'>
      <defs>
        <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
          <stop offset='0' stop-color='#f1f5f9'/>
          <stop offset='1' stop-color='#e2e8f0'/>
        </linearGradient>
      </defs>
      <rect width='100%' height='100%' fill='url(#g)'/>
      <g fill='#94a3b8' font-family='Inter, system-ui' text-anchor='middle'>
        <text x='50%' y='50%' font-size='28' dy='8'>${label}</text>
      </g>
    </svg>`
  );

// Reusable Image with cover/contain + radius + border
const Img = ({ src, alt, aspect = "16/9", cover = true, radius = "16px", border = true, shadow = "sm", style }) => (
  <div
    style={{
      position: "relative",
      width: "100%",
      aspectRatio: aspect,
      overflow: "hidden",
      borderRadius: radius,
      border: border ? `1px solid ${theme.border}` : "none",
      boxShadow: shadow ? theme.shadow[shadow] : "none",
      background: "#fff",
      ...style,
    }}
  >
    <img
      src={src}
      alt={alt}
      loading="lazy"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: cover ? "cover" : "contain",
        display: "block",
      }}
    />
  </div>
);

/* -------------------------------------------------
   UI PRIMITIVES
-------------------------------------------------- */
const Button = ({ children, variant = "primary", size = "md", href, onClick }) => {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.radius.pill,
    padding: size === "lg" ? `${theme.space(3.5)} ${theme.space(5)}` : `${theme.space(2.5)} ${theme.space(4)}`,
    fontWeight: 700,
    border: "1px solid transparent",
    cursor: "pointer",
    textDecoration: "none",
    fontSize: size === "lg" ? 16 : 14,
    boxShadow: theme.shadow.sm,
    transition:
      "transform .06s ease, box-shadow .2s ease, background-color .2s ease, color .2s ease, border-color .2s ease, opacity .2s ease",
    outline: "none",
    fontFamily: stack,
  };
  const variants = {
    primary: { background: theme.red, color: "#fff" },
    secondary: { background: "#fff", color: theme.text, border: `1px solid ${theme.border}` },
    dark: { background: "#0f172a", color: "#fff" },
    ghost: { background: "transparent", color: theme.text, border: `1px solid ${theme.border}` },
  };
  const Comp = href ? "a" : "button";
  const props = href ? { href } : { onClick };
  return (
    <Comp
      {...props}
      style={{ ...base, ...variants[variant] }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = theme.shadow.md)}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = theme.shadow.sm)}
      onMouseDown={(e) => (e.currentTarget.style.transform = "translateY(1px)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      onFocus={(e) => (e.currentTarget.style.boxShadow = `0 0 0 6px rgba(225,29,72,.15), ${theme.shadow.md}`)}
      onBlur={(e) => (e.currentTarget.style.boxShadow = theme.shadow.sm)}
    >
      {children}
    </Comp>
  );
};

const Card = ({ children, hover = true }) => (
  <div
    style={{
      border: `1px solid ${theme.border}`,
      borderRadius: theme.radius.xl,
      overflow: "hidden",
      background: "#fff",
      boxShadow: theme.shadow.sm,
      transition: "transform .12s ease, box-shadow .2s ease, border-color .2s ease",
      willChange: "transform",
    }}
    onMouseEnter={(e) => {
      if (!hover) return;
      e.currentTarget.style.boxShadow = theme.shadow.md;
      e.currentTarget.style.borderColor = "#e2e8f0";
    }}
    onMouseLeave={(e) => hover && (e.currentTarget.style.boxShadow = theme.shadow.sm)}
  >
    {children}
  </div>
);

const CardHeader = ({ title, extra, media }) => (
  <div
    style={{
      padding: 20,
      borderBottom: `1px solid ${theme.border}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "linear-gradient(180deg, #ffffff, #fcfdff)",
      gap: 12,
    }}
  >
    <div
      style={{
        fontSize: 18,
        fontWeight: 800,
        color: theme.text,
        fontFamily: stack,
        lineHeight: 1.25,
        overflowWrap: "anywhere",
        wordBreak: "break-word",
        hyphens: "auto",
      }}
    >
      {title}
    </div>
    {media || extra}
  </div>
);

const CardBody = ({ children }) => (
  <div style={{ padding: 20, color: theme.subtext, fontSize: 15, lineHeight: 1.7, fontFamily: stack }}>{children}</div>
);

const Field = ({ label, children }) => (
  <label style={{ display: "block" }}>
    <div style={{ fontSize: 13, color: theme.text, marginBottom: 8, fontWeight: 700, fontFamily: stack }}>{label}</div>
    {children}
  </label>
);

const Input = (props) => (
  <input
    {...props}
    style={{
      width: "100%",
      padding: "12px 14px",
      borderRadius: theme.radius.lg,
      border: `1px solid ${theme.border}`,
      fontSize: 14,
      outline: "none",
      transition: "box-shadow .2s ease, border-color .2s ease, background-color .2s ease",
      fontFamily: stack,
      background: "#fff",
    }}
    onFocus={(e) => {
      e.currentTarget.style.borderColor = theme.red;
      e.currentTarget.style.boxShadow = "0 0 0 6px rgba(225,29,72,.12)";
      e.currentTarget.style.background = "#fff";
    }}
    onBlur={(e) => {
      e.currentTarget.style.borderColor = theme.border;
      e.currentTarget.style.boxShadow = "none";
      e.currentTarget.style.background = "#fff";
    }}
    placeholder={props.placeholder}
  />
);

const Textarea = (props) => (
  <textarea
    {...props}
    style={{
      width: "100%",
      padding: "12px 14px",
      borderRadius: theme.radius.lg,
      border: `1px solid ${theme.border}`,
      fontSize: 14,
      outline: "none",
      transition: "box-shadow .2s ease, border-color .2s ease",
      minHeight: 140,
      resize: "vertical",
      fontFamily: stack,
      background: "#fff",
    }}
    onFocus={(e) => {
      e.currentTarget.style.borderColor = theme.red;
      e.currentTarget.style.boxShadow = "0 0 0 6px rgba(225,29,72,.12)";
    }}
    onBlur={(e) => {
      e.currentTarget.style.borderColor = theme.border;
      e.currentTarget.style.boxShadow = "none";
    }}
  />
);

const MenuIcon = ({ open = false, size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" style={{ display: "block" }}>
    {open ? (
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    ) : (
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </g>
    )}
  </svg>
);

/* Cute line icons to accompany list items (SVG inline so color matches theme) */
const SmallIcon = ({ path }) => (
  <span
    aria-hidden="true"
    style={{
      display: "inline-flex",
      width: 28,
      height: 28,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      background: "#fff0f2",
      border: `1px solid ${theme.border}`,
    }}
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={theme.red} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
    </svg>
  </span>
);

/* -------------------------------------------------
   DATA
-------------------------------------------------- */
const ventures = [
  { name: "RVshare.com", blurb: "The largest peer-to-peer RV rental marketplace, connecting RV owners with travelers for memorable road trip experiences.", tag: "Travel" },
  { name: "Hormones.org", blurb: "The most trusted, medically reviewed hub for hormone health with provider discovery." },
  { name: "RVing.com", blurb: "The definitive online marketplace for the RV lifestyle — connecting travelers, owners, dealers, and service providers in one trusted platform.", tag: "Travel" },
  { name: "EndAddiction.com", blurb: "Authoritative addiction recovery directory connecting patients to vetted treatment.", tag: "Healthcare" },
  { name: "StemCells.org", blurb: "A compliance-first marketplace for regenerative medicine providers.", tag: "MedTech" },
  { name: "UHNW.org", blurb: "A private network and directory for ultra-high-net-worth services.", tag: "Finance" },
  { name: "CustomHomeBuilders.com", blurb: "The official directory for custom home builders in every U.S. market.", tag: "PropTech" },
  { name: "FundManagers.org", blurb: "An industry registry connecting LPs with verified fund managers.", tag: "Capital Markets" },
  { name: "FinancialAdvisors.org", blurb: "A consumer-first directory of fiduciary advisors with transparent profiles.", tag: "Wealth" },
];

const steps = [
  { phase: "Phase 1", title: "We Create the Foundation", text: "We originate the big idea, craft a detailed business plan, and secure a premium, category-defining domain name — giving your marketplace instant credibility from day one." },
  { phase: "Phase 2", title: "You Step In as Founding CEO", text: "Join as a part-time Founding CEO (~10 hrs/week) and collaborate directly with our world-class design and development team to build and launch the marketplace. No need to quit your day job yet." },
  { phase: "Phase 3", title: "Gain Traction & Revenue", text: "With the platform live, you'll work alongside our marketing experts to attract users, validate demand, and generate early revenue streams." },
  { phase: "Phase 4", title: "Scale Full-Time", text: "Once traction is proven, you'll transition into a full-time CEO role, leading the growth, team expansion, and brand building as we scale the marketplace into a category leader." },
  { phase: "Phase 5", title: "Spin Out & Realize the Upside", text: "When the marketplace matures, we spin it out as a standalone company. With significant equity earned along the way, you have the potential for a life-changing financial outcome." },
];

const whoWeWant = [
  { label: "Relentlessly Driven", desc: "You bring unwavering energy and follow-through, no matter the obstacles." },
  { label: "Strategic Navigator", desc: "You assess the landscape, anticipate challenges, and chart the smartest path forward." },
  { label: "Builder at Heart", desc: "You love turning visions into tangible realities, from concept to completion." },
  { label: "Innovative Thinker", desc: "You see opportunities others miss and generate creative solutions that break the mold." },
  { label: "Resourceful Achiever", desc: "You turn limited time, budget, or tools into results that outperform expectations." },
  { label: "Lifelong Learner", desc: "You constantly expand your skills and knowledge to stay ahead of the curve." },
];

const faqs = [
  {
    q: "Do I need to be an industry expert?",
    a: "Not always. For some ventures, credibility and insider knowledge are critical — so we look for industry experts to step in as CEOs. For others, what matters most is proven execution and entrepreneurial drive — so we look for proven operators.",
  },
  {
    q: "What if I don’t come from the industry?",
    a: "That’s fine. Many marketplaces benefit most from strong operators who excel at building, scaling, and problem-solving. We pair these leaders with advisors, category specialists, and our playbooks so they can quickly build credibility in the space.",
  },
  {
    q: "How do you decide whether to place an industry expert or a proven operator?",
    a: "It depends on the marketplace. Some markets demand insider knowledge from day one (e.g., regulated healthcare). Others are best served by a proven builder who can execute fast, raise standards, and create traction.",
  },
  {
    q: "Do I need prior startup or CEO experience?",
    a: "No. What matters is your track record of success — whether building companies, leading teams, or achieving consistently in your field. We’re looking for people who know how to win and can translate that into leadership.",
  },
  {
    q: "Do I need to code or be technical?",
    a: "No. Our studio provides engineering and design resources. You’ll focus on leading, making decisions, and driving growth. Technical skills are a plus but not a requirement.",
  },
  {
    q: "What resources and support will I get?",
    a: "Every venture has access to our studio’s playbooks, product and engineering teams, design system, go-to-market experts, and capital to fund the early build and initial traction. You’re not alone — we’re in it with you.",
  },
  {
    q: "What happens if the marketplace doesn’t succeed?",
    a: "Even if a specific venture doesn’t scale, you walk away with new skills, experience, and relationships — plus the opportunity to be considered for another venture. Importantly, you won’t have put your own savings at risk.",
  },
  {
    q: "How does equity work?",
    a: "CEOs receive a meaningful equity stake in the venture, with standard vesting and performance top-ups. The exact structure depends on the path (Industry Expert vs Proven Operator) and the marketplace’s requirements.",
  },
  {
    q: "What kind of outcomes are possible?",
    a: "Our goal is to build category-defining marketplaces that can scale into 8-, 9-, or even 10-figure outcomes. With a meaningful equity stake, your success as CEO can be life-changing.",
  },
];

/* -------------------------------------------------
   SMALL HOOKS
-------------------------------------------------- */
function useScrolled() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}

/* -------------------------------------------------
   APP
-------------------------------------------------- */
export default function App() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onHashChange = () => setMenuOpen(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: theme.bg, color: theme.text, fontFamily: stack }}>
      {/* Header styles for responsive nav */}
      <style>{`
        .nav-links { display: flex; gap: 10px; align-items: center; }
        .hamburger { display: none; border: 1px solid ${theme.border}; background: #fff; border-radius: 10px; padding: 8px; }
        .hamburger:focus { outline: none; box-shadow: 0 0 0 6px rgba(225,29,72,.15); }
        @media (max-width: 860px) {
          .nav-links { display: none; }
          .hamburger { display: inline-flex; }
        }
        .mobile-sheet {
          position: fixed; top: 60px; right: 16px; left: 16px;
          border: 1px solid ${theme.border}; border-radius: ${theme.radius.xl}px;
          background: #fff; box-shadow: ${theme.shadow.lg};
          transform: translateY(${menuOpen ? "0" : "-8px"});
          opacity: ${menuOpen ? 1 : 0}; pointer-events: ${menuOpen ? "auto" : "none"};
          transition: transform .18s ease, opacity .18s ease;
          z-index: 60;
        }
        .mobile-sheet a {
          display: block; padding: 14px 18px; text-decoration: none; color: ${theme.text}; font-weight: 600;
        }
        .mobile-sheet a + a { border-top: 1px solid ${theme.border}; }
        .backdrop {
          position: fixed; inset: 0; background: rgba(15, 23, 42, .28);
          opacity: ${menuOpen ? 1 : 0}; pointer-events: ${menuOpen ? "auto" : "none"};
          transition: opacity .18s ease; z-index: 50;
        }
        /* Simple two-column for image/text blocks */
        .media-grid { display: grid; grid-template-columns: 1.1fr .9fr; gap: 20px; align-items: center; }
        @media (max-width: 980px) { .media-grid { grid-template-columns: 1fr; } }
        /* Logo row */
        .logo-row { display:flex; flex-wrap:wrap; gap:18px; align-items:center; opacity:.85 }
      `}</style>

      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 70,
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(8px)",
          borderBottom: `1px solid ${theme.border}`,
          boxShadow: scrolled ? theme.shadow.md : "none",
          transition: "box-shadow .2s ease",
        }}
      >
        <Container>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <svg width="34" height="34" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
                <circle cx="17" cy="17" r="15" fill="white" stroke={theme.red} strokeWidth="4" />
                <circle cx="17" cy="17" r="9"  fill="white" stroke={theme.red} strokeWidth="4" />
                <circle cx="17" cy="17" r="4"  fill={theme.red} />
              </svg>
              <span style={{ fontWeight: 800, letterSpacing: "-0.01em" }}>Marketplace Holdings</span>
            </div>

            {/* Desktop links */}
            <nav className="nav-links" aria-label="Primary">
              <a href="#why-us" style={{ color: theme.text, textDecoration: "none", padding: "8px 10px", borderRadius: 8, fontWeight: 600 }}>
                Why Us
              </a>
              <a href="#ventures" style={{ color: theme.text, textDecoration: "none", padding: "8px 10px", borderRadius: 8, fontWeight: 600 }}>
                Ventures
              </a>
              <a href="#choose-your-path" style={{ color: theme.text, textDecoration: "none", padding: "8px 10px", borderRadius: 8, fontWeight: 600 }}>
                Tracks
              </a>
              <Button href="#apply" size="md">Apply</Button>
            </nav>

            {/* Mobile hamburger */}
            <button
              className="hamburger"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </Container>

        {/* Backdrop */}
        <div className="backdrop" onClick={() => setMenuOpen(false)} role="presentation" />

        {/* Mobile menu sheet */}
        <div id="mobile-menu" className="mobile-sheet" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <a href="#why-us" onClick={() => setMenuOpen(false)}>Why Us</a>
          <a href="#ventures" onClick={() => setMenuOpen(false)}>Ventures</a>
          <a href="#choose-your-path" onClick={() => setMenuOpen(false)}>Tracks</a>
          <a href="#apply" onClick={() => setMenuOpen(false)} style={{ color: "#fff", background: theme.red, borderRadius: `${theme.radius.lg}px`, margin: 12, textAlign: "center" }}>
            Apply
          </a>
        </div>
      </header>

      {/* Hero with background image */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(900px 400px at 20% -10%, rgba(225,29,72,.08), transparent 60%), radial-gradient(700px 280px at 90% 0%, rgba(2,6,23,.06), transparent 60%)",
        }}
      >
        {/* Hero BG image (swap src) */}
        <Img
          src={PH(2400, 1200, "")}
          alt=""
          aspect="3/1"
          cover
          border={false}
          shadow={null}
          style={{ position: "absolute", inset: 0, filter: "grayscale(10%)", opacity: 0.22 }}
        />
        <Container>
          <div style={{ position: "relative", padding: "96px 0 72px", display: "grid", gap: 18, maxWidth: 900 }}>
            <H1>
              The Startup Studio That <span style={{ color: theme.red }}>Builds Category-Defining Marketplaces</span>
            </H1>

            <P dim size={18}>
              <strong>We originate ideas, fund the early build, and apply proven playbooks.</strong> These include premium domains,
              rapid product development, liquidity tactics, growth loops, and capital — giving ventures the unfair advantages
              required to accelerate traction and become category leaders.
            </P>

            {/* Hero collage */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, maxWidth: 820 }}>
              <Img
                src="https://marketplace-holdings-site.vercel.app/images/dashboardnew.png"
                alt="Marketplace analytics dashboard"
                aspect="3/2"
                cover={true}
              />
              <Img
                src="/images/founders-collab.png"
                alt="Founders collaborating in a startup office"
                aspect="3/2"
                cover={true}
              />
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6, zIndex: 1 }}>
              <Button href="#choose-your-path" size="lg">See Tracks</Button>
              <Button href="#why-us" variant="secondary" size="lg">How We Help</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Marketplaces — side image */}
      <Section id="why-marketplaces">
        <div className="media-grid">
          <div>
            <H2>Why We Only Build Online Marketplaces</H2>
            <P dim>
              We don’t dabble—we specialize. Our team helped build one of the largest two-sided marketplaces online, serving millions of users and generating over $1B in transactions.
            </P>

            <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", marginTop: 18 }}>
              <Card>
                <CardHeader title="Crack the Chicken-and-Egg" />
                <CardBody>Proven tactics to seed both sides of the market, create liquidity quickly, and keep engagement compounding.</CardBody>
              </Card>
              <Card>
                <CardHeader title="Scalable Growth Loops" />
                <CardBody>Acquisition, conversion, and retention playbooks that turn early traction into durable network effects.</CardBody>
              </Card>
              <Card>
                <CardHeader title="Capital Efficient" />
                <CardBody>Build smart, not bloated. We prioritize high-leverage features and channels that move core marketplace KPIs.</CardBody>
              </Card>
            </div>
          </div>

          {/* Product/Marketplace mockup image */}
          <div>
            <Img
              src="/images/rvsharehome.png"
              alt="RV marketplace homepage mockup"
              aspect="1487/768"
              cover={false}
              style={{ marginTop: 10 }}
            />
          </div>
        </div>
      </Section>

      {/* Ventures */}
      <Section id="ventures">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 12 }}>
          <H2>Active & Incubating Ventures</H2>
        </div>
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", marginTop: 18 }}>
          {ventures.map((v) => (
            <Card key={v.name}>
              <CardHeader title={v.name} />
              <CardBody>
                <p style={{ margin: 0 }}>{v.blurb}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      {/* ===== NEW SECTION (Option 2: Selective Talent Placement) ===== */}
      <Section id="ceo-placement">
        <H2>Where Proven Leaders Become Marketplace CEOs</H2>
        <P dim>
          You don’t need to start from scratch. We originate the concept, secure the premium domain, and fund the early build.
          Our model is to match people with a <strong>track record of success</strong> — alongside <strong>industry experts</strong> —
          to lead each marketplace, backed by our engineering, design, go-to-market resources, and growth playbooks.
        </P>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 12 }}>
          <Button href="#apply" size="md">Apply to Lead</Button>
          <Button href="#why-us" variant="secondary" size="md">How We Support</Button>
        </div>
      </Section>
      {/* ===== END NEW SECTION ===== */}

      {/* Why Us */}
      <Section id="why-us" alt>
        <H2>Big Upside. Minimal Risk. Maximum Support.</H2>
        <P dim>Unfair advantages from day one so you can focus on building, learning, and compounding traction.</P>

        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            marginTop: 18,
          }}
        >
          <Card>
            <CardHeader title="Proven Track Record" media={<SmallIcon path="M3 12l7 7 11-11" />} />
            <CardBody>
              $1B+ in online sales. Multiple exits across SaaS, e-commerce, and marketplaces. We bring operating muscle to your build.
            </CardBody>
          </Card>

          <Card>
            <CardHeader title="People & Expertise" media={<SmallIcon path="M20 21v-2a4 4 0 0 0-3-3.87M4 21v-2a4 4 0 0 1 3-3.87M7 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />} />
            <CardBody>Founders and advisors with real wins — battle-tested operators in growth, GTM, and product who accelerate your path.</CardBody>
          </Card>

          <Card>
            <CardHeader title="Engineering & Design Resources" media={<SmallIcon path="M3 3h18v14H3zM3 17l6 4 6-4" />} />
            <CardBody>From MVP to iteration, you’ll have engineers and designers aligned to your venture. Our design system shortens time-to-value.</CardBody>
          </Card>

          <Card>
            <CardHeader title="Go-to-Market" media={<SmallIcon path="M3 12h18M12 3v18" />} />
            <CardBody>Full-stack marketing — strategy, creatives, analytics, and paid media with meaningful test budgets to find signal fast.</CardBody>
          </Card>

          <Card>
            <CardHeader title="Capital & Runway" media={<SmallIcon path="M12 1v22M5 7h14" />} />
            <CardBody>We fund the early build and provide runway to test, iterate, and prove traction — without risking your savings.</CardBody>
          </Card>

          <Card>
            <CardHeader title="Playbooks & Frameworks" media={<SmallIcon path="M4 6h16M4 12h16M4 18h16" />} />
            <CardBody>Battle-tested playbooks for growth, product, and GTM — execute what’s proven to work and skip trial-and-error.</CardBody>
          </Card>
        </div>
      </Section>

      {/* Journey with subtle background line */}
      <Section id="model" alt>
        <H2>The Journey</H2>
        <div style={{ position: "relative", marginTop: 18 }}>
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 12,
              top: 0,
              bottom: 0,
              width: 2,
              background: "linear-gradient(#e5e7eb, #f1f5f9)",
              borderRadius: 2,
              opacity: 0.7,
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginLeft: 24 }}>
            {steps.map((s, i) => (
              <Card key={s.title}>
                <CardHeader
                  title={<span style={{ fontSize: 18, fontWeight: 800 }}>{`${s.phase} — ${s.title}`}</span>}
                  media={
                    <SmallIcon
                      path={["M5 12l5 5L20 7", "M12 2l3 7h7l-5.5 4 2 7-6.5-4.5L5 20l2-7L2 9h7z", "M3 12h18", "M12 2v20", "M4 6h16"][i % 5]}
                    />
                  }
                />
                <CardBody>{s.text}</CardBody>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Who We're Looking For with icons */}
      <Section id="kpis">
        <H2>Who We're Looking For</H2>
        <div
          style={{
            display: "grid",
            gap: 12,
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            marginTop: 14,
          }}
        >
          {whoWeWant.map((item, idx) => (
            <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <SmallIcon
                path={
                  [
                    "M13 2L3 14h7l1 8 10-12h-7l-1-8z",
                    "M12 2l7 7-7 7-7-7 7-7z",
                    "M3 22V10l9-7 9 7v12",
                    "M12 20l9-8-9-8-9 8z",
                    "M3 12h18M12 3v18",
                    "M5 3h14M5 9h10M5 15h14",
                  ][idx % 6]
                }
              />
              <p style={{ margin: 0, color: theme.text }}>
                <strong>{item.label}</strong>
                {" — "}
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Choose Your Path */}
<Section id="choose-your-path" alt>
  <H2>Choose Your Path</H2>
  <P dim>
    Two ways to lead a marketplace with us. Depending on the category and your strengths, we’ll place the right CEO —
    sometimes the domain insider, other times the operator with a track record of winning.
  </P>

  <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", marginTop: 18 }}>
    {/* Path 1 — Industry Expert */}
    <Card>
      <CardBody>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <SmallIcon path="M5 3h14M5 9h10M5 15h14" />
          <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800 }}>Path 1: Industry Expert</h3>
        </div>
        <P>
          For category insiders — e.g., a leader in stem cell therapy — who bring deep domain knowledge, trust, and a
          strong network to accelerate credibility and adoption.
        </P>
        <ul style={{ marginTop: 12, paddingLeft: 18, color: theme.subtext, lineHeight: 1.7 }}>
          <li><strong>Insider advantage</strong> on regulations, quality, supply, and demand.</li>
          <li><strong>Instant credibility</strong> with practitioners, partners, and customers.</li>
          <li><strong>Product influence</strong> from day one: standards, workflows, and UX that match reality.</li>
          <li><strong>Studio-backed</strong> engineering, design, GTM, and capital to scale.</li>
        </ul>
        <div style={{ marginTop: 14 }}>
          <Button href="#apply">Apply as Industry Expert</Button>
        </div>
      </CardBody>
    </Card>

    {/* Path 2 — Proven Operator */}
    <Card>
      <CardBody>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <SmallIcon path="M3 12h18M12 3v18" />
          <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800 }}>Path 2: Proven Operator</h3>
        </div>
        <P>
          For entrepreneurial builders with a history of winning — operators who learn fast, execute hard, and drive
          growth regardless of industry background.
        </P>
        <ul style={{ marginTop: 12, paddingLeft: 18, color: theme.subtext, lineHeight: 1.7 }}>
          <li><strong>Track record of execution</strong> across GTM, ops, product, or P&amp;L ownership.</li>
          <li><strong>Bias to action</strong>: validate, ship, iterate, and find signal fast.</li>
          <li><strong>Domain ramp</strong> supported by advisors and playbooks tailored to the category.</li>
          <li><strong>Studio-backed</strong> engineering, design, GTM, and capital to scale.</li>
        </ul>
        <div style={{ marginTop: 14 }}>
          <Button href="#apply" variant="dark">Apply as Proven Operator</Button>
        </div>
      </CardBody>
    </Card>
  </div>
</Section>

      {/* Apply */}
      <section id="apply" style={{ borderTop: `1px solid ${theme.border}`, background: theme.bgAlt }}>
        <style>{`
          @media (max-width: 639px) {
            #apply .apply-inner { padding-left: 20px; padding-right: 20px; }
          }
          #apply input, #apply textarea, #apply select { box-sizing: border-box; width: 100%; }
          #apply .apply-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
          @media (max-width: 860px) { #apply .apply-grid { grid-template-columns: 1fr; } }
          a { color: ${theme.red}; text-decoration-thickness: 2px; text-underline-offset: 3px; }
          a:hover { opacity: .9; }
        `}</style>

        <Container>
          <div className="apply-inner" style={{ padding: "80px 0", maxWidth: 860, margin: "0 auto" }}>
            <Card hover={false}>
              <CardHeader title={<span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>Apply</span>} />
              <CardBody>
                <P dim>Tell us a bit about you and the venture(s) you're excited about.</P>

                <form className="apply-grid" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <Field label="Full Name">
                      <Input placeholder="Jane Founder" />
                    </Field>
                  </div>

                  <div>
                    <Field label="Email">
                      <Input type="email" placeholder="jane@domain.com" />
                    </Field>
                  </div>

                  <div>
                    <Field label="LinkedIn">
                      <Input placeholder="https://linkedin.com/in/..." />
                    </Field>
                  </div>

                  <div>
                    <Field label="Location">
                      <Input placeholder="City, Country" />
                    </Field>
                  </div>

                  <div style={{ gridColumn: "1 / -1" }}>
                    <Field label="Venture Interest">
                      <Input placeholder="Select or type a venture" />
                    </Field>
                  </div>

                  <div style={{ gridColumn: "1 / -1" }}>
                    <Field label="Why You?">
                      <Textarea rows={5} placeholder="Share relevant wins, domain expertise, or the unfair advantage you bring." />
                    </Field>
                  </div>

                  <div style={{ gridColumn: "1 / -1" }}>
                    <Field label="Resume / Portfolio URL">
                      <Input placeholder="https://..." />
                    </Field>
                  </div>

                  <div style={{ gridColumn: "1 / -1", display: "flex", alignItems: "center", gap: 12, marginTop: 6 }}>
                    <Button size="md" onClick={() => alert("Submitted!")}>Submit</Button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </div>
        </Container>
      </section>

      {/* FAQs (always visible, no toggle, no arrow) */}
      <Section id="faq" alt>
        <H2>FAQs</H2>
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", marginTop: 18 }}>
          {faqs.map((f) => (
            <Card key={f.q}>
              <div
                style={{
                  padding: 20,
                  background: "transparent",
                  fontWeight: 800,
                  fontSize: 16,
                  color: theme.text,
                  fontFamily: stack,
                  borderBottom: `1px solid ${theme.border}`,
                }}
              >
                {f.q}
              </div>
              <CardBody>{f.a}</CardBody>
            </Card>
          ))}
        </div>
      </Section>

      {/* Founder Letter with headshots */}
      <section id="equity" style={{ borderTop: `1px solid ${theme.border}`, background: theme.bg }}>
        <style>{`
          @media (max-width: 639px) {
            #equity .equity-inner { padding-left: 20px; padding-right: 20px; }
          }
          #equity article { box-sizing: border-box; width: 100%; }
        `}</style>

        <Container>
          <div className="equity-inner" style={{ padding: "64px 0" }}>
            <div style={{ display: "grid", placeItems: "center" }}>
              <article
                style={{
                  maxWidth: 880,
                  background: "#fff",
                  border: `1px solid ${theme.border}`,
                  borderRadius: theme.radius.xl,
                  padding: 30,
                  lineHeight: 1.75,
                  boxShadow: theme.shadow.sm,
                }}
              >
                {/* Founder image row (single) */}
                <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 12 }}>
                  <Img
                    src="https://pbs.twimg.com/profile_images/1447733203716902915/LHIXjIIR_400x400.jpg"
                    alt="Founder portrait: Mark Jenney"
                    aspect="1/1"
                    radius="50%"
                    style={{ width: 72 }}
                  />
                </div>

                <H2>Dear Future CEO,</H2>
                <P size={16.5}>
                  Some of the most talented people we’ve ever met aren’t running companies — they’re stuck in jobs. Not because they lack
                  drive, but because the leap feels too risky.
                </P>
                <P size={16.5}>We built Marketplace Holdings to change that.</P>

                <P dim>
                  That’s why we start our Founding CEOs with <strong>just ~10 hours a week</strong>. It lets you keep your paycheck while
                  proving traction on something that could change your life. It also lets us both see if this is the right fit before going all
                  in. Building a company together is like a marriage — and you don’t marry someone on the first date.
                </P>

                <div style={{ height: 1, background: theme.border, margin: "22px 0" }} />

                <H3>The Opportunity</H3>
                <P dim>
                  We specialize in building online marketplaces that become category leaders. We’ve done over <strong>$1B in online sales</strong>,
                  scaled marketplaces from zero to millions of users, and built growth systems that compound over time.
                </P>
                <P dim>Now, we’re looking for high-agency, results-driven people who can lead and grow a venture while keeping their current job.</P>

                <H3 style={{ marginTop: 22 }}>Here’s How It Works</H3>
                <ol style={{ marginTop: 10, paddingLeft: 20, color: theme.subtext }}>
                  <li style={{ marginTop: 8 }}>
                    <strong>We bring the idea and infrastructure.</strong> Category-defining marketplace concept. Premium domain name. World-class
                    product and marketing team. Capital to build and test — without touching your savings.
                  </li>
                  <li style={{ marginTop: 8 }}>
                    <strong>You bring your leadership and expertise.</strong> We’re looking for people with tech or digital marketing experience
                    who can execute, adapt, and think strategically. This isn’t theory — you’ll be hands-on building, launching, and growing from day one.
                  </li>
                  <li style={{ marginTop: 8 }}>
                    <strong>You start part-time (~10 hours/week).</strong> Work evenings, weekends, or whenever fits your schedule. Build traction before you make the leap.
                  </li>
                  <li style={{ marginTop: 8 }}>
                    <strong>You transition to full-time when it’s working.</strong> Once you’ve got product-market fit, paying customers, and momentum, you go all-in — with significant equity and a proven growth engine behind you.
                  </li>
                </ol>

                <H3 style={{ marginTop: 22 }}>Your Unfair Advantage</H3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: 12,
                    marginTop: 10,
                  }}
                >
                  <P dim style={{ margin: 0 }}>
                    <strong>$1B+ Track Record</strong> — We’ve built and exited multiple high-growth companies.
                  </P>
                  <P dim style={{ margin: 0 }}>
                    <strong>Full Product Team</strong> — Engineers, designers, and marketers who move fast.
                  </P>
                  <P dim style={{ margin: 0 }}>
                    <strong>Capital & Runway</strong> — We fund the early build and market tests.
                  </P>
                  <P dim style={{ margin: 0 }}>
                    <strong>Proven Playbooks</strong> — Growth, product, and GTM strategies tested at scale.
                  </P>
                </div>

                <H3 style={{ marginTop: 22 }}>What’s In It for You</H3>
                <P dim>
                  You skip the most dangerous part of starting a company — the lonely, underfunded early days — and jump straight to building
                  with resources, mentorship, and capital in place.
                </P>
                <P dim>
                  When the venture scales, we spin it out, and your equity stake could mean a <strong>life-changing financial outcome</strong>.
                </P>

                <div
                  style={{
                    marginTop: 18,
                    padding: 38,
                    border: `1px dashed ${theme.border}`,
                    borderRadius: theme.radius.lg,
                    background: theme.bgAlt,
                  }}
                >
                  <H3>Why Equity Is Your Shot at Life-Changing Wealth</H3>
                  <P dim>
                    A paycheck stops the moment you do. Equity keeps working — compounding your effort, your vision, and your wins. We’re on a mission to launch products that dominate their markets and create generational wealth for the people who build them.
                  </P>
                  <P dim style={{ margin: 0 }}>
                    Here, you’re not an employee. You’re a builder. An owner.
                  </P>
                </div>

                <div style={{ paddingTop: 28 }}>
                  <H3 style={{ marginTop: 0 }}>Who We’re Looking For</H3>
                  <ul style={{ marginTop: 12, paddingLeft: 20, color: theme.subtext }}>
                    <li style={{ marginTop: 6 }}>Thrive on ownership and accountability.</li>
                    <li style={{ marginTop: 6 }}>Have proven skills in tech or digital marketing.</li>
                    <li style={{ marginTop: 6 }}>Can lead, adapt, and solve problems in real time.</li>
                    <li style={{ marginTop: 6 }}>Want to build something big — but smart.</li>
                  </ul>
                </div>

                <H3 style={{ marginTop: 22 }}>Your Next Step</H3>
                <P dim>
                  If you’re ready to explore this, <a href="#apply" style={{ color: theme.red, fontWeight: 700 }}>click here to apply</a>.
                </P>

                <P>
                  <strong>– Mark Jenney</strong>
                  <br />
                  Founder, Marketplace Holdings
                </P>
              </article>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${theme.border}` }}>
        <Container>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              alignItems: "center",
              justifyContent: "space-between",
              padding: "18px 0",
              color: theme.subtext,
              fontSize: 14,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <svg width="24" height="24" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
                <circle cx="17" cy="17" r="15" fill="white" stroke={theme.red} strokeWidth="4" />
                <circle cx="17" cy="17" r="9" fill="white" stroke={theme.red} strokeWidth="4" />
                <circle cx="17" cy="17" r="4" fill={theme.red} />
              </svg>
              <span>© {new Date().getFullYear()} Marketplace Holdings</span>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
