"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { InvitationData } from '@/lib/invitation';
import Image from 'next/image';
import { LockKeyholeOpen } from 'lucide-react';

interface OpeningEnvelopeProps {
  onOpen: () => void;
  couple: InvitationData['couple'];
  date: Date;
}

export default function OpeningEnvelope({ onOpen, couple, date }: OpeningEnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const guestName = searchParams?.get('to') || "Tamu Undangan";

  const handleOpen = () => {
    setIsOpen(true);
    // Delay agar animasi kartu keluar selesai sebelum pindah halaman
    setTimeout(() => {
      onOpen();
    }, 2500);
  };

  const dateString = date ? date.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }) : '';

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-vintage-cream overflow-hidden h-screen w-screen"
    >
      {/* --- GLOBAL NOISE OVERLAY --- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* --- BACKGROUND ORNAMENTS --- */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ duration: 2 }}
        className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 pointer-events-none"
      >
         <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain opacity-50" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ duration: 2 }}
        className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 pointer-events-none"
      >
         <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain rotate-180 opacity-50" />
      </motion.div>

      {/* Container Amplop */}
      <div className="relative w-[90vw] max-w-[550px] perspective-1000 group z-10">
        
        {/* 1. KARTU DI DALAM (Card) */}
        <motion.div
          initial={{ y: 0, zIndex: 0, rotate: 0 }}
          animate={isOpen ? { y: -220, zIndex: 5, rotate: 1 } : { y: 0, zIndex: 0 }}
          transition={{ duration: 1.2, delay: 0.6, type: "spring", damping: 20 }}
          // PERBAIKAN POSISI: top-12 agar kartu lebih masuk ke dalam amplop saat tertutup
          className="absolute left-[5%] top-12 w-[90%] h-[350px] md:h-[400px] bg-[#FDFBF7] shadow-lg rounded-t-lg flex flex-col items-center justify-start text-center p-6 border border-vintage-brown/20 origin-bottom z-0"
        >
           {/* Texture Kertas - Layering */}
           <div className="absolute inset-0 z-0 bg-paper-texture opacity-60 mix-blend-multiply pointer-events-none rounded-t-lg" />
           
           {/* Konten Kartu */}
           {/* PERBAIKAN PADDING: pt-12 untuk memastikan teks tidak terlalu dekat dengan atas/lipatan */}
           <div className="relative z-10 space-y-6 pt-12 flex flex-col items-center h-full">
              <div className="w-10 h-10 md:w-12 md:h-12 relative opacity-60">
                 <Image src="/images/vintage/flower-corner.png" alt="icon" fill className="object-contain rotate-45" />
              </div>

              <div className="space-y-2">
                <p className="font-serif text-[10px] tracking-[0.4em] text-vintage-olive uppercase">The Wedding Of</p>
                <div className="font-script text-4xl md:text-5xl text-vintage-brown">
                  {couple.groomNickname} <span className="text-vintage-gold">&</span> {couple.brideNickname}
                </div>
              </div>

              <div className="mt-auto pb-12 space-y-2">
                 <div className="w-32 h-[1px] bg-vintage-brown/20 mx-auto" />
                 <p className="font-serif text-xs font-bold tracking-[0.2em] text-vintage-brown/80">
                  {dateString}
                 </p>
              </div>
           </div>
        </motion.div>

        {/* 2. AMPLOP BODY (Bagian Depan & Belakang) */}
        {/* Z-Index 20: Di atas kartu (0) */}
        <div className="relative w-full aspect-[1.5/1] z-20 pointer-events-none">
            
            {/* Bagian Belakang (Inside Envelope) */}
            <div className="absolute inset-0 bg-[#dcd5c0] rounded-b-lg shadow-2xl border border-vintage-brown/20 overflow-hidden">
               <div className="absolute inset-0 bg-paper-texture opacity-30 mix-blend-multiply" />
            </div>

            {/* Kantong Depan (Front Pocket) */}
            <div 
              className="absolute bottom-0 left-0 w-full h-full z-20 drop-shadow-xl"
              style={{ 
                background: '#EBE5CE',
                clipPath: 'polygon(0 0, 50% 55%, 100% 0, 100% 100%, 0 100%)',
              }}
            >
               <div className="absolute inset-0 w-full h-full bg-paper-texture opacity-50 mix-blend-multiply pointer-events-none" />
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/10 to-transparent pointer-events-none" 
                    style={{ clipPath: 'polygon(0 0, 50% 55%, 100% 0, 100% 10px, 50% 60%, 0 10px)' }} />
            </div>
            
            {/* LABEL NAMA TAMU (Card Kecil) */}
            {/* PERBAIKAN: 
                1. Posisi bottom-4 agar ada di area bawah amplop.
                2. Z-index 50 agar DI ATAS segalanya (kantong amplop & kartu).
                3. Animasi opacity saat dibuka agar menghilang rapi.
            */}
            <motion.div 
              animate={isOpen ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 w-64 bg-[#FDFBF7] px-6 py-3 text-center shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-vintage-brown/10 rounded-sm transform rotate-[-1deg] pointer-events-auto"
            >
                 {/* Texture Label */}
                 <div className="absolute inset-0 bg-paper-texture opacity-30 mix-blend-multiply rounded-sm" />
                 
                 {/* Tape/Solatip effect */}
                 <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-12 h-5 bg-white/40 backdrop-blur-sm rotate-1 shadow-sm border-l border-r border-white/20" />

                 <p className="font-serif text-[9px] uppercase tracking-widest text-vintage-olive mb-1 relative z-10">Kepada Yth:</p>
                 <p className="font-serif text-lg font-bold text-vintage-brown line-clamp-1 relative z-10">{guestName}</p>
            </motion.div>
        </div>

        {/* 3. FLAP (Tutup Amplop) */}
        <motion.div
          initial={{ rotateX: 0, zIndex: 40 }}
          animate={isOpen ? { rotateX: 180, zIndex: 1 } : { rotateX: 0, zIndex: 40 }}
          transition={{ duration: 1.5, ease: "circInOut", type: "spring", stiffness: 60, damping: 14 }}
          className="absolute top-0 left-0 w-full h-[55%] origin-top z-40"
          style={{ transformStyle: "preserve-3d" }}
        >
           {/* Sisi Luar Flap */}
           <div 
             className="absolute inset-0 backface-hidden z-20 bg-[#EBE5CE] drop-shadow-md"
             style={{ clipPath: 'polygon(0 0, 100% 0, 50% 90%)' }} 
           >
              <div className="absolute inset-0 bg-paper-texture opacity-50 mix-blend-multiply" />
              <div className="absolute top-0 left-0 w-full h-[2px] bg-black/5" />
           </div>

           {/* Sisi Dalam Flap */}
           <div 
             className="absolute inset-0 backface-visible bg-[#dcd5c0]"
             style={{ 
               clipPath: 'polygon(0 0, 100% 0, 50% 90%)',
               transform: 'rotateX(180deg)' 
             }}
           >
              <div className="absolute inset-0 bg-paper-texture opacity-40 mix-blend-multiply" />
           </div>
        </motion.div>

        {/* 4. DIGITAL WAX SEAL - Center */}
        <motion.div 
          className="absolute top-[49%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer"
          animate={isOpen ? { opacity: 0, scale: 1.2, rotate: 10 } : { opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.4 }}
          onClick={!isOpen ? handleOpen : undefined}
        >
           <div className="relative group w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
              <div className="absolute inset-0 bg-vintage-gold/30 rounded-full blur-lg group-hover:bg-vintage-gold/50 transition-all duration-500 animate-pulse" />
              
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#D4AF37] via-[#AA8C2C] to-[#8a7020] shadow-[0_4px_15px_rgba(0,0,0,0.3)] flex items-center justify-center border-[3px] border-[#FDFBF7]/20 group-hover:scale-105 transition-transform duration-300">
                 <div className="w-[85%] h-[85%] rounded-full border-2 border-[#5e4715]/20 flex items-center justify-center bg-[#C5A059] shadow-inner">
                    <div className="text-[#3e2b22] drop-shadow-sm opacity-80 flex flex-col items-center gap-1">
                        <LockKeyholeOpen size={24} strokeWidth={2.5} />
                        <span className="text-[8px] font-serif font-bold tracking-widest uppercase">Buka</span>
                    </div>
                 </div>
                 <div className="absolute inset-0 rounded-full bg-paper-texture opacity-30 mix-blend-overlay pointer-events-none" />
              </div>
           </div>
        </motion.div>

      </div>
    </motion.div>
  );
}