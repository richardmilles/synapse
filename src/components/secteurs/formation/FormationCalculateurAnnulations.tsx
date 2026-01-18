import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Euro, UserX, Armchair } from "lucide-react";

export const FormationCalculateurAnnulations = () => {
    const [prixSession, setPrixSession] = useState([1200]); // Prix moyen formation
    const [placesSession, setPlacesSession] = useState([15]); // Places dispos
    const [sessionsAn, setSessionsAn] = useState([20]); // Sessions par an
    const [tauxNoShow, setTauxNoShow] = useState([15]); // 15% non présentés ou annulés last minute

    // Calculs
    const placesTotales = placesSession[0] * sessionsAn[0];
    const placesPerdues = Math.round(placesTotales * (tauxNoShow[0] / 100));
    const perteAnnuelle = placesPerdues * prixSession[0];

    // Impact IA :
    // - Liste d'attente dynamique gérée par IA
    // - Remplacement last-minute automatique
    // - Rappels sms/tel efficaces
    // - On récupère 80% des places perdues
    const placesSauvees = Math.round(placesPerdues * 0.8);
    const gainAnnuel = placesSauvees * prixSession[0];

    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">

                        {/* Inputs */}
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold">Le coût des <span className="text-destructive">chaises vides</span></h2>
                                <p className="text-muted-foreground">
                                    Une place vide le jour J est une perte sèche irréversible. Calculez ce que l'optimisation IA peut vous rapporter.
                                </p>
                            </div>

                            <Card className="p-6 space-y-8 border-primary/20 bg-background/50 backdrop-blur-sm">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <Euro className="w-5 h-5 text-primary" />
                                            <span className="font-medium">Prix place moyen (€)</span>
                                        </div>
                                        <span className="font-bold text-lg">{prixSession[0]}€</span>
                                    </div>
                                    <Slider
                                        value={prixSession}
                                        onValueChange={setPrixSession}
                                        max={3000}
                                        step={100}
                                        className="py-2"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <Armchair className="w-5 h-5 text-accent" />
                                            <span className="font-medium">Volume Annuel (Places)</span>
                                        </div>
                                        <span className="font-bold text-lg">{placesTotales}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <span className="text-xs text-muted-foreground">Places / sess.</span>
                                            <Slider
                                                value={placesSession}
                                                onValueChange={setPlacesSession}
                                                max={50}
                                                step={1}
                                                className="py-2"
                                            />
                                        </div>
                                        <div>
                                            <span className="text-xs text-muted-foreground">Sessions / an</span>
                                            <Slider
                                                value={sessionsAn}
                                                onValueChange={setSessionsAn}
                                                max={100}
                                                step={1}
                                                className="py-2"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <UserX className="w-5 h-5 text-destructive" />
                                            <span className="font-medium">Taux No-Show / Annulation (%)</span>
                                        </div>
                                        <span className="font-bold text-lg text-destructive">{tauxNoShow[0]}%</span>
                                    </div>
                                    <Slider
                                        value={tauxNoShow}
                                        onValueChange={setTauxNoShow}
                                        max={50}
                                        step={1}
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
                                    Soit <span className="font-bold text-destructive">{placesPerdues} places</span> inoccupées.
                                </div>
                            </div>

                            {/* Avec Synapse */}
                            <div className="glass p-8 rounded-2xl border-l-4 border-l-primary space-y-4 bg-primary/5 shadow-xl">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-lg font-semibold text-primary">Revenu additionnel potentiel</h3>
                                    <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-medium">Avec IA</span>
                                </div>
                                <div className="flex items-end gap-2">
                                    <span className="text-5xl font-bold text-primary">+{gainAnnuel.toLocaleString()}€</span>
                                    <span className="text-sm text-muted-foreground mb-1">/ an</span>
                                </div>

                                <div className="space-y-2 mt-4 text-sm">
                                    <p>L'IA gère une liste d'attente active et contacte instantanément les candidats intéressés dès qu'une place se libère, même la veille.</p>
                                </div>

                                <Button className="w-full mt-4 group" size="lg">
                                    Remplir mes sessions
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
