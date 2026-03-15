import FadeIn from "./FadeIn";
import { useState } from "react";

const categories = [
  { id: "ayuntamientos", label: "Ayuntamientos", desc: "Eventos mágicos organizados junto a ayuntamientos para apoyar iniciativas sociales locales." },
  { id: "asociaciones", label: "Asociaciones", desc: "Espectáculos diseñados para ayudar a asociaciones a financiar sus programas y campañas." },
  { id: "otras", label: "Otras Actividades", desc: "Cuentacuentos, clowns, workshops, charlas, masterclass, talleres y apoyo institucional." },
];

// Numbered placeholders: 10-24 for gallery photos
const galleryPhotos: Record<string, number[]> = {
  ayuntamientos: [10, 11, 12, 13],
  asociaciones: [14, 15, 16, 17],
  otras: [18, 19, 20, 21, 22, 23],
};

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState("ayuntamientos");
  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <section id="galeria" className="section-padding bg-background">
      <div className="container mx-auto">
        <FadeIn>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase text-center mb-3">Galería</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-4">
            Nuestro trabajo en <span className="text-gradient-gold">imágenes</span>
          </h2>
          <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Una selección de imágenes que muestran nuestro trabajo sobre el terreno.
          </p>
        </FadeIn>

        {/* Tabs */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`font-body text-sm px-6 py-2 rounded-full border transition-all ${
                  activeTab === cat.id
                    ? "bg-gradient-gold text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-primary/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <p className="font-body text-muted-foreground text-center text-sm mb-8">{activeCategory.desc}</p>
        </FadeIn>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryPhotos[activeTab].map((num) => (
            <div
              key={num}
              className="aspect-square bg-card rounded-lg border border-border overflow-hidden flex items-center justify-center hover:border-primary/30 transition-colors group cursor-pointer"
            >
              <div className="text-center">
                <span className="font-display text-4xl font-bold text-primary/30 group-hover:text-primary/60 transition-colors">
                  {num}
                </span>
                <p className="font-body text-xs text-muted-foreground/50 mt-2">Foto #{num}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
