import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar fixed-top bg-light" style={{ marginTop: 0, paddingTop: 0}}>
      <div className="container-fluid">
        <Link className="nav-link" to="/">My Portfolio</Link>
        <Link className="nav-link" to="/about">About Me</Link>
        <Link className="nav-link" to="/portfolio">Portfolio</Link>
        <Link className="nav-link" to="/resume">Resume</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Header;