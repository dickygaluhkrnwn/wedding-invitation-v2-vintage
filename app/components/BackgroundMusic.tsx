"use client";

import React, { useEffect, useRef } from 'react';

interface BackgroundMusicProps {
  isPlaying: boolean;
  audioUrl?: string; // Menambahkan prop opsional untuk URL audio dinamis
}

export default function BackgroundMusic({ isPlaying, audioUrl }: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Gunakan URL dari props jika ada, jika tidak gunakan default
  const defaultSong = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
  const source = audioUrl || defaultSong;

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.volume = 0; // Mulai dari 0
        
        // Menangani promise play() untuk menghindari error uncaught di console
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise.catch((e) => {
            console.log("Autoplay blocked by browser policy", e);
          });
        }
        
        // Fade In Effect
        let vol = 0;
        const fadeInterval = setInterval(() => {
          if (vol < 0.5) { // Batasi volume max agar tidak terlalu keras
            vol += 0.05;
            // Pastikan tidak melebihi 1.0 dan fixed desimal
            if (audioRef.current) audioRef.current.volume = Math.min(parseFloat(vol.toFixed(2)), 1.0);
          } else {
            clearInterval(fadeInterval);
          }
        }, 200);
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]); // Re-run jika isPlaying berubah

  return (
    <audio 
      ref={audioRef} 
      loop 
      src={source} 
    />
  );
}