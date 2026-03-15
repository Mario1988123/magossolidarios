import FadeIn from "./FadeIn";
import { useState } from "react";

const WorkWithUsSection = () => {
  const [formData, setFormData] = useState({
    nombre: "", apellidos: "", email: "", telefono: "",
    domicilio: "", cp: "", poblacion: "", provincia: "", pais: "",
    colaborarComo: "", mensaje: "",
  });

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const inputClass = "w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50";

  return (
    <section id="trabaja" className="section-padding bg-secondary">
      <div className="container mx-auto max-w-3xl">
        <FadeIn>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase text-center mb-3">Trabaja con Nosotros</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-6">
            Pon tu talento al <span className="text-gradient-gold">servicio</span>
          </h2>
          <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Si eres artista, voluntario o profesional y quieres participar en actuaciones benéficas,
            apoyar en la organización de eventos o colaborar en proyectos de recaudación, este es tu lugar.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-card rounded-lg p-8 border border-border shadow-card">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input placeholder="Nombre" value={formData.nombre} onChange={handleChange("nombre")} className={inputClass} />
              <input placeholder="Apellidos" value={formData.apellidos} onChange={handleChange("apellidos")} className={inputClass} />
              <input placeholder="Email" value={formData.email} onChange={handleChange("email")} className={inputClass} />
              <input placeholder="Teléfono" value={formData.telefono} onChange={handleChange("telefono")} className={inputClass} />
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <input placeholder="Domicilio" value={formData.domicilio} onChange={handleChange("domicilio")} className={inputClass} />
              <input placeholder="Código postal" value={formData.cp} onChange={handleChange("cp")} className={inputClass} />
              <input placeholder="Población" value={formData.poblacion} onChange={handleChange("poblacion")} className={inputClass} />
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input placeholder="Provincia" value={formData.provincia} onChange={handleChange("provincia")} className={inputClass} />
              <input placeholder="País" value={formData.pais} onChange={handleChange("pais")} className={inputClass} />
            </div>
            <input placeholder="Colaborar como..." value={formData.colaborarComo} onChange={handleChange("colaborarComo")} className={`${inputClass} mb-4`} />
            <textarea placeholder="Mensaje" rows={4} value={formData.mensaje} onChange={handleChange("mensaje")} className={`${inputClass} resize-none mb-6`} />
            <button className="w-full bg-gradient-gold text-primary-foreground font-body font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity shadow-gold">
              Enviar solicitud
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default WorkWithUsSection;
