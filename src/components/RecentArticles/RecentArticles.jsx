import React from 'react';
import './RecentArticles.css';
// Importez vos images ici
import thumbnail1 from '../../images/scenariste.jpg';
import thumbnail2 from '../../images/dino.webp';
import thumbnail3 from '../../images/enluminures compressé/Anastasia1.webp';

const RecentArticles = () => {
  // Utilisez les objets importés pour les vignettes
  const articles = [
    { title: 'Découvrez le métier de scénariste', thumbnail: thumbnail1 },
    { title: 'Découvrez le métier de verrier', thumbnail: thumbnail2 },
    { title: 'Découvrez le métier d’enlumineur', thumbnail: thumbnail3 },
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
      <div className="read-more-container">
        <button className="read-more" onClick={() => window.location.href='/articles'}>Lire plus</button>
      </div>
    </div>
  );
};

export default RecentArticles;
