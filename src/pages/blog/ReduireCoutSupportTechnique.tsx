import { useEffect } from "react";
import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User, CheckCircle2, TrendingUp, Server, Euro, AlertCircle, Ticket, Bot, HeadphonesIcon, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogSidebar } from "@/components/blog/BlogSidebar";

const ReduireCoutSupportTechnique = () => {
    useEffect(() => {
        document.title = "Réduire le Coût du Support Technique Niveau 1 de 40% en 2026 | Synapse";
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
                                            <span className="text-xs font-semibold px-3 py-1 rounded-full border bg-synapse-blue/10 text-synapse-blue border-synapse-blue/20">IT & Support</span>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><span>5 janvier 2026</span></div>
                                                <div className="flex items-center gap-1"><Clock className="w-4 h-4" /><span>13 min de lecture</span></div>
                                            </div>
                                        </div>
                                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Réduire le Coût du Support Technique Niveau 1 de 40% en 2026</h1>
                                        <p className="text-xl text-muted-foreground mb-8">80% des tickets support sont répétitifs. Voici comment libérer vos techniciens qualifiés pour qu'ils se concentrent sur ce qui compte vraiment.</p>
                                        <div className="flex items-center gap-3 pb-8 border-b border-border">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-synapse-blue to-accent flex items-center justify-center"><User className="w-6 h-6 text-white" /></div>
                                            <div><div className="font-semibold">Équipe Synapse</div><div className="text-sm text-muted-foreground">Experts Helpdesk & ITSM</div></div>
                                        </div>
                                    </div>

                                    <div className="prose prose-lg max-w-none space-y-8">

                                        {/* Introduction */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-4">Le Paradoxe du Helpdesk Moderne</h2>
                                            <p className="text-lg mb-4">
                                                Vous avez recruté des techniciens à <strong>35-45K€/an</strong> pour leur expertise sur Active Directory, Azure, Microsoft 365, les firewalls et les architectures complexes. Et que font-ils 60% de leur temps ?
                                            </p>
                                            <ul className="text-lg space-y-2 mb-4">
                                                <li>• "Mon mot de passe ne marche plus"</li>
                                                <li>• "L'imprimante n'imprime pas"</li>
                                                <li>• "Je n'arrive pas à me connecter au VPN"</li>
                                                <li>• "Mon Outlook est lent"</li>
                                            </ul>
                                            <p className="text-lg mb-4">
                                                Ces tickets de niveau 1 sont <strong>répétitifs, documentés, et parfaitement automatisables</strong>. Pourtant, ils vampirisent le temps de vos meilleurs techniciens, créent de la frustration, et gonflent vos coûts de support.
                                            </p>

                                            <div className="glass p-6 rounded-xl border border-destructive/30 my-6">
                                                <div className="flex items-start gap-4">
                                                    <AlertCircle className="w-6 h-6 text-destructive mt-1 shrink-0" />
                                                    <div>
                                                        <h3 className="font-bold text-lg mb-2">Le Vrai Coût d'un Ticket N1</h3>
                                                        <p className="text-muted-foreground mb-3">
                                                            <strong>Calcul moyen</strong> pour une ESN/MSP avec 5 techniciens :
                                                        </p>
                                                        <ul className="text-sm space-y-1 text-muted-foreground">
                                                            <li>• Coût horaire chargé d'un tech : ~30€/h</li>
                                                            <li>• Temps moyen par ticket N1 : 12 minutes (prise en charge + résolution + clôture)</li>
                                                            <li>• Coût par ticket N1 : <strong className="text-destructive">6€</strong></li>
                                                            <li>• Volume mensuel N1 typique : 800 tickets</li>
                                                            <li>• Coût mensuel N1 : <strong className="text-destructive">4 800€</strong></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Typologie des tickets N1 */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-4">Les 5 Catégories de Tickets N1 (et Lesquelles Automatiser)</h2>

                                            <p className="text-lg mb-6">
                                                Tous les tickets N1 ne se valent pas. Voici comment les classifier pour prioriser l'automatisation :
                                            </p>

                                            <div className="space-y-4">
                                                <div className="glass p-5 rounded-xl border border-synapse-green/30 bg-synapse-green/5">
                                                    <div className="flex items-start gap-4">
                                                        <Bot className="w-6 h-6 text-synapse-green mt-1" />
                                                        <div>
                                                            <h4 className="font-bold text-lg mb-1">1. Gestion des accès (35% des tickets)</h4>
                                                            <p className="text-muted-foreground text-sm mb-2">Reset mot de passe, déverrouillage compte, création boîte mail, ajout à un groupe AD.</p>
                                                            <p className="text-sm font-semibold text-synapse-green">✓ 100% automatisable via IA + intégrations API</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-5 rounded-xl border border-synapse-green/30 bg-synapse-green/5">
                                                    <div className="flex items-start gap-4">
                                                        <Bot className="w-6 h-6 text-synapse-green mt-1" />
                                                        <div>
                                                            <h4 className="font-bold text-lg mb-1">2. FAQ & How-to (25% des tickets)</h4>
                                                            <p className="text-muted-foreground text-sm mb-2">"Comment configurer ma signature Outlook ?", "Comment accéder au drive partagé ?", "Comment activer le 2FA ?"</p>
                                                            <p className="text-sm font-semibold text-synapse-green">✓ 100% automatisable via base de connaissances + chatbot</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-5 rounded-xl border border-accent/30 bg-accent/5">
                                                    <div className="flex items-start gap-4">
                                                        <Zap className="w-6 h-6 text-accent mt-1" />
                                                        <div>
                                                            <h4 className="font-bold text-lg mb-1">3. Diagnostics simples (20% des tickets)</h4>
                                                            <p className="text-muted-foreground text-sm mb-2">"Internet ne marche pas", "Mon PC est lent", "L'imprimante ne répond pas".</p>
                                                            <p className="text-sm font-semibold text-accent">◐ Partiellement automatisable (diagnostic auto + escalade si nécessaire)</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-5 rounded-xl border border-secondary/30 bg-secondary/5">
                                                    <div className="flex items-start gap-4">
                                                        <HeadphonesIcon className="w-6 h-6 text-secondary mt-1" />
                                                        <div>
                                                            <h4 className="font-bold text-lg mb-1">4. Incidents matériels (15% des tickets)</h4>
                                                            <p className="text-muted-foreground text-sm mb-2">Écran cassé, clavier défectueux, remplacement de poste.</p>
                                                            <p className="text-sm font-semibold text-secondary">→ Automatisation limitée (qualification auto + dispatch)</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-5 rounded-xl border border-destructive/30 bg-destructive/5">
                                                    <div className="flex items-start gap-4">
                                                        <Server className="w-6 h-6 text-destructive mt-1" />
                                                        <div>
                                                            <h4 className="font-bold text-lg mb-1">5. Incidents critiques (5% des tickets)</h4>
                                                            <p className="text-muted-foreground text-sm mb-2">Panne serveur, cyberattaque, corruption de données.</p>
                                                            <p className="text-sm font-semibold text-destructive">✗ Non automatisable (escalade immédiate N2/N3)</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="text-lg mt-6">
                                                <strong>Conclusion</strong> : les catégories 1 et 2 représentent <strong>60% du volume</strong> et sont <strong>entièrement automatisables</strong>. La catégorie 3 peut être partiellement traitée. Cela libère vos techniciens pour les vraies urgences.
                                            </p>
                                        </section>

                                        {/* Comment automatiser */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-6">Comment Automatiser Concrètement (4 Méthodes)</h2>

                                            <div className="space-y-6">
                                                <div className="glass p-6 rounded-xl border border-primary/30 bg-primary/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">1</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">Le Reset Mot de Passe en Self-Service</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                <strong>Le problème</strong> : 15-20% de vos tickets sont des "j'ai oublié mon mot de passe". Chacun coûte 6€ et interrompt un technicien.
                                                            </p>
                                                            <p className="text-muted-foreground mb-3">
                                                                <strong>La solution</strong> : Un portail self-service (ou chatbot) qui :
                                                            </p>
                                                            <ul className="text-sm space-y-1 text-muted-foreground mb-3">
                                                                <li>1. Vérifie l'identité (question secrète, SMS, email secondaire)</li>
                                                                <li>2. Génère un nouveau mot de passe temporaire</li>
                                                                <li>3. Exécute le reset via API Graph (Azure AD) ou PowerShell (AD on-prem)</li>
                                                                <li>4. Envoie le nouveau mot de passe sécurisé à l'utilisateur</li>
                                                            </ul>
                                                            <p className="text-sm font-semibold text-primary">
                                                                Temps de résolution : de 12 min (tech) à 2 min (self-service). Économie : 80%.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-6 rounded-xl border border-accent/30 bg-accent/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold shrink-0">2</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">L'Agent Vocal IA pour Qualification</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                <strong>Le problème</strong> : L'utilisateur appelle le helpdesk, tombe sur la file d'attente, finit par avoir un tech qui passe 5 minutes à comprendre le problème.
                                                            </p>
                                                            <p className="text-muted-foreground mb-3">
                                                                <strong>La solution</strong> : Un agent vocal IA qui décroche immédiatement et :
                                                            </p>
                                                            <ul className="text-sm space-y-1 text-muted-foreground mb-3">
                                                                <li>• Identifie l'utilisateur (nom, email, poste)</li>
                                                                <li>• Pose 3-4 questions de diagnostic</li>
                                                                <li>• Pour les cas simples : résout directement (reset, FAQ)</li>
                                                                <li>• Pour les cas complexes : crée un ticket pré-qualifié avec toutes les infos</li>
                                                            </ul>
                                                            <p className="text-sm font-semibold text-accent">
                                                                Le tech reçoit un ticket déjà qualifié, pas un appel à qualifier. Gain : 5 min/ticket.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-6 rounded-xl border border-secondary/30 bg-secondary/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold shrink-0">3</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">Le Chatbot avec Actions Réelles</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                <strong>La différence</strong> : Un chatbot FAQ répond "voici comment faire". Un chatbot avec actions FAIT à la place de l'utilisateur.
                                                            </p>
                                                            <div className="bg-background/50 p-4 rounded-lg border border-border mb-3">
                                                                <p className="text-sm mb-2"><strong>Exemple de dialogue :</strong></p>
                                                                <p className="text-sm text-muted-foreground italic mb-1">Utilisateur : "Je n'arrive pas à accéder au dossier Projets"</p>
                                                                <p className="text-sm text-muted-foreground italic mb-1">Bot : "Je vérifie vos droits... Vous n'êtes pas membre du groupe 'Projets-RW'. Voulez-vous que je fasse une demande d'accès ?"</p>
                                                                <p className="text-sm text-muted-foreground italic mb-1">Utilisateur : "Oui"</p>
                                                                <p className="text-sm text-muted-foreground italic">Bot : "Demande envoyée à votre manager pour validation. Vous recevrez un email de confirmation."</p>
                                                            </div>
                                                            <p className="text-sm font-semibold text-secondary">
                                                                Le bot fait le travail. L'utilisateur n'a pas attendu un tech. Zéro ticket créé.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-6 rounded-xl border border-synapse-green/30 bg-synapse-green/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-synapse-green text-white flex items-center justify-center font-bold shrink-0">4</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">La Détection Proactive des Incidents</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                <strong>Le graal</strong> : Résoudre le problème AVANT que l'utilisateur ne le signale.
                                                            </p>
                                                            <ul className="text-sm space-y-1 text-muted-foreground mb-3">
                                                                <li>• Monitoring de l'espace disque → Alerte à 85% + nettoyage auto</li>
                                                                <li>• Détection des postes non mis à jour → Déploiement silencieux</li>
                                                                <li>• Certificat VPN expirant → Renouvellement automatique</li>
                                                            </ul>
                                                            <p className="text-sm font-semibold text-synapse-green">
                                                                Chaque incident évité = 1 ticket de moins + 0 interruption pour l'utilisateur.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Étude de cas */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-6">Étude de Cas : MSP TechSolutions (120 clients)</h2>
                                            <p className="text-lg mb-4">
                                                <strong>Contexte</strong> : MSP gérant le parc IT de 120 PME, équipe de 8 techniciens, 2 200 tickets/mois.
                                            </p>
                                            <p className="text-lg mb-4">
                                                <strong>Avant</strong> : 65% de tickets N1, techniciens frustrés, temps de réponse moyen 4h, taux de résolution J0 à 45%.
                                            </p>
                                            <p className="text-lg mb-6">
                                                <strong>Après automatisation</strong> (chatbot + agent vocal + self-service reset) :
                                            </p>

                                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                                <div className="text-center p-6 glass rounded-xl border border-primary/20">
                                                    <TrendingUp className="w-12 h-12 text-primary mx-auto mb-3" />
                                                    <div className="text-4xl font-bold text-primary mb-2">-42%</div>
                                                    <div className="text-sm text-muted-foreground">Volume tickets N1</div>
                                                    <div className="text-xs text-primary font-semibold mt-1">de 1430 à 830/mois</div>
                                                </div>
                                                <div className="text-center p-6 glass rounded-xl border border-accent/20">
                                                    <Ticket className="w-12 h-12 text-accent mx-auto mb-3" />
                                                    <div className="text-4xl font-bold text-accent mb-2">18min</div>
                                                    <div className="text-sm text-muted-foreground">Temps réponse moyen</div>
                                                    <div className="text-xs text-accent font-semibold mt-1">vs 4h avant</div>
                                                </div>
                                                <div className="text-center p-6 glass rounded-xl border border-secondary/20">
                                                    <Euro className="w-12 h-12 text-secondary mx-auto mb-3" />
                                                    <div className="text-4xl font-bold text-secondary mb-2">+32%</div>
                                                    <div className="text-sm text-muted-foreground">Marge opérationnelle</div>
                                                    <div className="text-xs text-secondary font-semibold mt-1">+2 clients/tech</div>
                                                </div>
                                            </div>

                                            <div className="glass p-6 rounded-xl border border-synapse-green/30 bg-synapse-green/5">
                                                <div className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-6 h-6 text-synapse-green mt-1" />
                                                    <div>
                                                        <h3 className="font-bold text-lg mb-2">Impact Humain</h3>
                                                        <p className="text-muted-foreground">
                                                            Les techniciens travaillent enfin sur des projets intéressants (migrations, sécurité, architecture). Le turnover a chuté de <strong className="text-synapse-green">35%</strong>. La satisfaction client (NPS) est passée de 42 à 67.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Par où commencer */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-6">Par Où Commencer (Plan en 90 Jours)</h2>

                                            <div className="space-y-4">
                                                <div className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                                                    <div>
                                                        <h4 className="font-bold">Jour 1-30 : Le Reset Mot de Passe</h4>
                                                        <p className="text-muted-foreground text-sm">Déployez un self-service pour AD/Azure AD. ROI immédiat, risque minimal.</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                                                    <div>
                                                        <h4 className="font-bold">Jour 31-60 : Le Chatbot FAQ</h4>
                                                        <p className="text-muted-foreground text-sm">Alimentez-le avec vos 50 tickets les plus fréquents. Mesurez la déflection.</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                                                    <div>
                                                        <h4 className="font-bold">Jour 61-90 : L'Agent Vocal de Qualification</h4>
                                                        <p className="text-muted-foreground text-sm">Déployez sur la hotline pour pré-qualifier les appels. Les techs ne décrochent que des tickets enrichis.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* CTA */}
                                        <section className="mt-12">
                                            <div className="glass p-8 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/5 to-transparent text-center">
                                                <h3 className="text-2xl font-bold mb-4">Libérez Vos Techniciens du N1</h3>
                                                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                                    Synapse déploie agents vocaux, chatbots et self-service en 2 semaines. Vos techs retrouvent du sens à leur métier, vos clients ont des réponses instantanées.
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
                                            <Link to="/secteurs/services-informatiques" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
                                                Découvrez notre solution pour ESN et MSP
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

export default ReduireCoutSupportTechnique;
