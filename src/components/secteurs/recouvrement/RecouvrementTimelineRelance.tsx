import { Mail, Phone, Lock, Scale, CheckCircle2 } from "lucide-react";

export const RecouvrementTimelineRelance = () => {
    const steps = [
        {
            day: "J+1",
            icon: Mail,
            title: "Relance Préventive",
            desc: "Rappel échéance doux",
            color: "bg-primary/10 text-primary",
            badge: "Amiable"
        },
        {
            day: "J+15",
            icon: Phone,
            title: "Appel de Courtoisie",
            desc: "Identification blocage",
            color: "bg-accent/10 text-accent",
            badge: "Contact"
        },
        {
            day: "J+30",
            icon: Phone,
            title: "Négociation Ferme",
            desc: "Plan paiement proposé",
            color: "bg-secondary/10 text-secondary",
            badge: "Action"
        },
        {
            day: "J+45",
            icon: Lock,
            title: "Mise en Demeure",
            desc: "Notification légale",
            color: "bg-destructive/10 text-destructive",
            badge: "Légal"
        },
        {
            day: "J+60",
            icon: Scale,
            title: "Pré-contentieux",
            desc: "Dossier huissier prêt",
            color: "bg-muted text-foreground",
            badge: "Ultime"
        }
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container px-4 sm:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4">
                        Une stratégie de relance <span className="text-primary">graduelle</span> et <span className="text-destructive">efficace</span>
                    </h2>
                    <p className="text-muted-foreground">
                        L'IA adapte le ton et la fréquence des relances selon le profil du débiteur et l'ancienneté de la dette, préservant la relation commerciale tant que possible.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Connecting Line */}
                    <div className="absolute left-[28px] top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-destructive md:hidden" />
                    <div className="absolute top-[28px] left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-destructive hidden md:block rounded-full opacity-30" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-row md:flex-col items-center md:items-center gap-6 md:gap-4 group">
                                {/* Circle */}
                                <div
                                    className={`w-14 h-14 rounded-full ${step.color} flex items-center justify-center shrink-0 border-4 border-background shadow-lg transition-transform duration-300 group-hover:scale-110 z-20`}
                                >
                                    <step.icon className="w-6 h-6" />
                                </div>

                                {/* Content */}
                                <div className="text-left md:text-center glass p-4 rounded-xl border border-border/50 w-full md:w-auto hover:border-primary/30 transition-colors">
                                    <div className="flex items-center md:justify-center gap-2 mb-2">
                                        <span className="font-bold text-lg">{step.day}</span>
                                        <span className={`text-[10px] uppercase px-2 py-0.5 rounded-full font-bold ${step.color.replace('/10', '/20')}`}>
                                            {step.badge}
                                        </span>
                                    </div>
                                    <div className="font-bold text-sm mb-1">{step.title}</div>
                                    <div className="text-xs text-muted-foreground">{step.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-bold text-primary mb-2">x3</div>
                                <div className="text-sm font-medium">Taux de contact</div>
                                <div className="text-xs text-muted-foreground mt-1">vs appels manuels</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-accent mb-2">-15J</div>
                                <div className="text-sm font-medium">Réduction DSO</div>
                                <div className="text-xs text-muted-foreground mt-1">Encaissement accéléré</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-secondary mb-2">95%</div>
                                <div className="text-sm font-medium">Amiable préservé</div>
                                <div className="text-xs text-muted-foreground mt-1">Relation client sauve</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
