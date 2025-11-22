"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import OpeningEnvelope from './components/OpeningEnvelope';
import BackgroundMusic from './components/BackgroundMusic'; 
import TheIntro from './components/TheIntro'; 
import TheCouple from './components/TheCouple'; 
import TheEvent from './components/TheEvent'; 
import TheGallery from './components/TheGallery'; 
import TheRSVP from './components/TheRSVP'; // Import Baru
import TheGift from './components/TheGift'; // Import Baru

export default function Home() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false); 

  const handleOpenInvitation = () => {
    setIsEnvelopeOpen(true);
    setIsMusicPlaying(true); 
  };

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-vintage-cream text-vintage-brown relative">
      
      <BackgroundMusic isPlaying={isMusicPlaying} />

      <AnimatePresence>
        {!isEnvelopeOpen && (
          <OpeningEnvelope onOpen={handleOpenInvitation} />
        )}
      </AnimatePresence>

      {isEnvelopeOpen && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }} 
            className="relative min-h-screen flex flex-col items-center"
        >
            {/* Bingkai Garis Tipis Global */}
            <div className="fixed inset-3 md:inset-6 border border-vintage-gold/30 pointer-events-none z-50 mix-blend-multiply opacity-70">
                <div className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24 -translate-x-1/3 -translate-y-1/3">
                    <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain" />
                </div>
                <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 translate-x-1/3 -translate-y-1/3">
                    <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain rotate-90" />
                </div>
                <div className="absolute bottom-0 left-0 w-16 h-16 md:w-24 md:h-24 -translate-x-1/3 translate-y-1/3">
                    <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain -rotate-90" />
                </div>
                <div className="absolute bottom-0 right-0 w-16 h-16 md:w-24 md:h-24 translate-x-1/3 translate-y-1/3">
                    <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain rotate-180" />
                </div>
            </div>

            {/* HERO SECTION */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center p-8 text-center relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                    <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-[1px] border-vintage-brown animate-spin-slow" />
                </div>

                <div className="space-y-8 relative z-10 mt-10">
                    <p className="font-serif tracking-[0.4em] text-xs md:text-sm text-vintage-olive uppercase">The Wedding Of</p>
                    <div className="py-4 relative">
                        <h1 className="font-script text-6xl md:text-9xl text-vintage-brown drop-shadow-sm">
                            Rizky & Lesti
                        </h1>
                    </div>
                    <div className="flex items-center justify-center gap-6 text-vintage-gold opacity-80">
                        <div className="h-[1px] w-16 bg-vintage-gold"></div>
                        <p className="font-serif text-lg md:text-xl tracking-[0.2em]">24 . 08 . 2025</p>
                        <div className="h-[1px] w-16 bg-vintage-gold"></div>
                    </div>
                </div>
                
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                    className="absolute bottom-12 text-vintage-olive text-[10px] tracking-[0.3em] uppercase"
                >
                    Scroll Down
                </motion.div>
            </section>

            <TheIntro />
            <TheCouple />
            <TheEvent />
            <TheGallery />
            
            {/* --- FASE 6: RSVP & GIFT (Baru) --- */}
            <TheRSVP />
            <TheGift />

            {/* Footer */}
            <footer className="py-8 text-center text-[10px] text-vintage-olive uppercase tracking-widest opacity-50 pb-20">
                © 2025 Rizky & Lesti Wedding. All Rights Reserved.
            </footer>

        </motion.div>
      )}

    </main>
  );
}