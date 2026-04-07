import FadeIn from "./FadeIn";
import heroBg from "@/assets/d2.jpg";
import logoCompleto from "@/assets/logo-completo.png";

const HeroSection = () => (
  <section
    id="inicio"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Magic logo animation keyframes */}
    <style>{`
      @keyframes magic-appear {
        0% {
          opacity: 0;
          transform: scale(0.1) rotateY(180deg) rotateZ(15deg);
          filter: blur(20px) brightness(2);
        }
        30% {
          opacity: 0.6;
          transform: scale(1.3) rotateY(90deg) rotateZ(-5deg);
          filter: blur(8px) brightness(1.8);
        }
        50% {
          opacity: 0.85;
          transform: scale(0.9) rotateY(30deg) rotateZ(3deg);
          filter: blur(3px) brightness(1.4);
        }
        70% {
          opacity: 0.95;
          transform: scale(1.08) rotateY(-10deg) rotateZ(-1deg);
          filter: blur(1px) brightness(1.2);
        }
        85% {
          transform: scale(0.98) rotateY(5deg) rotateZ(0deg);
          filter: blur(0px) brightness(1.05);
        }
        100% {
          opacity: 1;
          transform: scale(1) rotateY(0deg) rotateZ(0deg);
          filter: blur(0px) brightness(1);
        }
      }
      @keyframes sparkle-ring {
        0% {
          box-shadow: 0 0 0px 0px hsl(var(--primary) / 0),
                      0 0 0px 0px hsl(var(--accent) / 0);
        }
        40% {
          box-shadow: 0 0 40px 15px hsl(var(--primary) / 0.4),
                      0 0 80px 30px hsl(var(--accent) / 0.2);
        }
        100% {
          box-shadow: 0 0 0px 0px hsl(var(--primary) / 0),
                      0 0 0px 0px hsl(var(--accent) / 0);
        }
      }
      .magic-logo {
        animation: magic-appear 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      }
    `}</style>

    <div className="absolute inset-0">
      <img src={heroBg} alt="Espectáculo de magia" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
    </div>

    <div className="relative z-10 container mx-auto px-4 text-center pt-20">
      <div className="inline-block mb-6">
        <img
          src={logoCompleto}
          alt="Magos Solidarios"
          className="magic-logo h-40 md:h-52 w-auto object-contain mx-auto"
        />
      </div>
      <FadeIn delay={0.8}>
        <p className="text-primary font-body text-sm md:text-base tracking-[0.3em] uppercase mb-6">
          Asociación de Magos Solidarios
        </p>
      </FadeIn>
      <FadeIn delay={1.0}>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight max-w-4xl mx-auto mb-6">
          Una sonrisa es el camino más corto para alcanzar la{" "}
          <span className="text-gradient-gold">felicidad</span>
        </h1>
      </FadeIn>
      <FadeIn delay={1.2}>
        <p className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Utilizamos la magia como herramienta de transformación social,
          llevando ilusión y esperanza allí donde más se necesita.
        </p>
      </FadeIn>
      <FadeIn delay={1.4}>
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
