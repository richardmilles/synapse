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
    slug: "transformer-claude-en-systeme-de-travail",
    title: "Transformer Claude en système de travail",
    description:
      "Les cinq configurations à mettre en place pour passer d’un simple chatbot à un environnement de travail structuré et réutilisable.",
    category: "Productivité IA",
    updatedAt: "6 août 2026",
    format: "Guide pratique",
  },
];
