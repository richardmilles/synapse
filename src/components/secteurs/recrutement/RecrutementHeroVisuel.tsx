import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, TrendingUp } from "lucide-react";

export const RecrutementHeroVisuel = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-synapse-violet/20 rounded-full blur-[120px] animate-glow-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-synapse-blue/20 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "2s" }} />

            <div className="container relative z-10 px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    {/* Left: Content */}
                    <div className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/20">
                            <Users className="w-4 h-4 text-accent" />
                            <span className="text-sm font-medium">Agent vocal cabinet recrutement</span>
                        </div>

                        {/* H1 */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            <span className="text-foreground">Captez les </span>
                            <span className="bg-gradient-to-r from-synapse-violet via-synapse-blue to-synapse-yellow bg-clip-text text-transparent">
                                candidats actifs
                            </span>{" "}
                            <span className="text-foreground">avant vos concurrents</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg sm:text-xl text-foreground/70 max-w-xl">
                            <span className="text-accent font-semibold">65% des candidats</span> postulent sur{" "}
                            <span className="text-primary font-semibold">3 à 5 offres</span> simultanément. Le{" "}
                            <span className="font-semibold">standard recrutement automatisé</span> rappelle en{" "}
                            <span className="text-secondary font-semibold">{"<"} 30 min</span> et qualifie chaque{" "}
                            <span className="font-semibold">candidature instantanément</span>.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="glass p-4 rounded-xl border border-primary/30">
                                <div className="text-2xl font-bold text-primary mb-1">3-5</div>
                                <div className="text-xs text-muted-foreground">Offres/candidat</div>
                            </div>
                            <div className="glass p-4 rounded-xl border border-accent/30">
                                <div className="text-2xl font-bold text-accent mb-1">65%</div>
                                <div className="text-xs text-muted-foreground">Multi-postulants</div>
                            </div>
                            <div className="glass p-4 rounded-xl border border-secondary/30">
                                <div className="text-2xl font-bold text-secondary mb-1">{"<"}30min</div>
                                <div className="text-xs text-muted-foreground">Rappel IA</div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <a href="https://koalendar.com/e/meet-with-synapse" target="_blank" rel="noopener noreferrer">
                                <Button variant="hero" size="xl" className="group">
                                    Placer plus de candidats
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </a>
                        </div>

                        {/* Trust */}
                        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                <span>Rappel candidat {"<"} 30min</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span>Qualification compétences</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                <span>Routing consultant</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Funnel Visual */}
                    <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                        <div className="relative max-w-lg mx-auto">
                            {/* Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-blue-500/20 rounded-full blur-3xl" />

                            {/* Funnel SVG */}
                            <svg viewBox="0 0 400 500" className="relative z-10 w-full drop-shadow-2xl">
                                {/* Top - Many candidates */}
                                <rect x="50" y="50" width="300" height="80" rx="10" fill="url(#gradient-top)" opacity="0.3" />
                                <text x="200" y="75" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="14" fontWeight="600">
                                    100 candidatures reçues
                                </text>
                                <text x="200" y="100" textAnchor="middle" fill="hsl(var(--primary))" fontSize="28" fontWeight="bold">
                                    100
                                </text>

                                {/* Funnel shape */}
                                <path
                                    d="M 50 130 L 100 250 L 100 350 L 300 350 L 300 250 L 350 130 Z"
                                    fill="url(#gradient-funnel)"
                                    opacity="0.2"
                                    className="animate-pulse"
                                    style={{ animationDuration: "3s" }}
                                />

                                {/* Mid - Qualified */}
                                <rect x="100" y="250" width="200" height="60" rx="8" fill="url(#gradient-mid)" opacity="0.4" />
                                <text x="200" y="270" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="600">
                                    Rappelés et qualifiés
                                </text>
                                <text x="200" y="295" textAnchor="middle" fill="hsl(var(--secondary))" fontSize="24" fontWeight="bold">
                                    75
                                </text>

                                {/* Bottom - Presented */}
                                <rect x="125" y="360" width="150" height="60" rx="8" fill="url(#gradient-bottom)" opacity="0.5" />
                                <text x="200" y="380" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="600">
                                    Présentés client
                                </text>
                                <text x="200" y="405" textAnchor="middle" fill="hsl(var(--accent))" fontSize="22" fontWeight="bold">
                                    45
                                </text>

                                {/* Final - Placed */}
                                <rect x="150" y="435" width="100" height="50" rx="8" fill="url(#gradient-final)" opacity="0.6" />
                                <text x="200" y="450" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="600">
                                    Placés
                                </text>
                                <text x="200" y="472" textAnchor="middle" fill="hsl(var(--primary))" fontSize="20" fontWeight="bold">
                                    18
                                </text>

                                {/* Gradients */}
                                <defs>
                                    <linearGradient id="gradient-top" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="hsl(280 90% 65%)" />
                                        <stop offset="100%" stopColor="hsl(210 100% 60%)" />
                                    </linearGradient>
                                    <linearGradient id="gradient-funnel" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="hsl(280 90% 65%)" />
                                        <stop offset="50%" stopColor="hsl(210 100% 60%)" />
                                        <stop offset="100%" stopColor="hsl(40 95% 60%)" />
                                    </linearGradient>
                                    <linearGradient id="gradient-mid" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="hsl(210 100% 60%)" />
                                        <stop offset="100%" stopColor="hsl(40 95% 60%)" />
                                    </linearGradient>
                                    <linearGradient id="gradient-bottom" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="hsl(40 95% 60%)" />
                                        <stop offset="100%" stopColor="hsl(280 90% 65%)" />
                                    </linearGradient>
                                    <linearGradient id="gradient-final" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="hsl(280 90% 65%)" />
                                        <stop offset="100%" stopColor="hsl(210 100% 60%)" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Floating stats */}
                            <div className="absolute top-12 -left-8 glass px-4 py-3 rounded-xl border border-accent/30 shadow-lg animate-float">
                                <div className="flex items-center gap-2">
                                    <Target className="w-4 h-4 text-accent" />
                                    <div>
                                        <div className="text-xs text-muted-foreground">Taux qualif.</div>
                                        <div className="text-sm font-bold text-accent">75%</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-12 -right-8 glass px-4 py-3 rounded-xl border border-primary/30 shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-primary" />
                                    <div>
                                        <div className="text-xs text-muted-foreground">Taux placement</div>
                                        <div className="text-sm font-bold text-primary">18%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
};
