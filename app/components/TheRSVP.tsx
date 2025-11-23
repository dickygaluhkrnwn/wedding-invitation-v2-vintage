"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, PenTool, MessageSquare, Pin } from 'lucide-react';
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

  // Base64 Noise Pattern
  const noisePattern = `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEHb29v///8AAABOmZnDw8O+vr6urq6hoaG7j36HAAAACHRSTlMAM8T/mZkzM4Vj3DIAAAArSURBVDjLY2AYBaNgFIyCUTAKRsEoGAWjYBSMglEwCkbBKBgFo2AUjIIhAQA9bATXt91HzAAAAABJRU5ErkJggg==")`;

  // Warna-warni kertas sticky notes vintage
  const stickyColors = [
    'bg-[#fdfeb8]', // Kuning Pudar
    'bg-[#ffdfdf]', // Pink Pudar
    'bg-[#e1f7d5]', // Hijau Pudar
    'bg-[#d4f0f0]', // Biru Pudar
    'bg-[#f4f1ea]', // Cream
  ];

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
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} menit lalu`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} jam lalu`;
    return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
  };

  return (
    <section className="w-full max-w-7xl mx-auto space-y-16 relative py-20 overflow-hidden">
      
      {/* Ornamen Background */}
      <div className="absolute -left-20 top-20 w-64 h-64 opacity-20 pointer-events-none mix-blend-multiply">
         <Image src="/images/vintage/flower-corner.png" alt="decor" fill className="object-contain rotate-90" />
      </div>

      {/* Header Section */}
      <div className="text-center space-y-6 relative z-10 px-4">
        <div className="flex flex-col items-center gap-3">
          <div className="w-2 h-2 bg-vintage-gold rounded-full mb-2 animate-pulse"></div>
          <h2 className="font-serif text-4xl md:text-6xl text-vintage-brown uppercase tracking-widest relative inline-block">
            <span className="relative z-10 border-b-2 border-vintage-gold/50 pb-2 px-4">Guest Book</span>
          </h2>
        </div>
        <p className="font-sans text-vintage-olive/80 max-w-xl mx-auto leading-loose italic text-sm md:text-base">
          "Kehadiran & doa restu Anda adalah kado terindah bagi kami."
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start relative z-10 px-4 md:px-8">
        
        {/* --- FORMULIR (SURAT VINTAGE) - KIRI (2/5) --- */}
        <motion.div 
            initial={{ opacity: 0, x: -50, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-2 relative p-8 md:p-10 bg-[#F2E8D5] shadow-[0_20px_50px_rgba(92,64,51,0.2)] border-t border-l border-white/50"
        >
            {/* Texture Kertas & Garis Buku */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-multiply" style={{ backgroundImage: noisePattern }} />
            <div className="absolute inset-0 z-0 pointer-events-none" 
                 style={{ 
                    backgroundImage: 'repeating-linear-gradient(transparent, transparent 39px, #a39888 40px)',
                    backgroundPosition: '0 24px'
                 }} 
            />
            
            {/* Klip Kertas (Hiasan) */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#e6e0d0] shadow-md rounded-sm border border-vintage-brown/20 flex items-center justify-center z-20 transform -rotate-1">
               <div className="w-2 h-2 bg-vintage-brown rounded-full mx-auto opacity-50 shadow-inner" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10 mt-6">
                
                {/* Input Nama (Garis Bawah Saja) */}
                <div className="space-y-1 pt-2">
                    <label className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-vintage-brown font-bold opacity-60">
                        <PenTool size={10} /> Nama Anda
                    </label>
                    <input 
                        type="text" 
                        required
                        value={form.name}
                        onChange={(e) => setForm({...form, name: e.target.value})}
                        className="w-full bg-transparent border-b-2 border-vintage-brown/30 focus:border-vintage-brown outline-none py-1 text-vintage-brown font-serif text-xl placeholder:text-vintage-brown/20 transition-colors"
                        placeholder="Tulis nama..."
                        disabled={isSending}
                    />
                </div>

                {/* Radio Attendance (Checkbox Vintage) */}
                <div className="space-y-3 pt-4">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-vintage-brown font-bold opacity-60">Konfirmasi</label>
                    <div className="flex gap-4">
                        {['Hadir', 'Maaf, Tidak'].map((opt) => (
                            <label key={opt} className="cursor-pointer flex items-center gap-2 group">
                                <div className={`w-5 h-5 border-2 border-vintage-brown/40 rounded-sm flex items-center justify-center transition-colors ${form.attendance === opt ? 'bg-vintage-brown border-vintage-brown' : 'group-hover:border-vintage-brown'}`}>
                                    {form.attendance === opt && <Check size={12} className="text-[#F2E8D5]" />}
                                </div>
                                <input 
                                    type="radio" 
                                    name="attendance" 
                                    value={opt} 
                                    onChange={() => setForm({...form, attendance: opt})}
                                    className="hidden" 
                                    disabled={isSending}
                                />
                                <span className={`text-sm font-serif ${form.attendance === opt ? 'text-vintage-brown font-bold italic' : 'text-vintage-olive'}`}>{opt}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Textarea Pesan (Seperti menulis di buku) */}
                <div className="space-y-1 pt-4">
                    <label className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-vintage-brown font-bold opacity-60">
                        <MessageSquare size={10} /> Pesan & Doa
                    </label>
                    <textarea 
                        rows={4}
                        required
                        value={form.message}
                        onChange={(e) => setForm({...form, message: e.target.value})}
                        className="w-full bg-transparent outline-none text-vintage-brown font-serif text-lg leading-[40px] resize-none -mt-2"
                        style={{ lineHeight: '40px' }} // Sesuaikan dengan garis background
                        placeholder="Tuliskan doa terbaik..."
                        disabled={isSending}
                    />
                </div>

                {/* FIX BUTTON VISIBILITY: Menggunakan Hex Color Solid */}
                <button 
                    disabled={isSending || isSent}
                    className="w-full py-3 mt-4 bg-[#5C4033] text-[#F2E8D5] hover:bg-[#4a332a] transition-all font-serif tracking-[0.2em] text-xs uppercase flex items-center justify-center gap-2 shadow-lg active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed border border-transparent hover:border-[#F2E8D5]/50 z-20 relative"
                >
                    {isSent ? (
                        <>Terkirim <Check size={14} /></>
                    ) : isSending ? (
                        <span className="animate-pulse">Mengirim...</span>
                    ) : (
                        <>Kirim Surat <Send size={14} /></>
                    )}
                </button>
            </form>
        </motion.div>

        {/* --- DINDING PESAN (STICKY NOTES) - KANAN (3/5) --- */}
        <div className="lg:col-span-3 relative min-h-[500px] bg-vintage-brown/5 rounded-lg p-6 md:p-8 border-2 border-dashed border-vintage-brown/10">
            
            <div className="absolute top-0 right-0 px-4 py-2 bg-vintage-brown text-[#F2E8D5] text-[10px] font-bold uppercase tracking-widest rounded-bl-lg shadow-sm z-20">
                Total: {guests.length} Pesan
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar pb-10">
                {guests.length === 0 ? (
                    <div className="col-span-full flex flex-col items-center justify-center py-20 opacity-40">
                        <MessageSquare size={40} className="text-vintage-brown mb-4" />
                        <p className="font-serif text-vintage-brown italic">"Belum ada surat yang ditempel..."</p>
                    </div>
                ) : (
                    guests.map((guest, i) => {
                        const rotation = i % 2 === 0 ? 'rotate-1' : '-rotate-1';
                        const noteColor = stickyColors[i % stickyColors.length];

                        return (
                            <motion.div 
                                key={guest.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.05 * (i % 4), type: "spring" }}
                                viewport={{ once: true }}
                                className={`relative p-6 shadow-md ${noteColor} ${rotation} group hover:z-10 hover:scale-105 transition-transform duration-300`}
                            >
                                <div className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-multiply" style={{ backgroundImage: noisePattern }} />
                                
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 text-vintage-brown drop-shadow-md transform hover:-translate-y-1 transition-transform">
                                    <Pin size={20} fill="#5C4033" />
                                </div>

                                {i % 3 === 0 && (
                                    <div className="absolute -top-2 -right-2 w-8 h-4 bg-white/40 rotate-45 backdrop-blur-sm shadow-sm border border-white/20" />
                                )}

                                <div className="relative z-10">
                                    <p className="font-serif text-vintage-brown text-sm leading-relaxed mb-4 break-words italic">
                                        "{guest.message}"
                                    </p>
                                    
                                    <div className="border-t border-vintage-brown/10 pt-2 flex justify-between items-end">
                                        <div>
                                            <p className="font-bold text-xs uppercase tracking-wider text-vintage-brown">
                                                {guest.name}
                                            </p>
                                            <p className="text-[9px] text-vintage-olive opacity-60 mt-0.5">
                                                {formatTime(guest.createdAt)}
                                            </p>
                                        </div>
                                        {guest.attendance === 'Hadir' && (
                                            <span className="text-[8px] font-bold px-1.5 py-0.5 border border-vintage-brown/30 text-vintage-brown rounded-sm bg-white/20">
                                                HADIR
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })
                )}
            </div>
        </div>

      </div>
    </section>
  );
}