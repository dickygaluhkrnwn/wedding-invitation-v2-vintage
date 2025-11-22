"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
// Import tipe data
import { InvitationData } from '@/lib/invitation';

interface TheCoupleProps {
  couple: InvitationData['couple'];
}

export default function TheCouple({ couple }: TheCoupleProps) {
  return (
    <section className="py-20 md:py-32 px-6 w-full max-w-7xl mx-auto space-y-20 md:space-y-32 overflow-hidden">
      
      {/* Judul Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        <h2 className="font-serif text-3xl md:text-6xl text-vintage-brown uppercase tracking-[0.2em]">
          Mempelai
        </h2>
        <div className="flex justify-center">
             <div className="w-24 h-[2px] bg-vintage-gold" />
        </div>
      </motion.div>

      {/* --- THE GROOM (PRIA) --- */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
        
        {/* Foto Pria (Kiri) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative w-full md:w-5/12 flex justify-center md:justify-end"
        >
          <div className="relative w-64 md:w-[340px] aspect-[3/4]">
            {/* Frame */}
            <div className="absolute inset-[-20px] z-20 pointer-events-none">
                <Image 
                    src="/images/vintage/floral-frame.png" 
                    alt="Vintage Frame" 
                    fill 
                    className="object-contain scale-110 drop-shadow-xl" 
                />
            </div>
            
            {/* Foto Groom Dinamis */}
            <div className="absolute inset-5 z-10 overflow-hidden rounded-[3rem] bg-vintage-brown/10 shadow-inner">
               <Image 
                 src={couple.groomPhoto} 
                 alt={couple.groomName}
                 fill
                 className="object-cover sepia-[0.2] hover:sepia-0 transition-all duration-1000 hover:scale-105"
                 sizes="(max-width: 768px) 100vw, 340px"
               />
            </div>
          </div>
        </motion.div>

        {/* Teks Pria (Kanan) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full md:w-5/12 text-center md:text-left space-y-4 md:space-y-6"
        >
          <div>
            <h3 className="font-script text-5xl md:text-8xl text-vintage-brown leading-tight">
                {couple.groomNickname}
            </h3>
            <p className="font-serif text-xs md:text-sm tracking-[0.2em] text-vintage-olive uppercase mt-2">
               {couple.groomName}
            </p>
            <div className="w-12 h-[1px] bg-vintage-gold my-4 mx-auto md:mx-0" />
            <p className="font-serif text-xs md:text-sm text-vintage-brown/80">
                {couple.groomParents}
            </p>
          </div>

          <p className="font-sans text-vintage-brown/80 leading-relaxed text-sm md:text-base max-w-md mx-auto md:mx-0 italic">
            "Seorang pria yang mencintai kesederhanaan dan kehangatan keluarga. Berjanji untuk menjadi imam yang baik."
          </p>
          
          <div className="pt-2 flex justify-center md:justify-start">
            <a href={couple.groomInstagram} target="_blank" rel="noopener noreferrer" className="text-vintage-gold hover:text-vintage-brown transition-colors flex items-center gap-2 text-[10px] md:text-xs tracking-widest uppercase border-b border-transparent hover:border-vintage-brown pb-1">
                <Instagram size={14} /> Instagram
            </a>
          </div>
        </motion.div>
      </div>

      {/* --- DIVIDER BUNGA TENGAH --- */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex justify-center py-4 opacity-60"
      >
        <div className="w-16 h-16 md:w-24 md:h-24 relative">
             <Image src="/images/vintage/flower-corner.png" alt="divider" fill className="object-contain rotate-45" />
        </div>
      </motion.div>

      {/* --- THE BRIDE (WANITA) --- */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 md:gap-20">
        
        {/* Foto Wanita (Kanan) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative w-full md:w-5/12 flex justify-center md:justify-start"
        >
          <div className="relative w-64 md:w-[340px] aspect-[3/4]">
            {/* Frame */}
            <div className="absolute inset-[-20px] z-20 pointer-events-none">
                <Image 
                    src="/images/vintage/floral-frame.png" 
                    alt="Vintage Frame" 
                    fill 
                    className="object-contain scale-110 drop-shadow-xl"
                />
            </div>
            
            {/* Foto Bride Dinamis */}
            <div className="absolute inset-5 z-10 overflow-hidden rounded-[3rem] bg-vintage-brown/10 shadow-inner">
               <Image 
                 src={couple.bridePhoto} 
                 alt={couple.brideName}
                 fill
                 className="object-cover sepia-[0.2] hover:sepia-0 transition-all duration-1000 hover:scale-105"
                 sizes="(max-width: 768px) 100vw, 340px"
               />
            </div>
          </div>
        </motion.div>

        {/* Teks Wanita (Kiri) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full md:w-5/12 text-center md:text-right space-y-4 md:space-y-6"
        >
          <div>
            <h3 className="font-script text-5xl md:text-8xl text-vintage-brown leading-tight">
                {couple.brideNickname}
            </h3>
            <p className="font-serif text-xs md:text-sm tracking-[0.2em] text-vintage-olive uppercase mt-2">
                {couple.brideName}
            </p>
            <div className="w-12 h-[1px] bg-vintage-gold my-4 mx-auto md:ml-auto" />
            <p className="font-serif text-xs md:text-sm text-vintage-brown/80">
                {couple.brideParents}
            </p>
          </div>

          <p className="font-sans text-vintage-brown/80 leading-relaxed text-sm md:text-base max-w-md mx-auto md:ml-auto italic">
            "Wanita penyabar yang selalu percaya bahwa cinta sejati itu tumbuh dari ketulusan hati."
          </p>
          
          <div className="pt-2 flex justify-center md:justify-end">
            <a href={couple.brideInstagram} target="_blank" rel="noopener noreferrer" className="text-vintage-gold hover:text-vintage-brown transition-colors flex items-center gap-2 text-[10px] md:text-xs tracking-widest uppercase border-b border-transparent hover:border-vintage-brown pb-1">
                Instagram <Instagram size={14} />
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}