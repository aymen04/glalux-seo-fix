export default function AeroportPage() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
        Transfert Aéroport Montréal-Trudeau (YUL) : <span className="text-zinc-500 font-light italic">L'Excellence du Chauffeur Privé</span>
      </h1>

      <div className="space-y-8 text-lg text-zinc-400 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Votre Liaison VIP vers Montréal-Trudeau</h2>
          <p>
            Ne laissez pas le stress du stationnement ou des taxis imprévisibles gâcher votre départ de <strong>Montréal</strong>. 
            GLA LUX propose un service de <strong>transfert aéroportuaire haut de gamme</strong> disponible 24h/24 et 7j/7. 
            Que vous résidiez au centre-ville, à Laval ou sur la Rive-Sud, nos chauffeurs professionnels assurent une ponctualité rigoureuse pour tous vos vols au départ de <strong>YUL</strong>.
          </p>
        </section>

        <section className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800">
          <h2 className="text-2xl font-semibold text-white mb-4">Accueil Personnalisé & Meet & Greet</h2>
          <p>
            À votre arrivée à l'Aéroport Pierre-Elliott-Trudeau, profitez de notre service d'accueil exclusif. 
            Votre chauffeur vous attendra à la sortie des bagages avec une pancarte personnalisée, prêt à vous aider avec vos valises 
            et à vous conduire vers votre <strong>véhicule de luxe</strong> pour un trajet serein vers votre destination finale au Québec.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Pourquoi Choisir GLA LUX pour YUL ?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Suivi des vols en temps réel :</strong> Nous ajustons l'heure de prise en charge en cas de retard.</li>
            <li><strong>Confort Premium :</strong> Flotte de SUV (GMC Yukon) et Berlines (Tesla) impeccables.</li>
            <li><strong>Tarification Transparente :</strong> Aucun frais caché, même pour les trajets de nuit.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}