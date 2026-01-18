import { LucideIcon, AlertTriangle } from "lucide-react";

export interface PainPoint {
    icon: LucideIcon;
    title: string;
    description: string;
    stat?: string;
}

export interface SectorPainPointsProps {
    sectorName: string;
    headline?: string;
    subheadline?: string;
    painPoints: PainPoint[];
}

export const SectorPainPoints = ({
    sectorName,
    headline = "La réalité de votre quotidien",
    subheadline,
    painPoints,
}: SectorPainPointsProps) => {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
            <div className="absolute top-1/3 right-0 w-64 h-64 bg-destructive/5 rounded-full blur-[100px]" />

            <div className="container relative z-10 px-4 sm:px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive border border-destructive/20 mb-6">
                        <AlertTriangle className="w-4 h-4" />
                        <span className="text-sm font-semibold">Le problème</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        {headline}
                    </h2>
                    {subheadline && (
                        <p className="text-lg text-foreground/70">
                            {subheadline}
                        </p>
                    )}
                </div>

                {/* Pain Points Grid */}
                <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {painPoints.map((point, index) => (
                        <div
                            key={point.title}
                            className="group relative p-6 rounded-2xl bg-card/30 border border-destructive/10 hover:border-destructive/30 transition-all duration-500 opacity-0 animate-fade-in-up"
                            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                        >
                            {/* Icon */}
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center text-destructive">
                                    <point.icon className="w-6 h-6" />
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-foreground mb-2">
                                        {point.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                                        {point.description}
                                    </p>
                                    {point.stat && (
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-medium">
                                            {point.stat}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
