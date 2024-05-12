import React from 'react';
import './VideoGallery.css';

const VideoGallery = () => {
  // Remplacer par des données dynamiques si nécessaire
  const videos = [
    { 
      title: 'Video Nicolas Laty, verrier', 
      src: 'https://www.youtube.com/embed/MdSJ5eAvBNA'
    },
    { 
      title: 'Video Alexandre Papias, scénariste', 
      src: 'https://www.youtube.com/embed/cDQg5s-XNf0'
    },
    // Ajouter d'autres vidéos
  ];

  return (
    <div className="video-gallery">
      <h2>Nos dernières vidéos</h2>
      <div className="videos">
        {videos.map((video, index) => (
          <div key={index} className="video">
            <iframe 
              width="100%" 
              height="600px" 
              src={video.src} 
              title={video.title} 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen
            ></iframe>
            <p>{video.title}</p>
          </div>
        ))}
       
      </div>
      <div className="more-videos-button">
        <button onClick={() => window.location.href='/videos'}>Plus de vidéos</button>
      </div>
    </div>
  );
};

export default VideoGallery;
