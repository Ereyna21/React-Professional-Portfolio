import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <a href="https://github.com/Ereyna21">
              <i className="fab fa-github larger-icon"></i> 
            </a>
          </div>
          <div className="col-md-4">
            <a href="https://www.linkedin.com/in/eric-reyna-3a7269147/">
              <i className="fab fa-linkedin larger-icon"></i> 
            </a>
          </div>
          <div className="col-md-4">
            <a href="https://www.facebook.com/eric.reyna.1829">
              <i className="fab fa-facebook larger-icon"></i> 
            </a>
          </div>
          {/* Additional links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;