import { useState } from "react";
import { Calculator, TrendingUp, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export const SecuriteCalculateurSites = () => {
    const [sitesActuels, setSitesActuels] = useState([12]);
    const [tauxAlertes, setTauxAlertes] = useState([60]);
    const [abonnementSite, setAbonnementSite] = useState([180]);

    // Calculations
    const sitesRespects = Math.round((sitesActuels[0] * tauxAlertes[0]) / 100);
    const sitesDefaillants = sitesActuels[0] - sitesRespects;

    // Avec IA: monitoring 100% + alerte automatique = 95% conformité
    const sitesAvecIA = Math.round(sitesActuels[0] * 0.95);
    const sitesGagnes = sitesAvecIA - sitesRespects;

    const caActuel = sitesRespects * abonnementSite[0] * 12;
    const caAvecIA = sitesAvecIA * abonnementSite[0] * 12;
    const caGagne = caAvecIA - caActuel;

    return (
        <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

            <div className="container relative z-10 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
                            <Calculator className="w-4 h-4" />
                            <span className="text-sm font-semibold">Calculateur sites non conformes</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                            Combien de{" "}
                            <span className="bg-gradient-to-r from-synapse-violet to-synapse-blue bg-clip-text text-transparent">
                                sites à risque
                            </span>{" "}
                            ?
                        </h2>

                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Calculez les <span className="font-semibold text-foreground">sites clients non conformes procédure</span>.
                            L'<span className="font-semibold text-foreground">agent vocal entreprise sécurité</span> assure le{" "}
                            <span className="font-semibold text-foreground">suivi télésurveillance exhaustif</span> et relance les{" "}
                            <span className="font-semibold text-primary">sites défaillants automatiquement</span>.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="glass rounded-3xl p-8 space-y-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-primary" />
                                    Votre portefeuille
                                </h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium">Sites sous contrat</label>
                                        <span className="text-2xl font-bold text-primary">{sitesActuels[0]}</span>
                                    </div>
                                    <Slider
                                        value={sitesActuels}
                                        onValueChange={setSitesActuels}
                                        min={5}
                                        max={100}
                                        step={1}
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        Nombre de sites clients avec contrat télésurveillance / rondes sécurité
                                    </p>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium">Taux conformité alertes (%)</label>
                                        <span className="text-2xl font-bold text-destructive">{tauxAlertes[0]}%</span>
                                    </div>
                                    <Slider
                                        value={tauxAlertes}
                                        onValueChange={setTauxAlertes}
                                        min={40}
                                        max={95}
                                        step={5}
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        % de sites respectant protocole transmission alarme (clés, codes, contacts à jour...)
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium">Abonnement mensuel (€)</label>
                                        <span className="text-2xl font-bold text-primary">{abonnementSite[0]} €</span>
                                    </div>
                                    <Slider
                                        value={abonnementSite}
                                        onValueChange={setAbonnementSite}
                                        min={80}
                                        max={500}
                                        step={20}
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        Prix moyen abonnement mensuel par site (télésurveillance + interventions)
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                                <p className="text-sm text-foreground">
                                    <span className="font-semibold">Hypothèse :</span> Suivi automatisé améliore conformité à 95%
                                    (moins de résiliations).
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="glass rounded-3xl p-8 border border-border/50">
                                <h3 className="text-lg font-semibold mb-6">Situation actuelle</h3>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                                        <span className="text-sm">Sites sous contrat</span>
                                        <span className="text-xl font-bold">{sitesActuels[0]}</span>
                                    </div>

                                    <div className="flex items-center justify-between p-4 rounded-xl bg-primary/10">
                                        <span className="text-sm">Conformes ({tauxAlertes[0]}%)</span>
                                        <span className="text-xl font-bold text-primary">{sitesRespects}</span>
                                    </div>

                                    <div className="flex items-center justify-between p-4 rounded-xl bg-destructive/10">
                                        <span className="text-sm">Non conformes (à risque)</span>
                                        <span className="text-xl font-bold text-destructive">{sitesDefaillants}</span>
                                    </div>

                                    <div className="pt-4 border-t border-border/50">
                                        <div className="p-4 rounded-xl bg-primary/10">
                                            <div className="text-xs text-muted-foreground mb-1">CA annuel récurrent</div>
                                            <div className="text-2xl font-bold text-primary">{caActuel.toLocaleString()} €</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="glass rounded-3xl p-8 border border-primary/30 shadow-[0_0_30px_hsl(280_90%_65%/0.1)]">
                                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-primary" />
                                    Avec monitoring automatisé
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 rounded-xl bg-primary/10">
                                        <span className="text-sm font-medium">Taux conformité</span>
                                        <span className="text-2xl font-bold text-primary">95%</span>
                                    </div>

                                    <div className="flex items-center justify-between p-4 rounded-xl bg-primary/10">
                                        <span className="text-sm font-medium">Sites sécurisés</span>
                                        <span className="text-2xl font-bold text-primary">+{sitesGagnes}</span>
                                    </div>

                                    <div className="pt-4 border-t border-primary/20">
                                        <div className="mb-2">
                                            <div className="text-sm text-muted-foreground mb-1">CA actuel</div>
                                            <div className="text-2xl font-bold text-foreground">{caActuel.toLocaleString()} €</div>
                                        </div>

                                        <div className="mb-4 p-4 rounded-xl bg-destructive/10">
                                            <div className="text-xs text-muted-foreground mb-1">CA à risque (sites défaillants)</div>
                                            <div className="text-xl font-bold text-destructive">-{caGagne.toLocaleString()} €</div>
                                        </div>

                                        <div className="mb-6 p-4 rounded-xl bg-primary/20">
                                            <div className="text-xs text-muted-foreground mb-1">CA potentiel avec IA</div>
                                            <div className="text-3xl font-bold text-primary">{caAvecIA.toLocaleString()} €</div>
                                            <div className="text-xs text-primary mt-1">
                                                +{((caGagne / caActuel) * 100).toFixed(0)}% de sécurisation
                                            </div>
                                        </div>

                                        <a href="https://koalendar.com/e/meet-with-synapse" target="_blank" rel="noopener noreferrer">
                                            <Button variant="hero" size="lg" className="w-full group">
                                                Sécuriser mon portefeuille
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
                            Ce <span className="font-semibold text-foreground">calculateur ROI entreprise sécurité</span> estime le{" "}
                            <span className="font-semibold text-foreground">risque résiliation contrat télésurveillance</span>. L'
                            <span className="font-semibold text-foreground">automatisation suivi client sécurité</span> et le{" "}
                            <span className="font-semibold text-foreground">monitoring conformité site automatique</span> maximisent votre{" "}
                            <span className="font-semibold text-foreground">taux rétention contrat télésurveillance</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
