import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const linkClass = ({ isActive }) => `nav-link-custom${isActive ? ' active' : ''}`;

  return (
    <header className="site-header">
      <nav className="site-nav navbar navbar-expand-lg navbar-dark" aria-label="Primary navigation">
        <NavLink className="brand" to="/">ER<span>.</span></NavLink>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#portfolioNav"
          aria-controls="portfolioNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="portfolioNav">
          <div className="nav-links ms-auto">
            <NavLink className={linkClass} to="/">Home</NavLink>
            <NavLink className={linkClass} to="/about">About</NavLink>
            <NavLink className={linkClass} to="/skills">Skills</NavLink>
            <NavLink className={linkClass} to="/work">Projects</NavLink>
            <NavLink className={linkClass} to="/resume">Resume</NavLink>
            <NavLink className={linkClass} to="/contact">Contact</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
