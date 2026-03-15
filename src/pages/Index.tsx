import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ImpactSection from "@/components/ImpactSection";
import CollaborateSection from "@/components/CollaborateSection";
import DonateSection from "@/components/DonateSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import WorkWithUsSection from "@/components/WorkWithUsSection";
import InterventionSection from "@/components/InterventionSection";
import PrivateShowsSection from "@/components/PrivateShowsSection";
import DocumentsSection from "@/components/DocumentsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ImpactSection />
    <CollaborateSection />
    <DonateSection />
    <TestimonialsSection />
    <GallerySection />
    <WorkWithUsSection />
    <InterventionSection />
    <PrivateShowsSection />
    <DocumentsSection />
    <ContactSection />
    <Footer />
  </main>
);

export default Index;
