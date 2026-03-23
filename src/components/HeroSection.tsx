import FadeIn from "./FadeIn";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => (
  <section
    id="inicio"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="Espectáculo de magia" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
    </div>

    <div className="relative z-10 container mx-auto px-4 text-center pt-20">
      <FadeIn>
        <img src={logo} alt="Magos Solidarios" className="h-28 w-28 md:h-36 md:w-36 rounded-full object-cover mx-auto mb-6 shadow-lg" />
      </FadeIn>
      <FadeIn delay={0.15}>
        <p className="text-primary font-body text-sm md:text-base tracking-[0.3em] uppercase mb-6">
          Asociación de Magos Solidarios
        </p>
      </FadeIn>
      <FadeIn delay={0.2}>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight max-w-4xl mx-auto mb-6">
          Una sonrisa es el camino más corto para alcanzar la{" "}
          <span className="text-gradient-gold">felicidad</span>
        </h1>
      </FadeIn>
      <FadeIn delay={0.4}>
        <p className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Utilizamos la magia como herramienta de transformación social,
          llevando ilusión y esperanza allí donde más se necesita.
        </p>
      </FadeIn>
      <FadeIn delay={0.6}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#donativo"
            className="bg-gradient-gold text-primary-foreground font-body font-semibold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity shadow-gold"
          >
            Colabora
          </a>
          <a
            href="#quienes-somos"
            className="border border-primary/50 text-primary font-body font-semibold px-8 py-4 rounded-lg text-lg hover:bg-primary/10 transition-colors"
          >
            Conócenos
          </a>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default HeroSection;
