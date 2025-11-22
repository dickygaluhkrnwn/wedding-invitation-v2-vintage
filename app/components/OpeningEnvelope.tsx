"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface OpeningEnvelopeProps {
  onOpen: () => void;
}

export default function OpeningEnvelope({ onOpen }: OpeningEnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      onOpen();
    }, 2200);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, delay: 0.5 } }}
      // FIX 1: Menggunakan h-[100dvh] agar pas di layar HP dengan address bar
      // z-[100] agar di atas segalanya
      className="fixed inset-0 z-[100] flex items-center justify-center bg-vintage-cream overflow-hidden"
      style={{ height: '100dvh' }} 
    >
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[url('/images/vintage/paper-texture.png')] mix-blend-multiply" />

      {/* CONTAINER AMPLOP UTAMA 
         - FIX 2: w-[90vw] untuk mobile, max-w-[600px] untuk desktop.
         - mx-auto: Memastikan container di tengah horizontal.
         - aspect-[1.6/1]: Menjaga bentuk amplop tetap persegi panjang ideal (C6 size).
      */}
      <div className="relative w-[90vw] max-w-[600px] aspect-[1.6/1] flex items-end justify-center perspective-1000 mx-auto">
        
        {/* --- 1. ISI SURAT (Invitation Card) --- */}
        <motion.div
          // FIX 3: left-1/2 -translate-x-1/2 ADALAH KUNCI AGAR TIDAK CONDONG KIRI
          className="absolute w-[92%] h-[90%] bg-[#f9f7f2] shadow-md border border-vintage-brown/20 p-4 md:p-8 text-center flex flex-col items-center justify-start pt-6 md:pt-10 z-10 left-1/2 top-auto bottom-0"
          initial={{ y: 0, x: "-50%" }} // Posisi awal di dalam
          animate={isOpen ? { y: "-60%", x: "-50%", zIndex: 5 } : { y: 0, x: "-50%" }} // Posisi akhir naik ke atas
          transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
        >
            <div className="absolute inset-0 opacity-30 bg-[url('/images/vintage/paper-texture.png')] bg-cover pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center w-full h-full">
                <p className="font-serif text-[8px] md:text-xs tracking-[0.3em] text-vintage-olive uppercase mb-2">The Wedding Of</p>
                
                <div className="relative py-1">
                    <h1 className="font-script text-4xl md:text-7xl text-vintage-brown whitespace-nowrap leading-none">
                        Rizky & Lesti
                    </h1>
                </div>

                <div className="flex items-center justify-center gap-3 opacity-70 w-full mt-2 md:mt-4">
                    <div className="w-6 md:w-12 h-[1px] bg-vintage-gold" />
                    <p className="font-serif text-[8px] md:text-sm text-vintage-brown tracking-widest font-bold">
                        24 . 08 . 2025
                    </p>
                    <div className="w-6 md:w-12 h-[1px] bg-vintage-gold" />
                </div>
            </div>
        </motion.div>

        {/* --- 2. AMPLOP BELAKANG --- */}
        <div className="absolute inset-0 bg-[#dcd6c6] rounded-b-xl shadow-2xl border border-vintage-brown/30 z-20 overflow-hidden">
             <div className="absolute inset-0 opacity-20 bg-[url('/images/vintage/paper-texture.png')] mix-blend-multiply" />
        </div>

        {/* --- 3. AMPLOP DEPAN (Pocket) --- */}
        <div 
            className="absolute bottom-0 left-0 right-0 h-[55%] bg-[#e6dfcc] z-30 rounded-b-xl border-t border-white/20 shadow-lg"
            style={{ clipPath: "polygon(0 0, 50% 25%, 100% 0, 100% 100%, 0 100%)" }} 
        >
            <div className="absolute inset-0 opacity-30 bg-[url('/images/vintage/paper-texture.png')] mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-50" />
        </div>

        {/* --- 4. TUTUP AMPLOP (Flap) --- */}
        <motion.div
            className="absolute top-0 left-0 right-0 h-[55%] origin-top z-40"
            initial={{ rotateX: 0 }}
            animate={isOpen ? { rotateX: 180, zIndex: 1 } : { rotateX: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ transformStyle: 'preserve-3d' }}
        >
            {/* Sisi Luar */}
            <div 
                className="absolute inset-0 bg-[#efe8dc] backface-hidden border-b border-vintage-brown/10 shadow-md"
                style={{ clipPath: "polygon(0 0, 50% 25%, 100% 0)" }}
            >
                 <div className="absolute inset-0 opacity-30 bg-[url('/images/vintage/paper-texture.png')] mix-blend-multiply" />
            </div>

            {/* Sisi Dalam */}
            <div 
                className="absolute inset-0 bg-[#dcd6c6] backface-visible"
                style={{ 
                    transform: "rotateX(180deg)", 
                    clipPath: "polygon(0 0, 50% 25%, 100% 0)" 
                }}
            >
                 <div className="absolute inset-0 opacity-30 bg-[url('/images/vintage/paper-texture.png')] mix-blend-multiply" />
                 <div className="absolute top-0 w-full h-6 bg-gradient-to-b from-black/10 to-transparent" />
            </div>

            {/* --- 5. TOMBOL SEGEL (WAX SEAL) --- */}
            <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 backface-hidden">
                {!isOpen && (
                    <motion.button
                        onClick={handleOpen}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex flex-col items-center justify-center cursor-pointer relative w-32 h-32"
                    >
                        <div className="w-20 h-20 md:w-28 md:h-28 relative drop-shadow-xl filter brightness-105 hover:brightness-110 transition-all">
                            <Image 
                                src="/images/vintage/wax-seal.png" 
                                alt="Buka Undangan" 
                                fill
                                className="object-contain"
                            />
                        </div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                            className="absolute top-[80%] mt-1 bg-vintage-cream/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-vintage-brown/40 shadow-lg whitespace-nowrap"
                        >
                            <span className="text-[9px] font-serif uppercase tracking-[0.2em] text-vintage-brown font-bold">
                                Buka Undangan
                            </span>
                        </motion.div>
                    </motion.button>
                )}
            </div>
        </motion.div>

      </div>
    </motion.div>
  );
}