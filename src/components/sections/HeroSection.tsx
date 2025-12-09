import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-synapse-violet/20 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-synapse-blue/20 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-synapse-yellow/10 rounded-full blur-[80px] animate-glow-pulse" style={{ animationDelay: "1s" }} />

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              L'IA au service de votre croissance
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Transformez votre entreprise avec{" "}
            <span className="bg-gradient-to-r from-synapse-violet via-synapse-blue to-synapse-yellow bg-clip-text text-transparent">l'Intelligence Artificielle</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <span className="text-accent font-semibold">Synapse</span> conçoit et déploie des solutions IA sur-mesure pour automatiser vos processus,
            optimiser vos opérations et <span className="text-primary">accélérer votre transformation digitale</span>.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <a href="https://koalendar.com/e/meet-with-synapse" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="group">
                Prendre RDV
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="#services">
              <Button variant="glass" size="xl">
                Découvrir nos solutions
              </Button>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm">Expertise IA avancée</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm">Solutions sur-mesure</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-sm">Déploiement rapide</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
