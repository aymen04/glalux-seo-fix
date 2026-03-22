'use client';

import { useState } from 'react';
import { cars } from '@/data/data';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

export default function RevolutionaryReservation() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    car: '',
    date: '',
    time: '',
    pickup: '',
    email: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Générateur de créneaux horaires pour éviter de taper au clavier
  const timeSlots = [
    "00:00", "02:00", "04:00", "06:00", "08:00", "09:00", 
    "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", 
    "16:00", "17:00", "18:00", "19:00", "20:00", "22:00"
  ];

  return (
    <main className="bg-black min-h-screen text-white font-sans overflow-x-hidden">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        {/* BARRE DE PROGRESSION */}
        <div className="flex justify-between mb-20 relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-zinc-900 -z-10"></div>
          {[1, 2, 3].map((s) => (
            <div 
              key={s} 
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${step >= s ? 'border-yellow-600 bg-black text-yellow-600' : 'border-zinc-800 bg-zinc-950 text-zinc-600'}`}
            >
              0{s}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* ÉTAPE 1 : LE SERVICE */}
          {step === 1 && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              <h1 className="text-5xl md:text-7xl font-serif italic text-center mb-16 tracking-tighter">Votre <span className="text-zinc-600">Prestation</span></h1>
              <div className="grid md:grid-cols-2 gap-8">
                {['Transfert Aéroport YUL', 'Mariage & Prestige'].map((type) => (
                  <button 
                    key={type}
                    onClick={() => { setFormData({...formData, service: type}); nextStep(); }}
                    className="group p-12 border border-zinc-900 bg-zinc-950/50 hover:border-yellow-600 transition-all text-center relative overflow-hidden"
                  >
                    <span className="block text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-4 group-hover:text-yellow-600 transition">Sélectionner</span>
                    <span className="text-2xl font-serif italic">{type}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* ÉTAPE 2 : LA FLOTTE VISUELLE */}
          {step === 2 && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              <h2 className="text-4xl font-serif italic text-center uppercase tracking-tighter">Sélection du <span className="text-yellow-600">Véhicule</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cars.map((car) => (
                  <div 
                    key={car.id}
                    onClick={() => { setFormData({...formData, car: car.name}); nextStep(); }}
                    className="relative aspect-[4/5] group cursor-pointer overflow-hidden border border-zinc-900 rounded-sm"
                  >
                    <Image 
                      src={car.image} 
                      alt={car.name} 
                      fill 
                      sizes="(max-w-768px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-100" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-6 flex flex-col justify-end">
                      <p className="text-[10px] uppercase tracking-widest text-yellow-600 mb-2 font-bold">{car.category}</p>
                      <h3 className="text-xl font-serif italic">{car.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={prevStep} className="text-zinc-600 hover:text-white uppercase text-[10px] tracking-widest border-b border-zinc-800 pb-1">← Retour au service</button>
            </motion.div>
          )}

          {/* ÉTAPE 3 : CALENDRIER ET HEURE (ZÉRO CLAVIER) */}
          {step === 3 && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
              className="max-w-4xl mx-auto space-y-12"
            >
              <h2 className="text-4xl font-serif italic text-center">Planification <span className="text-zinc-500">VIP</span></h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                {/* BLOC DATE */}
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 block">1. Choisir la date</label>
                  <input 
    type="date" 
    min={new Date().toISOString().split('T')[0]}
    onChange={(e) => setFormData({...formData, date: e.target.value})}
    className="w-full bg-zinc-800 border border-zinc-700 p-6 text-xl text-yellow-600 outline-none focus:border-yellow-600 transition cursor-pointer appearance-none rounded-none shadow-inner"
  />
                </div>

                {/* BLOC HEURE (Grille de boutons) */}
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 block">2. Heure de prise en charge</label>
                  <div className="grid grid-cols-3 gap-2 h-44 overflow-y-auto pr-2 custom-scrollbar border border-zinc-900 p-2 bg-zinc-950/30">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setFormData({...formData, time: t})}
                        className={`py-3 text-xs border transition-all ${formData.time === t ? 'border-yellow-600 bg-yellow-600 text-black font-bold' : 'border-zinc-800 text-zinc-500 hover:border-zinc-600'}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* CHAMPS DE CONTACT MINIMAUX */}
              <div className="space-y-6 pt-10 border-t border-zinc-900">
                <input 
                  type="text" 
                  placeholder="Lieu de prise en charge (ex: Aéroport YUL)" 
                  className="w-full bg-transparent border-b border-zinc-800 p-4 text-xl outline-none focus:border-yellow-600 transition"
                  onChange={(e) => setFormData({...formData, pickup: e.target.value})}
                />
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="w-full bg-transparent border-b border-zinc-800 p-4 text-xl outline-none focus:border-yellow-600 transition"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="pt-8">
                <button className="w-full bg-yellow-600 text-black font-black py-6 uppercase text-xs tracking-[0.5em] hover:bg-white transition duration-500 shadow-[0_0_40px_rgba(202,138,4,0.15)]">
                  Confirmer la demande de devis
                </button>
                <div className="flex justify-between mt-8">
                  <button onClick={prevStep} className="text-zinc-600 hover:text-white uppercase text-[10px] tracking-widest border-b border-zinc-900 pb-1">← Changer de véhicule</button>
                  <p className="text-[9px] text-zinc-700 uppercase tracking-widest italic">Réponse garantie sous 15 minutes</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* CSS personnalisé pour la scrollbar des heures */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #09090b; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #ca8a04; }
      `}</style>
    </main>
  );
}