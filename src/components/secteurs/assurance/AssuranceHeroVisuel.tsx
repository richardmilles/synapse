import { Button } from "@/components/ui/button";
import { ArrowRight, Umbrella, Shield, CheckCircle, Percent } from "lucide-react";
import { useEffect } from "react";

export const AssuranceHeroVisuel = () => {
    useEffect(() => {
        const style = document.createElement('style');
        style.id = 'assurance-hero-animations';
        style.textContent = `
            @keyframes rainDrop {
                0% { transform: translateY(-100px); opacity: 0; }
                50% { opacity: 1; }
                90% { transform: translateY(0); opacity: 1; }
                100% { transform: translateY(10px) scaleX(2) scaleY(0.5); opacity: 0; }
            }
            
            @keyframes umbrellaShield {
                0%, 100% { transform: scale(1); filter: drop-shadow(0 10px 10px rgba(0,0,0,0.2)); }
                50% { transform: scale(1.02); filter: drop-shadow(0 15px 20px rgba(0,0,0,0.3)); }
            }
            
            @keyframes shieldPulse {
                0% { opacity: 0; transform: scale(0.8); }
                50% { opacity: 0.5; transform: scale(1.1); }
                100% { opacity: 0; transform: scale(1.3); }
            }
            
            @keyframes checkPop {
                0% { transform: scale(0); }
                80% { transform: scale(1.2); }
                100% { transform: scale(1); }
            }
        `;

        if (!document.getElementById('assurance-hero-animations')) {
            document.head.appendChild(style);
        }

        return () => {
            const existingStyle = document.getElementById('assurance-hero-animations');
            if (existingStyle) existingStyle.remove();
        };
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-synapse-green/20 rounded-full blur-[120px] animate-glow-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-synapse-blue/20 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "2s" }} />

            <div className="container relative z-10 px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    <div className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20">
                            <Umbrella className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium">Courtage assurance intelligent 24/7</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            <span className="text-foreground">Protégez mieux, </span>
                            <span className="bg-gradient-to-r from-synapse-green via-primary to-synapse-blue bg-clip-text text-transparent">
                                vendez plus
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-foreground/70 max-w-xl">
                            <span className="text-primary font-semibold">Renouvellement contrat dans 30 jours</span> ?{" "}
                            <span className="text-accent font-semibold">Besoin d'une RC Pro urgente</span> ?
                            Votre <span className="font-semibold">courtier IA</span> compare les offres,
                            relance vos <span className="text-secondary font-semibold">prospects chauds</span> et sécurise la signature{" "}
                            <span className="font-semibold">avant la concurrence</span>.
                        </p>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="glass p-4 rounded-xl border border-primary/30">
                                <div className="text-2xl font-bold text-primary mb-1">+25%</div>
                                <div className="text-xs text-muted-foreground">Taux conversion</div>
                            </div>
                            <div className="glass p-4 rounded-xl border border-accent/30">
                                <div className="text-2xl font-bold text-accent mb-1">2h</div>
                                <div className="text-xs text-muted-foreground">Délai comparatif</div>
                            </div>
                            <div className="glass p-4 rounded-xl border border-secondary/30">
                                <div className="text-2xl font-bold text-secondary mb-1">98%</div>
                                <div className="text-xs text-muted-foreground">Rétention client</div>
                            </div>
                        </div>

                        <a href="https://koalendar.com/e/meet-with-synapse" target="_blank" rel="noopener noreferrer">
                            <Button variant="hero" size="xl" className="group">
                                Comparer les offres
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </a>

                        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span>Comparateur temps réel</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                <span>Gestion sinistre auto</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                <span>Anti-résiliation</span>
                            </div>
                        </div>
                    </div>

                    {/* Umbrella Protection Animation */}
                    <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                        <div className="relative max-w-lg mx-auto">
                            <svg viewBox="0 0 400 400" className="w-full drop-shadow-2xl">
                                {/* Rain Drops (Risks) */}
                                {Array.from({ length: 15 }).map((_, i) => (
                                    <path
                                        key={i}
                                        d="M0 0 Q0 5 2 8 L4 12 L0 12 L-4 12 L-2 8 Q0 5 0 0"
                                        fill="hsl(var(--destructive))"
                                        opacity="0.6"
                                        transform={`translate(${50 + Math.random() * 300}, ${Math.random() * 100})`}
                                        style={{
                                            animation: `rainDrop ${1 + Math.random()}s linear infinite`,
                                            animationDelay: `${Math.random()}s`
                                        }}
                                    />
                                ))}

                                {/* Umbrella Top */}
                                <g transform="translate(200, 200)" style={{ animation: "umbrellaShield 4s ease-in-out infinite" }}>
                                    <path
                                        d="M-120 50 Q-60 -80 0 -80 Q60 -80 120 50"
                                        fill="url(#gradient-umbrella)"
                                        stroke="hsl(var(--primary))"
                                        strokeWidth="3"
                                    />
                                    {/* Umbrella Ribs */}
                                    <path d="M0 -80 Q-30 0 -40 50" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5" />
                                    <path d="M0 -80 Q30 0 40 50" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5" />

                                    {/* Handle */}
                                    <path d="M0 50 L0 150 Q0 180 30 180" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="6" strokeLinecap="round" />
                                </g>

                                {/* Protection Force Field */}
                                <circle
                                    cx="200"
                                    cy="200"
                                    r="130"
                                    fill="none"
                                    stroke="hsl(var(--synapse-green))"
                                    strokeWidth="2"
                                    style={{ animation: "shieldPulse 3s infinite" }}
                                />

                                {/* Checkmarks (Validations) */}
                                <g transform="translate(280, 250)" style={{ animation: "checkPop 4s infinite 0s" }}>
                                    <circle cx="0" cy="0" r="15" fill="hsl(var(--background))" stroke="hsl(var(--synapse-green))" strokeWidth="2" />
                                    <path d="M-5 0 L-2 4 L6 -4" stroke="hsl(var(--synapse-green))" strokeWidth="2" fill="none" />
                                </g>

                                <g transform="translate(120, 280)" style={{ animation: "checkPop 4s infinite 1s" }}>
                                    <circle cx="0" cy="0" r="15" fill="hsl(var(--background))" stroke="hsl(var(--synapse-green))" strokeWidth="2" />
                                    <path d="M-5 0 L-2 4 L6 -4" stroke="hsl(var(--synapse-green))" strokeWidth="2" fill="none" />
                                </g>

                                <defs>
                                    <linearGradient id="gradient-umbrella" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                                        <stop offset="100%" stopColor="hsl(var(--background))" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Floating Card */}
                            <div className="absolute top-10 -left-6 glass px-4 py-3 rounded-xl border border-primary/30 shadow-lg animate-float">
                                <div className="flex items-center gap-3">
                                    <Shield className="w-5 h-5 text-primary" />
                                    <div>
                                        <div className="text-xs text-muted-foreground">Risques</div>
                                        <div className="text-sm font-bold text-primary">Couverts</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-20 -right-6 glass px-4 py-3 rounded-xl border border-accent/30 shadow-lg animate-float" style={{ animationDelay: "1.5s" }}>
                                <div className="flex items-center gap-3">
                                    <Percent className="w-5 h-5 text-accent" />
                                    <div>
                                        <div className="text-xs text-muted-foreground">Économie</div>
                                        <div className="text-sm font-bold text-accent">-15%</div>
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
