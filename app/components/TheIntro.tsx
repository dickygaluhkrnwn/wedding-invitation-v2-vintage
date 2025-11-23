"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TheIntro() {
  // Base64 Noise Pattern (Konsisten dengan TheEvent)
  const noisePattern = `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEHb29v///8AAABOmZnDw8O+vr6urq6hoaG7j36HAAAACHRSTlMAM8T/mZkzM4Vj3DIAAAArSURBVDjLY2AYBaNgFIyCUTAKRsEoGAWjYBSMglEwCkbBKBgFo2AUjIIhAQA9bATXt91HzAAAAABJRU5ErkJggg==")`;

  return (
    <section className="relative py-24 px-6 w-full flex flex-col items-center justify-center text-center space-y-16 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vintage-gold/10 rounded-full blur-3xl pointer-events-none" />

      {/* Ornamen Bunga Utama (Atas) */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-48 h-48 md:w-64 md:h-64 opacity-90"
      >
        <Image 
            src="/images/vintage/flower-corner.png" 
            alt="Flower Decoration" 
            fill
            className="object-contain rotate-45 drop-shadow-lg mix-blend-multiply"
        />
      </motion.div>

      {/* Salam Pembuka */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        viewport={{ once: true }}
        className="space-y-6 relative z-10 max-w-2xl mx-auto"
      >
        <p className="font-serif text-vintage-brown/80 text-xl md:text-2xl tracking-widest">
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
        </p>

        <h3 className="font-script text-5xl md:text-7xl text-vintage-brown drop-shadow-sm leading-snug py-2">
          Assalamualaikum Wr. Wb.
        </h3>
        
        <div className="flex items-center justify-center gap-4 opacity-50">
            <div className="w-12 h-[1px] bg-vintage-brown"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-vintage-brown"></div>
            <div className="w-12 h-[1px] bg-vintage-brown"></div>
        </div>

        <p className="font-sans text-sm md:text-base text-vintage-olive tracking-[0.1em] uppercase leading-loose px-6 md:px-0 max-w-xl mx-auto">
          Dengan memohon Rahmat & Ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan putra-putri kami:
        </p>
      </motion.div>

      {/* KARTU QUOTE (The Vintage Paper) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5, type: "spring" }}
        viewport={{ once: true }}
        className="relative w-full max-w-3xl mx-auto px-4"
      >
        {/* Container dengan Background #F2E8D5 (Sama dengan Ticket di TheEvent) */}
        <div className="relative bg-[#F2E8D5] p-12 md:p-20 shadow-[0_30px_60px_-15px_rgba(92,64,51,0.3)] border-[6px] border-double border-vintage-brown/10 transform hover:rotate-0 transition-transform duration-700 overflow-hidden">
            
            {/* TEXTURE LAYER (Base64 Noise Pattern dari TheEvent) */}
            <div 
                className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-multiply"
                style={{ 
                    backgroundImage: noisePattern,
                    backgroundSize: '100px 100px' // Ukuran repeat noise
                }}
            />
            
            {/* Vignette / Inner Shadow (Efek kertas kotor di pinggir) */}
            <div className="absolute inset-0 z-0 pointer-events-none shadow-[inset_0_0_80px_rgba(92,64,51,0.15)]" />

            {/* Dekorasi Sudut Mewah */}
            <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-vintage-brown/30 rounded-tl-lg" />
            <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-vintage-brown/30 rounded-br-lg" />

            {/* Ornamen Bunga Kecil di Sudut */}
            <div className="absolute -top-8 -left-8 w-32 h-32 opacity-30 pointer-events-none z-20 mix-blend-multiply">
                <Image src="/images/vintage/flower-corner.png" alt="corner" fill className="object-contain -scale-x-100" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-30 pointer-events-none z-20 mix-blend-multiply">
                <Image src="/images/vintage/flower-corner.png" alt="corner" fill className="object-contain rotate-180" />
            </div>

            {/* Konten Ayat */}
            <div className="relative z-10 space-y-8 flex flex-col items-center">
                {/* Hiasan Tengah */}
                <div className="flex flex-col items-center gap-2 opacity-60 mb-4">
                    <div className="w-[1px] h-10 bg-vintage-brown"></div>
                    <div className="w-3 h-3 border border-vintage-brown rotate-45"></div>
                </div>

                <p className="font-serif text-vintage-brown/90 italic leading-loose text-lg md:text-2xl max-w-2xl mx-auto text-center font-medium drop-shadow-sm">
                "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya."
                </p>
                
                {/* Referensi Ayat */}
                <div className="flex items-center justify-center gap-6 pt-8">
                    <div className="h-[1px] w-12 bg-vintage-brown/40" />
                    <span className="font-serif text-xs md:text-sm font-bold text-vintage-brown uppercase tracking-[0.3em]">
                        QS. Ar-Rum : 21
                    </span>
                    <div className="h-[1px] w-12 bg-vintage-brown/40" />
                </div>
            </div>
        </div>
      </motion.div>

    </section>
  );
}