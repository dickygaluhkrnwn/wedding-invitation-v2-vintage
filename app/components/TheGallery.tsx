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

  if (!gallery || gallery.length === 0) return null;

  return (
    <section className="w-full max-w-7xl mx-auto relative py-10">
      
      <div className="absolute top-0 right-0 w-40 h-40 opacity-40 pointer-events-none mix-blend-multiply z-0">
         <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain rotate-180" />
      </div>
      <div className="absolute bottom-0 left-0 w-40 h-40 opacity-40 pointer-events-none mix-blend-multiply z-0">
         <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="text-center mb-20 space-y-6 relative z-10"
      >
        <h2 className="font-serif text-4xl md:text-6xl text-vintage-brown uppercase tracking-widest">
          Galeri Momen
        </h2>
        <div className="flex justify-center items-center gap-4 opacity-60">
            <div className="h-[1px] w-12 bg-vintage-brown" />
            <div className="w-1.5 h-1.5 bg-vintage-brown rounded-full"></div>
            <div className="h-[1px] w-12 bg-vintage-brown" />
        </div>
        <p className="font-sans text-vintage-olive italic text-sm md:text-base max-w-lg mx-auto leading-relaxed px-4">
          "Merekam setiap detik kebahagiaan dalam bingkai kenangan abadi."
        </p>
      </motion.div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 px-4 md:px-12 relative z-10">
        {gallery.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1 : 1 }}
            whileHover={{ rotate: 0, scale: 1.02, zIndex: 20 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="break-inside-avoid mb-8 relative cursor-pointer group"
            onClick={() => setSelectedImg(src)}
          >
            <div className="relative bg-[#FDFBF7] p-3 pb-12 shadow-lg border border-vintage-brown/10 overflow-hidden">
                
                <div className="absolute inset-0 opacity-40 bg-paper-texture mix-blend-multiply pointer-events-none" />
                
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-vintage-gold/20 backdrop-blur-sm rotate-1 shadow-sm z-20" />

                <div className="relative w-full overflow-hidden bg-vintage-brown/5 filter sepia-[0.2] group-hover:sepia-0 transition-all duration-500">
                    <Image
                        src={src}
                        alt={`Gallery ${index + 1}`}
                        width={800}
                        height={1000} 
                        className="w-full h-auto object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(92,64,51,0.15)] pointer-events-none" />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-vintage-brown/10 backdrop-blur-[1px]">
                        <div className="bg-vintage-cream text-vintage-brown p-3 rounded-full shadow-xl transform scale-0 group-hover:scale-100 transition-transform duration-300">
                            <ZoomIn size={20} />
                        </div>
                    </div>
                </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-vintage-brown/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-6 right-6 text-vintage-cream hover:text-white transition-colors z-50 p-2 bg-white/10 rounded-full">
              <X size={32} strokeWidth={1.5} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-6xl w-full max-h-[90vh] flex justify-center items-center"
              onClick={(e) => e.stopPropagation()}
            >
                <div className="relative p-2 bg-white shadow-2xl rounded-sm overflow-hidden border border-white/20">
                    <img 
                        src={selectedImg} 
                        alt="Full Preview"
                        className="max-w-full max-h-[85vh] object-contain"
                    />
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}