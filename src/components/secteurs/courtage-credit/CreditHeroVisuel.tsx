import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, TrendingDown } from "lucide-react";

export const CreditHeroVisuel = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-synapse-yellow/20 rounded-full blur-[120px] animate-glow-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-synapse-violet/20 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "2s" }} />

            <div className="container relative z-10 px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    {/* Left: Content */}
                    <div className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/20">
                            <Clock className="w-4 h-4 text-accent" />
                            <span className="text-sm font-medium">Agent vocal courtier en crédit immobilier</span>
                        </div>

                        {/* H1 */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            <span className="text-foreground">Les </span>
                            <span className="bg-gradient-to-r from-synapse-yellow via-synapse-violet to-synapse-blue bg-clip-text text-transparent">
                                10 minutes critiques
                            </span>{" "}
                            <span className="text-foreground">qui font tout</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg sm:text-xl text-foreground/70 max-w-xl">
                            <span className="text-accent font-semibold">70% de conversion</span> si vous rappelez{" "}
                            <span className="text-primary font-semibold">dans les 10 minutes</span> post-formulaire. Notre{" "}
                            <span className="font-semibold">agent vocal courtier crédit</span> appelle en{" "}
                            <span className="text-secondary font-semibold">2 minutes</span> et réalise la{" "}
                            <span className="font-semibold">simulation capacité emprunt</span> instantanément.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="glass p-5 rounded-xl border border-primary/30">
                                <div className="text-3xl font-bold text-primary mb-1">70%</div>
                                <div className="text-sm text-muted-foreground">Conversion si {"<"} 10 min</div>
                            </div>
                            <div className="glass p-5 rounded-xl border border-destructive/30">
                                <div className="text-3xl font-bold text-destructive mb-1">18%</div>
                                <div className="text-sm text-muted-foreground">Conversion si {">"} 4h</div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <a href="https://koalendar.com/e/meet-with-synapse" target="_blank" rel="noopener noreferrer">
                                <Button variant="hero" size="xl" className="group">
                                    Convertir 70% de mes leads
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </a>
                        </div>

                        {/* Trust */}
                        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                <span>Rappel formulaire {"<"} 2 min</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span>Simulation capacité emprunt</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                <span>Dossier moyen 250k€</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Countdown Clock Visual */}
                    <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                        <div className="relative aspect-square max-w-lg mx-auto">
                            {/* Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl" />

                            {/* Main Clock */}
                            <svg viewBox="0 0 400 400" className="relative z-10 drop-shadow-2xl">
                                {/* Clock face */}
                                <circle cx="200" cy="200" r="150" fill="url(#gradient-bg)" opacity="0.1" />
                                <circle cx="200" cy="200" r="150" fill="none" stroke="url(#gradient-border)" strokeWidth="4" />

                                {/* Time markers */}
                                {[...Array(12)].map((_, i) => {
                                    const angle = (i * 30 - 90) * (Math.PI / 180);
                                    const x1 = 200 + Math.cos(angle) * 135;
                                    const y1 = 200 + Math.sin(angle) * 135;
                                    const x2 = 200 + Math.cos(angle) * 145;
                                    const y2 = 200 + Math.sin(angle) * 145;

                                    return (
                                        <line
                                            key={i}
                                            x1={x1}
                                            y1={y1}
                                            x2={x2}
                                            y2={y2}
                                            stroke="hsl(var(--foreground))"
                                            strokeWidth="3"
                                            opacity="0.3"
                                        />
                                    );
                                })}

                                {/* Declining conversion arc */}
                                <path
                                    d="M 200 50 A 150 150 0 0 1 350 200"
                                    fill="none"
                                    stroke="hsl(40 95% 60%)"
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                    className="animate-pulse"
                                    style={{ animationDuration: "2s" }}
                                />
                                <path
                                    d="M 350 200 A 150 150 0 0 1 200 350"
                                    fill="none"
                                    stroke="hsl(0 84% 60%)"
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                    opacity="0.6"
                                />

                                {/* Center circle */}
                                <circle cx="200" cy="200" r="10" fill="url(#gradient-center)" />

                                {/* Minute hand (pointing to critical time) */}
                                <line
                                    x1="200"
                                    y1="200"
                                    x2="200"
                                    y2="80"
                                    stroke="url(#gradient-hand)"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                    className="origin-center"
                                    style={{ transformBox: "fill-box" }}
                                />

                                {/* Hour hand */}
                                <line
                                    x1="200"
                                    y1="200"
                                    x2="260"
                                    y2="200"
                                    stroke="url(#gradient-hand)"
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                />

                                {/* Center text */}
                                <text x="200" y="190" textAnchor="middle" fill="hsl(40 95% 60%)" fontSize="32" fontWeight="bold">
                                    10 min
                                </text>
                                <text x="200" y="220" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="14">
                                    fenêtre critique
                                </text>

                                {/* Gradients */}
                                <defs>
                                    <linearGradient id="gradient-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="hsl(40 95% 60%)" />
                                        <stop offset="100%" stopColor="hsl(280 90% 65%)" />
                                    </linearGradient>
                                    <linearGradient id="gradient-border" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="hsl(40 95% 60%)" />
                                        <stop offset="50%" stopColor="hsl(280 90% 65%)" />
                                        <stop offset="100%" stopColor="hsl(210 100% 60%)" />
                                    </linearGradient>
                                    <linearGradient id="gradient-hand" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="hsl(40 95% 60%)" />
                                        <stop offset="100%" stopColor="hsl(280 90% 65%)" />
                                    </linearGradient>
                                    <radialGradient id="gradient-center">
                                        <stop offset="0%" stopColor="hsl(40 95% 60%)" />
                                        <stop offset="100%" stopColor="hsl(280 90% 65%)" />
                                    </radialGradient>
                                </defs>
                            </svg>

                            {/* Floating conversion stats */}
                            <div className="absolute top-12 -right-8 glass px-4 py-3 rounded-xl border border-primary/30 shadow-lg animate-float">
                                <div className="flex items-center gap-2">
                                    <TrendingDown className="w-5 h-5 text-primary rotate-180" />
                                    <div>
                                        <div className="text-xs text-muted-foreground">{"<"} 10 min</div>
                                        <div className="text-lg font-bold text-primary">70%</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-12 -left-8 glass px-4 py-3 rounded-xl border border-destructive/30 shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                                <div className="flex items-center gap-2">
                                    <TrendingDown className="w-5 h-5 text-destructive" />
                                    <div>
                                        <div className="text-xs text-muted-foreground">{">"} 4 heures</div>
                                        <div className="text-lg font-bold text-destructive">18%</div>
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
