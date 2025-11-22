"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import OpeningEnvelope from '../components/OpeningEnvelope';
import BackgroundMusic from '../components/BackgroundMusic'; 
import TheIntro from '../components/TheIntro'; 
import TheCouple from '../components/TheCouple'; 
import TheEvent from '../components/TheEvent'; 
import TheGallery from '../components/TheGallery'; 
import TheRSVP from '../components/TheRSVP';
import TheGift from '../components/TheGift';
import { InvitationData } from '@/lib/invitation';

interface InvitationClientProps {
  data: InvitationData;
}

export default function InvitationClient({ data }: InvitationClientProps) {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false); 

  const handleOpenInvitation = () => {
    setIsEnvelopeOpen(true);
    setIsMusicPlaying(true); 
  };

  // --- LOGIC FORMAT DATA ---
  const weddingDate = new Date(data.event.date.seconds * 1000);
  const weddingDateString = weddingDate.toLocaleDateString('id-ID', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).replace(/\//g, ' . '); 

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-vintage-cream text-vintage-brown relative">
      
      <BackgroundMusic isPlaying={isMusicPlaying} />

      <AnimatePresence mode="wait">
        {!isEnvelopeOpen && (
          <OpeningEnvelope 
            onOpen={handleOpenInvitation} 
            couple={data.couple} 
            date={weddingDate}
          />
        )}
      </AnimatePresence>

      {isEnvelopeOpen && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }} 
            className="relative w-full flex flex-col items-center"
        >
            {/* --- GLOBAL BORDER ORNAMENTS (FIXED) --- */}
            <div className="fixed inset-0 pointer-events-none z-50">
                {/* Frame Garis Tipis */}
                <div className="absolute inset-4 md:inset-6 border border-vintage-gold/40 mix-blend-multiply opacity-60 rounded-[2px]" />
                
                {/* Bunga Sudut Kiri Atas */}
                <motion.div 
                    initial={{ opacity: 0, x: -20, y: -20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="absolute top-0 left-0 w-24 h-24 md:w-40 md:h-40 -translate-x-1/4 -translate-y-1/4"
                >
                    <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain opacity-90" />
                </motion.div>

                {/* Bunga Sudut Kanan Bawah */}
                <motion.div 
                    initial={{ opacity: 0, x: 20, y: 20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="absolute bottom-0 right-0 w-24 h-24 md:w-40 md:h-40 translate-x-1/4 translate-y-1/4"
                >
                    <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain rotate-180 opacity-90" />
                </motion.div>
            </div>

            {/* --- HERO SECTION MEGAH --- */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                
                {/* Background Ornament (Spinning Circle Halus) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                    <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full border-[2px] border-vintage-brown animate-[spin_20s_linear_infinite]" />
                    <div className="absolute w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full border-[1px] border-vintage-brown animate-[spin_15s_linear_infinite_reverse]" />
                </div>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8 mt-10">
                    
                    {/* 1. The Wedding Of (Fade Down) */}
                    <motion.div 
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex flex-col items-center gap-3"
                    >
                        <p className="font-serif tracking-[0.3em] text-[10px] md:text-xs text-vintage-olive uppercase">
                            The Wedding Of
                        </p>
                        <Image src="/images/vintage/wax-seal.png" alt="seal" width={30} height={30} className="opacity-60" />
                    </motion.div>

                    {/* 2. Nama Mempelai (Zoom In & Fade Up) */}
                    <div className="relative py-4 md:py-6">
                        <motion.h1 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                            className="font-script text-6xl md:text-8xl lg:text-9xl text-vintage-brown drop-shadow-sm leading-none"
                        >
                            {data.couple.groomNickname}
                        </motion.h1>
                        
                        <motion.span 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="block font-serif text-2xl md:text-4xl text-vintage-gold/80 my-2 md:my-4 animate-pulse"
                        >
                            &
                        </motion.span>

                        <motion.h1 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
                            className="font-script text-6xl md:text-8xl lg:text-9xl text-vintage-brown drop-shadow-sm leading-none"
                        >
                            {data.couple.brideNickname}
                        </motion.h1>
                    </div>

                    {/* 3. Tanggal (Fade Up with Lines) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 2 }}
                        className="flex items-center justify-center gap-4 md:gap-8 text-vintage-gold opacity-90"
                    >
                        <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-vintage-gold"></div>
                        <p className="font-serif text-lg md:text-2xl tracking-[0.3em] font-light">
                            {weddingDateString}
                        </p>
                        <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-vintage-gold"></div>
                    </motion.div>

                </div>
                
                {/* Scroll Down Indicator */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
                    className="absolute bottom-10 md:bottom-16 flex flex-col items-center gap-2 opacity-60"
                >
                    <span className="text-[10px] font-serif tracking-[0.3em] uppercase text-vintage-brown">Scroll Down</span>
                    <div className="w-[1px] h-8 md:h-12 bg-vintage-brown/30"></div>
                </motion.div>
            </section>

            {/* --- MAIN CONTENT COMPONENTS --- */}
            <TheIntro />
            <TheCouple couple={data.couple} />
            <TheEvent event={data.event} />
            <TheGallery gallery={data.gallery} />
            <TheRSVP /> 
            <TheGift gift={data.gift} />

            {/* --- FOOTER DINAMIS --- */}
            <footer className="py-12 text-center space-y-4 bg-gradient-to-t from-vintage-brown/5 to-transparent pb-24">
                <div className="flex justify-center opacity-40 mb-4">
                    <Image src="/images/vintage/wax-seal.png" alt="footer-logo" width={40} height={40} />
                </div>
                <p className="font-script text-3xl text-vintage-brown opacity-80">
                    {data.couple.groomNickname} & {data.couple.brideNickname}
                </p>
                <p className="text-[10px] text-vintage-olive uppercase tracking-widest opacity-50">
                    © {weddingDate.getFullYear()} All Rights Reserved.
                </p>
            </footer>

        </motion.div>
      )}

    </main>
  );
}