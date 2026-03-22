import Navbar from '@/components/Navbar';

export default function AboutUs() {
  return (
    <main className="bg-[#050505] min-h-screen text-white">
      <Navbar />
      <section className="pt-40 pb-20 px-10 max-w-5xl mx-auto">
        <span className="text-yellow-500 uppercase tracking-[0.5em] text-[10px] mb-6 block font-bold">Notre Signature</span>
        <h1 className="text-5xl md:text-7xl font-serif mb-12 italic leading-tight text-white">
          L'Héritage du Luxe <br />au Coeur de Montréal
        </h1>
        
        <div className="grid md:grid-cols-2 gap-16 text-zinc-400 leading-loose font-light">
          <div className="space-y-6">
            <p className="text-white text-xl font-serif italic">"Plus qu'un simple trajet, nous offrons une signature de prestige à chaque kilomètre."</p>
            <p>
              Depuis sa fondation à <strong>Montréal</strong>, GLA LUX s'est imposé comme le leader du transport VIP au Québec. 
              Notre philosophie repose sur trois piliers fondamentaux : la sécurité, la discrétion absolue et un confort sans compromis.
            </p>
            <p>
              Nous comprenons que pour nos clients corporatifs et VIP, le temps est la ressource la plus précieuse. 
              C'est pourquoi chaque itinéraire vers l'<strong>Aéroport YUL</strong> ou le centre-ville est planifié avec une précision chirurgicale.
            </p>
          </div>
          <div className="space-y-6">
            <p>
              Notre flotte moderne, incluant le spacieux <strong>GMC Yukon XL Denali</strong> et la <strong>Tesla Model Y</strong> éco-responsable, 
              répond aux standards les plus élevés de l'industrie du transport de grande remise.
            </p>
            <p>
              Chaque chauffeur GLA LUX est rigoureusement sélectionné pour son professionnalisme et sa connaissance parfaite des axes routiers québécois, 
              du pont Samuel-De Champlain à l'autoroute 40, garantissant une sérénité totale à nos passagers.
            </p>
            <div className="pt-10 border-t border-yellow-600/20">
              <h3 className="text-yellow-500 font-serif italic text-2xl mb-2 text-right">GLA LUX Team</h3>
              <p className="text-[10px] uppercase tracking-widest text-right">Service Premium 24/7</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}