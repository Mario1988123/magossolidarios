import FadeIn from "./FadeIn";
import { useState } from "react";
import { Mail, Facebook, Instagram, Youtube } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ nombre: "", email: "", necesitas: "", mensaje: "" });
  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const inputClass = "w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50";

  return (
    <section id="contacto" className="section-padding bg-secondary">
      <div className="container mx-auto max-w-4xl">
        <FadeIn>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase text-center mb-3">Contacto</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-6">
            Hablemos de <span className="text-gradient-gold">magia</span>
          </h2>
          <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Si deseas solicitar una actuación solidaria, contratar un espectáculo, hacerte socio o resolver cualquier duda, estaremos encantados de escucharte.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn delay={0.1}>
            <div className="bg-card rounded-lg p-8 border border-border shadow-card">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">Formulario de contacto</h3>
              <div className="space-y-4">
                <input placeholder="Nombre" value={form.nombre} onChange={handleChange("nombre")} className={inputClass} />
                <input placeholder="Email" value={form.email} onChange={handleChange("email")} className={inputClass} />
                <input placeholder="¿Qué necesitas?" value={form.necesitas} onChange={handleChange("necesitas")} className={inputClass} />
                <textarea placeholder="Mensaje" rows={4} value={form.mensaje} onChange={handleChange("mensaje")} className={`${inputClass} resize-none`} />
                <button className="w-full bg-gradient-gold text-primary-foreground font-body font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity shadow-gold">
                  Enviar mensaje
                </button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <h4 className="font-body text-foreground font-semibold">Email</h4>
                </div>
                <a href="mailto:info@magossolidarios.com" className="font-body text-muted-foreground hover:text-primary transition-colors">
                  info@magossolidarios.com
                </a>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <h4 className="font-body text-foreground font-semibold mb-4">Síguenos</h4>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/magos.solidarios.ong" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary/50 hover:text-primary transition-colors text-muted-foreground">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/magos.solidarios/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary/50 hover:text-primary transition-colors text-muted-foreground">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://www.youtube.com/@magossolidarios" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary/50 hover:text-primary transition-colors text-muted-foreground">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
