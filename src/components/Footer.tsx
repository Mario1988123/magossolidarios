const Footer = () => (
  <footer className="bg-background border-t border-border py-8 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-display text-lg font-bold text-primary">Magos Solidarios</p>
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
