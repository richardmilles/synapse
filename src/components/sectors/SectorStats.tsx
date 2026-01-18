import { TrendingUp } from "lucide-react";

export interface Stat {
    value: string;
    label: string;
    highlight?: boolean;
}

export interface SectorStatsProps {
    sectorName: string;
    headline?: string;
    stats: Stat[];
}

export const SectorStats = ({
    sectorName,
    headline = "Les chiffres parlent d'eux-mêmes",
    stats,
}: SectorStatsProps) => {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-synapse-yellow/5 rounded-full blur-[120px]" />

            <div className="container relative z-10 px-4 sm:px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 mb-6">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-sm font-semibold">Statistiques secteur</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        {headline}
                    </h2>
                </div>

                {/* Stats Grid */}
                <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className={`text-center p-8 rounded-2xl opacity-0 animate-fade-in-up ${stat.highlight
                                    ? "bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/30"
                                    : "bg-card/30 border border-border/50"
                                }`}
                            style={{ animationDelay: `${0.2 + index * 0.15}s` }}
                        >
                            <div className={`text-4xl sm:text-5xl font-bold mb-3 ${stat.highlight
                                    ? "text-gradient-primary"
                                    : "bg-gradient-to-r from-synapse-violet to-synapse-blue bg-clip-text text-transparent"
                                }`}>
                                {stat.value}
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
