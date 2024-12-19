import React from 'react';

const VideoBackground = () => {
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
          src="https://www.youtube.com/embed/H2qBL8yGOJs?autoplay=1&loop=1&mute=1"
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
