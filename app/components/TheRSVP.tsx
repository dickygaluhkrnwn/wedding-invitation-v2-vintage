"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, PenTool, MessageSquare } from 'lucide-react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { 
  collection, 
  addDoc, 
  query, 
  orderBy, 
  onSnapshot, 
  serverTimestamp,
  Timestamp 
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface Guest {
  id: string;
  name: string;
  attendance: string;
  message: string;
  createdAt: Timestamp;
}

export default function TheRSVP() {
  const params = useParams();
  const slug = params.slug as string; 

  const [form, setForm] = useState({ name: '', attendance: 'Hadir', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [guests, setGuests] = useState<Guest[]>([]);

  useEffect(() => {
    if (!slug) return;
    const guestsRef = collection(db, 'invitations', slug, 'guests');
    const q = query(guestsRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const guestsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Guest[];
      setGuests(guestsData);
    });

    return () => unsubscribe();
  }, [slug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!slug || !form.name || !form.message) return;

    setIsSending(true);

    try {
      await addDoc(collection(db, 'invitations', slug, 'guests'), {
        name: form.name,
        attendance: form.attendance,
        message: form.message,
        createdAt: serverTimestamp(), 
      });

      setIsSent(true);
      setForm({ name: '', attendance: 'Hadir', message: '' });
      
      setTimeout(() => {
        setIsSent(false);
        setIsSending(false);
      }, 3000);

    } catch (error) {
      console.error("Error submit RSVP:", error);
      alert("Gagal mengirim pesan. Periksa koneksi internet Anda.");
      setIsSending(false);
    }
  };

  const formatTime = (timestamp: Timestamp) => {
    if (!timestamp) return '';
    const date = timestamp.toDate(); 
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return 'Baru saja';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} menit yang lalu`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} jam yang lalu`;
    return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
  };

  return (
    <section className="w-full max-w-6xl mx-auto space-y-16 relative py-12">
      
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         {/* Texture Background Section SANGAT TIPIS (5%) agar tidak flat total */}
         <Image src="/images/vintage/paper-texture.png" alt="texture" fill className="object-cover" />
      </div>

      <div className="text-center space-y-6 relative z-10 px-4">
        <div className="flex flex-col items-center gap-3">
          {/* No Wax Seal */}
          <div className="w-1.5 h-1.5 bg-vintage-gold rounded-full mb-2"></div>
          <h2 className="font-serif text-3xl md:text-5xl text-vintage-brown uppercase tracking-widest border-b-2 border-vintage-gold/50 pb-4 px-8 inline-block">
            Buku Tamu
          </h2>
        </div>
        <p className="font-sans text-vintage-olive max-w-xl mx-auto leading-relaxed italic text-sm md:text-base">
          "Kehadiran & doa restu Anda adalah kado terindah bagi kami. Silakan tinggalkan pesan manis di bawah ini."
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start relative z-10 px-4 md:px-8">
        
        <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-12 bg-[#FDFBF7] shadow-[0_10px_40px_-10px_rgba(92,64,51,0.15)] border border-vintage-brown/10 transform rotate-1"
        >
            {/* TEXTURE: Formulir */}
            <div className="absolute inset-0 opacity-50 bg-paper-texture mix-blend-multiply pointer-events-none" />
            
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-vintage-gold to-yellow-700 rounded-full shadow-md z-20 border border-white/30" />

            <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                
                <div className="space-y-2 group">
                    <label className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-vintage-brown font-bold opacity-70 group-focus-within:opacity-100 transition-opacity">
                        <PenTool size={12} /> Nama Lengkap
                    </label>
                    <input 
                        type="text" 
                        required
                        value={form.name}
                        onChange={(e) => setForm({...form, name: e.target.value})}
                        className="w-full bg-transparent border-b border-vintage-brown/30 focus:border-vintage-brown outline-none py-2 text-vintage-brown placeholder:text-vintage-brown/20 transition-all font-serif text-xl"
                        placeholder="Isi nama Anda..."
                        disabled={isSending}
                    />
                </div>

                <div className="space-y-4">
                    <label className="text-xs uppercase tracking-[0.2em] text-vintage-brown font-bold opacity-70">Konfirmasi Kehadiran</label>
                    <div className="flex flex-wrap gap-4">
                        {['Hadir', 'Maaf, Tidak'].map((opt) => (
                            <label key={opt} className={`cursor-pointer px-6 py-3 border transition-all duration-300 flex items-center gap-2 relative overflow-hidden group ${form.attendance === opt ? 'border-vintage-brown bg-vintage-brown/5 text-vintage-brown' : 'border-vintage-brown/20 text-vintage-olive hover:border-vintage-gold/50'}`}>
                                <input 
                                    type="radio" 
                                    name="attendance" 
                                    value={opt} 
                                    onChange={() => setForm({...form, attendance: opt})}
                                    className="hidden" 
                                    disabled={isSending}
                                />
                                {form.attendance === opt && <Check size={14} className="text-vintage-brown" />}
                                <span className="uppercase text-xs tracking-widest font-bold">{opt}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="space-y-2 group">
                    <label className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-vintage-brown font-bold opacity-70 group-focus-within:opacity-100 transition-opacity">
                        <MessageSquare size={12} /> Pesan & Doa
                    </label>
                    <div className="relative w-full bg-vintage-brown/5 p-4 border border-vintage-brown/10">
                        <textarea 
                            rows={4}
                            required
                            value={form.message}
                            onChange={(e) => setForm({...form, message: e.target.value})}
                            className="w-full bg-transparent outline-none text-vintage-brown placeholder:text-vintage-brown/30 transition-colors resize-none font-serif text-lg leading-relaxed"
                            placeholder="Tuliskan doa terbaik untuk kami..."
                            disabled={isSending}
                        />
                    </div>
                </div>

                <button 
                    disabled={isSending || isSent}
                    className="w-full py-4 bg-vintage-brown text-vintage-cream hover:bg-vintage-brown/90 transition-all duration-500 font-serif tracking-[0.2em] text-xs uppercase flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed mt-6 border border-vintage-brown/20"
                >
                    {isSent ? (
                        <>Terkirim <Check size={16} /></>
                    ) : isSending ? (
                        <span className="animate-pulse">Mengirim...</span>
                    ) : (
                        <>Kirim Pesan <Send size={16} /></>
                    )}
                </button>
            </form>
        </motion.div>

        <div className="space-y-8 h-full flex flex-col">
            <div className="flex items-center justify-between border-b border-vintage-brown/20 pb-4">
                <h3 className="font-script text-4xl text-vintage-brown">Doa Kerabat</h3>
                <span className="px-3 py-1 bg-vintage-brown/10 rounded-full text-xs font-bold text-vintage-brown border border-vintage-brown/10">{guests.length} Pesan</span>
            </div>
            
            <div className="flex-1 max-h-[600px] overflow-y-auto pr-2 space-y-6 custom-scrollbar pb-10">
                {guests.length === 0 ? (
                    <div className="text-center py-16 text-vintage-olive opacity-60 italic border-2 border-dashed border-vintage-brown/10 rounded-lg bg-white/30">
                        <p>"Belum ada ucapan. Jadilah yang pertama mendoakan kami!"</p>
                    </div>
                ) : (
                    guests.map((guest, i) => (
                        <motion.div 
                            key={guest.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 * (i % 5) }} // Stagger effect
                            viewport={{ once: true }}
                            className={`p-6 shadow-md border border-vintage-brown/10 relative group hover:z-10 transition-transform hover:scale-[1.02] ${
                                i % 2 === 0 ? 'bg-[#fffdf5] rotate-1' : 'bg-[#F9F7F2] -rotate-1'
                            }`}
                        >
                            {/* TEXTURE: Sticky Note */}
                            <div className="absolute inset-0 opacity-40 bg-paper-texture mix-blend-multiply pointer-events-none" />
                            
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-vintage-gold/20 backdrop-blur-sm rotate-1 shadow-sm opacity-80" />
                            
                            <p className="font-serif text-vintage-brown italic text-sm leading-relaxed mb-4 break-words relative z-10">
                                "{guest.message}"
                            </p>
                            
                            <div className="flex justify-between items-end border-t border-vintage-brown/10 pt-3 relative z-10">
                                <div className="flex flex-col">
                                    <span className="font-bold text-xs uppercase tracking-widest text-vintage-brown flex items-center gap-2">
                                        {guest.name}
                                        {guest.attendance === 'Hadir' && <span className="text-[9px] px-1.5 py-0.5 bg-green-100 text-green-800 border border-green-200 rounded-sm">Hadir</span>}
                                    </span>
                                    <span className="text-[10px] text-vintage-olive opacity-60 mt-1 italic">
                                        {formatTime(guest.createdAt)}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))
                )}
            </div>
        </div>

      </div>
    </section>
  );
}