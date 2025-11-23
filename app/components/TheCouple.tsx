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
  // Base64 Noise Pattern (Konsisten dengan komponen lain)
  const noisePattern = `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEHb29v///8AAABOmZnDw8O+vr6urq6hoaG7j36HAAAACHRSTlMAM8T/mZkzM4Vj3DIAAAArSURBVDjLY2AYBaNgFIyCUTAKRsEoGAWjYBSMglEwCkbBKBgFo2AUjIIhAQA9bATXt91HzAAAAABJRU5ErkJggg==")`;

  return (
    <section className="w-full max-w-7xl mx-auto relative py-20 overflow-hidden">
      
      {/* Background Texture Halus untuk Section */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply" style={{ backgroundImage: noisePattern }} />

      {/* Judul Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="text-center space-y-8 relative z-10 mb-24 px-4"
      >
        <div className="relative inline-block">
            <h2 className="font-serif text-4xl md:text-6xl text-vintage-brown uppercase tracking-[0.2em] py-4 px-8 relative z-10">
            Mempelai
            </h2>
            {/* Frame Judul Sederhana */}
            <div className="absolute top-0 left-0 w-full h-full border-t border-b border-vintage-brown/30 scale-x-110" />
            <div className="absolute inset-0 bg-vintage-brown/5 -skew-x-12 rounded-sm" />
        </div>
        
        <p className="font-sans text-vintage-olive/90 italic text-sm md:text-base max-w-2xl mx-auto leading-loose">
          "Maha suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami merangkaikan kasih sayang yang Kau ciptakan di antara kami."
        </p>
      </motion.div>

      {/* --- GROOM SECTION --- */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 relative z-10 mb-32 px-6">
        
        {/* Foto Groom (Bingkai Foto Tua) */}
        <motion.div 
          initial={{ opacity: 0, x: -50, rotate: -2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full md:w-5/12 flex justify-center md:justify-end"
        >
          <div className="relative w-[280px] md:w-[320px] aspect-[3/4] p-4 bg-white shadow-[0_20px_50px_rgba(92,64,51,0.25)] transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
            {/* Texture Kertas Foto */}
            <div className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-20 z-20" style={{ backgroundImage: noisePattern }} />
            
            {/* Efek Selotip */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 backdrop-blur-sm rotate-2 shadow-sm border border-white/20 z-30" />

            <div className="relative w-full h-full overflow-hidden border border-vintage-brown/10 grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out group">
               <Image 
                 src={couple.groomPhoto}
                 alt={couple.groomName}
                 fill
                 className="object-cover group-hover:scale-105 transition-transform duration-1000"
                 sizes="(max-width: 768px) 100vw, 320px"
               />
               {/* Vignette Inner Shadow */}
               <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(92,64,51,0.3)] pointer-events-none z-10" />
            </div>
          </div>
        </motion.div>

        {/* Info Groom */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full md:w-5/12 text-center md:text-left space-y-6 relative"
        >
          {/* Ornamen Belakang Teks */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-vintage-gold/5 rounded-full blur-2xl -z-10" />

          <div>
            <h3 className="font-script text-6xl md:text-8xl text-vintage-brown leading-none mb-2 drop-shadow-sm">
                {couple.groomNickname}
            </h3>
            <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="h-[1px] w-12 bg-vintage-gold" />
                <p className="font-serif text-xs tracking-[0.3em] text-vintage-gold uppercase font-bold">The Groom</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <p className="font-serif text-xl md:text-2xl text-vintage-brown font-semibold uppercase tracking-wide">
               {couple.groomName}
            </p>
            <p className="font-sans text-sm text-vintage-olive leading-relaxed">
                Putra tercinta dari pasangan <br/>
                <span className="font-serif text-lg text-vintage-brown mt-1 block">{couple.groomParents}</span>
            </p>
          </div>
          
          <div className="pt-4">
            <a 
                href={couple.groomInstagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-2 border border-vintage-brown/30 rounded-full text-xs font-bold uppercase tracking-widest text-vintage-brown hover:bg-vintage-brown hover:text-white transition-all duration-300"
            >
                <Instagram size={14} /> 
                <span>Instagram</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* --- BRIDE SECTION --- */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 md:gap-24 relative z-10 px-6">
        
        {/* Foto Bride */}
        <motion.div 
          initial={{ opacity: 0, x: 50, rotate: 2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full md:w-5/12 flex justify-center md:justify-start"
        >
          <div className="relative w-[280px] md:w-[320px] aspect-[3/4] p-4 bg-white shadow-[0_20px_50px_rgba(92,64,51,0.25)] transform rotate-[2deg] hover:rotate-0 transition-transform duration-700">
            {/* Texture Kertas Foto */}
            <div className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-20 z-20" style={{ backgroundImage: noisePattern }} />
            
            {/* Efek Selotip */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 backdrop-blur-sm -rotate-2 shadow-sm border border-white/20 z-30" />

            <div className="relative w-full h-full overflow-hidden border border-vintage-brown/10 grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out group">
               <Image 
                 src={couple.bridePhoto}
                 alt={couple.brideName}
                 fill
                 className="object-cover group-hover:scale-105 transition-transform duration-1000"
                 sizes="(max-width: 768px) 100vw, 320px"
               />
               <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(92,64,51,0.3)] pointer-events-none z-10" />
            </div>
          </div>
        </motion.div>

        {/* Info Bride */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full md:w-5/12 text-center md:text-right space-y-6 relative"
        >
          {/* Ornamen Belakang Teks */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-vintage-gold/5 rounded-full blur-2xl -z-10" />

          <div>
            <h3 className="font-script text-6xl md:text-8xl text-vintage-brown leading-none mb-2 drop-shadow-sm">
                {couple.brideNickname}
            </h3>
            <div className="flex items-center justify-center md:justify-end gap-3">
                <p className="font-serif text-xs tracking-[0.3em] text-vintage-gold uppercase font-bold">The Bride</p>
                <div className="h-[1px] w-12 bg-vintage-gold" />
            </div>
          </div>
          
          <div className="space-y-3">
            <p className="font-serif text-xl md:text-2xl text-vintage-brown font-semibold uppercase tracking-wide">
                {couple.brideName}
            </p>
            <p className="font-sans text-sm text-vintage-olive leading-relaxed">
                Putri tercinta dari pasangan <br/>
                <span className="font-serif text-lg text-vintage-brown mt-1 block">{couple.brideParents}</span>
            </p>
          </div>
          
          <div className="pt-4 flex justify-center md:justify-end">
            <a 
                href={couple.brideInstagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-2 border border-vintage-brown/30 rounded-full text-xs font-bold uppercase tracking-widest text-vintage-brown hover:bg-vintage-brown hover:text-white transition-all duration-300"
            >
                <span>Instagram</span>
                <Instagram size={14} /> 
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}