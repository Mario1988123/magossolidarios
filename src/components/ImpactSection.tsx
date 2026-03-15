import FadeIn from "./FadeIn";
import magicParticles from "@/assets/magic-particles.jpg";

const ImpactSection = () => (
  <section id="impacto" className="relative section-padding overflow-hidden">
    <div className="absolute inset-0">
      <img src={magicParticles} alt="" className="w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-background/80" />
    </div>
    <div className="relative container mx-auto text-center">
      <FadeIn>
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Impacto Social</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8">
          Cambiando vidas con <span className="text-gradient-gold">magia</span>
        </h2>
        <p className="font-body text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
          La asociación de Magos Solidarios tiene un impacto social significativo porque combina arte,
          empatía y acompañamiento emocional para mejorar la vida de personas vulnerables. Nuestro trabajo
          contribuye a la salud emocional, la inclusión social y el fortalecimiento de comunidades enteras.
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          {[
            { num: "50+", label: "Actuaciones" },
            { num: "9", label: "Miembros" },
            { num: "∞", label: "Sonrisas" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl md:text-5xl font-bold text-primary">{stat.num}</p>
              <p className="font-body text-muted-foreground text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  </section>
);

export default ImpactSection;
