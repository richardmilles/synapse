import { MessageSquare, FileSearch, ShoppingCart, BarChart3, Mail, Users } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      icon: MessageSquare,
      title: "Chatbot service client",
      description: "Agent conversationnel intelligent capable de traiter 80% des demandes clients de manière autonome, avec escalade intelligente vers les équipes humaines.",
      tags: ["IA Conversationnelle", "Automatisation", "Support"],
    },
    {
      icon: FileSearch,
      title: "Analyse documentaire",
      description: "Système d'extraction et d'analyse automatisée de documents (contrats, factures, rapports) avec classification et indexation intelligente.",
      tags: ["NLP", "OCR", "Data Mining"],
    },
    {
      icon: ShoppingCart,
      title: "Optimisation e-commerce",
      description: "Moteur de recommandation personnalisé et prédiction de la demande pour maximiser les conversions et optimiser les stocks.",
      tags: ["Machine Learning", "Prédiction", "E-commerce"],
    },
    {
      icon: BarChart3,
      title: "Dashboard analytique IA",
      description: "Plateforme de business intelligence augmentée par l'IA pour des insights en temps réel et des prévisions automatisées.",
      tags: ["Analytics", "Visualisation", "Prédiction"],
    },
    {
      icon: Mail,
      title: "Automatisation marketing",
      description: "Workflows intelligents pour la qualification des leads, la personnalisation des campagnes et l'optimisation des parcours client.",
      tags: ["CRM", "Automatisation", "Marketing"],
    },
    {
      icon: Users,
      title: "Assistant RH intelligent",
      description: "Solution de gestion RH automatisée : tri de CV, planification d'entretiens, onboarding personnalisé et suivi des performances.",
      tags: ["HR Tech", "Recrutement", "Automatisation"],
    },
  ];

  return (
    <section id="projets" className="relative py-24 overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Exemples de <span className="text-accent">projets</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Découvrez les types de solutions que nous concevons pour nos clients.
            Chaque projet est <span className="text-primary font-medium">unique</span>, adapté aux défis spécifiques de chaque organisation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="relative h-full p-6 rounded-2xl glass hover:border-primary/40 transition-all duration-500">
                {/* Icon with neural connection effect */}
                <div className="relative mb-6">
                  <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-muted text-primary group-hover:bg-primary/10 transition-colors duration-300">
                    <project.icon className="w-7 h-7" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Decorative synaptic lines */}
                <div className="absolute top-4 right-4 w-16 h-16 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                  <svg viewBox="0 0 64 64" className="w-full h-full text-primary">
                    <circle cx="8" cy="8" r="2" fill="currentColor" />
                    <circle cx="56" cy="32" r="2" fill="currentColor" />
                    <circle cx="32" cy="56" r="2" fill="currentColor" />
                    <path d="M8 8 Q32 16 56 32" stroke="currentColor" strokeWidth="0.5" fill="none" />
                    <path d="M8 8 Q16 32 32 56" stroke="currentColor" strokeWidth="0.5" fill="none" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
