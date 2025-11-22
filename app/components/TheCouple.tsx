"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

export default function TheCouple() {
  return (
    <section className="py-24 px-6 w-full max-w-6xl mx-auto space-y-24">
      
      {/* Judul Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-4"
      >
        <h2 className="font-serif text-3xl md:text-5xl text-vintage-brown uppercase tracking-widest">
          Mempelai
        </h2>
        <div className="w-24 h-[2px] bg-vintage-gold mx-auto" />
      </motion.div>

      {/* --- THE GROOM (PRIA) --- */}
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Foto Pria */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative w-full md:w-1/2 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-[22rem] md:w-80 md:h-[28rem]">
            {/* REAL FLORAL FRAME OVERLAY */}
            <div className="absolute -inset-6 z-20 pointer-events-none">
                <Image 
                    src="/images/vintage/floral-frame.png" 
                    alt="Vintage Frame" 
                    fill 
                    className="object-contain scale-110" // Scale up agar frame membungkus foto
                />
            </div>
            
            {/* Foto Pria */}
            <div className="relative w-full h-full overflow-hidden rounded-[4rem] shadow-xl z-10 bg-vintage-brown/10">
               <Image 
                 src="/images/vintage/groom.png" 
                 alt="The Groom"
                 fill
                 className="object-cover sepia-[0.3] hover:sepia-0 transition-all duration-1000"
               />
            </div>
          </div>
        </motion.div>

        {/* Teks Pria */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-center md:text-left space-y-4"
        >
          <h3 className="font-script text-5xl md:text-7xl text-vintage-brown">
            Rizky Billar
          </h3>
          <p className="font-serif text-sm tracking-widest text-vintage-olive uppercase">
            Putra Pertama dari Bpk. Fulan & Ibu Fulanah
          </p>
          <p className="font-sans text-vintage-brown/80 leading-relaxed max-w-md mx-auto md:mx-0 text-sm">
            "Seorang pria yang mencintai kesederhanaan dan kehangatan keluarga. Berjanji untuk menjadi imam yang baik."
          </p>
          
          <div className="pt-4 flex justify-center md:justify-start">
            <a href="#" className="text-vintage-gold hover:text-vintage-brown transition-colors flex items-center gap-2 text-xs tracking-widest uppercase border-b border-transparent hover:border-vintage-brown pb-1">
                <Instagram size={16} /> @rizkybillar
            </a>
          </div>
        </motion.div>
      </div>

      {/* --- DIVIDER BUNGA --- */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex justify-center opacity-80"
      >
        <div className="w-12 h-12 relative">
             <Image src="/images/vintage/flower-corner.png" alt="divider" fill className="object-contain" />
        </div>
      </motion.div>

      {/* --- THE BRIDE (WANITA) --- */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
        {/* Foto Wanita */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative w-full md:w-1/2 flex justify-center md:justify-start"
        >
          <div className="relative w-64 h-[22rem] md:w-80 md:h-[28rem]">
            {/* REAL FLORAL FRAME OVERLAY */}
            <div className="absolute -inset-6 z-20 pointer-events-none">
                <Image 
                    src="/images/vintage/floral-frame.png" 
                    alt="Vintage Frame" 
                    fill 
                    className="object-contain scale-110"
                />
            </div>
            
            {/* Foto Wanita */}
            <div className="relative w-full h-full overflow-hidden rounded-[4rem] shadow-xl z-10 bg-vintage-brown/10">
               <Image 
                 src="/images/vintage/bride.png" 
                 alt="The Bride"
                 fill
                 className="object-cover sepia-[0.3] hover:sepia-0 transition-all duration-1000"
               />
            </div>
          </div>
        </motion.div>

        {/* Teks Wanita */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-center md:text-right space-y-4"
        >
          <h3 className="font-script text-5xl md:text-7xl text-vintage-brown">
            Lesti Kejora
          </h3>
          <p className="font-serif text-sm tracking-widest text-vintage-olive uppercase">
            Putri Kedua dari Bpk. Fulan & Ibu Fulanah
          </p>
          <p className="font-sans text-vintage-brown/80 leading-relaxed max-w-md mx-auto md:ml-auto text-sm">
            "Wanita penyabar yang selalu percaya bahwa cinta sejati itu tumbuh dari ketulusan hati."
          </p>
          
          <div className="pt-4 flex justify-center md:justify-end">
            <a href="#" className="text-vintage-gold hover:text-vintage-brown transition-colors flex items-center gap-2 text-xs tracking-widest uppercase border-b border-transparent hover:border-vintage-brown pb-1">
                @lestykejora <Instagram size={16} />
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}