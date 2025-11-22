"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TheIntro() {
  return (
    <section className="relative py-20 md:py-32 px-6 w-full min-h-[80vh] flex flex-col items-center justify-center text-center space-y-12 md:space-y-16">
      
      {/* Ornamen Atas (Floral) - Responsive Size */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="relative w-32 h-32 md:w-48 md:h-48 opacity-90"
      >
        <Image 
            src="/images/vintage/flower-corner.png" 
            alt="Flower Decoration" 
            fill
            className="object-contain rotate-45 drop-shadow-sm"
        />
      </motion.div>

      {/* Salam Pembuka */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="space-y-6 relative z-10 max-w-3xl"
      >
        <h3 className="font-script text-4xl md:text-7xl text-vintage-brown drop-shadow-sm">
          Assalamualaikum Wr. Wb.
        </h3>
        <p className="font-serif text-xs md:text-sm text-vintage-olive tracking-[0.2em] uppercase leading-loose px-4">
          Dengan memohon Rahmat & Ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan putra-putri kami:
        </p>
      </motion.div>

      {/* Kotak Ayat Suci / Quotes - Styled as Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="relative w-full max-w-4xl mx-auto"
      >
        {/* Card Background with Texture */}
        <div className="bg-white/60 backdrop-blur-[2px] border-y-2 border-vintage-gold/20 p-8 md:p-16 shadow-sm relative overflow-hidden">
            
            {/* Texture Overlay pada Card */}
            <div className="absolute inset-0 opacity-20 bg-[url('/images/vintage/paper-texture.png')] pointer-events-none mix-blend-multiply" />

            {/* Dekorasi Bunga Sudut Kiri Atas */}
            <div className="absolute top-0 left-0 w-20 h-20 md:w-32 md:h-32 opacity-60 -translate-x-1/3 -translate-y-1/3">
                <Image src="/images/vintage/flower-corner.png" alt="corner" fill className="object-contain" />
            </div>
            
            {/* Dekorasi Bunga Sudut Kanan Bawah */}
            <div className="absolute bottom-0 right-0 w-20 h-20 md:w-32 md:h-32 opacity-60 translate-x-1/3 translate-y-1/3">
                <Image src="/images/vintage/flower-corner.png" alt="corner" fill className="object-contain rotate-180" />
            </div>

            {/* Konten Quote */}
            <div className="relative z-10 space-y-8">
                <p className="font-serif text-vintage-brown italic leading-loose text-sm md:text-xl max-w-2xl mx-auto">
                "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang."
                </p>
                
                <div className="flex items-center justify-center gap-4 opacity-80">
                    <div className="h-[1px] w-8 md:w-16 bg-vintage-brown" />
                    <span className="font-serif text-[10px] md:text-xs font-bold text-vintage-brown uppercase tracking-[0.2em]">
                        QS. Ar-Rum : 21
                    </span>
                    <div className="h-[1px] w-8 md:w-16 bg-vintage-brown" />
                </div>
            </div>
        </div>
      </motion.div>

    </section>
  );
}