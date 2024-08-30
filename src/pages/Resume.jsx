import React from 'react';
import resumeImage from '../assets/resumeImage.png'; // Adjust the path based on where your image is located

const Resume = () => {
  return (
    <div className="container mt-4">
      <h2>Resume</h2>
      {/* Ensure the href points to the correct path in the public folder */}
      <a href="/Eric Reyna Resume.docx" download className="btn btn-primary">
        Download Resume
      </a>
      
      {/* Add the image of your resume */}
      <h3 style={{ color: 'white' }}>Feel Free To Download A Copy Of My Resume</h3>
      <img src={resumeImage} alt="Eric Reyna's Resume" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  );
};

export default Resume;