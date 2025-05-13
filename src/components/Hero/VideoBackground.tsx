import React from 'react';

const VideoBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source
          src="/background-video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
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
