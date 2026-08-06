export type Resource = {
  slug: string;
  title: string;
  description: string;
  category: string;
  updatedAt: string;
  format: string;
};

export const resources: Resource[] = [
  {
    slug: "boucle-progression-ia",
    title: "La boucle de progression IA",
    description:
      "Une méthode pour transformer chaque correction humaine en règle durable, tester son effet et améliorer les productions suivantes.",
    category: "Méthodes IA",
    updatedAt: "6 août 2026",
    format: "Méthode opérationnelle",
  },
  {
    slug: "methode-contexte-claude",
    title: "La méthode CONTEXTE",
    description:
      "Nettoyer, classer et charger les instructions au bon moment pour obtenir des réponses plus précises et plus faciles à maintenir.",
    category: "Productivité IA",
    updatedAt: "6 août 2026",
    format: "Guide d’audit",
  },
  {
    slug: "securite-connecteurs-ia",
    title: "Checklist de sécurité des connecteurs IA",
    description:
      "Une matrice de décision pour connecter Gmail, Google Drive et Notion avec le niveau de permission adapté à chaque action.",
    category: "Sécurité IA",
    updatedAt: "6 août 2026",
    format: "Checklist pratique",
  },
  {
    slug: "memoire-durable-agents-ia",
    title: "Donner une mémoire durable à ses agents IA",
    description:
      "Comprendre l’architecture de TencentDB Agent Memory et mettre en place une mémoire externe réutilisable entre les sessions et les agents.",
    category: "Infrastructure IA",
    updatedAt: "6 août 2026",
    format: "Guide technique",
  },
  {
    slug: "transformer-claude-en-systeme-de-travail",
    title: "Transformer Claude en système de travail",
    description:
      "Les cinq configurations à mettre en place pour passer d’un simple chatbot à un environnement de travail structuré et réutilisable.",
    category: "Productivité IA",
    updatedAt: "6 août 2026",
    format: "Guide pratique",
  },
];
