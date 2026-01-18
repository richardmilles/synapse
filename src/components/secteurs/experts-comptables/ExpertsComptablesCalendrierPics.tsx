import { TrendingUp, Calendar as CalendarIcon, Building, Users, CheckCircle2 } from "lucide-react";

export const ExpertsComptablesCalendrierPics = () => {
    const months = [
        { name: "Janvier", volume: 35, events: ["Bilan annuel"], color: "primary" },
        { name: "Février", volume: 40, events: ["Préparation fiscale"], color: "primary" },
        { name: "Mars", volume: 180, events: ["Liasse fiscale", "TVA annuelle", "Déclarations"], color: "destructive" },
        { name: "Avril", volume: 200, events: ["Pic déclarations", "Échéances fiscales"], color: "destructive" },
        { name: "Mai", volume: 45, events: ["Post-déclaratif"], color: "primary" },
        { name: "Juin", volume: 40, events: ["Clôtures semestrielles"], color: "primary" },
        { name: "Septembre", volume: 50, events: ["Rentrée fiscale"], color: "secondary" },
        { name: "Octobre", volume: 48, events: ["Préparation fin d'année"], color: "secondary" },
        { name: "Novembre", volume: 55, events: ["Conseils fiscaux"], color: "secondary" },
        { name: "Décembre", volume: 60, events: ["Bilan prévisionnel"], color: "secondary" },
    ];

    const maxVolume = 200;

    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-muted/20 via-transparent to-muted/20">
            <div className="container relative z-10 px-4 sm:px-6">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 mb-6">
                        <CalendarIcon className="w-4 h-4" />
                        <span className="text-sm font-semibold">Calendrier fiscal et volume d'appels</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-foreground">Comment gérer les </span>
                        <span className="bg-gradient-to-r from-synapse-blue to-synapse-violet bg-clip-text text-transparent">
                            pics saisonniers
                        </span>
                        <span className="text-foreground"> sans embauche ?</span>
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        En <span className="font-semibold text-destructive">Mars-Avril</span>, votre{" "}
                        <span className="font-semibold text-foreground">standard cabinet comptable</span> reçoit{" "}
                        <span className="font-semibold text-destructive">+300% d'appels</span>. L'
                        <span className="font-semibold text-foreground">automatisation secrétariat expert-comptable</span> absorbe
                        ce volume sans personnel temporaire.
                    </p>
                </div>

                {/* Calendar Grid */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
                        {months.map((month, index) => {
                            const isPeak = month.color === "destructive";
                            const heightPercent = (month.volume / maxVolume) * 100;

                            return (
                                <div
                                    key={month.name}
                                    className={`glass rounded-2xl p-6 border transition-all duration-500 hover:scale-105 opacity-0 animate-fade-in-up ${isPeak
                                            ? "border-destructive/30 shadow-[0_0_20px_hsl(0_84%_60%/0.1)]"
                                            : "border-border/50"
                                        }`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {/* Month Header */}
                                    <div className="mb-4">
                                        <h3 className={`text-lg font-bold ${isPeak ? "text-destructive" : "text-foreground"}`}>
                                            {month.name}
                                        </h3>
                                    </div>

                                    {/* Volume Bar */}
                                    <div className="mb-4">
                                        <div className="flex items-end justify-between mb-2">
                                            <span className="text-xs text-muted-foreground">Appels</span>
                                            <span className={`text-xl font-bold ${isPeak ? "text-destructive" : "text-primary"}`}>
                                                {month.volume}
                                            </span>
                                        </div>
                                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                                            <div
                                                className={`h-full rounded-full transition-all duration-1000 ${isPeak ? "bg-destructive" : "bg-primary/60"
                                                    }`}
                                                style={{
                                                    width: `${heightPercent}%`,
                                                    transitionDelay: `${index * 0.1 + 0.5}s`,
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Events */}
                                    <div className="space-y-1.5">
                                        {month.events.map((event, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <div className={`w-1 h-1 rounded-full mt-1.5 flex-shrink-0 ${isPeak ? "bg-destructive" : "bg-primary"
                                                    }`} />
                                                <span className="text-xs text-muted-foreground leading-tight">{event}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Comparison Cards */}
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Sans IA */}
                        <div className="glass rounded-3xl p-8 border border-destructive/20">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                                    <Users className="w-6 h-6 text-destructive" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Sans automatisation</h3>
                                    <p className="text-sm text-muted-foreground">Gestion traditionnelle pics</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-destructive/10">
                                    <div className="text-sm text-muted-foreground mb-1">Embauches saisonnières</div>
                                    <div className="text-2xl font-bold text-destructive">2-3 personnes</div>
                                    <div className="text-xs text-muted-foreground mt-1">Mars-Avril uniquement</div>
                                </div>

                                <div className="p-4 rounded-xl bg-destructive/10">
                                    <div className="text-sm text-muted-foreground mb-1">Coût formation + gestion</div>
                                    <div className="text-2xl font-bold text-destructive">~8 000 €</div>
                                    <div className="text-xs text-muted-foreground mt-1">Par période fiscale</div>
                                </div>

                                <div className="space-y-2 pt-4 border-t border-border/50">
                                    <div className="flex items-center gap-2 text-sm text-destructive">
                                        <div className="w-1.5 h-1.5 rounded-full bg-destructive" />
                                        <span>Standard saturé hors horaires</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-destructive">
                                        <div className="w-1.5 h-1.5 rounded-full bg-destructive" />
                                        <span>Appels créateurs perdus</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-destructive">
                                        <div className="w-1.5 h-1.5 rounded-full bg-destructive" />
                                        <span>Stress équipe permanente</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Avec IA */}
                        <div className="glass rounded-3xl p-8 border border-primary/30 shadow-[0_0_30px_hsl(210_100%_60%/0.1)]">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Avec agent vocal IA</h3>
                                    <p className="text-sm text-muted-foreground">Absorption automatique pics</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-primary/10">
                                    <div className="text-sm text-muted-foreground mb-1">Capacité appels simultanés</div>
                                    <div className="text-2xl font-bold text-primary">Illimitée</div>
                                    <div className="text-xs text-muted-foreground mt-1">24/7 toute l'année</div>
                                </div>

                                <div className="p-4 rounded-xl bg-primary/10">
                                    <div className="text-sm text-muted-foreground mb-1">Coût additionnel période</div>
                                    <div className="text-2xl font-bold text-primary">0 €</div>
                                    <div className="text-xs text-muted-foreground mt-1">Tarif fixe mensuel</div>
                                </div>

                                <div className="space-y-2 pt-4 border-t border-primary/20">
                                    <div className="flex items-center gap-2 text-sm text-primary">
                                        <CheckCircle2 className="w-4 h-4" />
                                        <span>100% appels décrochés</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-primary">
                                        <CheckCircle2 className="w-4 h-4" />
                                        <span>Qualification SIRET automatique</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-primary">
                                        <CheckCircle2 className="w-4 h-4" />
                                        <span>Équipe concentrée sur production</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SEO Footer */}
                    <div className="mt-12 text-center max-w-3xl mx-auto">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            L'<span className="font-semibold text-foreground">agent vocal expert-comptable</span> assure une{" "}
                            <span className="font-semibold text-foreground">réception appels cabinet comptable 24/7</span>, même en{" "}
                            <span className="font-semibold text-foreground">période déclarative fiscale</span>. La{" "}
                            <span className="font-semibold text-foreground">qualification création entreprise automatique</span> et
                            la <span className="font-semibold text-foreground">prise RDV comptable</span> permettent de{" "}
                            <span className="font-semibold text-foreground">capter prospects comptabilité</span> sans saturer votre équipe.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
