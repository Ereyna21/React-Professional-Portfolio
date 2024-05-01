import React from 'react';
import Project from '../components/Project';
import noteTakerImage from '../assets/image.png';
import translationAppImage from '../assets/image2.png';
import travelAppImage from '../assets/image3.png';
import workDaySchedulerImage from '../assets/image4.png';
import weatherDashboardImage from '../assets/image5.png';
import justAnotherTextEditorImage from '../assets/image6.png';



const Portfolio = () => {
  const projectStyle = {
    marginBottom: '50px', // Adds margin below each project
  };

  return (
    <div className="container mt-4">
      <h2>Portfolio</h2>
      <div className="row">
        <div className="col-md-4" style={projectStyle}>
          <Project
            title="Note Taker"
            description="Description of Project 1"
            image={noteTakerImage}
          />
        </div>
        <div className="col-md-4" style={projectStyle}>
          <Project
            title="Translation App"
            description="Description of Project 2"
            image={translationAppImage}
          />
        </div>
        <div className="col-md-4" style={projectStyle}>
          <Project
            title="Travel App"
            description="Description of Project 3"
            image={travelAppImage}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4" style={projectStyle}>
          <Project
            title="Work Day Scheduler"
            description="Description of Project 4"
            image={workDaySchedulerImage}
          />
        </div>
        <div className="col-md-4" style={projectStyle}>
          <Project
            title="Weather Dashboard"
            description="Description of Project 5"
            image={weatherDashboardImage}
          />
        </div>
        <div className="col-md-4" style={projectStyle}>
          <Project
            title="Just Another Text Editor"
            description="Description of Project 6"
            image={justAnotherTextEditorImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;