"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar, Ticket } from 'lucide-react';
import VintageCountdown from './VintageCountdown';
import { InvitationData } from '@/lib/invitation';

interface TheEventProps {
  event: InvitationData['event'];
}

export default function TheEvent({ event }: TheEventProps) {
  const eventDate = new Date(event.date.seconds * 1000);

  // Base64 Noise Pattern (Sama seperti TheIntro agar konsisten)
  const noisePattern = `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEHb29v///8AAABOmZnDw8O+vr6urq6hoaG7j36HAAAACHRSTlMAM8T/mZkzM4Vj3DIAAAArSURBVDjLY2AYBaNgFIyCUTAKRsEoGAWjYBSMglEwCkbBKBgFo2AUjIIhAQA9bATXt91HzAAAAABJRU5ErkJggg==")`;

  return (
    <section className="w-full max-w-7xl mx-auto space-y-16 relative overflow-hidden py-20">
      
      {/* Ornamen Sudut Halaman */}
      <div className="absolute -left-24 top-1/4 w-80 h-80 opacity-20 pointer-events-none mix-blend-multiply">
         <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain rotate-90" />
      </div>
      <div className="absolute -right-24 bottom-1/4 w-80 h-80 opacity-20 pointer-events-none mix-blend-multiply">
         <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain -rotate-90" />
      </div>

      {/* Judul Section */}
      <div className="text-center space-y-8 relative z-10 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-2 h-2 bg-vintage-gold rounded-full mb-2 animate-pulse"></div>
          
          <h2 className="font-serif text-4xl md:text-6xl text-vintage-brown uppercase tracking-[0.2em] relative inline-block py-4">
            <span className="relative z-10">Save The Date</span>
            {/* Garis bawah dekoratif */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-vintage-gold to-transparent" />
          </h2>
        </motion.div>

        <p className="font-sans text-vintage-olive/90 max-w-2xl mx-auto leading-loose italic text-sm md:text-base px-4">
          "Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami merangkaikan kasih sayang yang Kau ciptakan di antara kami."
        </p>
      </div>

      {/* Countdown */}
      <div className="relative z-10 mb-12">
        <VintageCountdown targetDate={eventDate} />
      </div>

      {/* GRID TIKET VINTAGE */}
      <div className="grid lg:grid-cols-2 gap-10 px-4 md:px-12 relative z-10">
        <TicketCard 
          type="Akad Nikah"
          time={event.akadTime}
          location={event.akadLocation}
          address={event.akadAddress}
          date={eventDate}
          mapsUrl={event.akadMapsUrl}
          delay={0.2}
          noise={noisePattern}
          code="AKAD-VIP"
        />
        <TicketCard 
          type="Resepsi"
          time={event.resepsiTime}
          location={event.resepsiLocation}
          address={event.resepsiAddress}
          date={eventDate}
          mapsUrl={event.resepsiMapsUrl}
          delay={0.4}
          noise={noisePattern}
          code="RCPT-GST"
        />
      </div>

    </section>
  );
}

// KOMPONEN KARTU TIKET BARU
function TicketCard({ type, time, location, address, date, mapsUrl, delay, noise, code }: any) {
  const formattedDate = date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }).toUpperCase();

  return (
    <motion.div 
      initial={{ opacity: 0, x: delay === 0.2 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay, type: "spring", bounce: 0.3 }}
      viewport={{ once: true }}
      className="w-full filter drop-shadow-2xl"
    >
      {/* BENTUK TIKET: Menggunakan Flex Row (Desktop) / Col (Mobile) */}
      <div className="flex flex-col md:flex-row w-full bg-[#F2E8D5] rounded-lg overflow-hidden relative group">
        
        {/* --- GLOBAL TEXTURE (Diaplikasikan ke seluruh tiket) --- */}
        <div 
            className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-multiply"
            style={{ backgroundImage: noise, backgroundSize: '100px 100px' }}
        />
        
        {/* Efek Kertas Kotor (Vignette) */}
        <div className="absolute inset-0 z-0 pointer-events-none shadow-[inset_0_0_40px_rgba(92,64,51,0.1)]" />

        {/* --- BAGIAN KIRI (MAIN INFO) --- */}
        <div className="flex-1 p-8 md:p-10 relative border-b-2 md:border-b-0 md:border-r-2 border-dashed border-vintage-brown/30 flex flex-col justify-between min-h-[280px]">
            
            {/* Header Tiket */}
            <div className="flex justify-between items-start mb-6">
                <div className="border border-vintage-brown/30 px-3 py-1 rounded-sm">
                    <span className="font-mono text-xs tracking-widest text-vintage-brown uppercase font-bold">ADMIT ONE</span>
                </div>
                <Ticket size={20} className="text-vintage-gold opacity-80" />
            </div>

            {/* Konten Utama */}
            <div className="space-y-4 relative z-10">
                <h3 className="font-script text-5xl md:text-6xl text-vintage-brown leading-none">{type}</h3>
                
                <div className="flex flex-col gap-3 pt-2">
                    <div className="flex items-center gap-3 text-vintage-brown">
                        <Calendar size={16} className="shrink-0 opacity-70" />
                        <span className="font-mono text-sm md:text-base font-bold tracking-wider">{formattedDate}</span>
                    </div>
                    <div className="flex items-center gap-3 text-vintage-brown">
                        <Clock size={16} className="shrink-0 opacity-70" />
                        <span className="font-mono text-sm md:text-base font-bold tracking-wider">{time}</span>
                    </div>
                </div>
            </div>

            {/* Lokasi (Bawah Kiri) */}
            <div className="mt-8 pt-6 border-t border-vintage-brown/10">
                <p className="font-serif text-lg font-bold text-vintage-brown uppercase tracking-wide line-clamp-1">{location}</p>
                <p className="font-sans text-xs text-vintage-olive mt-1 line-clamp-2">{address}</p>
            </div>

            {/* NOTCH (Lubang Sobekan) */}
            {/* Mobile: Kiri Bawah & Kanan Bawah dari garis horizontal */}
            <div className="md:hidden absolute -bottom-3 -left-2 w-6 h-6 bg-vintage-cream rounded-full z-20 shadow-inner" />
            <div className="md:hidden absolute -bottom-3 -right-2 w-6 h-6 bg-vintage-cream rounded-full z-20 shadow-inner" />
            
            {/* Desktop: Atas Kanan & Bawah Kanan dari garis vertikal */}
            <div className="hidden md:block absolute -top-3 -right-3 w-6 h-6 bg-vintage-cream rounded-full z-20 shadow-inner" />
            <div className="hidden md:block absolute -bottom-3 -right-3 w-6 h-6 bg-vintage-cream rounded-full z-20 shadow-inner" />
        </div>

        {/* --- BAGIAN KANAN (STUB / TOMBOL) --- */}
        <div className="w-full md:w-48 bg-[#ebe0c5] p-6 flex flex-col items-center justify-center gap-6 relative">
            
            {/* Texture Stub (Sedikit lebih gelap) */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-10 bg-black mix-blend-overlay" />

            {/* Rotated Text decoration */}
            <div className="absolute top-4 right-4 md:left-4 md:right-auto md:top-1/2 md:-translate-y-1/2 md:-rotate-90 origin-center opacity-20 whitespace-nowrap pointer-events-none">
                <span className="font-mono text-[10px] tracking-[0.5em] uppercase">OFFICIAL INVITATION</span>
            </div>

            {/* Kode Unik */}
            <div className="font-mono text-2xl md:text-3xl font-bold text-vintage-brown/20 tracking-widest -rotate-90 md:rotate-0 absolute md:static left-4 top-1/2 -translate-y-1/2 md:translate-y-0 pointer-events-none">
                {code}
            </div>

            {/* Barcode Simulation */}
            <div className="h-8 w-full flex justify-center gap-[2px] opacity-40 mix-blend-multiply">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="bg-vintage-brown h-full" style={{ width: Math.random() > 0.5 ? '2px' : '4px' }}></div>
                ))}
            </div>

            {/* Tombol Lokasi */}
            <a 
                href={mapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative z-10 group/btn flex flex-col items-center gap-2 text-vintage-brown hover:text-vintage-gold transition-colors"
            >
                <div className="w-12 h-12 rounded-full border-2 border-vintage-brown group-hover/btn:border-vintage-gold flex items-center justify-center transition-all bg-[#F2E8D5] shadow-md group-hover/btn:scale-110">
                    <MapPin size={20} />
                </div>
                <span className="font-sans text-[10px] font-bold tracking-widest uppercase border-b border-transparent group-hover/btn:border-vintage-gold">
                    Maps
                </span>
            </a>
        </div>

      </div>
    </motion.div>
  );
}