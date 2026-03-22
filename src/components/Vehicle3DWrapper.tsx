'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';

// On importe le Viewer dynamiquement pour la performance (Audit SEO)
const VehicleViewer = dynamic(() => import('./VehicleViewer'), { 
  ssr: false, 
  loading: () => <div className="h-full w-full bg-zinc-900 animate-pulse flex items-center justify-center text-[9px] text-zinc-600 uppercase tracking-widest">Initialisation...</div> 
});

export default function Vehicle3DWrapper({ car }: { car: any }) {
  return (
    <div className="relative w-full h-[400px] bg-zinc-950 border border-zinc-900 overflow-hidden group">
      {car.hasModel ? (
        // IMPORTANT : On extrait car.id pour le donner au Viewer
        <VehicleViewer modelName={car.id} />
      ) : (
        // IMAGE DE SECOURS (Si hasModel: false)
        <div className="relative w-full h-full">
          <Image 
            src={car.image} 
            alt={car.name} 
            fill 
            className="object-cover opacity-40 group-hover:opacity-100 transition duration-700"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-500 border border-zinc-800 px-4 py-2 bg-black/50">
              3D en cours de préparation
            </span>
          </div>
        </div>
      )}
    </div>
  );
}