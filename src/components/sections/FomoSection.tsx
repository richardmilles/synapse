import { ArrowRight, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FomoSection = () => {
  const comparisons = [
    {
      without: "Processus manuels chronophages",
      with: "Automatisation intelligente 24/7",
    },
    {
      without: "Décisions basées sur l'intuition",
      with: "Insights data-driven en temps réel",
    },
    {
      without: "Réactivité face aux changements",
      with: "Anticipation et adaptation proactive",
    },
    {
      without: "Ressources mobilisées sur le répétitif",
      with: "Équipes focalisées sur la valeur ajoutée",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-muted/20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-synapse-violet/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-synapse-yellow/10 rounded-full blur-[120px]" />

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent border border-accent/30 mb-6">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-semibold">Tendance du marché</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              L'IA n'est plus une option, <br />
              <span className="text-accent">c'est un impératif stratégique</span>
            </h2>

            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Les entreprises qui tardent à adopter l'IA perdent chaque jour un peu plus de terrain
              face à leurs concurrents. <span className="text-destructive font-medium">L'écart se creuse exponentiellement.</span>
            </p>
          </div>

          {/* Comparison grid */}
          <div className="glass rounded-3xl p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Without AI */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-muted-foreground">Sans IA</h3>
                </div>
                <ul className="space-y-4">
                  {comparisons.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground opacity-0 animate-slide-in-left"
                      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive/50 mt-2 flex-shrink-0" />
                      <span>{item.without}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* With AI */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Avec Synapse</h3>
                </div>
                <ul className="space-y-4">
                  {comparisons.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-foreground opacity-0 animate-slide-in-right"
                      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item.with}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { value: "85%", label: "des dirigeants considèrent l'IA comme prioritaire" },
              { value: "2.5x", label: "croissance des entreprises adoptant l'IA" },
              { value: "60%", label: "de réduction des coûts opérationnels possibles" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-card/30 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-gradient-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center opacity-0 animate-fade-in" style={{ animationDelay: "0.9s" }}>
            <p className="text-lg text-foreground mb-6">
              Ne laissez pas vos concurrents prendre l'avantage. <br />
              <span className="text-primary font-semibold">Agissez maintenant.</span>
            </p>
            <a href="https://koalendar.com/e/meet-with-synapse" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="group">
                Prendre RDV
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
