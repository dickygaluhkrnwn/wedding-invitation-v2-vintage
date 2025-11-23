import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase'; // Pastikan path ini sesuai dengan lokasi file firebase.ts
import { doc, setDoc, Timestamp } from 'firebase/firestore';

export async function GET() {
  try {
    const slug = 'romeo-juliet'; // Slug URL yang akan kita pakai

    // Data Dummy Undangan
    const dummyData = {
      slug: slug,
      metadata: {
        title: 'The Wedding of Romeo & Juliet',
        description: 'Undangan Pernikahan Digital Romeo & Juliet',
      },
      couple: {
        groomName: 'Romeo Montague',
        groomNickname: 'Romeo',
        groomParents: 'Putra dari Bpk. Montague & Ibu Montague',
        groomInstagram: 'https://instagram.com/romeo',
        // Kita update juga path foto profil ke file lokal agar konsisten dengan komponen
        groomPhoto: '/images/vintage/groom.png',
        
        brideName: 'Juliet Capulet',
        brideNickname: 'Juliet',
        brideParents: 'Putri dari Bpk. Capulet & Ibu Capulet',
        brideInstagram: 'https://instagram.com/juliet',
        // Kita update juga path foto profil ke file lokal agar konsisten dengan komponen
        bridePhoto: '/images/vintage/bride.png',
      },
      event: {
        date: Timestamp.fromDate(new Date('2025-12-31T09:00:00')), // Tanggal acara
        akadTime: '08:00 - 10:00 WIB',
        akadLocation: 'Gereja Katedral Verona',
        akadAddress: 'Jl. Verona Indah No. 1, Italia',
        akadMapsUrl: 'https://maps.google.com',
        
        resepsiTime: '11:00 - 13:00 WIB',
        resepsiLocation: 'Ballroom Hotel Verona',
        resepsiAddress: 'Jl. Verona Pusat No. 5, Italia',
        resepsiMapsUrl: 'https://maps.google.com',
      },
      // UPDATE: Menggunakan aset gambar lokal sesuai instruksi
      gallery: [
        '/images/vintage/gallery-1.png',
        '/images/vintage/gallery-2.png',
        '/images/vintage/gallery-3.png',
        '/images/vintage/gallery-4.png',
      ],
      gift: {
        bank1Name: 'BCA',
        bank1Number: '1234567890',
        bank1Holder: 'Romeo Montague',
        bank2Name: 'Mandiri',
        bank2Number: '0987654321',
        bank2Holder: 'Juliet Capulet',
      },
      theme: 'vintage',
      createdAt: Timestamp.now(),
    };

    // Simpan ke Firestore: Collection 'invitations', Document ID 'romeo-juliet'
    await setDoc(doc(db, 'invitations', slug), dummyData);

    return NextResponse.json({ 
      success: true, 
      message: `Data undangan untuk ${slug} berhasil diperbarui dengan gambar lokal!`,
      data: dummyData 
    });

  } catch (error: any) {
    console.error("Error seeding data:", error);
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}