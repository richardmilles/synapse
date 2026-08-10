import { blogArticles } from "@/data/blogArticles";
import { resources } from "@/data/resources";
import { services } from "@/data/services";

export const SITE_URL = "https://www.synapse-lab.co";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export type RouteSeo = {
  path: string;
  title: string;
  description: string;
  type?: "website" | "article";
  index?: boolean;
  lastModified?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Synapse",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-new.png`,
  email: "contact@synapse-lab.co",
  sameAs: [
    "https://www.tiktok.com/@nerva.vi",
    "https://www.instagram.com/nerva.vi/",
    "https://www.youtube.com/@NervaVidal01",
  ],
};

const staticRoutes: RouteSeo[] = [
  {
    path: "/",
    title: "Synapse | Solutions numériques sur mesure",
    description: "Synapse analyse vos besoins, conçoit la solution numérique adaptée et accompagne son implémentation : développement sur mesure, automatisation ou agents IA.",
    lastModified: "2026-08-09",
    structuredData: [
      organizationSchema,
      { "@context": "https://schema.org", "@type": "WebSite", name: "Synapse", url: SITE_URL, inLanguage: "fr-FR" },
    ],
  },
  {
    path: "/expertises",
    title: "Services numériques sur mesure pour entreprises | Synapse",
    description: "Diagnostic, conception sur mesure, automatisation, agents IA et intégrations pour transformer un besoin métier en solution opérationnelle.",
    lastModified: "2026-08-09",
  },
  {
    path: "/services/fidelisation-automatisee-logiciels-metiers",
    title: "Fidélisation automatisée pour logiciels métiers | Synapse",
    description: "Transformez les événements et données de votre logiciel métier en actions de fidélisation, de réactivation et de renouvellement déclenchées au bon moment.",
    lastModified: "2026-08-10",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Fidélisation automatisée pour logiciels métiers",
      description: "Conception et intégration de systèmes qui transforment les événements d’un logiciel métier en actions de fidélisation mesurables.",
      provider: { "@type": "Organization", name: "Synapse", url: SITE_URL },
      areaServed: "FR",
      url: `${SITE_URL}/services/fidelisation-automatisee-logiciels-metiers`,
    },
  },
  {
    path: "/blog",
    title: "Conseils sur les processus et solutions numériques | Synapse",
    description: "Analyses concrètes pour structurer les processus, concevoir des solutions sur mesure, automatiser avec fiabilité et déployer des agents IA.",
    lastModified: "2026-08-09",
  },
  {
    path: "/ressources",
    title: "Ressources pratiques pour les projets numériques | Synapse",
    description: "Guides, méthodes, modèles et outils pratiques pour structurer un projet numérique, automatiser les opérations et déployer des agents IA.",
    lastModified: "2026-08-09",
  },
  { path: "/mentions-legales", title: "Mentions légales | Synapse", description: "Mentions légales du site Synapse.", index: false },
  { path: "/politique-de-confidentialite", title: "Politique de confidentialité | Synapse", description: "Informations sur la collecte et l’utilisation des données sur le site Synapse.", index: false },
  {
    path: "/bio",
    title: "Nerva Vidal | Solutions numériques sur mesure",
    description: "Diagnostic, solutions numériques sur mesure, automatisations et agents IA pour rendre les opérations plus simples et plus fiables.",
    lastModified: "2026-08-09",
  },
  {
    path: "/bio/offres",
    title: "Offres et accompagnement | Nerva Vidal",
    description: "Diagnostic, analyse, structuration, conception et implémentation de solutions numériques adaptées au fonctionnement de votre entreprise.",
    lastModified: "2026-08-09",
  },
  { path: "/bio/merci", title: "Inscription confirmée | Nerva Vidal", description: "Votre inscription a bien été prise en compte.", index: false },
  { path: "/bio/mentions-legales", title: "Mentions légales | Synapse", description: "Mentions légales du site Synapse.", index: false },
  { path: "/bio/confidentialite", title: "Politique de confidentialité | Synapse", description: "Informations sur la collecte et l’utilisation des données sur le site Synapse.", index: false },
];

const sectorRoutes: RouteSeo[] = [
  ["/secteurs/avocats", "Solutions numériques pour cabinets d’avocats | Synapse", "Améliorez l’accueil, la qualification des demandes et le suivi des dossiers avec une solution adaptée à votre cabinet."],
  ["/secteurs/experts-comptables", "Solutions numériques pour experts-comptables | Synapse", "Fluidifiez les demandes clients, la collecte des pièces et les périodes de forte activité avec des outils adaptés au cabinet."],
  ["/secteurs/notaires", "Solutions numériques pour études notariales | Synapse", "Structurez la collecte des pièces, les relances et le suivi des dossiers au sein de votre étude notariale."],
  ["/secteurs/huissiers-justice", "Solutions numériques pour commissaires de justice | Synapse", "Améliorez la qualification des demandes, le suivi des dossiers et la coordination des interventions."],
  ["/secteurs/recouvrement-creances", "Automatisation du recouvrement de créances | Synapse", "Structurez les relances, priorisez les dossiers et suivez les actions de recouvrement avec davantage de régularité."],
  ["/secteurs/courtage-assurance", "Solutions numériques pour courtiers en assurance | Synapse", "Qualifiez les demandes, organisez les relances et améliorez le suivi commercial de votre cabinet de courtage."],
  ["/secteurs/courtage-credit", "Solutions numériques pour courtiers en crédit | Synapse", "Accélérez la qualification des projets, la collecte des pièces et le suivi des dossiers de financement."],
  ["/secteurs/depannage-domicile", "Solutions numériques pour entreprises de dépannage | Synapse", "Qualifiez les urgences, organisez les interventions et maintenez une information claire entre le terrain et le bureau."],
  ["/secteurs/chauffage-climatisation", "Solutions numériques pour entreprises CVC | Synapse", "Organisez les demandes, les contrats d’entretien, les relances et les interventions de chauffage et climatisation."],
  ["/secteurs/renovation", "Solutions numériques pour entreprises de rénovation | Synapse", "Qualifiez les projets, centralisez les informations et améliorez le suivi des prospects et des chantiers."],
  ["/secteurs/securite-alarmes", "Solutions numériques pour entreprises de sécurité | Synapse", "Structurez la qualification des demandes, le suivi des sites et la coordination des interventions de sécurité."],
  ["/secteurs/recrutement", "Solutions numériques pour cabinets de recrutement | Synapse", "Améliorez la qualification, les relances et le suivi des candidats sans alourdir le travail des consultants."],
  ["/secteurs/interim", "Solutions numériques pour agences d’intérim | Synapse", "Fluidifiez la qualification des candidats, les confirmations de mission et la gestion des disponibilités."],
  ["/secteurs/formation-professionnelle", "Solutions numériques pour organismes de formation | Synapse", "Simplifiez les inscriptions, relances, confirmations et suivis nécessaires au bon remplissage des sessions."],
  ["/secteurs/services-informatiques", "Solutions numériques pour ESN et MSP | Synapse", "Qualifiez les demandes, réduisez les tâches répétitives du support et améliorez le suivi des tickets clients."],
].map(([path, title, description]) => ({ path, title, description, lastModified: "2026-08-09" }));

const serviceRoutes: RouteSeo[] = services.map((service) => ({
  path: `/services/${service.slug}`,
  title: `${service.shortTitle} pour entreprises | Synapse`,
  description: service.description,
  lastModified: "2026-08-09",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.shortTitle,
    description: service.description,
    provider: { "@type": "Organization", name: "Synapse", url: SITE_URL },
    areaServed: "FR",
    url: `${SITE_URL}/services/${service.slug}`,
  },
}));

const blogRoutes: RouteSeo[] = blogArticles.map((article) => ({
  path: `/blog/${article.slug}`,
  title: `${article.title} | Synapse`,
  description: article.metaDescription,
  type: "article",
  lastModified: article.publishedDate,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedDate,
    dateModified: article.publishedDate,
    inLanguage: "fr-FR",
    author: { "@type": "Organization", name: "Synapse" },
    publisher: { "@type": "Organization", name: "Synapse", logo: { "@type": "ImageObject", url: `${SITE_URL}/logo-new.png` } },
    mainEntityOfPage: `${SITE_URL}/blog/${article.slug}`,
  },
}));

const resourceRoutes: RouteSeo[] = resources.map((resource) => ({
  path: `/ressources/${resource.slug}`,
  title: `${resource.title} | Synapse`,
  description: resource.description,
  type: "article",
  lastModified: "2026-08-06",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: resource.title,
    description: resource.description,
    datePublished: "2026-08-06",
    dateModified: "2026-08-06",
    inLanguage: "fr-FR",
    author: { "@type": "Organization", name: "Synapse" },
    publisher: { "@type": "Organization", name: "Synapse" },
    mainEntityOfPage: `${SITE_URL}/ressources/${resource.slug}`,
  },
}));

export const routeSeoEntries: RouteSeo[] = [
  ...staticRoutes,
  ...serviceRoutes,
  ...sectorRoutes,
  ...blogRoutes,
  ...resourceRoutes,
];

const normalizePath = (path: string) => path === "/" ? path : path.replace(/\/+$/, "");

export const getRouteSeo = (path: string): RouteSeo => {
  const normalized = normalizePath(path.split("?")[0].split("#")[0]);
  return routeSeoEntries.find((entry) => entry.path === normalized) ?? {
    path: normalized,
    title: "Page introuvable | Synapse",
    description: "Cette page n’existe pas ou a été déplacée.",
    index: false,
  };
};

export const prerenderRoutes = routeSeoEntries.map((entry) => entry.path);
export const sitemapRoutes = routeSeoEntries.filter((entry) => entry.index !== false);
