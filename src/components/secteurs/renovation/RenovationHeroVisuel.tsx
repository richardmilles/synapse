import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Hammer, Clock, Phone } from "lucide-react";

export const RenovationHeroVisuel = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-synapse-blue/20 rounded-full blur-[120px] animate-glow-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-synapse-yellow/20 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "2s" }} />

            <div className="container relative z-10 px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    {/* Left: Content */}
                    <div className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20">
                            <Hammer className="w-4 h-4 text-accent" />
                            <span className="text-sm font-medium">Agent vocal pour entreprise de rénovation</span>
                        </div>

                        {/* H1 */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            <span className="text-foreground">Rappel </span>
                            <span className="bg-gradient-to-r from-synapse-blue via-synapse-yellow to-synapse-violet bg-clip-text text-transparent">
                                &lt; 1 heure
                            </span>{" "}
                            <span className="text-foreground">= 60% de RDV signés</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg sm:text-xl text-foreground/70 max-w-xl">
                            <span className="text-accent font-semibold">38% des prospects</span> abandonnent si pas de rappel sous{" "}
                            <span className="text-primary font-semibold">2 heures</span>. Notre{" "}
                            <span className="font-semibold">agent vocal rénovation</span> rappelle en{" "}
                            <span className="text-secondary font-semibold">15 minutes</span> et qualifie les{" "}
                            <span className="font-semibold">projets haute valeur</span> automatiquement.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="glass p-4 rounded-xl border border-primary/30">
                                <div className="text-2xl font-bold text-primary mb-1">60%</div>
                                <div className="text-xs text-muted-foreground">RDV si rappel {"<"} 1h</div>
                            </div>
                            <div className="glass p-4 rounded-xl border border-destructive/30">
                                <div className="text-2xl font-bold text-destructive mb-1">38%</div>
                                <div className="text-xs text-muted-foreground">Abandon si {">"} 2h</div>
                            </div>
                            <div className="glass p-4 rounded-xl border border-accent/30">
                                <div className="text-2xl font-bold text-accent mb-1">45k€</div>
                                <div className="text-xs text-muted-foreground">Projet moyen</div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <a href="https://koalendar.com/e/meet-with-synapse" target="_blank" rel="noopener noreferrer">
                                <Button variant="hero" size="xl" className="group">
                                    Convertir mes demandes devis
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </a>
                        </div>

                        {/* Trust */}
                        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                <span>Rappel formulaire {"<"} 15min</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span>Qualification projet</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                <span>RDV chantier auto</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Before/After House Visual */}
                    <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                        <div className="relative aspect-square max-w-lg mx-auto">
                            {/* Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />

                            {/* Split house visualization */}
                            <div className="relative z-10 grid grid-cols-2 gap-4">
                                {/* AVANT */}
                                <div className="glass rounded-2xl p-6 border border-destructive/30">
                                    <div className="text-center mb-4">
                                        <div className="text-sm font-semibold text-destructive mb-2">AVANT</div>
                                        <div className="text-xs text-muted-foreground">Sans agent vocal</div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="relative">
                                            <svg viewBox="0 0 200 200" className="w-full drop-shadow-lg">
                                                {/* Old house */}
                                                <rect x="40" y="80" width="120" height="100" fill="hsl(0 0% 40%)" opacity="0.6" />
                                                <path d="M 30 80 L 100 30 L 170 80 Z" fill="hsl(0 0% 30%)" opacity="0.6" />
                                                {/* Windows cracked */}
                                                <rect x="55" y="100" width="30" height="30" fill="hsl(0 84% 60%)" opacity="0.3" />
                                                <line x1="55" y1="100" x2="85" y2="130" stroke="hsl(0 84% 60%)" strokeWidth="2" />
                                                <rect x="115" y="100" width="30" height="30" fill="hsl(0 84% 60%)" opacity="0.3" />
                                                <line x1="115" y1="100" x2="145" y2="130" stroke="hsl(0 84% 60%)" strokeWidth="2" />
                                                {/* Door */}
                                                <rect x="80" y="140" width="40" height="40" fill="hsl(0 0% 20%)" opacity="0.6" />
                                            </svg>
                                        </div>

                                        <div className="space-y-2 text-xs">
                                            <div className="flex items-center gap-2 text-destructive">
                                                <div className="w-1 h-1 rounded-full bg-destructive" />
                                                <span>Rappel après 4h</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-destructive">
                                                <div className="w-1 h-1 rounded-full bg-destructive" />
                                                <span>Prospect déjà engagé</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-destructive">
                                                <div className="w-1 h-1 rounded-full bg-destructive" />
                                                <span>38% abandon</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* APRES */}
                                <div className="glass rounded-2xl p-6 border border-primary/30 shadow-[0_0_20px_hsl(280_90%_65%/0.1)]">
                                    <div className="text-center mb-4">
                                        <div className="text-sm font-semibold text-primary mb-2">APRÈS</div>
                                        <div className="text-xs text-muted-foreground">Avec Synapse IA</div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="relative">
                                            <svg viewBox="0 0 200 200" className="w-full drop-shadow-lg">
                                                {/* New house */}
                                                <rect x="40" y="80" width="120" height="100" fill="url(#gradient-house)" />
                                                <path d="M 30 80 L 100 30 L 170 80 Z" fill="url(#gradient-roof)" />
                                                {/* Windows nice */}
                                                <rect x="55" y="100" width="30" height="30" fill="hsl(210 100% 60%)" opacity="0.4" />
                                                <rect x="115" y="100" width="30" height="30" fill="hsl(210 100% 60%)" opacity="0.4" />
                                                {/* Door nice */}
                                                <rect x="80" y="140" width="40" height="40" fill="hsl(280 90% 65%)" opacity="0.6" />
                                                {/* Shine effect */}
                                                <circle cx="160" cy="50" r="20" fill="hsl(40 95% 60%)" opacity="0.3" className="animate-pulse" />

                                                <defs>
                                                    <linearGradient id="gradient-house" x1="0%" y1="0%" x2="0%" y2="100%">
                                                        <stop offset="0%" stopColor="hsl(280 90% 65%)" stopOpacity="0.4" />
                                                        <stop offset="100%" stopColor="hsl(210 100% 60%)" stopOpacity="0.4" />
                                                    </linearGradient>
                                                    <linearGradient id="gradient-roof" x1="0%" y1="0%" x2="0%" y2="100%">
                                                        <stop offset="0%" stopColor="hsl(280 90% 65%)" stopOpacity="0.6" />
                                                        <stop offset="100%" stopColor="hsl(210 100% 60%)" stopOpacity="0.6" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>

                                        <div className="space-y-2 text-xs">
                                            <div className="flex items-center gap-2 text-primary">
                                                <div className="w-1 h-1 rounded-full bg-primary" />
                                                <span>Rappel {"<"} 15 min</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-primary">
                                                <div className="w-1 h-1 rounded-full bg-primary" />
                                                <span>RDV chantier posé</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-primary">
                                                <div className="w-1 h-1 rounded-full bg-primary" />
                                                <span>60% conversion</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating stats */}
                            <div className="absolute -top-4 -right-4 glass px-4 py-3 rounded-xl border border-primary/30 shadow-lg animate-float">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-primary" />
                                    <div>
                                        <div className="text-xs text-muted-foreground">Rappel moyen</div>
                                        <div className="text-sm font-bold text-primary">15 min</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-4 -left-4 glass px-4 py-3 rounded-xl border border-accent/30 shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-accent" />
                                    <div>
                                        <div className="text-xs text-muted-foreground">Valeur projet</div>
                                        <div className="text-sm font-bold text-accent">45 000€</div>
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
