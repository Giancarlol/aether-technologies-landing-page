import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    YT: {
      Player: new (
        elementId: string,
        config: {
          videoId: string;
          playerVars?: Record<string, any>;
          events?: {
            onReady?: (event: { target: any }) => void;
            onStateChange?: (event: { target: any; data: number }) => void;
          };
        }
      ) => void;
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

const VideoBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // Load YouTube IFrame Player API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Initialize player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      if (!containerRef.current) return;

      const player = new window.YT.Player('youtube-player', {
        videoId: 'H2qBL8yGOJs',
        playerVars: {
          autoplay: 1,
          loop: 1,
          controls: 0,
          showinfo: 0,
          rel: 0,
          enablejsapi: 1,
          modestbranding: 1,
          iv_load_policy: 3,
          playsinline: 1,
          mute: 1,
          origin: window.location.origin,
          playlist: 'H2qBL8yGOJs',
        },
        events: {
          onReady: (event) => {
            event.target.setPlaybackQuality('hd1080');
            event.target.playVideo();
          },
          onStateChange: (event) => {
            // Force HD quality whenever the state changes
            event.target.setPlaybackQuality('hd1080');
          }
        }
      });

      playerRef.current = player;
    };

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

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
      <div 
        id="youtube-player"
        className="absolute w-full h-full"
        style={{
          transform: 'scale(1.5)',
          transformOrigin: 'center center',
        }}
      />
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
          backdropFilter: 'blur(2px)',
        }}
      ></div>
    </div>
  );
};

export default VideoBackground;
