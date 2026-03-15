import FadeIn from "./FadeIn";
import { Heart, Eye, Sparkles } from "lucide-react";

const values = [
  { icon: Heart, title: "Solidaridad", desc: "Actuamos con empatía y compromiso hacia quienes más lo necesitan." },
  { icon: Eye, title: "Transparencia", desc: "Gestionamos los recursos con responsabilidad y claridad." },
  { icon: Sparkles, title: "Creatividad", desc: "Usamos el arte como vehículo para conectar, emocionar y movilizar." },
];

const teamMembers = [
  { name: "José Atienza", role: "Presidente", photo: 1 },
  { name: "Miguel Ribera", role: "Tesorero", photo: 2 },
  { name: "Borja Mazorriaga", role: "Secretario", photo: 3 },
  { name: "Mónica Perpiñá", role: "Vocal", photo: 4 },
  { name: "Iván Arribas", role: "Vocal", photo: 5 },
  { name: "Noelia Oliver", role: "Vocal", photo: 6 },
  { name: "Jose Caballero", role: "Vocal", photo: 7 },
  { name: "Alejandra Rodríguez", role: "Vocal", photo: 8 },
  { name: "Mónica García", role: "Vocal", photo: 9 },
];

const AboutSection = () => (
  <section id="quienes-somos" className="section-padding bg-background">
    <div className="container mx-auto">
      <FadeIn>
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase text-center mb-3">Quiénes Somos</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-6">
          Magia con <span className="text-gradient-gold">propósito</span>
        </h2>
        <p className="font-body text-muted-foreground text-center max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
          En Magos Solidarios creemos en el poder de la magia para cambiar realidades.
          Somos una entidad formada por artistas, voluntarios y profesionales comprometidos
          con una misión clara: recaudar fondos para colectivos vulnerables a través de
          actuaciones de magia y eventos solidarios.
        </p>
      </FadeIn>

      {/* Misión, Visión, Valores */}
      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {values.map((v, i) => (
          <FadeIn key={v.title} delay={i * 0.15}>
            <div className="bg-card rounded-lg p-8 border border-border hover:border-primary/30 transition-colors shadow-card group">
              <v.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{v.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Historia */}
      <FadeIn>
        <div className="bg-card rounded-lg p-8 md:p-12 border border-border shadow-card mb-20">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
            Nuestra <span className="text-gradient-gold">Historia</span>
          </h3>
          <div className="font-body text-muted-foreground space-y-4 leading-relaxed">
            <p>
              El 29 de octubre de 2024, la maldita DANA nos cambió la vida. El azote de la catástrofe
              ocasionó una multitud de desgracias. También nuestros compañeros magos, que residen en
              la zona afectada, sufrieron en toda su crudeza las consecuencias.
            </p>
            <p>
              Por tal motivo, a un grupo de magos nos surge la idea de programar en diferentes localidades
              eventos solidarios de magia, con el fin de recaudar donativos para los perjudicados.
            </p>
            <p>
              El proyecto va más allá y el 30/07/2025 nos inscribimos en el Registro Nacional de Asociaciones,
              del Ministerio del Interior, Sección 1ª / Número Nacional: 631161.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Equipo humano */}
      <FadeIn>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
          Nuestro <span className="text-gradient-gold">Equipo</span>
        </h3>
      </FadeIn>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {teamMembers.map((member, i) => (
          <FadeIn key={member.name} delay={i * 0.08}>
            <div className="text-center group">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-card border-2 border-border group-hover:border-primary/50 transition-colors overflow-hidden flex items-center justify-center shadow-card">
                <span className="font-display text-3xl font-bold text-primary/40">
                  {member.photo}
                </span>
              </div>
              <h4 className="font-display text-sm font-semibold text-foreground">{member.name}</h4>
              <p className="font-body text-xs text-primary">{member.role}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
