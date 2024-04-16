// ArticleDetail.js

import React from 'react';
import { useParams } from 'react-router-dom'; // To get the article ID from the URL
import './ArticleDetail.css';

const ArticleDetail = ({ articles }) => {
  let { articleId } = useParams();
  const article = articles.find((article) => article.id === parseInt(articleId));

  return (
    <div className="article-detail">
      <img src={article.image} alt={article.title} />
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      {/* Add additional article details here */}
    </div>
  );
};

export default ArticleDetail;
