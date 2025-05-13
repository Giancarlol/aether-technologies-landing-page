import React from 'react';

const VideoBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
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
