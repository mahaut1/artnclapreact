import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Art N Clap" />
        </Link>
      </div>
      <nav className="navbar">
        {/* Use Link for internal navigation */}
        <Link to="/videos">Vidéos</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/backstage">Backstage</Link>
         {/* Assuming "Backstages" is a section on the same page */}
      </nav>
      <div className="social-media">
        {/* Keep external links as <a> tags */}
        <a href="#instagram" className="social-icon instagram"></a>
        <a href="#youtube" className="social-icon youtube"></a>
      </div>
    </header>
  );
};

export default Header;
