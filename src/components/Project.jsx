import React from 'react';

const Project = ({ title, description, image, url, codeUrl, technologies = [], available = true }) => (
  <article className="project-card">
    <div className="project-image-wrap">
      <img src={image} className="project-image" alt={`${title} project preview`} />
      {!available && <span className="project-status">Source code available</span>}
    </div>
    <div className="project-card-body">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-tech" aria-label={`${title} technologies`}>{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
      <div className="technical-card-actions">
        {available && url && <a className="project-link" href={url} target="_blank" rel="noreferrer">Live Demo</a>}
        {codeUrl && <a className="project-code-link" href={codeUrl} target="_blank" rel="noreferrer">View Code</a>}
      </div>
    </div>
  </article>
);

export default Project;
