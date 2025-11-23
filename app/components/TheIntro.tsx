"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TheIntro() {
  return (
    <section className="relative py-20 px-6 w-full flex flex-col items-center justify-center text-center space-y-16">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-vintage-gold/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-40 h-40 md:w-56 md:h-56 opacity-90"
      >
        <Image 
            src="/images/vintage/flower-corner.png" 
            alt="Flower Decoration" 
            fill
            className="object-contain rotate-45 drop-shadow-sm mix-blend-multiply"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        viewport={{ once: true }}
        className="space-y-8 relative z-10 max-w-2xl mx-auto"
      >
        <p className="font-serif text-vintage-brown/60 text-lg md:text-xl tracking-widest">
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
        </p>

        <h3 className="font-script text-5xl md:text-7xl text-vintage-brown drop-shadow-sm leading-snug py-2">
          Assalamualaikum Wr. Wb.
        </h3>
        
        <div className="w-12 h-[1px] bg-vintage-brown/30 mx-auto"></div>

        <p className="font-sans text-xs md:text-sm text-vintage-olive tracking-[0.15em] uppercase leading-loose px-4 md:px-0">
          Dengan memohon Rahmat & Ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan putra-putri kami:
        </p>
      </motion.div>

      {/* CARD QUOTES (DENGAN TEXTURE KERTAS) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5, type: "spring" }}
        viewport={{ once: true }}
        className="relative w-full max-w-4xl mx-auto px-4"
      >
        <div className="relative bg-[#FDFBF7] p-8 md:p-16 shadow-lg border border-vintage-brown/10 transform rotate-1 hover:rotate-0 transition-transform duration-700 overflow-hidden">
            
            {/* TEXTURE: Kertas Quote */}
            <div className="absolute inset-0 opacity-50 bg-paper-texture mix-blend-multiply pointer-events-none" />

            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-vintage-gold/20 backdrop-blur-sm rotate-1 shadow-sm" />
            
            <div className="absolute -top-6 -left-6 w-24 h-24 md:w-32 md:h-32 opacity-50 pointer-events-none">
                <Image src="/images/vintage/flower-corner.png" alt="corner" fill className="object-contain -scale-x-100" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 opacity-50 pointer-events-none">
                <Image src="/images/vintage/flower-corner.png" alt="corner" fill className="object-contain rotate-180" />
            </div>

            <div className="relative z-10 space-y-8 flex flex-col items-center">
                <div className="w-2 h-2 bg-vintage-brown rounded-full opacity-50 mb-2"></div>

                <p className="font-serif text-vintage-brown italic leading-loose text-sm md:text-lg max-w-3xl mx-auto text-justify-center">
                "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang."
                </p>
                <div className="flex items-center justify-center gap-4 opacity-70 pt-4">
                    <div className="h-[1px] w-8 md:w-12 bg-vintage-brown" />
                    <span className="font-serif text-[10px] md:text-xs font-bold text-vintage-brown uppercase tracking-[0.25em]">
                        QS. Ar-Rum : 21
                    </span>
                    <div className="h-[1px] w-8 md:w-12 bg-vintage-brown" />
                </div>
            </div>
        </div>
      </motion.div>

    </section>
  );
}