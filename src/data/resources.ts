export type Resource = {
  slug: string;
  title: string;
  description: string;
  category: string;
  format: string;
  clusterId: "structurer" | "concevoir" | "automatiser" | "agents-ia";
};

export const resources: Resource[] = [
  {
    slug: "boucle-progression-ia",
    title: "La boucle de progression IA",
    description:
      "Une méthode pour transformer chaque correction humaine en règle durable, tester son effet et améliorer les productions suivantes.",
    category: "Méthodes IA",
    format: "Méthode opérationnelle",
    clusterId: "agents-ia",
  },
  {
    slug: "methode-contexte-claude",
    title: "La méthode CONTEXTE",
    description:
      "Nettoyer, classer et charger les instructions au bon moment pour obtenir des réponses plus précises et plus faciles à maintenir.",
    category: "Productivité IA",
    format: "Guide d’audit",
    clusterId: "structurer",
  },
  {
    slug: "securite-connecteurs-ia",
    title: "Checklist de sécurité des connecteurs IA",
    description:
      "Une matrice de décision pour connecter Gmail, Google Drive et Notion avec le niveau de permission adapté à chaque action.",
    category: "Sécurité IA",
    format: "Checklist pratique",
    clusterId: "automatiser",
  },
  {
    slug: "memoire-durable-agents-ia",
    title: "Donner une mémoire durable à ses agents IA",
    description:
      "Comprendre l’architecture de TencentDB Agent Memory et mettre en place une mémoire externe réutilisable entre les sessions et les agents.",
    category: "Infrastructure IA",
    format: "Guide technique",
    clusterId: "agents-ia",
  },
  {
    slug: "transformer-claude-en-systeme-de-travail",
    title: "Transformer Claude en système de travail",
    description:
      "Les cinq configurations à mettre en place pour passer d’un simple chatbot à un environnement de travail structuré et réutilisable.",
    category: "Productivité IA",
    format: "Guide pratique",
    clusterId: "structurer",
  },
];
