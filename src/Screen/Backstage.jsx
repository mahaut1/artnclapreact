// Backstage.js

import React from 'react';
import './Backstage.css'; // Your Backstage.css file will contain the styling
import cameraman1 from "../images/verrerie/cameraman1.webp";
import cameraman3 from "../images/verrerie/cameraman3.webp";
import dino from "../images/verrerie/dino.webp" ;
import emerveillement from "../images/verrerie/emerveillement.webp";
import fourRechauffe from "../images/verrerie/four rechauffe.webp";
import nicoBanc from '../images/verrerie/nico banc.webp';
import nico from "../images/verrerie/Nico.webp";
import priseSon from "../images/verrerie/prise de son.webp";
import anastasiaBureau from "../images/enluminures compressé/anastasia bureau1.webp";
import anastasia1 from "../images/enluminures compressé/Anastasia3.webp";
import enluminure from "../images/enluminures compressé/enluminure.webp";
import equipeTournage1 from "../images/enluminures compressé/equipe tournage3.webp";
import equipeTournage2 from "../images/enluminures compressé/equipe tournage2.webp";
import anastasiaBureau1 from "../images/enluminures compressé/anastasia bureau 2.webp";


const backstageData = [
  {
    category: 'Backstage Verrerie',
    images: [
      cameraman1,  
      cameraman3,
      dino,
      emerveillement,
      fourRechauffe,
      nicoBanc,
      nico,
      priseSon,
    ],
  },
  {
    category: 'Backstage Enluminure',
    images: [
      anastasiaBureau,  
      anastasia1,
      enluminure,
      equipeTournage1,
      equipeTournage2,
      anastasiaBureau1,
    ],
  },
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
                <img src={image} class= "imageBackstage"alt={`Backstage ${section.category}`} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Backstage;
