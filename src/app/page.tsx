import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen text-white">
      <Navbar />
      
      {/* HERO SECTION - Correction H1 */}
      <section className="relative h-screen flex flex-col justify-center items-center px-6 text-center">
        <div className="absolute inset-0 bg-[url('https://glalux.com/wp-content/uploads/2023/09/glalux-hero.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10">
          <span className="text-yellow-500 uppercase tracking-[0.5em] text-xs mb-4 block font-medium">L'Excellence à Montréal</span>
          <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight max-w-5xl">
            Chauffeur Privé & <br />
            <span className="italic">Transport de Prestige</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Service de transport VIP exclusif à Montréal. Transferts aéroportuaires YUL, événements corporatifs et célébrations avec une flotte d'exception.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link href="/services" className="bg-yellow-600 text-black px-10 py-4 font-bold uppercase text-xs tracking-widest hover:bg-yellow-500 transition">
              Nos Services
            </Link>
            <Link href="/reservation" className="border border-zinc-700 text-white px-10 py-4 font-bold uppercase text-xs tracking-widest hover:bg-zinc-900 transition">
              Réserver
            </Link>
          </div>
        </div>
      </section>

     {/* SECTION SERVICES - Correction Maillage Interne & SEO Local */}
<section className="py-24 px-10 max-w-7xl mx-auto border-t border-zinc-900">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    
    {/* SERVICE 1 : AÉROPORT YUL */}
    <div className="group p-8 border border-zinc-900 rounded-sm bg-zinc-950/50 hover:border-yellow-600/30 transition duration-500">
      <span className="text-yellow-600 uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Transferts VIP</span>
      <h2 className="text-3xl font-serif italic mb-6">Aéroport Montréal-Trudeau (YUL)</h2>
      <p className="text-zinc-500 text-sm leading-relaxed mb-8">
        Ponctualité garantie pour tous vos départs et arrivées à <strong>YUL</strong>. 
        Accueil personnalisé avec pancarte et assistance bagages pour un trajet serein vers le centre-ville ou la périphérie.
      </p>
      <Link href="/services/aeroport" className="inline-block text-[10px] uppercase tracking-widest border-b border-yellow-600 pb-2 hover:text-white transition">
        Découvrir le service →
      </Link>
    </div>

    {/* SERVICE 2 : MARIAGE (Auparavant mis de côté) */}
    <div className="group p-8 border border-zinc-900 rounded-sm bg-zinc-950/50 hover:border-yellow-600/30 transition duration-500">
      <span className="text-yellow-600 uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Célébrations</span>
      <h2 className="text-3xl font-serif italic mb-6">Mariage & Événements de Luxe</h2>
      <p className="text-zinc-500 text-sm leading-relaxed mb-8">
        Faites une entrée mémorable pour le plus beau jour de votre vie. Nos chauffeurs en tenue de cérémonie 
        et notre flotte de SUV de prestige (GMC Yukon, Lincoln) sont à votre disposition partout au Québec.
      </p>
      <Link href="/services/mariage" className="inline-block text-[10px] uppercase tracking-widest border-b border-yellow-600 pb-2 hover:text-white transition">
        Voir nos forfaits →
      </Link>
    </div>

  </div>
</section>
    </main>
  );
}