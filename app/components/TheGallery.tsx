"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

interface TheGalleryProps {
  gallery: string[]; 
}

export default function TheGallery({ gallery }: TheGalleryProps) {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // Base64 Noise Pattern
  const noisePattern = `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEHb29v///8AAABOmZnDw8O+vr6urq6hoaG7j36HAAAACHRSTlMAM8T/mZkzM4Vj3DIAAAArSURBVDjLY2AYBaNgFIyCUTAKRsEoGAWjYBSMglEwCkbBKBgFo2AUjIIhAQA9bATXt91HzAAAAABJRU5ErkJggg==")`;

  if (!gallery || gallery.length === 0) return null;

  return (
    <section className="w-full max-w-7xl mx-auto relative py-20 overflow-hidden">
      
      {/* Ornamen Latar */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-30 pointer-events-none mix-blend-multiply z-0">
         <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain rotate-180" />
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-30 pointer-events-none mix-blend-multiply z-0">
         <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain" />
      </div>

      {/* Judul Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="text-center mb-24 space-y-6 relative z-10 px-4"
      >
        <div className="relative inline-block">
            <h2 className="font-serif text-4xl md:text-6xl text-vintage-brown uppercase tracking-widest relative z-10">
            Galeri Momen
            </h2>
            {/* Garis bawah dekoratif */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-vintage-brown/30" />
            <div className="absolute bottom-1 left-0 w-full h-[1px] bg-vintage-brown/10" />
        </div>

        <div className="flex justify-center items-center gap-4 opacity-60">
            <div className="h-[1px] w-12 bg-vintage-brown" />
            <div className="w-1.5 h-1.5 bg-vintage-brown rounded-full"></div>
            <div className="h-[1px] w-12 bg-vintage-brown" />
        </div>
        <p className="font-sans text-vintage-olive italic text-sm md:text-base max-w-lg mx-auto leading-relaxed px-4">
          "Merekam setiap detik kebahagiaan dalam bingkai kenangan abadi."
        </p>
      </motion.div>

      {/* Grid Foto Scrapbook */}
      {/* FIX: pb-20 untuk memberi ruang nafas di bawah agar foto terakhir tidak terpotong */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 px-6 md:px-12 relative z-10 pb-20">
        {gallery.map((src, index) => {
            // Rotasi acak statis
            const rotation = index % 2 === 0 ? '-rotate-1' : 'rotate-1';
            // Warna selotip
            const tapeColor = index % 3 === 0 ? 'bg-white/40' : 'bg-[#f0e6d2]/60';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                // Hapus rotate dari wrapper motion div agar layout flow lurus
                whileHover={{ scale: 1.02, zIndex: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                // FIX: 
                // 1. break-inside-avoid: Wajib buat masonry
                // 2. mb-12: Jarak antar item diperbesar
                // 3. inline-block w-full align-top: Fix standar masonry CSS
                className="break-inside-avoid mb-12 w-full inline-block align-top relative cursor-pointer group z-10 hover:z-30"
                onClick={() => setSelectedImg(src)}
              >
                {/* Rotasi dipindah ke INNER DIV ini supaya wrapper tetap lurus */}
                <div className={`relative bg-white p-3 pb-12 shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-gray-200 transform transition-transform duration-500 group-hover:shadow-2xl ${rotation} group-hover:rotate-0`}>
                    
                    {/* Texture Kertas Foto */}
                    <div className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none z-10" style={{ backgroundImage: noisePattern }} />
                    
                    {/* Selotip Atas (Tape) */}
                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-8 ${tapeColor} backdrop-blur-sm rotate-1 shadow-sm z-20 border-l border-r border-white/20`} />

                    <div className="relative w-full overflow-hidden filter sepia-[0.15] group-hover:sepia-0 transition-all duration-700 ease-in-out bg-gray-100">
                        <Image
                            src={src}
                            alt={`Gallery ${index + 1}`}
                            width={800}
                            height={1000} 
                            className="w-full h-auto object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        
                        {/* Inner Shadow Vignette */}
                        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] pointer-events-none z-10" />
                        
                        {/* Hover Overlay Icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10 backdrop-blur-[1px] z-20">
                            <div className="bg-white/90 text-vintage-brown p-3 rounded-full shadow-xl transform scale-0 group-hover:scale-100 transition-transform duration-300 border border-vintage-brown/10">
                                <ZoomIn size={24} strokeWidth={1.5} />
                            </div>
                        </div>
                    </div>

                    {/* Caption Tulisan Tangan */}
                    <div className="absolute bottom-3 left-0 w-full text-center z-20">
                        <p className="font-script text-2xl text-vintage-brown/80 transform -rotate-1">
                           Kenangan #{index + 1}
                        </p>
                    </div>
                </div>
              </motion.div>
            );
        })}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-vintage-brown/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-6 right-6 text-[#F2E8D5] hover:text-white transition-colors z-50 p-2 bg-white/10 rounded-full border border-white/20">
              <X size={32} strokeWidth={1.5} />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex justify-center items-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
                <div className="relative p-3 bg-white shadow-2xl rounded-sm overflow-hidden">
                    <img 
                        src={selectedImg} 
                        alt="Full Preview"
                        className="max-w-full max-h-[85vh] object-contain shadow-lg"
                    />
                    {/* Texture halus di atas full preview */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply" style={{ backgroundImage: noisePattern }} />
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}