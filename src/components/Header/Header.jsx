import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for menu
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle menu toggle

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Art N Clap" />
        </Link>
      </div>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <Link to="/videos" onClick={() => setIsOpen(false)}>Vidéos</Link>
        <Link to="/articles" onClick={() => setIsOpen(false)}>Articles</Link>
        <Link to="/backstage" onClick={() => setIsOpen(false)}>Backstage</Link>
      </nav>
      <div className="social-media">
        <a href="https://www.instagram.com/artnclap" target="blank" className="social-icon instagram"></a>
        <a href="https://www.youtube.com/@Artnclap" target="blank" className="social-icon youtube"></a>
      </div>
    </header>
  );
};

export default Header;
