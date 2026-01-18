import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Euro, FolderX, FileQuestion, CheckCircle, Clock } from "lucide-react";

export const NotairesCalculateurDossiers = () => {
    const [actesMois, setActesMois] = useState([30]);
    const [tauxRelance, setTauxRelance] = useState([20]); // 20% dossiers qui traînent
    const [prixActe, setPrixActe] = useState([1500]); // Moyenne émolument

    // Calculs
    const dossiersTrainants = Math.round(actesMois[0] * (tauxRelance[0] / 100));
    const tempsPerduRelanceHeures = dossiersTrainants * 2; // 2h de relance par dossier traînant
    const tauxAbandon = Math.round(dossiersTrainants * 0.15); // 15% finissent par être abandonnés ou aller ailleurs

    const perteCA = tauxAbandon * prixActe[0];
    const perteAnnuelle = perteCA * 12;

    const dossiersSauvesIA = Math.round(tauxAbandon * 0.8); // IA sauve 80%
    const gainAnnuelIA = dossiersSauvesIA * prixActe[0] * 12;
    const heuresGagnees = Math.round(tempsPerduRelanceHeures * 0.9); // IA fait 90% des relances

    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">

                        {/* Inputs */}
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold">Le coût des dossiers <span className="text-destructive">en souffrance</span></h2>
                                <p className="text-muted-foreground">
                                    Estimez l'impact financier des dossiers qui s'éternisent faute de relance proactive des clients.
                                </p>
                            </div>

                            <Card className="p-6 space-y-8 border-primary/20 bg-background/50 backdrop-blur-sm">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <FileQuestion className="w-5 h-5 text-primary" />
                                            <span className="font-medium">Nouveaux dossiers / mois</span>
                                        </div>
                                        <span className="font-bold text-lg">{actesMois[0]}</span>
                                    </div>
                                    <Slider
                                        value={actesMois}
                                        onValueChange={setActesMois}
                                        max={100}
                                        step={5}
                                        className="py-2"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <FolderX className="w-5 h-5 text-destructive" />
                                            <span className="font-medium">Taux dossiers "lents" (%)</span>
                                        </div>
                                        <span className="font-bold text-lg text-destructive">{tauxRelance[0]}%</span>
                                    </div>
                                    <Slider
                                        value={tauxRelance}
                                        onValueChange={setTauxRelance}
                                        max={50}
                                        step={5}
                                        className="py-2"
                                    />
                                    <p className="text-xs text-muted-foreground">Dossiers bloqués en attente pièces client.</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <Euro className="w-5 h-5 text-accent" />
                                            <span className="font-medium">Émolument moyen / acte (€)</span>
                                        </div>
                                        <span className="font-bold text-lg">{prixActe[0]}€</span>
                                    </div>
                                    <Slider
                                        value={prixActe}
                                        onValueChange={setPrixActe}
                                        max={5000}
                                        step={100}
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
                                    <h3 className="text-lg font-semibold text-muted-foreground">Manque à gagner annuel</h3>
                                    <span className="text-xs px-2 py-1 rounded bg-destructive/10 text-destructive font-medium">Sans IA</span>
                                </div>
                                <div className="flex items-end gap-2">
                                    <span className="text-4xl font-bold text-foreground">{perteAnnuelle.toLocaleString()}€</span>
                                    <span className="text-sm text-muted-foreground mb-1">/ an</span>
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Plus <span className="font-bold text-destructive">{tempsPerduRelanceHeures}h de clerc</span> perdues par mois en relances téléphoniques inefficaces.
                                </div>
                            </div>

                            {/* Avec Synapse */}
                            <div className="glass p-8 rounded-2xl border-l-4 border-l-primary space-y-4 bg-primary/5">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-lg font-semibold text-primary">Gain potentiel avec Synapse</h3>
                                    <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-medium">Avec IA</span>
                                </div>
                                <div className="flex items-end gap-2">
                                    <span className="text-5xl font-bold text-primary">+{gainAnnuelIA.toLocaleString()}€</span>
                                    <span className="text-sm text-muted-foreground mb-1">/ an</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm">
                                        <CheckCircle className="w-4 h-4 text-primary" />
                                        <span><strong>{dossiersSauvesIA} dossiers</strong> sauvés par mois</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Clock className="w-4 h-4 text-primary" />
                                        <span><strong>{heuresGagnees}h de clerc</strong> libérées / mois</span>
                                    </div>
                                </div>

                                <Button className="w-full mt-4 group" size="lg">
                                    Libérer mes clercs des relances
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
