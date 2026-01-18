import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Euro, Users, Repeat } from "lucide-react";

export const AssuranceCalculateurRenouvellements = () => {
    const [portefeuille, setPortefeuille] = useState([500]); // 500 contrats
    const [tauxChute, setTauxChute] = useState([12]); // 12% partent ailleurs
    const [commissionMoyenne, setCommissionMoyenne] = useState([250]); // 250€ comm / contrat

    // Calculs
    const clientsPerdus = Math.round(portefeuille[0] * (tauxChute[0] / 100));
    const perteCommissions = clientsPerdus * commissionMoyenne[0];

    // Impact IA :
    // - Détection risque départ
    // - Proposition proactive meilleure offre
    // - Taux chute divisé par 2 (minimum)
    const tauxChuteIA = Math.round(tauxChute[0] / 2.5);
    const clientsPerdusIA = Math.round(portefeuille[0] * (tauxChuteIA / 100));
    const commissionSauvee = (clientsPerdus - clientsPerdusIA) * commissionMoyenne[0];

    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">

                        {/* Inputs */}
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold">La valeur de la <span className="text-primary">rétention</span></h2>
                                <p className="text-muted-foreground">
                                    Simulez le gain de chiffre d'affaires en réduisant votre taux de chute grâce à l'anticipation IA.
                                </p>
                            </div>

                            <Card className="p-6 space-y-8 border-primary/20 bg-background/50 backdrop-blur-sm">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <Users className="w-5 h-5 text-primary" />
                                            <span className="font-medium">Contrats en portefeuille</span>
                                        </div>
                                        <span className="font-bold text-lg">{portefeuille[0]}</span>
                                    </div>
                                    <Slider
                                        value={portefeuille}
                                        onValueChange={setPortefeuille}
                                        max={2000}
                                        step={50}
                                        className="py-2"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <Repeat className="w-5 h-5 text-destructive" />
                                            <span className="font-medium">Taux de chute annuel (%)</span>
                                        </div>
                                        <span className="font-bold text-lg text-destructive">{tauxChute[0]}%</span>
                                    </div>
                                    <Slider
                                        value={tauxChute}
                                        onValueChange={setTauxChute}
                                        max={30}
                                        step={1}
                                        className="py-2"
                                    />
                                    <p className="text-xs text-muted-foreground">Clients qui ne renouvellent pas.</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <Euro className="w-5 h-5 text-accent" />
                                            <span className="font-medium">Commission moy. / an (€)</span>
                                        </div>
                                        <span className="font-bold text-lg">{commissionMoyenne[0]}€</span>
                                    </div>
                                    <Slider
                                        value={commissionMoyenne}
                                        onValueChange={setCommissionMoyenne}
                                        max={1000}
                                        step={50}
                                        className="py-2"
                                    />
                                </div>
                            </Card>
                        </div>

                        {/* Results */}
                        <div className="space-y-6">
                            {/* Sans Synapse */}
                            <div className="glass p-8 rounded-2xl border-l-4 border-l-destructive/50 space-y-4">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-lg font-semibold text-muted-foreground">Perte annuelle commissions</h3>
                                    <span className="text-xs px-2 py-1 rounded bg-destructive/10 text-destructive font-medium">Sans IA</span>
                                </div>
                                <div className="flex items-end gap-2">
                                    <span className="text-4xl font-bold text-foreground">{perteCommissions.toLocaleString()}€</span>
                                    <span className="text-sm text-muted-foreground mb-1">/ an</span>
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Soit <span className="font-bold text-destructive">{clientsPerdus} clients</span> perdus chaque année.
                                </div>
                            </div>

                            {/* Avec Synapse */}
                            <div className="glass p-8 rounded-2xl border-l-4 border-l-primary space-y-4 bg-primary/5 shadow-xl">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-lg font-semibold text-primary">Commissions sauvées</h3>
                                    <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-medium">Avec IA</span>
                                </div>
                                <div className="flex items-end gap-2">
                                    <span className="text-5xl font-bold text-primary">+{commissionSauvee.toLocaleString()}€</span>
                                    <span className="text-sm text-muted-foreground mb-1">/ an</span>
                                </div>

                                <div className="space-y-2 mt-4">
                                    <p className="text-sm">L'IA détecte l'augmentation des tarifs avant l'échéance et propose automatiquement une alternative moins chère pour retenir le client.</p>
                                </div>

                                <Button className="w-full mt-4 group" size="lg">
                                    Sécuriser mon portefeuille
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
