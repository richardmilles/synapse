import { Button } from "@/components/ui/button";
import { ArrowRight, FileSignature, Landmark, Scale, Clock } from "lucide-react";
import { useEffect } from "react";

export const NotairesHeroVisuel = () => {
    useEffect(() => {
        const style = document.createElement('style');
        style.id = 'notaires-hero-animations';
        style.textContent = `
            @keyframes sealPress {
                0%, 100% { transform: translateY(0); }
                45% { transform: translateY(-30px); }
                50% { transform: translateY(0); }
            }
            
            @keyframes waxMelt {
                0% { opacity: 0; transform: scale(0.5); }
                45% { opacity: 0; transform: scale(0.5); }
                50% { opacity: 1; transform: scale(1.1); }
                60% { transform: scale(1); }
                100% { opacity: 1; transform: scale(1); }
            }
            
            @keyframes scrollUnfurl {
                0%, 100% { height: 280px; }
                50% { height: 320px; }
            }
            
            @keyframes signaturePen {
                0% { stroke-dashoffset: 100; opacity: 0; }
                20% { opacity: 1; }
                80% { stroke-dashoffset: 0; opacity: 1; }
                100% { stroke-dashoffset: 0; opacity: 1; }
            }
        `;

        if (!document.getElementById('notaires-hero-animations')) {
            document.head.appendChild(style);
        }

        return () => {
            const existingStyle = document.getElementById('notaires-hero-animations');
            if (existingStyle) existingStyle.remove();
        };
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-synapse-blue/20 rounded-full blur-[120px] animate-glow-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "2s" }} />

            <div className="container relative z-10 px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    <div className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20">
                            <Landmark className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium">Standard notarial intelligent 24/7</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            <span className="text-foreground">L'acte authentique </span>
                            <span className="bg-gradient-to-r from-synapse-blue via-accent to-synapse-violet bg-clip-text text-transparent">
                                sans délai
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-foreground/70 max-w-xl">
                            <span className="text-accent font-semibold">Signature urgente avant 16h</span> ?{" "}
                            <span className="text-primary font-semibold">Question sur une succession</span> ?
                            Votre <span className="font-semibold">secrétariat notarial IA</span> qualifie la demande,
                            vérifie la <span className="text-secondary font-semibold">complétude du dossier</span> et cale le RDV de signature{" "}
                            <span className="font-semibold">automatiquement</span> dans l'agenda du clerc.
                        </p>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="glass p-4 rounded-xl border border-primary/30">
                                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                                <div className="text-xs text-muted-foreground">Appels décrochés</div>
                            </div>
                            <div className="glass p-4 rounded-xl border border-accent/30">
                                <div className="text-2xl font-bold text-accent mb-1">&lt; 24h</div>
                                <div className="text-xs text-muted-foreground">Délai RDV signature</div>
                            </div>
                            <div className="glass p-4 rounded-xl border border-secondary/30">
                                <div className="text-2xl font-bold text-secondary mb-1">0</div>
                                <div className="text-xs text-muted-foreground">Dossier incomplet</div>
                            </div>
                        </div>

                        <a href="https://koalendar.com/e/meet-with-synapse" target="_blank" rel="noopener noreferrer">
                            <Button variant="hero" size="xl" className="group">
                                Sécuriser vos signatures
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </a>

                        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span>Prise RDV synchronisée</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                <span>Checklist pièces auto</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                <span>Filtrage démarchage</span>
                            </div>
                        </div>
                    </div>

                    {/* Seal Press and Scroll Animation */}
                    <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                        <div className="relative max-w-lg mx-auto">
                            <svg viewBox="0 0 400 400" className="w-full drop-shadow-2xl">
                                {/* Scroll Paper - unraveling */}
                                <g transform="translate(100, 60)">
                                    <path
                                        d="M0 20 L200 20 L200 300 L0 300 Z"
                                        fill="url(#gradient-paper)"
                                        stroke="url(#gradient-border)"
                                        strokeWidth="2"
                                        style={{ animation: "scrollUnfurl 4s ease-in-out infinite" }}
                                    />
                                    {/* Scroll Roll Top */}
                                    <path d="M0 20 Q100 0 200 20" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2" />
                                    <path d="M0 300 Q100 320 200 300" fill="url(#gradient-paper)" stroke="hsl(var(--border))" strokeWidth="2" />

                                    {/* Text lines */}
                                    <line x1="20" y1="60" x2="180" y2="60" stroke="hsl(var(--muted-foreground))" strokeWidth="2" opacity="0.3" />
                                    <line x1="20" y1="90" x2="160" y2="90" stroke="hsl(var(--muted-foreground))" strokeWidth="2" opacity="0.3" />
                                    <line x1="20" y1="120" x2="180" y2="120" stroke="hsl(var(--muted-foreground))" strokeWidth="2" opacity="0.3" />
                                    <line x1="20" y1="150" x2="170" y2="150" stroke="hsl(var(--muted-foreground))" strokeWidth="2" opacity="0.3" />

                                    {/* Signature */}
                                    <path
                                        d="M40 250 Q60 230 80 250 T120 250"
                                        fill="none"
                                        stroke="hsl(var(--primary))"
                                        strokeWidth="3"
                                        strokeDasharray="100"
                                        style={{ animation: "signaturePen 4s ease-in-out infinite" }}
                                    />
                                </g>

                                {/* Seal Press Machine */}
                                <g transform="translate(200, 200) scale(1.2)" style={{ animation: "sealPress 4s ease-in-out infinite" }}>
                                    {/* Handle */}
                                    <path d="M80 -80 L0 -80 Q-20 -80 -20 -60 L-20 0" fill="none" stroke="hsl(var(--foreground))" strokeWidth="8" strokeLinecap="round" />
                                    <circle cx="80" cy="-80" r="10" fill="hsl(var(--accent))" />

                                    {/* Pess Head */}
                                    <rect x="-30" y="-20" width="60" height="40" rx="5" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
                                    <rect x="-10" y="20" width="20" height="40" fill="hsl(var(--muted))" />

                                    {/* Stamp Base */}
                                    <path d="M-40 60 L40 60 L30 80 L-30 80 Z" fill="hsl(var(--accent))" />
                                </g>

                                {/* Wax Seal Appearing */}
                                <g transform="translate(250, 300)" style={{ animation: "waxMelt 4s ease-in-out infinite" }}>
                                    <circle cx="0" cy="0" r="25" fill="hsl(var(--destructive))" />
                                    <circle cx="0" cy="0" r="20" fill="none" stroke="hsl(var(--background))" strokeWidth="2" opacity="0.5" />
                                    <path d="M-10 0 L10 0 M0 -10 L0 10" stroke="hsl(var(--background))" strokeWidth="2" opacity="0.5" />
                                </g>

                                <defs>
                                    <linearGradient id="gradient-paper" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="hsl(var(--card))" />
                                        <stop offset="100%" stopColor="hsl(var(--background))" />
                                    </linearGradient>
                                    <linearGradient id="gradient-border" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="hsl(var(--border))" />
                                        <stop offset="100%" stopColor="transparent" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Floating Card */}
                            <div className="absolute top-10 -left-6 glass px-4 py-3 rounded-xl border border-primary/30 shadow-lg animate-float">
                                <div className="flex items-center gap-3">
                                    <FileSignature className="w-5 h-5 text-primary" />
                                    <div>
                                        <div className="text-xs text-muted-foreground">Acte prêt</div>
                                        <div className="text-sm font-bold text-primary">Signature 14h</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-20 -right-6 glass px-4 py-3 rounded-xl border border-accent/30 shadow-lg animate-float" style={{ animationDelay: "1.5s" }}>
                                <div className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-accent" />
                                    <div>
                                        <div className="text-xs text-muted-foreground">Rappel</div>
                                        <div className="text-sm font-bold text-accent">Envoyé</div>
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
