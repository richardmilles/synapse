import { useEffect } from "react";
import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User, CheckCircle2, TrendingUp, Zap, Euro, AlertCircle, Phone, MapPin, Wrench, Timer } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogSidebar } from "@/components/blog/BlogSidebar";

const OptimiserPlanningDepannage = () => {
    useEffect(() => {
        document.title = "Optimiser le Planning d'Intervention Dépannage : Guide Urgence 2026 | Synapse";
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
                                            <span className="text-xs font-semibold px-3 py-1 rounded-full border bg-synapse-green/10 text-synapse-green border-synapse-green/20">Services Urgence</span>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><span>30 décembre 2025</span></div>
                                                <div className="flex items-center gap-1"><Clock className="w-4 h-4" /><span>11 min de lecture</span></div>
                                            </div>
                                        </div>
                                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Optimiser le Planning d'Intervention Dépannage : Guide Complet 2026</h1>
                                        <p className="text-xl text-muted-foreground mb-8">Chaque minute de retard = 15% de chances de perdre le client. Voici comment capter 100% des urgences et dispatcher intelligemment vos techniciens.</p>
                                        <div className="flex items-center gap-3 pb-8 border-b border-border">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-synapse-green to-primary flex items-center justify-center"><User className="w-6 h-6 text-white" /></div>
                                            <div><div className="font-semibold">Équipe Synapse</div><div className="text-sm text-muted-foreground">Experts Services d'Urgence & Planification Terrain</div></div>
                                        </div>
                                    </div>

                                    <div className="prose prose-lg max-w-none space-y-8">

                                        {/* Introduction */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-4">Le Business Model de l'Urgence : Répondre Vite ou Perdre</h2>
                                            <p className="text-lg mb-4">
                                                Un client avec une <strong>fuite d'eau à 23h</strong> ou une <strong>serrure cassée un dimanche</strong> n'attend pas. Il appelle 3 dépanneurs en 5 minutes. <strong>Le premier qui décroche et qui peut intervenir gagne</strong>. Les autres ? Ils n'auront même pas l'occasion de rappeler.
                                            </p>
                                            <p className="text-lg mb-4">
                                                C'est la réalité du dépannage d'urgence : plombiers, serruriers, électriciens, vitriers, chauffagistes. Votre chiffre d'affaires dépend directement de votre <strong>capacité à décrocher immédiatement et à envoyer quelqu'un rapidement</strong>.
                                            </p>
                                            <p className="text-lg mb-4">
                                                Et pourtant, combien d'appels manquez-vous quand votre technicien est sur une intervention ? Combien de clients raccrochez-vous en leur disant "rappelez dans 1 heure" ?
                                            </p>

                                            <div className="glass p-6 rounded-xl border border-destructive/30 my-6">
                                                <div className="flex items-start gap-4">
                                                    <AlertCircle className="w-6 h-6 text-destructive mt-1 shrink-0" />
                                                    <div>
                                                        <h3 className="font-bold text-lg mb-2">La Fenêtre de 3 Minutes</h3>
                                                        <p className="text-muted-foreground mb-3">
                                                            <strong>Étude terrain</strong> réalisée sur 500 appels d'urgence :
                                                        </p>
                                                        <ul className="text-sm space-y-1 text-muted-foreground">
                                                            <li>• Si le client obtient une réponse en &lt;1 min : <strong>95%</strong> de conversion</li>
                                                            <li>• Entre 1 et 3 min : <strong>78%</strong> de conversion</li>
                                                            <li>• Entre 3 et 5 min : <strong>52%</strong> de conversion</li>
                                                            <li>• Après 5 min (rappel) : <strong>18%</strong> de conversion</li>
                                                        </ul>
                                                        <p className="text-sm mt-2 text-muted-foreground">
                                                            <strong>Moralité</strong> : chaque seconde compte. Un appel non décroché est un client perdu.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Les 3 défis */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-4">Les 3 Défis du Dépannage d'Urgence</h2>

                                            <div className="space-y-6">
                                                <div className="glass p-5 rounded-xl border border-destructive/20">
                                                    <div className="flex items-start gap-4">
                                                        <Phone className="w-6 h-6 text-destructive mt-1 shrink-0" />
                                                        <div>
                                                            <h4 className="font-bold text-lg mb-2">1. Les Appels Quand Tout le Monde Est Occupé</h4>
                                                            <p className="text-muted-foreground text-sm mb-2">
                                                                Vos 2 techniciens sont en intervention. Vous êtes au volant. Le téléphone sonne. Qui répond ?
                                                            </p>
                                                            <p className="text-muted-foreground text-sm">
                                                                <strong>Réalité</strong> : 35% des appels arrivent quand personne n'est disponible pour répondre. Ces 35% représentent potentiellement 35% de CA en moins.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-5 rounded-xl border border-accent/20">
                                                    <div className="flex items-start gap-4">
                                                        <MapPin className="w-6 h-6 text-accent mt-1 shrink-0" />
                                                        <div>
                                                            <h4 className="font-bold text-lg mb-2">2. Le Dispatch Non-Optimisé</h4>
                                                            <p className="text-muted-foreground text-sm mb-2">
                                                                Un client appelle du 15ème arrondissement. Votre tech A est à Nanterre, votre tech B finit dans 20 min à Boulogne. Qui envoyer ?
                                                            </p>
                                                            <p className="text-muted-foreground text-sm">
                                                                <strong>Réalité</strong> : Sans visibilité temps réel sur la localisation et la charge de vos techs, vous dispatcher au feeling. Résultat : trajets inutiles, retards, clients mécontents.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-5 rounded-xl border border-secondary/20">
                                                    <div className="flex items-start gap-4">
                                                        <Wrench className="w-6 h-6 text-secondary mt-1 shrink-0" />
                                                        <div>
                                                            <h4 className="font-bold text-lg mb-2">3. La Qualification Approximative</h4>
                                                            <p className="text-muted-foreground text-sm mb-2">
                                                                "J'ai une fuite". OK mais : fuite visible ou infiltration ? Arrivée d'eau coupée ou pas ? Accessible ou derrière un meuble ?
                                                            </p>
                                                            <p className="text-muted-foreground text-sm">
                                                                <strong>Réalité</strong> : Sans qualification, le tech arrive sans savoir ce qui l'attend. Il manque parfois une pièce. Il sous-estime le temps. Tout le planning décale.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* La solution */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-6">La Solution : L'Agent Vocal IA + Dispatch Intelligent</h2>

                                            <p className="text-lg mb-6">
                                                Voici comment une réponse automatisée intelligente transforme votre business :
                                            </p>

                                            <div className="space-y-6">
                                                <div className="glass p-6 rounded-xl border border-synapse-green/30 bg-synapse-green/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-synapse-green text-white flex items-center justify-center font-bold shrink-0"><Timer className="w-5 h-5" /></div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">Étape 1 : Réponse Immédiate (0 seconde)</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                L'agent vocal IA décroche <strong>à la première sonnerie</strong>. Pas de file d'attente, pas de musique d'attente. Le client parle immédiatement à quelqu'un (une IA, mais il ne le sait pas forcément).
                                                            </p>
                                                            <div className="bg-background/50 p-4 rounded-lg border border-border">
                                                                <p className="text-sm mb-1"><strong>Exemple de dialogue :</strong></p>
                                                                <p className="text-sm text-muted-foreground italic">"Dépannage Express, bonjour. J'ai bien compris que vous avez une urgence. Pouvez-vous me décrire le problème en quelques mots ?"</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-6 rounded-xl border border-primary/30 bg-primary/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">2</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">Étape 2 : Qualification en 60 Secondes</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                L'IA pose les questions clés pour qualifier l'intervention :
                                                            </p>
                                                            <ul className="text-sm space-y-1 text-muted-foreground mb-3">
                                                                <li>• <strong>Nature du problème</strong> : fuite, coupure, blocage...</li>
                                                                <li>• <strong>Gravité</strong> : eau qui coule ? coupure totale ? danger ?</li>
                                                                <li>• <strong>Localisation exacte</strong> : adresse + étage + code</li>
                                                                <li>• <strong>Accessibilité</strong> : parking, escalier, digicode</li>
                                                                <li>• <strong>Coordonnées</strong> : nom, téléphone de rappel</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-6 rounded-xl border border-accent/30 bg-accent/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold shrink-0">3</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">Étape 3 : Dispatch Automatique</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                En fonction de l'adresse du client et de la localisation temps réel de vos techniciens, le système :
                                                            </p>
                                                            <ul className="text-sm space-y-1 text-muted-foreground mb-3">
                                                                <li>• Identifie le tech le plus proche ET le plus rapidement disponible</li>
                                                                <li>• Calcule l'ETA (temps d'arrivée estimé)</li>
                                                                <li>• Envoie une notification push au tech avec toutes les infos</li>
                                                                <li>• Confirme au client : "Un technicien sera chez vous dans 35 minutes"</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-6 rounded-xl border border-secondary/30 bg-secondary/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold shrink-0">4</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">Étape 4 : Suivi Automatique</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                Le client reçoit automatiquement :
                                                            </p>
                                                            <ul className="text-sm space-y-1 text-muted-foreground mb-3">
                                                                <li>• SMS de confirmation avec nom du tech et ETA</li>
                                                                <li>• SMS quand le tech est en route</li>
                                                                <li>• SMS quand le tech est arrivé</li>
                                                            </ul>
                                                            <p className="text-muted-foreground text-sm">
                                                                <strong>Effet</strong> : le client est rassuré, ne vous rappelle pas pour savoir "où en est le technicien", et a une expérience premium.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Cas particuliers */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-6">Gérer les Cas Particuliers</h2>

                                            <div className="space-y-4">
                                                <div className="glass p-4 rounded-xl border border-border">
                                                    <h4 className="font-bold mb-2">🌙 Les appels de nuit (22h-7h)</h4>
                                                    <p className="text-muted-foreground text-sm">
                                                        L'IA qualifie l'urgence et la gravité. Si c'est critique (inondation active, danger), elle réveille le tech d'astreinte. Si ça peut attendre (fuite lente sous l'évier), elle propose un RDV à 8h avec confirmation SMS.
                                                    </p>
                                                </div>
                                                <div className="glass p-4 rounded-xl border border-border">
                                                    <h4 className="font-bold mb-2">📍 Hors zone d'intervention</h4>
                                                    <p className="text-muted-foreground text-sm">
                                                        L'IA détecte que l'adresse est hors de votre périmètre. Elle s'excuse poliment et peut même recommander un confrère partenaire (avec qui vous avez un accord de réciprocité).
                                                    </p>
                                                </div>
                                                <div className="glass p-4 rounded-xl border border-border">
                                                    <h4 className="font-bold mb-2">👷 Tous les techs occupés</h4>
                                                    <p className="text-muted-foreground text-sm">
                                                        L'IA donne un délai réaliste ("prochain créneau dans 2h30") et propose de rappeler le client 30 min avant l'arrivée du tech. Le client choisit d'attendre ou de chercher ailleurs - mais vous ne l'avez pas fait attendre dans le vide.
                                                    </p>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Résultats */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-6">Étude de Cas : Dépann'Express (Plomberie/Serrurerie)</h2>
                                            <p className="text-lg mb-4">
                                                <strong>Contexte</strong> : Entreprise de dépannage urgence, 4 techniciens, zone Île-de-France, ~60 appels/jour.
                                            </p>
                                            <p className="text-lg mb-4">
                                                <strong>Avant</strong> : 1 standardiste à temps plein, 28% d'appels manqués, délai moyen de dispatch 12 min, 3.2 interventions/tech/jour.
                                            </p>
                                            <p className="text-lg mb-6">
                                                <strong>Après</strong> (agent vocal IA + dispatch automatique) :
                                            </p>

                                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                                <div className="text-center p-6 glass rounded-xl border border-primary/20">
                                                    <Phone className="w-12 h-12 text-primary mx-auto mb-3" />
                                                    <div className="text-4xl font-bold text-primary mb-2">0%</div>
                                                    <div className="text-sm text-muted-foreground">Appels manqués</div>
                                                    <div className="text-xs text-primary font-semibold mt-1">vs 28% avant</div>
                                                </div>
                                                <div className="text-center p-6 glass rounded-xl border border-accent/20">
                                                    <Timer className="w-12 h-12 text-accent mx-auto mb-3" />
                                                    <div className="text-4xl font-bold text-accent mb-2">&lt;90s</div>
                                                    <div className="text-sm text-muted-foreground">Temps dispatch</div>
                                                    <div className="text-xs text-accent font-semibold mt-1">vs 12 min avant</div>
                                                </div>
                                                <div className="text-center p-6 glass rounded-xl border border-secondary/20">
                                                    <Wrench className="w-12 h-12 text-secondary mx-auto mb-3" />
                                                    <div className="text-4xl font-bold text-secondary mb-2">4.1</div>
                                                    <div className="text-sm text-muted-foreground">Interventions/tech/jour</div>
                                                    <div className="text-xs text-secondary font-semibold mt-1">vs 3.2 (+28%)</div>
                                                </div>
                                            </div>

                                            <div className="glass p-6 rounded-xl border border-synapse-green/30 bg-synapse-green/5">
                                                <div className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-6 h-6 text-synapse-green mt-1" />
                                                    <div>
                                                        <h3 className="font-bold text-lg mb-2">Impact Business</h3>
                                                        <p className="text-muted-foreground">
                                                            <strong className="text-synapse-green">+16 interventions/semaine</strong> grâce à 0 appels manqués + dispatch optimisé. À 180€ de panier moyen = <strong className="text-synapse-green">+150K€ de CA annuel</strong>. Plus besoin de standardiste = économie de 35K€/an.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* CTA */}
                                        <section className="mt-12">
                                            <div className="glass p-8 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/5 to-transparent text-center">
                                                <h3 className="text-2xl font-bold mb-4">Ne Perdez Plus Aucune Urgence</h3>
                                                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                                    Synapse déploie un agent vocal qui répond 24/7, qualifie et dispatche automatiquement. Vos techniciens se concentrent sur les interventions, pas sur le téléphone.
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
                                            <Link to="/secteurs/depannage-domicile" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
                                                Découvrez notre solution pour dépanneurs d'urgence
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

export default OptimiserPlanningDepannage;
