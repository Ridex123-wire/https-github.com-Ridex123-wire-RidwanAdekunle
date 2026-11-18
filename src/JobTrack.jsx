import "./App.css";

function JobTrack() {
  const features = [
    {
      number: "01",
      title: "User Authentication",
      description:
        "Secure registration and login using JWT authentication and password hashing.",
    },
    {
      number: "02",
      title: "Application Tracking",
      description:
        "Create, edit, delete and manage job applications from one dashboard.",
    },
    {
      number: "03",
      title: "Interview Scheduling",
      description:
        "Record interview dates and keep track of upcoming opportunities.",
    },
    {
      number: "04",
      title: "Analytics Dashboard",
      description:
        "Visualize application progress through interactive charts and statistics.",
    },
    {
      number: "05",
      title: "Profile Management",
      description:
        "Update personal information and securely change account passwords.",
    },
    {
      number: "06",
      title: "Search and Filtering",
      description:
        "Find applications quickly and filter them by their current status.",
    },
  ];

  const technologies = [
    "React",
    "Vite",
    "JavaScript",
    "CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT",
    "bcryptjs",
    "Recharts",
  ];

  return (
    <div className="jobtrack-page">
      <nav className="jobtrack-navbar">
        <a href="/" className="logo">
          Devora<span>.</span>
        </a>

        <a href="/#projects" className="jobtrack-back">
          ← Back to Portfolio
        </a>
      </nav>

      <main>
        {/* HERO */}
        <section className="jobtrack-hero">
          <div className="jobtrack-hero-content">
            <p className="section-label">FULL-STACK WEB APPLICATION</p>

            <h1>
              Meet <span>JobTrack.</span>
              <br />
              Take control of your job search.
            </h1>

            <p>
              A full-stack job application tracking platform designed to help
              job seekers organize applications, monitor progress, schedule
              interviews and manage their job search from one dashboard.
            </p>

            <div className="jobtrack-actions">
              <a
                href="https://jobtrack-ridwan.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                Visit Live Application ↗
              </a>

              <a
                href="https://github.com/Ridex123-wire/jobtrack"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                View Source Code ↗
              </a>
            </div>

            <div className="jobtrack-meta">
              <div>
                <span>PROJECT TYPE</span>
                <strong>Full-Stack Application</strong>
              </div>

              <div>
                <span>STATUS</span>
                <strong className="live-status">
                  <i></i> Live
                </strong>
              </div>

              <div>
                <span>DEPLOYMENT</span>
                <strong>Vercel + Render</strong>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECT OVERVIEW */}
        <section className="jobtrack-section">
          <p className="section-label">01 — PROJECT OVERVIEW</p>

          <h2>
            Making the job search
            <span> easier to manage.</span>
          </h2>

          <div className="jobtrack-overview-grid">
            <div>
              <h3>The Problem</h3>
              <p>
                Job seekers often apply to multiple companies and struggle to
                remember application statuses, interview dates and important
                details.
              </p>
            </div>

            <div>
              <h3>The Solution</h3>
              <p>
                JobTrack provides a central dashboard where users can organize
                applications, monitor progress and manage their job search more
                efficiently.
              </p>
            </div>
          </div>
        </section>

        {/* DASHBOARD PREVIEW */}
        <section className="jobtrack-section">
          <p className="section-label">02 — APPLICATION PREVIEW</p>

          <h2>
            A dashboard built for
            <span> clarity and productivity.</span>
          </h2>

          <p className="jobtrack-section-description">
            JobTrack brings application management, progress tracking and
            upcoming interviews together in one place.
          </p>

          <div className="jobtrack-image-frame">
            <div className="jobtrack-image-top">
              <span>JOBTRACK / DASHBOARD</span>
              <span>LIVE APPLICATION</span>
            </div>

            <img
              src="/images/jobtrack-dashboard.png"
              alt="JobTrack application dashboard"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling.style.display = "flex";
              }}
            />

            <div className="jobtrack-image-placeholder">
              <span>+</span>
              <strong>JobTrack Dashboard Screenshot</strong>
              <p>
                Add your dashboard screenshot to
                public/images/jobtrack-dashboard.png
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="jobtrack-section">
          <p className="section-label">03 — KEY FEATURES</p>

          <h2>
            Everything you need
            <span> to stay organized.</span>
          </h2>

          <div className="jobtrack-features-grid">
            {features.map((feature) => (
              <div className="jobtrack-feature-card" key={feature.number}>
                <span>{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNOLOGY */}
        <section className="jobtrack-section">
          <p className="section-label">04 — TECHNOLOGY STACK</p>

          <h2>
            Built with modern
            <span> web technologies.</span>
          </h2>

          <p className="jobtrack-section-description">
            I used a combination of frontend and backend technologies to build,
            secure and deploy JobTrack.
          </p>

          <div className="jobtrack-tech-grid">
            <div>
              <h3>Frontend</h3>
              <p>React, Vite, JavaScript, CSS and Recharts.</p>
            </div>

            <div>
              <h3>Backend</h3>
              <p>Node.js, Express.js and REST API development.</p>
            </div>

            <div>
              <h3>Database & Security</h3>
              <p>MongoDB, Mongoose, JWT and bcryptjs.</p>
            </div>

            <div>
              <h3>Deployment</h3>
              <p>Vercel for the frontend and Render for the backend.</p>
            </div>
          </div>

          <div className="jobtrack-tags">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </section>

        {/* WHAT I LEARNED */}
        <section className="jobtrack-section jobtrack-learning">
          <p className="section-label">05 — DEVELOPMENT EXPERIENCE</p>

          <h2>
            What I learned
            <span> building JobTrack.</span>
          </h2>

          <p>
            Building JobTrack gave me practical experience in developing a
            full-stack application, connecting a React frontend to a backend
            API, working with MongoDB, implementing authentication and deploying
            an application for real-world access.
          </p>
        </section>

        {/* FINAL CTA */}
        <section className="jobtrack-cta">
          <p className="section-label">EXPLORE THE PROJECT</p>

          <h2>
            Want to see
            <br />
            <span>JobTrack in action?</span>
          </h2>

          <p>
            Explore the live application or check out the source code on GitHub.
          </p>

          <div className="jobtrack-actions">
            <a
              href="https://jobtrack-ridwan.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              Open Live Project ↗
            </a>

            <a
              href="https://github.com/Ridex123-wire/jobtrack"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              GitHub Repository ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="footer jobtrack-footer">
        <a href="/" className="logo">
          Devora<span>.</span>
        </a>

        <p>Designed with purpose. Built with passion.</p>

        <p>© {new Date().getFullYear()} Ridwan Adekunle</p>
      </footer>
    </div>
  );
}

export default JobTrack;
