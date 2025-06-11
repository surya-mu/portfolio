import React from 'react';
import '../styles/Navbar.css';
// import { NavLink} from 'react-router-dom';
import Scrollspy from 'react-scrollspy';

function Navbar() {
  return (
    <div className="container navi" >
      <nav className="navbar navbar-expand-md" >
        <a href="/" className="navbar-brand text-light">&lt;/&gt;</a>
        
        <button className="navbar-toggler navbar-dark"  data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse justify-content-center" id="navbarContent">
          <Scrollspy
  items={['home', 'skills', 'projects', 'experience', 'about']}
  currentClassName="active"
  offset={-100} // adjust based on navbar height
  componentTag="ul"
  className="navbar-nav text-light"
>
            <li className="nav-item"><a href ="#home" className="nav-link">Home</a></li>
            <li className="nav-item"><a href ="#skills" className="nav-link">Skills</a></li>
            <li className="nav-item"><a href ="#projects" className="nav-link">Projects</a></li>
            <li className="nav-item"><a href="#experience" className="nav-link">Experience</a></li>
            <li className="nav-item"><a href="#about" className="nav-link">Contact</a></li>
          </Scrollspy>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
