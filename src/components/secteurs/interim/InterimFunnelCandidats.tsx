import { Users, Filter, CheckCircle2, UserCheck, Phone } from "lucide-react";

export const InterimFunnelCandidats = () => {
    const steps = [
        {
            icon: Users,
            label: "Base Candidats",
            count: "1500+",
            color: "text-muted-foreground",
            bg: "bg-muted/10",
            border: "border-border",
        },
        {
            icon: Filter,
            label: "Matching IA",
            count: "50 qualifiés",
            color: "text-primary",
            bg: "bg-primary/10",
            border: "border-primary/20",
        },
        {
            icon: Phone,
            label: "Contact Auto",
            count: "45 appelés",
            color: "text-secondary",
            bg: "bg-secondary/10",
            border: "border-secondary/20",
        },
        {
            icon: UserCheck,
            label: "Dispo Confirmée",
            count: "8 disponibles",
            color: "text-accent",
            bg: "bg-accent/10",
            border: "border-accent/20",
        },
        {
            icon: CheckCircle2,
            label: "Mission Pourvue",
            count: "1 recruté",
            color: "text-synapse-green",
            bg: "bg-synapse-green/10",
            border: "border-synapse-green/20",
        },
    ];

    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="container px-4 sm:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4">
                        De <span className="text-primary">l'urgence</span> au <span className="text-accent">recrutement</span> en 15 min
                    </h2>
                    <p className="text-muted-foreground">
                        L'IA scanne votre base, identifie les profils compatibles avec la mission, vérifie leur disponibilité par SMS/Vocal et vous livre le candidat prêt à partir.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-border via-primary/50 to-synapse-green/50 -translate-y-1/2 hidden md:block rounded-full" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center group">
                                <div
                                    className={`w-16 h-16 rounded-2xl ${step.bg} ${step.border} border-2 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,0,0,0.1)]`}
                                >
                                    <step.icon className={`w-8 h-8 ${step.color}`} />
                                </div>

                                <div className="text-center bg-background px-2 py-1 rounded-lg border border-border/50 shadow-sm relative z-20">
                                    <div className={`font-bold text-lg ${step.color}`}>{step.count}</div>
                                    <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{step.label}</div>
                                </div>

                                {/* Mobile connector */}
                                {index < steps.length - 1 && (
                                    <div className="h-8 w-1 bg-border md:hidden my-2" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
