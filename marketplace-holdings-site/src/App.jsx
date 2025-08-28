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

const H3 = ({ children, weight = 700, style }) => (
  <h3
    style={{
      margin: 0,
      fontFamily: stack,
      fontSize: 18,
      lineHeight: 1.25,
      fontWeight: weight,
      color: theme.text,
      ...style,
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
    boxSizing: "border-box",
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
   DATA (final — no missing domains; RVshare first; .coms before .orgs)
-------------------------------------------------- */
const ventures = [
  // Keep first
  { name: "RVshare.com", blurb: "The largest peer-to-peer RV rental marketplace, connecting RV owners with travelers for memorable road trip experiences.", tag: "Travel" },

  // Top-tier .com category-defining
  { name: "GeneralContracting.com", blurb: "A marketplace and directory built for commercial general contractors, helping developers and property owners find qualified firms for large-scale projects.", tag: "Construction" },
  { name: "IndustrialManufacturing.com", blurb: "The category-defining directory for industrial manufacturers, connecting buyers with trusted suppliers of heavy machinery, components, and plant equipment.", tag: "Manufacturing" },
  { name: "CoPackers.com", blurb: "The go-to directory for food and beverage co-packers, helping brands scale production with trusted partners.", tag: "Manufacturing" },
  { name: "ValuationFirms.com", blurb: "A specialized directory of valuation firms for businesses, assets, and intellectual property, connecting clients with experts they can trust.", tag: "Finance" },
  { name: "ComplianceAudits.com", blurb: "The definitive directory for compliance audits — helping businesses find trusted auditors across industries from SOC 2 to HIPAA.", tag: "Compliance" },
  { name: "SupplementManufacturers.com", blurb: "The category hub connecting brands with vetted, NSF/cGMP-compliant supplement manufacturers, turnkey formulators, and packaging partners.", tag: "Manufacturing" },
  { name: "CustomHomeBuilders.com", blurb: "The official directory for custom home builders in every U.S. market.", tag: "PropTech" },
  { name: "EndAddiction.com", blurb: "Authoritative addiction recovery directory connecting patients to vetted treatment.", tag: "Healthcare" },
  { name: "RVing.com", blurb: "The definitive online marketplace for the RV lifestyle — connecting travelers, owners, dealers, and service providers in one trusted platform.", tag: "Travel" },
  { name: "SecurityAuditDirectory.com", blurb: "A central hub for security audit firms, helping companies find experts in cloud, SOC, and IT infrastructure audits.", tag: "Cybersecurity" },
  { name: "PenetrationTestingFirms.com", blurb: "A trusted hub for penetration testing firms, helping businesses strengthen cybersecurity through verified experts.", tag: "Cybersecurity" },
  { name: "CommercialAsphaltContractors.com", blurb: "The go-to directory for commercial asphalt contractors, connecting property owners with paving experts.", tag: "Construction" },
  { name: "StructuralPestControl.com", blurb: "A definitive directory for structural pest control companies, protecting homes and businesses from infestations.", tag: "Home Services" },
  { name: "ChemicalEngineers.com", blurb: "A central hub for chemical engineers, connecting talent, employers, and industry partners across research, manufacturing, and consulting.", tag: "Engineering" },
  { name: "IntegrativeHealthClinics.com", blurb: "The go-to directory for integrative and functional health clinics, connecting patients with providers that blend conventional and holistic care.", tag: "Healthcare" },
  { name: "SportsPerformanceCoaches.com", blurb: "A curated directory of elite sports performance coaches helping athletes optimize strength, speed, recovery, and mindset.", tag: "Sports & Wellness" },
  { name: "SeniorCompanionship.com", blurb: "A trusted platform connecting families with vetted senior companionship and caregiving services.", tag: "Healthcare" },
  { name: "CustomPoolCompanies.com", blurb: "A trusted directory for custom pool companies, helping homeowners design and build high-quality pools.", tag: "Luxury Living" },

  // High-value .org (category terms; fiduciary/regulated & trade-heavy near top)
  { name: "RegisteredInvestmentAdvisors.org", blurb: "A verified registry of Registered Investment Advisors (RIAs), helping investors find fiduciary-grade financial partners.", tag: "Finance" },
  { name: "RoofingContractors.org", blurb: "The authoritative directory for roofing contractors, connecting homeowners and businesses with licensed professionals nationwide.", tag: "Construction" },
  { name: "Hormones.org", blurb: "The most trusted, medically reviewed hub for hormone health with provider discovery.", tag: "Healthcare" },
  { name: "ResidentialContractors.org", blurb: "The official directory for licensed residential contractors, connecting homeowners with vetted builders and remodelers.", tag: "Construction" },
  { name: "ThirdPartyLogistics.org", blurb: "A category hub for third-party logistics providers, linking brands to shipping, warehousing, and fulfillment solutions.", tag: "Logistics" },
  { name: "LogisticsProviders.org", blurb: "A definitive hub for logistics providers, helping companies connect with partners across supply chain, transport, and distribution.", tag: "Logistics" },
  { name: "CommercialConstruction.org", blurb: "A directory connecting developers and property owners with verified commercial construction firms nationwide.", tag: "Construction" },
  { name: "ElectricalContractors.org", blurb: "The authoritative directory of licensed electrical contractors serving commercial, residential, and industrial markets.", tag: "Construction" },
  { name: "CommercialBanking.org", blurb: "The definitive platform for commercial banking services, connecting businesses with banks that provide lending, treasury, and financial solutions.", tag: "Finance" },
  { name: "EscrowAgents.org", blurb: "A centralized directory for escrow agents, ensuring buyers and sellers find trusted professionals for secure transactions.", tag: "Finance" },
  { name: "TaxAdvisors.org", blurb: "A specialized directory connecting individuals and businesses with verified tax advisors for every unique need.", tag: "Finance" },
  { name: "FundManagers.org", blurb: "An industry registry connecting LPs with verified fund managers.", tag: "Capital Markets" },
  { name: "RegenerativeMedicine.org", blurb: "An authoritative hub for regenerative medicine — connecting patients, researchers, and clinics advancing stem cell, gene therapy, and other cutting-edge treatments.", tag: "Healthcare" },
  { name: "MedicalResearch.org", blurb: "A trusted directory for medical research organizations, CROs, and labs advancing clinical trials and scientific discovery.", tag: "Healthcare" },
  { name: "HairRestorationClinics.org", blurb: "A specialized directory for hair restoration clinics, connecting patients with trusted providers for advanced treatments.", tag: "Healthcare" },
  { name: "UHNW.org", blurb: "A private network and directory for ultra-high-net-worth services.", tag: "Finance" },
  { name: "PrivateEquityDirectory.org", blurb: "A verified directory for private equity firms, connecting investors, founders, and advisors.", tag: "Capital Markets" },
  { name: "PatentLitigation.org", blurb: "A specialized directory of law firms and experts in patent litigation, helping innovators protect and defend their IP.", tag: "Legal" },
  { name: "BeverageManufacturers.org", blurb: "The industry hub connecting beverage brands with contract manufacturers, bottlers, and co-packers.", tag: "Manufacturing" },
  { name: "CPAfirms.org", blurb: "The authoritative registry of certified public accounting firms across the U.S., connecting businesses with trusted financial partners.", tag: "Finance" },
  { name: "IndustrialDesigners.org", blurb: "The go-to hub for industrial designers, connecting brands with design talent across product, packaging, and innovation.", tag: "Design" },
  { name: "CommercialArchitect.org", blurb: "A curated directory for commercial architects, helping developers find top talent for complex projects.", tag: "Design & Construction" },
  { name: "CommercialRoofingContractors.org", blurb: "A trusted directory of commercial roofing contractors, connecting businesses with licensed experts for large-scale projects.", tag: "Construction" },
  { name: "FreightBrokerage.org", blurb: "A marketplace directory for freight brokerages, connecting shippers with licensed freight professionals.", tag: "Logistics" },
  { name: "LasikCenters.org", blurb: "A trusted hub for LASIK centers, helping patients find accredited providers for corrective eye surgery.", tag: "Healthcare" },
  { name: "TennisCourtBuilders.org", blurb: "A specialized directory for tennis court builders, connecting property owners and clubs with expert installers.", tag: "Construction" },
  { name: "SidingContractors.org", blurb: "A directory for siding contractors, helping homeowners find experts in siding installation and repair.", tag: "Construction" },
  { name: "StuccoContractors.org", blurb: "The authoritative directory for stucco contractors, connecting property owners with skilled specialists.", tag: "Construction" },
  { name: "TileInstallers.org", blurb: "A trusted directory of professional tile installers, helping homeowners and developers source qualified craftsmen.", tag: "Construction" },
  { name: "3plCompanies.org", blurb: "The definitive directory of third-party logistics (3PL) companies, connecting brands with warehousing, shipping, and fulfillment partners.", tag: "Logistics" },
  { name: "soc2audit.org", blurb: "A directory of SOC 2 audit firms, connecting companies with trusted providers for data security compliance.", tag: "Compliance" },
  { name: "HIPAAfirms.org", blurb: "The leading hub for HIPAA compliance firms, helping healthcare providers and tech companies meet privacy standards.", tag: "Compliance" },
  { name: "FDAcompliance.org", blurb: "The authoritative directory for FDA compliance consultants and firms, guiding companies through regulatory approval and audits.", tag: "Compliance" },
  { name: "SmallEngineRepair.org", blurb: "A national directory of small engine repair shops, helping consumers and businesses maintain equipment.", tag: "Services" },
];

/* Show X at a time */
const BATCH_SIZE = 6;

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

/* >>> UPDATED FAQs <<< */
const faqs = [
  { q: "Who’s a great fit for this?", a: "Builders who bias to action, have a track record of winning (in any domain), and want meaningful ownership. You don’t need to be a coder; you do need to lead, learn quickly, and ship." },
  { q: "Do I need to be an industry expert?", a: "Not always. Some ventures benefit from an insider on day one; others succeed fastest with a proven operator. We’ll place you on the best path based on your strengths." },
  { q: "I’m not technical — is that a blocker?", a: "No. Our studio provides engineering and design resources. Technical literacy helps, but your focus is leading the company and driving traction." },
  { q: "What does the selection process look like?", a: "Short application → intro conversation → deep-dive on a venture or your idea → practical exercise (lightweight) → mutual fit & offer. The exact steps vary by path and category." },
  { q: "How soon will I hear back after applying?", a: "We review every application and typically respond quickly with next steps if there’s a potential fit." },
  { q: "Can I apply to multiple paths?", a: "Yes. If you’re open to more than one path, note that on your application and we’ll guide you toward the best fit." },
  { q: "Where is the role based? Is it remote?", a: "We work with CEOs across the U.S. with a remote-first setup. Some ventures may benefit from periodic in-person work with customers or advisors." },
  { q: "What’s the time commitment?", a: "This is a full-time CEO role once we green-light a venture. During early validation we may scope part-time work case-by-case to test fit and signal." },
  { q: "How do compensation and equity work?", a: "CEOs receive meaningful equity with standard vesting. Cash comp is set to support focus, and we add performance-based top-ups as the venture scales." },
  { q: "Who owns the IP and the domain?", a: "The venture. We form the company, assign assets to it, and you lead it with a significant ownership stake." },
  { q: "What resources do I get in the first 90 days?", a: "Playbooks, product/design/engineering support, GTM help, access to advisors, and budget for validation and early growth." },
  { q: "How do I pitch my own marketplace idea?", a: "Share the customer, the painful problem, why a marketplace is the right mechanism, how liquidity forms, and early proof (signals, waitlist, expert calls). We’ll co-develop the thesis if we align." },
  { q: "What if the first concept doesn’t hit traction?", a: "We kill ideas quickly and keep winners. If a concept isn’t working, we’ll decide together whether to pivot within the category or place you on another venture." },
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
  const active = useActiveSection(["why-marketplaces", "ventures", "choose-your-path", "apply"]);

  // Progressive reveal state for ventures
  const [visibleCount, setVisibleCount] = React.useState(BATCH_SIZE);
  const remaining = Math.max(ventures.length - visibleCount, 0);

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

            <nav className="nav-links" aria-label="Primary">
              <a href="#why-marketplaces" className={active === "why-marketplaces" ? "active" : ""}>Why Marketplaces</a>
              <a href="#ventures" className={active === "ventures" ? "active" : ""}>Ventures</a>
              <a href="#choose-your-path" className={active === "choose-your-path" ? "active" : ""}>Opportunities</a>
              <a href="#apply" className={active === "apply" ? "active" : ""}>Apply</a>
            </nav>

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

        <div className="backdrop" onClick={() => setMenuOpen(false)} role="presentation" />

        <div id="mobile-menu" className="mobile-sheet" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <a href="#why-marketplaces" onClick={() => setMenuOpen(false)}>Why Marketplaces</a>
          <a href="#ventures" onClick={() => setMenuOpen(false)}>Ventures</a>
          <a href="#choose-your-path" onClick={() => setMenuOpen(false)}>Opportunities</a>
          <a href="#apply" onClick={() => setMenuOpen(false)} style={{ color: "#fff", background: theme.red, borderRadius: `${theme.radius.lg}px`, margin: 12, textAlign: "center" }}>
            Apply
          </a>
        </div>
      </header>

      {/* 1) HERO */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(900px 400px at 20% -10%, rgba(225,29,72,.08), transparent 60%), radial-gradient(700px 280px at 90% 0%, rgba(2,6,23,.06), transparent 60%)",
        }}
      >
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
          <div style={{ position: "relative", padding: "110px 0 80px", display: "grid", gap: 18, maxWidth: 900 }}>
            <H1>
              The Startup Studio That Builds Category-Defining <span style={{ color: theme.red }}>Marketplaces</span>
            </H1>

            <P dim size={18} style={{ maxWidth: 680 }}>
              <strong>We originate ideas, fund the early build, and apply proven playbooks.</strong> These include premium domains,
              rapid product development, liquidity tactics, growth loops, and capital — giving ventures the unfair advantages
              required to accelerate traction and become category leaders.
            </P>

            <div style={{ maxWidth: 860, marginTop: 6 }}>
              <Img
                src="https://marketplace-holdings-site.vercel.app/images/marketplaceimage.png"
                alt="Marketplace flywheel: the circular liquidity cycle for online marketplaces"
                aspect="16/9"
                cover={false}
                shadow="lg"
                style={{ background: "#fff", padding: 18, boxSizing: "border-box" }}
              />
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 10, zIndex: 1 }}>
              <Button href="#choose-your-path" size="lg">Explore Opportunities</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2) WHY MARKETPLACES */}
      <Section id="why-marketplaces" alt gradient>
        <div className="media-grid">
          <div>
            <H2>Why We Only Build Online Marketplaces</H2>
            <P dim style={{ maxWidth: 680 }}>
              We don’t dabble — we specialize. Our team has operated at marketplace scale (millions of users; $1B+ in transactions)
              and we apply that specialization to each new category we build.
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

      {/* 3) VENTURES */}
      <Section id="ventures">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 12 }}>
          <H2>Active & Incubating Ventures</H2>
        </div>

        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", marginTop: 18 }}>
          {ventures.slice(0, visibleCount).map((v) => (
            <Card key={v.name}>
              <CardHeader title={v.name} />
              <CardBody>
                <p style={{ margin: 0 }}>{v.blurb}</p>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Load more controls */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 16, gap: 10 }}>
          {remaining > 0 ? (
            <Button
              variant="secondary"
              onClick={() => setVisibleCount((n) => Math.min(n + BATCH_SIZE, ventures.length))}
            >
              View more
            </Button>
          ) : (
            <Button variant="ghost" onClick={() => setVisibleCount(BATCH_SIZE)}>
              Show less
            </Button>
          )}
        </div>
      </Section>

      {/* 4) WHY US */}
      <Section id="why-us" alt>
        <H2>Big Upside. Minimal Risk. Maximum Support.</H2>
        <P dim style={{ maxWidth: 680 }}>Unfair advantages from day one so you can focus on building, learning, and compounding traction.</P>

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
              $1B+ in online sales. Operating experience across SaaS, e-commerce, and marketplaces that brings real operating muscle to your build.
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

      {/* 5) THE JOURNEY */}
      <Section id="model">
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
                  media={<SmallIcon path={["M5 12l5 5L20 7", "M12 2l3 7h7l-5.5 4 2 7-6.5-4.5L5 20l2-7L2 9h7z", "M3 12h18", "M12 2v20", "M4 6h16"][i % 5]} />}
                />
                <CardBody>{s.text}</CardBody>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* 6) OPPORTUNITIES */}
      <Section id="choose-your-path" alt>
        <H2>Explore the Opportunities. Choose the Path That Fits You.</H2>
        <P dim style={{ maxWidth: 680 }}>
          Three ways to lead a marketplace with us — each with meaningful equity ownership. Depending on the category and your strengths,
          we’ll place the right CEO: sometimes the domain insider, other times the operator with a track record of winning, or you can bring your own idea.
        </P>

        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 18, maxWidth: 860, marginInline: "auto" }}>
          <Card>
            <CardBody>
              <H3 weight={800} style={{ margin: 0 }}>Path 1: Industry Expert</H3>
              <P>
                For category insiders who bring deep domain knowledge, trust, and a
                strong network to accelerate credibility and adoption.
              </P>
              <ul style={{ marginTop: 12, paddingLeft: 18, color: theme.subtext, lineHeight: 1.7 }}>
                <li><strong>Insider advantage</strong> on regulations, quality, supply, and demand.</li>
                <li><strong>Instant credibility</strong> with practitioners, partners, and customers.</li>
                <li><strong>Product influence</strong> from day one: standards, workflows, and UX that match reality.</li>
                <li><strong>Studio-backed</strong> engineering, design, GTM, and capital to scale.</li>
              </ul>
              <div style={{ marginTop: 14 }}>
                <Button href="#apply" full>Apply as Industry Expert</Button>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <H3 weight={800} style={{ margin: 0 }}>Path 2: Proven Operator</H3>
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
                <Button href="#apply" variant="dark" full>Apply as Proven Operator</Button>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <H3 weight={800} style={{ margin: 0 }}>Path 3: Bring Your Own Marketplace Idea</H3>
              <P>
                Have a marketplace you’re burning to build? Pitch it to us. If we align on the thesis, we’ll partner with you to validate,
                build, and launch using our capital, team, and playbooks.
              </P>
              <ul style={{ marginTop: 12, paddingLeft: 18, color: theme.subtext, lineHeight: 1.7 }}>
                <li><strong>Co-develop the thesis</strong> and success criteria with our studio.</li>
                <li><strong>Access our build engine</strong> — engineers, designers, and GTM support.</li>
                <li><strong>Structured validation</strong> to find signal fast and allocate capital wisely.</li>
                <li><strong>Founder-led</strong> — you remain the driving force and prospective CEO.</li>
              </ul>
              <div style={{ marginTop: 14 }}>
                <Button href="#apply" variant="secondary" full>Pitch Your Idea</Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </Section>

      {/* 7) FOUNDER LETTER */}
      <Section id="equity" gradient>
        <div style={{ display: "grid", placeItems: "center" }}>
          <article
            style={{
              maxWidth: 820,
              background: "linear-gradient(180deg, rgba(225,29,72,.03), #ffffff)",
              border: `1px solid ${theme.border}`,
              borderRadius: theme.radius.xxl,
              padding: 34,
              lineHeight: 1.8,
              boxShadow: theme.shadow.lg,
              fontFamily: stack,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 12, marginBottom: 20 }}>
              <div style={{ display: "flex", flexDirection: "row", gap: 12 }}>
                <Img
                  src="https://media.licdn.com/dms/image/v2/D5603AQGAEAcvSKVjqQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696810635655?e=1759363200&v=beta&t=i5g3DPcfedPZHvh9vuQUb34Y3YI1c9Ds2pEg7fmi_v4"
                  alt="Founder portrait (LinkedIn)"
                  aspect="1/1"
                  radius="50%"
                  style={{ width: 72 }}
                  shadow={null}
                />
                <Img
                  src="https://pbs.twimg.com/profile_images/1447733203716902915/LHIXjIIR_400x400.jpg"
                  alt="Founder portrait (Twitter)"
                  aspect="1/1"
                  radius="50%"
                  style={{ width: 72 }}
                  shadow={null}
                />
              </div>

              <H2>Dear Future Partner,</H2>
            </div>

            <P style={{ marginTop: 12 }}>
              At <strong>Marketplace Holdings</strong>, we’re not building alone. We’re looking for partners to lead the next generation of
              category-defining marketplaces — as CEOs and meaningful equity owners.
            </P>
            <P>
              We originate ideas, validate models, secure premium domains, and fund the early build. But the most important part of every
              venture is <strong>who leads it</strong>. That’s where you come in.
            </P>

            <div style={{ height: 1, background: theme.border, margin: "22px 0" }} />

            <H3 weight={700} style={{ letterSpacing: ".02em" }}>Three Ways to Partner</H3>
            <P style={{ marginTop: 16 }}>
              <strong>Path 1: The Industry Expert.</strong> You’ve spent years inside a category — you understand the nuance, the trust
              dynamics, the regulations, and the players. You bring insider knowledge and credibility; we bring the team, capital, domain,
              and playbooks to build the category standard.
            </P>
            <P>
              <strong>Path 2: The Proven Operator.</strong> You’ve shown you can execute and win — across GTM, ops, product, or P&amp;L.
              We pair you with advisors and frameworks to ramp quickly in a category and move fast from validation to traction.
            </P>
            <P>
              <strong>Path 3: The Founder With an Idea.</strong> You already have a marketplace you’re burning to build. If our thesis
              aligns, we’ll fund validation, build with you, and help launch using our resources and growth systems.
            </P>

            <div style={{ height: 1, background: theme.border, margin: "22px 0" }} />

            <H3 weight={700} style={{ letterSpacing: ".02em" }}>Why Partner With Us</H3>
            <P dim style={{ marginTop: 12 }}><strong>Meaningful Equity</strong> — Own a significant stake in the company you lead.</P>
            <P dim style={{ marginTop: 8 }}><strong>$1B+ Track Record</strong> — Operating experience guiding strategy and execution.</P>
            <P dim style={{ marginTop: 8 }}><strong>Full Product Team</strong> — Engineers, designers, and GTM support from day one.</P>
            <P dim style={{ marginTop: 8 }}><strong>Capital &amp; Runway</strong> — Funded validation and early growth without risking your savings.</P>
            <P dim style={{ marginTop: 8 }}><strong>Proven Playbooks</strong> — Supply &amp; demand flywheels, growth loops, and marketplace frameworks.</P>
            <P dim style={{ marginTop: 8 }}><strong>Premium Domains</strong> — Category-defining assets that build instant credibility.</P>

            <H3 weight={700} style={{ marginTop: 28, letterSpacing: ".02em" }}>The Upside</H3>
            <P>
              This isn’t employment — it’s ownership. We’re building companies designed to scale into <strong>8-, 9-, even 10-figure outcomes</strong>.
              With meaningful equity, the upside can be life-changing.
            </P>

            <H3 weight={700} style={{ marginTop: 28, letterSpacing: ".02em" }}>Your Next Step</H3>
            <P>
              If you’re ready to explore a partnership,{" "}
              <a href="#apply" style={{ color: theme.red, fontWeight: 700 }}>click here to apply</a>.
            </P>

            <P style={{ marginTop: 28 }}>
              <strong>– Zach Whitehead, Mark Jenney</strong>
              <br />
              Founders, Marketplace Holdings
            </P>
          </article>
        </div>
      </Section>

      {/* 8) WHO WE'RE LOOKING FOR */}
      <Section id="kpis" alt>
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
                <strong>{item.label}</strong>{" — "}{item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 9) APPLY */}
      <Section id="apply">
        <style>{`
          @media (max-width: 639px) { #apply .apply-inner { padding-left: 20px; padding-right: 20px; } }
          #apply input, #apply textarea, #apply select { box-sizing: border-box; width: 100%; }
          #apply .apply-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
          @media (max-width: 860px) { #apply .apply-grid { grid-template-columns: 1fr; } }
          a { color: ${theme.red}; text-decoration-thickness: 2px; text-underline-offset: 3px; }
          a:hover { opacity: .9; }
        `}</style>

        <div className="apply-inner" style={{ maxWidth: 860, margin: "0 auto" }}>
          <Card hover={false}>
            <CardHeader title={<span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>Start the Conversation</span>} />
            <CardBody>
              <P dim>Tell us a bit about you and which opportunity fits you best.</P>

              <form className="apply-grid" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <Field label="Full Name">
                    <Input placeholder="John Founder" />
                  </Field>
                </div>

                <div>
                  <Field label="Email">
                    <Input type="email" placeholder="john@domain.com" />
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
                  <Field label="Preferred Opportunity">
                    <Select defaultValue="">
                      <option value="" disabled>Select a path</option>
                      <option>Path 1: Industry Expert</option>
                      <option>Path 2: Proven Operator</option>
                      <option>Path 3: Bring Your Own Marketplace Idea</option>
                    </Select>
                  </Field>
                </div>

                <div style={{ gridColumn: "1 / -1" }}>
                  <Field label="Why You?">
                    <Textarea rows={5} placeholder="Share relevant wins, domain expertise, or the unfair advantage you bring." />
                  </Field>
                </div>

                <div style={{ gridColumn: "1 / -1", display: "flex", alignItems: "center", gap: 12, marginTop: 6 }}>
                  <Button size="lg" full onClick={() => alert("Submitted!")}>Submit</Button>
                </div>
              </form>
            </CardBody>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${theme.border}`, background: theme.bg }}>
        <Container>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "26px 0",
              color: theme.subtext,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="22" height="22" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
                <circle cx="17" cy="17" r="15" fill="white" stroke={theme.red} strokeWidth="4" />
                <circle cx="17" cy="17" r="9" fill="white" stroke={theme.red} strokeWidth="4" />
                <circle cx="17" cy="17" r="4" fill={theme.red} />
              </svg>
              <span>© {new Date().getFullYear()} Marketplace Holdings</span>
            </div>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#why-marketplaces" style={{ color: "#94a3b8", textDecoration: "none" }}>Why Marketplaces</a>
              <a href="#ventures" style={{ color: "#94a3b8", textDecoration: "none" }}>Ventures</a>
              <a href="#choose-your-path" style={{ color: "#94a3b8", textDecoration: "none" }}>Opportunities</a>
              <a href="#apply" style={{ color: "#94a3b8", textDecoration: "none" }}>Apply</a>
            </div>

            <div style={{ fontSize: 13, color: "#94a3b8" }}>
              17190 Bernardo Center Dr, Suite 200
              <br />
              San Diego, CA 92128
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
