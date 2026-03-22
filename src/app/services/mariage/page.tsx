export default function MariagePage() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
        Location de Voiture de Mariage <br /><span className="text-zinc-500 font-light italic">avec Chauffeur à Montréal</span>
      </h1>

      <div className="space-y-8 text-lg text-zinc-400 leading-relaxed">
        <p>
          Pour le plus beau jour de votre vie, l'entrée doit être mémorable. Notre service de <strong>location de voiture de mariage 
          avec chauffeur</strong> offre l'élégance et la classe que votre événement mérite dans le Grand Montréal.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Une Flotte Prestigieuse pour Votre Union</h2>
          <p>
            Choisissez le raffinement d'une berline noire pour le couple ou optez pour l'espace généreux d'un <strong>GMC Yukon XL Denali</strong> 
            pour transporter vos demoiselles d'honneur et votre famille proche. Nos véhicules sont méticuleusement préparés et 
            peuvent être décorés selon le thème de votre mariage.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="border border-zinc-800 p-6 rounded-2xl">
            <h3 className="text-white font-bold mb-2">Service Sur-Mesure</h3>
            <p className="text-sm">Nous couvrons les plus beaux lieux de réception de la Rive-Nord aux Cantons-de-l'Est.</p>
          </div>
          <div className="border border-zinc-800 p-6 rounded-2xl">
            <h3 className="text-white font-bold mb-2">Discrétion & Élégance</h3>
            <p className="text-sm">Chauffeurs en tenue de cérémonie pour une image impeccable devant vos invités.</p>
          </div>
        </section>
      </div>
    </main>
  );
}