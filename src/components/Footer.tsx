import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* COLONNE 1 : LOGO & INFOS */}
        <div className="space-y-6">
          <div className="relative w-32 h-12">
            <Image src="/logo.png" alt="GLA LUX Logo" fill sizes="128px" className="object-contain" />
          </div>
          <p className="text-zinc-500 text-xs leading-relaxed italic">
            Service de transport de luxe avec chauffeur privé à Montréal. Excellence, discrétion et ponctualité pour vos trajets VIP.
          </p>
        </div>

        {/* COLONNE 2 : SERVICES (Maillage interne) */}
        <div>
          <h4 className="text-white text-xs uppercase tracking-widest font-bold mb-6">Nos Services</h4>
          <ul className="text-zinc-500 text-xs space-y-4">
            <li><Link href="/services/aeroport" className="hover:text-yellow-500">Transfert Aéroport YUL</Link></li>
            <li><Link href="/services/mariage" className="hover:text-yellow-500">Mariage & Événements</Link></li>
            <li><Link href="/flotte" className="hover:text-yellow-500">Location avec Chauffeur</Link></li>
          </ul>
        </div>

        {/* COLONNE 3 : LIENS RAPIDES */}
        <div>
          <h4 className="text-white text-xs uppercase tracking-widest font-bold mb-6">Navigation</h4>
          <ul className="text-zinc-500 text-xs space-y-4">
            <li><Link href="/about-us" className="hover:text-yellow-500">À Propos</Link></li>
            <li><Link href="/reservation" className="hover:text-yellow-500">Réservation</Link></li>
            <li><Link href="/faq" className="hover:text-yellow-500">Questions Fréquentes</Link></li>
          </ul>
        </div>

        {/* COLONNE 4 : CONTACT LOCAL (SEO Local) */}
        <div>
          <h4 className="text-white text-xs uppercase tracking-widest font-bold mb-6">Contact</h4>
          <ul className="text-zinc-500 text-xs space-y-4">
            <li>Montréal, Québec, Canada</li>
            <li className="text-yellow-600 font-bold">+1 514 349 74 77</li>
            <li>hello@glalux.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-900 pt-8 text-center">
        <p className="text-[10px] text-zinc-600 uppercase tracking-widest">
          © {new Date().getFullYear()} GLA LUX Montréal - Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}