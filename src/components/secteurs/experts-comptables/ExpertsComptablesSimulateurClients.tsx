import { useState } from "react";
import { Calculator, TrendingUp, Building, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export const ExpertsComptablesSimulateurClients = () => {
    const [demandesMois, setDemandesMois] = useState([12]);
    const [tauxReponse, setTauxReponse] = useState([60]);
    const [valeurClient, setValeurClient] = useState([3500]);

    // Calculations
    const demandesAnnuelles = demandesMois[0] * 12;
    const demandesRepondues = Math.round((demandesAnnuelles * tauxReponse[0]) / 100);
    const demandesManquees = demandesAnnuelles - demandesRepondues;
    const clientsSignes = Math.round(demandesRepondues * 0.82); // 82% conversion
    const clientsPerdus = Math.round(demandesManquees * 0.82);
    const caActuel = clientsSignes * valeurClient[0];
    const caPerdu = clientsPerdus * valeurClient[0];
    const caPotentiel = (clientsSignes + Math.round(clientsPerdus * 0.9)) * valeurClient[0]; // 90% recovery with AI

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
                            <span className="text-sm font-semibold">Simulateur clients cabinet comptable</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                            Combien de{" "}
                            <span className="bg-gradient-to-r from-synapse-blue via-synapse-violet to-synapse-yellow bg-clip-text text-transparent">
                                créateurs d'entreprise
                            </span>{" "}
                            perdez-vous ?
                        </h2>

                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Estimez votre <span className="font-semibold text-foreground">manque à gagner annuel</span> et découvrez
                            comment un <span className="font-semibold text-foreground">agent vocal comptable</span> peut{" "}
                            <span className="font-semibold text-foreground">capter 90% des prospects perdus</span>.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Left: Inputs */}
                        <div className="glass rounded-3xl p-8 space-y-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                                    <Building className="w-5 h-5 text-primary" />
                                    Paramètres de votre cabinet
                                </h3>

                                {/* Slider 1 */}
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium">Demandes création / mois</label>
                                        <span className="text-2xl font-bold text-primary">{demandesMois[0]}</span>
                                    </div>
                                    <Slider
                                        value={demandesMois}
                                        onValueChange={setDemandesMois}
                                        min={1}
                                        max={50}
                                        step={1}
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        Demandes de création entreprise (SARL, SAS, auto-entrepreneur, etc.)
                                    </p>
                                </div>

                                {/* Slider 2 */}
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium">Taux de réponse (%)</label>
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
                                        Pourcentage de demandes auxquelles vous répondez (lié aux pics saisonniers)
                                    </p>
                                </div>

                                {/* Slider 3 */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium">Valeur client 3 ans (€)</label>
                                        <span className="text-2xl font-bold text-primary">{valeurClient[0].toLocaleString()}€</span>
                                    </div>
                                    <Slider
                                        value={valeurClient}
                                        onValueChange={setValeurClient}
                                        min={1000}
                                        max={15000}
                                        step={500}
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        CA moyen sur 3 ans (honoraires tenue comptable + conseil)
                                    </p>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                                <p className="text-sm text-foreground">
                                    <span className="font-semibold">82% des créateurs</span> signent avec le 1er cabinet qui répond
                                    sérieusement. En <span className="font-semibold">Mars-Avril</span>, votre standard est saturé.
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
                                        <span className="text-sm">Réponses données</span>
                                        <span className="text-xl font-bold text-primary">{demandesRepondues}</span>
                                    </div>

                                    <div className="flex items-center justify-between p-4 rounded-xl bg-destructive/10">
                                        <span className="text-sm">Demandes manquées</span>
                                        <span className="text-xl font-bold text-destructive">{demandesManquees}</span>
                                    </div>

                                    <div className="pt-4 border-t border-border/50">
                                        <div className="mb-4">
                                            <div className="text-sm text-muted-foreground mb-1">Clients signés (82% conv.)</div>
                                            <div className="text-3xl font-bold text-primary">{clientsSignes}</div>
                                        </div>

                                        <div className="p-4 rounded-xl bg-destructive/10">
                                            <div className="text-xs text-muted-foreground mb-1">Clients perdus (82% auraient signé)</div>
                                            <div className="text-2xl font-bold text-destructive">{clientsPerdus}</div>
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
                                        <span className="text-sm font-medium">Taux réponse</span>
                                        <span className="text-2xl font-bold text-primary">100%</span>
                                    </div>

                                    <div className="flex items-center justify-between p-4 rounded-xl bg-primary/10">
                                        <span className="text-sm font-medium">Clients récupérés</span>
                                        <span className="text-2xl font-bold text-primary">+{Math.round(clientsPerdus * 0.9)}</span>
                                    </div>

                                    <div className="pt-4 border-t border-primary/20">
                                        <div className="mb-2">
                                            <div className="text-sm text-muted-foreground mb-1">CA actuel (3 ans)</div>
                                            <div className="text-2xl font-bold text-foreground">{caActuel.toLocaleString()} €</div>
                                        </div>

                                        <div className="mb-4 p-4 rounded-xl bg-destructive/10">
                                            <div className="text-xs text-muted-foreground mb-1">CA perdu (3 ans)</div>
                                            <div className="text-xl font-bold text-destructive">-{caPerdu.toLocaleString()} €</div>
                                        </div>

                                        <div className="mb-6 p-4 rounded-xl bg-primary/20">
                                            <div className="text-xs text-muted-foreground mb-1">CA potentiel avec IA (3 ans)</div>
                                            <div className="text-3xl font-bold text-primary">{caPotentiel.toLocaleString()} €</div>
                                            <div className="text-xs text-primary mt-1">
                                                +{((caPotentiel - caActuel) / caActuel * 100).toFixed(0)}% de croissance
                                            </div>
                                        </div>

                                        <a href="https://koalendar.com/e/meet-with-synapse" target="_blank" rel="noopener noreferrer">
                                            <Button variant="hero" size="lg" className="w-full group">
                                                Capter ces créateurs d'entreprise
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
                            Ce <span className="font-semibold text-foreground">calculateur ROI cabinet comptable</span> estime le{" "}
                            <span className="font-semibold text-foreground">coût opportunité création entreprise perdue</span>. L'
                            <span className="font-semibold text-foreground">automatisation prospection comptable</span> et la{" "}
                            <span className="font-semibold text-foreground">qualification SIRET automatique</span> permettent de{" "}
                            <span className="font-semibold text-foreground">capter prospects comptabilité</span> même en{" "}
                            <span className="font-semibold text-foreground">période fiscale surchargée</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
