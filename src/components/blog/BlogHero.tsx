import { ArrowDownRight } from "lucide-react";
import { PageBreadcrumb } from "@/components/navigation/PageBreadcrumb";

export const BlogHero = () => (
  <section className="editorial-hero">
    <div className="premium-shell">
      <PageBreadcrumb items={[{ label: "Journal" }]} className="editorial-hero__breadcrumb" />
      <div className="editorial-hero__grid">
        <div><p className="premium-kicker"><span /> Analyses et retours terrain</p><h1>Des décisions plus claires pour vos projets numériques.</h1></div>
        <div className="editorial-hero__side"><p>Stratégie, opérations, automatisation, outils métier et intelligence artificielle expliqués avec un angle business.</p><a href="#articles">Explorer les analyses <ArrowDownRight /></a></div>
      </div>
    </div>
  </section>
);
