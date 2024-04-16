import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

const App = () => {
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
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:articleId" element={<ArticleDetail />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/backstage" element={<Backstage />} /> {/* New route for the Videos section */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
