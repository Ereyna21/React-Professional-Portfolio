import React from 'react';
import { Link } from 'react-router-dom';
import headshot from '../assets/eric-professional-headshot.jpg';

const strengths = [
  ['Technical Troubleshooting', 'I break problems into clear steps, identify likely causes, and guide people toward practical solutions.'],
  ['Customer Experience', 'Sixteen years of customer-facing work taught me how to listen, build trust, and stay calm when the stakes are high.'],
  ['Full-Stack Development', 'I build responsive applications with React, JavaScript, Node.js, Express, MySQL, MongoDB, and REST APIs.'],
  ['Clear Communication', 'I translate technical, financial, and regulated information into language customers can understand and act on.'],
  ['Licensed Professional', 'My insurance background strengthened my discipline around compliance, documentation, privacy, and accuracy.'],
  ['Continuous Learning', 'I continue expanding my knowledge in IT support, networking, cloud fundamentals, databases, and software development.'],
];

const milestones = [
  ['16+', 'Years of customer service and problem solving'],
  ['3', 'Live business websites deployed'],
  ['Licensed', 'Texas insurance professional'],
  ['Growing', 'IT, cloud, networking, and databases'],
];

const journey = [
  {
    label: 'Customer Service Foundation',
    detail: 'Built strong communication, reliability, and customer-first problem-solving skills across service-focused roles.',
  },
  {
    label: 'Orkin Pest Control',
    detail: 'Diagnosed complex property issues, documented findings, created tailored solutions, and managed long-term customer relationships.',
  },
  {
    label: 'Full-Stack Development',
    detail: 'Completed The University of Texas at Austin program and built applications using modern front-end, back-end, database, and API technologies.',
  },
  {
    label: 'Bloom Insurance',
    detail: 'Guided customers through health-plan information while working within structured systems, documentation requirements, and compliance standards.',
  },
  {
    label: 'Quility Insurance',
    detail: 'Expanded into life insurance, digital application workflows, carrier systems, consultative communication, and independent client support.',
  },
  {
    label: 'Qualfon • USAA Credit Card Services',
    detail: 'Support customers inside a regulated financial-services environment using internal systems, authentication procedures, documentation, and issue resolution.',
  },
  {
    label: 'Next Chapter',
    detail: 'Growing toward technical support, IT support, application support, product support, customer success, and software-focused opportunities.',
  },
];

const AboutMe = () => {
  return (
    <main className="about-page">
      <section className="about-intro-grid reveal-up">
        <div className="about-portrait-wrap">
          <img className="about-portrait" src={headshot} alt="Eric Reyna in professional attire" />
          <div className="portrait-caption">
            <strong>Technology professional</strong>
            <span>Problem solver • Customer advocate • Builder</span>
          </div>
        </div>

        <div className="page-heading about-heading">
          <p className="page-eyebrow">More than a job title</p>
          <h1>I built my career helping people solve problems.</h1>
          <p>
            Over the past 16 years, I have worked in customer service, field service, insurance,
            financial services, and technology-focused environments where communication,
            troubleshooting, accuracy, and trust mattered every day.
          </p>
          <p>
            My path into technology was not traditional—and that is one of my greatest strengths.
            I understand the customer on the other side of the screen, and I know how to turn a
            confusing situation into a clear next step.
          </p>
          <div className="about-actions">
            <Link className="btn-primary-custom" to="/work">Explore My Work</Link>
            <Link className="btn-secondary-custom" to="/resume">View My Resume</Link>
          </div>
        </div>
      </section>

      <section className="milestone-grid" aria-label="Professional highlights">
        {milestones.map(([value, label]) => (
          <article className="milestone-card reveal-up" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>

      <section className="about-story-grid reveal-up">
        <article className="about-story-card">
          <p className="section-label">My story</p>
          <h2>From hands-on service work to practical technology.</h2>
          <p>
            My earlier roles taught me how to inspect situations carefully, ask the right questions,
            document what I found, and recommend solutions people could trust. Those same habits now
            shape how I troubleshoot software, support customers, and build web applications.
          </p>
          <p>
            I turned my long-time interest in computers into formal training through The University of
            Texas at Austin&apos;s Full-Stack Web Development program. Since then, I have continued building
            projects and studying networking, cloud computing, databases, and IT fundamentals.
          </p>
          <p>
            Today, I combine technical curiosity with real-world customer experience. I am at my best
            when I can understand a problem, communicate clearly, and help move someone from frustration
            to confidence.
          </p>
        </article>

        <aside className="about-focus-card">
          <p className="section-label">What drives me</p>
          <blockquote>“The best technical solution is one people can understand, trust, and use.”</blockquote>
          <p>
            Technology is most valuable when it makes someone&apos;s work easier, solves a real problem,
            or creates a better customer experience.
          </p>
        </aside>
      </section>

      <section className="journey-section reveal-up">
        <div className="section-heading-row">
          <div>
            <p className="section-label">My journey</p>
            <h2>Every role added another layer to how I solve problems.</h2>
          </div>
        </div>
        <div className="journey-timeline">
          {journey.map((item, index) => (
            <article className="journey-item" key={item.label}>
              <div className="journey-number">{String(index + 1).padStart(2, '0')}</div>
              <div>
                <h3>{item.label}</h3>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section reveal-up">
        <div className="section-heading-row">
          <div>
            <p className="section-label">What I bring</p>
            <h2>A balanced mix of people skills, technical ability, and professional discipline.</h2>
          </div>
          <Link to="/skills" className="text-link">View all skills →</Link>
        </div>
        <div className="strength-grid">
          {strengths.map(([title, description]) => (
            <article className="strength-card" key={title}>
              <span className="strength-dot" aria-hidden="true"></span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="career-goal-card reveal-up">
        <div>
          <p className="section-label">The next chapter</p>
          <h2>Ready to contribute, keep learning, and grow with a strong technical team.</h2>
          <p>
            I am especially interested in technical support, IT support, application support,
            product support, customer success, and junior development opportunities.
          </p>
        </div>
        <Link className="btn-primary-custom" to="/contact">Start a Conversation</Link>
      </section>
    </main>
  );
};

export default AboutMe;
