import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "GLA LUX | Chauffeur Privé & Transport de Luxe à Montréal",
    template: "%s | GLA LUX Montréal",
  },
  description: "Service de chauffeur privé VIP à Montréal. Transferts aéroport YUL, mariages et transport corporatif haut de gamme.",
};

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}