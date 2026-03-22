import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function ServicesHub() {
  return (
    <main className="bg-black min-h-screen text-white pt-40 px-10">
      <h1 className="text-5xl font-serif italic mb-12 border-b border-zinc-900 pb-6 text-center">
        Nos Services de Prestige
      </h1>
      
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* LIEN VERS AÉROPORT */}
        <Link href="/services/aeroport" className="group border border-zinc-800 p-10 hover:border-yellow-600 transition bg-zinc-950">
          <h2 className="text-3xl mb-4 italic">Transferts Aéroport YUL</h2>
          <p className="text-zinc-500 mb-6 text-sm">Service ponctuel 24/7 vers Pierre-Elliott-Trudeau.</p>
          <span className="text-yellow-600 text-xs font-bold uppercase tracking-widest">Voir les détails →</span>
        </Link>

        {/* LIEN VERS MARIAGE */}
        <Link href="/services/mariage" className="group border border-zinc-800 p-10 hover:border-yellow-600 transition bg-zinc-950">
          <h2 className="text-3xl mb-4 italic">Mariages & Événements</h2>
          <p className="text-zinc-500 mb-6 text-sm">Élégance et prestige pour vos célébrations au Québec.</p>
          <span className="text-yellow-600 text-xs font-bold uppercase tracking-widest">Voir les détails →</span>
        </Link>
      </div>
    </main>
  );
}