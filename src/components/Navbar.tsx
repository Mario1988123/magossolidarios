import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo} alt="Magos Solidarios" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-display text-xl font-bold text-primary">Magos Solidarios</span>
        </a>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#donativo"
          className="hidden lg:inline-flex bg-gradient-gold text-primary-foreground font-body font-semibold text-sm px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
        >
          Donar
        </a>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-lg border-b border-border">
          <ul className="flex flex-col py-4 px-4 gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-body text-muted-foreground hover:text-primary transition-colors"
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
