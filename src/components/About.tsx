import { Clock, ShieldCheck, CheckCircle2, MapPin } from "lucide-react";
import warehouse from "../assets/warehouse.jpg";

const points = [
  { icon: Clock, title: "Rapidité", text: "Livraison en moins de 24h." },
  { icon: ShieldCheck, title: "Fiabilité", text: "Produits 100% officiels SOBEBRA, traçabilité garantie." },
  { icon: CheckCircle2, title: "Disponibilité", text: "Stock permanent, équipe joignable 7j/7 sur WhatsApp." },
  { icon: MapPin, title: "Couverture", text: "Parakou et environs." },
];

export function About() {
  return (
    <section id="apropos" className="relative py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-cyan/20" />
          <img src={warehouse} alt="Entrepôt VM Services" className="relative rounded-3xl shadow-soft object-cover w-full h-[520px]" />
          <div className="absolute -bottom-6 -right-6 rounded-2xl bg-white p-5 shadow-glow border border-navy/10">
            <div className="text-3xl font-display font-extrabold text-gradient">+10 ans</div>
            <div className="text-xs text-ink/60 uppercase tracking-wider">d'expérience terrain</div>
          </div>
        </div>

        <div className="reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-royal font-bold">Qui sommes-nous</div>
          {/* <h2 className="mt-3 text-4xl md:text-5xl font-display font-extrabold">
            Distributeur agréé des produits SOBEBRA <br /><span className="text-gradient">au Bénin</span>
          </h2> */}
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-extrabold">
  <span style={{ color: "#FFD700" }}>
    Distributeur agréé des produits SOBEBRA
  </span>
  <br />
  <span className="text-gradient">au Bénin</span>
</h2>
          <p className="mt-5 text-ink/70 text-lg leading-relaxed">
            VM Services est une entreprise spécialisée dans la distribution de boissons et de produits de grande consommation.
            Distributeur agréé des produits de la SOBEBRA, nous approvisionnons particuliers, commerçants, bars, restaurants, événements
            et revendeurs avec puissance logistique et fiabilité.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {points.map((p) => (
              <div key={p.title} className="group rounded-2xl border border-navy/10 bg-white p-5 hover:border-royal/40 hover:shadow-soft transition">
                <div className="w-11 h-11 rounded-xl grid place-items-center mb-3 bg-gradient-primary text-white group-hover:scale-110 transition">
                  <p.icon className="w-5 h-5" />
                </div>
                {/* <div className="font-display font-bold">{p.title}</div> */}
                <div className="font-display font-bold" style={{ color: "#FFD700" }}>{p.title}</div>
                <div className="text-sm text-ink/60 mt-1">{p.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
