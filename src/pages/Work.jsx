// import React from 'react';
// import Project from '../components/Project';
// import noteTakerImage from '../assets/image.png';
// import translationAppImage from '../assets/image2.png';
// import travelAppImage from '../assets/image3.png';
// import workDaySchedulerImage from '../assets/image4.png';
// import weatherDashboardImage from '../assets/image5.png';
// import justAnotherTextEditorImage from '../assets/image6.png';

// const Work = () => {
//   return (
//     <div className="container mt-6">
//       <h2>Projects</h2>
//       <div className="diagonal-container">
//         <div className="project-container">
//           <Project
//             title="Note Taker"
//             description="Description of Project 1"
//             image={noteTakerImage}
//             url="https://note-taker-e21-e1fa8eb829b9.herokuapp.com/"
//           />
//         </div>
//         <div className="project-container">
//           <Project
//             title="Translation App"
//             description="Description of Project 2"
//             image={translationAppImage}
//             url="https://johndennis2.github.io/translateAPP/"
//           />
//         </div>
//         <div className="project-container">
//           <Project
//             title="Travel App"
//             description="Description of Project 3"
//             image={travelAppImage}
//             url="https://travel-babble-09d9fd202520.herokuapp.com/"
//           />
//         </div>
//         <div className="project-container">
//           <Project
//             title="Work Day Scheduler"
//             description="Description of Project 4"
//             image={workDaySchedulerImage}
//             url="https://ereyna21.github.io/Work-Day-Scheduler/"
//           />
//         </div>
//         <div className="project-container">
//           <Project
//             title="Weather Dashboard"
//             description="Description of Project 5"
//             image={weatherDashboardImage}
//             url="https://ereyna21.github.io/Weather-Dashboard/"
//           />
//         </div>
//         <div className="project-container">
//           <Project
//             title="Just Another Text Editor"
//             description="Description of Project 6"
//             image={justAnotherTextEditorImage}
//             url="https://pwa-text-editor-e21-9372dfcfeda3.herokuapp.com/"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;


import React, { useEffect } from 'react';
import Project from '../components/Project';
import noteTakerImage from '../assets/image.png';
import translationAppImage from '../assets/image2.png';
import travelAppImage from '../assets/image3.png';
import workDaySchedulerImage from '../assets/image4.png';
import weatherDashboardImage from '../assets/image5.png';
import justAnotherTextEditorImage from '../assets/image6.png';

const Work = () => {
  useEffect(() => {
    const projectContainers = document.querySelectorAll('.project-container');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    projectContainers.forEach((container) => {
      observer.observe(container);
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div className="container mt-6">
      <h2>Projects</h2>
      <div className="diagonal-container">
        <div className="project-container">
          <Project
            title="Note Taker"
            description="Description of Project 1"
            image={noteTakerImage}
            url="https://note-taker-e21-e1fa8eb829b9.herokuapp.com/"
          />
        </div>
        <div className="project-container">
          <Project
            title="Translation App"
            description="Description of Project 2"
            image={translationAppImage}
            url="https://johndennis2.github.io/translateAPP/"
          />
        </div>
        <div className="project-container">
          <Project
            title="Travel App"
            description="Description of Project 3"
            image={travelAppImage}
            url="https://travel-babble-09d9fd202520.herokuapp.com/"
          />
        </div>
        <div className="project-container">
          <Project
            title="Work Day Scheduler"
            description="Description of Project 4"
            image={workDaySchedulerImage}
            url="https://ereyna21.github.io/Work-Day-Scheduler/"
          />
        </div>
        <div className="project-container">
          <Project
            title="Weather Dashboard"
            description="Description of Project 5"
            image={weatherDashboardImage}
            url="https://ereyna21.github.io/Weather-Dashboard/"
          />
        </div>
        <div className="project-container">
          <Project
            title="Just Another Text Editor"
            description="Description of Project 6"
            image={justAnotherTextEditorImage}
            url="https://pwa-text-editor-e21-9372dfcfeda3.herokuapp.com/"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
