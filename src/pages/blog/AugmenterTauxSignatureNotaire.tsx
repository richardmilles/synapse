import { useEffect } from "react";
import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User, CheckCircle2, TrendingUp, FileCheck, Euro, AlertCircle, Phone, Mail, Home, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogSidebar } from "@/components/blog/BlogSidebar";

const AugmenterTauxSignatureNotaire = () => {
    useEffect(() => {
        document.title = "Augmenter le Taux de Signature Notaire : Réduisez les Délais de 20% | Synapse";
    }, []);

    return (
        <div className="relative min-h-screen bg-background overflow-x-hidden">
            <NeuralBackground />
            <Header />
            <main className="relative z-10 pt-20">
                <article className="py-16">
                    <div className="container px-4 sm:px-6">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-3 gap-12">
                                <div className="lg:col-span-2">
                                    <div className="mb-12">
                                        <div className="flex flex-wrap items-center gap-4 mb-6">
                                            <span className="text-xs font-semibold px-3 py-1 rounded-full border bg-primary/10 text-primary border-primary/20">Juridique</span>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><span>3 janvier 2026</span></div>
                                                <div className="flex items-center gap-1"><Clock className="w-4 h-4" /><span>10 min de lecture</span></div>
                                            </div>
                                        </div>
                                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Augmenter le Taux de Signature Notaire : Réduisez les Délais de 20%</h1>
                                        <p className="text-xl text-muted-foreground mb-8">Un dossier qui traîne 7 jours de plus = 12% de risque d'abandon. L'anticipation et la relance proactive font toute la différence.</p>
                                        <div className="flex items-center gap-3 pb-8 border-b border-border">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-synapse-violet flex items-center justify-center"><User className="w-6 h-6 text-white" /></div>
                                            <div><div className="font-semibold">Équipe Synapse</div><div className="text-sm text-muted-foreground">Experts Offices Notariaux</div></div>
                                        </div>
                                    </div>

                                    <div className="prose prose-lg max-w-none space-y-8">

                                        {/* Introduction */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-4">Le Goulot d'Étranglement des Études Notariales</h2>
                                            <p className="text-lg mb-4">
                                                Une vente immobilière type prend <strong>3 mois entre le compromis et l'acte</strong>. Sur ces 3 mois, le travail juridique réel du notaire représente 4-5 jours. Le reste ? <strong>De l'attente</strong>.
                                            </p>
                                            <p className="text-lg mb-4">
                                                Attente des documents du client. Attente du prêt bancaire. Attente du diagnostic. Attente de la mairie. Attente de la copropriété. Chaque jour d'attente est un jour où le dossier peut capoter.
                                            </p>
                                            <p className="text-lg mb-4">
                                                Et pendant que vos clercs relancent 40 dossiers à la main, les nouveaux dossiers s'accumulent. C'est un cercle vicieux où <strong>personne n'est vraiment suivi correctement</strong>.
                                            </p>

                                            <div className="glass p-6 rounded-xl border border-destructive/30 my-6">
                                                <div className="flex items-start gap-4">
                                                    <AlertCircle className="w-6 h-6 text-destructive mt-1 shrink-0" />
                                                    <div>
                                                        <h3 className="font-bold text-lg mb-2">Le Coût de l'Inertie</h3>
                                                        <p className="text-muted-foreground mb-3">
                                                            <strong>Statistiques observées</strong> dans les études notariales :
                                                        </p>
                                                        <ul className="text-sm space-y-1 text-muted-foreground">
                                                            <li>• <strong>35%</strong> des retards sont causés par des pièces manquantes côté client</li>
                                                            <li>• <strong>12%</strong> des ventes capotent dans le dernier mois (financement, désistement)</li>
                                                            <li>• Chaque semaine de retard = <strong>+8%</strong> de risque d'abandon</li>
                                                            <li>• Un dossier abandonné = <strong>zéro honoraire</strong> pour un travail déjà engagé</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Les causes des retards */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-4">Les 4 Causes Principales des Retards (et Comment les Anticiper)</h2>

                                            <div className="space-y-6">
                                                <div className="glass p-5 rounded-xl border border-destructive/20">
                                                    <div className="flex items-start gap-4">
                                                        <FileText className="w-6 h-6 text-destructive mt-1 shrink-0" />
                                                        <div>
                                                            <h4 className="font-bold text-lg mb-2">1. Les Pièces Client Non Fournies (35%)</h4>
                                                            <p className="text-muted-foreground text-sm mb-2">
                                                                L'acheteur n'a toujours pas fourni sa pièce d'identité à jour. Le vendeur n'a pas envoyé le dernier appel de charges. Le client "va le faire" depuis 3 semaines.
                                                            </p>
                                                            <p className="text-muted-foreground text-sm">
                                                                <strong>Solution</strong> : Relance automatique à J+7, J+14, J+21 avec rappel des pièces manquantes précises. Appel téléphonique automatisé à J+21 si toujours rien.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-5 rounded-xl border border-accent/20">
                                                    <div className="flex items-start gap-4">
                                                        <Euro className="w-6 h-6 text-accent mt-1 shrink-0" />
                                                        <div>
                                                            <h4 className="font-bold text-lg mb-2">2. Le Déblocage du Prêt (25%)</h4>
                                                            <p className="text-muted-foreground text-sm mb-2">
                                                                La banque a besoin d'un document. L'acheteur n'a pas vu l'email de son conseiller. Le dossier bloque en silence.
                                                            </p>
                                                            <p className="text-muted-foreground text-sm">
                                                                <strong>Solution</strong> : Point de suivi proactif avec l'acheteur toutes les 2 semaines : "Où en est votre prêt ? Votre banque a-t-elle tout ce qu'il lui faut ?"
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-5 rounded-xl border border-secondary/20">
                                                    <div className="flex items-start gap-4">
                                                        <Home className="w-6 h-6 text-secondary mt-1 shrink-0" />
                                                        <div>
                                                            <h4 className="font-bold text-lg mb-2">3. Les Tiers Externes (20%)</h4>
                                                            <p className="text-muted-foreground text-sm mb-2">
                                                                Le syndic met 3 semaines à envoyer le pré-état daté. La mairie ne répond pas au droit de préemption. Le diagnostiqueur a pris du retard.
                                                            </p>
                                                            <p className="text-muted-foreground text-sm">
                                                                <strong>Solution</strong> : Suivi calendrier automatisé avec alertes si un tiers dépasse son délai habituel. Relance automatique par email/téléphone.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-5 rounded-xl border border-primary/20">
                                                    <div className="flex items-start gap-4">
                                                        <Phone className="w-6 h-6 text-primary mt-1 shrink-0" />
                                                        <div>
                                                            <h4 className="font-bold text-lg mb-2">4. La Communication Dégradée (20%)</h4>
                                                            <p className="text-muted-foreground text-sm mb-2">
                                                                Le client ne sait pas où en est son dossier. Il appelle tous les 3 jours. Vos clercs passent leur temps à répondre au lieu d'avancer.
                                                            </p>
                                                            <p className="text-muted-foreground text-sm">
                                                                <strong>Solution</strong> : Email de suivi automatique hebdomadaire : "Votre dossier avance : voici ce qui est fait, voici ce qu'il manque, voici la prochaine étape."
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Le processus optimisé */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-6">Le Processus de Suivi Optimisé (Jour par Jour)</h2>

                                            <p className="text-lg mb-6">
                                                Voici une séquence de suivi type pour une vente immobilière, de J-30 (1 mois avant signature prévue) à J+1 :
                                            </p>

                                            <div className="space-y-3">
                                                <div className="glass p-4 rounded-xl border border-border flex items-center gap-4">
                                                    <span className="w-14 h-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center font-bold text-sm shrink-0">J-30</span>
                                                    <div>
                                                        <p className="font-semibold text-sm">Envoi de la checklist des pièces requises</p>
                                                        <p className="text-xs text-muted-foreground">Email détaillé avec liste des documents attendus, deadlines, et liens pour upload</p>
                                                    </div>
                                                </div>
                                                <div className="glass p-4 rounded-xl border border-border flex items-center gap-4">
                                                    <span className="w-14 h-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center font-bold text-sm shrink-0">J-23</span>
                                                    <div>
                                                        <p className="font-semibold text-sm">1ère relance pièces manquantes</p>
                                                        <p className="text-xs text-muted-foreground">Email ciblé uniquement sur les documents non encore reçus</p>
                                                    </div>
                                                </div>
                                                <div className="glass p-4 rounded-xl border border-border flex items-center gap-4">
                                                    <span className="w-14 h-10 rounded-lg bg-accent/20 text-accent flex items-center justify-center font-bold text-sm shrink-0">J-21</span>
                                                    <div>
                                                        <p className="font-semibold text-sm">Point téléphonique prêt bancaire</p>
                                                        <p className="text-xs text-muted-foreground">Appel automatisé : "Bonjour, où en est votre financement ? Avez-vous reçu l'offre de prêt ?"</p>
                                                    </div>
                                                </div>
                                                <div className="glass p-4 rounded-xl border border-border flex items-center gap-4">
                                                    <span className="w-14 h-10 rounded-lg bg-secondary/20 text-secondary flex items-center justify-center font-bold text-sm shrink-0">J-14</span>
                                                    <div>
                                                        <p className="font-semibold text-sm">Email de suivi global</p>
                                                        <p className="text-xs text-muted-foreground">"Votre dossier à 2 semaines de la signature : voici ce qui est OK, voici ce qui manque"</p>
                                                    </div>
                                                </div>
                                                <div className="glass p-4 rounded-xl border border-border flex items-center gap-4">
                                                    <span className="w-14 h-10 rounded-lg bg-destructive/20 text-destructive flex items-center justify-center font-bold text-sm shrink-0">J-10</span>
                                                    <div>
                                                        <p className="font-semibold text-sm">Alerte pièces critiques</p>
                                                        <p className="text-xs text-muted-foreground">Appel + SMS pour les pièces bloquantes toujours manquantes</p>
                                                    </div>
                                                </div>
                                                <div className="glass p-4 rounded-xl border border-border flex items-center gap-4">
                                                    <span className="w-14 h-10 rounded-lg bg-synapse-green/20 text-synapse-green flex items-center justify-center font-bold text-sm shrink-0">J-7</span>
                                                    <div>
                                                        <p className="font-semibold text-sm">Confirmation RDV signature</p>
                                                        <p className="text-xs text-muted-foreground">Appel de confirmation : date, heure, lieu, documents à apporter le jour J</p>
                                                    </div>
                                                </div>
                                                <div className="glass p-4 rounded-xl border border-synapse-green/30 bg-synapse-green/5 flex items-center gap-4">
                                                    <span className="w-14 h-10 rounded-lg bg-synapse-green text-white flex items-center justify-center font-bold text-sm shrink-0">J-1</span>
                                                    <div>
                                                        <p className="font-semibold text-sm">Rappel final</p>
                                                        <p className="text-xs text-muted-foreground">SMS : "Rappel : signature demain 14h à l'étude. N'oubliez pas [pièce manquante éventuelle]."</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Résultats */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-6">Étude de Cas : Étude Maître Lambert & Associés</h2>
                                            <p className="text-lg mb-4">
                                                <strong>Contexte</strong> : Étude de 3 notaires + 5 clercs, région parisienne, 400 actes/an dont 280 ventes immobilières.
                                            </p>
                                            <p className="text-lg mb-4">
                                                <strong>Avant</strong> : Délai moyen compromis-acte de 98 jours, 9% de dossiers abandonnés, clercs débordés par les relances manuelles.
                                            </p>
                                            <p className="text-lg mb-6">
                                                <strong>Après automatisation</strong> du suivi (séquence email/SMS/appels automatiques) :
                                            </p>

                                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                                <div className="text-center p-6 glass rounded-xl border border-primary/20">
                                                    <TrendingUp className="w-12 h-12 text-primary mx-auto mb-3" />
                                                    <div className="text-4xl font-bold text-primary mb-2">78j</div>
                                                    <div className="text-sm text-muted-foreground">Délai moyen</div>
                                                    <div className="text-xs text-primary font-semibold mt-1">vs 98j (-20%)</div>
                                                </div>
                                                <div className="text-center p-6 glass rounded-xl border border-accent/20">
                                                    <FileCheck className="w-12 h-12 text-accent mx-auto mb-3" />
                                                    <div className="text-4xl font-bold text-accent mb-2">4%</div>
                                                    <div className="text-sm text-muted-foreground">Taux abandon</div>
                                                    <div className="text-xs text-accent font-semibold mt-1">vs 9% avant</div>
                                                </div>
                                                <div className="text-center p-6 glass rounded-xl border border-secondary/20">
                                                    <Euro className="w-12 h-12 text-secondary mx-auto mb-3" />
                                                    <div className="text-4xl font-bold text-secondary mb-2">+14</div>
                                                    <div className="text-sm text-muted-foreground">Actes/an sauvés</div>
                                                    <div className="text-xs text-secondary font-semibold mt-1">~42 000€ d'honoraires</div>
                                                </div>
                                            </div>

                                            <div className="glass p-6 rounded-xl border border-synapse-green/30 bg-synapse-green/5">
                                                <div className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-6 h-6 text-synapse-green mt-1" />
                                                    <div>
                                                        <h3 className="font-bold text-lg mb-2">Temps Clercs Libéré</h3>
                                                        <p className="text-muted-foreground">
                                                            Les clercs passaient <strong>12h/semaine</strong> à relancer les clients et tiers. Après automatisation : <strong>3h/semaine</strong> de supervision. Le temps libéré est réinvesti dans le travail juridique à valeur ajoutée.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* CTA */}
                                        <section className="mt-12">
                                            <div className="glass p-8 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/5 to-transparent text-center">
                                                <h3 className="text-2xl font-bold mb-4">Accélérez Vos Signatures</h3>
                                                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                                    Synapse automatise le suivi complet de vos dossiers : relances email, appels téléphoniques, et alertes proactives. Vos clercs ne gèrent que les exceptions.
                                                </p>
                                                <a href="https://koalendar.com/e/meet-with-synapse" target="_blank" rel="noopener noreferrer">
                                                    <Button variant="hero" size="lg" className="group">
                                                        Réserver ma démo gratuite
                                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                                    </Button>
                                                </a>
                                            </div>
                                        </section>

                                        <div className="pt-8 border-t border-border">
                                            <Link to="/secteurs/notaires" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
                                                Découvrez notre solution pour études notariales
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-1"><div className="sticky top-24"><BlogSidebar /></div></div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
};

export default AugmenterTauxSignatureNotaire;
