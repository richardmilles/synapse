import { useState } from "react";
import { Calculator, TrendingUp, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export const ChauffageCalculateurContrats = () => {
    const [clientsActuels, setClientsActuels] = useState([80]);
    const [tauxRenouvellement, setTauxRenouv] = useState([65]);
    const [prixContrat, setPrixContrat] = useState([150]);

    // Calculations
    const contratsRenouv = Math.round((clientsActuels[0] * tauxRenouvellement[0]) / 100);
    const contratsNonRenouv = clientsActuels[0] - contratsRenouv;

    // Avec IA: relance automatique améliore taux à 85%
    const contratsAvecIA = Math.round(clientsActuels[0] * 0.85);
    const contratsGagnes = contratsAvecIA - contratsRenouv;

    const caActuel = contratsRenouv * prixContrat[0];
    const caAvecIA = contratsAvecIA * prixContrat[0];
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
                            <span className="text-sm font-semibold">Calculateur contrats entretien perdus</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                            Combien de{" "}
                            <span className="bg-gradient-to-r from-synapse-blue to-synapse-yellow bg-clip-text text-transparent">
                                contrats perdus
                            </span>{" "}
                            ?
                        </h2>

                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Calculez les <span className="font-semibold text-foreground">contrats entretien annuel non renouvelés</span>.
                            L'<span className="font-semibold text-foreground">agent vocal chauffagiste</span> relance{" "}
                            <span className="font-semibold text-foreground">100% de vos clients</span> avant échéance pour maximiser
                            le <span className="font-semibold text-primary">taux renouvellement contrat</span>.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="glass rounded-3xl p-8 space-y-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                                    <Wrench className="w-5 h-5 text-primary" />
                                    Vos contrats
                                </h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium">Clients contrat actuel</label>
                                        <span className="text-2xl font-bold text-primary">{clientsActuels[0]}</span>
                                    </div>
                                    <Slider
                                        value={clientsActuels}
                                        onValueChange={setClientsActuels}
                                        min={20}
                                        max={500}
                                        step={10}
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        Nombre de clients avec contrat entretien annuel chaudière/climatisation active
                                    </p>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium">Taux renouvellement (%)</label>
                                        <span className="text-2xl font-bold text-destructive">{tauxRenouvellement[0]}%</span>
                                    </div>
                                    <Slider
                                        value={tauxRenouvellement}
                                        onValueChange={setTauxRenouv}
                                        min={40}
                                        max={95}
                                        step={5}
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        % de clients qui renouvellent leur contrat (oubli, changement artisan...)
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium">Prix contrat annuel (€)</label>
                                        <span className="text-2xl font-bold text-primary">{prixContrat[0]} €</span>
                                    </div>
                                    <Slider
                                        value={prixContrat}
                                        onValueChange={setPrixContrat}
                                        min={80}
                                        max={400}
                                        step={10}
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        Prix moyen contrat entretien (1 à 2 visites/an + dépannage prioritaire)
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                                <p className="text-sm text-foreground">
                                    <span className="font-semibold">Hypothèse :</span> Relance automatique 2 mois avant échéance
                                    améliore le taux à 85%.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="glass rounded-3xl p-8 border border-border/50">
                                <h3 className="text-lg font-semibold mb-6">Situation actuelle</h3>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                                        <span className="text-sm">Contrats à renouveler</span>
                                        <span className="text-xl font-bold">{clientsActuels[0]}</span>
                                    </div>

                                    <div className="flex items-center justify-between p-4 rounded-xl bg-primary/10">
                                        <span className="text-sm">Renouvelés ({tauxRenouvellement[0]}%)</span>
                                        <span className="text-xl font-bold text-primary">{contratsRenouv}</span>
                                    </div>

                                    <div className="flex items-center justify-between p-4 rounded-xl bg-destructive/10">
                                        <span className="text-sm">Non renouvelés</span>
                                        <span className="text-xl font-bold text-destructive">{contratsNonRenouv}</span>
                                    </div>

                                    <div className="pt-4 border-t border-border/50">
                                        <div className="p-4 rounded-xl bg-primary/10">
                                            <div className="text-xs text-muted-foreground mb-1">CA annuel contrats</div>
                                            <div className="text-2xl font-bold text-primary">{caActuel.toLocaleString()} €</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="glass rounded-3xl p-8 border border-primary/30 shadow-[0_0_30px_hsl(210_100%_60%/0.1)]">
                                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-primary" />
                                    Avec relance automatique
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 rounded-xl bg-primary/10">
                                        <span className="text-sm font-medium">Taux renouvellement</span>
                                        <span className="text-2xl font-bold text-primary">85%</span>
                                    </div>

                                    <div className="flex items-center justify-between p-4 rounded-xl bg-primary/10">
                                        <span className="text-sm font-medium">Contrats gagnés</span>
                                        <span className="text-2xl font-bold text-primary">+{contratsGagnes}</span>
                                    </div>

                                    <div className="pt-4 border-t border-primary/20">
                                        <div className="mb-2">
                                            <div className="text-sm text-muted-foreground mb-1">CA actuel</div>
                                            <div className="text-2xl font-bold text-foreground">{caActuel.toLocaleString()} €</div>
                                        </div>

                                        <div className="mb-4 p-4 rounded-xl bg-destructive/10">
                                            <div className="text-xs text-muted-foreground mb-1">CA perdu (contrats non renouvelés)</div>
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
                                                Sécuriser ces contrats
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
                            Ce <span className="font-semibold text-foreground">calculateur ROI contrat entretien chauffage</span> estime le{" "}
                            <span className="font-semibold text-foreground">coût opportunité contrats perdus</span>. L'
                            <span className="font-semibold text-foreground">automatisation relance contrat maintenance</span> et la{" "}
                            <span className="font-semibold text-foreground">gestion échéances client chauffagiste</span> maximisent votre{" "}
                            <span className="font-semibold text-foreground">taux renouvellement contrat entretien annuel</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
