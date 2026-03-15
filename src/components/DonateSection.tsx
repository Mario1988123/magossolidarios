import FadeIn from "./FadeIn";
import { useState } from "react";

const DonateSection = () => {
  const [amount, setAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);

  return (
    <section id="donativo" className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <FadeIn>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase text-center mb-3">Donativo</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-16">
            Haz tu <span className="text-gradient-gold">donación</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-card rounded-lg p-8 md:p-12 border border-border shadow-card">
            {/* Amount selection */}
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {[10, 20, 50].map((val) => (
                <button
                  key={val}
                  onClick={() => { setAmount(val); setCustomAmount(""); }}
                  className={`font-body font-semibold px-8 py-3 rounded-lg border transition-all text-lg ${
                    amount === val
                      ? "bg-gradient-gold text-primary-foreground border-primary shadow-gold"
                      : "border-border text-foreground hover:border-primary/50"
                  }`}
                >
                  {val},00 €
                </button>
              ))}
            </div>

            <div className="mb-8">
              <input
                type="number"
                placeholder="Otra cantidad (€)"
                value={customAmount}
                onChange={(e) => { setCustomAmount(e.target.value); setAmount(null); }}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            {/* Anonymous toggle */}
            <label className="flex items-center gap-3 mb-8 cursor-pointer font-body text-muted-foreground">
              <input
                type="checkbox"
                checked={isAnonymous}
                onChange={(e) => setIsAnonymous(e.target.checked)}
                className="w-5 h-5 rounded border-border accent-primary"
              />
              Quiero donar de forma anónima
            </label>

            {/* Payment info */}
            <div className="space-y-4 mb-8">
              <h4 className="font-display text-lg font-semibold text-foreground">Opciones de pago</h4>
              <div className="bg-background rounded-lg p-4 border border-border">
                <p className="font-body text-sm text-muted-foreground mb-1">Transferencia bancaria</p>
                <p className="font-body text-foreground font-mono text-sm">ES40 3159 0015 8131 3751 2723</p>
              </div>
              <div className="bg-background rounded-lg p-4 border border-border">
                <p className="font-body text-sm text-muted-foreground mb-1">Bizum</p>
                <p className="font-body text-foreground font-mono text-sm">676 692 411</p>
              </div>
            </div>

            {/* Contact form (shown if not anonymous) */}
            {!isAnonymous && (
              <div className="space-y-4">
                <h4 className="font-display text-lg font-semibold text-foreground">Tus datos</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <input placeholder="Nombre *" className="bg-background border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  <input placeholder="Apellidos *" className="bg-background border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  <input placeholder="Teléfono *" className="bg-background border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  <input placeholder="Email *" className="bg-background border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <input placeholder="Dirección, CP, Ciudad, Provincia, País" className="w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default DonateSection;
