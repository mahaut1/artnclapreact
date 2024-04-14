import React from 'react';
import './RecentArticles.css';

const RecentArticles = () => {
  // Remplacer par des données dynamiques si nécessaire
  const articles = [
    { title: 'Article Title 1', thumbnail: '/path-to-thumbnail1.jpg' },
    { title: 'Article Title 2', thumbnail: '/path-to-thumbnail2.jpg' },
    // Ajouter d'autres articles
  ];

  return (
    <div className="recent-articles">
      <h2>Articles récents</h2>
      <div className="articles">
        {articles.map((article, index) => (
          <div key={index} className="article">
            <img src={article.thumbnail} alt={article.title} />
            <p>{article.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentArticles;
