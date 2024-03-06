import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  return (
    <div className="container mt-5">
      <h2>Portfolio</h2>
      <div className="row">
        <div className="col-md-4">
          <Project
            title="Note Taker"
            description="Description of Project 1"
            image="![Note Taker](image.png)"
          />
        </div>
        <div className="col-md-4">
          <Project
            title="Project 2"
            description="Description of Project 2"
            image=""
          />
        </div> <div className="container mt-5">
      <h2>Portfolio</h2>
      <div className="row">
        <div className="col-md-4">
          <Project
            title="Project 3"
            description="Description of Project 3"
            image="/path/to/project1.jpg"
          />
        </div>
        <div className="col-md-4">
          <Project
            title="Project 4"
            description="Description of Project 4"
            image="/path/to/project2.jpg"
          />
        </div>
      </div>
    </div> <div className="container mt-5">
      <h2>Portfolio</h2>
      <div className="row">
        <div className="col-md-4">
          <Project
            title="Project 5"
            description="Description of Project 5"
            image="/path/to/project1.jpg"
          />
        </div>
        <div className="col-md-4">
          <Project
            title="Project 6"
            description="Description of Project 6"
            image="/path/to/project2.jpg"
          />
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Portfolio;