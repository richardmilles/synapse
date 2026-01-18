import { useState } from "react";
import { Calculator, TrendingUp, Hammer, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export const RenovationEstimateurProjets = () => {
    const [demandesMois, setDemandesMois] = useState([20]);
    const [tauxRappel, setTauxRappel] = useState([40]);
    const [panierMoyen, setPanierMoyen] = useState([45000]);

    // Calculations
    const demandesAnnuelles = demandesMois[0] * 12;
    const demandesRappelees = Math.round((demandesAnnuelles * tauxRappel[0]) / 100);
    const demandesManquees = demandesAnnuelles - demandesRappelees;

    // Taux conversion actuel  (12% sur rappelées)
    const chantiersActuels = Math.round(demandesRappelees * 0.12);

    // Avec IA: 100% de rappel, 30% de conversion
    const chantiersAvecIA = Math.round(demandesAnnuelles * 0.30);
    const chantiersGagnes = chantiersAvecIA - chantiersActuels;

    const caActuel = chantiersActuels * panierMoyen[0];
    const caAvecIA = chantiersAvecIA * panierMoyen[0];
    const caGagne = caAvecIA - caActuel;

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />

            <div className="container relative z-10 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 mb-6">
                            <Calculator className="w-4 h-4" />
                            <span className="text-sm font-semibold">Estimateur chiffre d'affaires perdu</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                            Combien de{" "}
                            <span className="bg-gradient-to-r from-synapse-blue via-synapse-yellow to-synapse-accent bg-clip-text text-transparent">
                                chantiers manqués
                            </span>{" "}
                            ?
                        </h2>

                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Calculez votre <span className="font-semibold text-foreground">manque à gagner annuel</span> dû aux rappels tardifs.
                            L'<span className="font-semibold text-foreground">agent vocal rénovation</span> rappelle en{" "}
                            <span className="font-semibold text-foreground">15 minutes</span> et convertit{" "}
                            <span className="font-semibold text-primary">30% des prospects</span> en chantiers signés.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Left: Inputs */}
                        <div className="glass rounded-3xl p-8 space-y-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                                    <Hammer className="w-5 h-5 text-primary" />
                                    Votre activité
                                </h3>

                                {/* Slider 1 */}
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium">Demandes devis / mois</label>
                                        <span className="text-2xl font-bold text-primary">{demandesMois[0]}</span>
                                    </div>
                                    <Slider
                                        value={demandesMois}
                                        onValueChange={setDemandesMois}
                                        min={5}
                                        max={100}
                                        step={5}
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        Formulaires web, appels entrants, recommandations
                                    </p>
                                </div>

                                {/* Slider 2 */}
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium">Taux de rappel (%)</label>
                                        <span className="text-2xl font-bold text-destructive">{tauxRappel[0]}%</span>
                                    </div>
                                    <Slider
                                        value={tauxRappel}
                                        onValueChange={setTauxRappel}
                                        min={20}
                                        max={100}
                                        step={5}
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        % de prospects que vous réussissez à rappeler (chantiers en cours, congés, etc.)
                                    </p>
                                </div>

                                {/* Slider 3 */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium">Panier moyen (€)</label>
                                        <span className="text-2xl font-bold text-primary">{panierMoyen[0].toLocaleString()} €</span>
                                    </div>
                                    <Slider
                                        value={panierMoyen}
                                        onValueChange={setPanierMoyen}
                                        min={5000}
                                        max={150000}
                                        step={5000}
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        CA moyen par chantier (rénovation complète, cuisine, SDB, etc.)
                                    </p>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                                <p className="text-sm text-foreground">
                                    <span className="font-semibold">Hypothèse :</span> Taux conversion 12% en rappel tardif, 30% avec rappel {"<"} 1h.
                                </p>
                            </div>
                        </div>

                        {/* Right: Results */}
                        <div className="space-y-6">
                            {/* Current */}
                            <div className="glass rounded-3xl p-8 border border-border/50">
                                <h3 className="text-lg font-semibold mb-6">Situation actuelle</h3>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                                        <span className="text-sm">Demandes annuelles</span>
                                        <span className="text-xl font-bold">{demandesAnnuelles}</span>
                                    </div>

                                    <div className="flex items-center justify-between p-4 rounded-xl bg-primary/10">
                                        <span className="text-sm">Rappelées ({tauxRappel[0]}%)</span>
                                        <span className="text-xl font-bold text-primary">{demandesRappelees}</span>
                                    </div>

                                    <div className="flex items-center justify-between p-4 rounded-xl bg-destructive/10">
                                        <span className="text-sm">Non rappelées</span>
                                        <span className="text-xl font-bold text-destructive">{demandesManquees}</span>
                                    </div>

                                    <div className="pt-4 border-t border-border/50">
                                        <div className="mb-4">
                                            <div className="text-sm text-muted-foreground mb-1">Chantiers signés (12% conv.)</div>
                                            <div className="text-3xl font-bold text-primary">{chantiersActuels}</div>
                                        </div>

                                        <div className="p-4 rounded-xl bg-primary/10">
                                            <div className="text-xs text-muted-foreground mb-1">CA annuel</div>
                                            <div className="text-2xl font-bold text-primary">{caActuel.toLocaleString()} €</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* With AI */}
                            <div className="glass rounded-3xl p-8 border border-primary/30 shadow-[0_0_30px_hsl(210_100%_60%/0.1)]">
                                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-primary" />
                                    Avec agent vocal IA
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 rounded-xl bg-primary/10">
                                        <span className="text-sm font-medium">Taux rappel</span>
                                        <span className="text-2xl font-bold text-primary">100%</span>
                                    </div>

                                    <div className="flex items-center justify-between p-4 rounded-xl bg-primary/10">
                                        <span className="text-sm font-medium">Chantiers gagnés</span>
                                        <span className="text-2xl font-bold text-primary">+{chantiersGagnes}</span>
                                    </div>

                                    <div className="pt-4 border-t border-primary/20">
                                        <div className="mb-2">
                                            <div className="text-sm text-muted-foreground mb-1">CA actuel</div>
                                            <div className="text-2xl font-bold text-foreground">{caActuel.toLocaleString()} €</div>
                                        </div>

                                        <div className="mb-4 p-4 rounded-xl bg-destructive/10">
                                            <div className="text-xs text-muted-foreground mb-1">CA perdu (prospects non rappelés)</div>
                                            <div className="text-xl font-bold text-destructive">-{(caGagne).toLocaleString()} €</div>
                                        </div>

                                        <div className="mb-6 p-4 rounded-xl bg-primary/20">
                                            <div className="text-xs text-muted-foreground mb-1">CA potentiel avec IA</div>
                                            <div className="text-3xl font-bold text-primary">{caAvecIA.toLocaleString()} €</div>
                                            <div className="text-xs text-primary mt-1">
                                                +{((caGagne / caActuel) * 100).toFixed(0)}% de croissance
                                            </div>
                                        </div>

                                        <a href="https://koalendar.com/e/meet-with-synapse" target="_blank" rel="noopener noreferrer">
                                            <Button variant="hero" size="lg" className="w-full group">
                                                Récupérer ces chantiers
                                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SEO Footer */}
                    <div className="mt-12 text-center max-w-3xl mx-auto">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Ce <span className="font-semibold text-foreground">calculateur ROI entreprise rénovation</span> estime le{" "}
                            <span className="font-semibold text-foreground">coût opportunité chantiers perdus</span>. L'
                            <span className="font-semibold text-foreground">automatisation prospection travaux</span> et la{" "}
                            <span className="font-semibold text-foreground">qualification projet rénovation immédiate</span> maximisent votre{" "}
                            <span className="font-semibold text-foreground">taux transformation devis rénovation</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
