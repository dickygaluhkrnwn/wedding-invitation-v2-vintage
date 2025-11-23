"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Disc, Pause, Play } from 'lucide-react'; 
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
  
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleOpenInvitation = () => {
    setIsEnvelopeOpen(true);
    setIsMusicPlaying(true); 
  };

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

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
            transition={{ duration: 1.5, delay: 0.5 }} 
            className="relative w-full flex flex-col items-center"
        >
            {/* --- GLOBAL FIXED ORNAMENTS --- */}
            <div className="fixed inset-0 pointer-events-none z-40">
                <div className="absolute inset-4 md:inset-6 border border-vintage-gold/30 mix-blend-multiply opacity-50 rounded-[2px]" />
                
                <motion.div 
                    initial={{ opacity: 0, x: -50, y: -50 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 -translate-x-1/3 -translate-y-1/3"
                >
                    <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain opacity-90" />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 50, y: 50 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 translate-x-1/3 translate-y-1/3"
                >
                    <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain rotate-180 opacity-90" />
                </motion.div>
            </div>

            {/* --- MUSIC CONTROL BUTTON --- */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2, duration: 1 }}
                className="fixed bottom-6 left-6 z-50 pointer-events-auto"
            >
                <button 
                    onClick={toggleMusic}
                    className={`relative w-10 h-10 md:w-12 md:h-12 rounded-full border border-vintage-brown/20 bg-vintage-cream/80 backdrop-blur-sm shadow-lg flex items-center justify-center group overflow-hidden ${isMusicPlaying ? 'animate-spin-slow' : ''}`}
                    style={{ animationDuration: '4s' }}
                >
                    <Disc size={48} className="text-vintage-brown opacity-80 absolute inset-0 m-auto" strokeWidth={1} />
                    <div className="relative z-10 bg-vintage-cream rounded-full p-1 shadow-sm">
                        {isMusicPlaying ? <Pause size={12} fill="currentColor" /> : <Play size={12} fill="currentColor" />}
                    </div>
                </button>
            </motion.div>

            {/* --- HERO SECTION (UPDATED SPACING) --- */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                
                {/* Background Ornament */}
                <motion.div 
                    style={{ y: heroY }}
                    className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none"
                >
                    <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full border-[2px] border-vintage-brown animate-[spin_30s_linear_infinite]" />
                    <div className="absolute w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full border-[1px] border-vintage-brown animate-[spin_20s_linear_infinite_reverse]" />
                </motion.div>

                {/* Content Container */}
                {/* UPDATE: Menggunakan gap-10 (mobile) dan gap-14 (desktop) yang konsisten */}
                <motion.div 
                    style={{ y: heroY, opacity: heroOpacity }} 
                    className="relative z-10 flex flex-col items-center gap-10 md:gap-14"
                >
                    
                    {/* 1. The Wedding Of */}
                    <motion.div 
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <p className="font-serif tracking-[0.3em] text-[10px] md:text-xs text-vintage-olive uppercase">
                            The Wedding Of
                        </p>
                        <Image src="/images/vintage/wax-seal.png" alt="seal" width={32} height={32} className="opacity-70" />
                    </motion.div>

                    {/* 2. Nama Mempelai */}
                    {/* UPDATE: Menghapus padding vertikal berlebih agar jarak murni dari gap parent */}
                    <div className="relative flex flex-col items-center">
                        <motion.h1 
                            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1.5, delay: 1.5, type: "spring" }}
                            className="font-script text-6xl md:text-8xl lg:text-9xl text-vintage-brown drop-shadow-sm leading-none"
                        >
                            {data.couple.groomNickname}
                        </motion.h1>
                        
                        {/* Simbol & dengan margin proporsional */}
                        <motion.span 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 2 }}
                            className="block font-serif text-2xl md:text-4xl text-vintage-gold/80 my-2"
                        >
                            &
                        </motion.span>

                        <motion.h1 
                            initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1.5, delay: 2.2, type: "spring" }}
                            className="font-script text-6xl md:text-8xl lg:text-9xl text-vintage-brown drop-shadow-sm leading-none"
                        >
                            {data.couple.brideNickname}
                        </motion.h1>
                    </div>

                    {/* 3. Tanggal */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 2.5 }}
                        className="flex items-center justify-center gap-6 md:gap-10 text-vintage-gold opacity-90"
                    >
                        <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-vintage-gold"></div>
                        <p className="font-serif text-lg md:text-2xl tracking-[0.3em] font-light">
                            {weddingDateString}
                        </p>
                        <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-vintage-gold"></div>
                    </motion.div>

                </motion.div>
                
                {/* Scroll Down Indicator */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 3 }}
                    className="absolute bottom-8 md:bottom-12 flex flex-col items-center gap-3 opacity-60"
                >
                    <span className="text-[9px] font-serif tracking-[0.3em] uppercase text-vintage-brown">Scroll Down</span>
                    <div className="w-[1px] h-10 md:h-14 bg-vintage-brown/30"></div>
                </motion.div>
            </section>

            {/* --- MAIN CONTENT COMPONENTS --- */}
            <div className="relative z-20 bg-vintage-cream/80 backdrop-blur-[1px]">
                <TheIntro />
                <TheCouple couple={data.couple} />
                <TheEvent event={data.event} />
                <TheGallery gallery={data.gallery} />
                <TheRSVP /> 
                <TheGift gift={data.gift} />
            </div>

            {/* --- FOOTER DINAMIS --- */}
            <footer className="py-12 text-center space-y-4 bg-gradient-to-t from-vintage-brown/5 to-transparent pb-24 relative z-20">
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