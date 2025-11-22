"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

// Menerima props gallery (array URL) dari InvitationClient
interface TheGalleryProps {
  gallery: string[]; 
}

export default function TheGallery({ gallery }: TheGalleryProps) {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // Jika tidak ada foto, sembunyikan section
  if (!gallery || gallery.length === 0) return null;

  return (
    <section className="py-24 px-6 w-full max-w-7xl mx-auto relative">
      
      {/* Ornamen Bunga Gantung (Animasi Float) */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none animate-float">
         <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain rotate-180" />
      </div>

      {/* Judul Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16 space-y-4 relative z-10"
      >
        <h2 className="font-serif text-3xl md:text-5xl text-vintage-brown uppercase tracking-widest">
          Galeri Momen
        </h2>
        <div className="flex justify-center items-center gap-4">
            <div className="h-[1px] w-12 bg-vintage-gold/50" />
            <Image src="/images/vintage/wax-seal.png" alt="icon" width={24} height={24} className="opacity-60" />
            <div className="h-[1px] w-12 bg-vintage-gold/50" />
        </div>
        <p className="font-sans text-vintage-olive italic text-sm max-w-lg mx-auto">
          "Merekam setiap detik kebahagiaan dalam bingkai kenangan abadi."
        </p>
      </motion.div>

      {/* --- MASONRY LAYOUT (Solusi untuk Zoom/Crop Issue) --- */}
      {/* columns-1 (HP), columns-2 (Tablet), columns-3 (PC) */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 px-2 md:px-8">
        {gallery.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            // break-inside-avoid: Mencegah gambar terpotong antar kolom
            className="break-inside-avoid group relative cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 mb-6"
            onClick={() => setSelectedImg(src)}
          >
            {/* Image Container - Tanpa fixed aspect ratio agar natural */}
            <div className="relative w-full">
              <Image
                src={src}
                alt={`Gallery ${index + 1}`}
                width={800}
                height={1200} // Aspect ratio bebas, Next/Image akan menyesuaikan
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Elegant Overlay saat Hover */}
              <div className="absolute inset-0 bg-vintage-brown/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full border border-white/50 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <ZoomIn className="text-white" size={24} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* LIGHTBOX (Fullscreen Viewer) */}
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
            <button className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:rotate-90 duration-300 z-50">
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Container Gambar Utuh di Lightbox */}
              <div className="relative w-auto h-auto max-w-full max-h-[85vh] shadow-2xl border-4 border-white/10 rounded-sm overflow-hidden">
                {/* Menggunakan tag img biasa di lightbox agar resolusi asli & aspek rasio terjaga sempurna */}
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