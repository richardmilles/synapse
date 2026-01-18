import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Gavel, Phone, Clock } from "lucide-react";

export const AvocatsHeroVisuel = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background glow effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-synapse-violet/20 rounded-full blur-[120px] animate-glow-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-synapse-blue/20 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "2s" }} />

            <div className="container relative z-10 px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    {/* Left: Content */}
                    <div className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        {/* Badge SEO */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20">
                            <Gavel className="w-4 h-4 text-accent" />
                            <span className="text-sm font-medium">Agent vocal intelligent pour cabinet d'avocat</span>
                        </div>

                        {/* H1 avec mots-clés */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            <span className="text-foreground">Ne perdez plus</span>{" "}
                            <span className="bg-gradient-to-r from-synapse-violet via-synapse-blue to-synapse-yellow bg-clip-text text-transparent">
                                aucun mandat
                            </span>{" "}
                            <span className="text-foreground">par manque de réactivité</span>
                        </h1>

                        {/* Subheadline avec SEO */}
                        <p className="text-lg sm:text-xl text-foreground/70 max-w-xl">
                            <span className="text-accent font-semibold">78% des clients</span> choisissent le{" "}
                            <span className="text-primary font-semibold">premier cabinet qui répond</span>.
                            Notre <span className="font-semibold">standard téléphonique IA</span> qualifie vos prospects{" "}
                            <span className="text-secondary font-semibold">24/7</span> et vous transfère uniquement les{" "}
                            <span className="font-semibold">dossiers pertinents</span>.
                        </p>

                        {/* Stats rapides avec keywords */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="glass p-4 rounded-xl border border-border/50">
                                <div className="text-2xl font-bold text-accent mb-1">67%</div>
                                <div className="text-xs text-muted-foreground">Appels hors horaires bureau</div>
                            </div>
                            <div className="glass p-4 rounded-xl border border-primary/30">
                                <div className="text-2xl font-bold text-primary mb-1">78%</div>
                                <div className="text-xs text-muted-foreground">Conversion premier répondant</div>
                            </div>
                            <div className="glass p-4 rounded-xl border border-border/50">
                                <div className="text-2xl font-bold text-secondary mb-1">3-5</div>
                                <div className="text-xs text-muted-foreground">Cabinets contactés</div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <a href="https://koalendar.com/e/meet-with-synapse" target="_blank" rel="noopener noreferrer">
                                <Button variant="hero" size="xl" className="group">
                                    Voir comment capter chaque mandat
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </a>
                        </div>

                        {/* Trust indicators avec keywords */}
                        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                <span>Conforme déontologie avocat</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span>Qualification juridique automatique</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                <span>RGPD France</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Animated Justice Scale Visual */}
                    <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                        <div className="relative aspect-square max-w-lg mx-auto">
                            {/* Background glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />

                            {/* Justice scale SVG */}
                            <svg viewBox="0 0 400 400" className="relative z-10 drop-shadow-2xl">
                                {/* Central pillar */}
                                <rect x="195" y="100" width="10" height="250" fill="url(#gradient1)" className="animate-pulse" style={{ animationDuration: "3s" }} />

                                {/* Base */}
                                <ellipse cx="200" cy="350" rx="80" ry="15" fill="url(#gradient1)" opacity="0.8" />

                                {/* Balance beam */}
                                <g className="origin-center" style={{ transformBox: "fill-box", animation: "tilt 4s ease-in-out infinite" }}>
                                    <rect x="100" y="145" width="200" height="8" rx="4" fill="url(#gradient2)" />

                                    {/* Left plate - "Sans IA" (down) */}
                                    <g transform="translate(120, 155)">
                                        <line x1="0" y1="0" x2="0" y2="60" stroke="url(#gradient2)" strokeWidth="2" />
                                        <circle cx="0" cy="70" r="45" fill="url(#gradient-destructive)" opacity="0.2" stroke="hsl(0 84% 60%)" strokeWidth="2" />
                                        <text x="0" y="70" textAnchor="middle" dominantBaseline="middle" fill="hsl(0 84% 60%)" fontSize="14" fontWeight="bold">
                                            Sans IA
                                        </text>
                                        <text x="0" y="88" textAnchor="middle" dominantBaseline="middle" fill="hsl(0 84% 60%)" fontSize="11">
                                            Appels perdus
                                        </text>
                                    </g>

                                    {/* Right plate - "Avec Synapse" (up) */}
                                    <g transform="translate(280, 155)">
                                        <line x1="0" y1="0" x2="0" y2="40" stroke="url(#gradient2)" strokeWidth="2" />
                                        <circle cx="0" cy="50" r="45" fill="url(#gradient-primary)" opacity="0.2" stroke="hsl(280 90% 65%)" strokeWidth="2" />
                                        <text x="0" y="50" textAnchor="middle" dominantBaseline="middle" fill="hsl(280 90% 65%)" fontSize="14" fontWeight="bold">
                                            Avec IA
                                        </text>
                                        <text x="0" y="68" textAnchor="middle" dominantBaseline="middle" fill="hsl(280 90% 65%)" fontSize="11">
                                            100% captés
                                        </text>
                                    </g>
                                </g>

                                {/* Gradients */}
                                <defs>
                                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="hsl(280 90% 65%)" />
                                        <stop offset="100%" stopColor="hsl(210 100% 60%)" />
                                    </linearGradient>
                                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="hsl(280 90% 65%)" />
                                        <stop offset="50%" stopColor="hsl(210 100% 60%)" />
                                        <stop offset="100%" stopColor="hsl(40 95% 60%)" />
                                    </linearGradient>
                                    <linearGradient id="gradient-primary" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="hsl(280 90% 65%)" stopOpacity="0.5" />
                                        <stop offset="100%" stopColor="hsl(280 90% 65%)" stopOpacity="0.1" />
                                    </linearGradient>
                                    <linearGradient id="gradient-destructive" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="hsl(0 84% 60%)" stopOpacity="0.5" />
                                        <stop offset="100%" stopColor="hsl(0 84% 60%)" stopOpacity="0.1" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Floating stats around the scale */}
                            <div className="absolute top-20 -right-4 glass px-3 py-2 rounded-lg border border-accent/30 animate-float">
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-accent" />
                                    <span className="text-xs font-semibold">24/7 Disponible</span>
                                </div>
                            </div>

                            <div className="absolute bottom-32 -left-4 glass px-3 py-2 rounded-lg border border-primary/30 animate-float" style={{ animationDelay: "1s" }}>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-primary" />
                                    <span className="text-xs font-semibold">Réponse {"<"} 3 sec</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

            <style>{`
        @keyframes tilt {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
      `}</style>
        </section>
    );
};
