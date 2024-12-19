import React from 'react';
import { Code, Zap, Shield, Rocket } from 'lucide-react';

const approaches = [
  {
    icon: <Code size={24} />,
    title: "Cutting-edge Tech",
    description: "We leverage the latest technologies to build robust, scalable solutions."
  },
  {
    icon: <Zap size={24} />,
    title: "Agile Methodology",
    description: "Our iterative approach ensures rapid development and improvement."
  },
  {
    icon: <Shield size={24} />,
    title: "Security-First",
    description: "We prioritize data protection with industry-leading security measures."
  },
  {
    icon: <Rocket size={24} />,
    title: "Scalable Architecture",
    description: "Our solutions are built to grow with your business effortlessly."
  }
];

const OurApproach = () => {
  return (
    <section className="py-32 bg-white text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">Our Approach</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {approaches.map((approach, index) => (
            <div key={index} className="border-t border-gray-200 pt-8">
              <div className="flex items-center mb-4">
                <div className="text-blue-600 mr-3">{approach.icon}</div>
                <h3 className="text-lg font-semibold">{approach.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{approach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;