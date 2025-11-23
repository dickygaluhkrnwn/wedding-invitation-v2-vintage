"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar } from 'lucide-react';
import VintageCountdown from './VintageCountdown';
import { InvitationData } from '@/lib/invitation';

interface TheEventProps {
  event: InvitationData['event'];
}

export default function TheEvent({ event }: TheEventProps) {
  // Convert Timestamp Firestore ke Date Object
  const eventDate = new Date(event.date.seconds * 1000);

  return (
    <section className="py-24 px-6 w-full max-w-7xl mx-auto space-y-20 bg-vintage-cream relative">
      
      {/* Background Texture Tambahan (Optional) */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-vintage-brown/5 to-transparent pointer-events-none" />

      {/* --- JUDUL SECTION --- */}
      <div className="text-center space-y-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-3"
        >
          {/* Menggunakan wax-seal.png untuk icon judul */}
          <Image src="/images/vintage/wax-seal.png" alt="seal" width={40} height={40} className="opacity-80" />
          <h2 className="font-serif text-4xl md:text-6xl text-vintage-brown uppercase tracking-widest border-b-2 border-vintage-gold/50 pb-4 px-8">
            Save The Date
          </h2>
        </motion.div>

        <p className="font-sans text-vintage-olive max-w-xl mx-auto leading-relaxed italic">
          "Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami merangkaikan kasih sayang yang Kau ciptakan di antara kami."
        </p>
      </div>

      {/* --- COUNTDOWN DINAMIS --- */}
      <VintageCountdown targetDate={eventDate} />

      {/* --- CARDS CONTAINER --- */}
      <div className="grid md:grid-cols-2 gap-12 pt-8 relative z-10">
        
        {/* KARTU 1: AKAD NIKAH */}
        <VintageCard 
          title="Akad Nikah"
          time={event.akadTime}
          location={event.akadLocation}
          address={event.akadAddress}
          delay={0.2}
          mapsUrl={event.akadMapsUrl}
        />

        {/* KARTU 2: RESEPSI */}
        <VintageCard 
          title="Resepsi"
          time={event.resepsiTime}
          location={event.resepsiLocation}
          address={event.resepsiAddress}
          delay={0.4}
          mapsUrl={event.resepsiMapsUrl}
        />

      </div>

    </section>
  );
}

// --- KOMPONEN KARTU VINTAGE (Ticket Style) ---
function VintageCard({ title, time, location, address, delay, mapsUrl }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Card Container dengan Shadow Realistis */}
      <div className="relative bg-[#f9f7f2] p-1 shadow-xl transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
        
        {/* Border Dekoratif */}
        <div className="h-full w-full border border-vintage-brown/20 p-1">
            <div className="h-full w-full border border-vintage-brown/60 p-8 md:p-10 flex flex-col items-center text-center relative overflow-hidden bg-white/50">
                
                {/* Texture Overlay pada Kartu */}
                <div className="absolute inset-0 opacity-40 bg-paper-texture mix-blend-multiply pointer-events-none" />

                {/* Ornamen Bunga Sudut */}
                <div className="absolute top-0 left-0 w-20 h-20 opacity-20 pointer-events-none">
                    <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain" />
                </div>
                <div className="absolute bottom-0 right-0 w-20 h-20 opacity-20 pointer-events-none">
                    <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain rotate-180" />
                </div>

                {/* Judul Acara */}
                <h3 className="font-script text-5xl md:text-6xl text-vintage-brown mb-6 drop-shadow-sm relative z-10">
                    {title}
                </h3>

                {/* Waktu & Icon */}
                <div className="flex items-center gap-3 mb-6 text-vintage-brown/80 relative z-10 bg-vintage-gold/10 px-4 py-1 rounded-full">
                    <Clock size={16} className="text-vintage-gold" />
                    <p className="font-serif text-lg tracking-widest font-bold">{time}</p>
                </div>

                <div className="w-16 h-[1px] bg-vintage-brown/30 mb-6" />

                {/* Lokasi */}
                <div className="space-y-2 relative z-10">
                    <p className="font-serif text-xl text-vintage-brown font-bold uppercase tracking-wide">
                        {location}
                    </p>
                    <p className="font-sans text-sm text-vintage-olive leading-relaxed px-4 max-w-xs mx-auto">
                        {address}
                    </p>
                </div>

                {/* Tombol Maps Dinamis */}
                <a 
                    href={mapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-8 px-6 py-2 border border-vintage-brown/40 text-[10px] tracking-[0.2em] uppercase hover:bg-vintage-brown hover:text-vintage-cream transition-colors duration-300 inline-flex items-center gap-2 relative z-10 group/btn"
                >
                    <MapPin size={14} className="group-hover/btn:scale-110 transition-transform" /> 
                    Lihat Lokasi
                </a>

            </div>
        </div>
      </div>
    </motion.div>
  );
}