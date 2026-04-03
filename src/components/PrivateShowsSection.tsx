import FadeIn from "./FadeIn";
import { Briefcase } from "lucide-react";

const services = [
  "Cenas de empresa",
  "Congresos",
  "Presentaciones corporativas",
  "Celebraciones institucionales",
  "Actos profesionales de cualquier sector",
];

const PrivateShowsSection = () => (
  <section id="actuaciones" className="section-padding bg-secondary">
    <div className="container mx-auto max-w-4xl">
      <FadeIn>
        <div className="bg-card rounded-lg p-8 md:p-12 border border-border shadow-card hover:shadow-gold transition-shadow">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Briefcase className="w-7 h-7 text-primary" />
            </div>
            <div>
              <p className="text-primary font-body text-sm tracking-[0.2em] uppercase">Actuaciones Privadas</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Contrata nuestro servicio
              </h2>
            </div>
          </div>

          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            Además de nuestras actuaciones solidarias, ofrecemos la posibilidad de contratar magos profesionales
            para eventos privados. Una parte de cada contratación se destina directamente a apoyar los proyectos
            solidarios de la asociación.
          </p>

          <div className="mb-8">
            <p className="font-body text-foreground font-semibold text-sm mb-3">Pensado para:</p>
            <ul className="grid md:grid-cols-2 gap-2">
              {services.map((s) => (
                <li key={s} className="font-body text-muted-foreground text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
          <a
            href="#contacto"
            className="inline-flex bg-gradient-gold text-primary-foreground font-body font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-gold"
          >
            Solicitar presupuesto
          </a>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default PrivateShowsSection;
