

import React from 'react';
import { Link } from 'react-router-dom'; // make sure you have react-router-dom installed
import './ArticleList.css'; 
import './ArticleDetail'
const articles = [
  // Array of article objects
  {
    id: 1,
    title: "ALEXANDRE PAPIAS",
    description: "La scène théatrale est le lieu où les mots prennent vie, et derrière chaque chef d'oeuvre se trouve un génie créatif. Aujourd'hui, nous nous retrouvons avec Alexandre Papias, Auteur de 'Faut pas s'emballer', 'Sur une petite musique russe' ou encore 'visite officielle'.",
    content: [
      {
        subtitle: "Qui est-il?",
        text: " Alexandre Papias est né à Nice et est d'origine grecque. Ancien officer de la marine marchande, écrivant surtout des comédies, il s'amuse à caricaturer la vie quotidiennes de ses contemporains.",
      },
      {
        subtitle: "Pourquoi un scénariste?",
        text: "Nous pensons que lorsqu'une pièce de théâtre captive le public, il est essentiel de se pencher sur l'esprit brillant qui l'a conçue. L'auteur d'une pièce de théâtre joue un rôle crucial dans la narration, dévoilant son imagination débordante et sa compréhension profonde de la condition humaine. Lors de la présentation de l'auteur ",
      },
      // Ajoutez d'autres sections si nécessaire
    ],
    image: "/Alexandre_cercle.png",
    image1:"/Papias.jpg",
    link: "/articles/alexandre-papias"
  },
  {
    id: 2,
    title: "NICOLAS LATY",
    description: "Au coeur de la présentation, Nicolas Laty nous dévoile son processus de création, décrivant la fusion de la tradition et de l'innovation qui caractérise son travail.",
    content: [
      {
        subtitle: "L'art du verre",
        text: "L'art du verre dévoile un monde en fusion où la chaleur, l'habileté et la créativité se rencontrent pour donner naissance à des oeuvres d'art éblouissantes. Lors de ces instants, le verrier partage son expertise, révélant les subtilités du travail du verre et l'art de donner vie à des formes délicates et uniques ",
      },
      {
        subtitle: "La patte de l'artiste",
        text: "Sa marque de fabrique, ses yeux 'cartoonesque' et ses couleurs saturées qui insufflent à ses oeuvres une aura amusante qui saura vous renvoyer en enfance. De ses inspirations aux découvertes fortuites, Nicolas Laty nous offre un aperçu intime de la vie quotidienne dans l'atelier du verrier. Les techniques spécifiques, des soufflages délicats aux détails minutieux de la gravure, prennent vie sous ses explications captivantes",
      },
    
    ],
    image: "/Nico_cercle.png", 
    image1:"/nico_banc.webp",
    link: "/articles/nicolas-laty"
  },
  {
    id: 3,
    title: "ANASTASIA CHASSAING",
    description: "Aujourd'hui, nous vous invitons dans un voyage fascinant au côté d'Anastasia Chassaing, pour nous dévoiler sa profession ancestrâle: enlumineurs.",
    content: [
      {
        subtitle: "Enlumineurs, c'est quoi?",
        text: "L'enluminure est un art ancestral qui incarne la fusion subtile de la créativité artistique et de la technique méticuleuse. Aujourd'hui, nous vous invitons dans un voyage fascinant au côté d'Anastasia Chassaing où la couleur, la délicatesse et la précision se conjuguent pour créer des oeuvres d'une beauté exceptionnelle. ",
      },
      {
        subtitle: "Un processus délicat",
        text: " Le processus d'enluminure est bien plus qu'une simple application de couleurs vives; il nécéssite une compréhension profonde de l'histoire de l'art, une minutie extrême et une connaissance des techniques anciennes et de l'utilisation experte des pigments. Au cours de la présentation, Anastasia Chassaing partage son parcours artistique, révélant les secrets de sa palette et les sources d'inspiration qui alimentent son travail. Chaque détail minutieux prend vie sous sa narration, offrant au public un aperçu de l'engagement passionné derrière chaque création. La maitrîse, aliiant tradition et innovation, se dévoile à travers des anecdotes sur les défils surmontés et les triomphes artistiques. Fusion entre le passé et le présent, illustrant l'importance de préserver un savoir-faire artistique précieux et d'honorer la richesse de la tradition. ",
      },
      
    ],
    image: "/Anastasia_cercle.png", 
    image1:"/AnastasiaQuote.png",
    link: "/articles/anastasia-chassaing"
  },

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
            <Link to={`/articles/${article.id}`} className="article-read-more">En savoir plus</Link>

          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticlesList;
