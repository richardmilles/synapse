import { ArrowRight, Clock, Phone, Star, TrendingUp } from "lucide-react";

export const RenovationFunnelProspects = () => {
    const funnelSteps = [
        {
            step: 1,
            title: "Formulaire envoyé",
            time: "0 min",
            prospects: 100,
            color: "primary",
            status: "Prospect motive - fenêtre d'action ouverte",
            icon: Phone,
        },
        {
            step: 2,
            title: "Rappel agent IA",
            time: "15 min",
            prospects: 100,
            color: "primary",
            status: "Contact établi - qualification en cours",
            icon: Phone,
        },
        {
            step: 3,
            title: "Projet qualifié",
            time: "30 min",
            prospects: 85,
            color: "secondary",
            status: "Budget, délais, nature travaux collectés",
            icon: Star,
        },
        {
            step: 4,
            title: "RDV chantier fixé",
            time: "45 min",
            prospects: 60,
            color: "accent",
            status: "Rendez-vous planifié dans les 48h",
            icon: TrendingUp,
        },
        {
            step: 5,
            title: "Devis présenté",
            time: "3-5 jours",
            prospects: 50,
            color: "accent",
            status: "Chiffrage envoyé au prospect qualifié",
            icon: TrendingUp,
        },
        {
            step: 6,
            title: "Chantier signé",
            time: "7-14 jours",
            prospects: 30,
            color: "primary",
            status: "Contrat et acompte - projet lancé",
            icon: Star,
        },
    ];

    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-transparent via-muted/20 to-transparent">
            <div className="container relative z-10 px-4 sm:px-6">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 mb-6">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-sm font-semibold">Funnel conversion prospects rénovation</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-foreground">Du formulaire au </span>
                        <span className="bg-gradient-to-r from-synapse-blue to-synapse-yellow bg-clip-text text-transparent">
                            chantier signé
                        </span>
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Avec un <span className="font-semibold text-foreground">rappel automatique sous 15 minutes</span>,
                        votre <span className="font-semibold text-foreground">taux de conversion prospect rénovation</span> passe
                        de 12% à <span className="font-semibold text-primary">30%</span>. Chaque heure perdue =
                        <span className="font-semibold text-destructive"> -15% de chances</span> de signature.
                    </p>
                </div>

                {/* Funnel Visual */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Connection line */}
                        <div className="absolute left-12 top-16 bottom-16 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

                        {/* Steps */}
                        <div className="space-y-6">
                            {funnelSteps.map((step, index) => {
                                const widthPercent = (step.prospects / funnelSteps[0].prospects) * 100;
                                const Icon = step.icon;

                                return (
                                    <div
                                        key={step.step}
                                        className="relative opacity-0 animate-fade-in-up"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <div className="flex items-start gap-6">
                                            {/* Step number */}
                                            <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center glass border-2 ${step.color === 'primary' ? 'border-primary bg-primary/10' :
                                                    step.color === 'secondary' ? 'border-secondary bg-secondary/10' :
                                                        'border-accent bg-accent/10'
                                                }`}>
                                                <span className={`text-lg font-bold ${step.color === 'primary' ? 'text-primary' :
                                                        step.color === 'secondary' ? 'text-secondary' :
                                                            'text-accent'
                                                    }`}>
                                                    {step.step}
                                                </span>
                                            </div>

                                            {/* Content card */}
                                            <div className="flex-1">
                                                <div className="glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all">
                                                    <div className="flex items-start justify-between mb-4">
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-3 mb-2">
                                                                <Icon className={`w-5 h-5 ${step.color === 'primary' ? 'text-primary' :
                                                                        step.color === 'secondary' ? 'text-secondary' :
                                                                            'text-accent'
                                                                    }`} />
                                                                <h3 className="text-lg font-bold">{step.title}</h3>
                                                            </div>
                                                            <p className="text-sm text-muted-foreground mb-3">{step.status}</p>
                                                            <div className="flex items-center gap-2">
                                                                <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                                                                <span className="text-xs text-muted-foreground">Délai : {step.time}</span>
                                                            </div>
                                                        </div>

                                                        {/* Conversion rate */}
                                                        <div className="text-right">
                                                            <div className={`text-3xl font-bold mb-1 ${step.color === 'primary' ? 'text-primary' :
                                                                    step.color === 'secondary' ? 'text-secondary' :
                                                                        'text-accent'
                                                                }`}>
                                                                {step.prospects}%
                                                            </div>
                                                            <div className="text-xs text-muted-foreground">sur 100 prospects</div>
                                                        </div>
                                                    </div>

                                                    {/* Progress bar */}
                                                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                                                        <div
                                                            className={`h-full rounded-full transition-all duration-1000 ${step.color === 'primary' ? 'bg-primary' :
                                                                    step.color === 'secondary' ? 'bg-secondary' :
                                                                        'bg-accent'
                                                                }`}
                                                            style={{
                                                                width: `${widthPercent}%`,
                                                                transitionDelay: `${index * 0.1 + 0.5}s`,
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Result Comparison */}
                    <div className="mt-12 grid md:grid-cols-2 gap-6">
                        <div className="glass rounded-2xl p-6 border border-destructive/20">
                            <h3 className="text-lg font-bold mb-4 text-destructive">Sans agent vocal</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Rappel moyen</span>
                                    <span className="font-semibold text-destructive">4h30</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Taux RDV fixés</span>
                                    <span className="font-semibold text-destructive">25%</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Taux signature finale</span>
                                    <span className="font-semibold text-destructive">12%</span>
                                </div>
                                <div className="pt-3 border-t border-border/50">
                                    <div className="text-2xl font-bold text-destructive">12 chantiers</div>
                                    <div className="text-xs text-muted-foreground">sur 100 formulaires</div>
                                </div>
                            </div>
                        </div>

                        <div className="glass rounded-2xl p-6 border border-primary/30 shadow-[0_0_20px_hsl(210_100%_60%/0.1)]">
                            <h3 className="text-lg font-bold mb-4 text-primary">Avec Synapse IA</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Rappel moyen</span>
                                    <span className="font-semibold text-primary">15 min</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Taux RDV fixés</span>
                                    <span className="font-semibold text-primary">60%</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Taux signature finale</span>
                                    <span className="font-semibold text-primary">30%</span>
                                </div>
                                <div className="pt-3 border-t border-primary/20">
                                    <div className="text-2xl font-bold text-primary">30 chantiers</div>
                                    <div className="text-xs text-muted-foreground">sur 100 formulaires</div>
                                    <div className="text-xs text-primary mt-1">+150% de croissance</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SEO Footer */}
                    <div className="mt-12 text-center max-w-3xl mx-auto">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            L'<span className="font-semibold text-foreground">agent vocal rénovation</span> optimise votre{" "}
                            <span className="font-semibold text-foreground">funnel conversion devis travaux</span>. La{" "}
                            <span className="font-semibold text-foreground">qualification projet rénovation automatique</span> et la{" "}
                            <span className="font-semibold text-foreground">prise RDV chantier immédiate</span> maximisent votre{" "}
                            <span className="font-semibold text-foreground">taux signature entreprise rénovation</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
