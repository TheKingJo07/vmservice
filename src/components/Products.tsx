import { Boxes, Package, MessageCircle, ArrowRight } from "lucide-react";
import beer from "../assets/beer.jpg";
import water from "../assets/water.jpg";

const blocks = [
  {
    icon: Boxes,
    tag: "Gros volume",
    title: "Casiers de boissons SOBEBRA",
    desc: "Distribution en gros de casiers de boissons SOBEBRA. Bouteilles consignées, casiers complets, palettes entières, livrés directement chez vous.",
    img: beer,
    cta: "Commander en gros",
    wa: "Bonjour, je souhaite commander des casiers SOBEBRA en gros.",
  },
  {
    icon: Package,
    tag: "Gros & détail",
    title: "Packs de boissons plastiques (PET)",
    desc: "Vente en gros et détail de packs de boissons SOBEBRA en bouteilles PET. Packs et cartons disponibles pour tous formats.",
    img: water,
    cta: "Commander maintenant",
    wa: "Bonjour, je souhaite commander des packs PET.",
  },
];

export function Products() {
  return (
    <section id="produits" className="relative py-28 bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-royal font-bold">Nos Produits</div>
          <h2 className="mt-3 text-4xl md:text-6xl font-display font-extrabold tracking-tight">
            Deux formats. <span className="text-gradient">Un seul standard.</span>
          </h2>
          <p className="mt-4 text-ink/60">Distribution massive de boissons SOBEBRA, du casier consigné au pack PET.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {blocks.map((b) => (
            <article key={b.title} className="reveal group relative rounded-[2rem] overflow-hidden bg-white border border-navy/10 hover:border-royal/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow">
              <div className="relative aspect-[16/11] overflow-hidden">
                <img src={b.img} alt={b.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,transparent 30%,rgba(10,23,54,0.85) 100%)" }} />
                <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-white/90 text-[11px] uppercase tracking-[0.2em] font-bold text-navy">{b.tag}</div>
                <div className="absolute bottom-5 left-5 w-14 h-14 rounded-2xl grid place-items-center bg-gradient-primary text-white shadow-glow">
                  <b.icon className="w-7 h-7" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-display font-extrabold text-2xl md:text-3xl leading-tight">{b.title}</h3>
                <p className="mt-3 text-ink/70 leading-relaxed">{b.desc}</p>
                <a href={`https://wa.me/22900000000?text=${encodeURIComponent(b.wa)}`} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">
                  <MessageCircle className="w-4 h-4" />
                  {b.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="reveal mt-10 text-center text-sm text-ink/50 italic">Vente au détail disponible selon disponibilité du stock.</p>
      </div>
    </section>
  );
}
