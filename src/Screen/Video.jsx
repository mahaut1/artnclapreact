// Videos.js

import React from 'react';
import './Videos.css'; // Your Videos.css file will contain the styling

// Assuming each video has a year, title, and embed URL
const videos = [
  {
    year: '2023',
    title: 'Danseuse',
    embedUrl: 'https://www.youtube.com/embed/bzZidXQfnVY'
  },
  {
    year: '2024',
    title: 'Verrier',
    embedUrl: 'https://www.youtube.com/embed/KJrJt5OlnlM'
  },
  {
    year: '2023',
    title: 'Another video title here',
    embedUrl: 'https://www.youtube.com/embed/vwm_GMmO1_Q'
  },
  // ... more videos
];

const Videos = () => {
  // Group videos by year
  const videosByYear = videos.reduce((acc, video) => {
    if (!acc[video.year]) {
      acc[video.year] = [];
    }
    acc[video.year].push(video);
    return acc;
  }, {});

  return (
    <div className="videos-page">
      {Object.keys(videosByYear).sort().reverse().map(year => (
        <div key={year} className="video-year-section">
          <h2>{year}</h2>
          {videosByYear[year].map((video, index) => (
            <div key={index} className="video-container">
              <iframe
                width="560"
                height="315"
                src={video.embedUrl}
                title={video.title}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
              </iframe>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Videos;
