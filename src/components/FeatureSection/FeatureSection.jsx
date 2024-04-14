import React from 'react';
import './FeatureSection.css';

const FeatureSection = () => {
  return (
    <div className="feature-section">
      <div className="feature-item">
        <h2>Art N' Clap c'est quoi?</h2>
        <p>
          Né au sein d'un projet étudiant dans le campus Ynov qui regroupe différentes filières comme l'informatique,
          l'audiovisuel, la création et le design, ou encore le marketing et la communication, Art N' Clap est un
          mini-série documentaire. Pour chaque série, des artistes et techniciens parlent de leurs métiers, un
          nouveau métier est présenté sur une durée moyenne de sept minutes.
        </p>
      </div>
      <div className="feature-item">
        <h2>Notre objectif</h2>
        <p>
          Notre série vise à être à la fois divertissante et pédagogique. Notre souhait est de transmettre la
          passion des professionnels en partageant leur quotidien avec des épisodes variés. Ces interviews
          permettent également à renseigner le spectateur sur un métier donné pour qu'il puisse poser ses
          recherches s'il souhaite, lui aussi, exercer ce métier.
        </p>
      </div>
    </div>
  );
};

export default FeatureSection;
