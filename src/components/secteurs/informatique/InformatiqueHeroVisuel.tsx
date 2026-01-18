import { Button } from "@/components/ui/button";
import { ArrowRight, Server, ShieldCheck, Code, Cpu } from "lucide-react";
import { useEffect } from "react";

export const InformatiqueHeroVisuel = () => {
    useEffect(() => {
        const style = document.createElement('style');
        style.id = 'info-hero-animations';
        style.textContent = `
            @keyframes dataFlow {
                0% { stroke-dashoffset: 100; }
                100% { stroke-dashoffset: 0; }
            }
            
            @keyframes serverPulse {
                0%, 100% { opacity: 0.5; filter: drop-shadow(0 0 5px rgba(var(--primary), 0.5)); }
                50% { opacity: 1; filter: drop-shadow(0 0 15px rgba(var(--primary), 0.8)); }
            }

            @keyframes codeTyping {
                0% { width: 0; }
                50% { width: 100%; }
                90% { width: 100%; }
                100% { width: 0; }
            }

            @keyframes bugZap {
                0% { opacity: 1; transform: scale(1); }
                40% { opacity: 1; transform: scale(1.2) rotate(10deg); }
                50% { opacity: 0; transform: scale(0); }
                100% { opacity: 0; }
            }
        `;

        if (!document.getElementById('info-hero-animations')) {
            document.head.appendChild(style);
        }

        return () => {
            const existingStyle = document.getElementById('info-hero-animations');
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
                            <Cpu className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium">Support IT & Helpdesk IA 24/7</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            <span className="text-foreground">Automatisez votre </span>
                            <span className="bg-gradient-to-r from-synapse-blue via-primary to-accent bg-clip-text text-transparent">
                                Niveau 1
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-foreground/70 max-w-xl">
                            <span className="text-primary font-semibold">Techs noyés sous les tickets password</span> ?{" "}
                            <span className="text-accent font-semibold">SLA non respectés</span> ?
                            Votre <span className="font-semibold">technicien IA</span> qualifie l'incident,
                            résout les cas simples <span className="text-secondary font-semibold">sans intervention</span> et route les cas complexes
                            vers l'expert compétent.
                        </p>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="glass p-4 rounded-xl border border-primary/30">
                                <div className="text-2xl font-bold text-primary mb-1">-95%</div>
                                <div className="text-xs text-muted-foreground">Tickets N1</div>
                            </div>
                            <div className="glass p-4 rounded-xl border border-accent/30">
                                <div className="text-2xl font-bold text-accent mb-1">0s</div>
                                <div className="text-xs text-muted-foreground">Temps attente</div>
                            </div>
                            <div className="glass p-4 rounded-xl border border-secondary/30">
                                <div className="text-2xl font-bold text-secondary mb-1">x3</div>
                                <div className="text-xs text-muted-foreground">Productivité</div>
                            </div>
                        </div>

                        <a href="https://koalendar.com/e/meet-with-synapse" target="_blank" rel="noopener noreferrer">
                            <Button variant="hero" size="xl" className="group">
                                Libérer mes techs
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </a>

                        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span>Diagnostic pré-qualifié</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                <span>Reset password auto</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                <span>Escalade intelligente</span>
                            </div>
                        </div>
                    </div>

                    {/* Server Rack & Data Flow Animation */}
                    <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                        <div className="relative max-w-lg mx-auto">
                            <svg viewBox="0 0 400 400" className="w-full drop-shadow-2xl">
                                {/* Server Rack */}
                                <rect x="100" y="50" width="200" height="300" rx="10" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />

                                {/* Server Units */}
                                {[0, 1, 2, 3, 4].map((i) => (
                                    <g key={i} transform={`translate(110, ${70 + i * 55})`}>
                                        <rect width="180" height="40" rx="4" fill="hsl(var(--muted))" stroke="hsl(var(--border))" />
                                        {/* Blinking lights */}
                                        <circle cx="20" cy="20" r="4" fill="hsl(var(--synapse-green))" style={{ animation: `serverPulse ${0.5 + Math.random()}s infinite alternate` }} />
                                        <circle cx="35" cy="20" r="4" fill="hsl(var(--synapse-blue))" style={{ animation: `serverPulse ${0.5 + Math.random()}s infinite alternate` }} />
                                        {[1, 2, 3, 4, 5, 6].map(j => (
                                            <rect key={j} x={60 + j * 15} y="15" width="10" height="10" fill="hsl(var(--border))" opacity="0.5" />
                                        ))}
                                    </g>
                                ))}

                                {/* Connecting Lines (Cables) */}
                                <path
                                    d="M50 200 L110 200 M50 200 L50 380 Q50 400 70 400 L330 400 Q350 400 350 380 L350 200 L290 200"
                                    fill="none"
                                    stroke="hsl(var(--primary))"
                                    strokeWidth="2"
                                    opacity="0.3"
                                />

                                {/* Flying Packets */}
                                <circle cx="50" cy="200" r="5" fill="hsl(var(--accent))">
                                    <animateMotion path="M0 0 L60 0" dur="1s" repeatCount="indefinite" />
                                </circle>

                                {/* Bug Zapping (Resolution) */}
                                <g transform="translate(320, 100)" style={{ animation: "bugZap 3s infinite" }}>
                                    <path d="M-10 -10 L10 10 M-10 10 L10 -10" stroke="hsl(var(--destructive))" strokeWidth="4" />
                                    <circle cx="0" cy="0" r="15" fill="none" stroke="hsl(var(--destructive))" strokeWidth="2" />
                                </g>

                            </svg>

                            {/* Floating Card */}
                            <div className="absolute top-10 -left-6 glass px-4 py-3 rounded-xl border border-primary/30 shadow-lg animate-float">
                                <div className="flex items-center gap-3">
                                    <Server className="w-5 h-5 text-primary" />
                                    <div>
                                        <div className="text-xs text-muted-foreground">Uptime</div>
                                        <div className="text-sm font-bold text-primary">99.99%</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-20 -right-6 glass px-4 py-3 rounded-xl border border-accent/30 shadow-lg animate-float" style={{ animationDelay: "1.5s" }}>
                                <div className="flex items-center gap-3">
                                    <ShieldCheck className="w-5 h-5 text-accent" />
                                    <div>
                                        <div className="text-xs text-muted-foreground">Ticket résolu</div>
                                        <div className="text-sm font-bold text-accent">Auto</div>
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
