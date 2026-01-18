import { useState } from "react";
import { Calculator, TrendingUp, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export const CreditSimulateurCapacite = () => {
    const [revenus, setRevenus] = useState([4500]);
    const [apport, setApport] = useState([30000]);
    const [tauxInteret, setTauxInteret] = useState([3.5]);

    // Calculations
    const tauxEndettement = 0.35; // 35% max
    const capaciteMensuelle = revenus[0] * tauxEndettement;
    const dureeAns = 25;
    const tauxMensuel = tauxInteret[0] / 100 / 12;
    const nbMensualites = dureeAns * 12;

    // Formule de calcul du capital emprunté
    const capitalEmprunt = Math.round(
        capaciteMensuelle * ((1 - Math.pow(1 + tauxMensuel, -nbMensualites)) / tauxMensuel)
    );

    const budgetTotal = capitalEmprunt + apport[0];
    const mensualite = Math.round(capaciteMensuelle);
    const coutCredit = Math.round((mensualite * nbMensualites) - capitalEmprunt);

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

            <div className="container relative z-10 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 mb-6">
                            <Calculator className="w-4 h-4" />
                            <span className="text-sm font-semibold">Simulateur capacité d'emprunt immobilier</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                            Quelle est votre{" "}
                            <span className="bg-gradient-to-r from-synapse-yellow via-synapse-violet to-synapse-blue bg-clip-text text-transparent">
                                capacité d'emprunt
                            </span>{" "}
                            ?
                        </h2>

                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Simulez instantanément votre <span className="font-semibold text-foreground">capacité emprunt crédit immobilier</span>.
                            Notre <span className="font-semibold text-foreground">agent vocal courtier</span> réalise ce calcul en{" "}
                            <span className="font-semibold text-foreground">temps réel pendant l'appel</span>.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Left: Inputs */}
                        <div className="glass rounded-3xl p-8 space-y-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                                    <Home className="w-5 h-5 text-primary" />
                                    Vos informations
                                </h3>

                                {/* Slider 1 */}
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium">Revenus nets mensuels (€)</label>
                                        <span className="text-2xl font-bold text-primary">{revenus[0].toLocaleString()} €</span>
                                    </div>
                                    <Slider
                                        value={revenus}
                                        onValueChange={setRevenus}
                                        min={1500}
                                        max={15000}
                                        step={100}
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        Salaires nets après impôts du foyer
                                    </p>
                                </div>

                                {/* Slider 2 */}
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium">Apport personnel (€)</label>
                                        <span className="text-2xl font-bold text-primary">{apport[0].toLocaleString()} €</span>
                                    </div>
                                    <Slider
                                        value={apport}
                                        onValueChange={setApport}
                                        min={0}
                                        max={150000}
                                        step={5000}
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        Economies, donation, vente bien, etc.
                                    </p>
                                </div>

                                {/* Slider 3 */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium">Taux d'intérêt (%)</label>
                                        <span className="text-2xl font-bold text-primary">{tauxInteret[0].toFixed(2)} %</span>
                                    </div>
                                    <Slider
                                        value={tauxInteret}
                                        onValueChange={setTauxInteret}
                                        min={2.5}
                                        max={5.5}
                                        step={0.1}
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        Taux moyen actuel selon profil (hors assurance)
                                    </p>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                                <p className="text-sm text-foreground">
                                    <span className="font-semibold">Hypothèses :</span> Durée 25 ans, taux d'endettement max 35%,
                                    hors frais de notaire et garantie.
                                </p>
                            </div>
                        </div>

                        {/* Right: Results */}
                        <div className="space-y-6">
                            {/* Budget Total */}
                            <div className="glass rounded-3xl p-8 border border-primary/30 shadow-[0_0_30px_hsl(280_90%_65%/0.1)]">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <TrendingUp className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold">Votre capacité d'achat</h3>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <div className="text-sm text-muted-foreground mb-2">Budget total immobilier</div>
                                        <div className="text-5xl font-bold text-primary mb-1">{budgetTotal.toLocaleString()} €</div>
                                        <div className="text-xs text-muted-foreground">Apport + Emprunt</div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 rounded-xl bg-primary/10">
                                            <div className="text-xs text-muted-foreground mb-1">Capital emprunté</div>
                                            <div className="text-xl font-bold text-primary">{capitalEmprunt.toLocaleString()} €</div>
                                        </div>
                                        <div className="p-4 rounded-xl bg-primary/10">
                                            <div className="text-xs text-muted-foreground mb-1">Mensualité</div>
                                            <div className="text-xl font-bold text-primary">{mensualite.toLocaleString()} €</div>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-border/50">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm text-muted-foreground">Durée</span>
                                            <span className="text-sm font-semibold">{dureeAns} ans</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-muted-foreground">Coût total du crédit</span>
                                            <span className="text-sm font-semibold">{coutCredit.toLocaleString()} €</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="glass rounded-3xl p-8 border border-border/50">
                                <h3 className="text-lg font-semibold mb-4">Prochaine étape</h3>
                                <p className="text-sm text-muted-foreground mb-6">
                                    Notre courtier affine cette estimation selon votre profil (CDI, apport, autres crédits) et
                                    vous présente les <span className="font-semibold text-foreground">meilleures offres bancaires</span>.
                                </p>

                                <a href="https://koalendar.com/e/meet-with-synapse" target="_blank" rel="noopener noreferrer">
                                    <Button variant="hero" size="lg" className="w-full group">
                                        Obtenir les meilleures offres
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </a>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="glass p-4 rounded-xl text-center">
                                    <div className="text-2xl font-bold text-primary mb-1">70%</div>
                                    <div className="text-xs text-muted-foreground">Conversion si rappel {"<"} 10min</div>
                                </div>
                                <div className="glass p-4 rounded-xl text-center">
                                    <div className="text-2xl font-bold text-primary mb-1">2 min</div>
                                    <div className="text-xs text-muted-foreground">Rappel automatique</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SEO Footer */}
                    <div className="mt-12 text-center max-w-3xl mx-auto">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Ce <span className="font-semibold text-foreground">simulateur prêt immobilier</span> calcule votre{" "}
                            <span className="font-semibold text-foreground">capacité d'emprunt crédit</span> selon les critères bancaires.
                            L'<span className="font-semibold text-foreground">agent vocal courtier crédit</span> réalise cette{" "}
                            <span className="font-semibold text-foreground">simulation capacité financement</span> en direct pendant l'appel
                            pour qualifier immédiatement votre <span className="font-semibold text-foreground">projet achat immobilier</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
