import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Euro, Clock, AlertOctagon } from "lucide-react";

export const InterimCalculateurAbsences = () => {
    const [missionsMois, setMissionsMois] = useState([50]);
    const [tauxAbsence, setTauxAbsence] = useState([8]); // 8% absence last minute
    const [margeMoyenne, setMargeMoyenne] = useState([45]); // 45€ marge par jour/mission

    // Calculs
    const absencesMensuelles = Math.round(missionsMois[0] * (tauxAbsence[0] / 100)); // Nombre d'absences
    const missionsNonRemplacees = Math.round(absencesMensuelles * 0.6); // 60% non remplacées sans IA
    const perteMensuelle = missionsNonRemplacees * margeMoyenne[0] * 5; // Perte sur une semaine (5 jours) moy.
    const perteAnnuelle = perteMensuelle * 12;

    const missionsSauveesIA = Math.round(missionsNonRemplacees * 0.9); // IA sauve 90%
    const gainMensuelIA = missionsSauveesIA * margeMoyenne[0] * 5;
    const gainAnnuelIA = gainMensuelIA * 12;

    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">

                        {/* Inputs */}
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold">Le coût caché des <span className="text-destructive">absences</span></h2>
                                <p className="text-muted-foreground">
                                    Combien de marge perdez-vous chaque matin à cause d'absences non remplacées à temps ?
                                </p>
                            </div>

                            <Card className="p-6 space-y-8 border-primary/20 bg-background/50 backdrop-blur-sm">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <UsersIcon className="w-5 h-5 text-primary" />
                                            <span className="font-medium">Intérimaires actifs / mois</span>
                                        </div>
                                        <span className="font-bold text-lg">{missionsMois[0]}</span>
                                    </div>
                                    <Slider
                                        value={missionsMois}
                                        onValueChange={setMissionsMois}
                                        max={500}
                                        step={10}
                                        className="py-2"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <AlertOctagon className="w-5 h-5 text-destructive" />
                                            <span className="font-medium">Taux "No-Show" matin (%)</span>
                                        </div>
                                        <span className="font-bold text-lg text-destructive">{tauxAbsence[0]}%</span>
                                    </div>
                                    <Slider
                                        value={tauxAbsence}
                                        onValueChange={setTauxAbsence}
                                        max={25}
                                        step={1}
                                        className="py-2"
                                    />
                                    <p className="text-xs text-muted-foreground">Moyenne secteur: 5-10%</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <Euro className="w-5 h-5 text-accent" />
                                            <span className="font-medium">Marge brute / jour (€)</span>
                                        </div>
                                        <span className="font-bold text-lg">{margeMoyenne[0]}€</span>
                                    </div>
                                    <Slider
                                        value={margeMoyenne}
                                        onValueChange={setMargeMoyenne}
                                        max={150}
                                        step={5}
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
                                    <h3 className="text-lg font-semibold text-muted-foreground">Perte actuelle estimée</h3>
                                    <span className="text-xs px-2 py-1 rounded bg-destructive/10 text-destructive font-medium">Sans IA</span>
                                </div>
                                <div className="flex items-end gap-2">
                                    <span className="text-4xl font-bold text-foreground">{perteAnnuelle.toLocaleString()}€</span>
                                    <span className="text-sm text-muted-foreground mb-1">/ an</span>
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Soit env. <span className="font-bold text-destructive">{missionsNonRemplacees} missions</span> annulées par semaine faute de remplaçant immédiat.
                                </div>
                            </div>

                            {/* Avec Synapse */}
                            <div className="glass p-8 rounded-2xl border-l-4 border-l-primary space-y-4 bg-primary/5">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-lg font-semibold text-primary">Marge récupérée avec Synapse</h3>
                                    <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-medium">Avec IA</span>
                                </div>
                                <div className="flex items-end gap-2">
                                    <span className="text-5xl font-bold text-primary">+{gainAnnuelIA.toLocaleString()}€</span>
                                    <span className="text-sm text-muted-foreground mb-1">/ an</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Clock className="w-4 h-4 text-primary" />
                                        <span>Remplacement trouvé en <strong>15 minutes moyenne</strong></span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <CheckCircleIcon className="w-4 h-4 text-primary" />
                                        <span><strong>{missionsSauveesIA} missions</strong> sauvées par semaine</span>
                                    </div>
                                </div>

                                <Button className="w-full mt-4 group" size="lg">
                                    Récupérer cette marge
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

function UsersIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}

function CheckCircleIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
    )
}
