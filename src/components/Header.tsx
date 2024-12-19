import React from 'react';
import { Code } from 'lucide-react';
import { COMPANY_NAME } from '../constants/company';

const Header = () => {
  return (
    <header className="fixed w-full z-10 bg-black bg-opacity-50 backdrop-blur-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Code size={24} className="text-white" />
          <span className="text-xl font-bold text-white">{COMPANY_NAME}</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#services" className="text-white hover:text-gray-300 transition duration-300">Services</a></li>
            <li><a href="#case-studies" className="text-white hover:text-gray-300 transition duration-300">Case Studies</a></li>
            <li><a href="#contact" className="text-white hover:text-gray-300 transition duration-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;