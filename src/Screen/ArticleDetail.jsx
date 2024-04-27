// ArticleDetail.js
import { Link } from 'react-router-dom';
import React from 'react';
import './ArticleDetail.css'
const ArticleDetail = ({ article }) => {
  if (!article) {
    return <div className="article-not-found">Article not found</div>; 
  }

  return (
    <div className="article-detail">
      <div className="header-container">
        <h1 className="article-title">{article.title}</h1>
        <img src={article.image} alt={article.title} className="article-image" />
      </div>
      <p className="article-description">{article.description}</p>
      <div className="lower-container">
        <div className="left-column">
          <img src={article.image1} alt={article.title} className="article-image1" />
          <div className="quote-area">
            <p className="quote-text">"{article.quote}"</p>
          </div>
        </div>
        <div className="right-column">
          {article.content.map((contentSection, index) => (
            <section key={index} className={`content-section ${index === 0 ? 'content-section-first' : ''}`}>
              <h2 className="content-subtitle">{contentSection.subtitle}</h2>
              <p className="content-text">{contentSection.text}</p>
            </section>
          ))}
        </div>
      </div>
      <Link to={`/articles/`} className="article-read-more">Revenir aux autres articles</Link>
    </div>
  );
};

export default ArticleDetail;
