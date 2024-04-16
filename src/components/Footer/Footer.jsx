import React from 'react';
import './Footer.css';
// Import your social media icons here
import instagramIcon from '../../images/instagram-icon.png'; // Replace with your actual file path
import youtubeIcon from '../../images/youtube-icon.png'; // Replace with your actual file path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <img src={instagramIcon} alt="Instagram" />
        <img src={youtubeIcon} alt="YouTube" />
     
      </div>
      <div className="footer-logo">
        <img src='/path-to-your-logo.png' alt="Art N Clap" /> {/* Replace with your actual file path */}
      </div>
      <div className="footer-rights">
        <p>&copy; 2024 ART N CLAP. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
