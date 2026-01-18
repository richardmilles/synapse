import { Share2, FileCheck, Phone, UserCheck, Euro } from "lucide-react";

export const FormationFunnelInscription = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container px-4 sm:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4">
                        De l'intérêt à l'<span className="text-primary">inscription</span> sans friction
                    </h2>
                    <p className="text-muted-foreground">
                        L'IA guide vos prospects à travers toutes les étapes administratives lourdes (CPF, devis, financement) pour garantir leur présence le jour J.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Funnel Shape Container */}
                    <div className="flex flex-col items-center">

                        {/* Step 1: Broadest */}
                        <div className="w-full max-w-3xl glass p-6 rounded-2xl border border-border mb-4 relative group hover:border-primary/50 transition-colors">
                            <div className="absolute -left-6 top-1/2 -translate-y-1/2 bg-muted text-muted-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <Share2 className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg">Qualification Leads</div>
                                        <div className="text-sm text-muted-foreground">Tri automatique chaud/froid</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold">100%</div>
                                    <div className="text-xs text-muted-foreground">Traité</div>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="w-[85%] glass p-6 rounded-2xl border border-border mb-4 relative group hover:border-accent/50 transition-colors">
                            <div className="absolute -left-6 top-1/2 -translate-y-1/2 bg-muted text-muted-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="bg-accent/10 p-3 rounded-full">
                                        <FileCheck className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg">Dossier Financement</div>
                                        <div className="text-sm text-muted-foreground">Aide MPF / OPCO / CPF</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-accent">60%</div>
                                    <div className="text-xs text-muted-foreground">Conversion</div>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="w-[70%] glass p-6 rounded-2xl border border-border mb-4 relative group hover:border-secondary/50 transition-colors">
                            <div className="absolute -left-6 top-1/2 -translate-y-1/2 bg-muted text-muted-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="bg-secondary/10 p-3 rounded-full">
                                        <Phone className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg">Relance Pré-session</div>
                                        <div className="text-sm text-muted-foreground">Convocation & Rappels</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-secondary">95%</div>
                                    <div className="text-xs text-muted-foreground">Confirmation</div>
                                </div>
                            </div>
                        </div>

                        {/* Step 4: Narrowest */}
                        <div className="w-[55%] bg-primary/5 p-6 rounded-2xl border border-primary shadow-[0_0_30px_rgba(var(--primary),0.2)] relative">
                            <div className="absolute -left-6 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="bg-primary/20 p-3 rounded-full">
                                        <UserCheck className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg">Inscription Finale</div>
                                        <div className="text-sm text-muted-foreground">Élève présent J-J</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-primary">Succès</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Visual Arrows connecting steps */}
                    <div className="hidden lg:block absolute top-[10%] right-[10%] opacity-50">
                        <Euro className="w-8 h-8 text-yellow-500 animate-bounce" />
                    </div>
                </div>
            </div>
        </section>
    );
};
