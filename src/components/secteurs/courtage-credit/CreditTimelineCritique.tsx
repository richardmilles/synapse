import { TrendingDown, Clock, AlertTriangle } from "lucide-react";

export const CreditTimelineCritique = () => {
    const timePoints = [
        { time: "0 min", conversion: 70, label: "Formulaire envoyé", color: "primary", status: "optimal" },
        { time: "10 min", conversion: 65, label: "Fenêtre critique se ferme", color: "primary", status: "good" },
        { time: "30 min", conversion: 50, label: "Motivation décline", color: "secondary", status: "warning" },
        { time: "1h", conversion: 38, label: "Prospect distrait", color: "accent", status: "warning" },
        { time: "2h", conversion: 28, label: "A déjà contacté 2-3 courtiers", color: "destructive", status: "critical" },
        { time: "4h", conversion: 18, label: "Trop tard - Dossier perdu", color: "destructive", status: "critical" },
    ];

    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-muted/20 to-transparent">
            <div className="container relative z-10 px-4 sm:px-6">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive border border-destructive/20 mb-6">
                        <TrendingDown className="w-4 h-4" />
                        <span className="text-sm font-semibold">Dégradation du taux de conversion courtier crédit</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-foreground">Chaque minute compte : la </span>
                        <span className="bg-gradient-to-r from-synapse-yellow to-synapse-violet bg-clip-text text-transparent">
                            dégradation fatale
                        </span>
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Le <span className="font-semibold text-foreground">taux de conversion lead crédit immobilier</span> s'effondre
                        exponentiellement après le formulaire. En <span className="font-semibold text-destructive">4 heures</span>,
                        vous perdez <span className="font-semibold text-destructive">75% de vos chances</span> de signer le dossier.
                    </p>
                </div>

                {/* Timeline Graph */}
                <div className="max-w-5xl mx-auto">
                    <div className="glass rounded-3xl p-8 md:p-12 border border-border/50">
                        {/* Graph */}
                        <div className="relative">
                            {/* Y-axis labels */}
                            <div className="absolute -left-12 top-0 bottom-16 flex flex-col justify-between text-sm font-semibold text-muted-foreground">
                                <span>70%</span>
                                <span>50%</span>
                                <span>30%</span>
                                <span>10%</span>
                            </div>

                            {/* Grid lines */}
                            <div className="absolute left-0 right-0 top-0 bottom-16 flex flex-col justify-between">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="h-px bg-border/30" />
                                ))}
                            </div>

                            {/* Line chart */}
                            <div className="relative h-80 mb-16">
                                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 320" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="hsl(280 90% 65%)" />
                                            <stop offset="30%" stopColor="hsl(210 100% 60%)" />
                                            <stop offset="60%" stopColor="hsl(40 95% 60%)" />
                                            <stop offset="100%" stopColor="hsl(0 84% 60%)" />
                                        </linearGradient>
                                        <linearGradient id="gradient-fill" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="hsl(280 90% 65%)" stopOpacity="0.2" />
                                            <stop offset="100%" stopColor="hsl(0 84% 60%)" stopOpacity="0.1" />
                                        </linearGradient>
                                    </defs>

                                    {/* Area fill */}
                                    <path
                                        d="M 0 96 L 167 102 L 333 160 L 500 198 L 667 230 L 833 262 L 1000 320 L 1000 320 L 0 320 Z"
                                        fill="url(#gradient-fill)"
                                        className="opacity-0 animate-fade-in"
                                        style={{ animationDelay: "0.3s" }}
                                    />

                                    {/* Line */}
                                    <path
                                        d="M 0 96 L 167 102 L 333 160 L 500 198 L 667 230 L 833 262 L 1000 262"
                                        fill="none"
                                        stroke="url(#gradient-line)"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        className="opacity-0 animate-fade-in"
                                        style={{ animationDelay: "0.5s" }}
                                    />
                                </svg>

                                {/* Data points */}
                                {timePoints.map((point, index) => {
                                    const xPercent = (index / (timePoints.length - 1)) * 100;
                                    const yPercent = 100 - (point.conversion / 70) * 100;

                                    return (
                                        <div
                                            key={index}
                                            className="absolute opacity-0 animate-fade-in"
                                            style={{
                                                left: `${xPercent}%`,
                                                top: `${yPercent}%`,
                                                transform: 'translate(-50%, -50%)',
                                                animationDelay: `${0.7 + index * 0.1}s`,
                                            }}
                                        >
                                            <div className={`relative group cursor-pointer`}>
                                                {/* Dot */}
                                                <div className={`w-4 h-4 rounded-full border-4 border-background ${point.status === 'optimal' ? 'bg-primary' :
                                                        point.status === 'good' ? 'bg-primary' :
                                                            point.status === 'warning' ? 'bg-accent' :
                                                                'bg-destructive'
                                                    } animate-pulse`} style={{ animationDuration: '2s' }} />

                                                {/* Tooltip */}
                                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                                    <div className={`glass px-4 py-3 rounded-xl border whitespace-nowrap shadow-xl ${point.status === 'critical' ? 'border-destructive/30' : 'border-border/50'
                                                        }`}>
                                                        <div className="text-xs text-muted-foreground mb-1">{point.time}</div>
                                                        <div className={`text-2xl font-bold mb-1 ${point.status === 'optimal' ? 'text-primary' :
                                                                point.status === 'good' ? 'text-primary' :
                                                                    point.status === 'warning' ? 'text-accent' :
                                                                        'text-destructive'
                                                            }`}>
                                                            {point.conversion}%
                                                        </div>
                                                        <div className="text-xs">{point.label}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* X-axis labels */}
                            <div className="flex justify-between text-sm font-medium text-foreground">
                                {timePoints.map((point, index) => (
                                    <div key={index} className="text-center">
                                        <div>{point.time}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Warning box */}
                        <div className="mt-8 p-6 rounded-xl bg-destructive/10 border border-destructive/20">
                            <div className="flex items-start gap-4">
                                <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-lg font-bold text-destructive mb-2">La fenêtre de 10 minutes</h3>
                                    <p className="text-sm text-foreground">
                                        Un <span className="font-semibold">prospect prêt immobilier</span> remplit généralement{" "}
                                        <span className="font-semibold">2 à 3 formulaires</span> en parallèle. Le{" "}
                                        <span className="font-semibold text-destructive">premier courtier qui appelle</span> dans les{" "}
                                        <span className="font-semibold text-destructive">10 minutes</span> suivant la soumission capte{" "}
                                        <span className="font-semibold text-destructive">70% des dossiers</span>. Après 4 heures,
                                        le prospect a déjà échangé avec vos concurrents et sa décision est prise.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SEO Footer */}
                    <div className="mt-12 text-center max-w-3xl mx-auto">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            L'<span className="font-semibold text-foreground">agent vocal courtier crédit</span> rappelle automatiquement
                            en <span className="font-semibold text-foreground">moins de 2 minutes</span> après soumission formulaire.
                            La <span className="font-semibold text-foreground">simulation capacité emprunt immédiate</span> et la{" "}
                            <span className="font-semibold text-foreground">qualification projet immobilier</span> maximisent votre{" "}
                            <span className="font-semibold text-foreground">taux conversion lead crédit</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
