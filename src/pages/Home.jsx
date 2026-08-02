import React from 'react';
import { Link } from 'react-router-dom';
import Greeting from '../components/Greeting';
import insuranceHeadshot from '../assets/eric-professional-headshot.jpg';

const Home = () => {
  return (
    <>
      <Greeting />

      <section className="featured-project-section" aria-labelledby="featured-project-title">
        <div className="featured-project-heading reveal-up">
          <div>
            <p className="section-label">Featured project</p>
            <h2 id="featured-project-title">A real business website built to earn trust and generate leads.</h2>
          </div>
          <Link className="text-link" to="/work">View all projects →</Link>
        </div>

        <article className="featured-project-card reveal-up">
          <div className="featured-project-preview" aria-label="Preview of Eric Reyna Insurance website">
            <div className="browser-bar" aria-hidden="true">
              <span></span><span></span><span></span>
              <div className="browser-address">eric-reyna-insurance.netlify.app</div>
            </div>
            <div className="insurance-preview-content">
              <div className="insurance-preview-copy">
                <span className="preview-kicker">Licensed Texas Life Insurance Agent</span>
                <h3>Helping Families Protect What Matters Most</h3>
                <p>Simple, honest, and pressure-free guidance designed around families, budgets, and long-term goals.</p>
                <span className="preview-button">Start Your Quote</span>
              </div>
              <img src={insuranceHeadshot} alt="Eric Reyna in professional attire" />
            </div>
          </div>

          <div className="featured-project-details">
            <p className="featured-project-type">Business website • Lead generation • Responsive design</p>
            <h3>Eric Reyna Insurance</h3>
            <p>
              I designed and built a complete client-facing insurance website that explains complex coverage in clear language,
              establishes credibility, and guides visitors toward requesting a consultation.
            </p>

            <div className="featured-project-highlights">
              <div><strong>Problem solved</strong><span>Turned complicated insurance information into a clear, approachable customer journey.</span></div>
              <div><strong>Built for</strong><span>Mobile usability, trust, education, lead capture, and practical business growth.</span></div>
            </div>

            <div className="project-tech-list" aria-label="Project technologies and features">
              <span>Responsive UI</span>
              <span>JavaScript</span>
              <span>Netlify</span>
              <span>Forms</span>
              <span>SEO Structure</span>
            </div>

            <div className="featured-project-actions">
              <a className="btn-primary-custom" href="https://eric-reyna-insurance.netlify.app/" target="_blank" rel="noreferrer">Visit Live Website</a>
              <Link className="btn-secondary-custom" to="/work">Explore More Work</Link>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Home;
