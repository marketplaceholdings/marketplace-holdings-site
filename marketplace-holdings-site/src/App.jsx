/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";

/* -------------------------------------------------
   THEME (tokens)
-------------------------------------------------- */
const theme = {
  red: "#e11d48",
  redHover: "#be123c",
  text: "#0f172a",
  subtext: "#475569",
  border: "#e5e7eb",
  bg: "#ffffff",
  bgAlt: "#f8fafc",

  radius: { sm: 8, md: 12, lg: 16, xl: 24, xxl: 32, pill: 999 },
  space: (n) => `${n * 4}px`,
  shadow: {
    sm: "0 1px 2px rgba(2,6,23,.06)",
    md: "0 8px 30px rgba(2,6,23,.08)",
    lg: "0 18px 60px rgba(2,6,23,.12)",
    xl: "0 30px 80px rgba(2,6,23,.16)",
  },
};

/* -------------------------------------------------
   GLOBAL UTILS
-------------------------------------------------- */
const Section = ({ children, alt = false, id, gradient = false }) => (
  <section
    id={id}
    style={{
      borderTop: `1px solid ${theme.border}`,
      background: gradient
        ? "linear-gradient(180deg, #ffffff, #f8fafc)"
        : alt
        ? theme.bgAlt
        : theme.bg,
    }}
  >
    <Container>
      <div style={{ padding: "100px 0" }}>{children}</div>
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
      lineHeight: 1.05,
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
      lineHeight: 1.2,
      fontWeight: 800,
      letterSpacing: "-0.01em",
      color: theme.text,
    }}
  >
    {children}
  </h2>
);

const H3 = ({ children, weight = 700 }) => (
  <h3
    style={{
      margin: 0,
      fontFamily: stack,
      fontSize: 18,
      lineHeight: 1.25,
      fontWeight: weight,
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

const Img = ({
  src,
  alt,
  aspect = "16/9",
  cover = true,
  radius = `${theme.radius.xxl}px`,
  border = true,
  shadow = "md",
  style,
}) => (
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
const Button = ({ children, variant = "primary", size = "md", href, onClick, full = false }) => {
  const base = {
    // when full, use a block-level flex container so width:100% behaves predictably
    display: full ? "flex" : "inline-flex",
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
    width: full ? "100%" : "auto",
    boxSizing: "border-box", // ← crucial: include padding inside the width
  };

  const variants = {
    primary: { background: theme.red, color: "#fff" },
    secondary: { background: "#fff", color: theme.text, border: `1px solid ${theme.border}` },
    dark: { background: "#0f172a", color: "#fff" },
    ghost: { background: "transparent", color: theme.text, border: `1px solid ${theme.border}` },
  };

  const Comp = href ? "a" : "button";
  const props = href ? { href } : { onClick };

  const onEnter = (e) => {
    e.currentTarget.style.boxShadow = theme.shadow.md;
    if (variant === "primary") e.currentTarget.style.background = theme.redHover;
    if (variant === "ghost") e.currentTarget.style.background = "rgba(225,29,72,.05)";
  };
  const onLeave = (e) => {
    e.currentTarget.style.boxShadow = theme.shadow.sm;
    if (variant === "primary") e.currentTarget.style.background = theme.red;
    if (variant === "ghost") e.currentTarget.style.background = "transparent";
  };

  return (
    <Comp
      {...props}
      style={{ ...base, ...variants[variant] }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
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
      borderRadius: theme.radius.xxl,
      overflow: "hidden",
      background: "#fff",
      boxShadow: theme.shadow.sm,
      transition: "transform .2s ease, box-shadow .2s ease, border-color .2s ease",
      willChange: "transform",
    }}
    onMouseEnter={(e) => {
      if (!hover) return;
      e.currentTarget.style.boxShadow = theme.shadow.lg;
      e.currentTarget.style.borderColor = "#e2e8f0";
      e.currentTarget.style.transform = "translateY(-4px)";
    }}
    onMouseLeave={(e) => {
      if (!hover) return;
      e.currentTarget.style.boxShadow = theme.shadow.sm;
      e.currentTarget.style.transform = "translateY(0)";
    }}
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
      background: "linear-gradient(180deg, rgba(225,29,72,.02), #ffffff)",
      gap: 12,
    }}
  >
    <div
      style={{
        fontSize: 18,
        fontWeight: 700,
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
      padding: "14px 16px",
      borderRadius: theme.radius.xl,
      border: `1px solid ${theme.border}`,
      fontSize: 16,
      outline: "none",
      transition: "box-shadow .2s ease, border-color .2s ease, background-color .2s ease",
      fontFamily: stack,
      background: "#fff",
    }}
    onFocus={(e) => {
      e.currentTarget.style.borderColor = theme.red;
      e.currentTarget.style.boxShadow = "0 0 0 6px rgba(225,29,72,.12)";
      e.currentTarget.style.background = "#fffafc";
    }}
    onBlur={(e) => {
      e.currentTarget.style.borderColor = theme.border;
      e.currentTarget.style.boxShadow = "none";
      e.currentTarget.style.background = "#fff";
    }}
    placeholder={props.placeholder}
  />
);

const Select = (props) => (
  <select
    {...props}
    style={{
      width: "100%",
      padding: "14px 16px",
      borderRadius: theme.radius.xl,
      border: `1px solid ${theme.border}`,
      fontSize: 16,
      outline: "none",
      transition: "box-shadow .2s ease, border-color .2s ease, background-color .2s ease",
      fontFamily: stack,
      background: "#fff",
      appearance: "none",
      WebkitAppearance: "none",
      MozAppearance: "none",
    }}
    onFocus={(e) => {
      e.currentTarget.style.borderColor = theme.red;
      e.currentTarget.style.boxShadow = "0 0 0 6px rgba(225,29,72,.12)";
      e.currentTarget.style.background = "#fffafc";
    }}
    onBlur={(e) => {
      e.currentTarget.style.borderColor = theme.border;
      e.currentTarget.style.boxShadow = "none";
      e.currentTarget.style.background = "#fff";
    }}
  />
);

const Textarea = (props) => (
  <textarea
    {...props}
    style={{
      width: "100%",
      padding: "14px 16px",
      borderRadius: theme.radius.xl,
      border: `1px solid ${theme.border}`,
      fontSize: 16,
      outline: "none",
      transition: "box-shadow .2s ease, border-color .2s ease, background-color .2s ease",
      minHeight: 140,
      resize: "vertical",
      fontFamily: stack,
      background: "#fff",
    }}
    onFocus={(e) => {
      e.currentTarget.style.borderColor = theme.red;
      e.currentTarget.style.boxShadow = "0 0 0 6px rgba(225,29,72,.12)";
      e.currentTarget.style.background = "#fffafc";
    }}
    onBlur={(e) => {
      e.currentTarget.style.borderColor = theme.border;
      e.currentTarget.style.boxShadow = "none";
      e.currentTarget.style.background = "#fff";
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

/* Cute line icons to accompany list items */
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

/* Journey copy (final) */
const steps = [
  { phase: "Phase 1", title: "Originate the Idea", text: "We identify high-potential marketplace opportunities, secure a category-defining domain, and frame the strategy with clear success criteria." },
  { phase: "Phase 2", title: "Build the Foundation", text: "We launch the MVP fast using our studio’s product, design, and engineering resources — trusted experts who plug in with proven playbooks to get the platform market-ready in weeks, not years." },
  { phase: "Phase 3", title: "Match the Right CEO", text: "Depending on the venture, we place the best-fit leader: an industry expert, a proven operator, or a founder with their own idea. This ensures every marketplace has the right leadership DNA from day one." },
  { phase: "Phase 4", title: "Drive Early Growth", text: "We fuel adoption with proven playbooks, test scalable acquisition channels, and create retention loops — turning the initial MVP into a marketplace with compounding engagement." },
  { phase: "Phase 5", title: "Scale & Spin Out", text: "Once traction is proven, the venture spins out as a standalone company. The CEO leads expansion, builds the team, and grows into a category leader — with meaningful equity and life-changing upside." },
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
  { q: "Do I need to be an industry expert?", a: "Not always. For some ventures, credibility and insider knowledge are critical — so we look for industry experts to step in as CEOs. For others, what matters most is proven execution and entrepreneurial drive — so we look for proven operators." },
  { q: "What if I don’t come from the industry?", a: "That’s fine. Many marketplaces benefit most from strong operators who excel at building, scaling, and problem-solving. We pair these leaders with advisors, category specialists, and our playbooks so they can quickly build credibility in the space." },
  { q: "How do you decide whether to place an industry expert or a proven operator?", a: "It depends on the marketplace. Some markets demand insider knowledge from day one (e.g., regulated healthcare). Others are best served by a proven builder who can execute fast, raise standards, and create traction." },
  { q: "Do I need prior startup or CEO experience?", a: "No. What matters is your track record of success — whether building companies, leading teams, or achieving consistently in your field. We’re looking for people who know how to win and can translate that into leadership." },
  { q: "Do I need to code or be technical?", a: "No. Our studio provides engineering and design resources. You’ll focus on leading, making decisions, and driving growth. Technical skills are a plus but not a requirement." },
  { q: "What resources and support will I get?", a: "Every venture has access to our studio’s playbooks, product and engineering teams, design system, go-to-market experts, and capital to fund the early build and initial traction. You’re not alone — we’re in it with you." },
  { q: "What happens if the marketplace doesn’t succeed?", a: "Even if a specific venture doesn’t scale, you walk away with new skills, experience, and relationships — plus the opportunity to be considered for another venture. Importantly, you won’t have put your own savings at risk." },
  { q: "How does equity work?", a: "CEOs receive a meaningful equity stake in the venture, with standard vesting and performance top-ups. The exact structure depends on the path (Industry Expert vs Proven Operator) and the marketplace’s requirements." },
  { q: "What kind of outcomes are possible?", a: "Our goal is to build category-defining marketplaces that can scale into 8-, 9-, or even 10-figure outcomes. With a meaningful equity stake, your success as CEO can be life-changing." },
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

function useActiveSection(ids) {
  const [active, setActive] = React.useState("");
  React.useEffect(() => {
    const getOffsets = () =>
      ids
        .map((id) => {
          const el = document.getElementById(id);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return { id, top: rect.top + window.scrollY };
        })
        .filter(Boolean);

    let offsets = getOffsets();

    const onScroll = () => {
      const y = window.scrollY + 140; // header offset
      let current = ids[0];
      for (const s of offsets) {
        if (y >= s.top) current = s.id;
        else break;
      }
      setActive(current);
    };

    const onResize = () => (offsets = getOffsets());
    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [ids]);
  return active;
}

/* -------------------------------------------------
   APP
-------------------------------------------------- */
export default function App() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const active = useActiveSection([
    "why-marketplaces",
    "ventures",
    "choose-your-path",
    "apply",
  ]);

  React.useEffect(() => {
    const onHashChange = () => setMenuOpen(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: theme.bg, color: theme.text, fontFamily: stack }}>
      {/* Header styles for responsive nav */}
      <style>{`
        .nav-links { display: flex; gap: 12px; align-items: center; }
        .nav-links a {
          color: ${theme.text};
          text-decoration: none;
          padding: 8px 10px;
          border-radius: 8px;
          font-weight: 600;
          position: relative;
        }
        .nav-links a.active::after {
          content: "";
          position: absolute;
          left: 10px; right: 10px; bottom: -6px;
          height: 3px; border-radius: 4px;
          background: ${theme.red};
        }
        .hamburger { display: none; border: 1px solid ${theme.border}; background: #fff; border-radius: 12px; padding: 8px; }
        .hamburger:focus { outline: none; box-shadow: 0 0 0 6px rgba(225,29,72,.15); }
        @media (max-width: 860px) { .nav-links { display: none; } .hamburger { display: inline-flex; } }
        .mobile-sheet {
          position: fixed; top: 60px; right: 16px; left: 16px;
          border: 1px solid ${theme.border}; border-radius: ${theme.radius.xxl}px;
          background: #fff; box-shadow: ${theme.shadow.xl};
          transform: translateY(${menuOpen ? "0" : "-12px"});
          opacity: ${menuOpen ? 1 : 0}; pointer-events: ${menuOpen ? "auto" : "none"};
          transition: transform .28s cubic-bezier(.4,0,.2,1), opacity .18s ease; z-index: 60;
        }
        .mobile-sheet a { display: block; padding: 14px 18px; text-decoration: none; color: ${theme.text}; font-weight: 600; }
        .mobile-sheet a + a { border-top: 1px solid ${theme.border}; }
        .backdrop { position: fixed; inset: 0; background: rgba(15, 23, 42, .28); opacity: ${menuOpen ? 1 : 0}; pointer-events: ${menuOpen ? "auto" : "none"}; transition: opacity .18s ease; z-index: 50; }
        .media-grid { display: grid; grid-template-columns: 1.1fr .9fr; gap: 20px; align-items: center; }
        @media (max-width: 980px) { .media-grid { grid-template-columns: 1fr; } }
        .logo-row { display:flex; flex-wrap:wrap; gap:18px; align-items:center; opacity:.85 }
        @media (max-width: 640px) { .full-sm { width: 100%; } }
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
              <a href="#why-marketplaces" className={active === "why-marketplaces" ? "active" : ""}>Why Marketplaces</a>
              <a href="#ventures" className={active === "ventures" ? "active" : ""}>Ventures</a>
              <a href="#choose-your-path" className={active === "choose-your-path" ? "active" : ""}>Opportunities</a>
              <a href="#apply" className={active === "apply" ? "active" : ""}>Apply</a>
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
          <a href="#why-marketplaces" onClick={() => setMenuOpen(false)}>Why Marketplaces</a>
          <a href="#ventures" onClick={() => setMenuOpen(false)}>Ventures</a>
          <a href="#choose-your-path" onClick={() => setMenuOpen(false)}>Opportunities</a>
          <a href="#apply" onClick={() => setMenuOpen(false)} style={{ color: "#fff", background: theme.red, borderRadius: `${theme.radius.lg}px`, margin: 12, textAlign: "center" }}>
            Apply
          </a>
        </div>
      </header>

      {/* ...the rest of your sections are unchanged from your message... */}
      {/* I’ve kept everything else identical to your last code except the Button fix above. */}
      {/* (For brevity here, keep your existing sections verbatim.) */}

      {/* You can paste your remaining sections here exactly as you sent; only Button changed. */}
    </div>
  );
}
