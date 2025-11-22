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

  useEffect(() => {
    // Menggunakan tanggal dari props, bukan hardcoded lagi
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

  // Komponen Angka
  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-2 md:mx-6">
      <div className="relative p-4 md:p-6 border border-vintage-brown/30 bg-vintage-cream/50 shadow-sm min-w-[70px] md:min-w-[90px] flex items-center justify-center">
        {/* Hiasan Sudut Kecil */}
        <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-vintage-gold" />
        <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-vintage-gold" />
        
        <span className="font-serif text-2xl md:text-4xl text-vintage-brown font-bold">
          {value < 10 ? `0${value}` : value}
        </span>
      </div>
      <span className="mt-3 font-serif text-[10px] md:text-xs tracking-[0.2em] uppercase text-vintage-olive">
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
      className="flex flex-wrap justify-center py-8 border-y border-vintage-gold/20 w-full max-w-4xl mx-auto"
    >
      <TimeUnit value={timeLeft.days} label="Hari" />
      <div className="h-12 w-[1px] bg-vintage-brown/20 self-center hidden md:block" />
      <TimeUnit value={timeLeft.hours} label="Jam" />
      <div className="h-12 w-[1px] bg-vintage-brown/20 self-center hidden md:block" />
      <TimeUnit value={timeLeft.minutes} label="Menit" />
      <div className="h-12 w-[1px] bg-vintage-brown/20 self-center hidden md:block" />
      <TimeUnit value={timeLeft.seconds} label="Detik" />
    </motion.div>
  );
}