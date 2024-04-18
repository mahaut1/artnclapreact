import React from 'react';
import './Footer.css';
// Import your social media icons here
import instagramIcon from '../../images/instagram-icon.png';
import youtubeIcon from '../../images/youtube-icon.png'; 
import logo from "../../images/LOGO ART N CLAP ORIGINAL 1.png"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <img src={instagramIcon} alt="Instagram" />
        <img src={youtubeIcon} alt="YouTube" />
     
      </div>
      <div className="footer-logo">
        <img src={logo} alt="Art N Clap" /> 
      </div>
      <div className="footer-rights">
        <p>&copy; 2024 ART N CLAP. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
