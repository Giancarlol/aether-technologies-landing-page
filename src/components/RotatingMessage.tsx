import React, { useState, useEffect } from 'react';

const messages = [
  "Innovate with AI",
  "Scale your processes",
  "Digitalize your business",
  "Transform ideas into products",
  "Implement custom SaaS solutions"
];

interface RotatingMessageProps {
  textColor?: string;
}

const RotatingMessage: React.FC<RotatingMessageProps> = ({ textColor = "text-white" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-16">
      <div className="relative">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-1000 ease-in-out ${
              index === currentIndex
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform -translate-y-4'
            }`}
          >
            <h3 className={`text-2xl font-semibold ${textColor}`}>{message}</h3>
            <div className="w-16 h-1 bg-blue-600 mt-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RotatingMessage;