import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <a href="https://github.com/Ereyna21">GitHub</a>
          </div>
          <div className="col-md-4">
            <a href="https://www.linkedin.com/in/eric-reyna-3a7269147/">LinkedIn</a>
          </div>
          <div className="col-md-4">
            <a href="https://stackoverflow.com/users/youruserid">Stack Overflow</a>
          </div>
          {/* Additional links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;