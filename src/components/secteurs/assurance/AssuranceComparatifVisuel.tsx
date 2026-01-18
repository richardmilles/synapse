import { Shield, Coins, ThumbsUp, X, Check } from "lucide-react";

export const AssuranceComparatifVisuel = () => {
    const offers = [
        {
            name: "Standard",
            price: "850€",
            coverage: "RC Pro",
            franchise: "1500€",
            support: "Email",
            recommended: false,
            color: "border-border",
        },
        {
            name: "Premium (Recommandé)",
            price: "1150€",
            coverage: "RC + Exploitation + Défense",
            franchise: "500€",
            support: "24/7 Dédié",
            recommended: true,
            color: "border-primary shadow-[0_0_30px_rgba(var(--primary),0.3)] scale-105",
        },
        {
            name: "Eco",
            price: "600€",
            coverage: "RC Pro seule",
            franchise: "2500€",
            support: "Ticket J+2",
            recommended: false,
            color: "border-border",
        },
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container px-4 sm:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4">
                        Des comparatifs <span className="text-primary">clairs</span> qui transforment
                    </h2>
                    <p className="text-muted-foreground">
                        L'IA analyse le profil du client et lui présente 3 offres personnalisées en 2 minutes. Plus de jargon, juste les infos clés pour décider.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
                    {offers.map((offer, index) => (
                        <div
                            key={index}
                            className={`glass p-6 rounded-2xl border ${offer.color} relative flex flex-col gap-6 transition-all hover:-translate-y-2`}
                        >
                            {offer.recommended && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                                    <ThumbsUp className="w-4 h-4" />
                                    Meilleur Choix IA
                                </div>
                            )}

                            <div className="text-center pb-6 border-b border-border/50">
                                <h3 className="font-semibold text-muted-foreground mb-2">{offer.name}</h3>
                                <div className="text-4xl font-bold">{offer.price}</div>
                                <div className="text-xs text-muted-foreground">/ an</div>
                            </div>

                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Garanties</span>
                                    <span className="font-medium text-right">{offer.coverage}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Franchise</span>
                                    <span className="font-bold text-destructive">{offer.franchise}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Support</span>
                                    <span className="font-medium text-right">{offer.support}</span>
                                </div>
                            </div>

                            <button className={`w-full py-3 rounded-lg font-bold transition-colors ${offer.recommended
                                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                                }`}>
                                Choisir cette offre
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center justify-center gap-8 glass px-8 py-4 rounded-full border border-primary/20">
                        <div className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-synapse-green" />
                            <span className="font-medium">Comparatif généré en 2min</span>
                        </div>
                        <div className="h-4 w-px bg-border" />
                        <div className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-synapse-green" />
                            <span className="font-medium">Envoi PDF instantané</span>
                        </div>
                        <div className="h-4 w-px bg-border text-primary" />
                        <div className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-synapse-green" />
                            <span className="font-medium">Relance automatique</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
