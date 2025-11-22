"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';

export default function TheRSVP() {
  const [form, setForm] = useState({ name: '', attendance: 'Hadir', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
        setIsSent(false);
        setForm({ name: '', attendance: 'Hadir', message: '' });
    }, 3000);
  };

  return (
    <section className="py-24 px-6 w-full max-w-5xl mx-auto space-y-20 relative">
      
      {/* Judul Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-4"
      >
        <h2 className="font-serif text-3xl md:text-5xl text-vintage-brown uppercase tracking-widest">
          Buku Tamu
        </h2>
        <div className="w-24 h-[2px] bg-vintage-gold mx-auto" />
        <p className="font-sans text-vintage-olive italic text-sm">
          "Mohon konfirmasi kehadiran Anda dan tinggalkan pesan manis untuk kami."
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16">
        
        {/* --- KOLOM KIRI: FORMULIR --- */}
        <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-10 bg-[#f4f1ea] shadow-lg border border-vintage-brown/20"
        >
            {/* Efek Kertas Terlipat di Pojok */}
            <div className="absolute top-0 right-0 border-t-[30px] border-r-[30px] border-t-white/50 border-r-vintage-brown/10 shadow-sm" />

            <form onSubmit={handleSubmit} className="space-y-8 font-serif">
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.2em] text-vintage-olive font-bold">Nama Lengkap</label>
                    <input 
                        type="text" 
                        required
                        value={form.name}
                        onChange={(e) => setForm({...form, name: e.target.value})}
                        className="w-full bg-transparent border-b-2 border-vintage-brown/30 focus:border-vintage-gold outline-none py-2 text-vintage-brown placeholder:text-vintage-brown/30 transition-colors"
                        placeholder="Tulis nama Anda di sini..."
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.2em] text-vintage-olive font-bold">Kehadiran</label>
                    <div className="flex gap-6 pt-2">
                        {['Hadir', 'Maaf, Tidak'].map((opt) => (
                            <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                                <div className={`w-5 h-5 rounded-full border border-vintage-brown flex items-center justify-center ${form.attendance === opt ? 'bg-vintage-brown' : ''}`}>
                                    {form.attendance === opt && <div className="w-2 h-2 bg-vintage-cream rounded-full" />}
                                </div>
                                <span className={`text-sm uppercase tracking-widest transition-colors ${form.attendance === opt ? 'text-vintage-brown font-bold' : 'text-vintage-olive group-hover:text-vintage-brown'}`}>
                                    {opt}
                                </span>
                                <input 
                                    type="radio" 
                                    name="attendance" 
                                    value={opt} 
                                    onChange={() => setForm({...form, attendance: opt})}
                                    className="hidden" 
                                />
                            </label>
                        ))}
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.2em] text-vintage-olive font-bold">Pesan & Doa</label>
                    <textarea 
                        rows={4}
                        required
                        value={form.message}
                        onChange={(e) => setForm({...form, message: e.target.value})}
                        className="w-full bg-transparent border-b-2 border-vintage-brown/30 focus:border-vintage-gold outline-none py-2 text-vintage-brown placeholder:text-vintage-brown/30 transition-colors resize-none"
                        placeholder="Tuliskan doa terbaik untuk kami..."
                        style={{ backgroundImage: "linear-gradient(transparent, transparent 31px, rgba(146, 100, 81, 0.1) 31px)", backgroundSize: "100% 32px", lineHeight: "32px" }}
                    />
                </div>

                <button 
                    disabled={isSent}
                    className="w-full py-4 border border-vintage-brown text-vintage-brown hover:bg-vintage-brown hover:text-vintage-cream transition-all duration-500 font-serif tracking-[0.2em] text-xs uppercase flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isSent ? (
                        <>Terkirim <Check size={16} /></>
                    ) : (
                        <>Kirim Pesan <Send size={16} className="group-hover:translate-x-1 transition-transform" /></>
                    )}
                </button>
            </form>
        </motion.div>

        {/* --- KOLOM KANAN: DINDING UCAPAN (Sticky Notes) --- */}
        <div className="space-y-6">
            <h3 className="font-script text-4xl text-vintage-brown text-center md:text-left">Doa Kerabat</h3>
            
            <div className="h-[500px] overflow-y-auto pr-4 space-y-6 custom-scrollbar">
                {/* Dummy Wishes */}
                {[1, 2, 3, 4].map((i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className={`p-6 shadow-md border border-vintage-brown/10 relative ${i % 2 === 0 ? 'bg-[#fcfbf7] rotate-1' : 'bg-[#f4f1ea] -rotate-1'}`}
                    >
                        {/* Paku/Pin di atas */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-vintage-gold shadow-sm border border-vintage-brown/30" />
                        
                        <p className="font-serif text-vintage-brown italic text-sm leading-relaxed mb-4">
                            "Selamat menempuh hidup baru Rizky & Lesti! Semoga menjadi keluarga sakinah, mawaddah, warahmah. Aamiin."
                        </p>
                        <div className="flex justify-between items-end border-t border-vintage-brown/10 pt-2">
                            <span className="font-bold text-xs uppercase tracking-widest text-vintage-brown">Teman SMA</span>
                            <span className="text-[10px] text-vintage-olive italic">2 jam yang lalu</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}