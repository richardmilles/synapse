import { useEffect } from "react";
import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User, CheckCircle2, TrendingUp, Phone, Euro, AlertCircle, FileText, Users, Timer, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogSidebar } from "@/components/blog/BlogSidebar";

const ConversionProspectsCourtier = () => {
    useEffect(() => {
        document.title = "Conversion des Prospects Courtier Assurance : +35% en 3 Mois | Synapse";
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
                                            <span className="text-xs font-semibold px-3 py-1 rounded-full border bg-accent/10 text-accent border-accent/20">Courtage & Assurance</span>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><span>28 décembre 2025</span></div>
                                                <div className="flex items-center gap-1"><Clock className="w-4 h-4" /><span>12 min de lecture</span></div>
                                            </div>
                                        </div>
                                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Conversion des Prospects Courtier Assurance : Comment Passer de 15% à 35%</h1>
                                        <p className="text-xl text-muted-foreground mb-8">Dans un marché ultra-concurrentiel, le premier courtier qui répond a 60% de chances de signer. Voici comment capter chaque prospect avant la concurrence.</p>
                                        <div className="flex items-center gap-3 pb-8 border-b border-border">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center"><User className="w-6 h-6 text-white" /></div>
                                            <div><div className="font-semibold">Équipe Synapse</div><div className="text-sm text-muted-foreground">Experts Courtage & Distribution Assurance</div></div>
                                        </div>
                                    </div>

                                    <div className="prose prose-lg max-w-none space-y-8">

                                        {/* Introduction */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-4">Le Parcours du Prospect Assurance en 2026</h2>
                                            <p className="text-lg mb-4">
                                                Un prospect qui cherche une assurance auto, habitation ou santé fait la même chose : il va sur un <strong>comparateur</strong>, il remplit un formulaire, et il reçoit <strong>5 à 10 devis</strong> de courtiers différents en quelques minutes.
                                            </p>
                                            <p className="text-lg mb-4">
                                                À ce moment précis, <strong>il est chaud</strong>. Il a un besoin, il a fait la démarche, il est prêt à souscrire. Mais dans 2 heures ? Il sera passé à autre chose. Demain ? Il aura oublié les différences entre les devis. La semaine prochaine ? Il ne se souviendra même plus qu'il a fait une demande.
                                            </p>
                                            <p className="text-lg mb-4">
                                                <strong>Le jeu est simple</strong> : le premier courtier qui l'appelle et qui crée un lien humain gagne. Les autres font de la figuration.
                                            </p>

                                            <div className="glass p-6 rounded-xl border border-destructive/30 my-6">
                                                <div className="flex items-start gap-4">
                                                    <AlertCircle className="w-6 h-6 text-destructive mt-1 shrink-0" />
                                                    <div>
                                                        <h3 className="font-bold text-lg mb-2">La Réalité des Leads Comparateurs</h3>
                                                        <p className="text-muted-foreground mb-3">
                                                            <strong>Statistiques secteur</strong> (source : étude interne 2025) :
                                                        </p>
                                                        <ul className="text-sm space-y-1 text-muted-foreground">
                                                            <li>• Taux de réponse moyen des courtiers : <strong>42%</strong> (58% des leads jamais contactés !)</li>
                                                            <li>• Délai moyen de 1er contact : <strong>4h30</strong></li>
                                                            <li>• Taux de conversion lead→souscription : <strong>12-18%</strong> en moyenne</li>
                                                            <li>• Taux si contact &lt;15 min : <strong>35-45%</strong></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Les erreurs classiques */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-4">Les 4 Erreurs Qui Tuent Vos Conversions</h2>

                                            <div className="space-y-6">
                                                <div className="glass p-5 rounded-xl border border-destructive/20">
                                                    <div className="flex items-start gap-4">
                                                        <Timer className="w-6 h-6 text-destructive mt-1 shrink-0" />
                                                        <div>
                                                            <h4 className="font-bold text-lg mb-2">1. Le Rappel "Quand J'ai le Temps"</h4>
                                                            <p className="text-muted-foreground text-sm mb-2">
                                                                Les leads arrivent à 10h. Vous êtes en RDV client jusqu'à 12h. Vous rappelez à 14h. Le prospect a déjà signé ailleurs à 11h30.
                                                            </p>
                                                            <p className="text-muted-foreground text-sm">
                                                                <strong>Règle d'or</strong> : un lead comparateur doit être appelé dans les 5-15 minutes. Pas dans l'heure. Pas dans la journée. Dans les MINUTES.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-5 rounded-xl border border-accent/20">
                                                    <div className="flex items-start gap-4">
                                                        <Phone className="w-6 h-6 text-accent mt-1 shrink-0" />
                                                        <div>
                                                            <h4 className="font-bold text-lg mb-2">2. L'Appel Non Préparé</h4>
                                                            <p className="text-muted-foreground text-sm mb-2">
                                                                "Bonjour, vous avez fait une demande de devis sur Assurland, c'est bien ça ?"
                                                            </p>
                                                            <p className="text-muted-foreground text-sm">
                                                                Le prospect a déjà reçu 3 appels identiques. Rien ne vous différencie. <strong>Il faut arriver avec une offre personnalisée</strong>, chiffrée, prête à présenter.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-5 rounded-xl border border-secondary/20">
                                                    <div className="flex items-start gap-4">
                                                        <FileText className="w-6 h-6 text-secondary mt-1 shrink-0" />
                                                        <div>
                                                            <h4 className="font-bold text-lg mb-2">3. Le Devis Envoyé Sans Explication</h4>
                                                            <p className="text-muted-foreground text-sm mb-2">
                                                                Vous envoyez un PDF de 15 pages. Le prospect ne comprend pas les franchises, les exclusions, les différences avec les autres devis.
                                                            </p>
                                                            <p className="text-muted-foreground text-sm">
                                                                <strong>Ce qui convertit</strong> : un appel de 10 minutes où vous expliquez VOTRE valeur ajoutée par rapport aux concurrents.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-5 rounded-xl border border-primary/20">
                                                    <div className="flex items-start gap-4">
                                                        <Users className="w-6 h-6 text-primary mt-1 shrink-0" />
                                                        <div>
                                                            <h4 className="font-bold text-lg mb-2">4. L'Absence de Relance Structurée</h4>
                                                            <p className="text-muted-foreground text-sm mb-2">
                                                                Le prospect dit "je réfléchis". Vous notez "à rappeler". Vous oubliez. 3 semaines plus tard, il a souscrit ailleurs.
                                                            </p>
                                                            <p className="text-muted-foreground text-sm">
                                                                <strong>La bonne pratique</strong> : une séquence de relance automatisée J+1, J+3, J+7 avec rappel des points clés et deadline.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Le processus optimisé */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-6">Le Processus de Conversion Optimisé</h2>

                                            <div className="space-y-6">
                                                <div className="glass p-6 rounded-xl border border-synapse-green/30 bg-synapse-green/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-synapse-green text-white flex items-center justify-center font-bold shrink-0">1</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">Lead Reçu → Appel en 5 Minutes</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                Dès qu'un lead arrive de votre comparateur ou de votre site, un appel automatique est déclenché. Si le commercial est disponible, il prend l'appel. Sinon, l'IA engage la conversation.
                                                            </p>
                                                            <div className="bg-background/50 p-4 rounded-lg border border-border">
                                                                <p className="text-sm mb-1"><strong>Script IA :</strong></p>
                                                                <p className="text-sm text-muted-foreground italic">
                                                                    "Bonjour [Prénom], c'est [Cabinet] suite à votre demande de devis [type]. J'ai bien reçu vos informations. Pouvez-vous me confirmer que c'est le bon moment pour en parler 2 minutes ?"
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-6 rounded-xl border border-primary/30 bg-primary/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">2</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">Qualification & Pré-Tarification</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                L'IA pose les questions complémentaires nécessaires pour affiner le devis :
                                                            </p>
                                                            <ul className="text-sm space-y-1 text-muted-foreground mb-3">
                                                                <li>• Date d'échéance du contrat actuel</li>
                                                                <li>• Sinistralité des 3 dernières années</li>
                                                                <li>• Couvertures prioritaires souhaitées</li>
                                                                <li>• Budget cible</li>
                                                            </ul>
                                                            <p className="text-muted-foreground text-sm">
                                                                Ces infos permettent au commercial de rappeler avec un devis personnalisé, pas un devis générique.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-6 rounded-xl border border-accent/30 bg-accent/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold shrink-0">3</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">Rappel Commercial avec Contexte Complet</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                Le commercial reçoit une fiche prospect enrichie : toutes les réponses de l'IA, l'historique des échanges, et même une suggestion de produit adapté.
                                                            </p>
                                                            <p className="text-muted-foreground text-sm">
                                                                <strong>Gain de temps</strong> : le commercial passe de 15 min de découverte à 5 min de confirmation. Il peut traiter 3x plus de leads.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-6 rounded-xl border border-secondary/30 bg-secondary/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold shrink-0">4</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">Séquence de Relance Automatisée</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                Si le prospect ne signe pas immédiatement, la relance se déclenche automatiquement :
                                                            </p>
                                                            <div className="space-y-2 text-sm">
                                                                <div className="flex items-start gap-2"><span className="font-bold text-secondary w-10">J+1</span> SMS : "Suite à notre échange, avez-vous des questions sur le devis ?"</div>
                                                                <div className="flex items-start gap-2"><span className="font-bold text-secondary w-10">J+3</span> Appel IA : "Je vous rappelle pour le devis [X]. Avez-vous pu le regarder ?"</div>
                                                                <div className="flex items-start gap-2"><span className="font-bold text-secondary w-10">J+7</span> Email : Récapitulatif + offre spéciale si signature avant J+10</div>
                                                                <div className="flex items-start gap-2"><span className="font-bold text-secondary w-10">J+14</span> Dernier appel : "Votre date d'échéance approche, souhaitez-vous qu'on finalise ?"</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Résultats */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-6">Étude de Cas : Cabinet Assur'Conseil (Courtier IARD)</h2>
                                            <p className="text-lg mb-4">
                                                <strong>Contexte</strong> : Cabinet de courtage IARD, 3 commerciaux, 400 leads/mois via comparateurs.
                                            </p>
                                            <p className="text-lg mb-4">
                                                <strong>Avant</strong> : Taux de réponse 65%, délai moyen 3h, taux de conversion 14%.
                                            </p>
                                            <p className="text-lg mb-6">
                                                <strong>Après</strong> (appel automatique &lt;5min + qualification IA + séquence relance) :
                                            </p>

                                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                                <div className="text-center p-6 glass rounded-xl border border-primary/20">
                                                    <Phone className="w-12 h-12 text-primary mx-auto mb-3" />
                                                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                                                    <div className="text-sm text-muted-foreground">Leads contactés</div>
                                                    <div className="text-xs text-primary font-semibold mt-1">vs 65% avant</div>
                                                </div>
                                                <div className="text-center p-6 glass rounded-xl border border-accent/20">
                                                    <TrendingUp className="w-12 h-12 text-accent mx-auto mb-3" />
                                                    <div className="text-4xl font-bold text-accent mb-2">31%</div>
                                                    <div className="text-sm text-muted-foreground">Taux conversion</div>
                                                    <div className="text-xs text-accent font-semibold mt-1">vs 14% (+120%)</div>
                                                </div>
                                                <div className="text-center p-6 glass rounded-xl border border-secondary/20">
                                                    <Euro className="w-12 h-12 text-secondary mx-auto mb-3" />
                                                    <div className="text-4xl font-bold text-secondary mb-2">+68</div>
                                                    <div className="text-sm text-muted-foreground">Contrats/mois</div>
                                                    <div className="text-xs text-secondary font-semibold mt-1">à prime moyenne 850€</div>
                                                </div>
                                            </div>

                                            <div className="glass p-6 rounded-xl border border-synapse-green/30 bg-synapse-green/5">
                                                <div className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-6 h-6 text-synapse-green mt-1" />
                                                    <div>
                                                        <h3 className="font-bold text-lg mb-2">Impact Business Annuel</h3>
                                                        <p className="text-muted-foreground">
                                                            +68 contrats/mois × 12 mois × 850€ prime moyenne × 15% commission = <strong className="text-synapse-green">+104 000€ de commissions annuelles</strong>. Sans recruter de commercial supplémentaire.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* CTA */}
                                        <section className="mt-12">
                                            <div className="glass p-8 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/5 to-transparent text-center">
                                                <h3 className="text-2xl font-bold mb-4">Convertissez Plus de Prospects</h3>
                                                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                                    Synapse déploie l'appel automatique en 5 minutes, la qualification IA, et la séquence de relance. Vos commerciaux ne gèrent que les prospects chauds et qualifiés.
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
                                            <Link to="/secteurs/courtage-assurance" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
                                                Découvrez notre solution pour courtiers en assurance
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

export default ConversionProspectsCourtier;
