// import React from 'react';

// const Resume = () => {
//   return (
//     <div>
//       <a href="/(<../../Eric Reyna Professional Resume.docx>)" download>Download Resume</a>
//       <ul>
//         {/* List of proficiencies */}
//         <li>JavaScript</li>
//         <li>React</li>
//         <li>Node.js</li>
//         {/* Add more as needed */}
//       </ul>
//     </div>
//   );
// };

// export default Resume;



import React from 'react';

const Resume = () => {
  return (
    <div className="container mt-4">
      <h2>Resume</h2>
      <a href="Eric Reyna Professional Resume.docx/" download className="btn btn-primary">
        Download Resume
      </a>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        {/* Add more as needed */}
      </ul>
    </div>
  );
};

export default Resume;