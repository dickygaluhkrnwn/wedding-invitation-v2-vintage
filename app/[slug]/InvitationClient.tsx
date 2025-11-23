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

// Spacer tanpa ornamen ribet
const Spacer = () => (
  <div className="w-full h-[120px] md:h-[180px] flex items-center justify-center pointer-events-none">
     <div className="w-[1px] h-20 bg-vintage-brown/20"></div>
  </div>
);

export default function InvitationClient({ data }: InvitationClientProps) {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false); 
  
  const { scrollY } = useScroll();
  
  const heroY = useTransform(scrollY, [0, 800], [0, 300]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const ornamentsY = useTransform(scrollY, [0, 800], [0, -100]);

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
    <main className="min-h-screen w-full overflow-x-hidden bg-vintage-cream text-vintage-brown relative font-sans">
      
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
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }} 
            className="relative w-full flex flex-col items-center"
        >
            {/* --- GLOBAL FIXED ORNAMENTS --- */}
            <div className="fixed inset-0 pointer-events-none z-30">
                <div className="absolute inset-4 md:inset-8 border border-vintage-brown/10 rounded-tl-3xl rounded-br-3xl opacity-60" />
                
                <motion.div 
                    initial={{ opacity: 0, rotate: -10, x: -20 }}
                    animate={{ opacity: 1, rotate: 0, x: 0 }}
                    transition={{ duration: 2, delay: 1.5 }}
                    style={{ y: ornamentsY }}
                    className="absolute -top-10 -left-10 w-48 h-48 md:w-72 md:h-72 opacity-80 mix-blend-multiply"
                >
                    <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain transform -scale-x-100" priority />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, rotate: 10, x: 20 }}
                    animate={{ opacity: 1, rotate: 0, x: 0 }}
                    transition={{ duration: 2, delay: 1.5 }}
                    className="absolute -bottom-10 -right-10 w-48 h-48 md:w-72 md:h-72 opacity-80 mix-blend-multiply"
                >
                    <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain transform rotate-180" priority />
                </motion.div>
            </div>

            {/* --- MUSIC CONTROL --- */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 3, duration: 1, type: "spring" }}
                className="fixed bottom-6 left-6 z-50 pointer-events-auto"
            >
                <button 
                    onClick={toggleMusic}
                    className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-vintage-gold/30 bg-[#1a1a1a] shadow-xl flex items-center justify-center group overflow-hidden transition-transform active:scale-95 ${isMusicPlaying ? 'animate-spin-slow' : ''}`}
                    style={{ animationDuration: '8s' }}
                >
                    <div className="absolute inset-0 rounded-full border-[3px] border-white/5 opacity-50" />
                    <div className="relative z-10 bg-vintage-gold/80 rounded-full p-1.5 shadow-inner">
                        {isMusicPlaying ? <Pause size={14} className="text-[#1a1a1a] fill-current" /> : <Play size={14} className="text-[#1a1a1a] fill-current ml-0.5" />}
                    </div>
                </button>
            </motion.div>

            {/* --- HERO SECTION --- */}
            <section className="min-h-[100dvh] w-full flex flex-col items-center justify-center px-6 py-20 text-center relative overflow-hidden">
                <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 flex flex-col items-center w-full max-w-4xl">
                    <motion.div 
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 1.8 }}
                        className="flex flex-col items-center gap-6 mb-8 md:mb-12"
                    >
                        <div className="w-[1px] h-16 md:h-24 bg-gradient-to-b from-transparent to-vintage-gold/50"></div>
                        <p className="font-serif text-xs md:text-sm tracking-[0.4em] text-vintage-olive uppercase font-medium">The Wedding Of</p>
                    </motion.div>

                    <div className="relative flex flex-col items-center justify-center w-full mb-10 md:mb-14">
                        <motion.h1 
                            initial={{ opacity: 0, x: -50, rotate: -3 }}
                            animate={{ opacity: 1, x: 0, rotate: 0 }}
                            transition={{ duration: 1.8, delay: 2.2, ease: "easeOut" }}
                            className="font-script text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] text-vintage-brown leading-[0.8] z-10 relative text-shadow-vintage"
                        >
                            {data.couple.groomNickname}
                        </motion.h1>
                        <motion.span 
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 2.8, type: "spring" }}
                            className="font-serif text-3xl md:text-5xl text-vintage-gold/80 italic my-2 md:my-[-20px] z-20 relative mix-blend-multiply"
                        >
                            &
                        </motion.span>
                        <motion.h1 
                            initial={{ opacity: 0, x: 50, rotate: 3 }}
                            animate={{ opacity: 1, x: 0, rotate: 0 }}
                            transition={{ duration: 1.8, delay: 2.5, ease: "easeOut" }}
                            className="font-script text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] text-vintage-brown leading-[0.8] z-10 relative text-shadow-vintage"
                        >
                            {data.couple.brideNickname}
                        </motion.h1>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 3.2 }}
                        className="flex flex-col items-center gap-4 relative z-20"
                    >
                        <div className="flex items-center gap-6">
                            <span className="h-[1px] w-8 md:w-16 bg-vintage-gold/60"></span>
                            <p className="font-serif text-lg md:text-2xl tracking-[0.25em] text-vintage-brown font-bold">{weddingDateString}</p>
                            <span className="h-[1px] w-8 md:w-16 bg-vintage-gold/60"></span>
                        </div>
                    </motion.div>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 4, ease: "easeInOut" }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50"
                >
                    <span className="text-[10px] font-serif tracking-[0.3em] uppercase text-vintage-brown rotate-90 origin-center translate-y-4 mb-8">Scroll</span>
                    <div className="w-[1px] h-16 md:h-20 bg-gradient-to-b from-vintage-brown/50 to-transparent"></div>
                </motion.div>
            </section>

            {/* --- MAIN CONTENT --- */}
            <div className="relative z-20 w-full">
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
            <footer className="py-20 text-center space-y-6 bg-vintage-cream relative z-20 border-t border-vintage-brown/5">
                {/* Logo Footer diganti dengan inisial/teks saja */}
                <div className="flex justify-center opacity-40 mb-6">
                    <div className="w-12 h-12 border border-vintage-brown rounded-full flex items-center justify-center font-serif text-xl text-vintage-brown">
                        {data.couple.groomNickname[0]}&{data.couple.brideNickname[0]}
                    </div>
                </div>
                <div className="space-y-2">
                    <p className="font-script text-4xl text-vintage-brown opacity-90">{data.couple.groomNickname} & {data.couple.brideNickname}</p>
                    <p className="font-serif text-[10px] tracking-[0.3em] text-vintage-olive uppercase opacity-60">Thank You For Your Blessings</p>
                </div>
                <div className="pt-8 opacity-40 text-[9px] font-sans tracking-widest uppercase">© {weddingDate.getFullYear()} Wedding Invitation • Built with Love</div>
            </footer>

        </motion.div>
      )}

    </main>
  );
}