import { ArrowRight, ArrowUpRight, BarChart3, LucideIcon } from "lucide-react";

export interface SectorHeroProps {
  sectorName: string;
  headline: string;
  subheadline: string;
  badges: Array<{ icon?: LucideIcon; text: string }>;
  ctaText?: string;
  ctaLink?: string;
}

export const SectorHero = ({ sectorName, headline, subheadline, badges, ctaText = "Évaluer le potentiel", ctaLink = "https://synapse0.neetocal.com/audit" }: SectorHeroProps) => (
  <section className="sector-premium-hero">
    <div className="sector-premium-hero__grid" aria-hidden="true" />
    <div className="premium-shell sector-premium-hero__inner">
      <div className="sector-premium-hero__content">
        <p className="premium-kicker"><span /> Solutions numériques pour {sectorName}</p>
        <h1>{headline}</h1>
        <p className="sector-premium-hero__lead">{subheadline}</p>
        <div className="sector-premium-hero__actions">
          <a className="premium-button premium-button--lime" href={ctaLink} target="_blank" rel="noopener noreferrer">{ctaText}<ArrowUpRight /></a>
          <a className="premium-text-link" href="#solution">Voir la solution <ArrowRight /></a>
        </div>
        <div className="sector-premium-hero__badges">{badges.map((badge) => <span key={badge.text}>{badge.icon && <badge.icon />}{badge.text}</span>)}</div>
      </div>
      <div className="sector-premium-hero__visual" aria-hidden="true">
        <div className="sector-dashboard">
          <div className="sector-dashboard__top"><span>Activité en temps réel</span><i /></div>
          <div className="sector-dashboard__number"><small>Demandes traitées</small><strong>1 284</strong><em>+24%</em></div>
          <div className="sector-dashboard__chart"><i style={{height:"32%"}} /><i style={{height:"46%"}} /><i style={{height:"40%"}} /><i style={{height:"68%"}} /><i style={{height:"82%"}} /><i style={{height:"94%"}} /></div>
          <div className="sector-dashboard__footer"><span><BarChart3 />Performance</span><b>Cette semaine</b></div>
        </div>
        <div className="sector-dashboard-card"><span>Temps de réponse</span><strong>48 sec</strong><em>Optimisé</em></div>
      </div>
    </div>
  </section>
);
