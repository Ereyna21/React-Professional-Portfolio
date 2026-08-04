import React from 'react';
import Project from '../components/Project';
import insuranceHeadshot from '../assets/eric-professional-headshot.jpg';
import nextChapterImage from '../assets/next-chapter-feature.jpg';
import translationAppImage from '../assets/image2.png';
import workDaySchedulerImage from '../assets/image4.png';
import weatherDashboardImage from '../assets/image5.png';
import justAnotherTextEditorImage from '../assets/image6.png';

const featuredProjects = [
  {
    key: 'insurance',
    category: 'Insurance business website',
    title: 'Eric Reyna Insurance',
    challenge: 'Create a trustworthy online presence that explains complex coverage clearly and gives families an easy way to request guidance.',
    solution: 'I designed a responsive, education-first website with clear coverage options, FAQs, carrier information, lead capture, and a working Netlify contact workflow.',
    outcome: 'A polished client journey built around credibility, mobile usability, and practical lead generation.',
    technologies: ['React', 'JavaScript', 'Responsive UI', 'Netlify Forms', 'Git'],
    liveUrl: 'https://eric-reyna-insurance.netlify.app/',
  },
  {
    key: 'texas',
    category: 'Local service business website',
    title: 'Texas Tough Power Wash',
    challenge: 'Give a South Texas exterior-cleaning business a professional web presence that clearly presents services and converts visitors into quote requests.',
    solution: 'I built a bold, mobile-first marketing site with service education, trust signals, a results gallery, service areas, strong calls to action, and a working quote form.',
    outcome: 'A lead-focused website that is version controlled, live on Netlify, and ready for real before-and-after project photography.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Netlify Forms', 'GitHub'],
    liveUrl: 'https://texas-tough-power-wash.netlify.app/',
    codeUrl: 'https://github.com/Ereyna21/Texas-Tough-Power-Wash',
  },
  {
    key: 'chapter',
    category: 'Boutique product website',
    title: 'Next Chapter Creations',
    challenge: 'Present handmade bookish gifts with a warm, distinctive brand while making product discovery and custom-order inquiries simple.',
    solution: 'I created a boutique-inspired experience with curated collections, real product photography, reviews, brand storytelling, responsive navigation, and a Netlify-powered order form.',
    outcome: 'A welcoming storefront-style site that reflects the personality of the business and supports customer inquiries from any device.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Netlify Forms'],
    liveUrl: 'https://next-chapter-creations.netlify.app/',
    codeUrl: 'https://github.com/Ereyna21/Next_Chapter_Creations',
  },
];

const technicalProjects = [
  {
    title: 'Translation App',
    description: 'A collaborative front-end application that helps users translate text and work across multiple languages.',
    image: translationAppImage,
    url: 'https://johndennis2.github.io/translateAPP/',
    technologies: ['JavaScript', 'APIs', 'Responsive UI'],
  },
  {
    title: 'Work Day Scheduler',
    description: 'A browser-based daily planner with time-block status styling and persistent local storage.',
    image: workDaySchedulerImage,
    url: 'https://ereyna21.github.io/Work-Day-Scheduler/',
    codeUrl: 'https://github.com/Ereyna21/Work-Day-Scheduler',
    technologies: ['JavaScript', 'Day.js', 'Local Storage'],
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather search dashboard that retrieves current conditions and forecast information for selected cities.',
    image: weatherDashboardImage,
    url: 'https://ereyna21.github.io/Weather-Dashboard/',
    codeUrl: 'https://github.com/Ereyna21/Weather-Dashboard',
    technologies: ['JavaScript', 'Weather API', 'Local Storage'],
  },
  {
    title: 'Just Another Text Editor',
    description: 'An installable progressive web application with offline-friendly browser storage and modern build tooling.',
    image: justAnotherTextEditorImage,
    codeUrl: 'https://github.com/Ereyna21/PWA-Text-Editor',
    technologies: ['PWA', 'IndexedDB', 'Webpack'],
    available: false,
  },
];

function ProjectVisual({ project }) {
  if (project.key === 'insurance') {
    return (
      <div className="case-visual insurance-case-visual">
        <div className="case-browser-bar"><span /><span /><span /><small>eric-reyna-insurance.netlify.app</small></div>
        <div className="case-insurance-scene">
          <div><small>Licensed Texas Life Insurance Agent</small><h3>Protect what matters most.</h3><p>Simple, honest guidance for Texas families.</p><span>Request a Quote</span></div>
          <img src={insuranceHeadshot} alt="Eric Reyna Insurance website preview" />
        </div>
      </div>
    );
  }

  if (project.key === 'texas') {
    return (
      <div className="case-visual texas-case-visual">
        <div className="case-browser-bar dark"><span /><span /><span /><small>texas-tough-power-wash.netlify.app</small></div>
        <div className="case-texas-scene">
          <p>South Texas exterior cleaning</p><h3>Bring your property back to life.</h3><div className="wash-line" /><span>Get a Free Quote</span>
        </div>
      </div>
    );
  }

  return (
    <div className="case-visual chapter-case-visual">
      <div className="case-browser-bar warm"><span /><span /><span /><small>next-chapter-creations.netlify.app</small></div>
      <div className="case-chapter-scene">
        <img src={nextChapterImage} alt="Next Chapter Creations products" />
        <div><p>Handmade for book lovers</p><h3>Every story deserves a beautiful beginning.</h3><span>Explore Collections</span></div>
      </div>
    </div>
  );
}

const Work = () => (
  <main className="projects-page selected-work-page">
    <header className="page-heading selected-work-heading">
      <p className="page-eyebrow">Selected work</p>
      <h1>Business solutions, not just demos.</h1>
      <p>I design, build, deploy, and maintain websites that help real businesses earn trust, explain their value, and create a clear path for customers to take action.</p>
    </header>

    <section className="work-metrics" aria-label="Project highlights">
      <article><strong>3</strong><span>Live business websites</span></article>
      <article><strong>100%</strong><span>Responsive experiences</span></article>
      <article><strong>Git + GitHub</strong><span>Version controlled</span></article>
      <article><strong>Netlify</strong><span>Continuous deployments</span></article>
    </section>

    <section className="featured-case-studies" aria-labelledby="business-projects-title">
      <div className="section-heading-row">
        <div><p className="section-label">Featured business projects</p><h2 id="business-projects-title">Built around real audiences and real goals.</h2></div>
      </div>

      {featuredProjects.map((project, index) => (
        <article className={`case-study-card case-${project.key} ${index % 2 ? 'case-reverse' : ''}`} key={project.title}>
          <ProjectVisual project={project} />
          <div className="case-study-copy">
            <p className="case-category">{project.category}</p>
            <h3>{project.title}</h3>
            <div className="case-narrative"><strong>Business challenge</strong><p>{project.challenge}</p></div>
            <div className="case-narrative"><strong>My solution</strong><p>{project.solution}</p></div>
            <div className="case-narrative"><strong>Outcome</strong><p>{project.outcome}</p></div>
            <div className="project-tech case-tech">{project.technologies.map((item) => <span key={item}>{item}</span>)}</div>
            <div className="case-actions">
              <a className="btn-primary-custom" href={project.liveUrl} target="_blank" rel="noreferrer">View Live Site</a>
              {project.codeUrl && <a className="btn-secondary-custom" href={project.codeUrl} target="_blank" rel="noreferrer">View Code</a>}
            </div>
          </div>
        </article>
      ))}
    </section>

    <section className="technical-work-section" aria-labelledby="technical-projects-title">
      <div className="section-heading-row">
        <div><p className="section-label">Technical showcase</p><h2 id="technical-projects-title">Additional applications and development work.</h2></div>
      </div>
      <div className="projects-grid technical-projects-grid">
        {technicalProjects.map((project) => <Project key={project.title} {...project} />)}
      </div>
    </section>
  </main>
);

export default Work;
