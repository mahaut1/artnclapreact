import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import FeatureSection from './components/FeatureSection/FeatureSection';
import VideoGallery from './components/VideoGallery/VideoGallery';
import RecentArticles from './components/RecentArticles/RecentArticles';
import Footer from './components/Footer/Footer';
import './App.css'; // Assure-toi d'avoir un fichier CSS pour des styles généraux si nécessaire.

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeatureSection />
      <VideoGallery />
      <RecentArticles />
      <Footer />
    </div>
  );
};

export default App;
