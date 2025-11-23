"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { InvitationData } from '@/lib/invitation';

interface TheCoupleProps {
  couple: InvitationData['couple'];
}

export default function TheCouple({ couple }: TheCoupleProps) {
  return (
    <section className="py-24 md:py-32 px-6 w-full max-w-7xl mx-auto space-y-24 md:space-y-32 overflow-hidden relative">
      
      {/* Background Texture Spot */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-vintage-gold/10 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-vintage-olive/10 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />

      {/* --- JUDUL SECTION --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center space-y-6 relative z-10"
      >
        <div className="flex justify-center items-center gap-4 opacity-60">
            <div className="h-[1px] w-12 bg-vintage-brown" />
            {/* ICON TENGAH = WAX SEAL */}
            <Image src="/images/vintage/wax-seal.png" alt="icon" width={24} height={24} />
            <div className="h-[1px] w-12 bg-vintage-brown" />
        </div>
        <h2 className="font-serif text-4xl md:text-6xl text-vintage-brown uppercase tracking-[0.2em]">
          Mempelai
        </h2>
        <p className="font-sans text-vintage-olive italic text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          "Maha suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami merangkaikan kasih sayang yang Kau ciptakan di antara kami."
        </p>
      </motion.div>

      {/* --- THE GROOM (PRIA - ROMEO) --- */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 relative z-10">
        
        {/* Foto Pria (Kiri) */}
        <motion.div 
          initial={{ opacity: 0, x: -50, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: -2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full md:w-5/12 flex justify-center md:justify-end"
        >
          <div className="relative p-3 pb-8 md:p-4 md:pb-12 bg-white shadow-xl border border-vintage-brown/10 transform transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-vintage-gold to-yellow-700 rounded-full shadow-md z-20 border border-white/30" />
            
            <div className="relative w-[260px] md:w-[300px] aspect-[3/4] overflow-hidden bg-vintage-brown/5">
               {/* FOTO PRIA = GROOM.PNG */}
               <Image 
                 src="/images/vintage/groom.png"
                 alt={couple.groomName}
                 fill
                 className="object-cover transition-transform duration-1000 hover:scale-110"
                 sizes="(max-width: 768px) 100vw, 300px"
               />
               <div className="absolute inset-0 border border-vintage-brown/10 pointer-events-none" />
            </div>

            <div className="absolute -bottom-8 -left-8 w-24 h-24 md:w-32 md:h-32 opacity-90 pointer-events-none">
                <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain rotate-[-45deg]" />
            </div>
          </div>
        </motion.div>

        {/* Teks Pria (Kanan) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full md:w-5/12 text-center md:text-left space-y-4 pl-0 md:pl-8"
        >
          <h3 className="font-script text-6xl md:text-8xl text-vintage-brown drop-shadow-sm leading-none">
              {couple.groomNickname}
          </h3>
          
          <div className="space-y-2 pt-2">
            <p className="font-serif text-sm md:text-lg font-bold text-vintage-brown uppercase tracking-[0.2em]">
               {couple.groomName}
            </p>
            <p className="font-sans text-sm text-vintage-olive">
                {couple.groomParents}
            </p>
          </div>

          <div className="flex justify-center md:justify-start py-4">
             <div className="w-20 h-[1px] bg-vintage-gold/50" />
          </div>
          
          <div className="flex justify-center md:justify-start">
            <a 
                href={couple.groomInstagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-2 px-5 py-2 border border-vintage-brown/30 rounded-full text-[10px] md:text-xs uppercase tracking-widest hover:bg-vintage-brown hover:text-vintage-cream transition-all duration-300"
            >
                <Instagram size={14} className="group-hover:scale-110 transition-transform" /> 
                <span>Instagram</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* --- THE BRIDE (WANITA - JULIET) --- */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 md:gap-20 relative z-10">
        
        {/* Foto Wanita (Kanan) */}
        <motion.div 
          initial={{ opacity: 0, x: 50, rotate: 5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full md:w-5/12 flex justify-center md:justify-start"
        >
          <div className="relative p-3 pb-8 md:p-4 md:pb-12 bg-white shadow-xl border border-vintage-brown/10 transform transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-vintage-gold to-yellow-700 rounded-full shadow-md z-20 border border-white/30" />
            
            <div className="relative w-[260px] md:w-[300px] aspect-[3/4] overflow-hidden bg-vintage-brown/5">
               {/* FOTO WANITA = BRIDE.PNG */}
               <Image 
                 src="/images/vintage/bride.png"
                 alt={couple.brideName}
                 fill
                 className="object-cover transition-transform duration-1000 hover:scale-110"
                 sizes="(max-width: 768px) 100vw, 300px"
               />
               <div className="absolute inset-0 border border-vintage-brown/10 pointer-events-none" />
            </div>

            <div className="absolute -bottom-8 -right-8 w-24 h-24 md:w-32 md:h-32 opacity-90 pointer-events-none">
                <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain rotate-[135deg]" />
            </div>
          </div>
        </motion.div>

        {/* Teks Wanita (Kiri) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full md:w-5/12 text-center md:text-right space-y-4 pr-0 md:pr-8"
        >
          <h3 className="font-script text-6xl md:text-8xl text-vintage-brown drop-shadow-sm leading-none">
              {couple.brideNickname}
          </h3>
          
          <div className="space-y-2 pt-2">
            <p className="font-serif text-sm md:text-lg font-bold text-vintage-brown uppercase tracking-[0.2em]">
                {couple.brideName}
            </p>
            <p className="font-sans text-sm text-vintage-olive">
                {couple.brideParents}
            </p>
          </div>

          <div className="flex justify-center md:justify-end py-4">
             <div className="w-20 h-[1px] bg-vintage-gold/50" />
          </div>
          
          <div className="flex justify-center md:justify-end">
            <a 
                href={couple.brideInstagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-2 px-5 py-2 border border-vintage-brown/30 rounded-full text-[10px] md:text-xs uppercase tracking-widest hover:bg-vintage-brown hover:text-vintage-cream transition-all duration-300"
            >
                <span>Instagram</span>
                <Instagram size={14} className="group-hover:scale-110 transition-transform" /> 
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}