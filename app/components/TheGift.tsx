"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Gift, CreditCard } from 'lucide-react';
import { InvitationData } from '@/lib/invitation';

interface TheGiftProps {
  gift: InvitationData['gift'];
}

export default function TheGift({ gift }: TheGiftProps) {
  return (
    <section className="py-24 px-6 w-full max-w-5xl mx-auto mb-24 relative">
      
      {/* --- JUDUL --- */}
      <div className="text-center mb-16 space-y-6 relative z-10">
        <div className="flex justify-center">
             <Gift size={32} className="text-vintage-gold mb-2 opacity-80" />
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-vintage-brown uppercase tracking-widest">
          Tanda Kasih
        </h2>
        <div className="w-16 h-[2px] bg-vintage-gold mx-auto" />
        <p className="font-sans text-vintage-olive italic text-sm max-w-md mx-auto leading-relaxed">
          "Tanpa mengurangi rasa hormat, bagi Anda yang ingin memberikan tanda kasih, dapat melalui:"
        </p>
      </div>

      {/* --- CONTAINER KARTU --- */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 px-4">
        {/* Render hanya jika data bank ada */}
        {gift.bank1Name && gift.bank1Number && (
            <BankCard 
                bank={gift.bank1Name} 
                number={gift.bank1Number} 
                name={gift.bank1Holder} 
                delay={0}
                variant="dark" // Variasi warna kartu
            />
        )}
        {gift.bank2Name && gift.bank2Number && (
            <BankCard 
                bank={gift.bank2Name} 
                number={gift.bank2Number} 
                name={gift.bank2Holder} 
                delay={0.2}
                variant="light"
            />
        )}
      </div>

    </section>
  );
}

function BankCard({ bank, number, name, delay, variant }: any) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
             navigator.clipboard.writeText(number).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
             }).catch((err) => console.error("Gagal copy:", err));
        } else {
             const textArea = document.createElement("textarea");
             textArea.value = number;
             document.body.appendChild(textArea);
             textArea.select();
             try {
                document.execCommand("copy");
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
             } catch (err) {
                console.error("Fallback copy gagal", err);
             }
             document.body.removeChild(textArea);
        }
    };

    // Style Varian Kartu
    const cardStyle = variant === 'dark' 
        ? "bg-[#2a2420] text-[#eaddcf] border-vintage-gold/30" 
        : "bg-[#eaddcf] text-[#5c4033] border-vintage-brown/30";

    const chipColor = variant === 'dark' ? "bg-vintage-gold/40" : "bg-[#d4c5b0]";

    return (
        <motion.div 
            initial={{ opacity: 0, y: 40, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay, duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="group perspective-1000"
        >
            {/* Kartu Fisik */}
            <div className={`relative aspect-[1.586/1] rounded-xl shadow-2xl overflow-hidden border ${cardStyle} transform transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1`}>
                
                {/* Noise Texture Overlay */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay pointer-events-none" />
                
                {/* Ornamen Melengkung */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />

                <div className="p-6 md:p-8 flex flex-col justify-between h-full relative z-10">
                    {/* Header: Bank Name & Chip */}
                    <div className="flex justify-between items-start">
                        <h3 className="font-serif text-2xl font-bold tracking-wider uppercase opacity-90">
                            {bank}
                        </h3>
                        {/* Chip Sim */}
                        <div className={`w-10 h-8 ${chipColor} rounded-md border border-white/10 flex items-center justify-center opacity-80`}>
                            <div className="w-full h-[1px] bg-black/10" />
                        </div>
                    </div>

                    {/* Body: Nomor Rekening (Embossed Effect) */}
                    <div className="space-y-1">
                        <p className="text-[10px] uppercase tracking-[0.2em] opacity-60">Nomor Rekening</p>
                        <div className="flex items-center gap-4">
                            <p className="font-mono text-xl md:text-2xl tracking-widest font-bold text-shadow-sm">
                                {number}
                            </p>
                            <button 
                                onClick={handleCopy}
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
                                title="Salin Nomor"
                            >
                                <AnimatePresence mode='wait'>
                                    {copied ? (
                                        <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                                            <Check size={14} />
                                        </motion.div>
                                    ) : (
                                        <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                                            <Copy size={14} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>
                    </div>

                    {/* Footer: Nama Pemilik */}
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-[8px] uppercase tracking-widest opacity-60 mb-1">Pemilik Rekening</p>
                            <p className="font-serif text-sm md:text-base tracking-wide uppercase font-bold opacity-90">
                                {name}
                            </p>
                        </div>
                        <CreditCard size={24} className="opacity-40" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}