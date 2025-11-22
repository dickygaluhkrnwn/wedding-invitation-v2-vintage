import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect halaman utama ke salah satu undangan (sample)
  // Nanti kamu bisa ubah ini ke halaman Landing Page jika mau
  redirect('/romeo-juliet');
}