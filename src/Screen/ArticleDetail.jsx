// ArticleDetail.js
import { Link } from 'react-router-dom'; // make sure you have react-router-dom installed

import React from 'react';

const ArticleDetail = ({ article }) => {
  if (!article) {
    return <div className="article-not-found">Article not found</div>; 
  }
console.log(article)
  return (
    <div className="article-detail">
      <div className="article-header">
        <img src={article.image} alt={article.title} className="article-image" />
        <h1 className="article-title">{article.title}</h1>
        <p className="article-description">{article.description}</p>
      </div>
      {article.content.map((contentSection, index) => (
        <section key={index} className={`content-section ${index === 0 ? 'content-section-quote' : ''}`}>
          <h2 className="content-subtitle">{contentSection.subtitle}</h2>
          <p className="content-text">{contentSection.text}</p>
        </section>
      ))}
<Link to={`/articles/`} className="article-read-more">Revenir aux autres articles</Link>
    </div>
  );
};

export default ArticleDetail;
