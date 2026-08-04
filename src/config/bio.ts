export type BioIcon =
  | "calendar"
  | "youtube"
  | "instagram"
  | "tiktok"
  | "facebook"
  | "linkedin"
  | "website";

export type BioLink = {
  id: string;
  label: string;
  description?: string;
  href: string;
  icon: BioIcon;
  enabled: boolean;
  featured?: boolean;
};

export type BioOffer = {
  id: string;
  eyebrow: string;
  title: string;
  problem: string;
  deliverables: string[];
};

/**
 * Configuration éditoriale de la page /bio.
 * Modifier ce fichier suffit pour changer les textes, liens et offres.
 */
export const bioConfig = {
  siteUrl: "https://www.synapse-lab.co",
  identity: {
    name: "Nerva Vidal",
    handle: "@nerva.vi",
    eyebrow: "IA · Solutions sur mesure · Agents autonomes",
    positioning: "Je conçois des solutions sur mesure et des agents IA pour automatiser une partie de votre activité et rendre votre entreprise plus autonome.",
  },
  seo: {
    title: "Nerva Vidal | Solutions sur mesure et agents IA",
    description:
      "Solutions numériques sur mesure, automatisations et agents IA conçus pour rendre votre entreprise plus efficace et autonome.",
    shareImage: "/logo-new.png",
  },
  primaryLinks: [
    {
      id: "book-call",
      label: "Réserver un appel",
      description: "30 minutes pour identifier la solution la plus utile à votre activité",
      href: "https://koalendar.com/e/meet-with-synapse",
      icon: "calendar",
      enabled: true,
      featured: true,
    },
    {
      id: "youtube",
      label: "Voir la chaîne YouTube",
      description: "Conseils concrets, démonstrations et cas d’usage IA",
      href: "https://www.youtube.com/@NervaVidal01",
      icon: "youtube",
      enabled: true,
    },
    {
      id: "website",
      label: "Découvrir Synapse",
      description: "Solutions, secteurs et articles pratiques",
      href: "/",
      icon: "website",
      enabled: true,
    },
  ] satisfies BioLink[],
  socialLinks: [
    {
      id: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/nerva.vi/",
      icon: "instagram",
      enabled: true,
    },
    {
      id: "tiktok",
      label: "TikTok",
      href: "https://www.tiktok.com/@nerva.vi",
      icon: "tiktok",
      enabled: true,
    },
    {
      id: "youtube-social",
      label: "YouTube",
      href: "https://www.youtube.com/@NervaVidal01",
      icon: "youtube",
      enabled: true,
    },
  ] satisfies BioLink[],
  presentation: {
    eyebrow: "Des solutions pensées pour votre activité",
    title: "Faites travailler la technologie au service de votre entreprise.",
    body: "Je développe des solutions sur mesure et vous accompagne dans l’implémentation d’agents IA capables de prendre en charge une partie de vos opérations avec les garde-fous adaptés.",
    ctaLabel: "Voir les offres",
    ctaHref: "/bio/offres",
  },
  newsletter: {
    eyebrow: "L’essentiel IA",
    title: "Une idée utile sur l’IA, chaque semaine.",
    promise:
      "Des cas concrets, des automatisations applicables et aucun jargon inutile. Désinscription en un clic.",
    submitLabel: "Recevoir la prochaine note",
    consentLabel: "J’accepte de recevoir des emails.",
    doubleOptIn: false,
  },
  offers: [
    {
      id: "audit",
      eyebrow: "01 · Décider",
      title: "Audit IA et feuille de route",
      problem:
        "Vous voyez le potentiel de l’IA, mais vous ne savez pas quels projets auront un impact réel.",
      deliverables: [
        "Cartographie des tâches et irritants",
        "Priorisation par impact, coût et risque",
        "Feuille de route opérationnelle sur 90 jours",
      ],
    },
    {
      id: "custom-solutions",
      eyebrow: "02 · Construire",
      title: "Solutions numériques sur mesure",
      problem:
        "Les outils standards ne correspondent pas toujours à vos processus, à votre métier ou à vos objectifs.",
      deliverables: [
        "Conception adaptée à votre fonctionnement",
        "Développement et connexion à vos outils",
        "Déploiement, documentation et accompagnement",
      ],
    },
    {
      id: "agents",
      eyebrow: "03 · Autonomiser",
      title: "Agents IA pour vos opérations",
      problem:
        "Une partie de votre activité peut fonctionner de façon plus autonome tout en conservant le contrôle humain aux étapes importantes.",
      deliverables: [
        "Agent connecté à vos données et outils",
        "Garde-fous, supervision et validation humaine",
        "Implémentation, mesure et amélioration continue",
      ],
    },
  ] satisfies BioOffer[],
  legal: {
    hostingProvider: "Vercel",
    contactEmail: "",
    privacyContactEmail: "",
    retentionMonths: 36,
  },
} as const;
