import React, { useEffect, useRef } from 'react';

const VideoBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to calculate dimensions
    const setDimensions = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.offsetWidth;
      const height = containerRef.current.offsetHeight;
      const iframe = containerRef.current.querySelector('iframe');
      if (iframe) {
        // Calculate dimensions to maintain aspect ratio and cover the container
        const aspectRatio = 16 / 9;
        let newWidth = width;
        let newHeight = width / aspectRatio;
        
        if (newHeight < height) {
          newHeight = height;
          newWidth = height * aspectRatio;
        }
        
        iframe.style.width = `${newWidth}px`;
        iframe.style.height = `${newHeight}px`;
        iframe.style.left = `${(width - newWidth) / 2}px`;
        iframe.style.top = `${(height - newHeight) / 2}px`;
      }
    };

    // Set dimensions initially and on resize
    setDimensions();
    window.addEventListener('resize', setDimensions);
    return () => window.removeEventListener('resize', setDimensions);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden">
      <iframe
        src="https://www.youtube.com/embed/H2qBL8yGOJs?autoplay=1&loop=1&mute=1&controls=0&showinfo=0&rel=0&playlist=H2qBL8yGOJs&vq=hd1080"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="absolute"
        style={{
          border: 'none',
          pointerEvents: 'none',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)',
          backdropFilter: 'blur(2px)',
        }}
      ></div>
    </div>
  );
};

export default VideoBackground;
