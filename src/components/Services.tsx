import React from 'react';
import { Code, Cpu, BarChart, Globe, Lightbulb, Cloud } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code size={24} />,
      title: 'Custom Software Development',
      description: "We create tailored web and mobile applications that address your unique business challenges and opportunities."
    },
    {
      icon: <Cpu size={24} />,
      title: 'AI & Algorithm Implementation',
      description: "Our team develops and integrates AI solutions and advanced algorithms to optimize your business processes."
    },
    {
      icon: <BarChart size={24} />,
      title: 'Process Scaling & Optimization',
      description: "We design and implement scalable, resilient systems that grow with your business and maintain peak performance."
    },
    {
      icon: <Globe size={24} />,
      title: 'Digital Transformation',
      description: "We guide and support your business through comprehensive digitalization, enhancing efficiency and competitiveness."
    },
    {
      icon: <Cloud size={24} />,
      title: 'SaaS Solutions',
      description: "Develop cloud-based software solutions that can be easily implemented across various businesses and industries."
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Idea to Product Realization',
      description: "We transform your innovative ideas into market-ready products, handling everything from concept to launch."
    }
  ];

  return (
    <section id="services" className="relative py-32 tech-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-center hero-glow">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="glass-card rounded-xl p-8 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="text-cyan-400 mr-3 floating-element">{service.icon}</div>
                <h3 className="text-xl font-semibold hero-glow">{service.title}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;