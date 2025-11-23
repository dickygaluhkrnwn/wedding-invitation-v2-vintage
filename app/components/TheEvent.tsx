"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';
import VintageCountdown from './VintageCountdown';
import { InvitationData } from '@/lib/invitation';

interface TheEventProps {
  event: InvitationData['event'];
}

export default function TheEvent({ event }: TheEventProps) {
  const eventDate = new Date(event.date.seconds * 1000);

  return (
    <section className="w-full max-w-7xl mx-auto space-y-20 relative overflow-hidden">
      
      <div className="absolute -left-20 top-1/3 w-64 h-64 opacity-30 pointer-events-none mix-blend-multiply">
         <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain rotate-90" />
      </div>
      <div className="absolute -right-20 bottom-1/3 w-64 h-64 opacity-30 pointer-events-none mix-blend-multiply">
         <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain -rotate-90" />
      </div>

      <div className="text-center space-y-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          {/* HAPUS WAX SEAL */}
          <div className="w-1.5 h-1.5 bg-vintage-gold rounded-full mb-2"></div>
          
          <h2 className="font-serif text-4xl md:text-6xl text-vintage-brown uppercase tracking-[0.2em] relative inline-block py-4">
            <span className="relative z-10">Save The Date</span>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-vintage-gold" />
          </h2>
        </motion.div>

        <p className="font-sans text-vintage-olive/90 max-w-2xl mx-auto leading-loose italic text-sm md:text-base px-4">
          "Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami merangkaikan kasih sayang yang Kau ciptakan di antara kami."
        </p>
      </div>

      <div className="relative z-10">
        <VintageCountdown targetDate={eventDate} />
      </div>

      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 pt-8 relative z-10 px-2 md:px-8">
        <VintageCard 
          title="Akad Nikah"
          time={event.akadTime}
          location={event.akadLocation}
          address={event.akadAddress}
          delay={0.2}
          mapsUrl={event.akadMapsUrl}
        />
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

function VintageCard({ title, time, location, address, delay, mapsUrl }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay, type: "spring", stiffness: 50 }}
      viewport={{ once: true }}
      className="group w-full"
    >
      <div className="relative w-full bg-[#F9F7F2] shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_20px_40px_rgb(92,64,51,0.15)] hover:-translate-y-1 overflow-hidden rounded-sm">
        
        <div className="absolute inset-0 opacity-50 bg-paper-texture mix-blend-multiply pointer-events-none" />

        <div className="absolute inset-2 border border-vintage-brown/10 pointer-events-none z-20" />
        <div className="absolute inset-3 border border-vintage-brown/5 pointer-events-none z-20" />

        <div className="absolute top-0 left-0 w-16 h-16 border-t-[3px] border-l-[3px] border-vintage-gold/30 rounded-tl-lg z-20" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-[3px] border-r-[3px] border-vintage-gold/30 rounded-br-lg z-20" />

        <div className="relative p-10 md:p-12 flex flex-col items-center text-center h-full justify-between bg-white/40 backdrop-blur-sm">
            
            <div className="relative z-10 space-y-6 w-full">
                <div className="flex items-center justify-center gap-4">
                    <div className="h-[1px] w-8 bg-vintage-brown/20" />
                    <h3 className="font-script text-5xl md:text-6xl text-vintage-brown drop-shadow-sm">
                        {title}
                    </h3>
                    <div className="h-[1px] w-8 bg-vintage-brown/20" />
                </div>

                <div className="inline-flex items-center gap-3 px-6 py-2 bg-vintage-brown/5 rounded-full border border-vintage-brown/10">
                    <Clock size={14} className="text-vintage-gold" />
                    <p className="font-serif text-base md:text-lg tracking-[0.15em] font-bold text-vintage-brown">
                        {time}
                    </p>
                </div>
            </div>

            <div className="relative z-10 my-8 space-y-3 w-full">
                <p className="font-serif text-lg md:text-xl text-vintage-brown font-bold uppercase tracking-wide leading-relaxed border-b border-dashed border-vintage-brown/20 pb-4 mx-4">
                    {location}
                </p>
                <p className="font-sans text-sm text-vintage-olive leading-relaxed px-4 pt-2 max-w-xs mx-auto">
                    {address}
                </p>
            </div>

            <div className="relative z-10 mt-auto pt-4">
                <a 
                    href={mapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-3 px-8 py-3 border border-vintage-brown text-vintage-brown text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase hover:bg-vintage-brown hover:text-vintage-cream transition-all duration-300 rounded-sm relative overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        <MapPin size={14} className="transition-transform group-hover/btn:-translate-y-0.5" /> 
                        Lihat Lokasi
                    </span>
                </a>
            </div>

        </div>
      </div>
    </motion.div>
  );
}