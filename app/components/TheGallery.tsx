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
    <section className="py-24 px-6 w-full max-w-7xl mx-auto relative">
      
      {/* --- ORNAMEN SUDUT (Dekorasi) --- */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-30 pointer-events-none animate-float mix-blend-multiply">
         <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain rotate-180" />
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-30 pointer-events-none mix-blend-multiply">
         <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain" />
      </div>

      {/* --- JUDUL SECTION --- */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16 space-y-4 relative z-10"
      >
        <h2 className="font-serif text-4xl md:text-6xl text-vintage-brown uppercase tracking-widest">
          Galeri Momen
        </h2>
        <div className="flex justify-center items-center gap-4">
            <div className="h-[1px] w-12 bg-vintage-brown/50" />
            <Image src="/images/vintage/wax-seal.png" alt="icon" width={30} height={30} className="opacity-80" />
            <div className="h-[1px] w-12 bg-vintage-brown/50" />
        </div>
        <p className="font-sans text-vintage-olive italic text-sm max-w-lg mx-auto leading-relaxed">
          "Merekam setiap detik kebahagiaan dalam bingkai kenangan abadi."
        </p>
      </motion.div>

      {/* --- MASONRY LAYOUT --- */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 px-2 md:px-8">
        {gallery.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="break-inside-avoid group relative cursor-pointer mb-6"
            onClick={() => setSelectedImg(src)}
          >
            {/* Frame Foto (Efek Kertas Foto) */}
            <div className="p-2 bg-white shadow-md border border-vintage-brown/10 transform transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-xl">
                <div className="relative w-full overflow-hidden">
                    {/* Gambar dengan efek Sepia Halus */}
                    <Image
                        src={src}
                        alt={`Gallery ${index + 1}`}
                        width={800}
                        height={1200}
                        className="w-full h-auto object-cover sepia-[0.15] group-hover:sepia-0 transition-all duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Inner Shadow (Vignette) untuk kesan foto tua */}
                    <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(92,64,51,0.2)] pointer-events-none" />

                    {/* Icon Zoom saat Hover */}
                    <div className="absolute inset-0 bg-vintage-brown/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="bg-vintage-cream/90 p-3 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                            <ZoomIn className="text-vintage-brown" size={20} />
                        </div>
                    </div>
                </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- LIGHTBOX (Fullscreen Viewer) --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-vintage-brown/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-6 right-6 text-vintage-cream hover:text-white transition-colors z-50 p-2">
              <X size={40} strokeWidth={1.5} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-5xl max-h-[90vh] p-2 bg-white shadow-2xl rounded-sm"
              onClick={(e) => e.stopPropagation()}
            >
                {/* Container Gambar Utuh */}
                <div className="relative flex items-center justify-center overflow-hidden bg-black/5">
                    {/* Menggunakan tag img agar tidak perlu fix width/height */}
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