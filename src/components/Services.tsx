import { Truck, Boxes, PartyPopper, Headphones, Store, Building2, Wine, Utensils } from "lucide-react";

const services = [
  { icon: Truck, title: "Livraison rapide", text: "en 24h chrono." },
  { icon: Boxes, title: "Vente en gros", text: "Tarifs adaptés aux gros volumes pour revendeurs." },
  { icon: Store, title: "Vente au détail", text: "Disponible selon stock pour les particuliers." },
  { icon: PartyPopper, title: "Événementiel", text: "Mariages, fêtes, concerts : approvisionnement complet." },
  { icon: Wine, title: "Bars & maquis", text: "Approvisionnement régulier avec planning sur mesure." },
  { icon: Utensils, title: "Restaurants", text: "Solutions B2B fiables et planifiées." },
  { icon: Building2, title: "Entreprises", text: "Contrats cadres pour vos besoins continus." },
  { icon: Headphones, title: "Support 7j/7", text: "Équipe joignable sur WhatsApp en permanence." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-10 -translate-y-1/3 translate-x-1/3 bg-royal" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-royal font-bold">Services</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-extrabold">Une logistique <span className="text-gradient">sans friction</span></h2>
          <p className="mt-4 text-ink/60">De la commande au déchargement, tout est pensé pour vous faire gagner du temps.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={s.title} className="reveal group relative rounded-3xl border border-navy/10 bg-white p-7 hover:-translate-y-2 hover:shadow-glow transition duration-500" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="w-14 h-14 rounded-2xl grid place-items-center mb-5 bg-gradient-primary text-white shadow-glow group-hover:scale-110 group-hover:rotate-6 transition">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-ink/60 leading-relaxed">{s.text}</p>
              <div className="mt-6 text-xs font-mono text-ink/30">0{i + 1} / 0{services.length}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
