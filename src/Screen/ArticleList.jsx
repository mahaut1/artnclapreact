

import React from 'react';
import { Link } from 'react-router-dom'; // make sure you have react-router-dom installed
import './ArticleList.css'; // your custom CSS file for styling

const articles = [
  // Array of article objects
  {
    id: 1,
    title: "ALEXANDRE PAPIAS",
    description: "Brief description of Alexandre's article...",
    image: "../../images/scenariste.jpg", // Replace with the actual path to the image
    link: "/articles/alexandre-papias" // This should be the link to the article's detail page
  },
  {
    id: 2,
    title: "NICOLAS LATY",
    description: "Brief description of Nicolas's article...",
    image: "/path-to-nicolas-image.jpg", // Replace with the actual path to the image
    link: "/articles/nicolas-laty"
  },
  {
    id: 3,
    title: "ANASTASIA CHASSAING",
    description: "Brief description of Anastasia's article...",
    image: "/path-to-anastasia-image.jpg", // Replace with the actual path to the image
    link: "/articles/anastasia-chassaing"
  },
  // ... more articles
];

const ArticlesList = () => {
  return (
    <div className="articles-list">
      {articles.map(article => (
        <div key={article.id} className="article-item">
          <img src={article.image} alt={article.title} className="article-image" />
          <div className="article-content">
            <h2 className="article-title">{article.title}</h2>
            <p className="article-description">{article.description}</p>
            <Link to={article.link} className="article-read-more">En savoir plus</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticlesList;
