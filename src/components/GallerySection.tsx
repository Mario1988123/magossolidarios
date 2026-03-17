import FadeIn from "./FadeIn";
import { useState } from "react";
import { X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import foto10 from "@/assets/gallery/foto-10.jpeg";
import foto11 from "@/assets/gallery/foto-11.jpeg";
import foto12 from "@/assets/gallery/foto-12.jpeg";
import foto13 from "@/assets/gallery/foto-13.jpeg";
import foto14 from "@/assets/gallery/foto-14.jpeg";
import foto15 from "@/assets/gallery/foto-15.jpeg";
import foto16 from "@/assets/gallery/foto-16.jpeg";
import foto17 from "@/assets/gallery/foto-17.jpeg";
import foto18 from "@/assets/gallery/foto-18.jpeg";
import foto19 from "@/assets/gallery/foto-19.jpeg";
import foto20 from "@/assets/gallery/foto-20.jpeg";
import foto21 from "@/assets/gallery/foto-21.jpeg";
import foto22 from "@/assets/gallery/foto-22.jpeg";
import foto23 from "@/assets/gallery/foto-23.jpeg";
import foto24 from "@/assets/gallery/foto-24.jpeg";
import foto25 from "@/assets/gallery/foto-25.jpeg";
import foto26 from "@/assets/gallery/foto-26.jpeg";
import foto27 from "@/assets/gallery/foto-27.jpeg";
import foto28 from "@/assets/gallery/foto-28.jpeg";
import foto29 from "@/assets/gallery/foto-29.jpeg";

const categories = [
  { id: "ayuntamientos", label: "Ayuntamientos", desc: "Eventos mágicos organizados junto a ayuntamientos para apoyar iniciativas sociales locales." },
  { id: "asociaciones", label: "Asociaciones", desc: "Espectáculos diseñados para ayudar a asociaciones a financiar sus programas y campañas." },
  { id: "otras", label: "Otras Actividades", desc: "Cuentacuentos, clowns, workshops, charlas, masterclass, talleres y apoyo institucional." },
];

const galleryPhotos = [
  foto10, foto11, foto12, foto13, foto14,
  foto15, foto16, foto17, foto18, foto19,
  foto20, foto21, foto22, foto23, foto24,
  foto25, foto26, foto27, foto28, foto29,
];

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState("ayuntamientos");
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
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
          <div className="flex flex-wrap justify-center gap-2 mb-4">
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
          <p className="font-body text-muted-foreground text-center text-sm mb-8">{activeCategory.desc}</p>
        </FadeIn>

        {/* Carousel */}
        <FadeIn delay={0.3}>
          <div className="px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {galleryPhotos.map((src, i) => (
                  <CarouselItem key={i} className="basis-full md:basis-1/3">
                    <div
                      className="aspect-[4/3] rounded-lg overflow-hidden border border-border cursor-pointer"
                      onClick={() => setSelectedPhoto(src)}
                    >
                      <img
                        src={src}
                        alt={`Actuación ${i + 10}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </FadeIn>
      </div>

      {/* Lightbox */}
      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 border-none bg-transparent shadow-none [&>button]:hidden">
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-2 right-2 z-50 bg-background/80 backdrop-blur-sm rounded-full p-2 text-foreground hover:bg-background transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          {selectedPhoto && (
            <img
              src={selectedPhoto}
              alt="Foto ampliada"
              className="w-full h-full max-h-[85vh] object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
