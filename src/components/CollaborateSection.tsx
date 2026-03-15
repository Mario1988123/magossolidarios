import FadeIn from "./FadeIn";
import { Users, HandHeart, Award, Crown } from "lucide-react";

const memberTypes = [
  { icon: Crown, title: "Socio Fundador", desc: "Los que solicitaron su ingreso durante el periodo de constitución de la Asociación." },
  { icon: Users, title: "Socio Numerario", desc: "Aquellos cuyo ingreso sea de fecha posterior a la constitución." },
  { icon: HandHeart, title: "Socio Colaborador", desc: "Quienes se señalen voluntariamente una cuota periódica anual." },
  { icon: Award, title: "Socio de Honor", desc: "Personas o entidades que realicen aportaciones de especial importancia." },
];

const CollaborateSection = () => (
  <section id="colabora" className="section-padding bg-secondary">
    <div className="container mx-auto">
      <FadeIn>
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase text-center mb-3">Hazte Socio</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-6">
          Únete a nuestra <span className="text-gradient-gold">comunidad</span>
        </h2>
        <p className="font-body text-muted-foreground text-center max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
          Cuando alguien se asocia, no solo apoya una causa bonita, sino que también se integra en una
          comunidad creativa y comprometida. Tu apoyo permite que la magia llegue a más lugares donde
          realmente hace falta.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {memberTypes.map((type, i) => (
          <FadeIn key={type.title} delay={i * 0.1}>
            <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/40 transition-all hover:shadow-gold group h-full">
              <type.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">{type.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{type.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default CollaborateSection;
