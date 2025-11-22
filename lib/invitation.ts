import { db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

// Definisikan tipe data agar TypeScript senang
export interface InvitationData {
  slug: string;
  metadata: {
    title: string;
    description: string;
  };
  couple: {
    groomName: string;
    groomNickname: string;
    groomParents: string;
    groomInstagram: string;
    groomPhoto: string;
    brideName: string;
    brideNickname: string;
    brideParents: string;
    brideInstagram: string;
    bridePhoto: string;
  };
  event: {
    date: { seconds: number; nanoseconds: number }; // Kita ubah jadi plain object
    akadTime: string;
    akadLocation: string;
    akadAddress: string;
    akadMapsUrl: string;
    resepsiTime: string;
    resepsiLocation: string;
    resepsiAddress: string;
    resepsiMapsUrl: string;
  };
  gallery: string[];
  gift: {
    bank1Name: string;
    bank1Number: string;
    bank1Holder: string;
    bank2Name: string;
    bank2Number: string;
    bank2Holder: string;
  };
  theme: string;
}

// Fungsi untuk mengambil data undangan berdasarkan slug
export const getInvitationData = async (slug: string): Promise<InvitationData | null> => {
  try {
    const docRef = doc(db, 'invitations', slug);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();

      // --- PENTING: SERIALIZATION FIX ---
      // Kita harus membuat ulang object secara manual (mapping)
      // untuk membuang 'method' tersembunyi dari Firestore Timestamp.
      // Jika return docSnap.data() langsung, Next.js akan error.
      
      const invitation: InvitationData = {
        slug: data.slug,
        metadata: data.metadata,
        couple: data.couple,
        event: {
          ...data.event,
          // PAKSA jadi object biasa, buang class Timestamp
          date: { 
            seconds: data.event.date.seconds, 
            nanoseconds: data.event.date.nanoseconds 
          }
        },
        gallery: data.gallery,
        gift: data.gift,
        theme: data.theme,
      };

      return invitation;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting document:", error);
    return null;
  }
};