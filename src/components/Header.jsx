import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">My Portfolio</Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/about">About Me</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/portfolio">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/resume">Resume</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;