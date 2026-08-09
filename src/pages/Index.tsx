import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhyNowSection } from "@/components/sections/WhyNowSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";
import { ContentClustersSection } from "@/components/content/ContentClustersSection";
import { usePageSeo } from "@/hooks/use-page-seo";

const Index = () => {
  usePageSeo({
    title: "Synapse | Solutions numériques sur mesure",
    description: "Synapse analyse vos besoins, conçoit la solution numérique adaptée et accompagne son implémentation : développement sur mesure, automatisation ou agents IA.",
    canonicalPath: "/",
  });

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
        <ContentClustersSection compact title="Avancer selon votre point de départ" introduction="Un projet peut commencer par un diagnostic, la conception d’un outil, la fiabilisation d’un processus ou l’intégration d’un agent IA. Chaque parcours réunit les services et contenus utiles." />
        <ProjectsSection />
        <WhyUsSection />
        <ProcessSection />
        <CTASection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
