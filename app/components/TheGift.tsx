"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Gift } from 'lucide-react';

export default function TheGift() {
  return (
    <section className="py-24 px-6 w-full max-w-4xl mx-auto mb-20">
      
      {/* Judul */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="font-serif text-3xl md:text-5xl text-vintage-brown uppercase tracking-widest">
          Tanda Kasih
        </h2>
        <div className="w-24 h-[2px] bg-vintage-gold mx-auto" />
        <p className="font-sans text-vintage-olive italic text-sm max-w-md mx-auto">
          "Tanpa mengurangi rasa hormat, bagi Anda yang ingin memberikan tanda kasih, dapat melalui:"
        </p>
      </div>

      {/* Kartu Bank (Tampilan Amplop) */}
      <div className="grid md:grid-cols-2 gap-10">
        <BankEnvelope 
            bank="BCA" 
            number="1234567890" 
            name="Rizky Billar" 
            delay={0}
        />
        <BankEnvelope 
            bank="MANDIRI" 
            number="0987654321" 
            name="Lesti Kejora" 
            delay={0.2}
        />
      </div>

      {/* Gift Box Icon */}
      <div className="flex justify-center mt-16 opacity-60">
        <Gift size={40} className="text-vintage-gold" />
      </div>

    </section>
  );
}

function BankEnvelope({ bank, number, name, delay }: any) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(number);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 1 }}
            viewport={{ once: true }}
            className="relative group"
        >
            {/* Amplop Luar */}
            <div className="bg-[#eaddcf] p-1 shadow-xl transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="border border-vintage-brown/30 p-6 md:p-8 bg-[#f4f1ea] relative overflow-hidden flex flex-col items-center text-center gap-4">
                    
                    {/* Pattern Background Halus */}
                    <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />

                    {/* Logo Bank (Text) */}
                    <h3 className="font-serif text-2xl text-vintage-brown font-bold border-b border-vintage-gold pb-2 w-full">
                        {bank}
                    </h3>

                    {/* Nomor Rekening */}
                    <p className="font-mono text-xl md:text-2xl text-vintage-brown tracking-wider py-2">
                        {number}
                    </p>

                    {/* Nama Pemilik */}
                    <p className="text-xs uppercase tracking-[0.2em] text-vintage-olive">
                        a.n {name}
                    </p>

                    {/* Tombol Copy */}
                    <button 
                        onClick={handleCopy}
                        className="mt-4 px-6 py-2 text-[10px] uppercase tracking-[0.2em] border border-vintage-brown/50 hover:bg-vintage-brown hover:text-vintage-cream transition-all flex items-center gap-2"
                    >
                        <AnimatePresence mode='wait'>
                            {copied ? (
                                <motion.span 
                                    key="copied"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    className="flex items-center gap-2 text-green-700 group-hover:text-green-200"
                                >
                                    <Check size={12} /> Tersalin
                                </motion.span>
                            ) : (
                                <motion.span 
                                    key="copy"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    className="flex items-center gap-2"
                                >
                                    <Copy size={12} /> Salin
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </div>
        </motion.div>
    );
}