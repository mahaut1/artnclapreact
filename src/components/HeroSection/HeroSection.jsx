import React from 'react';
import './HeroSection.css'; // Assurez-vous que ce fichier est correctement lié

const HeroSection = () => {
  return (
    <div className="hero-section">
     <video
  autoPlay
  loop
  muted
  style={{
    position: 'absolute',
    width: '100%',
    left: '0',
    top: '0',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0
  }}
>
  <source src="./TeaserVerrier.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

    </div>
  );
};

export default HeroSection;
