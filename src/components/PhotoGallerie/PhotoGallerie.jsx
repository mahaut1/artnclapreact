import React from 'react';
import './PhotoGallerie.css';
// Import your image files here
import image1 from '../../images/verrerie/meduse.webp';
import image2 from '../../images/verrerie/sulfure.webp';
import image3 from '../../images/verrerie/Manon dino.webp';
import image4 from '../../images/verrerie/emerveillement.webp';
import image5 from '../../images/enluminures compressé/anastasia bureau1.webp';
import image6 from '../../images/peintre/DjangoSourire2.jpg';

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
