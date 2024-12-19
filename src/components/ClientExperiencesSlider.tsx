import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const experiences = [
  {
    quote: "AETHER TECHNOLOGIES transformed our business with their innovative solutions.",
    author: "Jane Doe",
    company: "Tech Innovators Inc."
  },
  {
    quote: "The team's expertise and dedication led to a 200% increase in our app's performance.",
    author: "John Smith",
    company: "Global Systems Ltd."
  },
  {
    quote: "Working with AETHER TECHNOLOGIES was a game-changer for our startup.",
    author: "Emily Johnson",
    company: "NextGen Startups"
  }
];

const ClientExperiencesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + experiences.length) % experiences.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center transition-opacity duration-500 ease-in-out">
            <p className="text-2xl font-light text-white mb-6 italic">"{experiences[currentIndex].quote}"</p>
            <p className="text-lg font-semibold text-blue-400">{experiences[currentIndex].author}</p>
            <p className="text-sm text-gray-400">{experiences[currentIndex].company}</p>
          </div>
          <button 
            onClick={prevSlide} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition duration-300"
          >
            <ArrowLeft size={32} className="transform transition-transform duration-300 hover:translate-x-[-5px]" />
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition duration-300"
          >
            <ArrowRight size={32} className="transform transition-transform duration-300 hover:translate-x-[5px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientExperiencesSlider;