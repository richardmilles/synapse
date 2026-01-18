import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Briefcase, Zap } from "lucide-react";
import { useEffect } from "react";

export const InterimHeroVisuel = () => {
    useEffect(() => {
        const style = document.createElement('style');
        style.id = 'interim-hero-animations';
        style.textContent = `
            @keyframes clockTick {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            
            @keyframes urgencyBlink {
                0%, 100% { opacity: 1; transform: scale(1); }
                50% { opacity: 0.5; transform: scale(0.95); }
            }
            
            @keyframes candidatePop {
                0% { transform: scale(0); opacity: 0; }
                50% { transform: scale(1.2); opacity: 1; }
                100% { transform: scale(1); opacity: 1; }
            }
            
            @keyframes slideInRight {
                from { transform: translateX(100px); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            
            @keyframes gearSpin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
        `;

        if (!document.getElementById('interim-hero-animations')) {
            document.head.appendChild(style);
        }

        return () => {
            const existingStyle = document.getElementById('interim-hero-animations');
            if (existingStyle) existingStyle.remove();
        };
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-synapse-blue/20 rounded-full blur-[120px] animate-glow-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-synapse-violet/20 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "2s" }} />

            <div className="container relative z-10 px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    <div className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20">
                            <Clock className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium">Agent vocal recrutement intérim 24/7</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            <span className="text-foreground">L'imprévu géré en </span>
                            <span className="bg-gradient-to-r from-synapse-blue via-synapse-violet to-synapse-purple bg-clip-text text-transparent">
                                15 minutes
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-foreground/70 max-w-xl">
                            <span className="text-destructive font-semibold">Intérimaire absent à 7h du matin</span> ?{" "}
                            <span className="text-primary font-semibold">Commande client urgente le vendredi soir</span> ?
                            Votre <span className="font-semibold">assistant recrutement IA</span> qualifie les besoins,
                            interroge votre <span className="text-secondary font-semibold">vivier candidats</span> et trouve le{" "}
                            <span className="font-semibold">profil disponible</span> avant l'ouverture de l'agence.
                        </p>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="glass p-4 rounded-xl border border-destructive/30">
                                <div className="text-2xl font-bold text-destructive mb-1">&lt; 15min</div>
                                <div className="text-xs text-muted-foreground">Temps réactivité</div>
                            </div>
                            <div className="glass p-4 rounded-xl border border-primary/30">
                                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                                <div className="text-xs text-muted-foreground">Vivier contacté</div>
                            </div>
                            <div className="glass p-4 rounded-xl border border-accent/30">
                                <div className="text-2xl font-bold text-accent mb-1">24/7</div>
                                <div className="text-xs text-muted-foreground">Disponibilité</div>
                            </div>
                        </div>

                        <a href="https://koalendar.com/e/meet-with-synapse" target="_blank" rel="noopener noreferrer">
                            <Button variant="hero" size="xl" className="group">
                                Automatiser le sourcing urgent
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </a>

                        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-destructive" />
                                <span>Gestion urgence matin</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span>Matching CV automatique</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                <span>Confirmation dispo SMS/Vocal</span>
                            </div>
                        </div>
                    </div>

                    {/* Clock and Candidate Visual */}
                    <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                        <div className="relative max-w-lg mx-auto">
                            <svg viewBox="0 0 400 400" className="w-full drop-shadow-2xl">
                                {/* Background Gear - spinning slowly */}
                                <g opacity="0.1" style={{ transformOrigin: "200px 200px", animation: "gearSpin 20s linear infinite" }}>
                                    <path d="M200 40 L220 40 L230 70 A130 130 0 0 1 270 90 L300 80 L320 90 L310 120 A130 130 0 0 1 330 160 L360 170 L360 190 L330 200 A130 130 0 0 1 330 240 L360 250 L350 280 L320 270 A130 130 0 0 1 290 300 L280 330 L260 330 L250 300 A130 130 0 0 1 210 310 L200 340 L180 340 L170 310 A130 130 0 0 1 130 300 L100 310 L80 300 L90 270 A130 130 0 0 1 70 230 L40 220 L40 200 L70 190 A130 130 0 0 1 70 150 L40 140 L50 110 L80 120 A130 130 0 0 1 110 90 L120 60 L140 60 L150 90 A130 130 0 0 1 190 80 L200 40 Z" fill="hsl(var(--primary))" />
                                    <circle cx="200" cy="200" r="40" fill="none" stroke="hsl(var(--primary))" strokeWidth="20" />
                                </g>

                                {/* Main Clock Circle */}
                                <circle cx="200" cy="200" r="120" fill="none" stroke="url(#gradient-clock)" strokeWidth="4" />
                                <circle cx="200" cy="200" r="110" fill="url(#gradient-bg)" opacity="0.1" />

                                {/* Clock Marks */}
                                {Array.from({ length: 12 }).map((_, i) => (
                                    <line
                                        key={i}
                                        x1="200" y1="95"
                                        x2="200" y2="105"
                                        transform={`rotate(${i * 30} 200 200)`}
                                        stroke="hsl(var(--muted-foreground))"
                                        strokeWidth="2"
                                    />
                                ))}

                                {/* Hour Hand - Slow */}
                                <line
                                    x1="200" y1="200"
                                    x2="200" y2="140"
                                    stroke="hsl(var(--foreground))"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    style={{ transformOrigin: "200px 200px", animation: "clockTick 12s linear infinite" }}
                                />

                                {/* Minute Hand - Fast */}
                                <line
                                    x1="200" y1="200"
                                    x2="200" y2="110"
                                    stroke="hsl(var(--primary))"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    style={{ transformOrigin: "200px 200px", animation: "clockTick 2s linear infinite" }}
                                />

                                {/* Center Dot */}
                                <circle cx="200" cy="200" r="6" fill="hsl(var(--primary))" />

                                {/* Candidates Popping Up */}
                                <g transform="translate(140, 160)" style={{ animation: "candidatePop 3s infinite 0s" }}>
                                    <circle cx="0" cy="0" r="15" fill="hsl(var(--accent))" />
                                    <path d="M-8 -5 Q0 -15 8 -5" stroke="white" strokeWidth="2" fill="none" />
                                </g>

                                <g transform="translate(260, 160)" style={{ animation: "candidatePop 3s infinite 1s" }}>
                                    <circle cx="0" cy="0" r="15" fill="hsl(var(--secondary))" />
                                    <path d="M-8 -5 Q0 -15 8 -5" stroke="white" strokeWidth="2" fill="none" />
                                </g>

                                <g transform="translate(200, 260)" style={{ animation: "candidatePop 3s infinite 2s" }}>
                                    <circle cx="0" cy="0" r="15" fill="hsl(var(--primary))" />
                                    <path d="M-8 -5 Q0 -15 8 -5" stroke="white" strokeWidth="2" fill="none" />
                                </g>

                                {/* Alert Indicator */}
                                <g transform="translate(280, 80)" style={{ animation: "urgencyBlink 1s infinite" }}>
                                    <circle cx="0" cy="0" r="12" fill="hsl(var(--destructive))" />
                                    <text x="0" y="4" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">!</text>
                                </g>

                                <defs>
                                    <linearGradient id="gradient-clock" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                                        <stop offset="100%" stopColor="hsl(var(--secondary))" />
                                    </linearGradient>
                                    <radialGradient id="gradient-bg">
                                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                                        <stop offset="100%" stopColor="transparent" />
                                    </radialGradient>
                                </defs>
                            </svg>

                            {/* Floating Card */}
                            <div className="absolute top-10 -left-6 glass px-4 py-3 rounded-xl border border-primary/30 shadow-lg animate-float">
                                <div className="flex items-center gap-3">
                                    <Users className="w-5 h-5 text-primary" />
                                    <div>
                                        <div className="text-xs text-muted-foreground">Candidats dispo</div>
                                        <div className="text-sm font-bold text-primary">5 trouvés</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-10 -right-6 glass px-4 py-3 rounded-xl border border-destructive/30 shadow-lg animate-float" style={{ animationDelay: "1.5s" }}>
                                <div className="flex items-center gap-3">
                                    <Zap className="w-5 h-5 text-destructive" />
                                    <div>
                                        <div className="text-xs text-muted-foreground">Urgence</div>
                                        <div className="text-sm font-bold text-destructive">Immédiate</div>
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
