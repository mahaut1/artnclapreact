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

];

const Videos = () => {
  const [featuredVideo, setFeaturedVideo] = useState(null);
  const videosByYear = videos.reduce((acc, video) => {
    if (!acc[video.year]) {
      acc[video.year] = [];
    }
    acc[video.year].push(video);
    return acc;
  }, {});

  const handleVideoSelect = (video) => {
    console.log("Video selected:", video.title);
    setFeaturedVideo(video);
  };


  return (
    <div className="videos-page">
      {featuredVideo && (
        <div className="featured-video-container">
          <iframe
            width="100%"
            height="500px" 
            src={featuredVideo.embedUrl}
            title={featuredVideo.title}
            key={featuredVideo.embedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {Object.keys(videosByYear).sort().reverse().map(year => (
        <div key={year} className="video-year-section">
          <h2>{year}</h2>
          {videosByYear[year].map((video, index) => (
            <div key={index} className="video-container" onClick={() => handleVideoSelect(video)}>
              <iframe
                width="100%"
                height="250px" // Adjust height as needed
                src={video.embedUrl}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Videos;
