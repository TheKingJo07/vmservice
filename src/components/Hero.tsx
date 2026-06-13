import { useEffect, useState } from "react";
import { MessageCircle, Zap, Truck, ShieldCheck, ArrowRight } from "lucide-react";
import heroTruck from "../assets/hero-truck.jpg";

const WA = "https://wa.me/22900000000?text=Bonjour%20VM%20Service%2C%20je%20souhaite%20commander.";

export function Hero() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const on = () => setY(window.scrollY);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden" style={{ background: "linear-gradient(135deg,#0A2E6B 0%,#0B1736 100%)" }}>
      <div className="absolute inset-0 z-0">
        <img src={heroTruck} alt="Distribution VM Services" className="w-full h-full object-cover opacity-30" style={{ transform: `translateY(${y * 0.25}px) scale(1.08)` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg,#0A2E6B 0%,rgba(10,46,107,0.85) 45%,transparent 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(0deg,#0B1736 0%,transparent 60%)" }} />
      </div>

      <div className="pointer-events-none absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-30 bg-royal" />
      <div className="pointer-events-none absolute bottom-20 right-0 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-20 bg-cyan" />

      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-56 lg:pb-72">
        <div className="reveal max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.25em] mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan" />
            </span>
            Distributeur Agréé des produits de la SOBEBRA · Bénin
          </div>

          <h1 className="font-display font-extrabold uppercase leading-[0.9] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8 text-white">
            VM SERVICES<br />
            <span className="text-gradient">BÉNIN</span>
          </h1>

          <p className="text-lg md:text-xl text-white/75 max-w-xl leading-relaxed mb-12">
            Distribution de boissons SOBEBRA en gros volume avec livraison rapide.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle className="w-5 h-5" />
              Commander sur WhatsApp
            </a>
            <a href="#services" className="btn-ghost bg-white/10 text-white border-white/20 hover:bg-white/20">
              Découvrir nos services
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>

      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-white/5 backdrop-blur-2xl py-8 z-10">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { Icon: Zap, value: "24H", label: "Livraison Express" },
            { Icon: Truck, value: "500+", label: "Partenaires Actifs" },
            { Icon: ShieldCheck, value: "100%", label: "Certification SOBEBRA" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl grid place-items-center bg-cyan/20 text-cyan">
                <s.Icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-display font-extrabold text-3xl text-white">{s.value}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/60">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
