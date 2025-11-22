"use client";

import React, { useEffect, useRef } from 'react';

interface BackgroundMusicProps {
  isPlaying: boolean;
}

export default function BackgroundMusic({ isPlaying }: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.volume = 0; // Mulai dari 0
        audioRef.current.play().catch((e) => console.log("Autoplay blocked", e));
        
        // Fade In Effect
        let vol = 0;
        const fadeInterval = setInterval(() => {
          if (vol < 0.5) {
            vol += 0.05;
            if (audioRef.current) audioRef.current.volume = vol;
          } else {
            clearInterval(fadeInterval);
          }
        }, 200);
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <audio 
      ref={audioRef} 
      loop 
      // Placeholder lagu: Beautiful classical piano
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
    />
  );
}