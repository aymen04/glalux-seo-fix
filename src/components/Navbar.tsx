'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Icônes pour le burger et la croix

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // OPTIMISATION SEO/UX : Empêcher le scroll de la page derrière quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'La Flotte', href: '/flotte' },
    { name: 'Réservation', href: '/reservation' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    // NAVBAR PRINCIPALE (Z-index élevé pour rester au-dessus)
    <nav className="fixed w-full z-[100] bg-black/80 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO (Reste visible en haut à gauche) */}
        <Link href="/" className="text-2xl font-serif italic z-[110]">
          GLA<span className="text-yellow-600 font-sans not-italic ml-1 text-sm tracking-[0.3em]">LUX</span>
        </Link>

        {/* NAVIGATION DESKTOP (Cachée sur mobile) */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-[10px] uppercase tracking-[0.2em] text-zinc-300 hover:text-yellow-600 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* BOUTON BURGER (Affiché uniquement sur mobile) */}
        <button 
          className="md:hidden text-white z-[110] p-2 hover:bg-zinc-900 rounded-full transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

     {/* MENU MOBILE OVERLAY */}
<div className={`
  fixed inset-0 
  w-screen h-screen 
  bg-zinc-950/98 backdrop-blur-xl  /* On force un noir quasi opaque pour l'assombrissement */
  flex flex-col items-center justify-center 
  transition-all duration-500 ease-in-out 
  z-[150] md:hidden 
  ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
`}>
  
  {/* LA CROIX DE FERMETURE (Indépendante et fixée) */}
  <button 
    className="absolute top-8 right-8 text-white p-2 hover:text-yellow-600 transition-transform active:scale-90"
    onClick={() => setIsOpen(false)}
  >
    <X size={35} strokeWidth={1.5} />
  </button>

  {/* CONTENEUR DE LIENS (Centrage Absolu) */}
  <div className="flex flex-col items-center justify-center space-y-12 w-full">
    {navLinks.map((link, index) => (
      <Link 
        key={link.name} 
        href={link.href} 
        onClick={() => setIsOpen(false)}
        className={`
          text-4xl font-serif italic text-white hover:text-yellow-600 transition-all duration-300
          ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}
        style={{ transitionDelay: `${index * 75}ms` }}
      >
        {link.name}
      </Link>
    ))}
    
    {/* CTA DE RÉSERVATION */}
    <Link
      href="/reservation"
      onClick={() => setIsOpen(false)}
      className="mt-6 px-12 py-4 border border-yellow-600 text-yellow-600 text-[11px] uppercase tracking-[0.4em] hover:bg-yellow-600 hover:text-black transition-all"
    >
      Réserver
    </Link>
  </div>
</div>
    </nav>
  );
}