import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Phone, AlertTriangle, Wrench } from "lucide-react";
import { useEffect } from "react";

export const DepannageHeroVisuel = () => {
    useEffect(() => {
        // Add unique CSS animations for emergency service
        const style = document.createElement('style');
        style.id = 'depannage-hero-animations';
        style.textContent = `
            @keyframes emergencyPulse {
                0%, 100% { 
                    transform: scale(1);
                    opacity: 1;
                }
                50% { 
                    transform: scale(1.15);
                    opacity: 0.8;
                }
            }
            
            @keyframes phoneRing {
                0%, 100% { transform: rotate(0deg); }
                10%, 30% { transform: rotate(-15deg); }
                20%, 40% { transform: rotate(15deg); }
                50% { transform: rotate(0deg); }
            }
            
            @keyframes sirenFlash {
                0%, 49% { opacity: 0.3; fill: hsl(var(--destructive)); }
                50%, 100% { opacity: 1; fill: hsl(40 95% 60%); }
            }
            
            @keyframes urgentGlow {
                0%, 100% { 
                    box-shadow: 0 0 20px hsla(0, 84%, 60%, 0.3);
                }
                50% { 
                    box-shadow: 0 0 40px hsla(0, 84%, 60%, 0.6), 0 0 60px hsla(40, 95%, 60%, 0.4);
                }
            }
        `;

        if (!document.getElementById('depannage-hero-animations')) {
            document.head.appendChild(style);
        }

        return () => {
            const existingStyle = document.getElementById('depannage-hero-animations');
            if (existingStyle) {
                existingStyle.remove();
            }
        };
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-destructive/20 rounded-full blur-[120px] animate-glow-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-synapse-yellow/20 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "2s" }} />

            <div className="container relative z-10 px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    {/* Left: Content */}
                    <div className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        {/* Badge avec pulsation urgence */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-destructive/20"
                            style={{ animation: "urgentGlow 2s ease-in-out infinite" }}
                        >
                            <AlertTriangle className="w-4 h-4 text-destructive" style={{ animation: "emergencyPulse 1.5s ease-in-out infinite" }} />
                            <span className="text-sm font-medium">Agent vocal dépannage urgence 24/7</span>
                        </div>

                        {/* H1 */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            <span className="text-foreground">Urgence </span>
                            <span className="bg-gradient-to-r from-destructive via-synapse-yellow to-synapse-blue bg-clip-text text-transparent">
                                = Réponse immédiate
                            </span>
                        </h1>

                        {/* Subheadline personnalisé */}
                        <p className="text-lg sm:text-xl text-foreground/70 max-w-xl">
                            <span className="text-destructive font-semibold">Fuite d'eau à 3h du matin</span> ?{" "}
                            <span className="text-primary font-semibold">Panne électrique le dimanche</span> ?
                            Notre <span className="font-semibold">agent vocal dépannage</span> décroche en{" "}
                            <span className="text-secondary font-semibold">3 secondes</span>, qualifie la panne et dispatche le{" "}
                            <span className="font-semibold">technicien le plus proche</span>, 24/7/365.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="glass p-4 rounded-xl border border-destructive/30">
                                <div className="text-2xl font-bold text-destructive mb-1">82%</div>
                                <div className="text-xs text-muted-foreground">Appellent 2-3 dépanneurs</div>
                            </div>
                            <div className="glass p-4 rounded-xl border border-accent/30">
                                <div className="text-2xl font-bold text-accent mb-1">3 sec</div>
                                <div className="text-xs text-muted-foreground">Temps décrochage</div>
                            </div>
                            <div className="glass p-4 rounded-xl border border-primary/30">
                                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                                <div className="text-xs text-muted-foreground">365 jours/an</div>
                            </div>
                        </div>

                        {/* CTA */}
                        <a href="https://koalendar.com/e/meet-with-synapse" target="_blank" rel="noopener noreferrer">
                            <Button variant="hero" size="xl" className="group">
                                Ne manquez plus aucune urgence
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </a>

                        {/* Trust */}
                        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-destructive" />
                                <span>Décrochage instantané</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span>Qualification technique panne</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                <span>Géolocalisation automatique</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Emergency Phone Visual avec animations */}
                    <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                        <div className="relative max-w-lg mx-auto">
                            <div className="relative z-10 aspect-square flex items-center justify-center">
                                <svg viewBox="0 0 400 400" className="w-full drop-shadow-2xl">
                                    {/* Siren lights flashing */}
                                    <circle
                                        cx="200"
                                        cy="80"
                                        r="25"
                                        style={{ animation: "sirenFlash 1s infinite" }}
                                    />
                                    <circle
                                        cx="150"
                                        cy="80"
                                        r="20"
                                        style={{ animation: "sirenFlash 1s infinite 0.5s" }}
                                    />
                                    <circle
                                        cx="250"
                                        cy="80"
                                        r="20"
                                        style={{ animation: "sirenFlash 1s infinite 0.25s" }}
                                    />

                                    {/* Main phone - ringing animation */}
                                    <g style={{ transformOrigin: "200px 200px", animation: "phoneRing 3s ease-in-out infinite" }}>
                                        {/* Phone body */}
                                        <rect
                                            x="140"
                                            y="140"
                                            width="120"
                                            height="180"
                                            rx="20"
                                            fill="url(#gradient-phone-body)"
                                            stroke="url(#gradient-border)"
                                            strokeWidth="3"
                                        />

                                        {/* Screen */}
                                        <rect
                                            x="155"
                                            y="165"
                                            width="90"
                                            height="130"
                                            rx="8"
                                            fill="hsl(var(--background))"
                                            opacity="0.9"
                                        />

                                        {/* Incoming call indicator */}
                                        <circle
                                            cx="200"
                                            cy="230"
                                            r="30"
                                            fill="hsl(var(--destructive))"
                                            opacity="0.2"
                                            style={{ animation: "emergencyPulse 1.5s ease-in-out infinite" }}
                                        />
                                        <path
                                            d="M185 220 Q190 215 195 220 L200 225 L205 220 Q210 215 215 220"
                                            stroke="hsl(var(--destructive))"
                                            strokeWidth="3"
                                            fill="none"
                                            strokeLinecap="round"
                                        />

                                        {/* Time display */}
                                        <text
                                            x="200"
                                            y="195"
                                            textAnchor="middle"
                                            fill="hsl(var(--destructive))"
                                            fontSize="16"
                                            fontWeight="bold"
                                        >
                                            03:24
                                        </text>
                                        <text
                                            x="200"
                                            y="212"
                                            textAnchor="middle"
                                            fill="hsl(var(--muted-foreground))"
                                            fontSize="11"
                                        >
                                            Appel urgent
                                        </text>

                                        {/* Answer button */}
                                        <rect
                                            x="175"
                                            y="270"
                                            width="50"
                                            height="15"
                                            rx="8"
                                            fill="url(#gradient-answer)" style={{ animation: "emergencyPulse 1s ease-in-out infinite" }}
                                        />
                                    </g>

                                    {/* Wave effects */}
                                    <circle
                                        cx="200"
                                        cy="200"
                                        r="180"
                                        fill="none"
                                        stroke="hsl(var(--destructive))"
                                        strokeWidth="2"
                                        opacity="0.3"
                                        style={{ animation: "emergencyPulse 2s ease-in-out infinite" }}
                                    />
                                    <circle
                                        cx="200"
                                        cy="200"
                                        r="160"
                                        fill="none"
                                        stroke="hsl(var(--destructive))"
                                        strokeWidth="2"
                                        opacity="0.2"
                                        style={{ animation: "emergencyPulse 2s ease-in-out infinite 0.3s" }}
                                    />

                                    {/* Gradients */}
                                    <defs>
                                        <linearGradient id="gradient-phone-body" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="hsl(var(--destructive))" />
                                            <stop offset="100%" stopColor="hsl(40 95% 60%)" />
                                        </linearGradient>
                                        <linearGradient id="gradient-border" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="hsl(var(--primary))" />
                                            <stop offset="100%" stopColor="hsl(var(--destructive))" />
                                        </linearGradient>
                                        <linearGradient id="gradient-answer" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="hsl(120 100% 40%)" />
                                            <stop offset="100%" stopColor="hsl(150 100% 50%)" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            {/* Floating stats */}
                            <div className="absolute top-12 -left-8 glass px-4 py-3 rounded-xl border border-destructive/30 shadow-lg animate-float">
                                <div className="flex items-center gap-2">
                                    <Wrench className="w-4 h-4 text-destructive" />
                                    <div>
                                        <div className="text-xs text-muted-foreground">Type urgence</div>
                                        <div className="text-sm font-bold text-destructive">Plomberie</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-12 -right-8 glass px-4 py-3 rounded-xl border border-primary/30 shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-primary" />
                                    <div>
                                        <div className="text-xs text-muted-foreground">Technicien ETA</div>
                                        <div className="text-sm font-bold text-primary">12 min</div>
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
