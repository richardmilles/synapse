import { Clock, Phone, CheckCircle2, XCircle } from "lucide-react";

export const DepannageTimelineUrgence = () => {
    const timeline = [
        { time: "0 min", event: "Appel urgence", client: "Appelle 2-3 dépanneurs", tech: "Décroche en 3 sec", status: "critical" },
        { time: "2 min", event: "Qualification", client: "Explique la panne", tech: "Qualification automatique", status: "good" },
        { time: "5 min", event: "Devis estimatif", client: "Attend le prix", tech: "Fourchette tarifaire donnée", status: "good" },
        { time: "10 min", event: "Planification", client: "Veut une intervention rapide", tech: "Technicien dispatché", status: "excellent" },
        { time: "2h max", event: "Intervention", client: "Technicien sur place", tech: "Panne résolue", status: "excellent" },
    ];

    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-muted/20 via-transparent to-muted/20">
            <div className="container relative z-10 px-4 sm:px-6">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive border border-destructive/20 mb-6">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-semibold">Timeline intervention dépannage urgence</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-foreground">Chaque seconde compte en </span>
                        <span className="bg-gradient-to-r from-destructive to-synapse-yellow bg-clip-text text-transparent">
                            situation d'urgence
                        </span>
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Un <span className="font-semibold text-foreground">client urgence dépannage</span> appelle plusieurs entreprises.
                        Le <span className="font-semibold text-foreground">premier qui décroche</span> et rassure remporte l'
                        <span className="font-semibold text-foreground">intervention dépannage urgent</span>.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Timeline */}
                    <div className="relative">
                        {/* Center line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-destructive via-accent to-primary -translate-x-1/2" />

                        {/* Events */}
                        <div className="space-y-12">
                            {timeline.map((item, index) => {
                                const isLeft = index % 2 === 0;

                                return (
                                    <div
                                        key={index}
                                        className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-8`}
                                    >
                                        {/* Content */}
                                        <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
                                            <div className="glass rounded-2xl p-6 border border-border/50 opacity-0 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                                                <div className="mb-4">
                                                    <div className={`text-xs font-semibold mb-2 ${item.status === 'critical' ? 'text-destructive' :
                                                            item.status === 'good' ? 'text-accent' :
                                                                'text-primary'
                                                        }`}>
                                                        {item.time}
                                                    </div>
                                                    <h3 className="text-lg font-bold mb-2">{item.event}</h3>
                                                </div>

                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className={`p-3 rounded-xl bg-destructive/10 ${!isLeft && 'order-2'}`}>
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <XCircle className="w-4 h-4 text-destructive" />
                                                            <div className="text-xs font-semibold text-destructive">Sans IA</div>
                                                        </div>
                                                        <div className="text-xs text-muted-foreground">{item.client}</div>
                                                    </div>

                                                    <div className={`p-3 rounded-xl bg-primary/10 ${!isLeft && 'order-1'}`}>
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <CheckCircle2 className="w-4 h-4 text-primary" />
                                                            <div className="text-xs font-semibold text-primary">Avec Synapse</div>
                                                        </div>
                                                        <div className="text-xs text-muted-foreground">{item.tech}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Center dot */}
                                        <div className="relative z-10">
                                            <div className={`w-6 h-6 rounded-full border-4 border-background ${item.status === 'critical' ? 'bg-destructive' :
                                                    item.status === 'good' ? 'bg-accent' :
                                                        'bg-primary'
                                                } shadow-lg`} />
                                        </div>

                                        {/* Spacer */}
                                        <div className="flex-1" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Result */}
                    <div className="mt-16 grid md:grid-cols-2 gap-6">
                        <div className="glass rounded-2xl p-6 border border-destructive/20">
                            <h3 className="text-lg font-bold mb-4 text-destructive">Sans agent vocal</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Temps de réponse</span>
                                    <span className="font-semibold text-destructive">15-30 min (occupé)</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Disponibilité nuit</span>
                                    <span className="font-semibold text-destructive">Répondeur</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Taux capture urgence</span>
                                    <span className="font-semibold text-destructive">35%</span>
                                </div>
                            </div>
                        </div>

                        <div className="glass rounded-2xl p-6 border border-primary/30 shadow-[0_0_20px_hsl(210_100%_60%/0.1)]">
                            <h3 className="text-lg font-bold mb-4 text-primary">Avec Synapse IA</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Temps de réponse</span>
                                    <span className="font-semibold text-primary">3 secondes</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Disponibilité nuit</span>
                                    <span className="font-semibold text-primary">24/7</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Taux capture urgence</span>
                                    <span className="font-semibold text-primary">85%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SEO Footer */}
                    <div className="mt-12 text-center max-w-3xl mx-auto">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Le <span className="font-semibold text-foreground">standard téléphonique dépannage 24/7</span> capte toutes les{" "}
                            <span className="font-semibold text-foreground">demandes intervention urgente</span>. La{" "}
                            <span className="font-semibold text-foreground">qualification panne automatique</span> et le{" "}
                            <span className="font-semibold text-foreground">dispatch technicien immédiat</span> maximisent votre{" "}
                            <span className="font-semibold text-foreground">taux conversion dépannage urgence</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
