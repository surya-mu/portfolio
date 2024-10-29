import React from 'react';
import '../styles/Navbar.css';
import { NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <div className="container navi">
      <nav className="navbar navbar-expand-md">
        <a href="/" className="navbar-brand text-light">&lt;/&gt;</a>
        
        <button className="navbar-toggler navbar-dark"  data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse justify-content-center" id="navbarContent">
          <ul className="navbar-nav text-light">
            <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
            <li className="nav-item"><NavLink to="/skills" className="nav-link">Skills</NavLink></li>
            <li className="nav-item"><NavLink to="/projects" className="nav-link">Projects</NavLink></li>
            <li className="nav-item"><NavLink to="/experience" className="nav-link">Experience</NavLink></li>
            <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
