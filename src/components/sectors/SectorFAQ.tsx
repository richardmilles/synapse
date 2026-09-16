export interface FAQ {
    question: string;
    answer: string;
}

export interface SectorFAQProps {
    sectorName: string;
    headline?: string;
    faqs: FAQ[];
}

export const SectorFAQ = ({
    sectorName,
    headline = "Questions fréquentes",
    faqs,
}: SectorFAQProps) => (
    <section className="premium-faq">
        <div className="premium-shell premium-faq__grid">
            <div>
                <p className="premium-section-label">FAQ {sectorName}</p>
                <h2>{headline}</h2>
            </div>
            <div className="premium-faq__list">
                {faqs.map((faq) => (
                    <details className="premium-faq__item" key={faq.question}>
                        <summary>{faq.question}</summary>
                        <p>{faq.answer}</p>
                    </details>
                ))}
            </div>
        </div>
    </section>
);
