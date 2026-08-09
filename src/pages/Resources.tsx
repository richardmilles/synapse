import { ArrowRight, Layers3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Footer } from "@/components/sections/Footer";
import { resources } from "@/data/resources";
import { contentClusters } from "@/data/contentClusters";
import { ContentClustersSection } from "@/components/content/ContentClustersSection";
import { usePageSeo } from "@/hooks/use-page-seo";
import { PageBreadcrumb } from "@/components/navigation/PageBreadcrumb";

const ResourcesPage = () => {
  usePageSeo({
    title: "Ressources pratiques pour les projets numériques | Synapse",
    description:
      "Guides, méthodes, modèles et outils pratiques pour structurer un projet numérique, automatiser les opérations et déployer des agents IA.",
    canonicalPath: "/ressources",
  });

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <NeuralBackground />
      <Header />

      <main className="relative z-10 pt-20">
        <section className="px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24">
          <div className="container">
            <div className="mx-auto max-w-5xl">
              <PageBreadcrumb items={[{ label: "Ressources" }]} className="mb-9" />
              <div className="max-w-3xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium">
                  <Layers3 className="h-4 w-4 text-primary" />
                  Ressources opérationnelles
                </div>
                <h1 className="text-4xl font-bold leading-[1.05] sm:text-6xl">
                  Des méthodes à utiliser, partager et appliquer.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/85 sm:text-xl">
                  Des guides conçus pour rester utiles après la lecture : modèles copiables, outils de décision, checklists et plans d’action directement accessibles sur le site.
                </p>
              </div>

              <div className="mt-14 space-y-16">
                {contentClusters.map((cluster) => {
                  const clusterResources = resources.filter((resource) => resource.clusterId === cluster.id);
                  if (clusterResources.length === 0) return null;

                  return (
                    <section key={cluster.id} id={`ressources-${cluster.id}`} className="scroll-mt-28">
                      <div className="mb-7 border-l-2 border-primary pl-5">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{cluster.number}</p>
                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{cluster.title}</h2>
                        <p className="mt-3 max-w-2xl leading-7 text-foreground/75">{cluster.description}</p>
                      </div>
                      <div className="grid gap-6">
                        {clusterResources.map((resource) => (
                          <Link key={resource.slug} to={`/ressources/${resource.slug}`} className="group block">
                            <article className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/70 p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-primary/40 sm:p-9">
                              <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/20" />
                              <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                                <div>
                                  <div className="mb-5 flex flex-wrap items-center gap-3 text-xs text-foreground/70">
                                    <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-semibold text-primary">{resource.category}</span>
                                    <span>{resource.format}</span>
                                  </div>
                                  <h3 className="text-2xl font-bold transition group-hover:text-primary sm:text-4xl">{resource.title}</h3>
                                  <p className="mt-4 max-w-2xl leading-7 text-foreground/85">{resource.description}</p>
                                </div>
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition group-hover:translate-x-1">
                                  <ArrowRight className="h-5 w-5" />
                                </div>
                              </div>
                            </article>
                          </Link>
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <ContentClustersSection compact title="Relier les ressources à un projet concret" introduction="Chaque ressource s’inscrit dans un parcours plus large, depuis le cadrage du besoin jusqu’au déploiement et au suivi de la solution." />
      </main>

      <Footer />
    </div>
  );
};

export default ResourcesPage;
