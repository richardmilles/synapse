import { ArrowRight, BookOpen, Clock, Download, Layers3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Footer } from "@/components/sections/Footer";
import { resources } from "@/data/resources";
import { usePageSeo } from "@/hooks/use-page-seo";

const ResourcesPage = () => {
  usePageSeo({
    title: "Ressources IA pratiques pour les entreprises | Synapse",
    description:
      "Guides, méthodes, modèles et outils pratiques pour structurer vos usages de l’IA et déployer des solutions utiles dans votre entreprise.",
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
              <div className="max-w-3xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium">
                  <Layers3 className="h-4 w-4 text-primary" />
                  Ressources opérationnelles
                </div>
                <h1 className="text-4xl font-bold leading-[1.05] sm:text-6xl">
                  Des méthodes à utiliser, partager et appliquer.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  Des guides conçus pour rester utiles après la lecture : modèles copiables, outils de décision, checklists et plans d’action directement accessibles sur le site.
                </p>
              </div>

              <div className="mt-14 grid gap-6">
                {resources.map((resource) => (
                  <Link key={resource.slug} to={`/ressources/${resource.slug}`} className="group block">
                    <article className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/70 p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-primary/40 sm:p-9">
                      <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/20" />
                      <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                        <div>
                          <div className="mb-5 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                            <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-semibold text-primary">{resource.category}</span>
                            <span>{resource.format}</span>
                            <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{resource.readTime}</span>
                          </div>
                          <h2 className="text-2xl font-bold transition group-hover:text-primary sm:text-4xl">{resource.title}</h2>
                          <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{resource.description}</p>
                          <p className="mt-5 text-xs text-muted-foreground">Mis à jour le {resource.updatedAt}</p>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition group-hover:translate-x-1">
                          <ArrowRight className="h-5 w-5" />
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/50 bg-white/[0.025] p-5">
                  <BookOpen className="h-5 w-5 text-secondary" />
                  <h2 className="mt-4 font-semibold">Lecture sans distraction</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">Chaque ressource reste accessible depuis une URL claire et adaptée au partage.</p>
                </div>
                <div className="rounded-2xl border border-border/50 bg-white/[0.025] p-5">
                  <Download className="h-5 w-5 text-accent" />
                  <h2 className="mt-4 font-semibold">Éléments réutilisables</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">Les modèles se copient en un clic et les checklists peuvent être téléchargées.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ResourcesPage;
