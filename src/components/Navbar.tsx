import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoCompleto from "@/assets/logo-completo.png";
import logoTexto from "@/assets/logo-texto.png";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes Somos", href: "#quienes-somos" },
  { label: "Impacto", href: "#impacto" },
  { label: "Colabora", href: "#colabora" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Switch logo when hero logo is no longer visible (~400px)
      setScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-border/50" style={{ backgroundColor: 'hsl(230 30% 10% / 0.92)' }}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#inicio" className="flex items-center gap-2">
          {scrolled ? (
            <>
              <img src={logoCompleto} alt="Magos Solidarios" className="h-12 w-auto object-contain" />
              <img src={logoTexto} alt="Magos Solidarios" className="h-8 w-auto object-contain" />
            </>
          ) : (
            <img src={logoTexto} alt="Magos Solidarios" className="h-10 w-auto object-contain" />
          )}
        </a>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-body text-white/70 hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#donativo"
            className="bg-gradient-gold text-primary-foreground font-body font-semibold text-sm px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Donar
          </a>
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="text-white">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden backdrop-blur-lg border-b border-border/50" style={{ backgroundColor: 'hsl(230 30% 10% / 0.95)' }}>
          <ul className="flex flex-col py-4 px-4 gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-body text-white/70 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#donativo"
                onClick={() => setOpen(false)}
                className="inline-flex bg-gradient-gold text-primary-foreground font-body font-semibold text-sm px-6 py-2 rounded-lg"
              >
                Donar
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
