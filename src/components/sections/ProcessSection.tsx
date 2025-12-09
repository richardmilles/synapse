import { Search, Lightbulb, Cog, BarChart3 } from "lucide-react";

export const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Diagnostic",
      description: "Analyse approfondie de vos besoins, processus existants et opportunités d'optimisation par l'IA.",
      color: "primary",
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Prototype",
      description: "Développement rapide d'une preuve de concept pour valider la solution et ajuster l'approche.",
      color: "secondary",
    },
    {
      number: "03",
      icon: Cog,
      title: "Intégration",
      description: "Déploiement de la solution dans votre environnement avec formation de vos équipes.",
      color: "accent",
    },
    {
      number: "04",
      icon: BarChart3,
      title: "Optimisation",
      description: "Suivi des performances, ajustements continus et évolution de la solution selon vos besoins.",
      color: "primary",
    },
  ];

  return (
    <section id="processus" className="relative py-24 overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Notre <span className="text-secondary">processus</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Une méthodologie éprouvée pour transformer vos idées en <span className="text-accent font-medium">solutions opérationnelles</span>,
            avec des résultats mesurables à chaque étape.
          </p>
        </div>

        {/* Process timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 hidden lg:block" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="group relative opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                {/* Connector dot */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary hidden lg:block">
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                </div>

                <div className="relative p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/40 transition-all duration-500 text-center lg:text-left">
                  {/* Step number */}
                  <div className="text-5xl font-bold text-muted/30 mb-4 group-hover:text-primary/20 transition-colors duration-300">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-muted text-primary mb-4 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                    <step.icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow to next step (hidden on last) */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary/40 hidden lg:block">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
