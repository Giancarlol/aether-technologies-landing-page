import React from 'react';
import VideoBackground from './VideoBackground';
import HeroContent from './HeroContent';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white min-h-screen flex items-center">
      <VideoBackground />
      <div className="container mx-auto px-4 relative z-10">
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;