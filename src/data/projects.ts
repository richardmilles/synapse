export type ProjectModule = {
  title: string;
  text: string;
};

export type Project = {
  slug: string;
  name: string;
  sector: string;
  type: string;
  scope: string[];
  image: string;
  imageWidth: number;
  imageHeight: number;
  tagline: string;
  challengeTitle: string;
  challenge: string;
  solutionTitle: string;
  solution: string;
  modules: ProjectModule[];
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "singularityxp",
    name: "SingularityXP",
    sector: "SaaS · Customer Success",
    type: "Plateforme de pilotage client",
    scope: ["Fiche client unifiée", "Score de santé", "Analyse IA", "Intégrations"],
    image: "/realisations/singularityxp.webp",
    imageWidth: 1400,
    imageHeight: 1050,
    tagline: "Une vision complète de chaque compte client pour détecter les risques de désengagement avant qu’ils ne coûtent un renouvellement.",
    challengeTitle: "Une information client éparpillée entre plusieurs outils.",
    challenge: "Les équipes Customer Success et Revenue jonglaient entre le CRM, le support, les données d’usage et les contrats. Sans vue consolidée, il était impossible de savoir quels comptes traiter en priorité.",
    solutionTitle: "Une vue unique de chaque compte, actualisée en continu.",
    solution: "Nous avons conçu une plateforme qui réunit toutes les informations d’un client dans une fiche unique, calcule un score de santé en temps réel et s’appuie sur l’IA pour repérer les signaux faibles dans les échanges.",
    modules: [
      { title: "Fiche compte unifiée", text: "Données commerciales, tickets, échanges, usage produit, contrats et renouvellements réunis dans une seule interface." },
      { title: "Score de santé", text: "Calculé automatiquement selon l’usage, les interactions, les incidents, la satisfaction et la situation contractuelle." },
      { title: "Détection par IA", text: "Analyse des conversations pour repérer les risques de désengagement, les frustrations récurrentes et les opportunités d’upsell." },
      { title: "Plans d’action recommandés", text: "Un usage en baisse, un ticket critique et un renouvellement proche deviennent un plan d’action directement exploitable." },
      { title: "Pilotage manager", text: "Rétention, comptes à risque, renouvellements à venir, revenu exposé et opportunités d’expansion au même endroit." },
      { title: "Intégrations", text: "Connexion aux CRM, outils de support, solutions de paiement et plateformes analytics déjà en place." },
    ],
    outcome: "Les équipes travaillent à partir d’une vision client complète et à jour, et traitent les comptes à risque avant qu’ils ne se dégradent.",
  },
  {
    slug: "izimeals",
    name: "IziMeals",
    sector: "Foodtech · Restauration d’entreprise",
    type: "Plateforme opérationnelle",
    scope: ["Commande", "Production", "Stocks", "Logistique", "Facturation"],
    image: "/realisations/izimeals.webp",
    imageWidth: 1400,
    imageHeight: 1050,
    tagline: "Un seul système pour piloter la commande, la production, les stocks, la livraison et la facturation des repas.",
    challengeTitle: "Un cycle complet géré avec des outils séparés.",
    challenge: "De la commande du collaborateur à la facture de l’entreprise, chaque étape vivait dans un outil différent. Les volumes n’étaient pas consolidés et la cuisine manquait de visibilité sur ce qu’elle devait produire.",
    solutionTitle: "Un seul système, de la commande à la facturation.",
    solution: "Nous avons construit une plateforme qui transforme automatiquement les commandes en besoins de production, suit les stocks, organise les tournées et centralise la facturation.",
    modules: [
      { title: "Espace entreprise", text: "Chaque client gère ses sites, ses collaborateurs, ses budgets et ses règles de restauration." },
      { title: "Commande en ligne", text: "Menus, préférences alimentaires et allergies pris en compte dès la commande." },
      { title: "Planification de production", text: "Les commandes consolidées deviennent des portions, des recettes et des quantités d’ingrédients à préparer." },
      { title: "Gestion des stocks", text: "Suivi des matières premières, anticipation des besoins et alertes d’approvisionnement." },
      { title: "Tournées de livraison", text: "Regroupement par zone et par créneau, avec un parcours clair pour chaque livreur." },
      { title: "Prévision et facturation", text: "Anticipation des volumes à partir de l’historique, facturation, abonnements et avoirs intégrés." },
    ],
    outcome: "La vente, la production, la logistique et la finance partagent la même information et pilotent l’activité depuis un seul système.",
  },
  {
    slug: "odalya",
    name: "Odalya",
    sector: "Proptech · Gestion locative",
    type: "Plateforme de gestion immobilière",
    scope: ["Portefeuille", "Incidents", "Prestataires", "Portail propriétaire", "Documents"],
    image: "/realisations/odalya.webp",
    imageWidth: 1400,
    imageHeight: 1050,
    tagline: "Piloter un portefeuille de logements et coordonner locataires, propriétaires et prestataires depuis une seule plateforme.",
    challengeTitle: "Un portefeuille de logements et trop d’intervenants à coordonner.",
    challenge: "Les gestionnaires suivaient des centaines de biens avec des informations réparties entre baux, documents, paiements et interventions. Chaque incident signalé demandait un traitement manuel pour trouver le bon prestataire.",
    solutionTitle: "Un espace par bien, un circuit automatique pour chaque incident.",
    solution: "Nous avons conçu une plateforme où chaque logement dispose de son espace, où les incidents sont qualifiés puis routés automatiquement, et où chaque partie prenante accède à ce qui la concerne.",
    modules: [
      { title: "Espace par bien", text: "Bail, locataire, documents, paiements, interventions et historique complet du logement." },
      { title: "Vue portefeuille", text: "Suivi de centaines ou de milliers de logements depuis une seule interface." },
      { title: "Incidents qualifiés automatiquement", text: "Description et photos du locataire, catégorisation, niveau d’urgence et type de prestataire identifiés." },
      { title: "Espace prestataire", text: "Réception de la demande, disponibilité, créneau, compte rendu d’intervention et facture." },
      { title: "Portail propriétaire", text: "Biens, revenus, dépenses, interventions et vision consolidée du patrimoine." },
      { title: "Documents et échéances", text: "Classement automatique des pièces, relances, renouvellements et départs de locataires." },
    ],
    outcome: "Odalya pilote son portefeuille, suit les opérations et coordonne toutes les parties prenantes depuis un système unique.",
  },
];

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
