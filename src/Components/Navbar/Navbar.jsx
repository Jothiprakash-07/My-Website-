import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">I am jo</div>

        {/* Hamburger Icon (Mobile) */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <li className="navbar-item">
            <a href="#" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">About</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">Skills</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">Portfolio</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">Experience</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
