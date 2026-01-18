import { FileText, CheckCircle2, Clock, Scale, Send } from "lucide-react";

export const HuissiersProcessusSignification = () => {
    const etapes = [
        {
            numero: 1,
            titre: "Réception dossier",
            action: "Client transmet acte à signifier",
            IA: "Qualification automatique type d'acte",
            delai: "0 min",
            icon: FileText,
        },
        {
            numero: 2,
            titre: "Vérification formalités",
            action: "Clerc vérifie conformité pièces",
            IA: "IA identifie pièces manquantes",
            delai: "< 2h",
            icon: CheckCircle2,
        },
        {
            numero: 3,
            titre: "Planification signification",
            action: "Huissier planifie déplacement",
            IA: "Optimisation tournée automatique",
            delai: "< 24h",
            icon: Clock,
        },
        {
            numero: 4,
            titre: "Signification effective",
            action: "Remise acte + procès-verbal",
            IA: "Notification client automatique",
            delai: "48-72h",
            icon: Scale,
        },
        {
            numero: 5,
            titre: "Retour client",
            action: "Transmission PV + acte",
            IA: "Envoi automatisé + suivi relances",
            delai: "< 96h",
            icon: Send,
        },
    ];

    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-transparent via-muted/20 to-transparent">
            <div className="container relative z-10 px-4 sm:px-6">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
                        <Scale className="w-4 h-4" />
                        <span className="text-sm font-semibold">Processus signification acte huissier</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-foreground">Signification : </span>
                        <span className="bg-gradient-to-r from-synapse-violet to-synapse-blue bg-clip-text text-transparent">
                            du dossier au retour en 96h
                        </span>
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        L'<span className="font-semibold text-foreground">agent vocal étude huissier</span> automatise la{" "}
                        <span className="font-semibold text-foreground">gestion dossier signification</span>, du{" "}
                        <span className="font-semibold text-foreground">premier contact client</span> au{" "}
                        <span className="font-semibold text-primary">retour procès-verbal</span>.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Process Steps */}
                    <div className="relative">
                        {/* Connection line (horizontal) */}
                        <div className="hidden lg:block absolute top-24 left-24 right-24 h-1 bg-gradient-to-r from-synapse-violet via-synapse-blue to-primary" />

                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                            {etapes.map((etape, index) => {
                                const Icon = etape.icon;

                                return (
                                    <div
                                        key={index}
                                        className="relative opacity-0 animate-fade-in"
                                        style={{ animationDelay: `${index * 0.15}s` }}
                                    >
                                        {/* Step card */}
                                        <div className="glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all h-full flex flex-col">
                                            {/* Number badge */}
                                            <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mb-4 mx-auto lg:mx-0 relative z-10">
                                                <span className="text-xl font-bold text-primary">{etape.numero}</span>
                                            </div>

                                            {/* Icon */}
                                            <div className="flex items-center justify-center lg:justify-start mb-4">
                                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-synapse-violet/20 to-synapse-blue/20 flex items-center justify-center">
                                                    <Icon className="w-6 h-6 text-primary" />
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1">
                                                <h3 className="text-base font-bold mb-3 text-center lg:text-left">{etape.titre}</h3>

                                                <div className="space-y-3 mb-4">
                                                    <div className="p-3 rounded-lg bg-muted/50">
                                                        <div className="text-xs text-muted-foreground mb-1">Processus actuel</div>
                                                        <div className="text-xs font-medium">{etape.action}</div>
                                                    </div>

                                                    <div className="p-3 rounded-lg bg-primary/10">
                                                        <div className="text-xs text-primary mb-1">Avec IA</div>
                                                        <div className="text-xs font-medium text-foreground">{etape.IA}</div>
                                                    </div>
                                                </div>

                                                {/* Délai */}
                                                <div className="flex items-center gap-2 justify-center lg:justify-start">
                                                    <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                                                    <span className="text-xs font-semibold text-primary">{etape.delai}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Résumé */}
                    <div className="mt-16 grid md:grid-cols-2 gap-6">
                        <div className="glass rounded-2xl p-6 border border-border/50">
                            <h3 className="text-lg font-bold mb-4">Gestion manuelle</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Qualification dossier</span>
                                    <span className="font-semibold">20 min/dossier</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Relances client</span>
                                    <span className="font-semibold">Manuelles</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Taux oublis</span>
                                    <span className="font-semibold text-destructive">15%</span>
                                </div>
                            </div>
                        </div>

                        <div className="glass rounded-2xl p-6 border border-primary/30 shadow-[0_0_20px_hsl(280_90%_65%/0.1)]">
                            <h3 className="text-lg font-bold mb-4 text-primary">Gestion automatisée</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Qualification dossier</span>
                                    <span className="font-semibold text-primary">2 min/dossier</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Relances client</span>
                                    <span className="font-semibold text-primary">Automatiques</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Taux oublis</span>
                                    <span className="font-semibold text-primary">0%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SEO Footer */}
                    <div className="mt-12 text-center max-w-3xl mx-auto">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            L'<span className="font-semibold text-foreground">automatisation gestion dossier huissier</span> optimise le{" "}
                            <span className="font-semibold text-foreground">processus signification acte juridique</span>. L'
                            <span className="font-semibold text-foreground">agent vocal clerc huissier</span> assure la{" "}
                            <span className="font-semibold text-foreground">qualification acte signification</span> et le{" "}
                            <span className="font-semibold text-foreground">suivi procès-verbal automatique</span>, maximisant l'efficacité opérationnelle de l'étude.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
