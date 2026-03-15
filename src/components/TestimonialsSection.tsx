import FadeIn from "./FadeIn";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mago Ati",
    text: "Pisar escenarios haciendo magia llena mi vida. Ahora se llena mi corazón gracias al poder de la solidaridad de Magos Solidarios. Hemos hecho muchísimas actuaciones benéficas y las seguiremos haciendo.",
  },
  {
    name: "Miguel Ribera",
    text: "Pertenecer a Magos Solidarios convierte mi arte en una herramienta que alivia, acompaña, da luz en momentos difíciles, alegría y esperanza a personas que realmente lo necesitan.",
  },
  {
    name: "Mony la Maga",
    text: "Cuando conocí esta asociación, el cómo nació y el por qué, me encantó el proyecto. Es todo un honor pertenecer a ella y seguir repartiendo ilusión a la gente que más lo necesita.",
  },
  {
    name: "Mago Mazo - Borja",
    text: "Estoy emocionado de ser parte de Magos Solidarios. A través de nuestras actuaciones, no solo llevamos sonrisas y diversión, sino que también recaudamos fondos para ayudar a personas que han sufrido desgracias.",
  },
  {
    name: "Mago Iván Arribas",
    text: "Magos Solidarios me permite ir más allá, llegar a los más vulnerables y dar un sentido nuevo a mi pasión, la magia. Creo ilusiones y creo sentidos.",
  },
  {
    name: "La Bella Maga",
    text: "Pertenecer a Magos Solidarios significa usar la magia no solo para entretener, sino para regalar ilusión donde más se necesita, llevar sonrisas y aliviar momentos difíciles.",
  },
];

const TestimonialsSection = () => (
  <section id="testimonios" className="section-padding bg-secondary">
    <div className="container mx-auto">
      <FadeIn>
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase text-center mb-3">Testimonios</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-16">
          Sus <span className="text-gradient-gold">palabras</span>
        </h2>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.1}>
            <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-colors shadow-card h-full flex flex-col">
              <Quote className="w-8 h-8 text-primary/40 mb-4 shrink-0" />
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6 flex-1 italic">
                "{t.text}"
              </p>
              <p className="font-display text-foreground font-semibold text-sm">{t.name}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
