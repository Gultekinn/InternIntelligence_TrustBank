import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../app/globals.css";
import { AuthProvider } from '@/firebase/FirebaseProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-100">
        <AuthProvider> {/* Firebase provider'ını sar */}
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
