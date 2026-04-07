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
  {
    name: "Mago Caba",
    text: "Magos Solidarios nació para devolver la ayuda recibida mediante el ilusionismo. Miguel y otros compañeros transformaron esta idea en una asociación. Su labor regala momentos de alivio y entrega desinteresada a los demás.",
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

      <div className="flex flex-col gap-5 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.08}>
            <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-colors shadow-card flex items-start gap-4">
              <Quote className="w-7 h-7 text-primary/40 shrink-0 mt-1" />
              <div>
              <p className="font-body text-muted-foreground text-sm leading-relaxed italic mb-3">
                  "{t.text}"
                </p>
                <p className="font-display text-primary font-bold text-base tracking-wide">— {t.name}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
