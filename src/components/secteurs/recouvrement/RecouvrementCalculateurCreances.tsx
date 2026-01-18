import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Euro, TrendingUp, Wallet } from "lucide-react";

export const RecouvrementCalculateurCreances = () => {
    const [montantCreances, setMontantCreances] = useState([50000]); // 50k€ en cours
    const [ageMoyen, setAgeMoyen] = useState([60]); // 60 jours
    const [tauxRecouvrement, setTauxRecouvrement] = useState([40]); // 40% recouvré actuellement

    // Calculs basés sur études DSO
    // Plus la dette est vieille, moins on récupère.
    // L'IA agit très vite (J+1) donc augmente le taux drastiquement.

    const cashRecupereActuel = montantCreances[0] * (tauxRecouvrement[0] / 100);
    const perteActuelle = montantCreances[0] - cashRecupereActuel;

    // Projection IA :
    // - Contact x3
    // - Délai / 2
    // - Taux succès +30% (relatif) ou min 75% si dette récente
    const tauxRecouvrementIA = Math.min(tauxRecouvrement[0] * 1.5, 90); // Max 90%
    const cashRecupereIA = montantCreances[0] * (tauxRecouvrementIA / 100);
    const gainNetIA = cashRecupereIA - cashRecupereActuel;

    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">

                        {/* Inputs */}
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold">Réveillez votre <span className="text-primary">trésorerie</span> dormante</h2>
                                <p className="text-muted-foreground">
                                    Simulez l'impact d'une relance IA systématique sur vos créances actuelles.
                                </p>
                            </div>

                            <Card className="p-6 space-y-8 border-primary/20 bg-background/50 backdrop-blur-sm">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <Wallet className="w-5 h-5 text-primary" />
                                            <span className="font-medium">Encours client total (€)</span>
                                        </div>
                                        <span className="font-bold text-lg">{montantCreances[0].toLocaleString()}€</span>
                                    </div>
                                    <Slider
                                        value={montantCreances}
                                        onValueChange={setMontantCreances}
                                        max={500000}
                                        step={5000}
                                        className="py-2"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <TrendingUp className="w-5 h-5 text-destructive" />
                                            <span className="font-medium">Âge moyen dette (Jours)</span>
                                        </div>
                                        <span className="font-bold text-lg text-destructive">{ageMoyen[0]}J</span>
                                    </div>
                                    <Slider
                                        value={ageMoyen}
                                        onValueChange={setAgeMoyen}
                                        max={365}
                                        step={15}
                                        className="py-2"
                                    />
                                    <p className="text-xs text-muted-foreground">Plus on attend, moins on recouvre.</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <Euro className="w-5 h-5 text-accent" />
                                            <span className="font-medium">Taux recouvrement actuel (%)</span>
                                        </div>
                                        <span className="font-bold text-lg">{tauxRecouvrement[0]}%</span>
                                    </div>
                                    <Slider
                                        value={tauxRecouvrement}
                                        onValueChange={setTauxRecouvrement}
                                        max={100}
                                        step={5}
                                        className="py-2"
                                    />
                                </div>
                            </Card>
                        </div>

                        {/* Results */}
                        <div className="space-y-6">
                            {/* Sans Synapse */}
                            <div className="glass p-8 rounded-2xl border-l-4 border-l-muted space-y-4 opacity-80">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-lg font-semibold text-muted-foreground">Cash récupéré actuel</h3>
                                    <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground font-medium">Manuel</span>
                                </div>
                                <div className="flex items-end gap-2">
                                    <span className="text-3xl font-bold text-foreground">{cashRecupereActuel.toLocaleString()}€</span>
                                </div>
                                <div className="text-sm text-destructive">
                                    Reste dehors : {perteActuelle.toLocaleString()}€
                                </div>
                            </div>

                            {/* Avec Synapse */}
                            <div className="glass p-8 rounded-2xl border-l-4 border-l-primary space-y-4 bg-primary/5 shadow-xl">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-lg font-semibold text-primary">Cash récupéré avec Synapse</h3>
                                    <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-medium">Boost IA</span>
                                </div>
                                <div className="flex items-end gap-2">
                                    <span className="text-5xl font-bold text-primary">{cashRecupereIA.toLocaleString()}€</span>
                                </div>

                                <div className="p-4 bg-background/50 rounded-lg border border-primary/20 mt-4">
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-lg">Gain Net Immédiat</span>
                                        <span className="text-2xl font-bold text-green-500">+{gainNetIA.toLocaleString()}€</span>
                                    </div>
                                </div>

                                <Button className="w-full mt-4 group" size="lg">
                                    Récupérer ce cash maintenant
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
