import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Vehicle3DWrapper from '@/components/Vehicle3DWrapper'; // On utilise le nom générique
import { cars } from '@/data/data';
import Link from 'next/link';

export default function FleetPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif italic mb-4">La Flotte</h1>
        <p className="text-zinc-500 max-w-2xl mb-12 italic">
          Une sélection rigoureuse de véhicules de prestige pour vos déplacements à Montréal. 
          Confort, discrétion et technologie de pointe.
        </p>

        {/* 1. SUPPRIME l'intégration 3D fixe qui était ici */}

        {/* 2. GRILLE DES VOITURES : On intègre la 3D DANS la boucle */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
         {cars.map((car) => (
  <div key={car.id} className="group border border-zinc-900 p-6 bg-zinc-950/50">
    {/* On passe tout l'objet car au wrapper */}
    <Vehicle3DWrapper car={car} />

               <div className="mt-8">
                 <h3 className="text-2xl font-serif italic mb-2">{car.name}</h3>
                 <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-6">{car.category}</p>
                 
                 <Link href={`/flotte/${car.id}`} className="text-yellow-600 text-[10px] uppercase tracking-widest font-bold border-b border-transparent hover:border-yellow-600 pb-1 transition-all">
                   Détails du véhicule →
                 </Link>
               </div>
            </div>
          ))}
        </div>
      </section>

      
    </main>
  );
}