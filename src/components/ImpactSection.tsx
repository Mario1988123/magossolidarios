import { useEffect, useState } from "react";
import FadeIn from "./FadeIn";
import magicParticles from "@/assets/magic-particles.jpg";

const getActuaciones = () => {
  // Start date: April 2026, starting value: 60
  const startDate = new Date(2026, 3, 1); // April 1, 2026
  const now = new Date();
  const diffMs = now.getTime() - startDate.getTime();
  const diffDays = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));
  // ~5 per month = 1 every 6 days
  const increment = Math.floor(diffDays / 6);
  return 60 + increment;
};

const ImpactSection = () => {
  const [count, setCount] = useState(0);
  const target = getActuaciones();

  useEffect(() => {
    if (count >= target) return;
    const step = Math.max(1, Math.floor(target / 60));
    const timer = setTimeout(() => {
      setCount((prev) => Math.min(prev + step, target));
    }, 30);
    return () => clearTimeout(timer);
  }, [count, target]);

  return (
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
          <div className="grid grid-cols-2 gap-8 mt-16 max-w-xl mx-auto">
            <div>
              <p className="font-display text-4xl md:text-5xl font-bold text-primary">{count}+</p>
              <p className="font-body text-muted-foreground text-sm mt-2">Actuaciones</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl font-bold text-primary">∞</p>
              <p className="font-body text-muted-foreground text-sm mt-2">Sonrisas</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ImpactSection;
