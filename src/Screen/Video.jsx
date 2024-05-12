// Videos.js

import React, { useState }  from 'react';
import './Videos.css'; 


const videos = [
  {
    year: '2023',
    title: 'Danseuse',
    embedUrl: 'https://www.youtube.com/embed/bzZidXQfnVY'
  },
  {
    year: '2024',
    title: 'Teaser Verrier',
    embedUrl: 'https://www.youtube.com/embed/KJrJt5OlnlM'
  },
  {
    year: '2023',
    title: 'Dessinateur',
    embedUrl: 'https://www.youtube.com/embed/vwm_GMmO1_Q'
  },
  {
    year: '2024',
    title: 'Verrier Nicolas Laty',
    embedUrl: 'https://www.youtube.com/embed/MdSJ5eAvBNA'
  },
  {
    year: '2024',
    title: 'Enlumineur Anastasia Chassaing',
    embedUrl: 'https://www.youtube.com/embed/N5uB2Jx_82k'
  },
  {
    year: '2024',
    title: 'Scénariste Alexandre Papias',
    embedUrl: 'https://www.youtube.com/embed/cDQg5s-XNf0'
  },
];

const Videos = () => {
  const [featuredVideo, setFeaturedVideo] = useState(videos[3]); // Default to the first video initially

  const videosByYear = videos.reduce((acc, video) => {
    (acc[video.year] = acc[video.year] || []).push(video);
    return acc;
  }, {});

  const handleVideoSelect = (video) => {
    setFeaturedVideo(video);
  };

  return (
    <div className="videos-page">
      {featuredVideo && (
        <div className="featured-video-container">
          <iframe
            src={featuredVideo.embedUrl}
            title={featuredVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            width="90%"
            height="500px"
          ></iframe>
        </div>
      )}

      {Object.keys(videosByYear).sort().reverse().map(year => (
        <div key={year} className="video-year-section">
          <h2>{year}</h2>
          <div className="video-previews">
            {videosByYear[year].map((video, index) => (
              <div key={index} className="video-preview" onClick={() => handleVideoSelect(video)}>
                <img src={`https://img.youtube.com/vi/${video.embedUrl.split('/').pop()}/0.jpg`} alt={video.title} />
                <p>{video.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;