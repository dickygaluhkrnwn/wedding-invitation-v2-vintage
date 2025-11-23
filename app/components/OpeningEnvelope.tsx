"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { InvitationData } from '@/lib/invitation';
import { LockKeyholeOpen } from 'lucide-react'; // Ganti gambar dengan Icon

interface OpeningEnvelopeProps {
  onOpen: () => void;
  couple: InvitationData['couple'];
  date: Date;
}

export default function OpeningEnvelope({ onOpen, couple, date }: OpeningEnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const guestName = searchParams.get('to') || "Tamu Undangan";

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      onOpen();
    }, 2000); 
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-vintage-brown/90 backdrop-blur-sm overflow-hidden h-[100dvh] w-screen"
    >
      <div className="relative w-[90vw] max-w-[600px] perspective-1000 group">
        
        {/* 1. CARD */}
        <motion.div
          initial={{ y: 0, zIndex: 0 }}
          animate={isOpen ? { y: -200, zIndex: 5 } : { y: 0, zIndex: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          className="absolute left-1/2 -translate-x-1/2 top-4 w-[90%] h-[350px] md:h-[400px] bg-[#FDFBF7] shadow-md rounded-md flex flex-col items-center justify-center text-center p-6 border border-vintage-gold/20 origin-bottom"
        >
           <div className="absolute inset-0 opacity-30 bg-paper-texture mix-blend-multiply pointer-events-none" />
           
           <div className="relative z-10 space-y-2">
              <p className="font-serif text-xs tracking-[0.3em] text-vintage-olive uppercase">The Wedding Of</p>
              <div className="font-script text-4xl md:text-5xl text-vintage-brown">
                {couple.groomNickname} <span className="text-vintage-gold">&</span> {couple.brideNickname}
              </div>
              <p className="font-sans text-xs font-bold tracking-widest text-vintage-brown mt-2">
                {date.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}
              </p>
           </div>
        </motion.div>

        {/* 2. AMPLOP BODY */}
        <div className="relative w-full aspect-[1.6/1] z-10">
            <div className="absolute inset-0 bg-[#EBE5CE] rounded-b-lg shadow-2xl border-l border-r border-b border-vintage-brown/10 overflow-hidden">
               <div className="absolute inset-0 opacity-40 bg-paper-texture mix-blend-multiply" />
            </div>

            <div 
              className="absolute bottom-0 left-0 w-full h-full z-20"
              style={{ 
                background: 'linear-gradient(135deg, #F4F1EA 0%, #EBE5CE 100%)',
                clipPath: 'polygon(0 0, 50% 50%, 100% 0, 100% 100%, 0 100%)',
              }}
            >
               <div className="absolute inset-0 opacity-40 bg-paper-texture mix-blend-multiply" />
               <div className="absolute inset-0 shadow-inner opacity-20 bg-black/5 pointer-events-none" />
            </div>
            
            {!isOpen && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 w-64 bg-[#FDFBF7] px-6 py-3 text-center shadow-md border border-vintage-brown/10 rounded-sm"
              >
                 <p className="font-serif text-[10px] uppercase tracking-widest text-vintage-olive mb-1">Kepada Yth:</p>
                 <p className="font-sans text-sm font-bold text-vintage-brown line-clamp-1">{guestName}</p>
              </motion.div>
            )}
        </div>

        {/* 3. FLAP */}
        <motion.div
          initial={{ rotateX: 0, zIndex: 30 }}
          animate={isOpen ? { rotateX: 180, zIndex: 1 } : { rotateX: 0, zIndex: 30 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-[55%] origin-top"
          style={{ transformStyle: "preserve-3d" }}
        >
           <div 
             className="absolute inset-0 bg-[#F4F1EA] backface-hidden shadow-lg"
             style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
           >
              <div className="absolute inset-0 opacity-40 bg-paper-texture mix-blend-multiply" />
              <div className="absolute top-0 left-0 w-full h-full border-t-[6px] border-vintage-brown/5" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />
           </div>

           <div 
             className="absolute inset-0 bg-[#E5DFC5] backface-visible"
             style={{ 
               clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
               transform: 'rotateX(180deg)' 
             }}
           >
              <div className="absolute inset-0 opacity-40 bg-paper-texture mix-blend-multiply" />
           </div>
        </motion.div>

        {/* 4. TOMBOL BUKA (GANTI WAX SEAL) */}
        <motion.div 
          className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 origin-top"
          animate={isOpen ? { opacity: 0, scale: 0.8, rotateX: 180 } : { opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.4 }}
        >
           <button 
             onClick={handleOpen}
             className="relative group outline-none transition-transform active:scale-95 flex flex-col items-center justify-center"
           >
              {/* Lingkaran Emas Elegan Pengganti Wax Seal */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-vintage-gold shadow-lg border-4 border-[#F4F1EA] flex items-center justify-center group-hover:bg-yellow-600 transition-colors">
                 <LockKeyholeOpen className="text-[#F4F1EA]" size={24} />
              </div>
              
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-vintage-brown/80 backdrop-blur-sm px-3 py-1 rounded-full">
                 <span className="text-[10px] font-serif tracking-[0.2em] text-[#F4F1EA] uppercase">
                    Buka Undangan
                 </span>
              </div>
           </button>
        </motion.div>

      </div>
    </motion.div>
  );
}