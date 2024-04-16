// Backstage.js

import React from 'react';
import './Backstage.css'; // Your Backstage.css file will contain the styling

const backstageData = [
  {
    category: 'Backstage Verrerie',
    images: [
      '/path-to-first-image.jpg',  // Replace with actual paths
      '/path-to-second-image.jpg', // Replace with actual paths
      // ... more image paths
    ],
  },
  // ... more categories
];

const Backstage = () => {
  return (
    <div className="backstage-container">
      {backstageData.map((section, index) => (
        <div key={index} className="backstage-section">
          <h2>{section.category}</h2>
          <div className="backstage-images">
            {section.images.map((image, idx) => (
              <div key={idx} className="backstage-image-container">
                <img src={image} alt={`Backstage ${section.category}`} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Backstage;
