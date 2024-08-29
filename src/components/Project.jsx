// import React from 'react';

// const Project = ({ title, description, image }) => {
//   return (
//     <div className="card" style={{width: '18rem'}}>
//       <img src={image} className="card-img-top" alt={title} />
//       <div className="card-body">
//         <h5 className="card-title">{title}</h5>
//         <p className="card-text">{description}</p>
//         <a href="/" className="btn btn-primary">Go somewhere</a>
//       </div>
//     </div>
//   );
// };

// export default Project;




import React from 'react';

const Project = ({ title, description, image, url }) => {
  return (
    <div className="card" style={{width: '18rem'}}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={url} className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};

export default Project;