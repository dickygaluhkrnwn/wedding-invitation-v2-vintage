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
    <section className="w-full max-w-7xl mx-auto relative">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="text-center space-y-8 relative z-10 mb-20"
      >
        {/* GANTI WAX SEAL DENGAN BORDER SIMPLE */}
        <h2 className="font-serif text-4xl md:text-5xl text-vintage-brown uppercase tracking-[0.25em] border-y border-vintage-brown/20 py-4 inline-block px-12">
          Mempelai
        </h2>
        <p className="font-sans text-vintage-olive/80 italic text-sm md:text-base max-w-2xl mx-auto leading-loose">
          "Maha suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami merangkaikan kasih sayang yang Kau ciptakan di antara kami."
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 relative z-10 mb-24">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full md:w-5/12 flex justify-center md:justify-end"
        >
          <div className="relative w-[280px] md:w-[320px] aspect-[3/4]">
            <div className="absolute top-4 right-4 w-full h-full border border-vintage-brown/30 rounded-t-full rounded-b-2xl z-0" />
            <div className="relative w-full h-full overflow-hidden rounded-t-full rounded-b-xl shadow-2xl bg-vintage-brown/10 z-10">
               <Image 
                 src="/images/vintage/groom.png"
                 alt={couple.groomName}
                 fill
                 className="object-cover hover:scale-105 transition-transform duration-1000"
                 sizes="(max-width: 768px) 100vw, 320px"
               />
            </div>
            <div className="absolute -bottom-10 -left-12 w-40 h-40 z-20">
                <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain rotate-[-15deg]" />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full md:w-5/12 text-center md:text-left space-y-6"
        >
          <div>
            <h3 className="font-script text-6xl md:text-8xl text-vintage-brown leading-none mb-2">
                {couple.groomNickname}
            </h3>
            <p className="font-serif text-xs tracking-[0.3em] text-vintage-gold uppercase font-bold">The Groom</p>
          </div>
          
          <div className="space-y-3 relative">
            <div className="hidden md:block absolute -left-6 top-0 bottom-0 w-[1px] bg-vintage-brown/20" />
            <p className="font-serif text-lg md:text-xl text-vintage-brown font-semibold uppercase tracking-wide">
               {couple.groomName}
            </p>
            <p className="font-sans text-sm text-vintage-olive leading-relaxed max-w-sm mx-auto md:mx-0">
                Putra dari pasangan <br/>
                <span className="font-semibold text-vintage-brown">{couple.groomParents}</span>
            </p>
          </div>
          
          <div className="pt-2">
            <a 
                href={couple.groomInstagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-vintage-brown border-b border-vintage-brown hover:text-vintage-gold hover:border-vintage-gold transition-colors pb-1"
            >
                <Instagram size={14} /> 
                <span>@instagram</span>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 md:gap-24 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full md:w-5/12 flex justify-center md:justify-start"
        >
          <div className="relative w-[280px] md:w-[320px] aspect-[3/4]">
            <div className="absolute top-4 left-4 w-full h-full border border-vintage-brown/30 rounded-t-full rounded-b-2xl z-0" />
            <div className="relative w-full h-full overflow-hidden rounded-t-full rounded-b-xl shadow-2xl bg-vintage-brown/10 z-10">
               <Image 
                 src="/images/vintage/bride.png"
                 alt={couple.brideName}
                 fill
                 className="object-cover hover:scale-105 transition-transform duration-1000"
                 sizes="(max-width: 768px) 100vw, 320px"
               />
            </div>
            <div className="absolute -bottom-10 -right-12 w-40 h-40 z-20">
                <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain transform -scale-x-100 rotate-[15deg]" />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full md:w-5/12 text-center md:text-right space-y-6"
        >
          <div>
            <h3 className="font-script text-6xl md:text-8xl text-vintage-brown leading-none mb-2">
                {couple.brideNickname}
            </h3>
            <p className="font-serif text-xs tracking-[0.3em] text-vintage-gold uppercase font-bold">The Bride</p>
          </div>
          
          <div className="space-y-3 relative">
            <div className="hidden md:block absolute -right-6 top-0 bottom-0 w-[1px] bg-vintage-brown/20" />
            <p className="font-serif text-lg md:text-xl text-vintage-brown font-semibold uppercase tracking-wide">
                {couple.brideName}
            </p>
            <p className="font-sans text-sm text-vintage-olive leading-relaxed max-w-sm mx-auto md:ml-auto md:mr-0">
                Putri dari pasangan <br/>
                <span className="font-semibold text-vintage-brown">{couple.brideParents}</span>
            </p>
          </div>
          
          <div className="pt-2 flex justify-center md:justify-end">
            <a 
                href={couple.brideInstagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-vintage-brown border-b border-vintage-brown hover:text-vintage-gold hover:border-vintage-gold transition-colors pb-1"
            >
                <span>@instagram</span>
                <Instagram size={14} /> 
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}