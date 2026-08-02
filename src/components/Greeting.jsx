import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = () => {
  return (
    <main className="hero-section">
      <div className="hero-content">
        <p className="hero-eyebrow">Technical Support • Customer Experience • Full-Stack Development</p>
        <h1>Hi, I’m Eric Reyna.</h1>
        <h2>I solve problems, support people, and build practical technology.</h2>
        <p className="hero-copy">
          I’m a technology professional with a background in customer service, troubleshooting,
          and full-stack web development. I enjoy turning technical problems into clear solutions
          and building useful experiences for the people who rely on them.
        </p>

        <div className="hero-actions">
          <Link className="btn-primary-custom" to="/work">View My Projects</Link>
          <Link className="btn-secondary-custom" to="/resume">View Resume</Link>
          <Link className="btn-secondary-custom" to="/contact">Contact Me</Link>
        </div>
      </div>

      <aside className="hero-card" aria-label="Professional focus">
        <p className="hero-card-label">Currently focused on</p>
        <h3>Growing deeper into IT & technical support</h3>
        <p>
          Combining hands-on customer experience with web development, troubleshooting,
          networking fundamentals, and continued technical learning.
        </p>
        <div className="skill-chips">
          <span>React</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>MySQL</span>
          <span>Git/GitHub</span>
          <span>Technical Support</span>
        </div>
      </aside>
    </main>
  );
};

export default Greeting;
