import React from 'react';
import './HeroSection.css';

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ backgroundImage, title }) => {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>{title}</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 