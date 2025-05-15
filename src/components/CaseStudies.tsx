import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import ClientExperiencesSlider from './ClientExperiencesSlider';
import RotatingMessage from './RotatingMessage';
import { COMPANY_NAME } from '../constants/company';

const features = [
  "AI-powered process optimization",
  "Scalable and resilient digital solutions",
  "Custom SaaS implementations",
  "End-to-end digital transformation"
];

const CaseStudies = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <>
      <section id="case-studies" className="py-32 tech-pattern">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-5xl font-bold mb-8 leading-tight hero-glow">
                Revolutionize<br />Your Business
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-xl leading-relaxed glass-card p-6 rounded-xl">
                Experience the power of {COMPANY_NAME}'s innovative solutions. We help businesses of all sizes 
                leverage cutting-edge technology to streamline operations, boost efficiency, and stay ahead in 
                the digital landscape.
              </p>
              <a href="#contact" className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 btn-glow">
                Start your transformation
                <ArrowRight size={20} className="ml-2" />
              </a>
              <div className="mt-16">
                <RotatingMessage textColor="text-cyan-400" />
                <ul className="space-y-4 mt-8 glass-card p-6 rounded-xl">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300 text-sm">
                      <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="glass-card rounded-xl overflow-hidden shadow-lg">
                <div className="relative aspect-video">
                  {isPlaying ? (
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      controls
                      src="/demo.mp4"
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <>
                      <img 
                        src="/thumbnail.png" 
                        alt="Demo Video Thumbnail" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button 
                          onClick={() => setIsPlaying(true)}
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-4 shadow-lg btn-glow cursor-pointer hover:scale-110 transition-transform duration-200"
                        >
                          <Play size={32} className="text-white" />
                        </button>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 hero-glow">Solution Demo</h3>
                  <p className="text-gray-400 text-sm">Watch how our solutions can transform your business processes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ClientExperiencesSlider />
    </>
  );
};

export default CaseStudies;
