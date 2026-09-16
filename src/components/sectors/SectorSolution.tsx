import { LucideIcon } from "lucide-react";

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
    headline = "Notre solution pour vous",
    subheadline,
    features,
    dialogExample,
}: SectorSolutionProps) => (
    <section id="solution" className="sector-premium-solution">
        <div className="premium-shell">
            <div className="sector-premium-solution__head">
                <p className="premium-section-label">La solution</p>
                <h2>{headline}</h2>
                {subheadline && <p>{subheadline}</p>}
            </div>

            <div className="sector-premium-solution__grid">
                <div className="sector-premium-solution__features">
                    {features.map((feature) => (
                        <div className="sector-premium-feature" key={feature.title}>
                            <span className="sector-premium-feature__icon"><feature.icon aria-hidden="true" /></span>
                            <div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {dialogExample && (
                    <div className="sector-premium-chat">
                        <div className="sector-premium-chat__top"><i /><i /><i /><span>Exemple d’échange</span></div>
                        <p className="sector-premium-chat__context">{dialogExample.context}</p>
                        <div className="sector-premium-chat__list">
                            {dialogExample.exchanges.map((exchange, index) => (
                                <div className={`sector-premium-chat__row sector-premium-chat__row--${exchange.role}`} key={index}>
                                    <div className="sector-premium-chat__bubble">
                                        <span>{exchange.role === "agent" ? "Agent IA" : "Client"}</span>
                                        {exchange.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    </section>
);
