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
        groomPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop', // Placeholder Unsplash
        
        brideName: 'Juliet Capulet',
        brideNickname: 'Juliet',
        brideParents: 'Putri dari Bpk. Capulet & Ibu Capulet',
        brideInstagram: 'https://instagram.com/juliet',
        bridePhoto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop', // Placeholder Unsplash
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
      gallery: [
        'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1511285560982-1356c11d4606?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=800&auto=format&fit=crop',
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
      message: `Data undangan untuk ${slug} berhasil dibuat!`,
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