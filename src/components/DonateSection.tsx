import FadeIn from "./FadeIn";
import { useState } from "react";
import { Heart, Copy, Check, Info, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const DonateSection = () => {
  const [amount, setAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [donorData, setDonorData] = useState({ nombre: "", apellidos: "", telefono: "", email: "", direccion: "" });
  const [submitted, setSubmitted] = useState(false);
  const [copiedBizum, setCopiedBizum] = useState(false);
  const [copiedIban, setCopiedIban] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);

  const finalAmount = amount || (customAmount ? parseFloat(customAmount) : 0);

  const handleDonate = () => {
    if (!finalAmount) return;

    const stored = JSON.parse(localStorage.getItem("ms_submissions") || "[]");
    stored.push({
      tipo: "donativo",
      cantidad: finalAmount,
      anonimo: isAnonymous,
      ...(isAnonymous ? {} : donorData),
      fecha: new Date().toISOString(),
    });
    localStorage.setItem("ms_submissions", JSON.stringify(stored));
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const copyToClipboard = (text: string, type: "bizum" | "iban") => {
    navigator.clipboard.writeText(text);
    if (type === "bizum") {
      setCopiedBizum(true);
      setTimeout(() => setCopiedBizum(false), 2000);
    } else {
      setCopiedIban(true);
      setTimeout(() => setCopiedIban(false), 2000);
    }
  };

  const inputClass = "w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50";

  return (
    <section id="donativo" className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <FadeIn>
          <p className="text-accent font-body text-sm tracking-[0.3em] uppercase text-center mb-3">Donativo</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-16">
            Haz tu <span className="text-gradient-gold">donación</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-card rounded-lg p-8 md:p-12 border border-border shadow-card">
            {submitted ? (
              <div className="text-center py-12">
                <Heart className="w-14 h-14 text-accent mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">¡Gracias por tu generosidad!</h3>
                <p className="font-body text-muted-foreground">Tu intención de donativo de <strong>{finalAmount},00 €</strong> ha quedado registrada.</p>
                <p className="font-body text-muted-foreground text-sm mt-2">Realiza el donativo por Bizum ONG o transferencia bancaria.</p>
              </div>
            ) : (
              <>
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

                <input
                  type="number"
                  placeholder="Otra cantidad (€)"
                  value={customAmount}
                  onChange={(e) => { setCustomAmount(e.target.value); setAmount(null); }}
                  className={`${inputClass} mb-8`}
                />

                <label className="flex items-center gap-3 mb-8 cursor-pointer font-body text-muted-foreground">
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="w-5 h-5 rounded border-border accent-primary"
                  />
                  Quiero donar de forma anónima
                </label>

                {!isAnonymous && (
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <input placeholder="Nombre *" value={donorData.nombre} onChange={(e) => setDonorData(p => ({ ...p, nombre: e.target.value }))} className={inputClass} />
                    <input placeholder="Apellidos" value={donorData.apellidos} onChange={(e) => setDonorData(p => ({ ...p, apellidos: e.target.value }))} className={inputClass} />
                    <input placeholder="Teléfono" value={donorData.telefono} onChange={(e) => setDonorData(p => ({ ...p, telefono: e.target.value }))} className={inputClass} />
                    <input placeholder="Email" type="email" value={donorData.email} onChange={(e) => setDonorData(p => ({ ...p, email: e.target.value }))} className={inputClass} />
                    <input placeholder="Dirección completa" value={donorData.direccion} onChange={(e) => setDonorData(p => ({ ...p, direccion: e.target.value }))} className={`${inputClass} md:col-span-2`} />
                  </div>
                )}

                <button
                  onClick={handleDonate}
                  disabled={!finalAmount}
                  className="w-full bg-accent text-accent-foreground font-body font-bold py-4 rounded-lg hover:opacity-90 transition-opacity shadow-lg text-lg flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed mb-8"
                >
                  <Heart className="w-5 h-5" />
                  Donar {finalAmount ? `${finalAmount},00 €` : ""}
                </button>
              </>
            )}

            {/* Cómo donar */}
            <div className="space-y-4 pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <h4 className="font-display text-lg font-semibold text-foreground">Cómo donar</h4>
                <button
                  onClick={() => setShowInfoModal(true)}
                  className="text-muted-foreground hover:text-primary transition-colors p-1"
                  aria-label="Más información sobre cómo donar"
                >
                  <Info className="w-5 h-5" />
                </button>
              </div>

              {/* Quick steps */}
              <p className="font-body text-sm text-muted-foreground text-center">
                Abre tu app bancaria → Bizum → <strong className="text-foreground">Donativos ONG</strong> → Introduce el código <strong className="text-foreground">12778</strong> → Elige la cantidad
              </p>

              {/* Bizum code */}
              <div className="bg-background rounded-lg p-5 border border-border flex items-center justify-between">
                <div>
                  <p className="font-body text-sm text-muted-foreground mb-1">Bizum — Donativos ONG</p>
                  <p className="font-body text-foreground font-mono text-2xl font-bold tracking-wider">12778</p>
                </div>
                <button onClick={() => copyToClipboard("12778", "bizum")} className="text-muted-foreground hover:text-primary transition-colors p-2">
                  {copiedBizum ? <Check className="w-5 h-5 text-primary" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>

              {/* Transferencia bancaria */}
              <div className="bg-background rounded-lg p-5 border border-border">
                <p className="font-body text-sm text-muted-foreground mb-2">Transferencia bancaria</p>
                <div className="flex items-center justify-between">
                <div>
                    <p className="font-body text-foreground font-semibold">Asociación de Magos Solidarios</p>
                    <p className="font-body text-foreground font-mono text-sm tracking-wider mt-1">ES40 3159 0015 8131 3751 2723</p>
                  </div>
                  <button onClick={() => copyToClipboard("ES40 3159 0015 8131 3751 2723", "iban")} className="text-muted-foreground hover:text-primary transition-colors p-2">
                    {copiedIban ? <Check className="w-5 h-5 text-primary" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Info Modal */}
      <Dialog open={showInfoModal} onOpenChange={setShowInfoModal}>
        <DialogContent className="max-w-lg">
          <div className="flex items-start gap-3 mb-4">
            <Info className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <h3 className="font-display text-xl font-semibold text-foreground">¿Cómo funciona el donativo?</h3>
          </div>
          <div className="font-body text-muted-foreground space-y-4 leading-relaxed text-sm">
            <p>
              Al ser una asociación registrada como ONG, los donativos se realizan a través de <strong className="text-foreground">Bizum</strong> en la pestaña <strong className="text-foreground">"Donativos ONG"</strong> de tu aplicación bancaria. No es un número de móvil, es un código ONG.
            </p>
            <div className="bg-secondary rounded-lg p-4">
              <p className="font-semibold text-foreground mb-2">Pasos para donar por Bizum ONG:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Abre tu aplicación bancaria</li>
                <li>Ve a la sección de Bizum</li>
                <li>Selecciona <strong className="text-foreground">"Donativos ONG"</strong></li>
                <li>Introduce el código <strong className="text-foreground">12778</strong></li>
                <li>Elige la cantidad que desees donar</li>
              </ol>
            </div>
            <p>
              También puedes realizar tu donativo mediante <strong className="text-foreground">transferencia bancaria</strong> a la cuenta indicada en la sección de donaciones.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default DonateSection;
