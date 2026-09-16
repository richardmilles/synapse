import { LucideIcon } from "lucide-react";

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
    headline = "La réalité de votre quotidien",
    subheadline,
    painPoints,
}: SectorPainPointsProps) => (
    <section className="sector-premium-pain">
        <div className="premium-shell">
            <div className="sector-premium-pain__head">
                <p className="premium-section-label">Le problème</p>
                <h2>{headline}</h2>
                {subheadline && <p>{subheadline}</p>}
            </div>
            <div className="sector-premium-pain__grid">
                {painPoints.map((point) => (
                    <article className="sector-premium-pain-card" key={point.title}>
                        <span className="sector-premium-pain-card__icon"><point.icon aria-hidden="true" /></span>
                        <h3>{point.title}</h3>
                        <p>{point.description}</p>
                        {point.stat && <span className="sector-premium-pain-card__stat">{point.stat}</span>}
                    </article>
                ))}
            </div>
        </div>
    </section>
);
