import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/vm-logo.jpg";

const links = [
  { href: "#apropos", label: "À propos" },
  { href: "#produits", label: "Produits" },
  { href: "#services", label: "Services" },
  { href: "#galerie", label: "Galerie" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/85 backdrop-blur-xl border-b border-navy/10 shadow-sm" : "bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-white grid place-items-center overflow-hidden ring-1 ring-navy/10 shadow-sm">
            <img src={logo} alt="VM Service" className="w-full h-full object-contain p-1" />
          </div>
          <div className="leading-none">
            <span className="block font-display font-extrabold text-lg uppercase tracking-tight">
              VM <span className="text-royal">SERVICE</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-ink/60 font-semibold">
              Distributeur Agréé Officiel SOBEBRA
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-[11px] font-bold tracking-[0.18em] text-ink/70 uppercase">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-royal transition-colors">{l.label}</a>
          ))}
        </nav>

        <a href="#contact" className="hidden md:inline-flex px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] text-white shadow-md hover:scale-105 transition" style={{ background: "linear-gradient(135deg,#0A2E6B,#1B4DFF)" }}>
          Commander
        </a>

        <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-navy/10 bg-white/95 backdrop-blur-xl animate-slide-up">
          <div className="flex flex-col p-4 gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-3 py-3 rounded-lg uppercase text-sm tracking-[0.15em] font-semibold hover:bg-navy/5">{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-full px-5 py-3 text-center font-bold uppercase tracking-[0.18em] text-xs text-white" style={{ background: "linear-gradient(135deg,#0A2E6B,#1B4DFF)" }}>
              Commander
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
