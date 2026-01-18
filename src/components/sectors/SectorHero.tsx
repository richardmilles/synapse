import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface SectorHeroProps {
    sectorName: string;
    headline: string;
    subheadline: string;
    badges: Array<{
        icon?: LucideIcon;
        text: string;
    }>;
    ctaText?: string;
    ctaLink?: string;
}

export const SectorHero = ({
    sectorName,
    headline,
    subheadline,
    badges,
    ctaText = "Demander une démo",
    ctaLink = "https://koalendar.com/e/meet-with-synapse",
}: SectorHeroProps) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background glow effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-synapse-violet/20 rounded-full blur-[120px] animate-glow-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-synapse-blue/20 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "2s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-synapse-yellow/10 rounded-full blur-[80px] animate-glow-pulse" style={{ animationDelay: "1s" }} />

            <div className="container relative z-10 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Sector Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        <Sparkles className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium text-muted-foreground">
                            Agent Vocal IA pour {sectorName}
                        </span>
                    </div>

                    {/* Main heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                        {headline.split(" ").map((word, index, arr) => {
                            // Highlight last 2-3 words with gradient
                            if (index >= arr.length - 3) {
                                return (
                                    <span key={index} className="bg-gradient-to-r from-synapse-violet via-synapse-blue to-synapse-yellow bg-clip-text text-transparent">
                                        {word}{" "}
                                    </span>
                                );
                            }
                            return word + " ";
                        })}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                        {subheadline}
                    </p>

                    {/* CTA buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
                        <a href={ctaLink} target="_blank" rel="noopener noreferrer">
                            <Button variant="hero" size="xl" className="group">
                                {ctaText}
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </a>
                        <a href="#solution">
                            <Button variant="glass" size="xl">
                                Voir la solution
                            </Button>
                        </a>
                    </div>

                    {/* Trust indicators / badges */}
                    <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
                        {badges.map((badge, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${index === 0 ? "bg-accent" : index === 1 ? "bg-primary" : "bg-secondary"}`} />
                                <span className="text-sm">{badge.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
};
