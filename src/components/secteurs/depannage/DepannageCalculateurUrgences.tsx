import { useState } from "react";
import { Calculator, TrendingUp, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export const DepannageCalculateurUrgences = () => {
    const [urgencesMois, setUrgencesMois] = useState([15]);
    const [tauxReponse, setTauxReponse] = useState([40]);
    const [panierMoyen, setPanierMoyen] = useState([250]);

    // Calculations
    const urgencesAnnuelles = urgencesMois[0] * 12;
    const urgencesRepondues = Math.round((urgencesAnnuelles * tauxReponse[0]) / 100);
    const urgencesManquees = urgencesAnnuelles - urgencesRepondues;

    // Taux conversion actuel 35% sur les répondues
    const interventionsActuelles = Math.round(urgencesRepondues * 0.35);

    // Avec IA: 100% réponse, 85% conversion
    const interventionsAvecIA = Math.round(urgencesAnnuelles * 0.85);
    const interventionsGagnees = interventionsAvecIA - interventionsActuelles;

    const caActuel = interventionsActuelles * panierMoyen[0];
    const caAvecIA = interventionsAvecIA * panierMoyen[0];
    const caGagne = caAvecIA - caActuel;

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-destructive/5 rounded-full blur-[150px]" />

            <div className="container relative z-10 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive border border-destructive/20 mb-6">
                            <Calculator className="w-4 h-4" />
                            <span className="text-sm font-semibold">Calculateur urgences perdues</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                            Combien d'{" "}
                            <span className="bg-gradient-to-r from-destructive via-synapse-yellow to-synapse-blue bg-clip-text text-transparent">
                                urgences manquées
                            </span>{" "}
                            ?
                        </h2>

                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Calculez les <span className="font-semibold text-foreground">interventions perdues</span> par indisponibilité.
                            L'<span className="font-semibold text-foreground">agent vocal dépannage</span> répond{" "}
                            <span className="font-semibold text-foreground">100% des appels</span> en 3 secondes, 24/7.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Left: Inputs */}
                        <div className="glass rounded-3xl p-8 space-y-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                                    <Wrench className="w-5 h-5 text-primary" />
                                    Votre activité
                                </h3>

                                {/* Slider 1 */}
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium">Urgences / mois</label>
                                        <span className="text-2xl font-bold text-primary">{urgencesMois[0]}</span>
                                    </div>
                                    <Slider
                                        value={urgencesMois}
                                        onValueChange={setUrgencesMois}
                                        min={5}
                                        max={100}
                                        step={5}
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        Appels urgence reçus en moyenne (plomberie, électricité, serrurerie...)
                                    </p>
                                </div>

                                {/* Slider 2 */}
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium">Taux réponse (%)</label>
                                        <span className="text-2xl font-bold text-destructive">{tauxReponse[0]}%</span>
                                    </div>
                                    <Slider
                                        value={tauxReponse}
                                        onValueChange={setTauxReponse}
                                        min={20}
                                        max={100}
                                        step={5}
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        % d'appels auxquels vous répondez (occupation sur chantier, heure tardive...)
                                    </p>
                                </div>

                                {/* Slider 3 */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium">Panier moyen (€)</label>
                                        <span className="text-2xl font-bold text-primary">{panierMoyen[0]} €</span>
                                    </div>
                                    <Slider
                                        value={panierMoyen}
                                        onValueChange={setPanierMoyen}
                                        min={100}
                                        max={1000}
                                        step={50}
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        CA moyen par intervention urgence (main d'œuvre + pièces + déplacement)
                                    </p>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                                <p className="text-sm text-foreground">
                                    <span className="font-semibold">Hypothèse :</span> Taux conversion 35% actuel (stress client),
                                    85% avec réponse immédiate 24/7.
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
                                        <span className="text-sm">Urgences annuelles</span>
                                        <span className="text-xl font-bold">{urgencesAnnuelles}</span>
                                    </div>

                                    <div className="flex items-center justify-between p-4 rounded-xl bg-primary/10">
                                        <span className="text-sm">Répondues ({tauxReponse[0]}%)</span>
                                        <span className="text-xl font-bold text-primary">{urgencesRepondues}</span>
                                    </div>

                                    <div className="flex items-center justify-between p-4 rounded-xl bg-destructive/10">
                                        <span className="text-sm">Non répondues</span>
                                        <span className="text-xl font-bold text-destructive">{urgencesManquees}</span>
                                    </div>

                                    <div className="pt-4 border-t border-border/50">
                                        <div className="mb-4">
                                            <div className="text-sm text-muted-foreground mb-1">Interventions réalisées</div>
                                            <div className="text-3xl font-bold text-primary">{interventionsActuelles}</div>
                                        </div>

                                        <div className="p-4 rounded-xl bg-primary/10">
                                            <div className="text-xs text-muted-foreground mb-1">CA annuel urgences</div>
                                            <div className="text-2xl font-bold text-primary">{caActuel.toLocaleString()} €</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* With AI */}
                            <div className="glass rounded-3xl p-8 border border-primary/30 shadow-[0_0_30px_hsl(210_100%_60%/0.1)]">
                                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-primary" />
                                    Avec agent vocal 24/7
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 rounded-xl bg-primary/10">
                                        <span className="text-sm font-medium">Taux réponse</span>
                                        <span className="text-2xl font-bold text-primary">100%</span>
                                    </div>

                                    <div className="flex items-center justify-between p-4 rounded-xl bg-primary/10">
                                        <span className="text-sm font-medium">Interventions gagnées</span>
                                        <span className="text-2xl font-bold text-primary">+{interventionsGagnees}</span>
                                    </div>

                                    <div className="pt-4 border-t border-primary/20">
                                        <div className="mb-2">
                                            <div className="text-sm text-muted-foreground mb-1">CA actuel</div>
                                            <div className="text-2xl font-bold text-foreground">{caActuel.toLocaleString()} €</div>
                                        </div>

                                        <div className="mb-4 p-4 rounded-xl bg-destructive/10">
                                            <div className="text-xs text-muted-foreground mb-1">CA perdu (urgences non captées)</div>
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
                                                Capter ces urgences
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
                            Ce <span className="font-semibold text-foreground">calculateur ROI dépannage urgence</span> estime le{" "}
                            <span className="font-semibold text-foreground">coût opportunité interventions manquées</span>. L'
                            <span className="font-semibold text-foreground">automatisation standard dépanneur</span> et la{" "}
                            <span className="font-semibold text-foreground">disponibilité téléphonique 24/7</span> maximisent votre{" "}
                            <span className="font-semibold text-foreground">taux capture urgence dépannage</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
