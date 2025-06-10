import React from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo-area">
      <img src={logo} alt="KariyerLab Logo" className="navbar-logo-img" />
      <span className="navbar-logo-text">KariyerLab</span>
    </div>
    <ul className="navbar-links">
      <li><Link to="hero" smooth={true} duration={500}>Anasayfa</Link></li>
      <li><Link to="team" smooth={true} duration={500}>Ekip</Link></li>
      <li><Link to="project" smooth={true} duration={500}>Proje</Link></li>
      <li><Link to="jury" smooth={true} duration={500}>Jüri</Link></li>
      <li><Link to="contact" smooth={true} duration={500}>İletişim</Link></li>
    </ul>
  </nav>
);

export default Navbar; 