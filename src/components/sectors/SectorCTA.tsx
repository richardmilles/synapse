import { ArrowUpRight } from "lucide-react";

export interface SectorCTAProps {
    sectorName: string;
    headline?: string;
    subheadline?: string;
    trustIndicators?: string[];
    ctaText?: string;
    ctaLink?: string;
}

export const SectorCTA = ({
    sectorName,
    headline = "Prêt à transformer votre activité ?",
    subheadline,
    trustIndicators = [],
    ctaText = "Demander une démo",
    ctaLink = "https://synapse0.neetocal.com/audit",
}: SectorCTAProps) => (
    <section className="premium-cta">
        <div className="premium-shell premium-cta__inner">
            <div>
                <p className="premium-section-label">{sectorName}</p>
                <h2>{headline}</h2>
            </div>
            <div className="premium-cta__action">
                {subheadline && <p>{subheadline}</p>}
                <a className="premium-button premium-button--ink" href={ctaLink} target="_blank" rel="noopener noreferrer">{ctaText} <ArrowUpRight aria-hidden="true" /></a>
                {trustIndicators.length > 0 && (
                    <p className="premium-cta__note">{trustIndicators.join(" · ")}</p>
                )}
            </div>
        </div>
    </section>
);
