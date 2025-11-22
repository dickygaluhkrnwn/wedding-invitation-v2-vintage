"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

// Data Foto Dummy (Nanti ganti dengan path lokal kamu)
const memories = [
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop", rotate: "rotate-2", caption: "First Date" },
  { src: "https://images.unsplash.com/photo-1511285560982-1356c11d4606?q=80&w=800&auto=format&fit=crop", rotate: "-rotate-3", caption: "The Proposal" },
  { src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop", rotate: "rotate-1", caption: "Prewedding 1" },
  { src: "https://images.unsplash.com/photo-1520854221256-17451cc330e7?q=80&w=800&auto=format&fit=crop", rotate: "-rotate-2", caption: "Prewedding 2" },
  { src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=800&auto=format&fit=crop", rotate: "rotate-3", caption: "Our Journey" },
  { src: "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=800&auto=format&fit=crop", rotate: "-rotate-1", caption: "Forever" },
];

export default function TheGallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 w-full max-w-7xl mx-auto relative">
      
      {/* Judul Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 space-y-4"
      >
        <h2 className="font-serif text-3xl md:text-5xl text-vintage-brown uppercase tracking-widest">
          Kenangan Manis
        </h2>
        <div className="w-24 h-[2px] bg-vintage-gold mx-auto" />
        <p className="font-sans text-vintage-olive italic text-sm">
          "Setiap detik bersamamu adalah memori yang tak ingin kulupakan."
        </p>
      </motion.div>

      {/* --- SCRAPBOOK GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-4">
        {memories.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05, 
              rotate: 0, 
              zIndex: 10,
              transition: { duration: 0.3 } 
            }}
            className={`relative group cursor-pointer p-3 pb-12 bg-white shadow-lg border border-gray-200 transform ${item.rotate} transition-all duration-500`}
            onClick={() => setSelectedImg(item.src)}
          >
            {/* Efek Tape (Selotip) di atas foto - Opsional */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-yellow-100/50 rotate-1 opacity-80 z-20 shadow-sm backdrop-blur-[1px]" />

            {/* Bingkai Foto */}
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100">
              <Image
                src={item.src}
                alt={`Memory ${index + 1}`}
                fill
                className="object-cover sepia-[0.4] group-hover:sepia-0 transition-all duration-500"
              />
              
              {/* Overlay Icon */}
              <div className="absolute inset-0 bg-vintage-brown/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <ZoomIn className="text-white drop-shadow-md" size={32} />
              </div>
            </div>

            {/* Caption Tulisan Tangan */}
            <div className="absolute bottom-2 left-0 w-full text-center">
              <p className="font-script text-2xl text-vintage-brown/80">
                {item.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* LIGHTBOX (Popup) */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-vintage-brown/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-6 right-6 text-vintage-cream hover:text-white transition-colors bg-white/10 p-2 rounded-full">
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.8, rotate: -2 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, rotate: 2 }}
              className="relative w-full max-w-4xl max-h-[85vh] p-4 bg-white shadow-2xl rounded-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[60vh] md:h-[80vh]">
                <Image 
                  src={selectedImg}
                  alt="Full Size"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}