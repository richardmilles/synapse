import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Clock, TrendingDown, Coins } from "lucide-react";
import { useEffect } from "react";

export const RecouvrementHeroVisuel = () => {
    useEffect(() => {
        const style = document.createElement('style');
        style.id = 'recouvrement-hero-animations';
        style.textContent = `
            @keyframes balanceTilt {
                0%, 100% { transform: rotate(5deg); }
                50% { transform: rotate(-5deg); }
            }
            
            @keyframes coinDrop {
                0% { transform: translateY(-50px); opacity: 0; }
                50% { opacity: 1; }
                100% { transform: translateY(10px); opacity: 0; }
            }
            
            @keyframes paymentFlow {
                from { stroke-dashoffset: 100; }
                to { stroke-dashoffset: 0; }
            }
            
            @keyframes urgentPulse {
                0%, 100% { opacity: 1; stroke-width: 2; }
                50% { opacity: 0.5; stroke-width: 4; }
            }
        `;

        if (!document.getElementById('recouvrement-hero-animations')) {
            document.head.appendChild(style);
        }

        return () => {
            const existingStyle = document.getElementById('recouvrement-hero-animations');
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
                            <Coins className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium">Agent recouvrement amiable 24/7</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            <span className="text-foreground">Recouvrez votre </span>
                            <span className="bg-gradient-to-r from-destructive via-synapse-blue to-accent bg-clip-text text-transparent">
                                cash sans délai
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-foreground/70 max-w-xl">
                            <span className="text-destructive font-semibold">Facture impayée depuis 60 jours</span> ?{" "}
                            <span className="text-primary font-semibold">Promesse de virement non tenue</span> ?
                            Votre <span className="font-semibold">négociateur IA</span> relance le débiteur,
                            met en place un <span className="text-secondary font-semibold">plan de paiement</span> adapté et sécurise l'encaissement{" "}
                            <span className="font-semibold">avant la prescription</span>.
                        </p>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="glass p-4 rounded-xl border border-primary/30">
                                <div className="text-2xl font-bold text-primary mb-1">-40%</div>
                                <div className="text-xs text-muted-foreground">Délai paiement (DSO)</div>
                            </div>
                            <div className="glass p-4 rounded-xl border border-destructive/30">
                                <div className="text-2xl font-bold text-destructive mb-1">24/7</div>
                                <div className="text-xs text-muted-foreground">Relance active</div>
                            </div>
                            <div className="glass p-4 rounded-xl border border-accent/30">
                                <div className="text-2xl font-bold text-accent mb-1">x3</div>
                                <div className="text-xs text-muted-foreground">Taux contact</div>
                            </div>
                        </div>

                        <a href="https://koalendar.com/e/meet-with-synapse" target="_blank" rel="noopener noreferrer">
                            <Button variant="hero" size="xl" className="group">
                                Démarrer le recouvrement
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </a>

                        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span>Relance multicanale intelligente</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-destructive" />
                                <span>Détection promesse non tenue</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                <span>Négociation échelonnement</span>
                            </div>
                        </div>
                    </div>

                    {/* Balance Scale and Cash Flow Animation */}
                    <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                        <div className="relative max-w-lg mx-auto">
                            <svg viewBox="0 0 400 400" className="w-full drop-shadow-2xl">
                                {/* Balance Scale */}
                                <g transform="translate(200, 180)" style={{ animation: "balanceTilt 6s ease-in-out infinite" }}>
                                    {/* Central Beam */}
                                    <rect x="-120" y="-5" width="240" height="10" rx="5" fill="hsl(var(--border))" />

                                    {/* Left Plate (Debt) */}
                                    <line x1="-110" y1="0" x2="-110" y2="80" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                                    <path d="M-140 80 Q-110 100 -80 80" fill="hsl(var(--destructive))" opacity="0.2" stroke="hsl(var(--destructive))" strokeWidth="2" />
                                    {/* Debt stack */}
                                    <rect x="-125" y="60" width="30" height="10" fill="hsl(var(--destructive))" />
                                    <rect x="-125" y="72" width="30" height="10" fill="hsl(var(--destructive))" opacity="0.8" />

                                    {/* Right Plate (Cash) */}
                                    <line x1="110" y1="0" x2="110" y2="80" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                                    <path d="M80 80 Q110 100 140 80" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="2" />
                                    {/* Coins appearing */}
                                    <circle cx="110" cy="70" r="8" fill="hsl(var(--accent))" stroke="hsl(var(--background))" />
                                    <circle cx="100" cy="75" r="8" fill="hsl(var(--accent))" stroke="hsl(var(--background))" />
                                    <circle cx="120" cy="75" r="8" fill="hsl(var(--accent))" stroke="hsl(var(--background))" />
                                </g>

                                {/* Scale Stand */}
                                <rect x="195" y="180" width="10" height="120" rx="2" fill="hsl(var(--muted))" />
                                <path d="M170 300 L230 300 L200 180 Z" fill="hsl(var(--muted))" opacity="0.5" />

                                {/* Flow Arrows */}
                                <path
                                    d="M100 320 Q200 360 300 320"
                                    fill="none"
                                    stroke="hsl(var(--primary))"
                                    strokeWidth="4"
                                    strokeDasharray="20 10"
                                    style={{ animation: "paymentFlow 2s linear infinite" }}
                                />
                                <text x="200" y="340" textAnchor="middle" fill="hsl(var(--primary))" fontSize="12" fontWeight="bold">FLUX ENCAISSEMENT</text>

                                {/* Urgent Alert Pulse */}
                                <circle cx="80" cy="180" r="25" fill="none" stroke="hsl(var(--destructive))" strokeWidth="2" style={{ animation: "urgentPulse 2s infinite" }} />
                                <text x="80" y="185" textAnchor="middle" fill="hsl(var(--destructive))" fontWeight="bold" fontSize="14">J+60</text>

                                {/* Check Result */}
                                <circle cx="320" cy="180" r="25" fill="hsl(var(--synapse-green))" opacity="0.1" />
                                <path d="M310 180 L320 190 L335 170" stroke="hsl(var(--synapse-green))" strokeWidth="4" fill="none" />

                                <defs>
                                    <linearGradient id="gradient-scale" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="hsl(var(--destructive))" />
                                        <stop offset="100%" stopColor="hsl(var(--primary))" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Floating Card */}
                            <div className="absolute top-10 -left-6 glass px-4 py-3 rounded-xl border border-destructive/30 shadow-lg animate-float">
                                <div className="flex items-center gap-3">
                                    <TrendingDown className="w-5 h-5 text-destructive" />
                                    <div>
                                        <div className="text-xs text-muted-foreground">Retard moyen</div>
                                        <div className="text-sm font-bold text-destructive">63 Jours</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-20 -right-6 glass px-4 py-3 rounded-xl border border-primary/30 shadow-lg animate-float" style={{ animationDelay: "1.5s" }}>
                                <div className="flex items-center gap-3">
                                    <Coins className="w-5 h-5 text-primary" />
                                    <div>
                                        <div className="text-xs text-muted-foreground">Recouvré</div>
                                        <div className="text-sm font-bold text-primary">85%</div>
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
