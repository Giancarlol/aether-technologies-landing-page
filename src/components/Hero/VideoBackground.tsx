import React, { useEffect, useRef } from 'react';

interface YouTubePlayer {
  destroy: () => void;
  playVideo: () => void;
  setPlaybackQuality: (quality: string) => void;
}

interface YouTubeEvent {
  target: YouTubePlayer;
  data: number;
}

declare global {
  interface YouTubeIframeAPI {
    Player: new (
      element: HTMLElement | null,
      options: {
        videoId: string;
        playerVars: Record<string, any>;
        events: {
          onReady: (event: YouTubeEvent) => void;
          onStateChange: (event: YouTubeEvent) => void;
        };
      }
    ) => YouTubePlayer;
    PlayerState: {
      ENDED: number;
    };
  }

  interface Window {
    YT: YouTubeIframeAPI;
    onYouTubeIframeAPIReady: () => void;
  }
}

const VideoBackground: React.FC = () => {
  const playerRef = useRef<YouTubePlayer | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load YouTube IFrame Player API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Initialize player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player(containerRef.current, {
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
          playlist: 'H2qBL8yGOJs',
          quality: 'hd1080'
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
            event.target.setPlaybackQuality('hd1080');
          },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.playVideo();
            }
          }
        }
      });
    };

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <div 
        ref={containerRef}
        className="w-full h-full"
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
