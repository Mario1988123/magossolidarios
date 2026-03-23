import FadeIn from "./FadeIn";
import { Building2, Users, Puzzle } from "lucide-react";
import imgD7 from "@/assets/d7.jpg";

const interventions = [
  {
    icon: Building2,
    title: "Ayuntamientos",
    desc: "Colaboramos con ayuntamientos para desarrollar eventos mágicos que recauden fondos para programas sociales, iniciativas comunitarias o proyectos de ayuda directa.",
    placeholder: "d5",
    image: null,
  },
  {
    icon: Users,
    title: "Asociaciones",
    desc: "Diseñamos actuaciones adaptadas a las necesidades de cada asociación, ayudándolas a obtener recursos para sus causas y a dar visibilidad a su labor.",
    placeholder: "d7",
    image: imgD7,
  },
  {
    icon: Puzzle,
    title: "Otros",
    desc: "Intervenciones especiales para entidades, colectivos o situaciones que requieran apoyo económico o emocional. La magia se adapta a cada contexto.",
    placeholder: "d8",
    image: null,
  },
];

const InterventionSection = () => (
  <section id="intervencion" className="section-padding bg-background">
    <div className="container mx-auto">
      <FadeIn>
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase text-center mb-3">Intervención Solidaria</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-16">
          Líneas de <span className="text-gradient-gold">acción</span>
        </h2>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8">
        {interventions.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.15}>
            <div className="text-center">
              <div className="aspect-[4/3] rounded-lg overflow-hidden mb-6">
                {item.image ? (
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full border-2 border-dashed border-primary/40 bg-primary/5 flex items-center justify-center">
                    <span className="font-display text-3xl font-bold text-primary/30">{item.placeholder}</span>
                  </div>
                )}
              </div>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">{item.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default InterventionSection;
