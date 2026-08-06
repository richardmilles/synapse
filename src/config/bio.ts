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
    eyebrow: "Diagnostic · Solutions sur mesure · IA",
    positioning: "J’analyse vos besoins, conçois la solution adaptée et vous accompagne dans son implémentation : outil sur mesure, automatisation ou agent IA.",
  },
  seo: {
    title: "Nerva Vidal | Diagnostic et solutions sur mesure",
    description:
      "Du diagnostic à l’implémentation, des solutions numériques sur mesure, automatisations et agents IA adaptés au fonctionnement de votre entreprise.",
    shareImage: "/logo-new.png",
  },
  primaryLinks: [
    {
      id: "book-call",
      label: "Réserver un appel",
      description: "30 minutes pour identifier la solution la plus utile à votre activité",
      href: "https://synapse0.neetocal.com/audit",
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
    body: "De l’analyse de vos besoins au déploiement, je vous accompagne pour intégrer une solution fiable, adaptée à votre fonctionnement.",
    ctaLabel: "Voir les offres",
    ctaHref: "/bio/offres",
  },
  newsletter: {
    eyebrow: "L’essentiel IA",
    title: "Une idée utile sur l’IA, chaque semaine.",
    promise:
      "Des cas concrets, des automatisations applicables et aucun jargon inutile.",
    submitLabel: "Recevoir la prochaine note",
    consentLabel:
      "En cliquant sur « Recevoir la prochaine note », vous acceptez de recevoir des emails.",
    doubleOptIn: false,
  },
  offers: [
    {
      id: "diagnostic",
      eyebrow: "01 · Comprendre",
      title: "Diagnostic et analyse",
      problem:
        "Avant de choisir une technologie, il faut comprendre votre fonctionnement, vos contraintes et les résultats recherchés.",
      deliverables: [
        "Analyse de vos besoins et de vos opérations",
        "Cartographie des processus, outils et points de friction",
        "Priorisation des opportunités selon leur impact",
      ],
    },
    {
      id: "structure",
      eyebrow: "02 · Structurer",
      title: "Conception de la solution",
      problem:
        "Le diagnostic devient une solution claire, réaliste et alignée avec votre manière de travailler.",
      deliverables: [
        "Structuration du fonctionnement cible",
        "Choix de la réponse adaptée : outil sur mesure, automatisation ou agent IA",
        "Cadrage technique et feuille de route d’implémentation",
      ],
    },
    {
      id: "implementation",
      eyebrow: "03 · Déployer",
      title: "Implémentation et accompagnement",
      problem:
        "Une solution produit de la valeur lorsqu’elle est correctement intégrée, adoptée par les équipes et suivie dans le temps.",
      deliverables: [
        "Développement, configuration et connexion à vos outils",
        "Tests, documentation et accompagnement des équipes",
        "Suivi des résultats et amélioration continue",
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
