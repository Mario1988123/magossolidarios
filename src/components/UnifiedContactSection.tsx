import FadeIn from "./FadeIn";
import { useState } from "react";
import { Send, Users, Briefcase, MessageCircle, Facebook, Instagram, Youtube } from "lucide-react";

type ContactType = "contacto" | "colaborar" | "contratar";

const tabs: { id: ContactType; label: string; icon: typeof Send; desc: string }[] = [
  { id: "contacto", label: "Contacto general", icon: MessageCircle, desc: "Envíanos un mensaje o consulta." },
  { id: "colaborar", label: "Quiero colaborar", icon: Users, desc: "Únete como artista, voluntario o profesional." },
  { id: "contratar", label: "Contratar actuación", icon: Briefcase, desc: "Solicita presupuesto para tu evento." },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/magos.solidarios.ong", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/magos.solidarios/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@magossolidarios", label: "YouTube" },
];

const UnifiedContactSection = () => {
  const [activeTab, setActiveTab] = useState<ContactType>("contacto");
  const [formData, setFormData] = useState({
    nombre: "", apellidos: "", email: "", telefono: "",
    mensaje: "", colaborarComo: "", tipoEvento: "", fechaEvento: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!formData.nombre || !formData.email) return;

    const stored = JSON.parse(localStorage.getItem("ms_submissions") || "[]");
    stored.push({
      ...formData,
      tipo: activeTab,
      fecha: new Date().toISOString(),
    });
    localStorage.setItem("ms_submissions", JSON.stringify(stored));
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ nombre: "", apellidos: "", email: "", telefono: "", mensaje: "", colaborarComo: "", tipoEvento: "", fechaEvento: "" });
  };

  const inputClass = "w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50";

  return (
    <section id="contacto" className="section-padding bg-secondary">
      <div className="container mx-auto max-w-3xl">
        <FadeIn>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase text-center mb-3">Contacto</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-6">
            ¿Cómo podemos <span className="text-gradient-gold">ayudarte</span>?
          </h2>
          <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto mb-10 leading-relaxed">
            Selecciona el motivo de tu consulta y cuéntanos cómo podemos colaborar contigo.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 font-body text-sm px-5 py-2.5 rounded-full border transition-all ${
                  activeTab === tab.id
                    ? "bg-gradient-gold text-primary-foreground border-primary shadow-gold"
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          <p className="font-body text-muted-foreground text-center text-sm mb-6">
            {tabs.find((t) => t.id === activeTab)?.desc}
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="bg-card rounded-lg p-8 border border-border shadow-card">
            {submitted ? (
              <div className="text-center py-12">
                <Send className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">¡Mensaje enviado!</h3>
                <p className="font-body text-muted-foreground">Nos pondremos en contacto contigo pronto.</p>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input placeholder="Nombre *" value={formData.nombre} onChange={handleChange("nombre")} className={inputClass} />
                  <input placeholder="Apellidos" value={formData.apellidos} onChange={handleChange("apellidos")} className={inputClass} />
                  <input placeholder="Email *" type="email" value={formData.email} onChange={handleChange("email")} className={inputClass} />
                  <input placeholder="Teléfono" value={formData.telefono} onChange={handleChange("telefono")} className={inputClass} />
                </div>

                {activeTab === "colaborar" && (
                  <input
                    placeholder="¿Cómo quieres colaborar? (mago, voluntario, técnico...)"
                    value={formData.colaborarComo}
                    onChange={handleChange("colaborarComo")}
                    className={`${inputClass} mb-4`}
                  />
                )}

                {activeTab === "contratar" && (
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <input placeholder="Tipo de evento" value={formData.tipoEvento} onChange={handleChange("tipoEvento")} className={inputClass} />
                    <input placeholder="Fecha del evento" type="date" value={formData.fechaEvento} onChange={handleChange("fechaEvento")} className={inputClass} />
                  </div>
                )}

                <textarea
                  placeholder="Tu mensaje..."
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange("mensaje")}
                  className={`${inputClass} resize-none mb-6`}
                />
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-gold text-primary-foreground font-body font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity shadow-gold flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Enviar mensaje
                </button>
              </>
            )}
          </div>
        </FadeIn>

        {/* Social links & contact */}
        <FadeIn delay={0.35}>
          <div className="mt-8 text-center space-y-4">
            <p className="font-body text-muted-foreground text-sm">También puedes escribirnos directamente:</p>
            <a href="mailto:info@magossolidarios.com" className="font-body text-primary hover:underline text-base font-medium">
              info@magossolidarios.com
            </a>
            <div className="flex items-center justify-center gap-5 pt-2">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-muted-foreground hover:text-accent transition-colors">
                  <s.icon className="w-9 h-9" />
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default UnifiedContactSection;
