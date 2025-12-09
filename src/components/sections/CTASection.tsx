import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      {/* Animated glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-glow-pulse" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/3 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] animate-glow-pulse" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent mb-8 shadow-[0_0_40px_hsl(48_100%_50%/0.4)]">
            <Sparkles className="w-8 h-8 text-accent-foreground" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Prêt à transformer votre entreprise avec{" "}
            <span className="bg-gradient-to-r from-synapse-yellow via-synapse-violet to-synapse-blue bg-clip-text text-transparent">l'IA</span> ?
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Discutons de vos défis et découvrons ensemble comment Synapse peut accélérer
            votre croissance grâce à l'Intelligence Artificielle.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://koalendar.com/e/meet-with-synapse" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="group text-lg">
                Prendre RDV maintenant
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>

          {/* Trust note */}
          <p className="mt-8 text-sm text-muted-foreground">
            Consultation gratuite et sans engagement • Réponse sous 24h
          </p>

          {/* Decorative synaptic pattern */}
          <div className="mt-16 relative">
            <svg className="w-full max-w-md mx-auto h-20 text-primary/20" viewBox="0 0 400 80">
              {/* Nodes */}
              <circle cx="50" cy="40" r="4" fill="currentColor" className="animate-pulse" />
              <circle cx="150" cy="20" r="3" fill="currentColor" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
              <circle cx="200" cy="60" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: "1s" }} />
              <circle cx="250" cy="30" r="3" fill="currentColor" className="animate-pulse" style={{ animationDelay: "0.3s" }} />
              <circle cx="350" cy="40" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: "0.7s" }} />

              {/* Connection lines */}
              <path d="M50 40 Q100 10 150 20" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
              <path d="M150 20 Q175 40 200 60" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
              <path d="M200 60 Q225 45 250 30" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
              <path d="M250 30 Q300 35 350 40" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
