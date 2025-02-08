'use client';
import React from 'react';
import { usePathname } from 'next/navigation'; // Sayfa yolunu almak için Next.js hook'u
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AuthProvider } from '@/firebase/FirebaseProvider';
import '@/app/globals.css'; // Global stil dosyanızı import edin

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Geçerli sayfa yolunu alıyoruz

  // Navbar ve Footer'ı yalnızca anasayfa ve login/register sayfalarında göster
  const showNavbarFooter = pathname === '/' || pathname.startsWith('/auth');

  return (
    <html lang="en">
      <head />
      <body className="bg-gray-100">
        <AuthProvider>
          {showNavbarFooter && <Navbar />}
          <main>{children}</main>
          {showNavbarFooter && <Footer />}
        </AuthProvider>
      </body>
    </html>
  );
}
