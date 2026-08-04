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
  ctaLabel: string;
  ctaHref: string;
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
    eyebrow: "Créateur · IA · Automatisation",
    positioning: "Des systèmes simples pour gagner du temps, mieux vendre et faire grandir votre entreprise.",
  },
  seo: {
    title: "Nerva Vidal | IA et automatisation",
    description:
      "Conseils, ressources et solutions pour automatiser les tâches répétitives et faire grandir votre entreprise.",
    shareImage: "/logo-new.png",
  },
  primaryLinks: [
    {
      id: "book-call",
      label: "Réserver un appel",
      description: "30 minutes pour identifier votre meilleur levier d’automatisation",
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
    eyebrow: "Le temps est votre ressource la plus rare",
    title: "Votre entreprise perd encore des heures sur des tâches qu’une machine peut gérer.",
    body: "Synapse transforme les opérations lentes, manuelles et dispersées en systèmes simples qui travaillent avec vos équipes.",
    ctaLabel: "Voir les offres",
    ctaHref: "/bio/offres",
  },
  newsletter: {
    eyebrow: "La note Synapse",
    title: "Une idée utile sur l’IA, chaque semaine.",
    promise:
      "Des cas concrets, des automatisations applicables et aucun jargon inutile. Désinscription en un clic.",
    submitLabel: "Recevoir la prochaine note",
    consentLabel:
      "J’accepte de recevoir les emails de Synapse et j’ai lu la politique de confidentialité.",
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
      ctaLabel: "Parler de votre contexte",
      ctaHref: "https://koalendar.com/e/meet-with-synapse",
    },
    {
      id: "automation",
      eyebrow: "02 · Automatiser",
      title: "Automatisations sur mesure",
      problem:
        "Vos équipes recopient, relancent et vérifient les mêmes informations dans plusieurs outils.",
      deliverables: [
        "Conception du workflow cible",
        "Connexion de vos outils existants",
        "Tests, documentation et transmission",
      ],
      ctaLabel: "Identifier une automatisation",
      ctaHref: "https://koalendar.com/e/meet-with-synapse",
    },
    {
      id: "agents",
      eyebrow: "03 · Augmenter",
      title: "Agents IA et assistants métier",
      problem:
        "Vos collaborateurs cherchent l’information, préparent des réponses et traitent trop de demandes répétitives.",
      deliverables: [
        "Assistant connecté à vos connaissances",
        "Garde-fous et validation humaine",
        "Mesure de la qualité et amélioration continue",
      ],
      ctaLabel: "Étudier votre cas d’usage",
      ctaHref: "https://koalendar.com/e/meet-with-synapse",
    },
  ] satisfies BioOffer[],
  legal: {
    hostingProvider: "Vercel",
    contactEmail: "",
    privacyContactEmail: "",
    retentionMonths: 36,
  },
} as const;
