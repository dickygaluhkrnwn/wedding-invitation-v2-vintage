"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Import Image Next.js

interface OpeningEnvelopeProps {
  onOpen: () => void;
}

export default function OpeningEnvelope({ onOpen }: OpeningEnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      onOpen();
    }, 2000); 
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, delay: 0.5 } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-vintage-cream overflow-hidden perspective-1000"
    >
      <div className="relative w-[90vw] max-w-md aspect-[4/3] md:aspect-[16/9] flex items-end justify-center">
        
        {/* 1. ISI SURAT */}
        <motion.div
          className="absolute bottom-0 w-[90%] h-[85%] bg-[#f7f5f0] shadow-md border border-vintage-brown/10 p-6 text-center flex flex-col items-center justify-start pt-8 z-15"
          initial={{ y: 0 }}
          animate={isOpen ? { y: -180, zIndex: 25 } : { y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
        >
          <p className="font-serif text-[10px] md:text-xs tracking-[0.3em] text-vintage-olive uppercase mb-3">The Wedding Of</p>
          <h1 className="font-script text-3xl md:text-5xl text-vintage-brown mb-2">Rizky & Lesti</h1>
          <div className="w-12 h-[1px] bg-vintage-gold my-3" />
          <p className="font-serif text-xs md:text-sm text-vintage-brown">24 . 08 . 2025</p>
        </motion.div>

        {/* 2. AMPLOP BELAKANG */}
        <div className="absolute inset-0 bg-[#e6dfcc] border border-vintage-brown/30 rounded-b-xl shadow-2xl z-10" />

        {/* 3. AMPLOP DEPAN (Pocket) */}
        <div 
            className="absolute bottom-0 left-0 right-0 h-[60%] bg-[#f0eadd] border-t border-vintage-brown/20 z-20 rounded-b-xl"
            style={{ clipPath: "polygon(0 0, 50% 85%, 100% 0, 100% 100%, 0 100%)" }} 
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
        </div>

        {/* 4. TUTUP AMPLOP (Rotating Flap) */}
        <motion.div
            className="absolute top-0 left-0 right-0 h-[60%] origin-top z-30"
            initial={{ rotateX: 0 }}
            animate={isOpen ? { rotateX: 180, zIndex: 1 } : { rotateX: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ transformStyle: 'preserve-3d' }}
        >
            {/* Kertas Tutup */}
            <div 
                className="absolute inset-0 bg-[#eaddcf] border-b border-vintage-brown/20 shadow-sm backface-hidden"
                style={{ clipPath: "polygon(0 0, 50% 85%, 100% 0)" }}
            />

            {/* B. REAL WAX SEAL IMAGE */}
            <div className="absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-40">
                {!isOpen && (
                    <motion.button
                        onClick={handleOpen}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative group cursor-pointer flex flex-col items-center"
                    >
                        {/* Gambar Segel Lilin */}
                        <div className="w-20 h-20 md:w-24 md:h-24 relative drop-shadow-xl">
                            <Image 
                                src="/images/vintage/wax-seal.png" 
                                alt="Open Invitation" 
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Label Buka */}
                        <div className="mt-2">
                            <span className="bg-vintage-cream/90 px-4 py-1 text-[10px] font-serif uppercase tracking-widest border border-vintage-brown/50 rounded-full text-vintage-brown shadow-sm group-hover:bg-vintage-brown group-hover:text-vintage-cream transition-colors">
                                Buka Undangan
                            </span>
                        </div>
                    </motion.button>
                )}
            </div>
        </motion.div>

      </div>
      
      {!isOpen && (
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 md:bottom-12 font-serif text-[10px] tracking-[0.3em] text-vintage-olive animate-pulse"
        >
            KETUK SEGEL UNTUK MEMBUKA
        </motion.p>
      )}

    </motion.div>
  );
}