import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ContentClustersSection } from "@/components/content/ContentClustersSection";
import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { usePageSeo } from "@/hooks/use-page-seo";
import { PageBreadcrumb } from "@/components/navigation/PageBreadcrumb";

const Expertises = () => {
  usePageSeo({
    title: "Services numériques sur mesure pour entreprises | Synapse",
    description: "Diagnostic, conception sur mesure, automatisation, agents IA et intégrations pour transformer un besoin métier en solution opérationnelle.",
    canonicalPath: "/expertises",
  });

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <NeuralBackground />
      <Header />
      <main className="relative z-10 pt-20">
        <section className="border-b border-border/60 px-4 py-16 sm:px-6 sm:py-24">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <PageBreadcrumb items={[{ label: "Services" }]} className="mb-9" />
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Services et expertises</p>
              <h1 className="mt-5 max-w-5xl text-4xl font-bold leading-[1.04] tracking-[-0.035em] sm:text-6xl lg:text-7xl">Du problème métier à la solution en production</h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-foreground/85 sm:text-xl">Synapse analyse le fonctionnement existant, structure le projet, conçoit la solution et accompagne son déploiement. La technologie est choisie selon le besoin, les contraintes et la valeur attendue.</p>
            </div>
          </div>
        </section>

        <ContentClustersSection />

        <section className="border-y border-border/60 bg-card/30 px-4 py-16 sm:px-6 sm:py-24">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <div className="mb-10 max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">Les interventions</p>
                <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Cinq services qui peuvent se combiner</h2>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {services.map((service, index) => (
                  <Link key={service.slug} to={`/services/${service.slug}`} className="group rounded-3xl border border-border/70 bg-background/60 p-7 transition hover:-translate-y-1 hover:border-primary/40">
                    <div className="flex items-start justify-between gap-5">
                      <span className="text-sm font-bold text-primary">0{index + 1}</span>
                      <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1 group-hover:text-primary" />
                    </div>
                    <h3 className="mt-8 text-2xl font-bold">{service.shortTitle}</h3>
                    <p className="mt-4 leading-7 text-foreground/80">{service.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-24">
          <div className="container">
            <Link
              to="/services/fidelisation-automatisee-logiciels-metiers"
              className="group mx-auto grid max-w-6xl gap-8 rounded-3xl border border-secondary/30 bg-gradient-to-br from-secondary/15 via-card to-primary/10 p-8 transition hover:border-secondary/55 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end"
            >
              <div className="max-w-4xl">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">Solution verticale</p>
                <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Fidélisation automatisée pour logiciels métiers</h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-foreground/80">Transformer les prestations terminées, périodes d’inactivité, habitudes d’achat et renouvellements en actions déclenchées au bon moment.</p>
              </div>
              <span className="inline-flex items-center gap-2 font-semibold text-secondary">
                Découvrir la solution
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 sm:py-28">
          <div className="container">
            <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/20 via-card to-secondary/15 p-8 sm:p-12 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold sm:text-5xl">Commencer par clarifier le besoin</h2>
                <p className="mt-5 text-lg leading-8 text-foreground/80">Présentez le fonctionnement actuel, les points de friction et le résultat recherché. L’échange permet d’identifier une première étape cohérente.</p>
              </div>
              <a href="https://synapse0.neetocal.com/audit" className="shrink-0">
                <Button variant="hero" size="lg">Réserver un appel</Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Expertises;
