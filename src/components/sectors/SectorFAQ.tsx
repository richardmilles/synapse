import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

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
}: SectorFAQProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-muted/20" />

            <div className="container relative z-10 px-4 sm:px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 mb-6">
                        <HelpCircle className="w-4 h-4" />
                        <span className="text-sm font-semibold">FAQ {sectorName}</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        {headline}
                    </h2>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="glass rounded-2xl overflow-hidden opacity-0 animate-fade-in-up"
                            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-card/50 transition-colors duration-300"
                            >
                                <span className="font-semibold text-foreground pr-4">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
