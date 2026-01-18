import { Snowflake, Flame, Calendar, TrendingUp } from "lucide-react";

export const ChauffageSaisonnalite = () => {
    const mois = [
        { nom: "Jan", hiver: 95, ete: 10, label: "Hiver fort" },
        { nom: "Fév", hiver: 90, ete: 15, label: "Hiver fort" },
        { nom: "Mar", hiver: 70, ete: 20, label: "Transition" },
        { nom: "Avr", hiver: 40, ete: 25, label: "Transition" },
        { nom: "Mai", hiver: 20, ete: 35, label: "Début été" },
        { nom: "Juin", hiver: 10, ete: 65, label: "Été montant" },
        { nom: "Juil", hiver: 5, ete: 95, label: "Été fort" },
        { nom: "Août", hiver: 5, ete: 90, label: "Été fort" },
        { nom: "Sep", hiver: 15, ete: 60, label: "Fin été" },
        { nom: "Oct", hiver: 40, ete: 30, label: "Transition" },
        { nom: "Nov", hiver: 75, ete: 15, label: "Début hiver" },
        { nom: "Déc", hiver: 90, ete: 10, label: "Hiver fort" },
    ];

    const maxAppels = 95;

    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-transparent via-muted/20 to-transparent">
            <div className="container relative z-10 px-4 sm:px-6">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-semibold">Saisonnalité activité chauffage climatisation</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-foreground">Pics d'appels : </span>
                        <span className="bg-gradient-to-r from-synapse-blue via-destructive to-synapse-yellow bg-clip-text text-transparent">
                            +400% en hiver/été
                        </span>
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        L'<span className="font-semibold text-foreground">activité chauffagiste saisonnière</span> génère des{" "}
                        <span className="font-semibold text-foreground">pics appels urgence</span> en janvier/juillet. Le{" "}
                        <span className="font-semibold text-foreground">standard automatisé chauffage</span> absorbe{" "}
                        <span className="font-semibold text-primary">100% des pics</span> sans surcharge.
                    </p>
                </div>

                {/* Chart */}
                <div className="max-w-5xl mx-auto">
                    <div className="glass rounded-3xl p-8 md:p-12 border border-border/50">
                        {/* Légende */}
                        <div className="flex items-center justify-center gap-8 mb-8">
                            <div className="flex items-center gap-2">
                                <Snowflake className="w-5 h-5 text-synapse-blue" />
                                <span className="text-sm font-semibold">Chauffage (hiver)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Flame className="w-5 h-5 text-destructive" />
                                <span className="text-sm font-semibold">Climatisation (été)</span>
                            </div>
                        </div>

                        {/* Graph */}
                        <div className="relative h-96">
                            {/* Y-axis */}
                            <div className="absolute -left-8 top-0 bottom-16 flex flex-col justify-between text-xs font-semibold text-muted-foreground">
                                <span>100%</span>
                                <span>75%</span>
                                <span>50%</span>
                                <span>25%</span>
                                <span>0%</span>
                            </div>

                            {/* Grid */}
                            <div className="absolute left-0 right-0 top-0 bottom-16 flex flex-col justify-between">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="h-px bg-border/30" />
                                ))}
                            </div>

                            {/* Bars */}
                            <div className="absolute left-0 right-0 top-0 bottom-16 flex items-end justify-around gap-1">
                                {mois.map((m, index) => {
                                    const hiverHeight = (m.hiver / maxAppels) * 100;
                                    const eteHeight = (m.ete / maxAppels) * 100;

                                    return (
                                        <div key={index} className="flex-1 relative group cursor-pointer">
                                            <div className="flex gap-0.5 items-end justify-center h-full">
                                                {/* Barre hiver */}
                                                <div
                                                    className="flex-1 bg-gradient-to-t from-synapse-blue to-synapse-blue/60 rounded-t transition-all hover:scale-105 animate-fade-in"
                                                    style={{
                                                        height: `${hiverHeight}%`,
                                                        animationDelay: `${index * 0.1}s`,
                                                    }}
                                                />
                                                {/* Barre été */}
                                                <div
                                                    className="flex-1 bg-gradient-to-t from-destructive to-destructive/60 rounded-t transition-all hover:scale-105 animate-fade-in"
                                                    style={{
                                                        height: `${eteHeight}%`,
                                                        animationDelay: `${index * 0.1 + 0.05}s`,
                                                    }}
                                                />
                                            </div>

                                            {/* Tooltip */}
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                                                <div className="glass px-3 py-2 rounded-lg border border-border/50 whitespace-nowrap shadow-xl">
                                                    <div className="text-xs font-semibold mb-1">{m.nom}</div>
                                                    <div className="text-xs text-synapse-blue">Chauffage: {m.hiver}%</div>
                                                    <div className="text-xs text-destructive">Clim: {m.ete}%</div>
                                                    <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* X-axis labels */}
                            <div className="absolute left-0 right-0 bottom-0 flex justify-around">
                                {mois.map((m, index) => (
                                    <div key={index} className="text-xs font-medium text-center flex-1">
                                        {m.nom}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Insight */}
                        <div className="mt-8 p-6 rounded-xl bg-primary/10 border border-primary/20">
                            <div className="flex items-start gap-4">
                                <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-lg font-bold text-primary mb-2">Absorption des pics</h3>
                                    <p className="text-sm text-foreground">
                                        En <span className="font-semibold">janvier</span> (grand froid) et{" "}
                                        <span className="font-semibold">juillet</span> (canicule), votre volume d'appels peut{" "}
                                        <span className="font-semibold text-primary">quadrupler</span>. Sans{" "}
                                        <span className="font-semibold">standard automatisé</span>, vous manquez{" "}
                                        <span className="font-semibold text-destructive">60-70% des urgences</span> en période de pointe.
                                        L'<span className="font-semibold">agent vocal chauffage</span> décroche{" "}
                                        <span className="font-semibold text-primary">100% des appels</span>, qualifie l'urgence,
                                        et dispatche vos <span className="font-semibold">techniciens disponibles</span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Comparaison */}
                    <div className="mt-12 grid md:grid-cols-2 gap-6">
                        <div className="glass rounded-2xl p-6 border border-destructive/20">
                            <h3 className="text-lg font-bold mb-4 text-destructive">Pic sans IA (juillet)</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Appels reçus</span>
                                    <span className="font-semibold">120/jour</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Appels décrochés</span>
                                    <span className="font-semibold text-destructive">45/jour (38%)</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Urgences manquées</span>
                                    <span className="font-semibold text-destructive">75/jour</span>
                                </div>
                            </div>
                        </div>

                        <div className="glass rounded-2xl p-6 border border-primary/30 shadow-[0_0_20px_hsl(210_100%_60%/0.1)]">
                            <h3 className="text-lg font-bold mb-4 text-primary">Pic avec Synapse (juillet)</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Appels reçus</span>
                                    <span className="font-semibold">120/jour</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Appels décrochés</span>
                                    <span className="font-semibold text-primary">120/jour (100%)</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Urgences captées</span>
                                    <span className="font-semibold text-primary">+75/jour</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SEO Footer */}
                    <div className="mt-12 text-center max-w-3xl mx-auto">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            La <span className="font-semibold text-foreground">gestion pics saisonniers chauffage climatisation</span> nécessite un{" "}
                            <span className="font-semibold text-foreground">standard téléphonique évolutif</span>. L'
                            <span className="font-semibold text-foreground">automatisation secrétariat chauffagiste</span> absorbe les{" "}
                            <span className="font-semibold text-foreground">surcharges appels hiver été</span> et maximise votre{" "}
                            <span className="font-semibold text-foreground">taux capture urgence climatisation</span> même en période de forte demande.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

