"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Props untuk menerima tanggal dari database
interface VintageCountdownProps {
  targetDate: Date;
}

export default function VintageCountdown({ targetDate }: VintageCountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Base64 Noise Pattern (Konsisten)
  const noisePattern = `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEHb29v///8AAABOmZnDw8O+vr6urq6hoaG7j36HAAAACHRSTlMAM8T/mZkzM4Vj3DIAAAArSURBVDjLY2AYBaNgFIyCUTAKRsEoGAWjYBSMglEwCkbBKBgFo2AUjIIhAQA9bATXt91HzAAAAABJRU5ErkJggg==")`;

  useEffect(() => {
    const targetTime = targetDate.getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetTime - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // Komponen Angka (Updated Design: Vintage Calendar Block)
  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <div className="relative w-[70px] h-[80px] md:w-[90px] md:h-[100px] bg-[#F2E8D5] border-2 border-vintage-brown/20 shadow-[0_4px_10px_rgba(92,64,51,0.15)] flex flex-col items-center justify-center mb-2 group hover:-translate-y-1 transition-transform duration-300 rounded-sm overflow-hidden">
        
        {/* Texture Kertas */}
        <div className="absolute inset-0 opacity-30 mix-blend-multiply pointer-events-none" style={{ backgroundImage: noisePattern }} />
        
        {/* Lubang Gantungan (Hole Punch) */}
        <div className="absolute top-2 w-3 h-3 rounded-full bg-vintage-cream border border-vintage-brown/20 shadow-inner" />

        {/* Garis Dekoratif */}
        <div className="absolute top-8 w-full h-[1px] bg-vintage-brown/10" />

        <span className="font-serif text-3xl md:text-5xl text-vintage-brown font-bold z-10 mt-2">
          {value < 10 ? `0${value}` : value}
        </span>
      </div>
      <span className="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase text-vintage-olive font-bold">
        {label}
      </span>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-wrap justify-center items-center py-8 w-full max-w-4xl mx-auto"
    >
      <TimeUnit value={timeLeft.days} label="Hari" />
      
      <div className="hidden md:flex flex-col gap-1 mx-2 opacity-40">
         <div className="w-1 h-1 bg-vintage-brown rounded-full" />
         <div className="w-1 h-1 bg-vintage-brown rounded-full" />
      </div>

      <TimeUnit value={timeLeft.hours} label="Jam" />
      
      <div className="hidden md:flex flex-col gap-1 mx-2 opacity-40">
         <div className="w-1 h-1 bg-vintage-brown rounded-full" />
         <div className="w-1 h-1 bg-vintage-brown rounded-full" />
      </div>

      <TimeUnit value={timeLeft.minutes} label="Menit" />
      
      <div className="hidden md:flex flex-col gap-1 mx-2 opacity-40">
         <div className="w-1 h-1 bg-vintage-brown rounded-full" />
         <div className="w-1 h-1 bg-vintage-brown rounded-full" />
      </div>

      <TimeUnit value={timeLeft.seconds} label="Detik" />
    </motion.div>
  );
}