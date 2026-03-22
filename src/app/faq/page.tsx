import Navbar from '@/components/Navbar';

const faqs = [
  { q: "Quels services offrez-vous exactement ?", a: "Nous proposons un service de limousine de luxe avec chauffeur professionnel pour : transferts aéroport, voyages d'affaires, mariages, événements VIP et soirées." },
  { q: "Comment puis-je réserver un véhicule ?", a: "La réservation est simple ! Vous pouvez réserver en ligne via notre site, par téléphone ou via notre application mobile. Choisissez votre véhicule, lieu, date et heure, nous nous occupons du reste." },
  { q: "Quels sont les modes de paiement acceptés ?", a: "Nous acceptons toutes les cartes de crédit majeures et les virements bancaires. Pour les longs trajets, un devis personnalisé est fourni." },
  { q: "Offrez-vous des forfaits spéciaux ?", a: "Oui, nous avons des forfaits pour mariages et événements corporatifs, ainsi que des réductions pour nos clients réguliers." },
  { q: "Quelle est la taille de votre flotte ?", a: "Notre flotte inclut des SUV (GMC Yukon XL, Cadillac Escalade, Ford Expedition) pour 6 passagers et des Limousines Lincoln MKT pour 7 passagers." },
  { q: "Que se passe-t-il en cas de retard de vol ?", a: "Nous surveillons les horaires de vols en temps réel à l'Aéroport YUL pour ajuster notre arrivée à la vôtre." },
  { q: "Quelle est votre zone de service ? Puis-je voyager hors de la région ?", a: "Nous opérons principalement dans la **grande région de Montréal** et ses environs (Laval, Longueuil, Rive-Nord et Rive-Sud). Cependant, nous proposons également des services de transport longue distance vers d'autres provinces (Ontario, Maritimes) ou vers les États-Unis. Contactez-nous pour un devis personnalisé selon votre destination."}
];

export default function FAQPage() {
  return (
    <main className="bg-black min-h-screen text-white pt-40 pb-20 px-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-serif italic mb-12 border-b border-yellow-600 pb-6 text-center">Questions Fréquentes</h1>
        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-zinc-900 p-8 bg-zinc-950/50 hover:border-zinc-800 transition">
              <h3 className="text-yellow-600 font-bold mb-4 uppercase tracking-widest text-xs">Question {i + 1}</h3>
              <h4 className="text-2xl font-serif mb-4">{faq.q}</h4>
              <p className="text-zinc-500 leading-relaxed italic">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}