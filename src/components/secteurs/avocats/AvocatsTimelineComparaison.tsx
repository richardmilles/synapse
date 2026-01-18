import { Clock, Phone, Users, CheckCircle2, X } from "lucide-react";

export const AvocatsTimelineComparaison = () => {
    const timeSlots = [
        { time: "08:00", label: "Ouverture" },
        { time: "12:00", label: "Déjeuner" },
        { time: "14:00", label: "Audiences" },
        { time: "18:00", label: "Fin journée" },
        { time: "20:00", label: "Fermeture" },
        { time: "23:00", label: "Nuit" },
    ];

    const scenarios = [
        { time: "03:00", type: "Garde à vue urgente", priority: "Haute", color: "destructive" },
        { time: "09:30", type: "Nouveau mandat commercial", priority: "Moyenne", color: "primary" },
        { time: "13:15", type: "Consultation famille", priority: "Moyenne", color: "secondary" },
        { time: "19:45", type: "Référé urgent", priority: "Haute", color: "destructive" },
        { time: "22:30", type: "Demande pénale", priority: "Haute", color: "destructive" },
    ];

    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-muted/20 to-transparent">
            <div className="container relative z-10 px-4 sm:px-6">
                {/* Header avec SEO */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 mb-6">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-semibold">Une journée type de cabinet d'avocat</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-foreground">Comment votre </span>
                        <span className="bg-gradient-to-r from-synapse-violet to-synapse-blue bg-clip-text text-transparent">
                            secrétariat juridique automatisé
                        </span>
                        <span className="text-foreground"> capte les mandats</span>
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        <span className="text-destructive font-semibold">67% des appels arrivent hors horaires</span>.
                        Comparez la <span className="font-semibold">gestion des appels cabinet avec et sans agent vocal IA</span>.
                    </p>
                </div>

                {/* Timeline Comparison */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* SANS IA */}
                        <div className="glass rounded-3xl p-8 border border-destructive/20">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                                    <X className="w-6 h-6 text-destructive" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground">Sans agent vocal IA</h3>
                                    <p className="text-sm text-muted-foreground">Standard téléphonique traditionnel</p>
                                </div>
                            </div>

                            {/* Timeline */}
                            <div className="space-y-4">
                                {scenarios.map((scenario, index) => (
                                    <div
                                        key={index}
                                        className="relative pl-8 pb-6 border-l-2 border-destructive/30 last:border-l-0 last:pb-0 opacity-0 animate-slide-in-left"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        {/* Time dot */}
                                        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-destructive/80 border-4 border-background" />

                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-mono font-semibold text-destructive">{scenario.time}</span>
                                                <span className="px-2 py-0.5 rounded text-xs bg-destructive/10 text-destructive font-medium">
                                                    {scenario.priority}
                                                </span>
                                            </div>
                                            <p className="text-sm font-semibold text-foreground">{scenario.type}</p>
                                            <div className="flex items-start gap-2 text-xs text-destructive">
                                                <X className="w-3 h-3 mt-0.5 flex-shrink-0" />
                                                <span>Appel manqué • Prospect contacte concurrent • Mandat perdu</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Stats */}
                            <div className="mt-8 pt-6 border-t border-border/50">
                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div>
                                        <div className="text-2xl font-bold text-destructive">40%</div>
                                        <div className="text-xs text-muted-foreground">Appels perdus</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-destructive">-30k€</div>
                                        <div className="text-xs text-muted-foreground">CA annuel perdu</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* AVEC IA */}
                        <div className="glass rounded-3xl p-8 border border-primary/30 shadow-[0_0_30px_hsl(280_90%_65%/0.2)]">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground">Avec Synapse IA</h3>
                                    <p className="text-sm text-muted-foreground">Réception appels automatique 24/7</p>
                                </div>
                            </div>

                            {/* Timeline */}
                            <div className="space-y-4">
                                {scenarios.map((scenario, index) => (
                                    <div
                                        key={index}
                                        className="relative pl-8 pb-6 border-l-2 border-primary/30 last:border-l-0 last:pb-0 opacity-0 animate-slide-in-right"
                                        style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                                    >
                                        {/* Time dot */}
                                        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background animate-pulse" />

                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-mono font-semibold text-primary">{scenario.time}</span>
                                                <span className="px-2 py-0.5 rounded text-xs bg-primary/10 text-primary font-medium">
                                                    {scenario.priority}
                                                </span>
                                            </div>
                                            <p className="text-sm font-semibold text-foreground">{scenario.type}</p>
                                            <div className="flex items-start gap-2 text-xs text-primary">
                                                <CheckCircle2 className="w-3 h-3 mt-0.5 flex-shrink-0" />
                                                <span>
                                                    {scenario.priority === "Haute"
                                                        ? "Qualification urgence • Transfert associé • Mandat capté"
                                                        : "Qualification type affaire • RDV programmé • Dossier qualifié"
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Stats */}
                            <div className="mt-8 pt-6 border-t border-primary/20">
                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div>
                                        <div className="text-2xl font-bold text-primary">100%</div>
                                        <div className="text-xs text-muted-foreground">Appels captés</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-primary">+40%</div>
                                        <div className="text-xs text-muted-foreground">Mandats signés</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SEO Text Footer */}
                    <div className="mt-12 max-w-3xl mx-auto text-center">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Votre <span className="font-semibold text-foreground">assistant virtuel avocat</span> assure une{" "}
                            <span className="font-semibold text-foreground">permanence téléphonique juridique</span> continue.
                            La <span className="font-semibold text-foreground">qualification automatique des dossiers</span> permet
                            de distinguer les urgences (garde à vue, référé) des consultations standard, optimisant ainsi votre{" "}
                            <span className="font-semibold text-foreground">gestion du temps cabinet avocat</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
