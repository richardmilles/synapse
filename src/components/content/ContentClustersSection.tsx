import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { contentClusters } from "@/data/contentClusters";

type ContentClustersSectionProps = {
  compact?: boolean;
  title?: string;
  introduction?: string;
};

export const ContentClustersSection = ({
  compact = false,
  title = "Quatre chemins pour avancer",
  introduction = "Choisissez le point de départ qui correspond à votre situation. Chaque ensemble relie les services, les analyses et les ressources utiles.",
}: ContentClustersSectionProps) => (
  <section className={compact ? "py-14" : "py-20 sm:py-24"}>
    <div className="container px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Par objectif</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-5xl">{title}</h2>
          <p className="mt-5 text-lg leading-8 text-foreground/85">{introduction}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {contentClusters.map((cluster) => (
            <article key={cluster.id} id={cluster.id} className="group rounded-3xl border border-border/70 bg-card/75 p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40 sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <span className="text-sm font-bold tracking-[0.16em] text-primary">{cluster.number}</span>
                <Link to={cluster.serviceHref} aria-label={cluster.serviceLabel} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background/60 text-foreground transition group-hover:border-primary/50 group-hover:text-primary">
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <h3 className="mt-8 text-2xl font-bold sm:text-3xl">{cluster.title}</h3>
              <p className="mt-4 leading-7 text-foreground/80">{cluster.description}</p>

              {!compact && (
                <ul className="mt-7 space-y-3 border-t border-border/70 pt-6">
                  {cluster.links.map((link) => (
                    <li key={link.href}>
                      <Link to={link.href} className="flex items-center justify-between gap-4 text-sm text-foreground/85 transition hover:text-primary">
                        <span>{link.label}</span>
                        <span className="shrink-0 text-xs text-foreground/60">{link.type}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);
