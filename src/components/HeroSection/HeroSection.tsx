import React, { CSSProperties } from 'react';
import './HeroSection.css';

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  children?: React.ReactNode;
  style?: CSSProperties;
}

const HeroSection: React.FC<HeroSectionProps> = ({ backgroundImage, title, children, style }) => {
  return (
    <section 
      className="hero-section" 
      style={{ 
        ...style,
        backgroundImage: `url(${backgroundImage})` 
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>{title}</h1>
          {children}
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 