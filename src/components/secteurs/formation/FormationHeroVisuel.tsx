import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Users, BookOpen, Clock } from "lucide-react";
import { useEffect } from "react";

export const FormationHeroVisuel = () => {
    useEffect(() => {
        const style = document.createElement('style');
        style.id = 'formation-hero-animations';
        style.textContent = `
            @keyframes capToss {
                0% { transform: translateY(0) rotate(0); }
                40% { transform: translateY(-300px) rotate(180deg); }
                50% { transform: translateY(-320px) rotate(190deg); }
                100% { transform: translateY(-50px) rotate(360deg); }
            }
            
            @keyframes slideInRight {
                from { transform: translateX(100px); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }

             @keyframes pageFlip {
                0%, 100% { transform: rotateY(0deg); }
                50% { transform: rotateY(-180deg); }
            }

            @keyframes progressFill {
                from { width: 0%; }
                to { width: 100%; }
            }
        `;

        if (!document.getElementById('formation-hero-animations')) {
            document.head.appendChild(style);
        }

        return () => {
            const existingStyle = document.getElementById('formation-hero-animations');
            if (existingStyle) existingStyle.remove();
        };
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-synapse-violet/20 rounded-full blur-[120px] animate-glow-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "2s" }} />

            <div className="container relative z-10 px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    <div className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20">
                            <BookOpen className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium">Assistant formation & CPF 24/7</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            <span className="text-foreground">Remplissez vos </span>
                            <span className="bg-gradient-to-r from-synapse-violet via-primary to-accent bg-clip-text text-transparent">
                                sessions sans effort
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-foreground/70 max-w-xl">
                            <span className="text-primary font-semibold">Taux de no-show trop élevé</span> ?{" "}
                            <span className="text-accent font-semibold">Dossiers CPF qui traînent</span> ?
                            Votre <span className="font-semibold">équipe IA</span> qualifie les apprenants,
                            vérifie leur éligibilité <span className="text-secondary font-semibold">en direct</span> et maximise votre taux de remplissage.
                        </p>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="glass p-4 rounded-xl border border-primary/30">
                                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                                <div className="text-xs text-muted-foreground">Sessions pleines</div>
                            </div>
                            <div className="glass p-4 rounded-xl border border-accent/30">
                                <div className="text-2xl font-bold text-accent mb-1">&lt; 2min</div>
                                <div className="text-xs text-muted-foreground">Verif CPF</div>
                            </div>
                            <div className="glass p-4 rounded-xl border border-secondary/30">
                                <div className="text-2xl font-bold text-secondary mb-1">24/7</div>
                                <div className="text-xs text-muted-foreground">Support élèves</div>
                            </div>
                        </div>

                        <a href="https://koalendar.com/e/meet-with-synapse" target="_blank" rel="noopener noreferrer">
                            <Button variant="hero" size="xl" className="group">
                                Booster mes inscriptions
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </a>

                        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span>Relance dossiers incomplets</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                <span>Convocation automatique</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                <span>Gestion absences</span>
                            </div>
                        </div>
                    </div>

                    {/* Education SVG Animation */}
                    <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                        <div className="relative max-w-lg mx-auto">
                            <svg viewBox="0 0 400 400" className="w-full drop-shadow-2xl">
                                {/* Podium */}
                                <rect x="50" y="300" width="300" height="20" fill="hsl(var(--muted))" rx="5" />

                                {/* Students */}
                                <g transform="translate(100, 300)">
                                    <circle cx="0" cy="-30" r="20" fill="hsl(var(--primary))" opacity="0.8" />
                                    <path d="M-20 -10 Q0 -40 20 -10 L20 40 L-20 40 Z" fill="hsl(var(--primary))" opacity="0.5" />
                                </g>
                                <g transform="translate(200, 300)">
                                    <circle cx="0" cy="-40" r="25" fill="hsl(var(--accent))" />
                                    <path d="M-25 -15 Q0 -50 25 -15 L25 40 L-25 40 Z" fill="hsl(var(--accent))" opacity="0.6" />
                                </g>
                                <g transform="translate(300, 300)">
                                    <circle cx="0" cy="-30" r="20" fill="hsl(var(--secondary))" opacity="0.8" />
                                    <path d="M-20 -10 Q0 -40 20 -10 L20 40 L-20 40 Z" fill="hsl(var(--secondary))" opacity="0.5" />
                                </g>

                                {/* Tossed Caps */}
                                <g transform="translate(200, 250)">
                                    <g style={{ animation: "capToss 4s ease-out infinite" }}>
                                        <path d="M-30 0 L0 -10 L30 0 L0 10 Z" fill="hsl(var(--foreground))" />
                                        <rect x="-15" y="-5" width="30" height="15" fill="hsl(var(--foreground))" rx="2" />
                                        <path d="M30 0 Q35 15 30 25" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
                                    </g>
                                </g>
                                <g transform="translate(100, 250)">
                                    <g style={{ animation: "capToss 4s ease-out infinite 0.5s" }}>
                                        <path d="M-30 0 L0 -10 L30 0 L0 10 Z" fill="hsl(var(--foreground))" />
                                        <rect x="-15" y="-5" width="30" height="15" fill="hsl(var(--foreground))" rx="2" />
                                        <path d="M30 0 Q35 15 30 25" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
                                    </g>
                                </g>
                                <g transform="translate(300, 250)">
                                    <g style={{ animation: "capToss 4s ease-out infinite 1s" }}>
                                        <path d="M-30 0 L0 -10 L30 0 L0 10 Z" fill="hsl(var(--foreground))" />
                                        <rect x="-15" y="-5" width="30" height="15" fill="hsl(var(--foreground))" rx="2" />
                                        <path d="M30 0 Q35 15 30 25" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
                                    </g>
                                </g>

                                {/* Flying Book/Page */}
                                <g transform="translate(50, 100)" style={{ animation: "pageFlip 5s linear infinite" }}>
                                    <rect x="0" y="0" width="40" height="50" fill="white" stroke="hsl(var(--border))" />
                                    <line x1="5" y1="10" x2="35" y2="10" stroke="hsl(var(--muted-foreground))" />
                                    <line x1="5" y1="20" x2="35" y2="20" stroke="hsl(var(--muted-foreground))" />
                                    <line x1="5" y1="30" x2="25" y2="30" stroke="hsl(var(--muted-foreground))" />
                                </g>

                            </svg>

                            {/* Floating Card */}
                            <div className="absolute top-10 -left-6 glass px-4 py-3 rounded-xl border border-primary/30 shadow-lg animate-float">
                                <div className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-primary" />
                                    <div>
                                        <div className="text-xs text-muted-foreground">Session A</div>
                                        <div className="text-sm font-bold text-primary">Complet</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-20 -right-6 glass px-4 py-3 rounded-xl border border-accent/30 shadow-lg animate-float" style={{ animationDelay: "1.5s" }}>
                                <div className="flex items-center gap-3">
                                    <GraduationCap className="w-5 h-5 text-accent" />
                                    <div>
                                        <div className="text-xs text-muted-foreground">Inscrits</div>
                                        <div className="text-sm font-bold text-accent">+30%</div>
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
