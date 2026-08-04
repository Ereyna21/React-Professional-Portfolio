import React from "react";

const Resume = () => {
  return (
    <main className="resume-page">
      <section className="resume-hero">
        <div>
          <p className="page-eyebrow">Professional overview</p>
          <h1>Resume</h1>
          <p>
            A customer-focused technology professional combining technical
            troubleshooting, financial-services support, full-stack development,
            and years of relationship-building experience.
          </p>
        </div>
        <div className="resume-downloads">
          <a
            className="btn-primary-custom"
            href="/Eric-Reyna-Technology-Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View PDF
          </a>
          <a
            className="btn-secondary-custom"
            href="/Eric-Reyna-Technology-Resume.pdf"
            download
          >
            Download Resume
          </a>
        </div>
      </section>

      <section className="resume-layout">
        <div className="resume-main">
          <section className="resume-section-card">
            <p className="section-label">Professional summary</p>
            <p className="resume-summary">
              I build technology that solves real business problems. With over
              16 years of customer-facing experience and a background spanning
              financial services, insurance, technical support, and full-stack
              web development, I combine strong communication with practical
              technical skills to deliver solutions that are reliable,
              user-friendly, and business-focused. Whether troubleshooting
              issues, supporting customers, or developing responsive web
              applications, I enjoy turning complex challenges into simple,
              effective experiences.
            </p>
          </section>

          <section className="resume-section-card">
            <p className="section-label">Experience</p>
            <div className="timeline">
              <article className="timeline-item">
                <div className="timeline-marker"></div>
                <div>
                  <div className="timeline-heading">
                    <h3>Associate II, Customer Experience - Care</h3>
                    <span>2026 - Present</span>
                  </div>
                  <p className="timeline-company">
                    Qualfon | USAA Credit Card Services
                  </p>
                  <ul>
                    <li>
                      Assist customers with credit-card servicing questions
                      while protecting account information and following
                      regulated procedures.
                    </li>
                    <li>
                      Explain account details and next steps clearly, document
                      interactions accurately, and resolve issues with
                      professionalism.
                    </li>
                  </ul>
                </div>
              </article>
              <article className="timeline-item">
                <div className="timeline-marker"></div>
                <div>
                  <div className="timeline-heading">
                    <h3>Licensed Life Insurance Agent</h3>
                    <span>2025 - Present</span>
                  </div>
                  <p className="timeline-company">Quility Insurance</p>
                  <ul>
                    <li>
                      Guide clients through coverage options, gather sensitive
                      information accurately, and maintain compliant
                      documentation.
                    </li>
                    <li>
                      Use digital tools, carrier systems, and CRM workflows to
                      manage applications and customer follow-up.
                    </li>
                  </ul>
                </div>
              </article>
              <article className="timeline-item">
                <div className="timeline-marker"></div>
                <div>
                  <div className="timeline-heading">
                    <h3>Licensed Health Plan Advisor</h3>
                    <span>2024 - 2025</span>
                  </div>
                  <p className="timeline-company">Bloom Insurance</p>
                  <ul>
                    <li>
                      Guided customers through health-plan information using
                      clear, consultative communication in a regulated
                      environment.
                    </li>
                    <li>
                      Used internal systems and structured workflows to document
                      interactions accurately and support compliant customer
                      service.
                    </li>
                  </ul>
                </div>
              </article>
              <article className="timeline-item">
                <div className="timeline-marker"></div>
                <div>
                  <div className="timeline-heading">
                    <h3>Pest Control Technician</h3>
                    <span>2014 - 2023</span>
                  </div>
                  <p className="timeline-company">Orkin Pest Control</p>
                  <ul>
                    <li>
                      Diagnosed property issues, designed tailored service
                      plans, and explained technical findings to residential and
                      commercial customers.
                    </li>
                    <li>
                      Managed a recurring service route, maintained detailed
                      records, and built long-term customer relationships.
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </section>
        </div>

        <aside className="resume-sidebar">
          <section className="resume-section-card">
            <p className="section-label">Core skills</p>
            <div className="resume-chip-list">
              {[
                "Technical Support",
                "Troubleshooting",
                "Customer Experience",
                "React",
                "JavaScript",
                "Node.js",
                "MySQL",
                "MongoDB",
                "REST APIs",
                "Git/GitHub",
                "Windows",
                "Bilingual Support",
              ].map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </section>

          <section className="resume-section-card">
            <p className="section-label">Education</p>
            <h3>Full-Stack Web Development Certificate</h3>
            <p>The University of Texas at Austin</p>
          </section>

          <section className="resume-section-card">
            <p className="section-label">Credentials & learning</p>
            <ul className="simple-list">
              <li>Texas General Lines Agent License</li>
              <li>CompTIA A+ - In progress</li>
              <li>AWS Cloud Practitioner - In progress</li>
              <li>IP Addressing & Subnetting</li>
              <li>MySQL continuing education</li>
            </ul>
          </section>

          <section className="resume-section-card">
            <p className="section-label">Connect</p>
            <a
              className="resume-contact-link"
              href="https://github.com/Ereyna21"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Ereyna21
            </a>
            <a
              className="resume-contact-link"
              href="https://www.linkedin.com/in/eric-reyna-3a7269147/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn profile
            </a>
          </section>
        </aside>
      </section>
    </main>
  );
};

export default Resume;
