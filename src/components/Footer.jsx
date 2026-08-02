import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Eric Reyna</p>
      <div className="footer-links">
        <a href="https://github.com/Ereyna21" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/eric-reyna-3a7269147/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
