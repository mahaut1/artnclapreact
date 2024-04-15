import React from 'react';
import './VideoGallery.css';

const VideoGallery = () => {
  // Remplacer par des données dynamiques si nécessaire
  const videos = [
    { 
      title: 'Video teaser Nicolas Laty, verrier', 
      src: 'https://www.youtube.com/embed/KJrJt5OlnlM'
    },
    { 
      title: 'Video Alexandre, dessinateur', 
      src: 'https://www.youtube.com/embed/vwm_GMmO1_Q'
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
              width="560" 
              height="315" 
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
