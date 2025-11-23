"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { InvitationData } from '@/lib/invitation';
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
    setTimeout(() => {
      onOpen();
    }, 2000);
  };

  // Format tanggal yang aman
  const dateString = date ? date.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }) : '';

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
      // FIX: Ganti background coklat gelap menjadi Cream Terang (#FDFBF7) agar bersih
      className="fixed inset-0 z-[999] flex items-center justify-center bg-[#FDFBF7] overflow-hidden h-screen w-screen"
    >
      {/* Container Amplop */}
      <div className="relative w-[90vw] max-w-[600px] perspective-1000 group">
        
        {/* 1. KARTU DI DALAM (Card) */}
        <motion.div
          initial={{ y: 0, zIndex: 0 }}
          animate={isOpen ? { y: -200, zIndex: 5 } : { y: 0, zIndex: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          className="absolute left-1/2 -translate-x-1/2 top-4 w-[90%] h-[350px] md:h-[400px] bg-white shadow-md rounded-md flex flex-col items-center justify-center text-center p-6 border border-[#C5A059]/30 origin-bottom"
        >
           {/* TEXTURE KARTU: Pastikan path benar dan opacity pas */}
           <div 
             className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply"
             style={{ 
               backgroundImage: "url('/images/vintage/paper-texture.png')", 
               backgroundSize: '300px' // Ukuran texture disesuaikan agar terlihat detailnya
             }}
           />
           
           <div className="relative z-10 space-y-4">
              <p className="font-serif text-xs tracking-[0.3em] text-[#73785C] uppercase">The Wedding Of</p>
              <div className="font-script text-4xl md:text-5xl text-[#5C4033]">
                {couple.groomNickname} <span className="text-[#C5A059]">&</span> {couple.brideNickname}
              </div>
              <p className="font-sans text-xs font-bold tracking-widest text-[#5C4033] mt-2">
                {dateString}
              </p>
           </div>
        </motion.div>

        {/* 2. AMPLOP BODY (Bagian Depan & Belakang) */}
        <div className="relative w-full aspect-[1.6/1] z-10">
            {/* Bagian Belakang Amplop */}
            <div className="absolute inset-0 bg-[#EBE5CE] rounded-b-lg shadow-2xl border-l border-r border-b border-[#5C4033]/10 overflow-hidden">
               <div 
                 className="absolute inset-0 opacity-30 mix-blend-multiply"
                 style={{ backgroundImage: "url('/images/vintage/paper-texture.png')", backgroundSize: '300px' }}
               />
            </div>

            {/* Kantong Depan (V Shape) */}
            <div 
              className="absolute bottom-0 left-0 w-full h-full z-20"
              style={{ 
                background: 'linear-gradient(135deg, #F4F1EA 0%, #EBE5CE 100%)',
                clipPath: 'polygon(0 0, 50% 50%, 100% 0, 100% 100%, 0 100%)',
              }}
            >
               {/* TEXTURE KANTONG DEPAN */}
               <div 
                 className="absolute inset-0 opacity-30 mix-blend-multiply"
                 style={{ backgroundImage: "url('/images/vintage/paper-texture.png')", backgroundSize: '300px' }}
               />
               {/* Shadow untuk kedalaman */}
               <div className="absolute inset-0 shadow-inner opacity-10 bg-black pointer-events-none" />
            </div>
            
            {/* Nama Tamu */}
            {!isOpen && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 w-64 bg-[#FDFBF7] px-6 py-3 text-center shadow-lg border border-[#5C4033]/10 rounded-sm"
              >
                 {/* Texture halus di label nama */}
                 <div 
                    className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
                    style={{ backgroundImage: "url('/images/vintage/paper-texture.png')", backgroundSize: 'cover' }}
                 />
                 <p className="font-serif text-[10px] uppercase tracking-widest text-[#73785C] mb-1 relative z-10">Kepada Yth:</p>
                 <p className="font-sans text-sm font-bold text-[#5C4033] line-clamp-1 relative z-10">{guestName}</p>
              </motion.div>
            )}
        </div>

        {/* 3. FLAP (Tutup Amplop) */}
        <motion.div
          initial={{ rotateX: 0, zIndex: 30 }}
          animate={isOpen ? { rotateX: 180, zIndex: 1 } : { rotateX: 0, zIndex: 30 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-[55%] origin-top"
          style={{ transformStyle: "preserve-3d" }}
        >
           {/* Sisi Luar Flap (Warna Terang) */}
           <div 
             className="absolute inset-0 bg-[#F4F1EA] backface-hidden shadow-lg"
             style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
           >
              <div 
                className="absolute inset-0 opacity-30 mix-blend-multiply"
                style={{ backgroundImage: "url('/images/vintage/paper-texture.png')", backgroundSize: '300px' }}
              />
              {/* Garis Lipatan */}
              <div className="absolute top-0 left-0 w-full h-full border-t-[1px] border-[#5C4033]/10" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />
           </div>

           {/* Sisi Dalam Flap (Warna Gelap, terlihat saat terbuka) */}
           <div 
             className="absolute inset-0 bg-[#E5DFC5] backface-visible"
             style={{ 
               clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
               transform: 'rotateX(180deg)' 
             }}
           >
              <div 
                className="absolute inset-0 opacity-30 mix-blend-multiply"
                style={{ backgroundImage: "url('/images/vintage/paper-texture.png')", backgroundSize: '300px' }}
              />
           </div>
        </motion.div>

        {/* 4. TOMBOL BUKA (Lingkaran Emas) */}
        <motion.div 
          className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 origin-top"
          animate={isOpen ? { opacity: 0, scale: 0.8, rotateX: 180 } : { opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.4 }}
        >
           <button 
             onClick={handleOpen}
             className="relative group outline-none transition-transform active:scale-95 flex flex-col items-center justify-center"
           >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#C5A059] shadow-xl border-4 border-[#FDFBF7] flex items-center justify-center group-hover:bg-[#b89f50] transition-colors">
                 <LockKeyholeOpen className="text-[#FDFBF7]" size={24} />
              </div>
              
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#5C4033] text-[#FDFBF7] px-4 py-1.5 rounded-full shadow-md">
                 <span className="text-[10px] font-serif tracking-[0.2em] uppercase">
                    Buka Undangan
                 </span>
              </div>
           </button>
        </motion.div>

      </div>
    </motion.div>
  );
}