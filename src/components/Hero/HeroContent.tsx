import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COMPANY_NAME, COMPANY_DESCRIPTION } from '../../constants/company';
import HeroButtons from './HeroButtons';

const HeroContent = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-light mb-6 tracking-wider text-cyan-400 hero-glow uppercase">
        Transforming Ideas Into Digital Solutions
      </h2>
      <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-none tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
        Innovate, Scale,<br />
        and Digitalize
      </h1>
      <p className="text-xl mb-12 text-gray-300 max-w-3xl leading-relaxed backdrop-blur-sm bg-black/20 p-6 rounded-lg">
        {COMPANY_NAME} {COMPANY_DESCRIPTION}
      </p>
      <HeroButtons />
      <h3 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
        <span className="text-gradient-animated">{COMPANY_NAME}</span>
      </h3>
    </div>
  );
};

export default HeroContent;