import { useEffect } from "react";
import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User, CheckCircle2, TrendingUp, Users, AlertCircle, Phone, MessageSquare, Zap, Timer } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogSidebar } from "@/components/blog/BlogSidebar";

const AmeliorerTauxReponseRecrutement = () => {
    useEffect(() => {
        document.title = "Comment Améliorer le Taux de Réponse des Candidats en Recrutement (2026) | Synapse";
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
                                    {/* Header */}
                                    <div className="mb-12">
                                        <div className="flex flex-wrap items-center gap-4 mb-6">
                                            <span className="text-xs font-semibold px-3 py-1 rounded-full border bg-secondary/10 text-secondary border-secondary/20">RH & Recrutement</span>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><span>10 janvier 2026</span></div>
                                                <div className="flex items-center gap-1"><Clock className="w-4 h-4" /><span>14 min de lecture</span></div>
                                            </div>
                                        </div>
                                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Comment Améliorer le Taux de Réponse des Candidats en Recrutement (2026)</h1>
                                        <p className="text-xl text-muted-foreground mb-8">Dans un marché tendu, les meilleurs candidats disparaissent en 48h. Voici 7 techniques concrètes pour passer de 20% à 65% de taux de réponse.</p>
                                        <div className="flex items-center gap-3 pb-8 border-b border-border">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center"><User className="w-6 h-6 text-white" /></div>
                                            <div><div className="font-semibold">Équipe Synapse</div><div className="text-sm text-muted-foreground">Experts Recrutement & Automatisation RH</div></div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="prose prose-lg max-w-none space-y-8">

                                        {/* Introduction */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-4">Le Paradoxe du Recrutement en 2026</h2>
                                            <p className="text-lg mb-4">
                                                Vous sourcez 50 profils parfaits sur LinkedIn. Vous envoyez 50 InMails personnalisés. <strong>Résultat : 3 réponses.</strong> C'est le quotidien de 85% des recruteurs en 2026.
                                            </p>
                                            <p className="text-lg mb-4">
                                                Le problème n'est pas votre message. Le problème, c'est que vous êtes le 7ème recruteur à contacter ce candidat cette semaine. <strong>Les bons profils sont sur-sollicités</strong>, et ils ont appris à ignorer.
                                            </p>
                                            <p className="text-lg mb-4">
                                                Mais voici ce que la plupart des recruteurs ne comprennent pas : le taux de réponse ne dépend pas de ce que vous dites. <strong>Il dépend de QUAND et COMMENT vous le dites.</strong>
                                            </p>

                                            <div className="glass p-6 rounded-xl border border-destructive/30 my-6">
                                                <div className="flex items-start gap-4">
                                                    <AlertCircle className="w-6 h-6 text-destructive mt-1 shrink-0" />
                                                    <div>
                                                        <h3 className="font-bold text-lg mb-2">La Règle des 48 Heures</h3>
                                                        <p className="text-muted-foreground">
                                                            Un candidat qui a manifesté de l'intérêt (candidature, réponse positive) et qui n'est pas recontacté dans les 48h a <strong className="text-destructive">78% de chances de ne plus jamais répondre</strong>. Il considère que vous l'avez "ghosté", et il passe à autre chose.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Pourquoi les candidats ne répondent pas */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-4">Pourquoi Les Candidats Ne Répondent Pas (La Vraie Raison)</h2>

                                            <h3 className="text-2xl font-semibold mb-3 mt-6">1. Vous Arrivez Trop Tard</h3>
                                            <p className="text-lg mb-4">
                                                Quand un candidat postule ou répond positivement, il est dans un <strong>moment de disponibilité mentale</strong>. Il pense à votre offre, il s'imagine déjà dans le poste. Si vous le rappelez 5 jours plus tard, ce moment est passé. Il a repris sa routine, d'autres offres sont arrivées.
                                            </p>
                                            <p className="text-lg mb-4">
                                                <strong>Étude LinkedIn 2025</strong> : Les candidats recontactés dans l'heure ont un taux de conversion de 52%. Ceux recontactés à J+3 : 18%. À J+7 : 8%.
                                            </p>

                                            <h3 className="text-2xl font-semibold mb-3 mt-6">2. Vous Utilisez le Mauvais Canal</h3>
                                            <p className="text-lg mb-4">
                                                Vous envoyez un email à quelqu'un qui ne check ses mails pro que le lundi matin. Ou un SMS à quelqu'un qui ne répond qu'aux numéros enregistrés. Ou un InMail à quelqu'un qui a 500 messages non lus.
                                            </p>
                                            <p className="text-lg mb-4">
                                                <strong>Le secret</strong> : utilisez TOUS les canaux, dans un ordre logique. Si l'email ne marche pas en 24h, passez au téléphone. Si le téléphone échoue, tentez le SMS.
                                            </p>

                                            <h3 className="text-2xl font-semibold mb-3 mt-6">3. Vous Ne Donnez Pas Envie de Répondre</h3>
                                            <p className="text-lg mb-4">
                                                "Bonjour, j'ai une opportunité qui pourrait vous intéresser, pouvez-vous me rappeler ?" Cet email ne dit rien. Pourquoi le candidat ferait-il l'effort de rappeler un inconnu ?
                                            </p>
                                            <p className="text-lg mb-4">
                                                <strong>Ce qui fonctionne</strong> : donner l'essentiel en 3 lignes (quel poste, quelle boîte, quel salaire). Le candidat sait immédiatement si ça l'intéresse.
                                            </p>
                                        </section>

                                        {/* Les 7 techniques */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-6">7 Techniques Pour Maximiser Votre Taux de Réponse</h2>

                                            <div className="space-y-6">
                                                <div className="glass p-6 rounded-xl border border-synapse-green/30 bg-synapse-green/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-synapse-green text-white flex items-center justify-center font-bold shrink-0"><Timer className="w-5 h-5" /></div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">1. Le Rappel Dans l'Heure</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                <strong>Objectif</strong> : Appeler le candidat PENDANT qu'il pense encore à votre offre.
                                                            </p>
                                                            <p className="text-muted-foreground mb-3">
                                                                Un candidat qui postule à 10h doit être appelé avant 11h. S'il postule à 22h, vous l'appelez à 9h le lendemain matin. Ce premier contact humain crée un lien que les emails ne créeront jamais.
                                                            </p>
                                                            <div className="bg-background/50 p-4 rounded-lg border border-border mt-3">
                                                                <p className="text-sm font-semibold mb-1">Script type :</p>
                                                                <p className="text-sm text-muted-foreground italic">
                                                                    "Bonjour [Prénom], c'est [Votre nom] de [Cabinet]. Je vous appelle suite à votre candidature de ce matin pour le poste de [X]. Vous avez 2 minutes pour qu'on en parle ?"
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-6 rounded-xl border border-primary/30 bg-primary/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0"><MessageSquare className="w-5 h-5" /></div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">2. Le SMS de Confirmation Immédiat</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                Avant même de pouvoir appeler, envoyez un SMS automatique dans les 30 secondes suivant la candidature.
                                                            </p>
                                                            <div className="bg-background/50 p-4 rounded-lg border border-border">
                                                                <p className="text-sm text-muted-foreground italic">
                                                                    "Bonjour [Prénom], merci pour votre candidature au poste de [X] ! Un consultant vous rappelle sous 2h pour en discuter. À très vite ! [Prénom consultant], Cabinet [X]"
                                                                </p>
                                                            </div>
                                                            <p className="text-muted-foreground mt-3 text-sm">
                                                                Ce SMS a deux effets : il rassure le candidat (il n'envoie pas son CV dans le vide), et il crée une attente (il guette votre appel).
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-6 rounded-xl border border-accent/30 bg-accent/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold shrink-0">3</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">3. La Pré-Qualification en 5 Questions</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                Avant le premier échange approfondi, posez 5 questions clés pour filtrer et personnaliser :
                                                            </p>
                                                            <ul className="text-sm space-y-1 text-muted-foreground mb-3">
                                                                <li>1. Disponibilité pour démarrer ? (immédiate, 1 mois, 3 mois)</li>
                                                                <li>2. Prétentions salariales ? (avec ou sans bonus variable)</li>
                                                                <li>3. Mobilité géographique ? (télétravail, déplacements)</li>
                                                                <li>4. Points non-négociables ? (secteur, taille entreprise...)</li>
                                                                <li>5. Autres process en cours ?</li>
                                                            </ul>
                                                            <p className="text-muted-foreground text-sm">
                                                                Ces 5 questions peuvent être posées par IA vocale, libérant le consultant pour les entretiens de fond.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-6 rounded-xl border border-secondary/30 bg-secondary/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold shrink-0"><Phone className="w-5 h-5" /></div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">4. La Séquence Multi-Canal sur 72h</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                Si le premier appel échoue, ne laissez pas tomber. Voici la séquence optimale :
                                                            </p>
                                                            <div className="space-y-2 text-sm">
                                                                <div className="flex items-center gap-2"><span className="w-12 font-bold text-secondary">H+0</span> Appel 1 + SMS si pas de réponse</div>
                                                                <div className="flex items-center gap-2"><span className="w-12 font-bold text-secondary">H+4</span> Appel 2 (autre créneau horaire)</div>
                                                                <div className="flex items-center gap-2"><span className="w-12 font-bold text-secondary">H+24</span> Email personnalisé avec détails du poste</div>
                                                                <div className="flex items-center gap-2"><span className="w-12 font-bold text-secondary">H+48</span> Appel 3 + SMS "dernière tentative"</div>
                                                                <div className="flex items-center gap-2"><span className="w-12 font-bold text-secondary">H+72</span> Email final avec question ouverte</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-6 rounded-xl border border-synapse-violet/30 bg-synapse-violet/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-synapse-violet text-white flex items-center justify-center font-bold shrink-0"><Zap className="w-5 h-5" /></div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">5. La Proposition de Créneaux Précis</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                Ne demandez jamais "Quand êtes-vous disponible ?". Cette question crée une charge mentale. À la place :
                                                            </p>
                                                            <div className="bg-background/50 p-4 rounded-lg border border-border">
                                                                <p className="text-sm text-muted-foreground italic">
                                                                    "Je vous propose un échange de 15 minutes : mardi 14h ou jeudi 10h, qu'est-ce qui vous arrange le mieux ?"
                                                                </p>
                                                            </div>
                                                            <p className="text-muted-foreground mt-3 text-sm">
                                                                Le candidat n'a qu'à choisir. Taux de prise de RDV : +40% vs question ouverte.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-6 rounded-xl border border-synapse-blue/30 bg-synapse-blue/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-synapse-blue text-white flex items-center justify-center font-bold shrink-0">6</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">6. Le Pitch Transparent Dès le 1er Contact</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                Arrêtez les mystères. Dès le premier message, donnez :
                                                            </p>
                                                            <ul className="text-sm space-y-1 text-muted-foreground">
                                                                <li>• <strong>L'intitulé exact</strong> du poste</li>
                                                                <li>• <strong>Le type d'entreprise</strong> (startup, grand groupe, PME)</li>
                                                                <li>• <strong>La fourchette salariale</strong> (oui, dites-la)</li>
                                                                <li>• <strong>La localisation</strong> et politique télétravail</li>
                                                            </ul>
                                                            <p className="text-muted-foreground mt-3 text-sm">
                                                                Un candidat qui répond après avoir vu ces infos est 3x plus qualifié qu'un curieux qui répond à un message vague.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-6 rounded-xl border border-synapse-green/30 bg-synapse-green/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-synapse-green text-white flex items-center justify-center font-bold shrink-0">7</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">7. Le Feedback Systématique (Même Négatif)</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                Un candidat non retenu aujourd'hui peut être parfait demain. Le problème : 90% des cabinets disparaissent après un refus sans explication.
                                                            </p>
                                                            <p className="text-muted-foreground mb-3">
                                                                Envoyez TOUJOURS un message de clôture, même si c'est un refus. Expliquez pourquoi. Le candidat vous respectera et répondra la prochaine fois.
                                                            </p>
                                                            <div className="bg-background/50 p-4 rounded-lg border border-border">
                                                                <p className="text-sm text-muted-foreground italic">
                                                                    "Bonjour [Prénom], après échange avec notre client, le poste a été pourvu par un profil avec plus d'expérience sur [X]. Je garde votre CV pour de prochaines opportunités. À bientôt !"
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Résultats concrets */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-6">Étude de Cas : Cabinet Talents Partners</h2>
                                            <p className="text-lg mb-4">
                                                <strong>Contexte</strong> : Cabinet de recrutement IT, 4 consultants, 120 mandats/an
                                            </p>
                                            <p className="text-lg mb-4">
                                                <strong>Avant</strong> : Taux de réponse candidats 22%, délai moyen 1er contact 3.5 jours, taux de placement 31%
                                            </p>
                                            <p className="text-lg mb-6">
                                                <strong>Après automatisation</strong> (rappel auto &lt;1h, pré-qualification IA, séquence multi-canal) :
                                            </p>

                                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                                <div className="text-center p-6 glass rounded-xl border border-primary/20">
                                                    <TrendingUp className="w-12 h-12 text-primary mx-auto mb-3" />
                                                    <div className="text-4xl font-bold text-primary mb-2">58%</div>
                                                    <div className="text-sm text-muted-foreground">Taux de réponse</div>
                                                    <div className="text-xs text-primary font-semibold mt-1">vs 22% avant</div>
                                                </div>
                                                <div className="text-center p-6 glass rounded-xl border border-accent/20">
                                                    <Users className="w-12 h-12 text-accent mx-auto mb-3" />
                                                    <div className="text-4xl font-bold text-accent mb-2">48%</div>
                                                    <div className="text-sm text-muted-foreground">Taux de placement</div>
                                                    <div className="text-xs text-accent font-semibold mt-1">vs 31% avant</div>
                                                </div>
                                                <div className="text-center p-6 glass rounded-xl border border-secondary/20">
                                                    <Clock className="w-12 h-12 text-secondary mx-auto mb-3" />
                                                    <div className="text-4xl font-bold text-secondary mb-2">47min</div>
                                                    <div className="text-sm text-muted-foreground">Délai 1er contact</div>
                                                    <div className="text-xs text-secondary font-semibold mt-1">vs 3.5 jours</div>
                                                </div>
                                            </div>

                                            <div className="glass p-6 rounded-xl border border-synapse-green/30 bg-synapse-green/5">
                                                <div className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-6 h-6 text-synapse-green mt-1" />
                                                    <div>
                                                        <h3 className="font-bold text-lg mb-2">Impact Business</h3>
                                                        <p className="text-muted-foreground">
                                                            <strong className="text-synapse-green">+23 placements/an</strong> avec le même nombre de consultants. À 8 000€ de fee moyen = <strong className="text-synapse-green">+184 000€ de CA annuel</strong>.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* CTA */}
                                        <section className="mt-12">
                                            <div className="glass p-8 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/5 to-transparent text-center">
                                                <h3 className="text-2xl font-bold mb-4">Ne Laissez Plus Filer les Meilleurs Candidats</h3>
                                                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                                    Synapse automatise le rappel immédiat, la pré-qualification par IA vocale, et les séquences de relance multi-canal. Résultat : vos consultants ne gèrent que les candidats déjà qualifiés et intéressés.
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
                                            <Link to="/secteurs/recrutement" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
                                                Découvrez notre solution pour cabinets de recrutement
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-1">
                                    <div className="sticky top-24">
                                        <BlogSidebar />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
};

export default AmeliorerTauxReponseRecrutement;
