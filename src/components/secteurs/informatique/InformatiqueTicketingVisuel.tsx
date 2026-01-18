import { Terminal, Cpu, UserCog, CheckCircle2, AlertTriangle } from "lucide-react";

export const InformatiqueTicketingVisuel = () => {
    const steps = [
        {
            title: "Ticket Entrant",
            desc: "Email / Appel / Chat",
            icon: AlertTriangle,
            color: "text-destructive",
            bg: "bg-destructive/10",
        },
        {
            title: "Analyse IA",
            desc: "Classification & Priorisation",
            icon: Cpu,
            color: "text-accent",
            bg: "bg-accent/10",
        },
        {
            title: "Action Auto",
            desc: "Script / Knowledge Base",
            icon: Terminal,
            color: "text-primary",
            bg: "bg-primary/10",
        },
        {
            title: "Escalade (si échec)",
            desc: "Transfert Technicien N2",
            icon: UserCog,
            color: "text-muted-foreground",
            bg: "bg-muted",
        },
        {
            title: "Résolution",
            desc: "Clôture & Notification",
            icon: CheckCircle2,
            color: "text-synapse-green",
            bg: "bg-synapse-green/10",
        },
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container px-4 sm:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4">
                        Le workflow qui <span className="text-primary">filtre</span> le bruit
                    </h2>
                    <p className="text-muted-foreground">
                        Synapse intercepte 100% des demandes, résout les problèmes récurrents automatiquement et ne dérange vos humains que pour les vrais défis.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-4 relative max-w-6xl mx-auto">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-[28px] left-[50px] right-[50px] h-1 bg-border -z-10" />

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center group w-full md:w-1/5">
                            <div className={`${step.bg} p-4 rounded-2xl border border-border group-hover:scale-110 transition-transform duration-300 z-10 shadow-lg`}>
                                <step.icon className={`w-8 h-8 ${step.color}`} />
                            </div>

                            <div className="mt-4 text-center">
                                <h3 className="font-bold">{step.title}</h3>
                                <p className="text-xs text-muted-foreground">{step.desc}</p>
                            </div>

                            {/* Arrow for Mobile */}
                            {index < steps.length - 1 && (
                                <div className="md:hidden text-muted-foreground my-2">↓</div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="glass p-6 rounded-2xl border border-green-500/20 bg-green-500/5">
                        <h4 className="font-bold text-green-500 mb-2 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5" />
                            Résolu par IA
                        </h4>
                        <ul className="text-sm space-y-2 text-muted-foreground">
                            <li>• Réinitialisation mot de passe</li>
                            <li>• Création compte utilisateur standard</li>
                            <li>• Installation imprimante réseau</li>
                            <li>• FAQ Office 365</li>
                        </ul>
                    </div>
                    <div className="glass p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5">
                        <h4 className="font-bold text-blue-500 mb-2 flex items-center gap-2">
                            <UserCog className="w-5 h-5" />
                            Escaladé N2/N3
                        </h4>
                        <ul className="text-sm space-y-2 text-muted-foreground">
                            <li>• Panne serveur critique</li>
                            <li>• Cyberattaque / Phishing</li>
                            <li>• Bug applicatif métier complexe</li>
                            <li>• Déploiement infrastructure</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
