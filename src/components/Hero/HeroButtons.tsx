import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroButtons = () => {
  return (
    <div className="mb-16 flex gap-6">
      <a 
        href="#contact" 
        className="group inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 btn-glow"
      >
        Start Your Digital Journey
        <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
      </a>
      <a 
        href="#services" 
        className="inline-flex items-center bg-transparent border border-cyan-400/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-cyan-950/20 transition-all duration-300"
      >
        Explore Services
      </a>
    </div>
  );
};

export default HeroButtons;