import { Button } from "@/components/ui/button";
import { ArrowRight, Thermometer, Snowflake, Flame } from "lucide-react";
import { useEffect } from "react";

export const ChauffageHeroVisuel = () => {
    useEffect(() => {
        const style = document.createElement('style');
        style.id = 'chauffage-hero-animations';
        style.textContent = `
            @keyframes mercuryRise {
                0% { height: 20%; }
                50% { height: 90%; }
                100% { height: 20%; }
            }
            
            @keyframes temperatureSwing {
                0%, 100% { fill: hsl(210 100% 60%); }
                50% { fill: hsl(0 84% 60%); }
            }
            
            @keyframes seasonPulse {
                0%, 100% { opacity: 0.3; transform: scale(1); }
                50% { opacity: 0.8; transform: scale(1.1); }
            }
            
            @keyframes heatWave {
                0%, 100% { d: path("M50 200 Q75 180, 100 200 T150 200 T200 200"); }
                50% { d: path("M50 200 Q75 220, 100 200 T150 200 T200 200"); }
            }
        `;

        if (!document.getElementById('chauffage-hero-animations')) {
            document.head.appendChild(style);
        }

        return () => {
            const existingStyle = document.getElementById('chauffage-hero-animations');
            if (existingStyle) existingStyle.remove();
        };
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-synapse-blue/20 rounded-full blur-[120px] animate-glow-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-destructive/20 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "2s" }} />

            <div className="container relative z-10 px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    <div className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20">
                            <Thermometer className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium">Agent vocal chauffage climatisation 24/7</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            <span className="text-foreground">Captez les </span>
                            <span className="bg-gradient-to-r from-synapse-blue via-destructive to-synapse-yellow bg-clip-text text-transparent">
                                pics saisonniers
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-foreground/70 max-w-xl">
                            <span className="text-synapse-blue font-semibold">Décembre : -8°C, chaudière en panne</span>.{" "}
                            <span className="text-destructive font-semibold">Juillet : 38°C, clim qui lâche</span>.
                            Votre <span className="font-semibold">standard chauffagiste automatisé</span> absorbe les{" "}
                            <span className="text-primary font-semibold">pics +400%</span> sans embaucher,
                            qualifie la <span className="font-semibold">panne technique</span> et dispatche vos{" "}
                            <span className="font-semibold">techniciens CVC</span> instantanément.
                        </p>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="glass p-4 rounded-xl border border-synapse-blue/30">
                                <div className="text-2xl font-bold text-synapse-blue mb-1">+400%</div>
                                <div className="text-xs text-muted-foreground">Appels hiver</div>
                            </div>
                            <div className="glass p-4 rounded-xl border border-destructive/30">
                                <div className="text-2xl font-bold text-destructive mb-1">+350%</div>
                                <div className="text-xs text-muted-foreground">Appels été</div>
                            </div>
                            <div className="glass p-4 rounded-xl border border-primary/30">
                                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                                <div className="text-xs text-muted-foreground">Pics absorbés</div>
                            </div>
                        </div>

                        <a href="https://koalendar.com/e/meet-with-synapse" target="_blank" rel="noopener noreferrer">
                            <Button variant="hero" size="xl" className="group">
                                Absorber tous les pics
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </a>

                        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-synapse-blue" />
                                <span>Diagnostic code erreur</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-destructive" />
                                <span>Urgence vs installation</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span>Pré-devis instantané</span>
                            </div>
                        </div>
                    </div>

                    {/* Thermomètre animé hiver/été */}
                    <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                        <div className="relative max-w-lg mx-auto">
                            <svg viewBox="0 0 400 400" className="w-full drop-shadow-2xl">
                                {/* Thermometer tube */}
                                <rect
                                    x="170"
                                    y="80"
                                    width="60"
                                    height="240"
                                    rx="30"
                                    fill="url(#gradient-tube)"
                                    stroke="url(#gradient-border)"
                                    strokeWidth="3"
                                    opacity="0.3"
                                />

                                {/* Inner tube */}
                                <rect
                                    x="185"
                                    y="90"
                                    width="30"
                                    height="220"
                                    rx="15"
                                    fill="hsl(var(--background))"
                                    opacity="0.8"
                                />

                                {/* Mercury - animated rise and fall */}
                                <rect
                                    x="188"
                                    y="90"
                                    width="24"
                                    height="100"
                                    rx="12"
                                    fill="url(#gradient-mercury)"
                                    style={{
                                        transformOrigin: "200px 310px",
                                        animation: "mercuryRise 6s ease-in-out infinite"
                                    }}
                                />

                                {/* Bulb at bottom */}
                                <circle
                                    cx="200"
                                    cy="330"
                                    r="35"
                                    fill="url(#gradient-mercury)"
                                    className="animate-pulse"
                                    style={{ animationDuration: "3s" }}
                                />

                                {/* Scale marks */}
                                <g stroke="hsl(var(--muted-foreground))" strokeWidth="2">
                                    <line x1="230" y1="120" x2="245" y2="120" />
                                    <line x1="230" y1="160" x2="245" y2="160" />
                                    <line x1="230" y1="200" x2="245" y2="200" />
                                    <line x1="230" y1="240" x2="245" y2="240" />
                                    <line x1="230" y1="280" x2="245" y2="280" />
                                </g>

                                {/* Temperature labels */}
                                <text x="260" y="125" fill="hsl(var(--muted-foreground))" fontSize="14">30°</text>
                                <text x="260" y="165" fill="hsl(var(--muted-foreground))" fontSize="14">20°</text>
                                <text x="260" y="205" fill="hsl(var(--muted-foreground))" fontSize="14">10°</text>
                                <text x="260" y="245" fill="hsl(var(--muted-foreground))" fontSize="14">0°</text>
                                <text x="260" y="285" fill="hsl(var(--muted-foreground))" fontSize="14">-10°</text>

                                {/* Winter icon - pulsing */}
                                <g style={{ animation: "seasonPulse 3s ease-in-out infinite" }}>
                                    <circle cx="80" cy="150" r="40" fill="hsl(210 100% 60%)" opacity="0.2" />
                                    <path
                                        d="M80 130 L80 170 M60 150 L100 150 M68 138 L92 162 M92 138 L68 162"
                                        stroke="hsl(210 100% 60%)"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                    />
                                </g>

                                {/* Summer icon - pulsing */}
                                <g style={{ animation: "seasonPulse 3s ease-in-out infinite 1.5s" }}>
                                    <circle cx="320" cy="250" r="35" fill="hsl(0 84% 60%)" opacity="0.3" />
                                    <circle cx="320" cy="250" r="20" fill="hsl(40 95% 60%)" opacity="0.6" />
                                    {/* Sun rays */}
                                    <g stroke="hsl(40 95% 60%)" strokeWidth="3" strokeLinecap="round">
                                        <line x1="320" y1="210" x2="320" y2="220" />
                                        <line x1="320" y1="280" x2="320" y2="290" />
                                        <line x1="280" y1="250" x2="290" y2="250" />
                                        <line x1="350" y1="250" x2="360" y2="250" />
                                    </g>
                                </g>

                                {/* Gradients */}
                                <defs>
                                    <linearGradient id="gradient-tube" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="hsl(210 100% 60%)" />
                                        <stop offset="100%" stopColor="hsl(0 84% 60%)" />
                                    </linearGradient>
                                    <linearGradient id="gradient-border" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="hsl(210 100% 60%)" />
                                        <stop offset="50%" stopColor="hsl(var(--primary))" />
                                        <stop offset="100%" stopColor="hsl(0 84% 60%)" />
                                    </linearGradient>
                                    <linearGradient id="gradient-mercury" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="hsl(0 84% 60%)">
                                            <animate attributeName="stop-color" values="hsl(0 84% 60%); hsl(210 100% 60%); hsl(0 84% 60%)" dur="6s" repeatCount="indefinite" />
                                        </stop>
                                        <stop offset="100%" stopColor="hsl(0 84% 60%)">
                                            <animate attributeName="stop-color" values="hsl(0 84% 60%); hsl(210 100% 60%); hsl(0 84% 60%)" dur="6s" repeatCount="indefinite" />
                                        </stop>
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Floating stats */}
                            <div className="absolute top-12 -left-8 glass px-4 py-3 rounded-xl border border-synapse-blue/30 shadow-lg animate-float">
                                <div className="flex items-center gap-2">
                                    <Snowflake className="w-4 h-4 text-synapse-blue" />
                                    <div>
                                        <div className="text-xs text-muted-foreground">Pic hiver</div>
                                        <div className="text-sm font-bold text-synapse-blue">Décembre</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-12 -right-8 glass px-4 py-3 rounded-xl border border-destructive/30 shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                                <div className="flex items-center gap-2">
                                    <Flame className="w-4 h-4 text-destructive" />
                                    <div>
                                        <div className="text-xs text-muted-foreground">Pic été</div>
                                        <div className="text-sm font-bold text-destructive">Juillet</div>
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
