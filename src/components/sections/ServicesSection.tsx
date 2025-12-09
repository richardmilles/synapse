import { Bot, Workflow, Database, Code, Brain, Plug } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: "Agents IA intelligents",
      description: "Développement d'assistants virtuels et chatbots avancés capables de comprendre, analyser et agir de manière autonome.",
      color: "primary",
    },
    {
      icon: Workflow,
      title: "Automatisation des processus",
      description: "Conception de workflows intelligents pour éliminer les tâches répétitives et optimiser vos opérations quotidiennes.",
      color: "secondary",
    },
    {
      icon: Database,
      title: "Gestion des données",
      description: "Structuration, analyse et valorisation de vos données pour extraire des insights stratégiques exploitables.",
      color: "accent",
    },
    {
      icon: Code,
      title: "Développement sur-mesure",
      description: "Création de solutions digitales personnalisées, parfaitement adaptées à vos besoins métiers spécifiques.",
      color: "primary",
    },
    {
      icon: Brain,
      title: "Conseil en IA",
      description: "Accompagnement stratégique pour identifier les opportunités d'intégration de l'IA dans votre organisation.",
      color: "secondary",
    },
    {
      icon: Plug,
      title: "Intégration API & systèmes",
      description: "Connexion fluide de vos outils existants avec les technologies IA pour créer un écosystème unifié.",
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
          <p className="text-lg text-foreground/70">
            De la conception à l'intégration, nous maîtrisons <span className="text-accent font-medium">l'ensemble de la chaîne de valeur IA</span>{" "}
            pour transformer vos idées en solutions opérationnelles.
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
