import React from 'react';
import { Code } from 'lucide-react';
import { COMPANY_NAME } from '../constants/company';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-8 md:mb-0">
            <Code size={32} className="text-blue-400" />
            <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white">{COMPANY_NAME}</span>
          </div>
          <nav className="mb-8 md:mb-0">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-8">
              <li><a href="#services" className="hover:text-blue-400 transition duration-300">Services</a></li>
              <li><a href="#case-studies" className="hover:text-blue-400 transition duration-300">Case Studies</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="mt-16 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;