import { CheckCircle2, XCircle, Users, Briefcase, Target } from "lucide-react";

export const RecrutementMatchingVisuel = () => {
    const matchingCriteria = [
        { label: "Compétences techniques", candidat: true, poste: true },
        { label: "Expérience secteur", candidat: true, poste: true },
        { label: "Niveau séniorité", candidat: true, poste: true },
        { label: "Fourchette salariale", candidat: true, poste: true },
        { label: "Localisation / mobilité", candidat: false, poste: true },
        { label: "Disponibilité (3 mois)", candidat: true, poste: false },
    ];

    const matchScore = Math.round((matchingCriteria.filter(c => c.candidat && c.poste).length / matchingCriteria.filter(c => c.poste).length) * 100);

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-muted/20" />

            <div className="container relative z-10 px-4 sm:px-6">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
                        <Target className="w-4 h-4" />
                        <span className="text-sm font-semibold">Matching intelligent candidat-poste</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-foreground">Qualification automatique : </span>
                        <span className="bg-gradient-to-r from-synapse-violet to-synapse-blue bg-clip-text text-transparent">
                            le bon candidat, au bon poste
                        </span>
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        L'<span className="font-semibold text-foreground">agent vocal recrutement</span> qualifie chaque{" "}
                        <span className="font-semibold text-foreground">candidature instantanément</span> : compétences, expérience,
                        prétentions, disponibilité. Le <span className="font-semibold text-foreground">matching consultant IA</span> route
                        vers le bon spécialiste.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                        {/* Left: Candidat */}
                        <div className="glass rounded-3xl p-8 border border-primary/30">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Users className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">Candidat</h3>
                                    <p className="text-sm text-muted-foreground">Développeur Full Stack</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {matchingCriteria.map((criteria, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-center justify-between p-3 rounded-xl ${criteria.candidat ? 'bg-primary/10' : 'bg-muted/50'
                                            }`}
                                    >
                                        <span className="text-sm">{criteria.label}</span>
                                        {criteria.candidat ? (
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                        ) : (
                                            <XCircle className="w-5 h-5 text-muted-foreground" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Center: Matching Score */}
                        <div className="flex items-center justify-center">
                            <div className="relative">
                                {/* Circular progress */}
                                <svg className="w-48 h-48 transform -rotate-90">
                                    <circle
                                        cx="96"
                                        cy="96"
                                        r="88"
                                        stroke="hsl(var(--muted))"
                                        strokeWidth="12"
                                        fill="none"
                                    />
                                    <circle
                                        cx="96"
                                        cy="96"
                                        r="88"
                                        stroke="url(#gradient-circle)"
                                        strokeWidth="12"
                                        fill="none"
                                        strokeDasharray={`${2 * Math.PI * 88}`}
                                        strokeDashoffset={`${2 * Math.PI * 88 * (1 - matchScore / 100)}`}
                                        strokeLinecap="round"
                                        className="transition-all duration-1000"
                                        style={{ transitionDelay: "0.5s" }}
                                    />
                                    <defs>
                                        <linearGradient id="gradient-circle" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="hsl(280 90% 65%)" />
                                            <stop offset="100%" stopColor="hsl(210 100% 60%)" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                {/* Score text */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <div className="text-5xl font-bold bg-gradient-to-r from-synapse-violet to-synapse-blue bg-clip-text text-transparent">
                                        {matchScore}%
                                    </div>
                                    <div className="text-sm text-muted-foreground mt-2">Match</div>
                                    <div className="mt-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                                        Excellent profil
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Poste */}
                        <div className="glass rounded-3xl p-8 border border-accent/30">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                                    <Briefcase className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">Poste</h3>
                                    <p className="text-sm text-muted-foreground">Dev Full Stack - Client SaaS</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {matchingCriteria.map((criteria, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-center justify-between p-3 rounded-xl ${criteria.poste ? 'bg-accent/10' : 'bg-muted/50'
                                            }`}
                                    >
                                        <span className="text-sm">{criteria.label}</span>
                                        {criteria.poste ? (
                                            <CheckCircle2 className="w-5 h-5 text-accent" />
                                        ) : (
                                            <XCircle className="w-5 h-5 text-muted-foreground" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Action Result */}
                    <div className="mt-12 max-w-3xl mx-auto">
                        <div className="glass rounded-2xl p-8 border border-primary/30 shadow-[0_0_20px_hsl(210_100%_60%/0.1)]">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Target className="w-6 h-6 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold mb-2">Action automatique</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Match {matchScore}% détecté → Candidat routé vers <span className="font-semibold text-foreground">Sophie Martin</span>,
                                        consultante <span className="font-semibold text-foreground">spécialisée Tech/SaaS</span>.
                                        RDV téléphonique proposé sous 24h pour présentation détaillée.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                                            Candidat notifié
                                        </div>
                                        <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                                            Consultant alerté
                                        </div>
                                        <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                                            Dossier CRM mis à jour
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SEO Footer */}
                    <div className="mt-12 text-center max-w-3xl mx-auto">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Le <span className="font-semibold text-foreground">matching automatique candidat-poste</span> et le{" "}
                            <span className="font-semibold text-foreground">routing consultant recrutement IA</span> optimisent votre{" "}
                            <span className="font-semibold text-foreground">processus qualification candidature</span>. Chaque{" "}
                            <span className="font-semibold text-foreground">profil talent</span> est orienté vers le bon spécialiste
                            pour maximiser le <span className="font-semibold text-foreground">taux placement cabinet recrutement</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
