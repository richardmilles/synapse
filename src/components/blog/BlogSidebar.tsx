import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

export const BlogSidebar = () => {
    return (
        <aside className="space-y-6">
            {/* CTA Card */}
            <div className="glass p-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <h3 className="font-bold text-lg mb-3">Prêt à automatiser ?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                    Découvrez comment Synapse peut transformer votre activité en 15 minutes de démo personnalisée.
                </p>
                <a href="https://koalendar.com/e/meet-with-synapse" target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="hero" size="default" className="w-full group">
                        Réserver ma démo
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </a>
            </div>

            {/* Popular Topics */}
            <div className="glass p-6 rounded-2xl border border-border/50">
                <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    <h3 className="font-bold">Sujets populaires</h3>
                </div>
                <ul className="space-y-3">
                    {[
                        "Réduire temps d'attente",
                        "Automatiser relances",
                        "Améliorer conversion",
                        "Gérer no-shows",
                        "Optimiser support IT"
                    ].map((topic, index) => (
                        <li key={index}>
                            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                                {topic}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Categories */}
            <div className="glass p-6 rounded-2xl border border-border/50">
                <h3 className="font-bold mb-4">Catégories</h3>
                <div className="flex flex-wrap gap-2">
                    {[
                        { name: "Juridique", color: "primary" },
                        { name: "Finance", color: "accent" },
                        { name: "RH", color: "secondary" },
                        { name: "Formation", color: "synapse-violet" },
                        { name: "IT", color: "synapse-blue" },
                        { name: "Services", color: "synapse-green" },
                    ].map((cat, index) => (
                        <a
                            key={index}
                            href="#"
                            className={`text-xs px-3 py-1.5 rounded-full border bg-${cat.color}/10 text-${cat.color} border-${cat.color}/20 hover:bg-${cat.color}/20 transition-colors`}
                        >
                            {cat.name}
                        </a>
                    ))}
                </div>
            </div>
        </aside>
    );
};
