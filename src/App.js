import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import FeatureSection from './components/FeatureSection/FeatureSection';
import VideoGallery from './components/VideoGallery/VideoGallery';
import RecentArticles from './components/RecentArticles/RecentArticles';
import ArticlesList from './Screen/ArticleList'; // Ensure this component exists
import ArticleDetail from './Screen/ArticleDetail'; // Ensure this component exists
import Videos from './Screen/Video'; // Ensure this component exists
import Backstage from './Screen/Backstage'
import Footer from './components/Footer/Footer';
import PhotoGallery from './components/PhotoGallerie/PhotoGallerie';
import './App.css';


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
        text: "Nous pensons que lorsqu'une pièce de théâtre captive le public, il est essentiel de se pencher sur l'esprit brillant qui l'a conçue. L'auteur d'une pièce de théâtre joue un rôle crucial dans la narration, dévoilant son imagination débordante et sa compréhension profonde de la condition humaine. Lors de la présentation de l'auteur, nous mettons l’accent sur son parcours, les sources d'inspiration et comment il procède ainsi que des aspects moins connus comme les modes de rémunération. Vous découvrirez au travers de ce court documentaire les dessous de cette profession aussi belle que complexe, qui distille les rêves aux travers des proses et nous espérons qu’il saura devenir moteur de vocation pour certains d’entre vous.",
      },
      // Ajoutez d'autres sections si nécessaire
    ],
    image: "/Alexandre_cercle.png",
    image1:"/papias1.jpg",
    quote:"lorem ipsum",
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
      // Ajoutez d'autres sections si nécessaire
    ],
    image: "/Nico_cercle.png", 
    image1:"/nico_banc1.webp",
    quote:"Il faut continuer et voir le plus d'artisans possibles.",
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
      // Ajoutez d'autres sections si nécessaire
    ],
    image: "/Anastasia_cercle.png", 
    image1:"/AnastasiaQuote.png",
    quote:"Quand on est heureux soit-même, on rend les autres heureux",
    link: "/articles/anastasia-chassaing"
  },
  // ... more articles
];
const App = () => {
  const ArticleDetailWrapper = () => {
    const params = useParams();
    // Here you find the article using the id from the URL
    const article = articles.find(article => article.id === parseInt(params.articleId));
    // And pass the found article to the ArticleDetail component
    return <ArticleDetail article={article} />;
  };
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <React.Fragment>
              <HeroSection />
              <FeatureSection />
              <VideoGallery />
              <RecentArticles />
              <PhotoGallery />
            </React.Fragment>
          } />
            <Route path="/articles" element={<ArticlesList articles={articles} />} />
        <Route path="/articles/:articleId" element={<ArticleDetailWrapper />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/backstage" element={<Backstage />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};


export default App;
