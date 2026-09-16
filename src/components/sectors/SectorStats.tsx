import { TrendingUp } from "lucide-react";

export interface Stat { value: string; label: string; highlight?: boolean }
export interface SectorStatsProps { sectorName: string; headline?: string; stats: Stat[] }

export const SectorStats = ({ headline = "Les chiffres parlent d'eux-mêmes", stats }: SectorStatsProps) => (
  <section className="sector-premium-stats">
    <div className="premium-shell">
      <div className="sector-premium-stats__head"><p className="premium-section-label">Impact business</p><h2>{headline}</h2><TrendingUp /></div>
      <div className="sector-premium-stats__grid">
        {stats.map((stat, index) => <article className={stat.highlight ? "is-highlight" : ""} key={stat.label}><span>0{index + 1}</span><strong>{stat.value}</strong><p>{stat.label}</p></article>)}
      </div>
    </div>
  </section>
);
