import { Facebook, Instagram, Youtube } from "lucide-react";
import logoCompleto from "@/assets/logo-completo.png";
import logoTexto from "@/assets/logo-texto.png";

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/magos.solidarios.ong", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/magos.solidarios/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@magossolidarios", label: "YouTube" },
];

const Footer = () => (
  <footer className="bg-background border-t border-border py-8 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Magos Solidarios" className="h-10 w-10 rounded-full object-cover" />
        <p className="font-logo text-xl text-primary">Magos Solidarios</p>
      </div>
      <div className="flex items-center gap-4">
        {socialLinks.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-muted-foreground hover:text-accent transition-colors">
            <s.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
      <p className="font-body text-muted-foreground text-sm">
        © {new Date().getFullYear()} Asociación de Magos Solidarios. Registro Nacional: 631161.
      </p>
      <a href="mailto:info@magossolidarios.com" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
        info@magossolidarios.com
      </a>
    </div>
  </footer>
);

export default Footer;
