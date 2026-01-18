import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, TrendingUp, Calendar } from "lucide-react";

export const ExpertsComptablesHeroVisuel = () => {
    const months = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"];
    const callVolume = [30, 35, 180, 200, 45, 40, 38, 42, 50, 48, 55, 40];
    const maxVolume = Math.max(...callVolume);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-synapse-blue/20 rounded-full blur-[120px] animate-glow-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-synapse-violet/20 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "2s" }} />

            <div className="container relative z-10 px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    {/* Left: Content */}
                    <div className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        {/* Badge SEO */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20">
                            <Calculator className="w-4 h-4 text-accent" />
                            <span className="text-sm font-medium">Agent vocal pour cabinet comptable et expertise</span>
                        </div>

                        {/* H1 */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            <span className="text-foreground">Captez les </span>
                            <span className="bg-gradient-to-r from-synapse-blue via-synapse-violet to-synapse-yellow bg-clip-text text-transparent">
                                créateurs d'entreprise
                            </span>{" "}
                            <span className="text-foreground">avant vos concurrents</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg sm:text-xl text-foreground/70 max-w-xl">
                            <span className="text-accent font-semibold">82% des créateurs</span> choisissent le{" "}
                            <span className="text-primary font-semibold">premier cabinet qui répond</span>. Notre{" "}
                            <span className="font-semibold">standard téléphonique expert-comptable automatisé</span> absorbe vos{" "}
                            <span className="text-destructive font-semibold">pics saisonniers</span> et qualifie chaque{" "}
                            <span className="font-semibold">demande de création entreprise</span>.
                        </p>

                        {/* Stats Pills */}
                        <div className="flex flex-wrap gap-3">
                            <div className="glass px-4 py-2 rounded-full border border-destructive/30">
                                <span className="text-sm"><span className="font-bold text-destructive">+300%</span> appels en Mars-Avril</span>
                            </div>
                            <div className="glass px-4 py-2 rounded-full border border-primary/30">
                                <span className="text-sm"><span className="font-bold text-primary">82%</span> conversion 1er contact</span>
                            </div>
                            <div className="glass px-4 py-2 rounded-full border border-secondary/30">
                                <span className="text-sm"><span className="font-bold text-secondary">5x</span> plus si réponse {"<"} 5min</span>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <a href="https://koalendar.com/e/meet-with-synapse" target="_blank" rel="noopener noreferrer">
                                <Button variant="hero" size="xl" className="group">
                                    Absorber mes pics saisonniers
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </a>
                        </div>

                        {/* Trust */}
                        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                <span>Qualification SIRET automatique</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span>Intégration logiciel comptable</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                <span>Mise en place 48h</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Animated Chart */}
                    <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                        <div className="relative aspect-square max-w-lg mx-auto glass rounded-3xl p-8 border border-border/50">
                            {/* Title */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-1">Volume d'appels cabinet comptable</h3>
                                <p className="text-sm text-muted-foreground">Période fiscale vs reste de l'année</p>
                            </div>

                            {/* Chart */}
                            <div className="relative h-72">
                                {/* Y-axis labels */}
                                <div className="absolute left-0 top-0 bottom-8 w-12 flex flex-col justify-between text-xs text-muted-foreground">
                                    <span>{maxVolume}</span>
                                    <span>{Math.round(maxVolume / 2)}</span>
                                    <span>0</span>
                                </div>

                                {/* Bars */}
                                <div className="absolute left-14 right-0 top-0 bottom-8 flex items-end justify-between gap-1">
                                    {callVolume.map((volume, index) => {
                                        const heightPercent = (volume / maxVolume) * 100;
                                        const isFiscalPeriod = index >= 2 && index <= 3; // Mar-Apr

                                        return (
                                            <div key={index} className="flex-1 flex flex-col items-center gap-2">
                                                {/* Bar */}
                                                <div className="relative w-full flex items-end justify-center">
                                                    <div
                                                        className={`w-full rounded-t-lg transition-all duration-1000 opacity-0 animate-fade-in ${isFiscalPeriod
                                                            ? "bg-gradient-to-t from-destructive to-destructive/60"
                                                            : "bg-gradient-to-t from-primary/40 to-primary/20"
                                                            }`}
                                                        style={{
                                                            height: `${heightPercent}%`,
                                                            animationDelay: `${0.6 + index * 0.05}s`,
                                                        }}
                                                    >
                                                        {/* Peak indicator */}
                                                        {isFiscalPeriod && (
                                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                                                                <div className="px-2 py-1 rounded bg-destructive text-white text-[10px] font-bold">
                                                                    +{Math.round((volume / 40) * 100)}%
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Month label */}
                                                <span className={`text-[10px] font-medium ${isFiscalPeriod ? "text-destructive" : "text-muted-foreground"
                                                    }`}>
                                                    {months[index]}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* X-axis */}
                                <div className="absolute left-14 right-0 bottom-6 h-px bg-border" />
                            </div>

                            {/* Legend */}
                            <div className="mt-6 flex items-center justify-center gap-6 text-xs">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded bg-gradient-to-t from-primary/40 to-primary/20" />
                                    <span>Volume normal</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded bg-gradient-to-t from-destructive to-destructive/60" />
                                    <span>Période fiscale</span>
                                </div>
                            </div>

                            {/* Floating info */}
                            <div className="absolute -top-4 -right-4 glass px-4 py-3 rounded-xl border border-accent/30 shadow-lg animate-float">
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-accent" />
                                    <div>
                                        <div className="text-xs text-muted-foreground">Pic Mars-Avril</div>
                                        <div className="text-sm font-bold text-accent">+300% appels</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-4 -left-4 glass px-4 py-3 rounded-xl border border-primary/30 shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-primary" />
                                    <div>
                                        <div className="text-xs text-muted-foreground">Sans embauche</div>
                                        <div className="text-sm font-bold text-primary">100% géré</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
};
