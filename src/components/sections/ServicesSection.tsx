import { Bot, Workflow, Database, Code, Brain, Plug } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "Diagnostic et analyse",
      description: "Analyse de vos besoins, de vos processus et de vos contraintes pour identifier les solutions réellement utiles à votre activité.",
      color: "primary",
    },
    {
      icon: Code,
      title: "Conception sur mesure",
      description: "Conception et développement de solutions numériques adaptées à votre fonctionnement, à vos outils et à vos objectifs.",
      color: "secondary",
    },
    {
      icon: Plug,
      title: "Implémentation et intégration",
      description: "Déploiement, connexion à vos systèmes, tests et accompagnement des équipes jusqu'à l'adoption de la solution.",
      color: "accent",
    },
    {
      icon: Bot,
      title: "Agents IA intelligents",
      description: "Développement d'assistants et d'agents capables de comprendre, analyser et prendre en charge une partie de vos opérations.",
      color: "primary",
    },
    {
      icon: Workflow,
      title: "Automatisation des processus",
      description: "Conception de workflows fiables pour réduire les tâches répétitives et fluidifier vos opérations quotidiennes.",
      color: "secondary",
    },
    {
      icon: Database,
      title: "Données et pilotage",
      description: "Structuration, analyse et valorisation de vos données pour faciliter le suivi et améliorer la prise de décision.",
      color: "accent",
    },
  ];

  const colorClasses = {
    primary: "bg-primary/10 text-primary group-hover:bg-primary/20",
    secondary: "bg-secondary/10 text-secondary group-hover:bg-secondary/20",
    accent: "bg-accent/10 text-accent group-hover:bg-accent/20",
  };

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-synapse-violet/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-synapse-blue/10 rounded-full blur-[120px]" />

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ce que nous <span className="text-secondary">faisons</span>
          </h2>
          <p className="text-lg text-foreground/85">
            De l'analyse à l'intégration, nous transformons un besoin métier en <span className="text-accent font-medium">solution opérationnelle</span>{" "}
            adaptée à votre manière de travailler.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
              
              <div className="relative">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 transition-all duration-300 ${colorClasses[service.color as keyof typeof colorClasses]}`}>
                  <service.icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
                <div className="absolute top-0 right-0 w-12 h-px bg-gradient-to-l from-primary/50 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
