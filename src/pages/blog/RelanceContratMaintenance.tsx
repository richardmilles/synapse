import { useEffect } from "react";
import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User, CheckCircle2, TrendingUp, ThermometerSnowflake, Euro, AlertCircle, Phone, CalendarCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogSidebar } from "@/components/blog/BlogSidebar";

const RelanceContratMaintenance = () => {
    useEffect(() => {
        document.title = "Relance Contrats Maintenance CVC : Sécurisez 100% de Votre Récurrent | Synapse";
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
                                            <span className="text-xs font-semibold px-3 py-1 rounded-full border bg-synapse-blue/10 text-synapse-blue border-synapse-blue/20">Chauffage & Climatisation</span>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><span>15 janvier 2026</span></div>
                                                <div className="flex items-center gap-1"><Clock className="w-4 h-4" /><span>9 min de lecture</span></div>
                                            </div>
                                        </div>
                                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Relance Contrats Maintenance CVC : Sécurisez 100% de Votre Récurrent</h1>
                                        <p className="text-xl text-muted-foreground mb-8">Le contrat d'entretien est la mine d'or du chauffagiste. Pourtant, 25% des clients oublient de renouveler par manque de relance efficace.</p>
                                        <div className="flex items-center gap-3 pb-8 border-b border-border">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-synapse-blue to-cyan-500 flex items-center justify-center"><User className="w-6 h-6 text-white" /></div>
                                            <div><div className="font-semibold">Équipe Synapse</div><div className="text-sm text-muted-foreground">Experts Génie Climatique & Maintenance</div></div>
                                        </div>
                                    </div>

                                    <div className="prose prose-lg max-w-none space-y-8">

                                        {/* Introduction */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-4">La Valeur Cachée du "Petit" Contrat d'Entretien</h2>
                                            <p className="text-lg mb-4">
                                                Un contrat d'entretien chaudière ou PAC à 150€/an peut sembler négligeable face à une installation à 12 000€. C'est une erreur stratégique majeure.
                                            </p>
                                            <p className="text-lg mb-4">
                                                Ce contrat est votre <strong>police d'assurance business</strong>. Il garantit du cash-flow régulier, fidélise le client pour 15 ans, et surtout : il vous donne la priorité absolue quand cette machine devra être remplacée (installation à 12K€).
                                            </p>
                                            <p className="text-lg mb-4">
                                                Perdre un contrat parce qu'on a oublié d'appeler le client pour fixer le RDV annuel, c'est perdre tout ce potentiel futur.
                                            </p>

                                            <div className="glass p-6 rounded-xl border border-destructive/30 my-6">
                                                <div className="flex items-start gap-4">
                                                    <AlertCircle className="w-6 h-6 text-destructive mt-1 shrink-0" />
                                                    <div>
                                                        <h3 className="font-bold text-lg mb-2">L'Attrition Silencieuse</h3>
                                                        <p className="text-muted-foreground mb-3">
                                                            <strong>L'ennemi n'est pas la concurrence, c'est l'oubli.</strong>
                                                        </p>
                                                        <ul className="text-sm space-y-1 text-muted-foreground">
                                                            <li>• <strong>65%</strong> des clients qui ne renouvellent pas le font "parce qu'on ne les a pas rappelés"</li>
                                                            <li>• Seulement <strong>15%</strong> partent pour la concurrence</li>
                                                            <li>• Une secrétaire passe <strong>20h/mois</strong> à courir après les RDV d'entretien</li>
                                                            <li>• Taux de succès d'un courrier papier : <strong>8%</strong></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Le processus manuel vs automatique */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-4">Pourquoi la Relance Manuelle Échoue</h2>

                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="glass p-5 rounded-xl border border-destructive/20">
                                                    <h4 className="font-bold text-lg mb-2 text-destructive">Processus Manuel (Classique)</h4>
                                                    <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                                                        <li>Secrétaire imprime liste des échéances du mois</li>
                                                        <li>Envoie un courrier ou mail générique "Pensez à prendre RDV"</li>
                                                        <li>Le client lit, se dit "je ferai ça lundi", et oublie</li>
                                                        <li>3 mois plus tard, la chaudière tombe en panne</li>
                                                        <li>Le client appelle en urgence, mécontent : "Vous ne m'avez pas fait l'entretien !"</li>
                                                        <li>Résultat : Stress, urgence, et risque de rupture de contrat</li>
                                                    </ol>
                                                </div>

                                                <div className="glass p-5 rounded-xl border border-synapse-green/20">
                                                    <h4 className="font-bold text-lg mb-2 text-synapse-green">Processus Automatisé (Synapse)</h4>
                                                    <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                                                        <li>Système détecte échéance à M-1</li>
                                                        <li>Envoie SMS interactif : "Bonjour, temps de la révision. Dispo mardi 14h ou mercredi 9h ?"</li>
                                                        <li>Client répond "Mardi 14h" par SMS</li>
                                                        <li>RDV confirmé automatiquement et mis dans le planning tech</li>
                                                        <li>Rappel J-1 pour éviter le no-show</li>
                                                        <li>Résultat : Planning rempli, 0 effort admin, client sécurisé</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </section>

                                        {/* La stratégie gagnante */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-6">La Stratégie de Renouvellement "Zéro Effort"</h2>

                                            <div className="space-y-6">
                                                <div className="glass p-6 rounded-xl border border-primary/30 bg-primary/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">1</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">L'Anticipation (M-1) avec Choix Facile</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                N'attendez pas la date anniversaire. Anticipez. Et surtout, ne demandez pas "quand êtes-vous dispo ?" (charge mentale pour le client).
                                                            </p>
                                                            <div className="bg-background/50 p-4 rounded-lg border border-border">
                                                                <p className="text-sm font-semibold mb-1">SMS Automatique :</p>
                                                                <p className="text-sm text-muted-foreground italic">
                                                                    "Bonjour M. Martin, c'est CVC Pro. Votre entretien chaudière arrive à échéance. Notre technicien Paul est dans votre secteur le 12/02. <br />
                                                                    Créneaux dispos : 9h00 ou 14h30. <br />
                                                                    Tapez 1 pour 9h, 2 pour 14h30, ou 3 pour être rappelé."
                                                                </p>
                                                            </div>
                                                            <p className="text-sm mt-3 text-primary font-semibold">Taux de réponse moyen : 65% dans l'heure.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-6 rounded-xl border border-accent/30 bg-accent/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold shrink-0">2</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">La Relance Téléphonique IA (J+3)</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                Si pas de réponse au SMS, l'IA appelle. Non pas pour embêter, mais pour rendre service.
                                                            </p>
                                                            <p className="text-muted-foreground text-sm italic mb-2">
                                                                "Bonjour, ici l'assistant de CVC Pro. Je ne voulais pas vous déranger, mais il est important de faire votre entretien avant l'hiver pour votre assurance. Souhaitez-vous que je vous propose un créneau ?"
                                                            </p>
                                                            <p className="text-sm font-semibold text-accent">
                                                                L'IA remplit le planning pendant que votre secrétaire gère la facturation.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-6 rounded-xl border border-secondary/30 bg-secondary/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold shrink-0">3</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">Le Certificat Instantané</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                Une fois l'intervention faite, le client reçoit automatiquement son attestation d'entretien par email + SMS. Plus de "je ne retrouve pas mon papier".
                                                            </p>
                                                            <p className="text-sm font-semibold text-secondary">
                                                                Satisfaction client immédiate et image de modernité.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Étude de cas */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-6">Étude de Cas : ThermoConfort (3 500 contrats)</h2>
                                            <p className="text-lg mb-4">
                                                <strong>Contexte</strong> : PME chauffage/clim, 3 500 contrats parc, 2 secrétaires débordées en saison de chauffe.
                                            </p>
                                            <p className="text-lg mb-4">
                                                <strong>Avant</strong> : 18% de contrats non honorés/perdus par an, relances manuelles sporadiques.
                                            </p>
                                            <p className="text-lg mb-6">
                                                <strong>Après automatisation</strong> (Campagne SMS M-1 + Relance appel IA) :
                                            </p>

                                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                                <div className="text-center p-6 glass rounded-xl border border-primary/20">
                                                    <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-3" />
                                                    <div className="text-4xl font-bold text-primary mb-2">96%</div>
                                                    <div className="text-sm text-muted-foreground">Taux renouvellement</div>
                                                    <div className="text-xs text-primary font-semibold mt-1">vs 82% avant</div>
                                                </div>
                                                <div className="text-center p-6 glass rounded-xl border border-accent/20">
                                                    <CalendarCheck className="w-12 h-12 text-accent mx-auto mb-3" />
                                                    <div className="text-4xl font-bold text-accent mb-2">0</div>
                                                    <div className="text-sm text-muted-foreground">Heure secrétaire</div>
                                                    <div className="text-xs text-accent font-semibold mt-1">pour la prise de RDV simple</div>
                                                </div>
                                                <div className="text-center p-6 glass rounded-xl border border-secondary/20">
                                                    <Euro className="w-12 h-12 text-secondary mx-auto mb-3" />
                                                    <div className="text-4xl font-bold text-secondary mb-2">+73K€</div>
                                                    <div className="text-sm text-muted-foreground">CA Maintenance</div>
                                                    <div className="text-xs text-secondary font-semibold mt-1">récupéré sur les "oubliés"</div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* CTA */}
                                        <section className="mt-12">
                                            <div className="glass p-8 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/5 to-transparent text-center">
                                                <h3 className="text-2xl font-bold mb-4">Sécurisez Votre Parc Maintenance</h3>
                                                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                                    Arrêtez de perdre de l'argent parce que vous n'avez pas le temps d'appeler. Synapse gère 100% de vos relances contrats en pilote automatique.
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
                                            <Link to="/secteurs/chauffage-climatisation" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
                                                Découvrez notre solution pour chauffagistes
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

export default RelanceContratMaintenance;
