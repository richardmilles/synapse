import { useState } from "react";
import { Calculator, TrendingUp, AlertTriangle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export const AvocatsCalculateurMandats = () => {
    const [appelsJour, setAppelsJour] = useState([5]);
    const [tauxDecro, setTauxDecro] = useState([40]);
    const [valeurMoyenne, setValeurMoyenne] = useState([2500]);

    // Calculations
    const appelsMois = appelsJour[0] * 22; // jours ouvrés
    const appelsManques = Math.round((appelsMois * tauxDecro[0]) / 100);
    const mandatsPerdus = Math.round(appelsManques * 0.78); // 78% conversion si réponse
    const perteMensuelle = mandatsPerdus * valeurMoyenne[0];
    const perteAnnuelle = perteMensuelle * 12;
    const economieIA = perteAnnuelle * 0.8; // 80% recovered with AI

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
                            <span className="text-sm font-semibold">Calculateur ROI cabinet d'avocat</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                            Combien de{" "}
                            <span className="bg-gradient-to-r from-synapse-yellow via-synapse-violet to-synapse-blue bg-clip-text text-transparent">
                                mandats perdez-vous
                            </span>{" "}
                            chaque mois ?
                        </h2>

                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Calculez le <span className="font-semibold text-foreground">coût des appels manqués</span> pour votre{" "}
                            <span className="font-semibold text-foreground">cabinet juridique</span> et découvrez la{" "}
                            <span className="font-semibold text-foreground">rentabilité d'un agent vocal avocat</span>.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Left: Calculator Inputs */}
                        <div className="glass rounded-3xl p-8 space-y-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                                    <Calculator className="w-5 h-5 text-primary" />
                                    Paramètres de votre cabinet
                                </h3>

                                {/* Slider 1 */}
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium text-foreground">
                                            Appels entrants par jour
                                        </label>
                                        <span className="text-2xl font-bold text-primary">{appelsJour[0]}</span>
                                    </div>
                                    <Slider
                                        value={appelsJour}
                                        onValueChange={setAppelsJour}
                                        min={1}
                                        max={50}
                                        step={1}
                                        className="cursor-pointer"
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        Nombre moyen d'appels reçus quotidiennement par votre standard cabinet
                                    </p>
                                </div>

                                {/* Slider 2 */}
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium text-foreground">
                                            Taux d'appels manqués (%)
                                        </label>
                                        <span className="text-2xl font-bold text-destructive">{tauxDecro[0]}%</span>
                                    </div>
                                    <Slider
                                        value={tauxDecro}
                                        onValueChange={setTauxDecro}
                                        min={10}
                                        max={80}
                                        step={5}
                                        className="cursor-pointer"
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        Appels perdus hors horaires, en audience, ou secrétariat débordé
                                    </p>
                                </div>

                                {/* Slider 3 */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium text-foreground">
                                            Valeur moyenne d'un mandat (€)
                                        </label>
                                        <span className="text-2xl font-bold text-primary">{valeurMoyenne[0].toLocaleString()}€</span>
                                    </div>
                                    <Slider
                                        value={valeurMoyenne}
                                        onValueChange={setValeurMoyenne}
                                        min={500}
                                        max={10000}
                                        step={500}
                                        className="cursor-pointer"
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        Honoraires moyens par dossier (consultation, contentieux, etc.)
                                    </p>
                                </div>
                            </div>

                            {/* Info Box */}
                            <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-foreground">
                                        <span className="font-semibold">78% des prospects</span> choisissent le{" "}
                                        <span className="font-semibold">premier cabinet qui répond</span>. Chaque appel manqué est un mandat potentiel perdu.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Results */}
                        <div className="space-y-6">
                            {/* Impact Actuel */}
                            <div className="glass rounded-3xl p-8 border border-destructive/20">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                                        <TrendingUp className="w-5 h-5 text-destructive rotate-180" />
                                    </div>
                                    <h3 className="text-lg font-semibold">Impact actuel</h3>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <div className="text-sm text-muted-foreground mb-1">Appels manqués / mois</div>
                                        <div className="text-4xl font-bold text-destructive">{appelsManques}</div>
                                    </div>

                                    <div>
                                        <div className="text-sm text-muted-foreground mb-1">Mandats perdus / mois</div>
                                        <div className="text-4xl font-bold text-destructive">{mandatsPerdus}</div>
                                        <div className="text-xs text-muted-foreground mt-1">78% auraient signé si réponse</div>
                                    </div>

                                    <div className="pt-6 border-t border-border/50">
                                        <div className="text-sm text-muted-foreground mb-1">Perte de CA mensuelle</div>
                                        <div className="text-3xl font-bold text-destructive">{perteMensuelle.toLocaleString()} €</div>
                                    </div>

                                    <div className="p-4 rounded-xl bg-destructive/10">
                                        <div className="text-xs text-muted-foreground mb-1">Perte de CA annuelle</div>
                                        <div className="text-2xl font-bold text-destructive">{perteAnnuelle.toLocaleString()} €</div>
                                    </div>
                                </div>
                            </div>

                            {/* Avec IA */}
                            <div className="glass rounded-3xl p-8 border border-primary/30 shadow-[0_0_30px_hsl(280_90%_65%/0.2)]">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <TrendingUp className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold">Avec agent vocal IA</h3>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 rounded-xl bg-primary/10">
                                        <span className="text-sm font-medium">Taux de réponse</span>
                                        <span className="text-2xl font-bold text-primary">100%</span>
                                    </div>

                                    <div className="flex items-center justify-between p-4 rounded-xl bg-primary/10">
                                        <span className="text-sm font-medium">Mandats récupérés / mois</span>
                                        <span className="text-2xl font-bold text-primary">+{Math.round(mandatsPerdus * 0.8)}</span>
                                    </div>

                                    <div className="pt-4 border-t border-border/50">
                                        <div className="text-sm text-muted-foreground mb-2">CA additionnel annuel</div>
                                        <div className="text-4xl font-bold text-primary mb-4">+{economieIA.toLocaleString()} €</div>

                                        <a href="https://koalendar.com/e/meet-with-synapse" target="_blank" rel="noopener noreferrer">
                                            <Button variant="hero" size="lg" className="w-full group">
                                                Récupérer ces mandats
                                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SEO Footer Text */}
                    <div className="mt-12 text-center max-w-3xl mx-auto">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Ce <span className="font-semibold text-foreground">calculateur ROI cabinet avocat</span> estime le{" "}
                            <span className="font-semibold text-foreground">coût d'opportunité des appels manqués</span> et la{" "}
                            <span className="font-semibold text-foreground">rentabilité d'un standard téléphonique intelligent</span>.
                            L'<span className="font-semibold text-foreground">automatisation secrétariat juridique</span> permet une{" "}
                            <span className="font-semibold text-foreground">réception appels 24/7</span> et une{" "}
                            <span className="font-semibold text-foreground">qualification automatique affaires juridiques</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
