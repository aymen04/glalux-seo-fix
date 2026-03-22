import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 flex justify-between items-center px-6 md:px-10 py-4 bg-black/90 backdrop-blur-md border-b border-zinc-900">
      {/* LOGO : Retour à l'accueil automatique */}
      <Link href="/" className="relative w-28 h-10 md:w-32 md:h-12 block">
        <Image 
          src="/logo.png" 
          alt="GLA LUX - Chauffeur Privé Montréal" 
          fill
          sizes="128px"
          className="object-contain"
          priority 
        />
      </Link>
      
      {/* MENU CENTRAL */}
      <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-semibold">
        <Link href="/" className="hover:text-yellow-500 transition">Accueil</Link>
        <Link href="/flotte" className="hover:text-yellow-500 transition">La Flotte</Link>
        <Link href="/services" className="hover:text-yellow-500 transition">Services</Link>
        <Link href="/about-us" className="hover:text-yellow-500 transition">Qui sommes-nous?</Link>
        
      </div>

      {/* BOUTON ACTION */}
      <Link href="tel:+15140000000" className="bg-yellow-600 text-black px-5 py-2 text-[10px] uppercase font-bold tracking-widest hover:bg-white transition">
        Appeler
      </Link>
    </nav>
  );
}