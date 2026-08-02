import React from 'react';

const Project = ({ title, description, image, url, technologies = [], available = true }) => {
  return (
    <article className="project-card">
      <div className="project-image-wrap">
        <img src={image} className="project-image" alt={`${title} project preview`} />
        {!available && <span className="project-status">Deployment being restored</span>}
      </div>

      <div className="project-card-body">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="project-tech" aria-label={`${title} technologies`}>
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        {available ? (
          <a className="project-link" href={url} target="_blank" rel="noreferrer">
            View Live Project
          </a>
        ) : (
          <span className="project-link project-link-disabled" aria-disabled="true">
            Live Demo Coming Back Soon
          </span>
        )}
      </div>
    </article>
  );
};

export default Project;
