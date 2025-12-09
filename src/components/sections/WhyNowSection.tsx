import { TrendingUp, Clock, Zap } from "lucide-react";

export const WhyNowSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "2026",
      label: "Point de bascule technologique",
      description: "L'année où l'IA redéfinira les standards de productivité dans tous les secteurs.",
    },
    {
      icon: Clock,
      value: "40%",
      label: "Gain de temps moyen",
      description: "Les entreprises utilisant l'IA automatisent près de la moitié de leurs tâches répétitives.",
    },
    {
      icon: Zap,
      value: "3x",
      label: "Avantage compétitif",
      description: "Les adopteurs précoces surpassent leurs concurrents en efficacité opérationnelle.",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Pourquoi <span className="text-accent">maintenant</span> ?
          </h2>
          <p className="text-lg text-foreground/70">
            La transformation technologique s'accélère. Les entreprises qui adoptent l'IA <span className="text-primary font-medium">aujourd'hui</span>{" "}
            construisent un avantage durable pour demain. <span className="text-accent font-medium">Attendre, c'est prendre du retard.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative p-8 rounded-2xl glass hover:border-primary/50 transition-all duration-500 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6" />
                </div>
                
                <div className="text-4xl sm:text-5xl font-bold text-gradient-primary mb-2">
                  {stat.value}
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {stat.label}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
