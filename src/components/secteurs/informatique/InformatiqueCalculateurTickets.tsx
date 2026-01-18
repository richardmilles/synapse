import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Euro, Headphones, Clock } from "lucide-react";

export const InformatiqueCalculateurTickets = () => {
    const [ticketsMois, setTicketsMois] = useState([500]); // Volume tickets
    const [coutTicket, setCoutTicket] = useState([25]); // Coût moyen traitement ticket N1
    const [tempsMoyen, setTempsMoyen] = useState([15]); // 15 min par ticket

    // Calculs
    const coutTotalMensuel = ticketsMois[0] * coutTicket[0];
    const heuresTechMensuelles = (ticketsMois[0] * tempsMoyen[0]) / 60;

    // Impact IA :
    // - 40% tickets résolus 100% auto (0€ marginal)
    // - 60% tickets qualifiés (-5 min traitement)
    const tauxAuto = 0.40;
    const gainTempsQualif = 5; // min

    const economieDirecte = ticketsMois[0] * tauxAuto * coutTicket[0];
    const gainTempsRestant = (ticketsMois[0] * (1 - tauxAuto)) * (gainTempsQualif / 60); // Heures gagnées sur le reste
    const economieTotale = economieDirecte; // On compte surtout le cash direct des tickets non traités humainement

    // Pour simplifier l'affichage
    const heuresLiberees = Math.round((ticketsMois[0] * tauxAuto * tempsMoyen[0]) / 60 + gainTempsRestant);

    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">

                        {/* Inputs */}
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold">Le coût caché du <span className="text-destructive">support N1</span></h2>
                                <p className="text-muted-foreground">
                                    Vos techniciens qualifiés perdent leur temps sur des tâches à faible valeur ajoutée. Calculez l'économie potentielle.
                                </p>
                            </div>

                            <Card className="p-6 space-y-8 border-primary/20 bg-background/50 backdrop-blur-sm">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <Headphones className="w-5 h-5 text-primary" />
                                            <span className="font-medium">Volume Tickets / mois</span>
                                        </div>
                                        <span className="font-bold text-lg">{ticketsMois[0]}</span>
                                    </div>
                                    <Slider
                                        value={ticketsMois}
                                        onValueChange={setTicketsMois}
                                        max={5000}
                                        step={100}
                                        className="py-2"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <Euro className="w-5 h-5 text-destructive" />
                                            <span className="font-medium">Coût interne / ticket (€)</span>
                                        </div>
                                        <span className="font-bold text-lg text-destructive">{coutTicket[0]}€</span>
                                    </div>
                                    <Slider
                                        value={coutTicket}
                                        onValueChange={setCoutTicket}
                                        max={100}
                                        step={1}
                                        className="py-2"
                                    />
                                    <p className="text-xs text-muted-foreground">Inclut salaire tech, outils, charges.</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-5 h-5 text-accent" />
                                            <span className="font-medium">Temps moyen / ticket (min)</span>
                                        </div>
                                        <span className="font-bold text-lg">{tempsMoyen[0]}m</span>
                                    </div>
                                    <Slider
                                        value={tempsMoyen}
                                        onValueChange={setTempsMoyen}
                                        max={60}
                                        step={5}
                                        className="py-2"
                                    />
                                </div>
                            </Card>
                        </div>

                        {/* Results */}
                        <div className="space-y-6">
                            {/* Sans Synapse */}
                            <div className="glass p-8 rounded-2xl border-l-4 border-l-muted space-y-4 opacity-70">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-lg font-semibold text-muted-foreground">Coût Mensuel Actuel</h3>
                                    <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground font-medium">100% Humain</span>
                                </div>
                                <div className="flex items-end gap-2">
                                    <span className="text-3xl font-bold text-foreground">{coutTotalMensuel.toLocaleString()}€</span>
                                    <span className="text-sm text-muted-foreground mb-1">/ mois</span>
                                </div>
                                <div className="text-sm text-foreground">
                                    Mobilise <strong>{Math.round(heuresTechMensuelles)}h</strong> de technicien.
                                </div>
                            </div>

                            {/* Avec Synapse */}
                            <div className="glass p-8 rounded-2xl border-l-4 border-l-primary space-y-4 bg-primary/5 shadow-xl">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-lg font-semibold text-primary">Economie Mensuelle</h3>
                                    <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-medium">Hybride IA</span>
                                </div>
                                <div className="flex items-end gap-2">
                                    <span className="text-5xl font-bold text-primary">{Math.round(economieTotale).toLocaleString()}€</span>
                                    <span className="text-sm text-muted-foreground mb-1">/ mois</span>
                                </div>

                                <div className="space-y-2 mt-4">
                                    <p className="font-semibold flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-accent" />
                                        {heuresLiberees}h techniques libérées
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Vos techniciens peuvent enfin se consacrer aux projets, à la maintenance préventive et aux clients VIP.
                                    </p>
                                </div>

                                <Button className="w-full mt-4 group" size="lg">
                                    Automatiser mon N1
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
