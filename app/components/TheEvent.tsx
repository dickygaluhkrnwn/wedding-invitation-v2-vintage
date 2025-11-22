"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';
import VintageCountdown from './VintageCountdown';

export default function TheEvent() {
  return (
    <section className="py-24 px-6 w-full max-w-7xl mx-auto space-y-20 bg-vintage-cream relative">
      
      {/* Background Texture Tambahan (Optional) */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-vintage-brown/5 to-transparent pointer-events-none" />

      {/* --- JUDUL SECTION --- */}
      <div className="text-center space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-3"
        >
          <Image src="/images/vintage/wax-seal.png" alt="seal" width={40} height={40} className="opacity-80" />
          <h2 className="font-serif text-3xl md:text-5xl text-vintage-brown uppercase tracking-widest border-b-2 border-vintage-gold/50 pb-4 px-8">
            Save The Date
          </h2>
        </motion.div>

        <p className="font-sans text-vintage-olive max-w-xl mx-auto leading-relaxed italic">
          "Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami merangkaikan kasih sayang yang Kau ciptakan di antara kami."
        </p>
      </div>

      {/* --- COUNTDOWN --- */}
      <VintageCountdown />

      {/* --- CARDS CONTAINER --- */}
      <div className="grid md:grid-cols-2 gap-12 pt-8">
        
        {/* KARTU 1: AKAD NIKAH */}
        <VintageCard 
          title="Akad Nikah"
          time="08:00 - 10:00 WIB"
          location="Masjid Agung Al-Azhar"
          address="Jl. Sisingamangaraja, Kebayoran Baru, Jakarta Selatan"
          imgPattern="opacity-10"
          delay={0.2}
        />

        {/* KARTU 2: RESEPSI */}
        <VintageCard 
          title="Resepsi"
          time="11:00 - 13:00 WIB"
          location="Glass House Ballroom"
          address="Jl. Sudirman Kav 52-53, Jakarta Selatan"
          imgPattern="opacity-10"
          delay={0.4}
        />

      </div>

      {/* Peta Button */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center pt-8"
      >
        <a 
          href="https://goo.gl/maps/placeholder" 
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex flex-col items-center gap-2"
        >
          <div className="w-12 h-12 rounded-full border border-vintage-brown flex items-center justify-center group-hover:bg-vintage-brown group-hover:text-vintage-cream transition-all duration-500">
            <MapPin size={20} />
          </div>
          <span className="font-serif text-xs tracking-[0.2em] uppercase border-b border-transparent group-hover:border-vintage-brown transition-all">
            Lihat Lokasi Google Maps
          </span>
        </a>
      </motion.div>

    </section>
  );
}

// --- KOMPONEN KARTU VINTAGE ---
function VintageCard({ title, time, location, address, delay }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay }}
      viewport={{ once: true }}
      className="relative p-2 bg-[#f4f1ea] shadow-lg transform hover:-translate-y-2 transition-transform duration-500"
    >
      {/* Efek Double Border (Bingkai Ganda) */}
      <div className="h-full w-full border border-vintage-brown/20 p-1">
        <div className="h-full w-full border border-vintage-brown/60 p-8 md:p-12 flex flex-col items-center text-center relative overflow-hidden">
            
            {/* Ornamen Bunga Sudut (Transparan) */}
            <div className="absolute top-0 left-0 w-20 h-20 opacity-10 pointer-events-none">
                <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain" />
            </div>
            <div className="absolute bottom-0 right-0 w-20 h-20 opacity-10 pointer-events-none">
                <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain rotate-180" />
            </div>

            <h3 className="font-script text-4xl md:text-5xl text-vintage-brown mb-6">
                {title}
            </h3>

            {/* Waktu yang menonjol */}
            <div className="flex items-center gap-3 mb-6 text-vintage-gold">
                <Clock size={18} />
                <p className="font-serif text-xl tracking-widest">{time}</p>
            </div>

            <div className="w-12 h-[1px] bg-vintage-brown/30 mb-6" />

            <div className="space-y-2">
                <p className="font-serif text-lg text-vintage-brown font-bold uppercase tracking-wide">
                    {location}
                </p>
                <p className="font-sans text-sm text-vintage-olive leading-relaxed px-4">
                    {address}
                </p>
            </div>

            {/* Tombol Simpan (Outline) */}
            <button className="mt-8 px-6 py-2 border border-vintage-brown/40 text-[10px] tracking-[0.2em] uppercase hover:bg-vintage-brown hover:text-vintage-cream transition-colors duration-300">
                Simpan Tanggal
            </button>

        </div>
      </div>
    </motion.div>
  );
}