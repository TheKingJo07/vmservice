import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  { name: "Bar Le Tropical", role: "Parakou", text: "Livraison ponctuelle, équipe pro. Notre stock ne tombe plus jamais à zéro." },
  { name: "Mariage D'un Cadre à Parakou", role: "Parakou", text: "200 invités servis sans rupture. Reprise des invendus le lendemain, parfait." },
  { name: "Hôtel", role: "Parakou", text: "Tarifs gros imbattables et facturation claire. Un vrai partenaire." },
  { name: "Maquis", role: "Parakou", text: "WhatsApp, paiement, livraison : tout est fluide. Je recommande." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative py-28 bg-gray-50">
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal text-center mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-royal font-bold">Témoignages</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-extrabold">Ils nous font <span className="text-gradient">confiance</span></h2>
        </div>

        <div className="reveal relative rounded-3xl bg-white border border-navy/10 p-10 md:p-14 shadow-soft">
          <Quote className="absolute top-6 right-6 w-12 h-12 text-royal/15" />
          <div className="flex gap-0.5 mb-4">
            {[...Array(5)].map((_, k) => <Star key={k} className="w-5 h-5 fill-cyan text-cyan" />)}
          </div>
          <blockquote key={i} className="text-xl md:text-2xl text-ink/80 leading-relaxed animate-fade-in">"{items[i].text}"</blockquote>
          <div className="mt-6 pt-6 border-t border-navy/10 flex items-center justify-between">
            <div>
              <div className="font-display font-extrabold text-lg">{items[i].name}</div>
              <div className="text-xs text-ink/60 uppercase tracking-wider">{items[i].role}</div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setI((v) => (v - 1 + items.length) % items.length)} className="w-10 h-10 rounded-full border border-navy/10 grid place-items-center hover:bg-navy hover:text-white transition" aria-label="Précédent">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => setI((v) => (v + 1) % items.length)} className="w-10 h-10 rounded-full border border-navy/10 grid place-items-center hover:bg-navy hover:text-white transition" aria-label="Suivant">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="mt-6 flex gap-2 justify-center">
            {items.map((_, k) => (
              <button key={k} onClick={() => setI(k)} className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-royal" : "w-2 bg-navy/20"}`} aria-label={`Slide ${k + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
