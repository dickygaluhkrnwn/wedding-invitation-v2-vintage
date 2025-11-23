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
    <section className="w-full max-w-5xl mx-auto mb-24 relative py-16">
      
      <div className="text-center mb-20 space-y-6 relative z-10 px-6">
        <div className="flex justify-center">
             <div className="p-3 bg-vintage-brown/5 rounded-full border border-vintage-brown/10">
                <Gift size={28} className="text-vintage-gold opacity-90" />
             </div>
        </div>
        <h2 className="font-serif text-4xl md:text-6xl text-vintage-brown uppercase tracking-widest">
          Tanda Kasih
        </h2>
        <div className="flex justify-center items-center gap-4 opacity-60">
            <div className="h-[1px] w-12 bg-vintage-brown" />
            <div className="w-1.5 h-1.5 bg-vintage-brown rounded-full"></div>
            <div className="h-[1px] w-12 bg-vintage-brown" />
        </div>
        <p className="font-sans text-vintage-olive italic text-sm md:text-base max-w-md mx-auto leading-relaxed">
          "Tanpa mengurangi rasa hormat, bagi Anda yang ingin memberikan tanda kasih, dapat melalui:"
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-16 px-6 md:px-12">
        {gift.bank1Name && gift.bank1Number && (
            <BankCard 
                bank={gift.bank1Name} 
                number={gift.bank1Number} 
                name={gift.bank1Holder} 
                delay={0}
                variant="dark" 
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

    const cardStyle = variant === 'dark' 
        ? "bg-gradient-to-br from-[#2C241B] to-[#1A1510] text-[#EADDCE] border-vintage-gold/20" 
        : "bg-gradient-to-br from-[#FDFBF7] to-[#EBE5CE] text-[#5C4033] border-vintage-brown/20";

    const chipColor = variant === 'dark' 
        ? "bg-gradient-to-br from-[#D4AF37] to-[#AA8C2C]" 
        : "bg-gradient-to-br from-[#C0C0C0] to-[#A9A9A9]"; 

    const textColor = variant === 'dark' ? "text-vintage-gold" : "text-vintage-brown";
    const subTextColor = variant === 'dark' ? "text-white/40" : "text-vintage-brown/40";

    return (
        <motion.div 
            initial={{ opacity: 0, y: 40, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay, duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="group perspective-1000"
        >
            <div className={`relative aspect-[1.586/1] rounded-2xl shadow-2xl overflow-hidden border ${cardStyle} transform transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1`}>
                
                <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay pointer-events-none" />
                
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

                <div className="p-6 md:p-8 flex flex-col justify-between h-full relative z-10">
                    
                    <div className="flex justify-between items-start">
                        <div className={`w-12 h-9 ${chipColor} rounded-md border border-white/10 flex items-center justify-center shadow-sm relative overflow-hidden`}>
                            <div className="absolute w-full h-[1px] bg-black/20 top-1/2 -translate-y-1/2" />
                            <div className="absolute h-full w-[1px] bg-black/20 left-1/2 -translate-x-1/2" />
                            <div className="w-6 h-4 border border-black/20 rounded-sm" />
                        </div>
                        <h3 className={`font-serif text-xl md:text-2xl font-bold tracking-widest uppercase opacity-90 ${textColor}`}>
                            {bank}
                        </h3>
                    </div>

                    <div className="space-y-2 flex flex-col items-center text-center">
                        <div className="flex items-center gap-4 bg-black/5 px-4 py-2 rounded-lg border border-white/5 backdrop-blur-sm w-full justify-between">
                            <p className="font-mono text-lg md:text-2xl tracking-widest font-bold text-shadow-sm truncate">
                                {number}
                            </p>
                            <button 
                                onClick={handleCopy}
                                className={`p-2 rounded-full transition-all active:scale-90 ${variant === 'dark' ? 'bg-vintage-gold/20 hover:bg-vintage-gold/30 text-vintage-gold' : 'bg-vintage-brown/10 hover:bg-vintage-brown/20 text-vintage-brown'}`}
                                title="Salin Nomor"
                            >
                                <AnimatePresence mode='wait'>
                                    {copied ? (
                                        <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                                            <Check size={16} />
                                        </motion.div>
                                    ) : (
                                        <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                                            <Copy size={16} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>
                        <p className={`text-[9px] uppercase tracking-[0.3em] ${subTextColor}`}>Nomor Rekening</p>
                    </div>

                    <div className="flex justify-between items-end">
                        <div className="space-y-1">
                            <p className={`text-[8px] uppercase tracking-widest opacity-60 mb-0.5 ${subTextColor}`}>Card Holder</p>
                            <p className="font-serif text-sm md:text-lg tracking-wider uppercase font-bold opacity-90 shadow-black drop-shadow-sm">
                                {name}
                            </p>
                        </div>
                        <CreditCard size={32} className="opacity-20" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}