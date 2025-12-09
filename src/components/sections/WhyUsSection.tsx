import { Shield, Rocket, Target, Lightbulb, HeartHandshake, Gauge } from "lucide-react";

export const WhyUsSection = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Expertise technique pointue",
      description: "Notre équipe maîtrise les technologies IA les plus avancées et reste en veille permanente sur les dernières innovations.",
    },
    {
      icon: Rocket,
      title: "Déploiement rapide",
      description: "De l'idée au prototype en quelques semaines. Nous privilégions l'itération rapide pour des résultats concrets.",
    },
    {
      icon: Target,
      title: "Approche orientée business",
      description: "Chaque solution est conçue pour générer un ROI mesurable. L'IA au service de vos objectifs stratégiques.",
    },
    {
      icon: Lightbulb,
      title: "Innovation pragmatique",
      description: "Nous combinons créativité technologique et pragmatisme opérationnel pour des solutions réellement utilisables.",
    },
    {
      icon: HeartHandshake,
      title: "Accompagnement dédié",
      description: "Un interlocuteur unique tout au long du projet, de la conception au déploiement et au-delà.",
    },
    {
      icon: Gauge,
      title: "Performance mesurable",
      description: "Des KPIs clairs dès le départ. Nous nous engageons sur des résultats quantifiables et vérifiables.",
    },
  ];

  return (
    <section id="apropos" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-synapse-yellow/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-synapse-violet/10 rounded-full blur-[120px]" />

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Pourquoi choisir <span className="bg-gradient-to-r from-synapse-yellow to-synapse-violet bg-clip-text text-transparent">Synapse</span> ?
          </h2>
          <p className="text-lg text-foreground/70">
            Nous ne sommes pas qu'une agence technique. Nous sommes votre <span className="text-accent font-medium">partenaire stratégique</span>{" "}
            pour naviguer la révolution IA avec confiance et succès.
          </p>
        </div>

        {/* Central hub with connecting lines */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-[60px] hidden lg:block" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="group relative p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/40 hover:bg-card/80 transition-all duration-500 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                {/* Connection dot */}
                <div className="absolute top-1/2 -left-1 w-2 h-2 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block" />

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
