import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, AlertTriangle, Lock, Eye } from "lucide-react";
import { useEffect } from "react";

export const SecuriteHeroVisuel = () => {
    useEffect(() => {
        const style = document.createElement('style');
        style.id = 'securite-hero-animations';
        style.textContent = `
            @keyframes shieldPulse {
                0%, 100% { 
                    transform: scale(1);
                    filter: drop-shadow(0 0 10px hsla(280, 90%, 65%, 0.3));
                }
                50% { 
                    transform: scale(1.05);
                    filter: drop-shadow(0 0 30px hsla(280, 90%, 65%, 0.6));
                }
            }
            
            @keyframes radarSweep {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            
            @keyframes alertBlink {
                0%, 49% { opacity: 0.2; }
                50%, 100% { opacity: 1; }
            }
            
            @keyframes lockSecure {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-5px); }
            }
        `;

        if (!document.getElementById('securite-hero-animations')) {
            document.head.appendChild(style);
        }

        return () => {
            const existingStyle = document.getElementById('securite-hero-animations');
            if (existingStyle) existingStyle.remove();
        };
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-synapse-violet/20 rounded-full blur-[120px] animate-glow-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-synapse-blue/20 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "2s" }} />

            <div className="container relative z-10 px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    <div className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20">
                            <Shield className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium">Agent vocal entreprise sécurité 24/7</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            <span className="text-foreground">Protection </span>
                            <span className="bg-gradient-to-r from-synapse-violet to-synapse-blue bg-clip-text text-transparent">
                                24/7 garantie
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-foreground/70 max-w-xl">
                            <span className="text-destructive font-semibold">Alarme déclenchée à 2h du matin</span> ?{" "}
                            <span className="text-primary font-semibold">Levée de doute en 30 secondes</span>.
                            Notre <span className="font-semibold">PC télésurveillance automatisé</span> appelle le client,
                            vérifie l'<span className="font-semibold">intrusion réelle</span> et dispatche l'{" "}
                            <span className="text-secondary font-semibold">agent intervention</span> le plus proche en{" "}
                            <span className="font-semibold">moins de 5 minutes</span>.
                        </p>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="glass p-4 rounded-xl border border-primary/30">
                                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                                <div className="text-xs text-muted-foreground">Télésurveillance</div>
                            </div>
                            <div className="glass p-4 rounded-xl border border-destructive/30">
                                <div className="text-2xl font-bold text-destructive mb-1">&lt; 5min</div>
                                <div className="text-xs text-muted-foreground">Intervention</div>
                            </div>
                            <div className="glass p-4 rounded-xl border border-accent/30">
                                <div className="text-2xl font-bold text-accent mb-1">100%</div>
                                <div className="text-xs text-muted-foreground">Alertes traitées</div>
                            </div>
                        </div>

                        <a href="https://koalendar.com/e/meet-with-synapse" target="_blank" rel="noopener noreferrer">
                            <Button variant="hero" size="xl" className="group">
                                Sécuriser toutes les alertes
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </a>

                        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span>Levée doute automatique</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-destructive" />
                                <span>Dispatch agent terrain</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                <span>Suivi conformité sites</span>
                            </div>
                        </div>
                    </div>

                    {/* Shield with radar animation */}
                    <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                        <div className="relative max-w-lg mx-auto">
                            <svg viewBox="0 0 400 400" className="w-full drop-shadow-2xl">
                                {/* Radar circles background */}
                                <circle cx="200" cy="200" r="150" fill="none" stroke="url(#gradient-radar)" strokeWidth="1" opacity="0.2" />
                                <circle cx="200" cy="200" r="120" fill="none" stroke="url(#gradient-radar)" strokeWidth="1" opacity="0.3" />
                                <circle cx="200" cy="200" r="90" fill="none" stroke="url(#gradient-radar)" strokeWidth="1" opacity="0.4" />

                                {/* Radar sweep line */}
                                <g style={{ transformOrigin: "200px 200px", animation: "radarSweep 4s linear infinite" }}>
                                    <line
                                        x1="200"
                                        y1="200"
                                        x2="200"
                                        y2="50"
                                        stroke="url(#gradient-sweep)"
                                        strokeWidth="2"
                                        opacity="0.6"
                                    />
                                    <circle cx="200" cy="50" r="4" fill="hsl(var(--primary))" opacity="0.8" />
                                </g>

                                {/* Main shield - pulsing */}
                                <g style={{ animation: "shieldPulse 2s ease-in-out infinite" }}>
                                    <path
                                        d="M200 80 L280 120 L280 200 Q280 260 200 300 Q120 260 120 200 L120 120 Z"
                                        fill="url(#gradient-shield)"
                                        opacity="0.2"
                                    />
                                    <path
                                        d="M200 100 L260 130 L260 200 Q260 245 200 275 Q140 245 140 200 L140 130 Z"
                                        fill="none"
                                        stroke="url(#gradient-border)"
                                        strokeWidth="4"
                                    />

                                    {/* Checkmark in center */}
                                    <circle cx="200" cy="200" r="45" fill="url(#gradient-center)" className="animate-pulse" style={{ animationDuration: "2s" }} />
                                    <path
                                        d="M180 200 L195 215 L225 185"
                                        stroke="hsl(var(--background))"
                                        strokeWidth="6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                    />
                                </g>

                                {/* Alert indicators - blinking */}
                                <g style={{ animation: "alertBlink 1.5s infinite" }}>
                                    <circle cx="140" cy="140" r="8" fill="hsl(var(--destructive))" />
                                    <circle cx="260" cy="160" r="6" fill="hsl(var(--destructive))" />
                                </g>

                                {/* Lock icon - secured */}
                                <g transform="translate(200, 320)" style={{ animation: "lockSecure 3s ease-in-out infinite" }}>
                                    <rect x="-15" y="-5" width="30" height="20" rx="3" fill="hsl(var(--primary))" />
                                    <path
                                        d="M-10 -5 Q-10 -20 0 -20 Q10 -20 10 -5"
                                        fill="none"
                                        stroke="hsl(var(--primary))"
                                        strokeWidth="3"
                                    />
                                    <circle cx="0" cy="5" r="3" fill="hsl(var(--background))" />
                                </g>

                                <text x="200" y="360" textAnchor="middle" fill="hsl(var(--primary))" fontSize="16" fontWeight="bold">
                                    Protection Active
                                </text>

                                <defs>
                                    <linearGradient id="gradient-shield" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="hsl(280 90% 65%)" />
                                        <stop offset="100%" stopColor="hsl(210 100% 60%)" />
                                    </linearGradient>
                                    <linearGradient id="gradient-border" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="hsl(280 90% 65%)" />
                                        <stop offset="100%" stopColor="hsl(210 100% 60%)" />
                                    </linearGradient>
                                    <radialGradient id="gradient-center">
                                        <stop offset="0%" stopColor="hsl(210 100% 60%)" />
                                        <stop offset="100%" stopColor="hsl(280 90% 65%)" />
                                    </radialGradient>
                                    <linearGradient id="gradient-radar" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="hsl(280 90% 65%)" />
                                        <stop offset="100%" stopColor="hsl(210 100% 60%)" />
                                    </linearGradient>
                                    <linearGradient id="gradient-sweep" x1="0%" y1="100%" x2="0%" y2="0%">
                                        <stop offset="0%" stopColor="hsl(280 90% 65%)" stopOpacity="0" />
                                        <stop offset="100%" stopColor="hsl(280 90% 65%)" stopOpacity="1" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Floating stats */}
                            <div className="absolute top-12 -left-8 glass px-4 py-3 rounded-xl border border-primary/30 shadow-lg animate-float">
                                <div className="flex items-center gap-2">
                                    <Eye className="w-4 h-4 text-primary" />
                                    <div>
                                        <div className="text-xs text-muted-foreground">Sites surveillés</div>
                                        <div className="text-sm font-bold text-primary">247</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-12 -right-8 glass px-4 py-3 rounded-xl border border-destructive/30 shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                                <div className="flex items-center gap-2">
                                    <AlertTriangle className="w-4 h-4 text-destructive" />
                                    <div>
                                        <div className="text-xs text-muted-foreground">Alerte active</div>
                                        <div className="text-sm font-bold text-destructive">En cours</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
};
