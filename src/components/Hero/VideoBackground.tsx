import React, { useRef } from 'react';

const VideoBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div
      ref={containerRef}
      className="absolute z-0 overflow-hidden"
      style={{
        top: '120px',  // More space for the header
        bottom: '120px', // More space at the bottom
        left: 0,
        right: 0,
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full"
        style={{
          transform: 'scale(1.1)',
          transformOrigin: 'center center',
          objectFit: 'cover',
        }}
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to bottom,
              rgba(0,0,0,1) 0%,
              rgba(0,0,0,0.7) 10%,
              rgba(0,0,0,0.4) 50%,
              rgba(0,0,0,0.7) 90%,
              rgba(0,0,0,1) 100%
            )`,
          backdropFilter: 'blur(0px)',
        }}
      ></div>
    </div>
  );
};

export default VideoBackground;
