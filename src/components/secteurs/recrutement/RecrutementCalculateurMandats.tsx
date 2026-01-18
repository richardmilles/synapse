import { useState } from "react";
import { Calculator, TrendingUp, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export const RecrutementCalculateurMandats = () => {
    const [placementsMois, setPlacementsMois] = useState([5]);
    const [tauxRappel, setTauxRappel] = useState([50]);
    const [honoraires, setHonoraires] = useState([8000]);

    // Calculations
    const placementsAnnuels = placementsMois[0] * 12;
    const candidaturesRecues = Math.round(placementsAnnuels / 0.18); // 18% taux placement actuel
    const candidaturesRappelees = Math.round((candidaturesRecues * tauxRappel[0]) / 100);
    const candidaturesManquees = candidaturesRecues - candidaturesRappelees;

    // Avec IA : 100% rappel, maintien 18% placement mais sur toutes les candidatures
    const placementsAvecIA = Math.round(candidaturesRecues * 0.18);
    const placementsGagnes = placementsAvecIA - placementsAnnuels;

    const caActuel = placementsAnnuels * honoraires[0];
    const caAvecIA = placementsAvecIA * honoraires[0];
    const caGagne = caAvecIA - caActuel;

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[150px]" />

            <div className="container relative z-10 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 mb-6">
                            <Calculator className="w-4 h-4" />
                            <span className="text-sm font-semibold">Calculateur placements perdus</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                            Combien de{" "}
                            <span className="bg-gradient-to-r from-synapse-violet via-synapse-blue to-synapse-yellow bg-clip-text text-transparent">
                                placements manqués
                            </span>{" "}
                            ?
                        </h2>

                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Estimez les <span className="font-semibold text-foreground">placements perdus</span> par manque de réactivité.
                            L'<span className="font-semibold text-foreground">agent vocal cabinet recrutement</span> rappelle{" "}
                            <span className="font-semibold text-foreground">100% des candidats</span> en moins de 30 minutes.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Left: Inputs */}
                        <div className="glass rounded-3xl p-8 space-y-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                                    <Users className="w-5 h-5 text-primary" />
                                    Votre activité
                                </h3>

                                {/* Slider 1 */}
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium">Placements / mois</label>
                                        <span className="text-2xl font-bold text-primary">{placementsMois[0]}</span>
                                    </div>
                                    <Slider
                                        value={placementsMois}
                                        onValueChange={setPlacementsMois}
                                        min={1}
                                        max={30}
                                        step={1}
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        Nombre moyen de candidats placés par mois
                                    </p>
                                </div>

                                {/* Slider 2 */}
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium">Taux rappel candidats (%)</label>
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
                                        % de candidatures auxquelles vous répondez rapidement
                                    </p>
                                </div>

                                {/* Slider 3 */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium">Honoraires moy. (€)</label>
                                        <span className="text-2xl font-bold text-primary">{honoraires[0].toLocaleString()} €</span>
                                    </div>
                                    <Slider
                                        value={honoraires}
                                        onValueChange={setHonoraires}
                                        min={2000}
                                        max={25000}
                                        step={1000}
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        Commission moyenne par placement (10-20% salaire annuel)
                                    </p>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                                <p className="text-sm text-foreground">
                                    <span className="font-semibold">Hypothèse :</span> Taux placement 18% (standard marché).
                                    Les candidats non rappelés vont chez vos concurrents.
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
                                        <span className="text-sm">Candidatures annuelles</span>
                                        <span className="text-xl font-bold">{candidaturesRecues}</span>
                                    </div>

                                    <div className="flex items-center justify-between p-4 rounded-xl bg-primary/10">
                                        <span className="text-sm">Rappelées ({tauxRappel[0]}%)</span>
                                        <span className="text-xl font-bold text-primary">{candidaturesRappelees}</span>
                                    </div>

                                    <div className="flex items-center justify-between p-4 rounded-xl bg-destructive/10">
                                        <span className="text-sm">Non rappelées</span>
                                        <span className="text-xl font-bold text-destructive">{candidaturesManquees}</span>
                                    </div>

                                    <div className="pt-4 border-t border-border/50">
                                        <div className="mb-4">
                                            <div className="text-sm text-muted-foreground mb-1">Placements annuels</div>
                                            <div className="text-3xl font-bold text-primary">{placementsAnnuels}</div>
                                        </div>

                                        <div className="p-4 rounded-xl bg-primary/10">
                                            <div className="text-xs text-muted-foreground mb-1">CA annuel</div>
                                            <div className="text-2xl font-bold text-primary">{caActuel.toLocaleString()} €</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* With AI */}
                            <div className="glass rounded-3xl p-8 border border-primary/30 shadow-[0_0_30px_hsl(280_90%_65%/0.1)]">
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
                                        <span className="text-sm font-medium">Placements gagnés</span>
                                        <span className="text-2xl font-bold text-primary">+{placementsGagnes}</span>
                                    </div>

                                    <div className="pt-4 border-t border-primary/20">
                                        <div className="mb-2">
                                            <div className="text-sm text-muted-foreground mb-1">CA actuel</div>
                                            <div className="text-2xl font-bold text-foreground">{caActuel.toLocaleString()} €</div>
                                        </div>

                                        <div className="mb-4 p-4 rounded-xl bg-destructive/10">
                                            <div className="text-xs text-muted-foreground mb-1">CA perdu (candidats non rappelés)</div>
                                            <div className="text-xl font-bold text-destructive">-{caGagne.toLocaleString()} €</div>
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
                                                Récupérer ces placements
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
                            Ce <span className="font-semibold text-foreground">calculateur ROI cabinet recrutement</span> estime le{" "}
                            <span className="font-semibold text-foreground">coût opportunité placements manqués</span>. L'
                            <span className="font-semibold text-foreground">automatisation qualification candidat</span> et le{" "}
                            <span className="font-semibold text-foreground">rappel candidature immédiat</span> maximisent votre{" "}
                            <span className="font-semibold text-foreground">taux conversion recrutement</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
