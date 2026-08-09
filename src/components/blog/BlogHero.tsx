import { BookOpen } from "lucide-react";
import { PageBreadcrumb } from "@/components/navigation/PageBreadcrumb";

export const BlogHero = () => {
    return (
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "2s" }} />

            <div className="container relative z-10 px-4 sm:px-6">
                <PageBreadcrumb items={[{ label: "Blog" }]} className="mx-auto mb-8 max-w-4xl" />
                <div className="max-w-4xl mx-auto text-center space-y-6 opacity-0 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">Analyses & retours terrain</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                        <span className="text-foreground">Mieux structurer vos projets </span>
                        <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                            numériques
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-foreground/85 max-w-2xl mx-auto">
                        Des analyses concrètes pour comprendre un problème, comparer les options et déployer une solution adaptée, de l’outil sur mesure aux agents IA.
                    </p>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
};
