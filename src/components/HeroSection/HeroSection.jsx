import React from 'react';
import './HeroSection.css'; // Assurez-vous que ce fichier est correctement lié

const HeroSection = () => {
  return (
    <div className="hero-section">
      <video autoPlay loop muted style={{ position: 'absolute', width: '100%', left: '50%', top: '50%', height: '100%', objectFit: 'cover', transform: 'translate(-50%, -50%)' }}>
        <source src="./TeaserVerrier.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HeroSection;
