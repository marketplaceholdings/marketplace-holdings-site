const theme = {
  red: "#e11d48",
  text: "#111827",
  subtext: "#4b5563",
  border: "#e5e7eb",
  bg: "#ffffff",
  bgAlt: "#f9fafb",
};

// ---------- UI PRIMITIVES ----------
const Container = ({ children, wide=false }) => (
  <div style={{ maxWidth: wide ? 1280 : 1100, margin: "0 auto", padding: "0 16px" }}>{children}</div>
);

const H2 = ({ children }) => (
  <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: -0.2, color: theme.text }}>{children}</h2>
);

const Button = ({ children, variant="primary", size="md", href, onClick }) => {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    padding: size === "lg" ? "14px 18px" : "10px 14px",
    fontWeight: 700,
    border: "1px solid transparent",
    cursor: "pointer",
    textDecoration: "none",
    fontSize: size === "lg" ? 16 : 14,
  };
  const variants = {
    primary: { background: theme.red, color: "#fff" },
    secondary: { background: "#fff", color: theme.text, border: `1px solid ${theme.border}` },
  };
  const Comp = href ? "a" : "button";
  const props = href ? { href } : { onClick };
  return <Comp {...props} style={{ ...base, ...variants[variant] }}>{children}</Comp>;
};

const Badge = ({ children }) => (
  <span style={{ display: "inline-block", background: "#ffe4e6", color: "#9f1239", padding: "6px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{children}</span>
);

const Card = ({ children }) => (
  <div style={{ border: `1px solid ${theme.border}`, borderRadius: 16, overflow: "hidden", background: "#fff" }}>{children}</div>
);
const CardHeader = ({ title, extra }) => (
  <div style={{ padding: 18, borderBottom: `1px solid ${theme.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
    <div style={{ fontSize: 18, fontWeight: 800, display: "flex", alignItems: "center", gap: 10 }}>{title}</div>
    {extra}
  </div>
);
const CardBody = ({ children }) => (
  <div style={{ padding: 18, color: theme.subtext, fontSize: 14, lineHeight: 1.55 }}>{children}</div>
);

const Field = ({ label, children }) => (
  <label style={{ display: "block" }}>
    <div style={{ fontSize: 13, color: theme.text, marginBottom: 6, fontWeight: 600 }}>{label}</div>
    {children}
  </label>
);

const Input = (props) => (
  <input {...props} style={{ width: "100%", padding: "10px 12px", borderRadius: 10, border: `1px solid ${theme.border}`, fontSize: 14 }} />
);

const Textarea = (props) => (
  <textarea {...props} style={{ width: "100%", padding: "10px 12px", borderRadius: 10, border: `1px solid ${theme.border}`, fontSize: 14 }} />
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={theme.red} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 3 }}>
    <path d="M20 6L9 17l-5-5"/>
  </svg>
);

// Inline icons (no external packages)
const RocketIcon = ({ size=24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5L7 14l3 3-2.5 2.5a2 2 0 0 1-3-3z"/>
    <path d="M12 6l6 6 3-9-9 3z"/>
    <path d="M15 9l-6 6"/>
    <path d="M5 7l3 3"/>
  </svg>
);
const ScaleIcon = ({ size=24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18"/>
    <path d="M7 7h10"/>
    <path d="M3 7l4 9 4-9"/>
    <path d="M13 7l4 9 4-9"/>
  </svg>
);

// ---------- DATA ----------
const ventures = [
  { name: "RVshare.com", blurb: "The largest peer-to-peer RV rental marketplace, connecting RV owners with travelers for memorable road trip experiences.", tag: "Travel" },
  { name: "Hormones.org", blurb: "The most trusted, medically reviewed hub for hormone health with provider discovery.", },
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
  { q: "Is this remote?", a: "Yes. U.S. time-zone overlap for a weekly studio sync is preferred." },
  { q: "How does equity work?", a: "Standard 4-year vesting with a 1-year cliff, plus milestone top-ups for outperformance." },
  { q: "What if I can't commit full-time later?", a: "You can remain part-time, but milestone equity top-ups and leadership scope are tied to full-time commitment." },
  { q: "What exactly does a part-time Founding CEO do in the first few months?", a: "In the early days, your job is to turn an idea into traction — without risking it all. You'll be validating the market, building the product (with our team's help), and signing up early customers. Think of it as the 'fun' phase of startup building — high creativity, big wins, and zero corporate red tape." },
  { q: "Do I need prior startup or CEO experience?", a: "Not at all. We look for builders at heart — people who take action, figure things out, and don't wait for permission. Some of our best CEOs are former employees who always knew they had more in them." },
  { q: "Do I have to be technical or know how to code?", a: "No coding required. You'll have access to world-class developers and designers who bring your vision to life while you focus on leadership, customers, and growth." },
  { q: "How flexible are the 10 hours per week?", a: "Very. Most of our part-time CEOs work evenings, weekends, or carve out focused blocks during the week. This is designed to fit around your life until it's ready to become your life." },
  { q: "How long until I can go full-time?", a: "We've seen CEOs make the leap in as little as 6–9 months. Once you have real traction — paying customers, product-market fit, and momentum — you'll be ready to step in full-time with confidence." },
  { q: "Can I keep my day job while doing this?", a: "Absolutely. In fact, that's the point. We created this program so you can prove the business works before walking away from a steady paycheck." },
  { q: "What resources will I get to help me succeed?", a: "You'll have hands-on support from day one — developers, designers, marketing firepower, experienced advisors, and funding for the essentials. We're your unfair advantage." },
  { q: "Will I have a co-founder or be working solo?", a: "You'll have the studio team as your de facto co-founders. We're with you through the highs, lows, pivots, and breakthroughs — you'll never feel like you're building alone." },
  { q: "Do you provide funding?", a: "Yes. We cover the costs needed to get your marketplace off the ground so you can focus on building, not bootstrapping." },
  { q: "How does equity work?", a: "You'll own a meaningful stake in the company you're building. As the business grows, so does your ownership value — giving you the chance at a life-changing outcome." },
  { q: "Do I get paid during the part-time phase?", a: "We offer two tracks: More Equity / No Pay — maximize your upside. Less Equity + Hourly Compensation — get paid while you build." },
  { q: "What happens if the startup doesn't work out?", a: "Then you walk away with new skills, experience, and a powerful network — at zero financial cost to you. It's the safest way to swing for something big." },
  { q: "Who are you looking for?", a: "We want hungry builders — people who take ownership, learn fast, and thrive in uncertainty. You don't need the perfect resume, just the right mindset." },
  { q: "What does the selection process look like?", a: "We start with a short application, then a conversation about your goals, skills, and fit. If it's right, we move quickly — sometimes from first call to start date in under two weeks." },
  { q: "Where do I need to be located?", a: "We're remote-first. You can build from anywhere — all you need is a laptop, Wi‑Fi, and the drive to make it happen." },
  { q: "Can you share examples of founders who started part-time and succeeded?", a: "Yes — we have multiple CEOs who began with 10 hours a week, proved traction, and are now running their companies full-time with growing teams and healthy revenue. This path works." },
  { q: "Do I need to have my own business idea?", a: "Nope. We bring the ideas — battle-tested marketplace concepts with proven demand. Your job is to lead, adapt, and bring the vision to life." },
  { q: "Do I need to code?", a: "No. Our in-house product team ships the platform; you focus on growth, partnerships, and ops." },
  { q: "Which venture would I lead?", a: "We match your background to one of the active marketplaces and can incubate new ones together." },
];

// ---------- APP ----------
export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: theme.bg, color: theme.text }}>
      {/* Header */}
      <header style={{ position: "sticky", top: 0, zIndex: 40, background: "rgba(255,255,255,0.9)", backdropFilter: "blur(6px)", borderBottom: `1px solid ${theme.border}` }}>
        <Container>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 12, background: `linear-gradient(135deg, ${theme.red}, #fb7185)` }} />
              <span style={{ fontWeight: 700 }}>Marketplace Holdings</span>
            </div>
            <Button href="#apply" size="md">Apply</Button>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <section>
        <Container>
          <div style={{ padding: "84px 0" }}>
            <h1 style={{ fontSize: 44, lineHeight: 1.1, fontWeight: 800, letterSpacing: -0.5 }}>
              Build a Company That Could Change Your Life — <span style={{ color: theme.red }}>Without Quitting Your Job</span>
            </h1>
            <p style={{ marginTop: 16, color: theme.subtext, maxWidth: 880, fontSize: 16 }}>
              <strong>Most founders risk everything. You don't have to.</strong> Join our marketplace startup studio as a part-time Founding CEO (~10 hrs/wk). We provide the idea, resources, and a skilled product team—so you can design, build, and launch your product while proving traction before going all-in. Build momentum first, then step into a full-time role with significant equity and the potential for a life-changing financial outcome.
            </p>
            <div style={{ marginTop: 24, display: "flex", gap: 12, alignItems: "center" }}>
              <Button href="#apply" size="lg">Apply Now</Button>
              
            </div>
          </div>
        </Container>
      </section>

      {/* Why Us Section */}
      <section id="why-us" style={{ borderTop: `1px solid ${theme.border}`, background: theme.bgAlt }}>
        <Container>
          <div style={{ padding: "48px 0" }}>
            <H2>Big Upside. Minimal Risk. Maximum Support.</H2>
            <p style={{ marginTop: 8, color: theme.subtext, maxWidth: 900 }}>
              From day one, you get the unfair advantages most founders only dream of — so you can focus on building, learning, and compounding traction.
            </p>

      

            <div
  style={{
    display: "grid",
    gap: 16,
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    marginTop: 18
  }}
>
  <Card>
    <CardHeader title="Proven Track Record" />
    <CardBody>
      $1B+ in online sales. Multiple exits across SaaS, e-commerce, and marketplaces.
      We’ve run marketplace P&Ls, scaled growth loops, and shipped product at speed —
      and we bring that muscle to your build.
    </CardBody>
  </Card>

  <Card>
    <CardHeader title="People & Expertise" />
    <CardBody>
      Founders and advisors with real wins — battle-tested operators in growth, GTM,
      and product who’ve been where you’re going and know how to get you there faster.
    </CardBody>
  </Card>

  <Card>
    <CardHeader title="Engineering & Design Resources" />
    <CardBody>
      From MVP to iteration, you’ll have engineers and designers aligned to your venture.
      Our proven design system and sprint process cut months off your time to value.
    </CardBody>
  </Card>

  <Card>
    <CardHeader title="Go-to-Market" />
    <CardBody>
      Full-stack marketing support — strategy, creatives, analytics, and paid media
      execution paired with meaningful test budgets to find signal fast and scale what works.
    </CardBody>
  </Card>

  <Card>
    <CardHeader title="Capital & Runway" />
    <CardBody>
      We fund the early build and provide the runway to test, iterate, and prove traction —
      without you risking your own capital.
    </CardBody>
  </Card>

  <Card>
    <CardHeader title="Playbooks & Proven Frameworks" />
    <CardBody>
      Battle-tested playbooks for growth, product, and GTM — so you can skip trial-and-error
      and execute what’s already been proven to work.
    </CardBody>
  </Card>
</div>
           
          </div>
        </Container>
      </section>

      {/* Why Only Marketplaces */}
      <section id="why-marketplaces" style={{ borderTop: `1px solid ${theme.border}` }}>
        <Container>
          <div style={{ padding: "48px 0" }}>
            <H2>Why We Only Build Online Marketplaces</H2>
            <p style={{ marginTop: 8, color: theme.subtext, maxWidth: 900 }}>
              We don’t dabble—we specialize. Our team helped build one of the largest two-sided marketplaces on the internet, serving millions of users and generating over $1B in transactions. That journey gave us a <strong>battle-tested playbook</strong> for going from zero to category leader.
            </p>

            <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", marginTop: 18 }}>
              <Card>
                <CardHeader title="Crack the Chicken-and-Egg" />
                <CardBody>
                  Proven tactics to seed both sides of the market, create liquidity quickly, and keep engagement compounding.
                </CardBody>
              </Card>
              <Card>
                <CardHeader title="Scalable Growth Loops" />
                <CardBody>
                  Playbooks for acquisition, conversion, and retention that turn early traction into durable network effects.
                </CardBody>
              </Card>
              <Card>
                <CardHeader title="Capital Efficient" />
                <CardBody>
                  Build smart, not bloated. We prioritize high-leverage features and channels that move core marketplace KPIs.
                </CardBody>
              </Card>
            
            </div>
          </div>
        </Container>
      </section>

      
      {/* Ventures */}
      <section id="ventures" style={{ borderTop: `1px solid ${theme.border}` }}>
        <Container>
          <div style={{ padding: "48px 0" }}>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 12 }}>
              <H2>Active & Incubating Ventures</H2>
            </div>
            <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", marginTop: 18 }}>
              {ventures.map((v) => (
                <Card key={v.name}>
                  <CardHeader title={v.name} />
                  <CardBody>
                    <p>{v.blurb}</p>
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
          <div style={{ padding: "48px 0" }}>
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
          <div style={{ padding: "48px 0" }}>
            <H2>Who We're Looking For</H2>
            <div style={{ display: "grid", gap: 10, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", marginTop: 12 }}>
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

      {/* Equity = Ownership */}
      <section id="equity" style={{ borderTop: `1px solid ${theme.border}`, background: theme.bgAlt }}>
        <Container>
          <div style={{ padding: "48px 0" }}>
            <H2>Why Equity Is Your Shot at Life-Changing Wealth</H2>
            <p style={{ marginTop: 8, color: theme.subtext, maxWidth: 900 }}>
              A paycheck stops the moment you do. Equity keeps working—compounding your effort, your vision, and your wins, even while you sleep.
            </p>
             <p style={{ marginTop: 8, color: theme.subtext, maxWidth: 900 }}>
              At Marketplace Holdings, we’re on a mission to launch products that dominate their markets and create generational wealth for the people who build them. You don’t have to risk it all or go it alone—we bring the proven system, the capital, and the mentorship.
            </p>
             <p style={{ marginTop: 8, color: theme.subtext, maxWidth: 900 }}>
              Here, you’re not an employee. You’re a builder. An owner. Someone whose equity stake grows in value as the marketplace you lead takes off. When your company wins, you don’t just get a pat on the back—you get a life-changing outcome.
            </p>

           
            </div>
              </div>
    </Container>
  </div>


      
      {/* Choose Your Path to */}
      <section id="choose-your-path" style={{ borderTop: `1px solid ${theme.border}`, background: theme.bgAlt }}>
        <Container>
          <div style={{ padding: "48px 0" }}>
            <H2>Choose Your Path</H2>
            <p style={{ marginTop: 8, color: theme.subtext, maxWidth: 900 }}>
              Two ways to join our marketplace startup studio — pick the one that fits your appetite for risk and reward.
            </p>
            <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", marginTop: 18 }}>
              {/* Track 1 */}
              <Card>
                <CardBody>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ background: "#ffe4e6", padding: 10, borderRadius: 12, display: "inline-flex" }}>
                      <RocketIcon />
                    </div>
                    <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800 }}>High Equity, Deferred Compensation</h3>
                  </div>
                  <p style={{ marginTop: 12, color: theme.text }}>For the bold builder. Trade short-term cash for a bigger ownership stake — and the chance for outsized returns.</p>
                  <ul style={{ marginTop: 12, paddingLeft: 18 }}>
                    <li><strong>Largest equity stake</strong> (15–25%).</li>
                    <li><strong>Full studio resources</strong> — dev, design, marketing, funding.</li>
                    <li><strong>Deferred salary</strong> until traction milestone.</li>
                    <li>Optional <strong>acceleration bonus</strong> when traction is hit.</li>
                  </ul>
                  <div style={{ marginTop: 12, fontSize: 13, color: theme.subtext }}>Best for: Founders with runway who want to swing for the fences.</div>
                  <div style={{ marginTop: 14 }}>
                    <a href="#apply-track-1" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: 12, padding: "12px 16px", background: theme.red, color: "#fff", fontWeight: 700, textDecoration: "none" }}>Apply for Track 1</a>
                  </div>
                </CardBody>
              </Card>

              {/* Track 2 */}
              <Card>
                <CardBody>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ background: "#f3f4f6", padding: 10, borderRadius: 12, display: "inline-flex" }}>
                      <ScaleIcon />
                    </div>
                    <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800 }}>Smaller Equity, Upfront Compensation</h3>
                  </div>
                  <p style={{ marginTop: 12, color: theme.text }}>For the strategic builder. Keep some cash flow now while building long-term equity value.</p>
                  <ul style={{ marginTop: 12, paddingLeft: 18 }}>
                    <li><strong>Meaningful equity stake</strong> (8–15%).</li>
                    <li><strong>Monthly stipend</strong> from day one.</li>
                    <li><strong>Full studio resources</strong> — dev, design, marketing, funding.</li>
                    <li>Transition to <strong>full-time CEO</strong> when traction is proven.</li>
                  </ul>
                  <div style={{ marginTop: 12, fontSize: 13, color: theme.subtext }}>Best for: Builders who want to de-risk the leap while keeping upside.</div>
                  <div style={{ marginTop: 14 }}>
                    <a href="#apply-track-2" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: 12, padding: "12px 16px", background: "#111827", color: "#fff", fontWeight: 700, textDecoration: "none" }}>Apply for Track 2</a>
                  </div>
                </CardBody>
              </Card>
            </div>

            <div style={{ marginTop: 18 }}>
              <div style={{ border: `1px solid ${theme.border}`, background: "#f3f4f6", borderRadius: 16, padding: 18 }}>
                <p style={{ margin: 0, color: theme.text }}><strong>Both tracks</strong> get the same playbook, the same world-class team, and the same capital — the only difference is how you choose to balance short-term income with long-term ownership.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

                    {/* Apply */}
      <section id="apply" style={{ borderTop: `1px solid ${theme.border}` }}>
        <style>{`
          /* Maintain equal horizontal padding on mobile */
          @media (max-width: 639px) {
            #apply .apply-wrapper {
              padding-left: 16px;
              padding-right: 16px;
            }
          }
          /* Two columns on >=640px, single column below */
          #apply .apply-grid {
            display: grid;
            grid-template-columns: 1fr;
            row-gap: 16px;
          }
          @media (min-width: 640px) {
            #apply .apply-grid {
              grid-template-columns: 1fr 1fr;
              column-gap: 20px;
              row-gap: 16px;
            }
          }
        `}</style>

        <Container>
          <div className="apply-wrapper" style={{ padding: "48px 0", maxWidth: 740, margin: "0 auto" }}>
            <H2>Apply</H2>
            <p style={{ color: theme.subtext, marginTop: 6 }}>
              Tell us a bit about you and the venture(s) you're excited about.
            </p>

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
                  <Textarea
                    rows={5}
                    placeholder="Share relevant wins, domain expertise, or the unfair advantage you bring."
                  />
                </Field>
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <Field label="Resume / Portfolio URL">
                  <Input placeholder="https://..." />
                </Field>
              </div>
              <div
                style={{
                  gridColumn: "1 / -1",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginTop: 6
                }}
              >
                <Button size="md" onClick={() => alert("Submitted!")}>
                  Submit
                </Button>
                
              </div>
            </form>
          </div>
        </Container>
      </section>




      {/* FAQs */}
      <section id="faq" style={{ borderTop: `1px solid ${theme.border}`, background: theme.bgAlt }}>
        <Container>
          <div style={{ padding: "48px 0" }}>
            <H2>FAQs</H2>
            <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", marginTop: 18 }}>
              {faqs.map((f) => (
                <Card key={f.q}>
                  <CardHeader title={f.q} />
                  <CardBody>{f.a}</CardBody>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Founder Story */}
      <section id="founder-story" style={{ borderTop: `1px solid ${theme.border}` }}>
        <Container>
          <div style={{ padding: "48px 0" }}>
            <H2>From Homeless to the Top 1%</H2>
            <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", marginTop: 12 }}>
              <Card>
                <CardBody>
                  Our founder grew up homeless—shelters, cars, uncertainty. That reality forged relentless persistence,
                  creative problem-solving, and an obsession with building value. Years later, after launching and scaling
                  multiple companies, he achieved outcomes that place him in the top 0.1%.
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  The mission of Marketplace Holdings is simple: <strong>build products that create massive value in the marketplace and generate life-changing wealth for the people who build them.</strong> With a proven system, capital, and mentorship, you don’t have to risk it all to swing big.
                </CardBody>
              </Card>
            </div>

            <div style={{ marginTop: 16 }}>
              <div style={{ border: `1px solid ${theme.border}`, background: "#f3f4f6", borderRadius: 16, padding: 18 }}>
                <p style={{ margin: 0, color: theme.text }}>
                  If we can do it, so can you—especially with a studio that’s done it before standing behind you.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      
      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${theme.border}` }}>
        <Container>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", justifyContent: "space-between", padding: "18px 0", color: theme.subtext, fontSize: 14 }}>
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
