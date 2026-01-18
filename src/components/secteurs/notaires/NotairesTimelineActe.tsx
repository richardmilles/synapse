import { FileText, CalendarCheck, PenTool, Key, CheckCircle } from "lucide-react";

export const NotairesTimelineActe = () => {
    const steps = [
        {
            day: "J-30",
            icon: FileText,
            title: "Ouverture Dossier",
            desc: "Collecte pièces auto",
            color: "bg-muted text-muted-foreground",
            status: "Terminé"
        },
        {
            day: "J-15",
            icon: CalendarCheck,
            title: "Projet d'Acte",
            desc: "Envoi projet & RDV",
            color: "bg-primary text-primary-foreground",
            status: "En cours"
        },
        {
            day: "J-7",
            icon: PenTool,
            title: "Signature Compromis",
            desc: "Rappel automatique",
            color: "bg-accent/20 text-accent",
            status: "À venir"
        },
        {
            day: "J-0",
            icon: Key,
            title: "Acte Authentique",
            desc: "Signature définitive",
            color: "bg-secondary/20 text-secondary",
            status: "Planifié"
        },
        {
            day: "J+1",
            icon: CheckCircle,
            title: "Clôture & Virement",
            desc: "Notification client",
            color: "bg-synapse-green/20 text-synapse-green",
            status: "Suivi"
        }
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container px-4 sm:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4">
                        De la <span className="text-primary">promesse</span> à la <span className="text-accent">clé</span> en temps record
                    </h2>
                    <p className="text-muted-foreground">
                        L'IA suit l'avancement de chaque dossier immobilier étape par étape, relance les clients pour les pièces manquantes et sécurise le calendrier de signature sans intervention de vos clercs.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Horizontal Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-border -translate-y-1/2 hidden md:block" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center group">
                                <div className="mb-4 text-sm font-bold text-muted-foreground bg-background px-2 py-1 rounded border border-border">
                                    {step.day}
                                </div>

                                <div
                                    className={`w-14 h-14 rounded-full ${step.color} flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 shadow-lg border-4 border-background`}
                                >
                                    <step.icon className="w-6 h-6" />
                                </div>

                                <div className="text-center">
                                    <div className="font-bold text-lg mb-1">{step.title}</div>
                                    <div className="text-sm text-muted-foreground">{step.desc}</div>
                                </div>

                                {/* Vertical Line Mobile */}
                                {index < steps.length - 1 && (
                                    <div className="h-12 w-1 bg-border md:hidden my-4" />
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-muted/30 rounded-xl p-8 border border-border/50">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="text-center md:text-left">
                                <div className="font-bold text-xl mb-2">Accélération des signatures</div>
                                <p className="text-sm text-muted-foreground">Grâce aux relances automatiques des pièces et à la coordination agenda, le délai moyen de signature est réduit de 20%.</p>
                            </div>
                            <div className="flex gap-8">
                                <div>
                                    <div className="text-3xl font-bold text-primary">-7 jours</div>
                                    <div className="text-xs uppercase font-bold text-muted-foreground">Sur délai moyen</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-accent">0</div>
                                    <div className="text-xs uppercase font-bold text-muted-foreground">Oubli pièce</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
