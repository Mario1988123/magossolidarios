import FadeIn from "./FadeIn";
import { FileText, ExternalLink } from "lucide-react";

const documents = [
  { name: "Acta de constitución", url: "https://drive.google.com/drive/folders/1X8utruqN9XAKT8DQEQjSFqt507zijTDG" },
  { name: "Estatutos", url: "https://drive.google.com/drive/folders/1X8utruqN9XAKT8DQEQjSFqt507zijTDG" },
  { name: "Documentación oficial", url: "https://drive.google.com/drive/folders/1X8utruqN9XAKT8DQEQjSFqt507zijTDG" },
];

const DocumentsSection = () => (
  <section id="documentacion" className="section-padding bg-background">
    <div className="container mx-auto max-w-2xl">
      <FadeIn>
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase text-center mb-3">Documentación</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-6">
          Documentación <span className="text-gradient-gold">institucional</span>
        </h2>
        <p className="font-body text-muted-foreground text-center mb-12">
          Consulta actas, estatutos y toda la documentación relacionada con nuestra asociación.
        </p>
      </FadeIn>

      <div className="space-y-3">
        {documents.map((doc, i) => (
          <FadeIn key={doc.name} delay={i * 0.1}>
            <a
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-card rounded-lg p-4 border border-border hover:border-primary/40 transition-colors group"
            >
              <FileText className="w-6 h-6 text-primary shrink-0" />
              <span className="font-body text-foreground group-hover:text-primary transition-colors flex-1">{doc.name}</span>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default DocumentsSection;
