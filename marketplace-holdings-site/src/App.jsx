/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";

// --------------------------------------
// THEME (tokens)
// --------------------------------------
const theme = {
  red: "#e11d48",
  text: "#111827",
  subtext: "#4b5563",
  border: "#e5e7eb",
  bg: "#ffffff",
  bgAlt: "#f9fafb",

  // tokens
  radius: { sm: 8, md: 12, lg: 16, xl: 24 },
  space: (n) => `${n * 4}px`, // 4px scale
  shadow: {
    sm: "0 1px 2px rgba(17,24,39,.06)",
    md: "0 6px 20px rgba(17,24,39,.08)",
    lg: "0 16px 40px rgba(17,24,39,.12)",
  },
};

// --------------------------------------
// UI PRIMITIVES
// --------------------------------------
const Container = ({ children, wide = false }) => (
  <div
    style={{
      maxWidth: wide ? 1320 : 1080,
      margin: "0 auto",
      padding: "0 16px",
    }}
  >
    {children}
  </div>
);

const H1 = ({ children }) => (
  <h1
    style={{
      fontSize: 48,
      lineHeight: 1.1,
      fontWeight: 800,
      letterSpacing: -0.5,
      color: theme.text,
      margin: 0,
    }}
  >
    {children}
  </h1>
);
const H2 = ({ children }) => (
  <h2
    style={{
      fontSize: 28,
      lineHeight: 1.2,
      fontWeight: 800,
      letterSpacing: -0.2,
      color: theme.text,
      margin: 0,
    }}
  >
    {children}
  </h2>
);
const H3 = ({ children }) => (
  <h3
    style={{
      fontSize: 18,
      lineHeight: 1.3,
      fontWeight: 800,
      color: theme.text,
      margin: 0,
    }}
  >
    {children}
  </h3>
);
const P = ({ children, dim = false, size = 16 }) => (
  <p
    style={{
      marginTop: theme.space(3),
      color: dim ? theme.subtext : theme.text,
      fontSize: size,
      lineHeight: 1.65,
    }}
  >
    {children}
  </p>
);

const Button = ({ children, variant = "primary", size = "md", href, onClick }) => {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.radius.lg,
    padding: size === "lg" ? `${theme.space(3)} ${theme.space(4)}` : `${theme.space(2.5)} ${theme.space(3.5)}`,
    fontWeight: 700,
    border: "1px solid transparent",
    cursor: "pointer",
    textDecoration: "none",
    fontSize: size === "lg" ? 16 : 14,
    boxShadow: theme.shadow.sm,
    transition: "transform .06s ease, box-shadow .2s ease, background-color .2s ease, color .2s ease",
    outline: "none",
  };
  const variants = {
    primary: { background: theme.red, color: "#fff" },
    secondary: { background: "#fff", color: theme.text, border: `1px solid ${theme.border}` },
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
      onFocus={(e) => (e.currentTarget.style.boxShadow = `0 0 0 4px rgba(225,29,72,.15), ${theme.shadow.md}`)}
      onBlur={(e) => (e.currentTarget.style.boxShadow = theme.shadow.sm)}
    >
      {children}
    </Comp>
  );
};

const Badge = ({ children }) => (
  <span
    style={{
      display: "inline-block",
      background: "#ffe4e6",
      color: "#9f1239",
      padding: "6px 10px",
      borderRadius: theme.radius.md,
      fontSize: 12,
      fontWeight: 700,
    }}
  >
    {children}
  </span>
);

const Card = ({ children, hover = true }) => (
  <div
    style={{
      border: `1px solid ${theme.border}`,
      borderRadius: theme.radius.lg,
      overflow: "hidden",
      background: "#fff",
      boxShadow: theme.shadow.sm,
      transition: "transform .12s ease, box-shadow .2s ease",
    }}
    onMouseEnter={(e) => hover && (e.currentTarget.style.boxShadow = theme.shadow.md)}
    onMouseLeave={(e) => hover && (e.currentTarget.style.boxShadow = theme.shadow.sm)}
  >
    {children}
  </div>
);
const CardHeader = ({ title, extra }) => (
  <div
    style={{
      padding: 18,
      borderBottom: `1px solid ${theme.border}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
    }}
  >
    <div style={{ fontSize: 18, fontWeight: 800, display: "flex", alignItems: "center", gap: 10 }}>{title}</div>
    {extra}
  </div>
);
const CardBody = ({ children }) => (
  <div style={{ padding: 18, color: theme.subtext, fontSize: 14, lineHeight: 1.65 }}>{children}</div>
);

const Field = ({ label, children }) => (
  <label style={{ display: "block" }}>
    <div style={{ fontSize: 13, color: theme.text, marginBottom: 6, fontWeight: 600 }}>{label}</div>
    {children}
  </label>
);

const Input = (props) => (
  <input
    {...props}
    style={{
      width: "100%",
      padding: "12px 14px",
      borderRadius: theme.radius.md,
      border: `1px solid ${theme.border}`,
      fontSize: 14,
      outline: "none",
      transition: "box-shadow .2s ease, border-color .2s ease",
    }}
    onFocus={(e) => {
      e.currentTarget.style.borderColor = theme.red;
      e.currentTarget.style.boxShadow = "0 0 0 4px rgba(225,29,72,.12)";
    }}
    onBlur={(e) => {
      e.currentTarget.style.borderColor = theme.border;
      e.currentTarget.style.boxShadow = "none";
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
      borderRadius: theme.radius.md,
      border: `1px solid ${theme.border}`,
      fontSize: 14,
      outline: "none",
      transition: "box-shadow .2s ease, border-color .2s ease",
      minHeight: 120,
      resize: "vertical",
    }}
    onFocus={(e) => {
      e.currentTarget.style.borderColor = theme.red;
      e.currentTarget.style.boxShadow = "0 0 0 4px rgba(225,29,72,.12)";
    }}
    onBlur={(e) => {
      e.currentTarget.style.borderColor = theme.border;
      e.currentTarget.style.boxShadow = "none";
    }}
  />
);

const CheckIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={theme.red}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginTop: 3 }}
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

// Inline icons (no external packages)
const RocketIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5L7 14l3 3-2.5 2.5a2 2 0 0 1-3-3z" />
    <path d="M12 6l6 6 3-9-9 3z" />
    <path d="M15 9l-6 6" />
    <path d="M5 7l3 3" />
  </svg>
);
const ScaleIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18" />
    <path d="M7 7h10" />
    <path d="M3 7l4 9 4-9" />
    <path d="M13 7l4 9 4-9" />
  </svg>
);

// --------------------------------------
// DATA
// --------------------------------------
const ventures = [
  { name: "RVshare.com", blurb: "The largest peer-to-peer RV rental marketplace, connecting RV owners with travelers for memorable road trip experiences.", tag: "Travel" },
  { name: "Hormones.org", blurb: "The most trusted, medically reviewed hub for hormone health with provider discovery." },
  { name: "RVing.com", blurb: "A curated marketplace for epic RV trips and premium rentals.", tag: "Travel" },
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
  { label: "Relentlessly Driven", desc: "You bring unwavering energy and follow-through, no matter the obstacles. (Pure grit and persistence)" },
  { label: "Strategic Navigator", desc: "You assess the landscape, anticipate challenges, and chart the smartest path forward. (High-level strategy and foresight)" },
  { label: "Builder at Heart", desc: "You love turning visions into tangible realities, from concept to completion. (Hands-on creation and execution)" },
  { label: "Innovative Thinker", desc: "You see opportunities others miss and generate creative solutions that break the mold. (Originality and idea generation)" },
  { label: "Resourceful Achiever", desc: "You turn limited time, budget, or tools into results that outperform expectations. (Scrappiness and efficiency)" },
  { label: "Lifelong Learner", desc: "You constantly expand your skills and knowledge to stay ahead of the curve. (Adaptability and growth mindset)" },
];

const faqs = [
  {
    q: "Is this remote?",
    a: "Yes. We’re remote-first. U.S. time-zone overlap for a weekly video call is preferred, but you can build from anywhere with a laptop, Wi-Fi, and the drive to make it happen.",
  },
  {
    q: "Do I need prior startup or CEO experience?",
    a: "No. We’re looking for builders at heart — people who take action, solve problems, and lead projects to completion. If you have initiative and persistence, you can learn the rest with our support.",
  },
  {
    q: "Do I have to be technical or know how to code?",
    a: "You should be comfortable working online and navigating web tools. Being a coder or digital marketer is a plus, but not required — you’ll have access to experienced developers and designers to build the product while you lead and grow the venture.",
  },
  {
    q: "How do equity and compensation work?",
    a: "Standard 4-year vesting with a 1-year cliff, plus milestone top-ups for outperformance. Two tracks: More Equity / Deferred Hourly Compensation (maximize upside) or Less Equity + Upfront Hourly Compensation (earn income while you build).",
  },
  {
    q: "How flexible are the ~10 hours per week?",
    a: "Very. You can work evenings, weekends, or carve out focused blocks during the week. It’s designed to fit around your current commitments until the venture is ready for full-time focus.",
  },
  {
    q: "How long until I can go full-time?",
    a: "That depends on traction — paying customers, product-market fit, and growth momentum. Once the business proves itself, you can step in full-time with confidence.",
  },
  {
    q: "Can I keep my day job while doing this?",
    a: "Yes. The goal is to validate the business before making the leap from your current role.",
  },
  {
    q: "What resources and support will I get?",
    a: "Hands-on help from day one — developers, designers, marketing support, experienced advisors, and funding for the essentials. We act as your partner throughout the build.",
  },
  {
    q: "What happens if the startup doesn’t work out?",
    a: "You’ll walk away with new skills, experience, and a stronger network — without having put your own capital at risk.",
  },
  {
    q: "How do you match me with a venture?",
    a: "We’ll align your background and interests with one of our marketplaces or collaborate on a new concept together.",
  },
  {
    q: "What could my equity be worth in ~5 years?",
    a: "Our aim is for your equity to create transformational wealth if the venture hits its targets. In Track 1, the goal is for your equity stake to be worth $5M to $10M+. In Track 2, the goal is $20M to $40M+. These are targets, not guarantees, and depend on execution, market conditions, and scaling the company into a category leader.",
  },
  {
    q: "What exactly does a part-time Founding CEO do in the first few months?",
    a: "Turn an idea into traction. You’ll validate the market, work with our team to build and refine the product, and start signing up early customers or partners. It’s the builder’s phase — high creativity, fast feedback, and laying the foundation for growth.",
  },
  {
    q: "Will I have a co-founder or be working solo?",
    a: "You won’t be building alone. You’ll be the driving force as the Founding CEO, with our studio alongside you — acting as de facto co-founders across strategy, product, marketing, and key decisions.",
  },
];

// --------------------------------------
// SMALL HOOKS / COMPONENTS
// --------------------------------------
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

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Card>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          textAlign: "left",
          padding: 18,
          border: "none",
          background: "transparent",
          cursor: "pointer",
          fontWeight: 800,
          fontSize: 16,
          color: theme.text,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        aria-expanded={open}
      >
        <span>{q}</span>
        <span style={{ transform: `rotate(${open ? 90 : 0}deg)`, transition: "transform .2s ease" }}>›</span>
      </button>
      {open && <CardBody>{a}</CardBody>}
    </Card>
  );
};

// --------------------------------------
// APP
// --------------------------------------
export default function App() {
  const scrolled = useScrolled();

  return (
    <div style={{ minHeight: "100vh", background: theme.bg, color: theme.text }}>
      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(6px)",
          borderBottom: `1px solid ${theme.border}`,
          boxShadow: scrolled ? theme.shadow.md : "none",
          transition: "box-shadow .2s ease",
        }}
      >
        <Container>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 12, background: `linear-gradient(135deg, ${theme.red}, #fb7185)` }} />
              <span style={{ fontWeight: 700 }}>Marketplace Holdings</span>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <Button href="#apply" size="md">Apply</Button>
            </div>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <section style={{ background: `radial-gradient(1000px 400px at 20% -10%, rgba(225,29,72,.06), transparent 60%)` }}>
        <Container>
          <div style={{ padding: "96px 0 72px" }}>
            <H1>
              Build a Company That Could Change Your Life — <span style={{ color: theme.red }}>Without Quitting Your Job</span>
            </H1>
            <P dim size={18}>
              <strong>Most founders risk everything. You don't have to.</strong> Join our marketplace startup studio as a part-time
              Founding CEO (~10 hrs/wk). We provide the idea, resources, and a skilled product team—so you can design, build, and
              launch your product while proving traction before going all-in. Build momentum first, then step into a full-time role
              with significant equity and the potential for a life-changing financial outcome.
            </P>
            
          </div>
        </Container>
      </section>

      {/* Why Us Section */}
      <section id="why-us" style={{ borderTop: `1px solid ${theme.border}`, background: theme.bgAlt }}>
        <Container>
          <div style={{ padding: `${theme.space(12)} 0` }}>
            <H2>Big Upside. Minimal Risk. Maximum Support.</H2>
            <P dim>From day one, you get the unfair advantages most founders only dream of — so you can focus on building, learning, and compounding traction.</P>

            <div
              style={{
                display: "grid",
                gap: 16,
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                marginTop: 18,
              }}
            >
              <Card>
                <CardHeader title="Proven Track Record" />
                <CardBody>
                  $1B+ in online sales. Multiple exits across SaaS, e-commerce, and marketplaces. We’ve run marketplace P&Ls, scaled growth
                  loops, and shipped product at speed — and we bring that muscle to your build.
                </CardBody>
              </Card>

              <Card>
                <CardHeader title="People & Expertise" />
                <CardBody>
                  Founders and advisors with real wins — battle-tested operators in growth, GTM, and product who’ve been where you’re going
                  and know how to get you there faster.
                </CardBody>
              </Card>

              <Card>
                <CardHeader title="Engineering & Design Resources" />
                <CardBody>
                  From MVP to iteration, you’ll have engineers and designers aligned to your venture. Our proven design system and sprint
                  process cut months off your time to value.
                </CardBody>
              </Card>

              <Card>
                <CardHeader title="Go-to-Market" />
                <CardBody>
                  Full-stack marketing support — strategy, creatives, analytics, and paid media execution paired with meaningful test budgets
                  to find signal fast and scale what works.
                </CardBody>
              </Card>

              <Card>
                <CardHeader title="Capital & Runway" />
                <CardBody>
                  We fund the early build and provide the runway to test, iterate, and prove traction — without you risking your own capital.
                </CardBody>
              </Card>

              <Card>
                <CardHeader title="Playbooks & Proven Frameworks" />
                <CardBody>
                  Battle-tested playbooks for growth, product, and GTM — so you can skip trial-and-error and execute what’s already been
                  proven to work.
                </CardBody>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Only Marketplaces */}
      <section id="why-marketplaces" style={{ borderTop: `1px solid ${theme.border}` }}>
        <Container>
          <div style={{ padding: `${theme.space(12)} 0` }}>
            <H2>Why We Only Build Online Marketplaces</H2>
            <P dim>
              We don’t dabble—we specialize. Our team helped build one of the largest two-sided marketplaces on the internet, serving
              millions of users and generating over $1B in transactions. That journey gave us a <strong>battle-tested playbook</strong> for
              going from zero to category leader.
            </P>

            <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", marginTop: 18 }}>
              <Card>
                <CardHeader title="Crack the Chicken-and-Egg" />
                <CardBody>Proven tactics to seed both sides of the market, create liquidity quickly, and keep engagement compounding.</CardBody>
              </Card>
              <Card>
                <CardHeader title="Scalable Growth Loops" />
                <CardBody>Playbooks for acquisition, conversion, and retention that turn early traction into durable network effects.</CardBody>
              </Card>
              <Card>
                <CardHeader title="Capital Efficient" />
                <CardBody>Build smart, not bloated. We prioritize high-leverage features and channels that move core marketplace KPIs.</CardBody>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Ventures */}
      <section id="ventures" style={{ borderTop: `1px solid ${theme.border}` }}>
        <Container>
          <div style={{ padding: `${theme.space(12)} 0` }}>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 12 }}>
              <H2>Active & Incubating Ventures</H2>
            </div>
            <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", marginTop: 18 }}>
              {ventures.map((v) => (
                <Card key={v.name}>
                  <CardHeader title={v.name} />
                  <CardBody>
                    <p style={{ margin: 0 }}>{v.blurb}</p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Model (The Journey) */}
      <section id="model" style={{ borderTop: `1px solid ${theme.border}`, background: theme.bgAlt }}>
        <Container>
          <div style={{ padding: `${theme.space(12)} 0` }}>
            <H2>The Journey</H2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 18 }}>
              {steps.map((s) => (
                <Card key={s.title}>
                  <CardHeader title={<span style={{ fontSize: 18, fontWeight: 800 }}>{`${s.phase} — ${s.title}`}</span>} />
                  <CardBody>{s.text}</CardBody>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Who We're Looking For */}
      <section id="kpis" style={{ borderTop: `1px solid ${theme.border}` }}>
        <Container>
          <div style={{ padding: `${theme.space(12)} 0` }}>
            <H2>Who We're Looking For</H2>
            <div
              style={{
                display: "grid",
                gap: 10,
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                marginTop: 12,
              }}
            >
              {whoWeWant.map((item) => (
                <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <CheckIcon />
                  <p style={{ margin: 0, color: theme.text }}>
                    <strong>{item.label}</strong>
                    {" — "}
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Choose Your Path */}
      <section id="choose-your-path" style={{ borderTop: `1px solid ${theme.border}`, background: theme.bgAlt }}>
        <Container>
          <div style={{ padding: `${theme.space(12)} 0` }}>
            <H2>Choose Your Path</H2>
            <P dim>Two ways to join our marketplace startup studio — pick the one that fits your appetite for risk and reward.</P>
            <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", marginTop: 18 }}>
              {/* Track 1 */}
              <Card>
                <CardBody>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ background: "#ffe4e6", padding: 10, borderRadius: theme.radius.md, display: "inline-flex" }}>
                      <RocketIcon />
                    </div>
                    <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800 }}>High Equity, Deferred Compensation</h3>
                  </div>
                  <P>For the bold builder. Trade short-term cash for a bigger ownership stake — and the chance for outsized returns.</P>
                  <ul style={{ marginTop: 12, paddingLeft: 18, color: theme.subtext, lineHeight: 1.65 }}>
                    <li><strong>Largest equity stake</strong> (15–25%).</li>
                    <li><strong>Full studio resources</strong> — dev, design, marketing, funding.</li>
                    <li><strong>Deferred salary</strong> until traction milestone.</li>
                    <li>Optional <strong>acceleration bonus</strong> when traction is hit.</li>
                  </ul>
                  <div style={{ marginTop: 12, fontSize: 13, color: theme.subtext }}>Best for: Founders with runway who want to swing for the fences.</div>
                  <div style={{ marginTop: 14 }}>
                    <a
                      href="#apply-track-1"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: theme.radius.lg,
                        padding: "12px 16px",
                        background: theme.red,
                        color: "#fff",
                        fontWeight: 700,
                        textDecoration: "none",
                        boxShadow: theme.shadow.sm,
                      }}
                    >
                      Apply for Track 1
                    </a>
                  </div>
                </CardBody>
              </Card>

              {/* Track 2 */}
              <Card>
                <CardBody>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ background: "#f3f4f6", padding: 10, borderRadius: theme.radius.md, display: "inline-flex" }}>
                      <ScaleIcon />
                    </div>
                    <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800 }}>Smaller Equity, Upfront Compensation</h3>
                  </div>
                  <P>For the strategic builder. Keep some cash flow now while building long-term equity value.</P>
                  <ul style={{ marginTop: 12, paddingLeft: 18, color: theme.subtext, lineHeight: 1.65 }}>
                    <li><strong>Meaningful equity stake</strong> (8–15%).</li>
                    <li><strong>Monthly stipend</strong> from day one.</li>
                    <li><strong>Full studio resources</strong> — dev, design, marketing, funding.</li>
                    <li>Transition to <strong>full-time CEO</strong> when traction is proven.</li>
                  </ul>
                  <div style={{ marginTop: 12, fontSize: 13, color: theme.subtext }}>Best for: Builders who want to de-risk the leap while keeping upside.</div>
                  <div style={{ marginTop: 14 }}>
                    <a
                      href="#apply-track-2"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: theme.radius.lg,
                        padding: "12px 16px",
                        background: "#111827",
                        color: "#fff",
                        fontWeight: 700,
                        textDecoration: "none",
                        boxShadow: theme.shadow.sm,
                      }}
                    >
                      Apply for Track 2
                    </a>
                  </div>
                </CardBody>
              </Card>
            </div>

            <div style={{ marginTop: 18 }}>
              <div style={{ border: `1px solid ${theme.border}`, background: "#f3f4f6", borderRadius: theme.radius.lg, padding: 18 }}>
                <p style={{ margin: 0, color: theme.text }}>
                  <strong>Both tracks</strong> get the same playbook, the same world-class team, and the same capital — the only difference is how you choose to
                  balance short-term income with long-term ownership.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

    {/* Apply */}
<section id="apply" style={{ borderTop: `1px solid ${theme.border}`, background: theme.bgAlt }}>
  <style>{`
    /* Symmetric horizontal padding on small screens (prevents right-edge flush) */
    @media (max-width: 639px) {
      #apply .apply-inner {
        padding-left: 16px;
        padding-right: 16px;
      }
    }
    /* Ensure form controls size correctly within padded container */
    #apply input,
    #apply textarea,
    #apply select {
      box-sizing: border-box;
      width: 100%;
    }
    /* Always single column + consistent gaps */
    #apply .apply-grid {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 16px;
    }
    a { color: ${theme.red}; text-decoration-thickness: 2px; text-underline-offset: 2px; }
    a:hover { opacity: .9; }
  `}</style>

  <Container>
    {/* This wrapper guarantees extra horizontal padding on mobile only */}
    <div className="apply-inner" style={{ padding: `${theme.space(12)} 0`, maxWidth: 820, margin: "0 auto" }}>
      <Card hover={false}>
        <CardHeader
          title={
            <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <span>Apply</span>
            </span>
          }
        />
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



      {/* FAQs */}
      <section id="faq" style={{ borderTop: `1px solid ${theme.border}`, background: theme.bgAlt }}>
        <Container>
          <div style={{ padding: `${theme.space(12)} 0` }}>
            <H2>FAQs</H2>
            <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", marginTop: 18 }}>
              {faqs.map((f) => (
                <FAQItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </div>
        </Container>
      </section>

     {/* Founder Letter Section (styled for readability) */}
<section id="equity" style={{ borderTop: `1px solid ${theme.border}`, background: theme.bg }}>
  <style>{`
    @media (max-width: 639px) {
      #equity .equity-inner {
        padding-left: 16px;
        padding-right: 16px;
      }
    }
    #equity article { 
      box-sizing: border-box;
      width: 100%;
    }
  `}</style>

  <Container>
    <div className="equity-inner" style={{ padding: "56px 0" }}>
      <div style={{ display: "grid", placeItems: "center" }}>
        <article
          style={{
            maxWidth: 860,
            background: "#fff",
            border: `1px solid ${theme.border}`,
            borderRadius: theme.radius.lg,
            padding: 28,
            lineHeight: 1.65,
            boxShadow: theme.shadow.sm,
          }}
        >
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
              gap: 10,
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
              padding: 16,
              border: `1px dashed ${theme.border}`,
              borderRadius: theme.radius.md,
              background: theme.bgAlt,
            }}
          >
            <H3>Why Equity Is Your Shot at Life-Changing Wealth</H3>
            <P dim>
              A paycheck stops the moment you do. Equity keeps working — compounding your effort, your vision, and your wins, even while you sleep. At Marketplace Holdings, we’re on a mission to launch products that dominate their markets and create generational wealth for the people who build them.
            </P>
            <P dim>
              Here, you’re not an employee. You’re a builder. An owner. When your company wins, you don’t just get a pat on the back — you get a life-changing outcome.
            </P>
          </div>

          <H3 style={{ marginTop: 22 }}>Who We’re Looking For</H3>
          <ul style={{ marginTop: 10, paddingLeft: 20, color: theme.subtext }}>
            <li style={{ marginTop: 6 }}>Thrive on ownership and accountability.</li>
            <li style={{ marginTop: 6 }}>Have proven skills in tech or digital marketing.</li>
            <li style={{ marginTop: 6 }}>Can lead, adapt, and solve problems in real time.</li>
            <li style={{ marginTop: 6 }}>Want to build something big — but smart.</li>
          </ul>

          <H3 style={{ marginTop: 22 }}>Your Next Step</H3>
          <P dim>
            If you’re ready to explore this, <a href="#apply" style={{ color: theme.red, fontWeight: 700 }}>click here to apply</a> or reply to this email with your LinkedIn profile and a few lines on why you’d be a great fit.
          </P>
          <P dim>We move fast — it’s possible to go from first conversation to building within two weeks.</P>

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
              <div style={{ width: 24, height: 24, borderRadius: 10, background: `linear-gradient(135deg, ${theme.red}, #fb7185)` }} />
              <span>© {new Date().getFullYear()} Marketplace Holdings</span>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
