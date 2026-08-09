import { Button } from "@/components/ui/button";
import { ArrowRight, Compass } from "lucide-react";
import { contentClusters } from "@/data/contentClusters";
import { getArticleBySlug } from "@/data/blogArticles";
import { Link, useLocation } from "react-router-dom";

export const BlogSidebar = () => {
    const location = useLocation();
    const articleSlug = location.pathname.startsWith("/blog/") ? location.pathname.split("/").pop() : undefined;
    const article = articleSlug ? getArticleBySlug(articleSlug) : undefined;
    const articleCluster = article ? contentClusters.find((cluster) => cluster.id === article.clusterId) : undefined;

    return (
        <aside className="space-y-6">
            {/* CTA Card */}
            <div className="glass p-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <h3 className="font-bold text-lg mb-3">Un besoin à structurer ?</h3>
                <p className="text-sm text-foreground/80 mb-4">
                    Présentez votre fonctionnement, vos contraintes et le résultat recherché pour identifier une solution adaptée.
                </p>
                <a href="https://synapse0.neetocal.com/audit" target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="hero" size="default" className="w-full group">
                        Réserver ma démo
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </a>
            </div>

            {articleCluster && (
                <div className="glass p-6 rounded-2xl border border-primary/20">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Service associé</p>
                    <h3 className="mt-3 font-bold">{articleCluster.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-foreground/75">{articleCluster.description}</p>
                    <Link to={articleCluster.serviceHref} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        {articleCluster.serviceLabel}
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            )}

            <div className="glass p-6 rounded-2xl border border-border/50">
                <div className="flex items-center gap-2 mb-4">
                    <Compass className="w-5 h-5 text-accent" />
                    <h3 className="font-bold">Explorer par objectif</h3>
                </div>
                <ul className="space-y-3">
                    {contentClusters.map((cluster) => (
                        <li key={cluster.id}>
                            <a href={`#${cluster.id}`} className="flex items-center gap-2 text-sm text-foreground/75 transition hover:text-primary">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-70" />
                                {cluster.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="glass p-6 rounded-2xl border border-border/50">
                <h3 className="font-bold mb-3">Besoin d’une vue d’ensemble ?</h3>
                <p className="text-sm leading-6 text-foreground/75">Les services, articles et ressources sont réunis dans quatre parcours cohérents.</p>
                <Link to="/expertises" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Voir les expertises
                    <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </aside>
    );
};
