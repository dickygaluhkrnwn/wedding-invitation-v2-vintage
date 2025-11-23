"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { InvitationData } from '@/lib/invitation';

interface OpeningEnvelopeProps {
  onOpen: () => void;
  couple: InvitationData['couple'];
  date: Date;
}

export default function OpeningEnvelope({ onOpen, couple, date }: OpeningEnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Format Tanggal: 24 Aug 2025
  const dateString = date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  const handleOpen = () => {
    setIsOpen(true);
    // Delay animasi agar transisi kartu keluar terlihat smooth
    setTimeout(() => {
      onOpen();
    }, 2500);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100, transition: { duration: 1, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-vintage-cream overflow-hidden h-[100dvh]"
    >
      {/* Overlay Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-60 bg-paper-texture mix-blend-multiply z-0" />

      {/* --- CONTAINER AMPLOP UTAMA --- */}
      <div className="relative w-[90vw] max-w-[500px] aspect-[1.4/1] perspective-1000 z-10">
        
        {/* 1. KARTU UNDANGAN (ISI) - Layer Paling Belakang */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 bottom-2 w-[90%] h-[90%] bg-[#fdfbf7] shadow-sm border border-vintage-gold/20 flex flex-col items-center justify-start pt-10 text-center overflow-hidden"
          initial={{ y: 0 }}
          // Animasi kartu naik ke atas saat dibuka
          animate={isOpen ? { y: -180, zIndex: 20 } : { y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
        >
            <div className="absolute inset-0 opacity-40 bg-paper-texture mix-blend-multiply" />
            
            {/* Konten Kartu */}
            <div className="relative z-10 px-4 space-y-3 flex flex-col items-center w-full">
                <p className="font-serif text-[10px] md:text-xs tracking-[0.3em] text-vintage-olive uppercase">The Wedding Of</p>
                <div className="font-script text-4xl md:text-6xl text-vintage-brown leading-none py-2">
                    {couple.groomNickname} <br/> 
                    <span className="text-2xl font-serif text-vintage-gold">&</span> <br/> 
                    {couple.brideNickname}
                </div>
                <div className="w-8 h-[1px] bg-vintage-gold/50 my-2" />
                <p className="font-sans text-[10px] md:text-xs text-vintage-brown uppercase tracking-widest font-bold">
                    {dateString}
                </p>
            </div>
        </motion.div>

        {/* 2. AMPLOP BELAKANG */}
        <div className="absolute inset-0 bg-[#dcd0b8] rounded-b-lg shadow-2xl border border-vintage-brown/10 z-10 overflow-hidden">
             <div className="absolute inset-0 opacity-30 bg-paper-texture mix-blend-multiply" />
        </div>

        {/* 3. AMPLOP DEPAN (POCKET) */}
        <div 
            className="absolute bottom-0 left-0 right-0 h-[60%] bg-[#e6dac3] z-30 rounded-b-lg shadow-lg border-t border-white/10"
            style={{ clipPath: "polygon(0 0, 50% 15%, 100% 0, 100% 100%, 0 100%)" }}
        >
            <div className="absolute inset-0 opacity-30 bg-paper-texture mix-blend-multiply" />
            <div className="absolute top-0 w-full h-6 bg-gradient-to-b from-black/10 to-transparent opacity-30" />
        </div>

        {/* 4. TUTUP AMPLOP (FLAP) */}
        <motion.div
            className="absolute top-0 left-0 right-0 h-[50%] origin-top z-40"
            initial={{ rotateX: 0 }}
            animate={isOpen ? { rotateX: 180, zIndex: 1 } : { rotateX: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ transformStyle: 'preserve-3d' }}
        >
            {/* Sisi Luar (Warna Terang) */}
            <div 
                className="absolute inset-0 bg-[#efe5d1] backface-hidden shadow-md border-b border-vintage-brown/5"
                style={{ clipPath: "polygon(0 0, 50% 100%, 100% 0)" }}
            >
                 <div className="absolute inset-0 opacity-30 bg-paper-texture mix-blend-multiply" />
            </div>

            {/* Sisi Dalam (Warna Gelap) */}
            <div 
                className="absolute inset-0 bg-[#dcd0b8] backface-visible"
                style={{ 
                    transform: "rotateX(180deg)", 
                    clipPath: "polygon(0 0, 50% 100%, 100% 0)" 
                }}
            >
                 <div className="absolute inset-0 opacity-30 bg-paper-texture mix-blend-multiply" />
                 <div className="absolute top-0 w-full h-full bg-gradient-to-b from-black/5 to-transparent" />
            </div>
        </motion.div>

        {/* --- 5. TOMBOL SEGEL (WAX SEAL) --- */}
        {/* DIKELUARKAN DARI FLAP AGAR POSISI STABIL DI TENGAH */}
        {/* top-[50%] menempatkan tombol tepat di ujung segitiga flap (karena flap h-50%) */}
        <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            <motion.button
                onClick={handleOpen}
                disabled={isOpen}
                // Animasi menghilang saat diklik
                animate={isOpen ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative group cursor-pointer outline-none flex flex-col items-center justify-center"
            >
                {/* Visual Wax Seal */}
                <div className="w-24 h-24 md:w-28 md:h-28 relative drop-shadow-2xl filter contrast-125 hover:scale-105 transition-transform duration-300">
                    <Image 
                        src="/images/vintage/wax-seal.png" 
                        alt="Open Invitation" 
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                
                {/* Efek Pulse */}
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-vintage-gold/30 rounded-full animate-ping -z-10 pointer-events-none" />
                
                {/* Label Teks */}
                <div className="absolute top-[85%] mt-3 pointer-events-none">
                    <span className="text-[9px] font-serif tracking-[0.2em] text-vintage-brown uppercase bg-vintage-cream/95 backdrop-blur-sm px-4 py-1.5 rounded-full border border-vintage-brown/20 shadow-sm whitespace-nowrap">
                        Buka Undangan
                    </span>
                </div>
            </motion.button>
        </div>

      </div>
    </motion.div>
  );
}