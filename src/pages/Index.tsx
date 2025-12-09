import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhyNowSection } from "@/components/sections/WhyNowSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FomoSection } from "@/components/sections/FomoSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Synapse | Agence IA & Automatisation";
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Neural network background animation */}
      <NeuralBackground />
      
      {/* Header */}
      <Header />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <WhyNowSection />
        <ServicesSection />
        <ProjectsSection />
        <WhyUsSection />
        <ProcessSection />
        <FomoSection />
        <CTASection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
