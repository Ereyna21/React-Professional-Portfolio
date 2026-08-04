import React from 'react';
import { Link } from 'react-router-dom';
import Greeting from '../components/Greeting';
import insuranceHeadshot from '../assets/eric-professional-headshot.jpg';
import nextChapterImage from '../assets/next-chapter-feature.jpg';

const featured = [
  {
    className: 'home-work-insurance',
    label: 'Insurance business website',
    title: 'Eric Reyna Insurance',
    copy: 'A trust-focused React website built to educate families and generate consultation requests.',
    url: 'https://eric-reyna-insurance.netlify.app/',
    visual: <img src={insuranceHeadshot} alt="Eric Reyna Insurance project" />,
  },
  {
    className: 'home-work-texas',
    label: 'Service business website',
    title: 'Texas Tough Power Wash',
    copy: 'A bold lead-generation site with clear services, local positioning, and a working quote form.',
    url: 'https://texas-tough-power-wash.netlify.app/',
    visual: <div className="mini-wash-mark">TT<span>POWER WASH</span></div>,
  },
  {
    className: 'home-work-chapter',
    label: 'Boutique product website',
    title: 'Next Chapter Creations',
    copy: 'A warm storefront-style experience for handmade bookish gifts and custom-order inquiries.',
    url: 'https://next-chapter-creations.netlify.app/',
    visual: <img src={nextChapterImage} alt="Next Chapter Creations products" />,
  },
];

const Home = () => (
  <>
    <Greeting />
    <section className="home-featured-work" aria-labelledby="home-featured-title">
      <div className="featured-project-heading reveal-up">
        <div><p className="section-label">Featured business websites</p><h2 id="home-featured-title">Designed for real people, real brands, and real results.</h2></div>
        <Link className="text-link" to="/work">View selected work →</Link>
      </div>
      <div className="home-work-grid">
        {featured.map((project) => (
          <article className={`home-work-card ${project.className}`} key={project.title}>
            <div className="home-work-visual">{project.visual}</div>
            <div className="home-work-body">
              <p>{project.label}</p><h3>{project.title}</h3><span>{project.copy}</span>
              <div className="home-work-actions"><a href={project.url} target="_blank" rel="noreferrer">Visit Site ↗</a><Link to="/work">View Case Study →</Link></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default Home;
