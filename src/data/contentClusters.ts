export type ContentCluster = {
  id: string;
  number: string;
  title: string;
  description: string;
  serviceHref: string;
  serviceLabel: string;
  links: { label: string; href: string; type: "Article" | "Ressource" | "Service" }[];
};

export const contentClusters: ContentCluster[] = [
  {
    id: "structurer",
    number: "01",
    title: "Structurer un projet numérique",
    description: "Partir du fonctionnement réel, clarifier le problème et choisir un premier périmètre capable de produire un résultat mesurable.",
    serviceHref: "/services/diagnostic-processus",
    serviceLabel: "Découvrir le diagnostic",
    links: [
      { label: "Diagnostic des processus", href: "/services/diagnostic-processus", type: "Service" },
      { label: "Qualification des leads en rénovation", href: "/blog/qualification-leads-renovation", type: "Article" },
      { label: "Optimiser un planning d’intervention", href: "/blog/optimiser-planning-depannage", type: "Article" },
    ],
  },
  {
    id: "concevoir",
    number: "02",
    title: "Concevoir une solution sur mesure",
    description: "Transformer les règles métier en un outil simple, relié aux systèmes existants et capable d’évoluer avec l’activité.",
    serviceHref: "/services/solution-numerique-sur-mesure",
    serviceLabel: "Explorer le sur-mesure",
    links: [
      { label: "Solution numérique sur mesure", href: "/services/solution-numerique-sur-mesure", type: "Service" },
      { label: "Intégration API et outils", href: "/services/integration-api-outils", type: "Service" },
      { label: "Réduire le coût du support technique", href: "/blog/reduire-cout-support-technique", type: "Article" },
    ],
  },
  {
    id: "automatiser",
    number: "03",
    title: "Automatiser avec fiabilité",
    description: "Construire des workflows qui gèrent aussi les exceptions, les erreurs et les validations nécessaires au quotidien.",
    serviceHref: "/services/automatisation-processus",
    serviceLabel: "Voir l’approche automatisation",
    links: [
      { label: "Automatisation des processus", href: "/services/automatisation-processus", type: "Service" },
      { label: "Automatiser la relance des factures", href: "/blog/automatiser-relance-factures", type: "Article" },
      { label: "Sécurité des connecteurs IA", href: "/ressources/securite-connecteurs-ia", type: "Ressource" },
    ],
  },
  {
    id: "agents-ia",
    number: "04",
    title: "Déployer des agents IA responsables",
    description: "Donner à un agent un objectif, un contexte, des outils et des indicateurs avant d’étendre son périmètre.",
    serviceHref: "/services/agents-ia",
    serviceLabel: "Comprendre les agents IA",
    links: [
      { label: "Agents IA encadrés", href: "/services/agents-ia", type: "Service" },
      { label: "Donner une mémoire durable à ses agents", href: "/ressources/memoire-durable-agents-ia", type: "Ressource" },
      { label: "La boucle de progression IA", href: "/ressources/boucle-progression-ia", type: "Ressource" },
    ],
  },
];
