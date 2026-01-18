import { Shield, Clock, CheckCircle2, AlertTriangle, Phone } from "lucide-react";

export const SecuriteTimelineIntervention = () => {
    const timeline = [
        { time: "0 sec", event: "Déclenchement alarme", action: "Signal reçu PC télésurveillance", status: "alert" },
        { time: "30 sec", event: "Levée de doute", action: "IA appelle client automatiquement", status: "process" },
        { time: "2 min", event: "Confirmation intrusion", action: "Client ne répond pas = intrusion probable", status: "critical" },
        { time: "3 min", event: "Dispatch agent", action: "Agent d'intervention le plus proche alerté", status: "action" },
        { time: "< 15 min", event: "Arrivée sur site", action: "Intervention sécurisation locaux", status: "resolved" },
    ];

    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-muted/20 via-transparent to-muted/20">
            <div className="container relative z-10 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
                        <Shield className="w-4 h-4" />
                        <span className="text-sm font-semibold">Timeline intervention sécurité alarme</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-foreground">De l'alerte à l'</span>
                        <span className="bg-gradient-to-r from-synapse-violet to-synapse-blue bg-clip-text text-transparent">
                            intervention : 15 minutes
                        </span>
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        L'<span className="font-semibold text-foreground">agent vocal télésurveillance</span> gère la{" "}
                        <span className="font-semibold text-foreground">levée doute alarme automatique</span> et dispatche l'
                        <span className="font-semibold text-foreground">agent intervention sécurité</span> en moins de{" "}
                        <span className="font-semibold text-primary">5 minutes</span> chrono.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-destructive via-accent to-primary" />

                        {/* Events */}
                        <div className="space-y-8">
                            {timeline.map((item, index) => {
                                const getColor = () => {
                                    switch (item.status) {
                                        case 'alert': return 'destructive';
                                        case 'process': return 'accent';
                                        case 'critical': return 'destructive';
                                        case 'action': return 'primary';
                                        case 'resolved': return 'primary';
                                        default: return 'muted';
                                    }
                                };

                                const color = getColor();

                                return (
                                    <div
                                        key={index}
                                        className="relative flex items-start gap-8 opacity-0 animate-fade-in"
                                        style={{ animationDelay: `${index * 0.2}s` }}
                                    >
                                        {/* Time badge */}
                                        <div className={`relative z-10 w-24 h-12 shrink-0 rounded-xl bg-${color}/10 border border-${color}/30 flex items-center justify-center`}>
                                            <span className={`text-sm font-bold text-${color}`}>{item.time}</span>
                                        </div>

                                        {/* Dot */}
                                        <div className="absolute left-12 -translate-x-1/2">
                                            <div className={`w-8 h-8 rounded-full bg-${color} border-4 border-background shadow-lg flex items-center justify-center`}>
                                                {item.status === 'alert' && <AlertTriangle className="w-4 h-4 text-background" />}
                                                {item.status === 'process' && <Phone className="w-4 h-4 text-background" />}
                                                {item.status === 'critical' && <AlertTriangle className="w-4 h-4 text-background" />}
                                                {item.status === 'action' && <Clock className="w-4 h-4 text-background" />}
                                                {item.status === 'resolved' && <CheckCircle2 className="w-4 h-4 text-background" />}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 glass rounded-xl p-6 border border-border/50">
                                            <h3 className="text-lg font-bold mb-2">{item.event}</h3>
                                            <p className="text-sm text-muted-foreground">{item.action}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Comparison */}
                    <div className="mt-16 grid md:grid-cols-2 gap-6">
                        <div className="glass rounded-2xl p-6 border border-destructive/20">
                            <h3 className="text-lg font-bold mb-4 text-destructive">Processus manuel</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Levée de doute</span>
                                    <span className="font-semibold text-destructive">5-10 min</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Dispatch agent</span>
                                    <span className="font-semibold text-destructive">10-15 min</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Total avant intervention</span>
                                    <span className="font-semibold text-destructive">15-25 min</span>
                                </div>
                            </div>
                        </div>

                        <div className="glass rounded-2xl p-6 border border-primary/30 shadow-[0_0_20px_hsl(210_100%_60%/0.1)]">
                            <h3 className="text-lg font-bold mb-4 text-primary">Processus automatisé</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Levée de doute</span>
                                    <span className="font-semibold text-primary">30 sec</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Dispatch agent</span>
                                    <span className="font-semibold text-primary">3 min</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Total avant intervention</span>
                                    <span className="font-semibold text-primary">&lt; 5 min</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SEO Footer */}
                    <div className="mt-12 text-center max-w-3xl mx-auto">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            La <span className="font-semibold text-foreground">gestion alarme télésurveillance automatisée</span> accélère la{" "}
                            <span className="font-semibold text-foreground">procédure levée doute intrusion</span>. L'
                            <span className="font-semibold text-foreground">agent vocal PC sécurité</span> optimise le{" "}
                            <span className="font-semibold text-foreground">temps réponse intervention alarme</span> et améliore la{" "}
                            <span className="font-semibold text-foreground">qualité service télésurveillance</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
