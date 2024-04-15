import React from 'react';
import './Header.css'; // Assurez-vous d'avoir ce fichier CSS dans le même dossier.
import logo from '../../images/logo.png'
const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src= {logo} alt="Art N Clap" /> 
      </div>
      <nav className="navbar">
        <a href="#videos">Vidéos</a>
        <a href="#articles">Articles</a>
        <a href="#backstages">Backstages</a>
      </nav>
      <div className="social-media">
        {/* Liens ou boutons pour les médias sociaux */}
        <a href="#instagram" className="social-icon instagram"></a>
        <a href="#youtube" className="social-icon youtube"></a>
      </div>
    </header>
  );
};

export default Header;
