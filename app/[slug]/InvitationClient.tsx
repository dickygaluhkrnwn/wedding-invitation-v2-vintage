"use client";

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Pause, Play } from 'lucide-react'; 
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

// Spacer Elegan dengan Ornamen Kecil
const Spacer = () => (
  <div className="w-full h-[150px] flex flex-col items-center justify-center pointer-events-none opacity-30 gap-4">
     <div className="w-[1px] h-12 bg-vintage-brown/30"></div>
     <div className="w-2 h-2 rotate-45 border border-vintage-brown/50"></div>
     <div className="w-[1px] h-12 bg-vintage-brown/30"></div>
  </div>
);

export default function InvitationClient({ data }: InvitationClientProps) {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false); 
  const [showContent, setShowContent] = useState(false);
  
  const { scrollY } = useScroll();
  
  const heroY = useTransform(scrollY, [0, 800], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  
  // Base64 Noise Pattern (Global Grain)
  const noisePattern = `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEHb29v///8AAABOmZnDw8O+vr6urq6hoaG7j36HAAAACHRSTlMAM8T/mZkzM4Vj3DIAAAArSURBVDjLY2AYBaNgFIyCUTAKRsEoGAWjYBSMglEwCkbBKBgFo2AUjIIhAQA9bATXt91HzAAAAABJRU5ErkJggg==")`;

  const handleOpenInvitation = () => {
    setIsEnvelopeOpen(true);
    setIsMusicPlaying(true);
    // Delay sedikit untuk menampilkan konten setelah animasi amplop
    setTimeout(() => setShowContent(true), 800);
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
    <main className="min-h-screen w-full overflow-x-hidden bg-vintage-cream text-vintage-brown relative font-sans selection:bg-vintage-gold/30">
      
      {/* --- GLOBAL VINTAGE NOISE OVERLAY --- */}
      {/* Ini memberikan efek film grain ke SELURUH website */}
      <div 
        className="fixed inset-0 z-[5] pointer-events-none opacity-[0.03] mix-blend-multiply" 
        style={{ backgroundImage: noisePattern }} 
      />

      <BackgroundMusic isPlaying={isMusicPlaying} />

      <AnimatePresence mode="wait">
        {!showContent && (
          <OpeningEnvelope 
            onOpen={handleOpenInvitation} 
            couple={data.couple} 
            date={weddingDate}
          />
        )}
      </AnimatePresence>

      {showContent && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }} 
            className="relative w-full flex flex-col items-center"
        >
            {/* --- GLOBAL FIXED ORNAMENTS --- */}
            <div className="fixed inset-0 pointer-events-none z-30">
                {/* Bingkai Layar Tipis */}
                <div className="absolute inset-4 md:inset-6 border border-vintage-brown/5 rounded-[2rem] opacity-80 pointer-events-none" />
                
                {/* Bunga Sudut Kiri Atas */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="absolute -top-12 -left-12 w-48 h-48 md:w-64 md:h-64 opacity-60 mix-blend-multiply"
                >
                    <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain transform -scale-x-100" priority />
                </motion.div>

                {/* Bunga Sudut Kanan Bawah */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="absolute -bottom-12 -right-12 w-48 h-48 md:w-64 md:h-64 opacity-60 mix-blend-multiply"
                >
                    <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain transform rotate-180" priority />
                </motion.div>
            </div>

            {/* --- MUSIC CONTROL (Floating Button) --- */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 2, duration: 1, type: "spring" }}
                className="fixed bottom-8 left-8 z-50 pointer-events-auto"
            >
                <button 
                    onClick={toggleMusic}
                    className={`relative w-10 h-10 md:w-12 md:h-12 rounded-full border border-vintage-brown/20 bg-[#FDFBF7] shadow-lg flex items-center justify-center group overflow-hidden transition-all active:scale-95 hover:border-vintage-gold ${isMusicPlaying ? 'animate-spin-slow' : ''}`}
                    style={{ animationDuration: '8s' }}
                >
                    <div className="relative z-10 text-vintage-brown/80">
                        {isMusicPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" className="ml-0.5" />}
                    </div>
                </button>
            </motion.div>

            {/* --- HERO SECTION --- */}
            <section className="min-h-[100dvh] w-full flex flex-col items-center justify-center px-6 py-20 text-center relative overflow-hidden">
                
                <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 flex flex-col items-center w-full max-w-4xl">
                    <motion.div 
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                        className="flex flex-col items-center gap-6 mb-8"
                    >
                        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-vintage-brown/40"></div>
                        <p className="font-serif text-xs md:text-sm tracking-[0.4em] text-vintage-olive uppercase font-bold">The Wedding Of</p>
                    </motion.div>

                    <div className="relative flex flex-col items-center justify-center w-full mb-10">
                        <motion.h1 
                            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1.8, delay: 0.8, ease: "easeOut" }}
                            className="font-script text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] text-vintage-brown leading-[0.8] z-10 relative drop-shadow-sm"
                        >
                            {data.couple.groomNickname}
                        </motion.h1>
                        
                        <motion.span 
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 1.2, type: "spring" }}
                            className="font-serif text-4xl md:text-6xl text-vintage-gold/60 italic my-4 z-20 relative mix-blend-multiply"
                        >
                            &
                        </motion.span>
                        
                        <motion.h1 
                            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1.8, delay: 1.5, ease: "easeOut" }}
                            className="font-script text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] text-vintage-brown leading-[0.8] z-10 relative drop-shadow-sm"
                        >
                            {data.couple.brideNickname}
                        </motion.h1>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 2 }}
                        className="flex flex-col items-center gap-6 relative z-20"
                    >
                        <div className="flex items-center gap-4">
                            <span className="h-[1px] w-12 bg-vintage-brown/30"></span>
                            <p className="font-serif text-lg md:text-2xl tracking-[0.25em] text-vintage-brown font-bold uppercase">{weddingDateString}</p>
                            <span className="h-[1px] w-12 bg-vintage-brown/30"></span>
                        </div>
                    </motion.div>
                </motion.div>
                
                {/* Scroll Indicator */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 3, ease: "easeInOut" }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60"
                >
                    <span className="text-[9px] font-serif tracking-[0.3em] uppercase text-vintage-brown">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-vintage-brown/50 to-transparent"></div>
                </motion.div>
            </section>

            {/* --- MAIN CONTENT SECTIONS --- */}
            <div className="relative z-20 w-full pb-20">
                <TheIntro />
                <Spacer />
                <TheCouple couple={data.couple} />
                <Spacer />
                <TheEvent event={data.event} />
                <Spacer />
                <TheGallery gallery={data.gallery} />
                <Spacer />
                <TheRSVP /> 
                <Spacer />
                <TheGift gift={data.gift} />
            </div>

            {/* --- FOOTER --- */}
            <footer className="py-24 text-center space-y-8 bg-[#F2E8D5] w-full relative z-20 border-t border-vintage-brown/10">
                {/* Texture Footer */}
                <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply" style={{ backgroundImage: noisePattern }} />
                
                <div className="relative z-10 flex flex-col items-center gap-6">
                    <div className="w-12 h-12 border border-vintage-brown/30 rounded-full flex items-center justify-center font-serif text-xl text-vintage-brown">
                        {data.couple.groomNickname[0]}&{data.couple.brideNickname[0]}
                    </div>
                    
                    <div className="space-y-2">
                        <p className="font-script text-4xl text-vintage-brown opacity-90">{data.couple.groomNickname} & {data.couple.brideNickname}</p>
                        <p className="font-serif text-[10px] tracking-[0.3em] text-vintage-olive uppercase opacity-60">Thank You For Your Blessings</p>
                    </div>
                    
                    <div className="w-full max-w-xs h-[1px] bg-vintage-brown/10 mx-auto" />
                    
                    <p className="opacity-40 text-[9px] font-sans tracking-widest uppercase">
                        © {weddingDate.getFullYear()} Wedding Invitation • Built with Love
                    </p>
                </div>
            </footer>

        </motion.div>
      )}

    </main>
  );
}