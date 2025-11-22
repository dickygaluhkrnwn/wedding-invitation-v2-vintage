"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TheIntro() {
  return (
    <section className="relative py-24 px-6 w-full min-h-[70vh] flex flex-col items-center justify-center text-center space-y-10">
      
      {/* Ornamen Atas (Floral) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="relative w-32 h-32 opacity-80"
      >
        {/* Rotasi -45deg agar pas di tengah atas */}
        <Image 
            src="/images/vintage/flower-corner.png" 
            alt="Flower Decoration" 
            fill
            className="object-contain rotate-45"
        />
      </motion.div>

      {/* Salam Pembuka */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="space-y-4 relative z-10"
      >
        <h3 className="font-script text-4xl md:text-6xl text-vintage-brown">
          Assalamualaikum Wr. Wb.
        </h3>
        <p className="font-serif text-xs md:text-sm text-vintage-olive tracking-[0.2em] uppercase leading-relaxed max-w-md mx-auto">
          Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i pada acara pernikahan kami
        </p>
      </motion.div>

      {/* Kotak Ayat Suci / Quotes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-2xl mx-auto p-10 md:p-14 border-y border-vintage-gold/30 bg-white/40 backdrop-blur-[2px] shadow-sm mt-8"
      >
        {/* Dekorasi Bunga Sudut (Real Image) */}
        <div className="absolute top-0 left-0 w-16 h-16 md:w-20 md:h-20 -translate-x-1/2 -translate-y-1/2 opacity-70">
            <Image src="/images/vintage/flower-corner.png" alt="corner" fill className="object-contain" />
        </div>
        <div className="absolute bottom-0 right-0 w-16 h-16 md:w-20 md:h-20 translate-x-1/2 translate-y-1/2 opacity-70">
            <Image src="/images/vintage/flower-corner.png" alt="corner" fill className="object-contain rotate-180" />
        </div>

        <p className="font-serif text-vintage-brown italic leading-loose text-sm md:text-lg relative z-10">
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang."
        </p>
        
        <div className="mt-8 flex items-center justify-center gap-4 opacity-70">
            <div className="h-[1px] w-12 bg-vintage-brown/30" />
            <span className="font-serif text-[10px] font-bold text-vintage-olive uppercase tracking-widest">
                QS. Ar-Rum : 21
            </span>
            <div className="h-[1px] w-12 bg-vintage-brown/30" />
        </div>
      </motion.div>

    </section>
  );
}