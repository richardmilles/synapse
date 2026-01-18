import { useState } from "react";
import { Calculator, TrendingUp, Scale, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export const HuissiersCalculateurDossiers = () => {
    const [dossiersMois, setDossiersMois] = useState([25]);
    const [tauxTraitement, setTauxTraitement] = useState([70]);
    const [honorairesMoyen, setHonoraires] = useState([180]);

    // Calculations
    const dossiersAnnuels = dossiersMois[0] * 12;
    const dossiersTraites = Math.round((dossiersAnnuels * tauxTraitement[0]) / 100);
    const dossiersNonTraites = dossiersAnnuels - dossiersTraites;

    // Avec IA: qualification auto + suivi auto = 95% traités
    const dossiersAvecIA = Math.round(dossiersAnnuels * 0.95);
    const dossiersGagnes = dossiersAvecIA - dossiersTraites;

    const caActuel = dossiersTraites * honorairesMoyen[0];
    const caAvecIA = dossiersAvecIA * honorairesMoyen[0];
    const caGagne = caAvecIA - caActuel;

    return (
        <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[150px]" />

            <div className="container relative z-10 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
                            <Calculator className="w-4 h-4" />
                            <span className="text-sm font-semibold">Calculateur dossiers non traités</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                            Combien de{" "}
                            <span className="bg-gradient-to-r from-synapse-violet to-synapse-blue bg-clip-text text-transparent">
                                dossiers perdus
                            </span>{" "}
                            ?
                        </h2>

                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Calculez les <span className="font-semibold text-foreground">dossiers huissier abandonnés</span> par surcharge.
                            L'<span className="font-semibold text-foreground">agent vocal étude huissier</span> qualifie{" "}
                            <span className="font-semibold text-foreground">100% des demandes</span> et optimise la{" "}
                            <span className="font-semibold text-primary">charge clerc huissier</span>.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="glass rounded-3xl p-8 space-y-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                                    <Scale className="w-5 h-5 text-primary" />
                                    Votre activité
                                </h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium">Dossiers reçus / mois</label>
                                        <span className="text-2xl font-bold text-primary">{dossiersMois[0]}</span>
                                    </div>
                                    <Slider
                                        value={dossiersMois}
                                        onValueChange={setDossiersMois}
                                        min={10}
                                        max={100}
                                        step={5}
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        Demandes mensuelles (significations, constats, exécutions, recouvrements...)
                                    </p>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium">Taux traitement (%)</label>
                                        <span className="text-2xl font-bold text-destructive">{tauxTraitement[0]}%</span>
                                    </div>
                                    <Slider
                                        value={tauxTraitement}
                                        onValueChange={setTauxTraitement}
                                        min={50}
                                        max={95}
                                        step={5}
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        % de dossiers effectivement traités (charge, pièces manquantes, relances...)
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium">Honoraires moyens (€)</label>
                                        <span className="text-2xl font-bold text-primary">{honorairesMoyen[0]} €</span>
                                    </div>
                                    <Slider
                                        value={honorairesMoyen}
                                        onValueChange={setHonoraires}
                                        min={80}
                                        max={500}
                                        step={20}
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        Honoraires moyens par dossier (signification simple à exécution complexe)
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                                <p className="text-sm text-foreground">
                                    <span className="font-semibold">Hypothèse :</span> Qualification automatique améliore
                                    le taux de traitement à 95%.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="glass rounded-3xl p-8 border border-border/50">
                                <h3 className="text-lg font-semibold mb-6">Situation actuelle</h3>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                                        <span className="text-sm">Dossiers reçus/an</span>
                                        <span className="text-xl font-bold">{dossiersAnnuels}</span>
                                    </div>

                                    <div className="flex items-center justify-between p-4 rounded-xl bg-primary/10">
                                        <span className="text-sm">Traités ({tauxTraitement[0]}%)</span>
                                        <span className="text-xl font-bold text-primary">{dossiersTraites}</span>
                                    </div>

                                    <div className="flex items-center justify-between p-4 rounded-xl bg-destructive/10">
                                        <span className="text-sm">Non traités/abandonnés</span>
                                        <span className="text-xl font-bold text-destructive">{dossiersNonTraites}</span>
                                    </div>

                                    <div className="pt-4 border-t border-border/50">
                                        <div className="p-4 rounded-xl bg-primary/10">
                                            <div className="text-xs text-muted-foreground mb-1">CA annuel</div>
                                            <div className="text-2xl font-bold text-primary">{caActuel.toLocaleString()} €</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="glass rounded-3xl p-8 border border-primary/30 shadow-[0_0_30px_hsl(280_90%_65%/0.1)]">
                                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-primary" />
                                    Avec automatisation IA
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 rounded-xl bg-primary/10">
                                        <span className="text-sm font-medium">Taux traitement</span>
                                        <span className="text-2xl font-bold text-primary">95%</span>
                                    </div>

                                    <div className="flex items-center justify-between p-4 rounded-xl bg-primary/10">
                                        <span className="text-sm font-medium">Dossiers gagnés</span>
                                        <span className="text-2xl font-bold text-primary">+{dossiersGagnes}</span>
                                    </div>

                                    <div className="pt-4 border-t border-primary/20">
                                        <div className="mb-2">
                                            <div className="text-sm text-muted-foreground mb-1">CA actuel</div>
                                            <div className="text-2xl font-bold text-foreground">{caActuel.toLocaleString()} €</div>
                                        </div>

                                        <div className="mb-4 p-4 rounded-xl bg-destructive/10">
                                            <div className="text-xs text-muted-foreground mb-1">CA perdu (dossiers abandonnés)</div>
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
                                                Traiter tous les dossiers
                                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center max-w-3xl mx-auto">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Ce <span className="font-semibold text-foreground">calculateur ROI étude huissier</span> estime le{" "}
                            <span className="font-semibold text-foreground">coût opportunité dossiers non traités</span>. L'
                            <span className="font-semibold text-foreground">automatisation secrétariat huissier justice</span> et la{" "}
                            <span className="font-semibold text-foreground">qualification dossier signification automatique</span> maximisent votre{" "}
                            <span className="font-semibold text-foreground">capacité traitement étude huissier</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
