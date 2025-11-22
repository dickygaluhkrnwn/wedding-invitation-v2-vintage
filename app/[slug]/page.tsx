import { getInvitationData } from '@/lib/invitation';
import InvitationClient from './InvitationClient';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Generate Metadata Dinamis untuk SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const data = await getInvitationData(slug);

  if (!data) {
    return {
      title: 'Undangan Tidak Ditemukan',
    };
  }

  return {
    title: data.metadata.title,
    description: data.metadata.description,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  // Await params (Perubahan di Next.js 15+)
  const { slug } = await params;
  
  // Fetch data dari Firestore
  const invitationData = await getInvitationData(slug);

  // Jika data tidak ditemukan, lempar ke halaman 404
  if (!invitationData) {
    notFound();
  }

  // Render Client Component dengan data
  return <InvitationClient data={invitationData} />;
}