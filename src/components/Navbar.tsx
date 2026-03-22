'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Empêcher le scroll quand le menu est ouvert (Essentiel pour le SEO/UX)
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
    <nav className="fixed w-full z-[100] bg-black/90 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO EN IMAGE */}
        <Link href="/" className="relative z-[110] w-32 h-12">
          <Image 
            src="/logo.png" // Vérifie bien le nom de ton fichier logo
            alt="Glalux Logo"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 128px, 160px"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 hover:text-yellow-600 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button 
          className="md:hidden text-white z-[110] p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MENU MOBILE OVERLAY */}
      <div className={`
        fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'} 
        md:hidden z-[105]
      `}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href} 
            onClick={() => setIsOpen(false)}
            className="text-4xl font-serif italic text-white hover:text-yellow-600 transition"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}