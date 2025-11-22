import type { Metadata } from "next";
import { Cinzel, Pinyon_Script, Lato } from "next/font/google";
import "./globals.css";

// 1. Font Judul (Klasik & Tegas)
const cinzel = Cinzel({ 
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "700"], 
});

// 2. Font Tulisan Sambung (Elegan)
const pinyon = Pinyon_Script({ 
  subsets: ["latin"],
  variable: "--font-pinyon",
  weight: "400",
});

// 3. Font Body (Mudah dibaca)
const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "The Wedding of Rizky & Lesti",
  description: "Undangan Pernikahan Digital Tema Vintage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${cinzel.variable} ${pinyon.variable} ${lato.variable} antialiased bg-vintage-cream text-vintage-brown overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}