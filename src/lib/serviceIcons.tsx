import { Bot, Gauge, Hammer, LayoutGrid, LucideIcon, PenTool, Plug, Search, Zap } from "lucide-react";

export const serviceIcons: Record<string, LucideIcon> = {
  "diagnostic-processus": Search,
  "solution-numerique-sur-mesure": LayoutGrid,
  "automatisation-processus": Zap,
  "agents-ia": Bot,
  "integration-api-outils": Plug,
};

export const getServiceIcon = (slug: string): LucideIcon => serviceIcons[slug] ?? Search;

/** Icônes génériques pour les 4 phases communes à tous les services (cadrage/conception/réalisation/déploiement). */
export const stepIcons: LucideIcon[] = [Search, PenTool, Hammer, Gauge];
