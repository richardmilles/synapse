import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield, Clock, Zap } from "lucide-react";

export interface SectorCTAProps {
    sectorName: string;
    headline?: string;
    subheadline?: string;
    trustIndicators?: string[];
    ctaText?: string;
    ctaLink?: string;
}

export const SectorCTA = ({
    sectorName,
    headline = "Prêt à transformer votre activité ?",
    subheadline,
    trustIndicators = ["Mise en place rapide", "Sans engagement", "Support dédié"],
    ctaText = "Demander une démo gratuite",
    ctaLink = "https://koalendar.com/e/meet-with-synapse",
}: SectorCTAProps) => {
    const icons = [Shield, Clock, Zap];

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

            {/* Animated glow effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-glow-pulse" />
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 right-1/3 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] animate-glow-pulse" style={{ animationDelay: "2s" }} />

            <div className="container relative z-10 px-4 sm:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent mb-8 shadow-[0_0_40px_hsl(48_100%_50%/0.4)]">
                        <Sparkles className="w-8 h-8 text-accent-foreground" />
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        {headline.split(" ").slice(0, -2).join(" ")}{" "}
                        <span className="bg-gradient-to-r from-synapse-yellow via-synapse-violet to-synapse-blue bg-clip-text text-transparent">
                            {headline.split(" ").slice(-2).join(" ")}
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                        {subheadline || `Discutons de vos besoins spécifiques en tant que ${sectorName.toLowerCase()} et découvrons comment notre agent vocal IA peut accélérer votre croissance.`}
                    </p>

                    {/* CTA Button */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <a href={ctaLink} target="_blank" rel="noopener noreferrer">
                            <Button variant="hero" size="xl" className="group text-lg">
                                {ctaText}
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </a>
                    </div>

                    {/* Trust indicators */}
                    <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
                        {trustIndicators.map((indicator, index) => {
                            const Icon = icons[index % icons.length];
                            return (
                                <div key={indicator} className="flex items-center gap-2">
                                    <Icon className="w-4 h-4 text-accent" />
                                    <span className="text-sm">{indicator}</span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Trust note */}
                    <p className="mt-8 text-sm text-muted-foreground">
                        Consultation gratuite et sans engagement • Réponse sous 24h
                    </p>
                </div>
            </div>
        </section>
    );
};
