const howItWorks = [
  {
    id: "01",
    title: "Connect",
    description:
      "Connect to PLCs, sensors, machine systems, databases, CSV files, and Excel exports without requiring a full factory cloud migration.",
  },
  {
    id: "02",
    title: "Understand",
    description:
      "Organize process variables, machine states, production history, and quality measurements into a usable engineering context.",
  },
  {
    id: "03",
    title: "Predict & Diagnose",
    description:
      "Identify anomalies, process drift, and quality risks while helping engineers trace what changed and where to investigate.",
  },
  {
    id: "04",
    title: "Recommend",
    description:
      "Surface actionable guidance around likely causes, next checks, and the process changes that may improve outcomes over time.",
  },
];

const capabilities = [
  {
    title: "Quality Prediction",
    description:
      "Predict potential quality issues from process conditions and historical production data.",
    status: "Current focus",
  },
  {
    title: "Process Monitoring",
    description:
      "Detect abnormal behavior and process drift before they become expensive manufacturing problems.",
    status: "Current focus",
  },
  {
    title: "Root-Cause Analysis",
    description:
      "Connect process changes with quality outcomes to help engineers investigate problems faster.",
    status: "Current focus",
  },
  {
    title: "Process Optimization",
    description:
      "Use data-driven models to identify better operating conditions and support engineering decisions.",
    status: "Roadmap",
  },
];

const visionSteps = [
  "Monitor",
  "Predict",
  "Diagnose",
  "Recommend",
  "Optimize",
  "Control",
];

const fiberFlow = [
  "SiO2",
  "Core Deposition",
  "Cladding Deposition",
  "Sintering",
  "Soaking",
  "Rod Draw",
  "125 μm Fiber",
];

const navItems = [
  ["Product", "#product"],
  ["How It Works", "#how-it-works"],
  ["Experience", "#experience"],
  ["Vision", "#vision"],
  ["Request a Pilot", "#pilot"],
] as const;

export default function HomePage() {
  return (
    <main className="bg-canvas text-white">
      <div className="site-shell">
        <header className="topbar">
          <a href="#top" className="brand" aria-label="AI Manufacturing Engineer home">
            <span className="brand-mark" aria-hidden="true" />
            <span>AI Manufacturing Engineer</span>
          </a>
          <nav className="nav" aria-label="Primary">
            {navItems.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </nav>
        </header>

        <section className="hero section-frame" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Edge-First Manufacturing Intelligence</p>
            <h1>Your Factory Has Data. We Turn It Into Decisions.</h1>
            <p className="lead">
              AI-powered manufacturing intelligence that connects to your existing
              machines and production data to help engineers predict problems,
              understand processes, and improve quality.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#pilot">
                Request a Pilot
              </a>
              <a className="button-secondary" href="#how-it-works">
                See How It Works
              </a>
            </div>
          </div>
          <div className="system-panel" aria-label="Platform data flow">
            <div className="system-column">
              <span className="system-label">Machines</span>
              <span className="system-node">Production Lines</span>
              <span className="system-node">Process Equipment</span>
            </div>
            <div className="system-arrow" aria-hidden="true" />
            <div className="system-column">
              <span className="system-label">Sensors / PLCs</span>
              <span className="system-node">Signals</span>
              <span className="system-node">States</span>
            </div>
            <div className="system-arrow" aria-hidden="true" />
            <div className="system-column">
              <span className="system-label">Edge Intelligence</span>
              <span className="system-node">Gateway</span>
              <span className="system-node">Local Models</span>
            </div>
            <div className="system-arrow" aria-hidden="true" />
            <div className="system-column system-column--wide">
              <span className="system-label">AI Manufacturing Engineer</span>
              <div className="capability-grid">
                <span>Predict</span>
                <span>Diagnose</span>
                <span>Optimize</span>
                <span>Recommend</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-grid" id="product">
          <div className="section-heading">
            <p className="eyebrow">The Problem</p>
            <h2>Most factories don&apos;t have a data problem. They have an intelligence problem.</h2>
          </div>
          <div className="section-copy">
            <p>
              For many small and mid-sized manufacturers, production data already
              exists across PLC signals, machine logs, sensors, spreadsheets,
              quality measurements, and production records.
            </p>
            <p>
              The challenge is turning fragmented information into engineering
              decisions before process drift, recurring defects, and unplanned
              downtime become expensive.
            </p>
          </div>
        </section>

        <section className="section-frame" id="how-it-works">
          <div className="section-heading section-heading--stacked">
            <p className="eyebrow">How It Works</p>
            <h2>From Machine Data to Manufacturing Intelligence</h2>
          </div>
          <div className="step-grid">
            {howItWorks.map((step) => (
              <article className="step-card" key={step.id}>
                <span className="step-id">{step.id}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-grid" aria-labelledby="edge-title">
          <div className="section-heading">
            <p className="eyebrow">Architecture</p>
            <h2 id="edge-title">No Cloud Infrastructure Required to Get Started</h2>
          </div>
          <div className="architecture-panel">
            <div className="architecture-flow">
              <span>Factory Machines</span>
              <span>PLCs / Sensors</span>
              <span>Edge Gateway</span>
              <span>Local Data Platform</span>
              <span>AI / ML Engine</span>
              <span>Manufacturing Intelligence</span>
            </div>
            <p>
              Start with the infrastructure you already have. The edge-first
              approach keeps data collection and processing close to the machines,
              with cloud connectivity added only when it makes operational sense.
            </p>
          </div>
        </section>

        <section className="section-frame">
          <div className="section-heading section-heading--stacked">
            <p className="eyebrow">Capabilities</p>
            <h2>Focused on practical engineering outcomes</h2>
          </div>
          <div className="card-grid">
            {capabilities.map((item) => (
              <article className="capability-card" key={item.title}>
                <span
                  className={
                    item.status === "Roadmap" ? "status-tag status-tag--roadmap" : "status-tag"
                  }
                >
                  {item.status}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-grid" id="experience">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Built from Real Manufacturing Experience</h2>
          </div>
          <div className="section-copy">
            <p>
              AI manufacturing is not just a software problem. It requires
              understanding the physical process, the data generated by that
              process, and how engineering decisions affect outcomes.
            </p>
            <p>
              Vivek Singh brings hands-on experience in industrial manufacturing
              and AI/ML. During work at STL Technology Solutions, he was directly
              involved in optical-fiber manufacturing research covering core
              deposition, cladding deposition, sintering, soaking, and rod draw.
            </p>
            <p>
              That work included collaboration with MIT&apos;s Device Realization Lab
              and Dr. Brian W. Anthony on data-driven manufacturing and control
              research, without overstating the scope beyond what the supporting
              material establishes.
            </p>
          </div>
        </section>

        <section className="section-frame">
          <div className="credibility-rail" aria-label="Credibility pillars">
            <span>Industrial Manufacturing</span>
            <span>AI / ML / DL</span>
            <span>Data-Driven Control</span>
            <span>MIT Research Collaboration</span>
            <span>AI Manufacturing Engineer</span>
          </div>
        </section>

        <section className="section-grid">
          <div className="section-heading">
            <p className="eyebrow">Initial Focus</p>
            <h2>Starting Where We Have Deep Expertise</h2>
          </div>
          <div className="section-copy">
            <div className="fiber-flow" aria-label="Optical fiber manufacturing flow">
              {fiberFlow.map((step) => (
                <span key={step}>{step}</span>
              ))}
            </div>
            <p>
              Our initial experience comes from applying data-driven methods to
              complex optical-fiber manufacturing processes.
            </p>
            <p className="pull-quote">Starting narrow. Building for manufacturing broadly.</p>
          </div>
        </section>

        <section className="section-frame" id="vision">
          <div className="section-heading section-heading--stacked">
            <p className="eyebrow">Vision</p>
            <h2>From Monitoring to Autonomous Manufacturing</h2>
          </div>
          <div className="vision-panel">
            <div className="vision-flow" aria-label="Long-term capability roadmap">
              {visionSteps.map((step) => (
                <span key={step}>{step}</span>
              ))}
            </div>
            <p>
              The long-term vision is an AI manufacturing engineer that
              continuously learns from process data, helps engineers understand
              complex manufacturing behavior, and eventually supports safe,
              data-driven optimization and control.
            </p>
            <p className="roadmap-note">
              Current positioning is focused on monitoring, prediction,
              diagnosis, and recommendations rather than claiming autonomous
              factory control today.
            </p>
          </div>
        </section>

        <section className="cta-panel" id="pilot">
          <div className="cta-copy">
            <p className="eyebrow">Request a Pilot</p>
            <h2>Have machines. Have data. Let&apos;s make it useful.</h2>
            <p>
              We&apos;re looking to work with a small number of manufacturing teams on
              early pilot engagements.
            </p>
          </div>
          <form className="pilot-form">
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
              <span>Company</span>
              <input type="text" name="company" placeholder="Company name" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="name@company.com" />
            </label>
            <label>
              <span>Industry</span>
              <input type="text" name="industry" placeholder="Industry" />
            </label>
            <label>
              <span>Manufacturing process</span>
              <textarea
                name="process"
                rows={3}
                placeholder="What do you manufacture?"
              />
            </label>
            <label>
              <span>Current data setup</span>
              <textarea
                name="data-setup"
                rows={3}
                placeholder="How is your production data currently collected?"
              />
            </label>
            <button type="button" className="button-primary">
              Request a Pilot
            </button>
            <p className="form-note">
              Placeholder intake form for the MVP. Wire this button to email, a
              CRM, or a server action when outreach handling is ready.
            </p>
          </form>
        </section>

        <footer className="footer">
          <div>
            <p className="footer-title">AI Manufacturing Engineer</p>
            <p>Data → Intelligence → Better Manufacturing</p>
          </div>
          <p>© 2026 AI Manufacturing Engineer</p>
        </footer>
      </div>
    </main>
  );
}

