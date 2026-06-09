import { Facebook, Instagram, MessageCircle } from "lucide-react";
import logo from "../assets/vm-logo.jpg";

export function Footer() {
  return (
    <footer className="bg-ink text-white/70 py-14 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white grid place-items-center overflow-hidden">
              <img src={logo} alt="VM Service" className="w-full h-full object-contain p-1" />
            </div>
            <div>
              <div className="font-display font-extrabold text-white text-lg">VM SERVICE</div>
              <div className="text-[10px] uppercase tracking-[0.18em]">Distributeur Agréé SOBEBRA</div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed">Distribution de boissons SOBEBRA en gros et en détail. Cotonou, Calavi et environs.</p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-4">Navigation</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#apropos" className="hover:text-cyan">À propos</a></li>
            <li><a href="#produits" className="hover:text-cyan">Produits</a></li>
            <li><a href="#services" className="hover:text-cyan">Services</a></li>
            <li><a href="#galerie" className="hover:text-cyan">Galerie</a></li>
            <li><a href="#contact" className="hover:text-cyan">Contact</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-4">Suivez-nous</div>
          <div className="flex gap-3">
            {[Facebook, Instagram, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" className="w-11 h-11 rounded-xl grid place-items-center border border-white/15 hover:border-cyan hover:text-cyan transition">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 mt-10 pt-6 border-t border-white/10 text-xs uppercase tracking-wider text-center">
        © {new Date().getFullYear()} VM Service Bénin · Distributeur Agréé Officiel SOBEBRA · Tous droits réservés
      </div>
    </footer>
  );
}
