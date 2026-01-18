import { LucideIcon, CheckCircle2, Sparkles } from "lucide-react";

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface DialogExchange {
    role: "client" | "agent";
    text: string;
}

export interface SectorSolutionProps {
    sectorName: string;
    headline?: string;
    subheadline?: string;
    features: Feature[];
    dialogExample?: {
        context: string;
        exchanges: DialogExchange[];
    };
}

export const SectorSolution = ({
    sectorName,
    headline = "Notre solution pour vous",
    subheadline,
    features,
    dialogExample,
}: SectorSolutionProps) => {
    return (
        <section id="solution" className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-muted/20" />
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-synapse-violet/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-synapse-blue/10 rounded-full blur-[80px]" />

            <div className="container relative z-10 px-4 sm:px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-semibold">La solution</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        {headline.split(" ").slice(0, -2).join(" ")}{" "}
                        <span className="bg-gradient-to-r from-synapse-violet to-synapse-blue bg-clip-text text-transparent">
                            {headline.split(" ").slice(-2).join(" ")}
                        </span>
                    </h2>
                    {subheadline && (
                        <p className="text-lg text-foreground/70">
                            {subheadline}
                        </p>
                    )}
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* Features List */}
                    <div className="space-y-6">
                        {features.map((feature, index) => (
                            <div
                                key={feature.title}
                                className="group flex items-start gap-4 p-5 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-500 opacity-0 animate-slide-in-left"
                                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="w-6 h-6" />
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Dialog Example */}
                    {dialogExample && (
                        <div className="opacity-0 animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
                            <div className="glass rounded-3xl p-6 border border-border/50">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-destructive" />
                                    <div className="w-3 h-3 rounded-full bg-accent" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                    <span className="ml-2 text-xs text-muted-foreground">Exemple de conversation</span>
                                </div>

                                <p className="text-xs text-muted-foreground mb-4 italic">
                                    {dialogExample.context}
                                </p>

                                <div className="space-y-4">
                                    {dialogExample.exchanges.map((exchange, index) => (
                                        <div
                                            key={index}
                                            className={`flex ${exchange.role === "agent" ? "justify-start" : "justify-end"}`}
                                        >
                                            <div
                                                className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${exchange.role === "agent"
                                                        ? "bg-primary/20 text-foreground rounded-bl-sm"
                                                        : "bg-muted text-foreground rounded-br-sm"
                                                    }`}
                                            >
                                                <span className="block text-xs text-muted-foreground mb-1">
                                                    {exchange.role === "agent" ? "🤖 Agent IA" : "👤 Client"}
                                                </span>
                                                {exchange.text}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
