import React from 'react';
import './VideoGallery.css';

const VideoGallery = () => {
  // Remplacer par des données dynamiques si nécessaire
  const videos = [
    { title: 'Video Title 1', thumbnail: '/path-to-thumbnail1.jpg' },
    { title: 'Video Title 2', thumbnail: '/path-to-thumbnail2.jpg' },
    // Ajouter d'autres vidéos
  ];

  return (
    <div className="video-gallery">
      <h2>Nos dernières vidéos</h2>
      <div className="videos">
        {videos.map((video, index) => (
          <div key={index} className="video">
            <img src={video.thumbnail} alt={video.title} />
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
