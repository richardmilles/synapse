import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, FileText, Stamp, Clock } from "lucide-react";
import { useEffect } from "react";

export const HuissiersHeroVisuel = () => {
    useEffect(() => {
        const style = document.createElement('style');
        style.id = 'huissiers-hero-animations';
        style.textContent = `
            @keyframes stampPress {
                0%, 90%, 100% { transform: translateY(0) rotate(0deg); }
                45% { transform: translateY(-20px) rotate(-5deg); }
                50% { transform: translateY(10px) rotate(0deg); }
            }
            
            @keyframes documentSlide {
                0%, 100% { transform: translateX(0); opacity: 0.3; }
                50% { transform: translateX(-10px); opacity: 1; }
            }
            
            @keyframes scaleBalance {
                0%, 100% { transform: rotate(2deg); }
                50% { transform: rotate(-2deg); }
            }
            
            @keyframes signatureWrite {
                from { stroke-dashoffset: 200; }
                to { stroke-dashoffset: 0; }
            }
        `;

        if (!document.getElementById('huissiers-hero-animations')) {
            document.head.appendChild(style);
        }

        return () => {
            const existingStyle = document.getElementById('huissiers-hero-animations');
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
                            <Scale className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium">Agent vocal étude huissier justice</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            <span className="text-foreground">Chaque </span>
                            <span className="bg-gradient-to-r from-synapse-violet to-synapse-blue bg-clip-text text-transparent">
                                dossier compte
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-foreground/70 max-w-xl">
                            <span className="text-primary font-semibold">Signification urgente avant 15h</span> ?{" "}
                            <span className="text-accent font-semibold">Constat après effraction</span> ?
                            Notre <span className="font-semibold">standard étude huissier automatisé</span> qualifie le{" "}
                            <span className="font-semibold">type d'acte juridique</span>, collecte les{" "}
                            <span className="text-secondary font-semibold">pièces obligatoires</span> et planifie votre{" "}
                            <span className="font-semibold">clerc disponible</span> en moins de{" "}
                            <span className="font-semibold">2 heures</span>.
                        </p>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="glass p-4 rounded-xl border border-primary/30">
                                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                                <div className="text-xs text-muted-foreground">Demandes captées</div>
                            </div>
                            <div className="glass p-4 rounded-xl border border-accent/30">
                                <div className="text-2xl font-bold text-accent mb-1">&lt; 2h</div>
                                <div className="text-xs text-muted-foreground">Rappel clerc</div>
                            </div>
                            <div className="glass p-4 rounded-xl border border-secondary/30">
                                <div className="text-2xl font-bold text-secondary mb-1">48h</div>
                                <div className="text-xs text-muted-foreground">Retour PV</div>
                            </div>
                        </div>

                        <a href="https://koalendar.com/e/meet-with-synapse" target="_blank" rel="noopener noreferrer">
                            <Button variant="hero" size="xl" className="group">
                                Traiter tous les dossiers
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </a>

                        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span>Qualification acte automatique</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                <span>Checklist pièces obligatoires</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                <span>Planification tournée</span>
                            </div>
                        </div>
                    </div>

                    {/* Legal document with stamp animation */}
                    <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                        <div className="relative max-w-lg mx-auto">
                            <svg viewBox="0 0 400 400" className="w-full drop-shadow-2xl">
                                {/* Document stack - sliding effect */}
                                <g style={{ animation: "documentSlide 4s ease-in-out infinite" }}>
                                    <rect x="80" y="110" width="220" height="280" rx="8" fill="url(#gradient-paper)" stroke="url(#gradient-border)" strokeWidth="2" opacity="0.3" />
                                </g>
                                <g style={{ animation: "documentSlide 4s ease-in-out infinite 0.5s" }}>
                                    <rect x="90" y="100" width="220" height="280" rx="8" fill="url(#gradient-paper)" stroke="url(#gradient-border)" strokeWidth="2" opacity="0.5" />
                                </g>

                                {/* Main document */}
                                <rect x="100" y="90" width="220" height="280" rx="8" fill="url(#gradient-paper)" stroke="url(#gradient-border)" strokeWidth="3" />

                                {/* Document lines */}
                                <g opacity="0.4">
                                    <line x1="120" y1="130" x2="300" y2="130" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                                    <line x1="120" y1="155" x2="280" y2="155" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                                    <line x1="120" y1="180" x2="290" y2="180" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                                    <line x1="120" y1="205" x2="270" y2="205" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                                    <line x1="120" y1="230" x2="285" y2="230" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                                </g>

                                {/* Scale icon (justice) - balancing */}
                                <g transform="translate(210, 120)" style={{ animation: "scaleBalance 3s ease-in-out infinite" }}>
                                    <rect x="-8" y="0" width="16" height="30" fill="hsl(var(--primary))" opacity="0.6" />
                                    <ellipse cx="0" cy="35" rx="15" ry="5" fill="hsl(var(--primary))" opacity="0.6" />
                                </g>

                                {/* Signature line - animated writing */}
                                <path
                                    d="M130 300 Q160 290 190 300 T250 300"
                                    fill="none"
                                    stroke="hsl(var(--primary))"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeDasharray="200"
                                    style={{ animation: "signatureWrite 3s ease-in-out infinite" }}
                                />

                                {/* Official stamp - pressing animation */}
                                <g transform="translate(210, 270)" style={{ animation: "stampPress 4s ease-in-out infinite" }}>
                                    <circle cx="0" cy="0" r="35" fill="none" stroke="hsl(var(--destructive))" strokeWidth="3" opacity="0.8" />
                                    <text x="0" y="-5" textAnchor="middle" fill="hsl(var(--destructive))" fontSize="10" fontWeight="bold">
                                        HUISSIER
                                    </text>
                                    <text x="0" y="8" textAnchor="middle" fill="hsl(var(--destructive))" fontSize="10" fontWeight="bold">
                                        JUSTICE
                                    </text>
                                    <text x="0" y="18" textAnchor="middle" fill="hsl(var(--destructive))" fontSize="7">
                                        {new Date().getFullYear()}
                                    </text>
                                </g>

                                <text x="210" y="400" textAnchor="middle" fill="hsl(var(--primary))" fontSize="16" fontWeight="bold">
                                    Acte Officiel
                                </text>

                                <defs>
                                    <linearGradient id="gradient-paper" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="hsl(var(--background))" />
                                        <stop offset="100%" stopColor="hsl(var(--muted))" />
                                    </linearGradient>
                                    <linearGradient id="gradient-border" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="hsl(280 90% 65%)" />
                                        <stop offset="100%" stopColor="hsl(210 100% 60%)" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Floating stats */}
                            <div className="absolute top-12 -left-8 glass px-4 py-3 rounded-xl border border-primary/30 shadow-lg animate-float">
                                <div className="flex items-center gap-2">
                                    <FileText className="w-4 h-4 text-primary" />
                                    <div>
                                        <div className="text-xs text-muted-foreground">Type acte</div>
                                        <div className="text-sm font-bold text-primary">Signification</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-12 -right-8 glass px-4 py-3 rounded-xl border border-accent/30 shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                                <div className="flex items-center gap-2">
                                    <Stamp className="w-4 h-4 text-accent" />
                                    <div>
                                        <div className="text-xs text-muted-foreground">Statut</div>
                                        <div className="text-sm font-bold text-accent">En cours</div>
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
