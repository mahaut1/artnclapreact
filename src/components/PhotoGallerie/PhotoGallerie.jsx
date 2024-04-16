import React from 'react';
import './PhotoGallerie.css';
// Import your image files here
import image1 from '../../images/Mask group(1).png';
import image2 from '../../images/Mask group(2).png';
import image3 from '../../images/Mask group(3).png';
import image4 from '../../images/Mask group(4).png';
import image5 from '../../images/Mask group(5).png';
import image6 from '../../images/Mask group(6).png';

const Gallery = () => {
  // Array of images
  const images = [image1, image2, image3, image4, image5, image6]; // Add more as needed

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} alt={`Gallery item ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
