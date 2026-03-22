import { cars } from '@/data/data';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function CarDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const car = cars.find((c) => c.id === id);

  if (!car) notFound();

  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* COLONNE GAUCHE : GALERIE D'IMAGES */}
          <div className="space-y-6">
            <div className="relative aspect-video rounded-sm overflow-hidden border border-zinc-900 shadow-2xl">
              <Image 
  src={car.image} 
  alt={car.title} 
  fill 
  // Correction ici : 100% sur mobile, 50% sur PC
  sizes="(max-w-1024px) 100vw, 50vw"
  className="object-cover" 
  priority 
/>
            </div>
            
            {/* AFFICHAGE DES IMAGES SUPPLÉMENTAIRES */}
            <div className="grid grid-cols-2 gap-4">
              {car.gallery?.map((img, index) => (
                <div key={index} className="relative aspect-video rounded-sm overflow-hidden border border-zinc-900 group">
                  <Image 
                    src={img} 
                    alt={`${car.name} - Détail ${index + 1}`} 
                    fill 
                    className="object-cover transition duration-500 group-hover:scale-110" 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* COLONNE DROITE : INFOS ET RÉSERVATION */}
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-6xl font-serif italic mb-4">{car.name}</h1>
            <p className="text-yellow-600 font-bold tracking-[0.3em] uppercase text-sm mb-8">Service Premium Chauffeur Montréal</p>
            
            <div className="bg-zinc-950 p-8 border border-zinc-900 rounded-sm mb-10">
               <h2 className="text-xl font-serif mb-4 text-white">Tarification & Capacité</h2>
               <ul className="space-y-4 text-zinc-400">
                  <li className="flex justify-between border-b border-zinc-900 pb-2">
                    <span>Prix horaire :</span> <span className="text-white font-bold">{car.price} / h</span>
                  </li>
                  <li className="flex justify-between border-b border-zinc-900 pb-2">
                    <span>Passagers :</span> <span className="text-white">{car.passengers}</span>
                  </li>
                  <li className="flex justify-between border-b border-zinc-900 pb-2">
                    <span>Bagages :</span> <span className="text-white">{car.luggage}</span>
                  </li>
               </ul>
            </div>

            <p className="text-zinc-500 leading-relaxed italic mb-10">
              {car.description}
            </p>

            <Link href="/reservation" className="w-full text-center bg-yellow-600 text-black font-bold py-5 uppercase text-xs tracking-widest hover:bg-white transition duration-300">
              Réserver ce véhicule maintenant
            </Link>
          </div>
        </div>

        {/* SECTION RÉASSURANCE (Correction du Thin Content pour l'Audit) */}
        <div className="grid md:grid-cols-3 gap-10 pt-20 border-t border-zinc-900">
          <div className="text-center">
            <h3 className="text-yellow-500 font-serif italic mb-2">Confort Absolu</h3>
            <p className="text-zinc-500 text-xs leading-relaxed italic">Intérieur cuir, climatisation multizone et Wi-Fi à bord de chaque véhicule.</p>
          </div>
          <div className="text-center">
            <h3 className="text-yellow-500 font-serif italic mb-2">Ponctualité YUL</h3>
            <p className="text-zinc-500 text-xs leading-relaxed italic">Suivi des vols en temps réel pour tous les transferts à l'Aéroport de Montréal.</p>
          </div>
          <div className="text-center">
            <h3 className="text-yellow-500 font-serif italic mb-2">Chauffeurs Certifiés</h3>
            <p className="text-zinc-500 text-xs leading-relaxed italic">Discrétion, professionnalisme et bilinguisme garantis.</p>
          </div>
        </div>
      </section>
    </main>
  );
}