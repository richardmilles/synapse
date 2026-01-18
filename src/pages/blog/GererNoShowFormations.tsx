import { useEffect } from "react";
import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User, CheckCircle2, TrendingUp, Users, Euro, AlertCircle, Phone, MessageSquare, CalendarCheck, UserX } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogSidebar } from "@/components/blog/BlogSidebar";

const GererNoShowFormations = () => {
    useEffect(() => {
        document.title = "Gérer les No-Shows en Formation Professionnelle : 5 Solutions Efficaces | Synapse";
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
                                            <span className="text-xs font-semibold px-3 py-1 rounded-full border bg-synapse-violet/10 text-synapse-violet border-synapse-violet/20">Formation Professionnelle</span>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><span>8 janvier 2026</span></div>
                                                <div className="flex items-center gap-1"><Clock className="w-4 h-4" /><span>11 min de lecture</span></div>
                                            </div>
                                        </div>
                                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Gérer les No-Shows en Formation Professionnelle : 5 Solutions Concrètes</h1>
                                        <p className="text-xl text-muted-foreground mb-8">Les places vides coûtent en moyenne 18 000€/an à un organisme de formation. Voici comment réduire vos no-shows de 65% et remplir vos sessions à 100%.</p>
                                        <div className="flex items-center gap-3 pb-8 border-b border-border">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-synapse-violet to-primary flex items-center justify-center"><User className="w-6 h-6 text-white" /></div>
                                            <div><div className="font-semibold">Équipe Synapse</div><div className="text-sm text-muted-foreground">Experts Formation Professionnelle & CPF</div></div>
                                        </div>
                                    </div>

                                    <div className="prose prose-lg max-w-none space-y-8">

                                        {/* Introduction */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-4">L'Hémorragie Silencieuse des Organismes de Formation</h2>
                                            <p className="text-lg mb-4">
                                                Vous avez une session de 12 places. 12 inscrits. Le jour J, <strong>9 personnes se présentent</strong>. 3 places vides. Zéro revenu sur ces 3 places, mais le formateur est payé, la salle est louée, les supports sont imprimés.
                                            </p>
                                            <p className="text-lg mb-4">
                                                Ce scénario se répète <strong>semaine après semaine</strong> dans la majorité des organismes de formation. Selon une étude de la FFP (Fédération de la Formation Professionnelle), le taux moyen de no-show oscille entre <strong>15% et 25%</strong> selon les secteurs.
                                            </p>
                                            <p className="text-lg mb-4">
                                                Le pire ? Ces absences ne sont pas des "clients perdus". Ce sont des clients <strong>qui ont signé, validé, parfois même payé</strong>... et qui ne viennent simplement pas. Ou qui annulent 2 jours avant, quand il est trop tard pour les remplacer.
                                            </p>

                                            <div className="glass p-6 rounded-xl border border-destructive/30 my-6">
                                                <div className="flex items-start gap-4">
                                                    <AlertCircle className="w-6 h-6 text-destructive mt-1 shrink-0" />
                                                    <div>
                                                        <h3 className="font-bold text-lg mb-2">Calcul du Coût Réel</h3>
                                                        <p className="text-muted-foreground mb-3">
                                                            <strong>Hypothèse</strong> : Organisme de formation avec 200 sessions/an, 10 stagiaires/session moyenne, tarif moyen 500€/stagiaire.
                                                        </p>
                                                        <ul className="text-sm space-y-1 text-muted-foreground">
                                                            <li>• CA potentiel : 200 × 10 × 500€ = <strong>1 000 000€</strong></li>
                                                            <li>• Avec 18% de no-shows : 180 places vides sur l'année</li>
                                                            <li>• Manque à gagner direct : <strong className="text-destructive">90 000€/an</strong></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Pourquoi les gens ne viennent pas */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-4">Pourquoi Les Stagiaires Ne Viennent Pas (Pas d'Excuse)</h2>

                                            <p className="text-lg mb-4">
                                                Contrairement à ce que pensent beaucoup d'organismes, les no-shows ne sont <strong>presque jamais</strong> dus à une urgence imprévue. Voici les vraies raisons, par ordre de fréquence :
                                            </p>

                                            <div className="space-y-4 my-6">
                                                <div className="glass p-4 rounded-xl border border-border flex items-start gap-4">
                                                    <UserX className="w-6 h-6 text-destructive mt-1 shrink-0" />
                                                    <div>
                                                        <h4 className="font-bold">1. L'oubli pur et simple (40%)</h4>
                                                        <p className="text-muted-foreground text-sm">La formation a été inscrite il y a 3 semaines. Le stagiaire n'a pas noté la date dans son agenda. Il a oublié.</p>
                                                    </div>
                                                </div>
                                                <div className="glass p-4 rounded-xl border border-border flex items-start gap-4">
                                                    <CalendarCheck className="w-6 h-6 text-accent mt-1 shrink-0" />
                                                    <div>
                                                        <h4 className="font-bold">2. Le conflit d'agenda tardif (25%)</h4>
                                                        <p className="text-muted-foreground text-sm">Une réunion importante a été posée sur le créneau. Comme c'était "juste une formation", elle passe en second.</p>
                                                    </div>
                                                </div>
                                                <div className="glass p-4 rounded-xl border border-border flex items-start gap-4">
                                                    <MessageSquare className="w-6 h-6 text-secondary mt-1 shrink-0" />
                                                    <div>
                                                        <h4 className="font-bold">3. La procrastination administrative (20%)</h4>
                                                        <p className="text-muted-foreground text-sm">Le dossier CPF n'est pas finalisé. Il manque une pièce. Le stagiaire reporte, puis oublie.</p>
                                                    </div>
                                                </div>
                                                <div className="glass p-4 rounded-xl border border-border flex items-start gap-4">
                                                    <Phone className="w-6 h-6 text-primary mt-1 shrink-0" />
                                                    <div>
                                                        <h4 className="font-bold">4. Le désengagement progressif (15%)</h4>
                                                        <p className="text-muted-foreground text-sm">L'enthousiasme initial s'est dissipé. La motivation était liée à un moment précis qui est passé.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="text-lg mb-4">
                                                <strong>Le point commun de ces 4 raisons ?</strong> Elles sont toutes évitables par une communication proactive. Les no-shows ne sont pas une fatalité, ils sont un symptôme de <strong>silence entre l'inscription et le jour J</strong>.
                                            </p>
                                        </section>

                                        {/* Les 5 solutions */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-6">5 Solutions Concrètes (Testées et Prouvées)</h2>

                                            <div className="space-y-6">
                                                <div className="glass p-6 rounded-xl border border-synapse-green/30 bg-synapse-green/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-synapse-green text-white flex items-center justify-center font-bold shrink-0">1</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">La Séquence de Rappels J-7, J-3, J-1</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                <strong>Principe</strong> : Ne jamais laisser plus de 3 jours sans contact avec le stagiaire inscrit.
                                                            </p>
                                                            <div className="space-y-2 text-sm mb-4">
                                                                <div className="flex items-start gap-2">
                                                                    <span className="font-bold text-synapse-green w-10">J-7</span>
                                                                    <span className="text-muted-foreground">Email + SMS : "Votre formation [X] approche ! Confirmez votre présence."</span>
                                                                </div>
                                                                <div className="flex items-start gap-2">
                                                                    <span className="font-bold text-synapse-green w-10">J-3</span>
                                                                    <span className="text-muted-foreground">Appel téléphonique : "Bonjour, je vous appelle pour confirmer votre venue lundi. Des questions ?"</span>
                                                                </div>
                                                                <div className="flex items-start gap-2">
                                                                    <span className="font-bold text-synapse-green w-10">J-1</span>
                                                                    <span className="text-muted-foreground">SMS : "Rappel : formation [X] demain 9h, [Adresse]. À demain !"</span>
                                                                </div>
                                                            </div>
                                                            <p className="text-sm font-semibold text-synapse-green">
                                                                Résultat moyen observé : -35% de no-shows juste avec cette séquence simple.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-6 rounded-xl border border-primary/30 bg-primary/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">2</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">La Liste d'Attente Active</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                <strong>Principe</strong> : Toujours avoir 2-3 personnes prêtes à prendre une place libérée.
                                                            </p>
                                                            <p className="text-muted-foreground mb-3">
                                                                Dès qu'une annulation est détectée (lors de l'appel J-3 par exemple), le système appelle immédiatement le premier de la liste d'attente :
                                                            </p>
                                                            <div className="bg-background/50 p-4 rounded-lg border border-border">
                                                                <p className="text-sm text-muted-foreground italic">
                                                                    "Bonjour [Prénom], une place vient de se libérer pour la formation [X] de lundi. Êtes-vous toujours intéressé(e) ? Je peux vous confirmer votre place immédiatement."
                                                                </p>
                                                            </div>
                                                            <p className="text-muted-foreground mt-3 text-sm">
                                                                En moins de 10 minutes, la place annulée peut être repourvue. Taux de remplissage observé : 80% des places annulées à J-3 ou avant.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-6 rounded-xl border border-accent/30 bg-accent/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold shrink-0">3</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">L'Accompagnement CPF Proactif</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                <strong>Le problème</strong> : 30% des inscriptions CPF ne se finalisent jamais car le stagiaire bloque sur une étape administrative.
                                                            </p>
                                                            <p className="text-muted-foreground mb-3">
                                                                <strong>La solution</strong> : Un appel systématique à J+3 après l'inscription initiale pour :
                                                            </p>
                                                            <ul className="text-sm space-y-1 text-muted-foreground mb-3">
                                                                <li>• Vérifier que le dossier CPF est créé</li>
                                                                <li>• Guider pas à pas si besoin ("Allez sur moncompteformation.gouv.fr, cliquez sur...")</li>
                                                                <li>• Identifier et résoudre les blocages (pièce manquante, co-financement...)</li>
                                                            </ul>
                                                            <p className="text-sm font-semibold text-accent">
                                                                Un dossier bien finalisé = un stagiaire engagé = un stagiaire présent.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-6 rounded-xl border border-secondary/30 bg-secondary/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold shrink-0">4</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">La Politique de Report Flexible (Mais Encadrée)</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                <strong>Le paradoxe</strong> : Une politique trop stricte ("aucun report") incite les gens à ne simplement pas venir plutôt qu'à prévenir. Une politique trop souple ("reportez quand vous voulez") crée de l'instabilité.
                                                            </p>
                                                            <p className="text-muted-foreground mb-3">
                                                                <strong>La bonne pratique</strong> :
                                                            </p>
                                                            <ul className="text-sm space-y-1 text-muted-foreground">
                                                                <li>• Report gratuit possible <strong>jusqu'à J-7</strong></li>
                                                                <li>• Report avec frais de 50€ entre <strong>J-7 et J-3</strong></li>
                                                                <li>• Aucun report après <strong>J-3</strong> (sauf cas de force majeure documenté)</li>
                                                            </ul>
                                                            <p className="text-muted-foreground mt-3 text-sm">
                                                                Cette politique incite à prévenir TÔT. Une annulation à J-7 = le temps de repourvoir la place.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-6 rounded-xl border border-synapse-violet/30 bg-synapse-violet/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-synapse-violet text-white flex items-center justify-center font-bold shrink-0">5</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">L'Acompte Symbolique (Le Game Changer)</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                <strong>Statistique clé</strong> : Un stagiaire qui a payé même 50€ d'acompte a un taux de présence de 95%, contre 78% pour un stagiaire qui n'a rien avancé.
                                                            </p>
                                                            <p className="text-muted-foreground mb-3">
                                                                Ce n'est pas une question d'argent. C'est une question <strong>d'engagement psychologique</strong>. Payer, même une somme symbolique, crée un lien.
                                                            </p>
                                                            <div className="bg-background/50 p-4 rounded-lg border border-border mt-3">
                                                                <p className="text-sm text-muted-foreground">
                                                                    <strong>Comment le présenter</strong> : "Pour valider votre inscription, nous vous demandons un acompte de 50€, déductible du prix final de la formation. Cet acompte vous sera intégralement remboursé si vous annulez avant J-7."
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Étude de cas */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-6">Étude de Cas : Centre de Formation ProSkills</h2>
                                            <p className="text-lg mb-4">
                                                <strong>Contexte</strong> : Organisme de formation spécialisé en bureautique et langues, 600 stagiaires/an, 80 sessions.
                                            </p>
                                            <p className="text-lg mb-4">
                                                <strong>Avant</strong> : Taux de no-show de 22%, pas de liste d'attente formalisée, rappels manuels (quand le temps le permet).
                                            </p>
                                            <p className="text-lg mb-6">
                                                <strong>Après implémentation</strong> des 5 solutions (automatisées via Synapse) :
                                            </p>

                                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                                <div className="text-center p-6 glass rounded-xl border border-primary/20">
                                                    <TrendingUp className="w-12 h-12 text-primary mx-auto mb-3" />
                                                    <div className="text-4xl font-bold text-primary mb-2">7%</div>
                                                    <div className="text-sm text-muted-foreground">Taux de no-show</div>
                                                    <div className="text-xs text-primary font-semibold mt-1">vs 22% avant (-68%)</div>
                                                </div>
                                                <div className="text-center p-6 glass rounded-xl border border-accent/20">
                                                    <Users className="w-12 h-12 text-accent mx-auto mb-3" />
                                                    <div className="text-4xl font-bold text-accent mb-2">98%</div>
                                                    <div className="text-sm text-muted-foreground">Taux de remplissage</div>
                                                    <div className="text-xs text-accent font-semibold mt-1">grâce à la liste d'attente</div>
                                                </div>
                                                <div className="text-center p-6 glass rounded-xl border border-secondary/20">
                                                    <Euro className="w-12 h-12 text-secondary mx-auto mb-3" />
                                                    <div className="text-4xl font-bold text-secondary mb-2">+67K€</div>
                                                    <div className="text-sm text-muted-foreground">CA récupéré/an</div>
                                                    <div className="text-xs text-secondary font-semibold mt-1">places qui auraient été vides</div>
                                                </div>
                                            </div>

                                            <div className="glass p-6 rounded-xl border border-synapse-green/30 bg-synapse-green/5">
                                                <div className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-6 h-6 text-synapse-green mt-1" />
                                                    <div>
                                                        <h3 className="font-bold text-lg mb-2">Temps Admin Économisé</h3>
                                                        <p className="text-muted-foreground">
                                                            Avant : 1 assistante passait <strong>15h/semaine</strong> sur les rappels et relances téléphoniques.
                                                            Après : <strong>3h/semaine</strong> de supervision du système automatisé.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Checklist */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-6">Checklist : Par Où Commencer ?</h2>

                                            <div className="space-y-3">
                                                <div className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                                                    <div>
                                                        <h4 className="font-bold">Semaine 1 : Mettre en place les rappels SMS J-1</h4>
                                                        <p className="text-muted-foreground text-sm">Le quick win le plus simple. Un SMS la veille réduit les no-shows de 15% à lui seul.</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                                                    <div>
                                                        <h4 className="font-bold">Semaine 2 : Ajouter l'appel de confirmation J-3</h4>
                                                        <p className="text-muted-foreground text-sm">Un appel permet de détecter les annulations et de réagir à temps.</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                                                    <div>
                                                        <h4 className="font-bold">Semaine 3 : Créer et activer la liste d'attente</h4>
                                                        <p className="text-muted-foreground text-sm">Former l'équipe à proposer la liste d'attente pour les sessions pleines.</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                                                    <div>
                                                        <h4 className="font-bold">Mois 2 : Instaurer la politique d'acompte</h4>
                                                        <p className="text-muted-foreground text-sm">Tester sur une catégorie de formations, mesurer l'impact, puis généraliser.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* CTA */}
                                        <section className="mt-12">
                                            <div className="glass p-8 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/5 to-transparent text-center">
                                                <h3 className="text-2xl font-bold mb-4">Remplissez Vos Sessions à 100%</h3>
                                                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                                    Synapse automatise toute cette chaîne : rappels SMS/email, appels de confirmation IA, gestion de liste d'attente, et même l'accompagnement CPF. Vous ne gérez que les exceptions.
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
                                            <Link to="/secteurs/formation-professionnelle" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
                                                Découvrez notre solution pour organismes de formation
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

export default GererNoShowFormations;
