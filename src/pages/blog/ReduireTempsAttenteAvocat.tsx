import { useEffect } from "react";
import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User, CheckCircle2, TrendingUp, Phone, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogSidebar } from "@/components/blog/BlogSidebar";

const ReduireTempsAttenteAvocat = () => {
    useEffect(() => {
        document.title = "Comment Réduire le Temps d'Attente Téléphonique en Cabinet d'Avocat en 2026 | Synapse";

        // SEO Meta tags
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Découvrez 5 stratégies éprouvées pour réduire le temps d\'attente téléphonique de votre cabinet et améliorer la satisfaction client de 40%.');
        }
    }, []);

    return (
        <div className="relative min-h-screen bg-background overflow-x-hidden">
            <NeuralBackground />
            <Header />

            <main className="relative z-10 pt-20">
                {/* Hero Article */}
                <article className="py-16">
                    <div className="container px-4 sm:px-6">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-3 gap-12">
                                {/* Main Content */}
                                <div className="lg:col-span-2">
                                    {/* Article Header */}
                                    <div className="mb-12">
                                        <div className="flex flex-wrap items-center gap-4 mb-6">
                                            <span className="text-xs font-semibold px-3 py-1 rounded-full border bg-primary/10 text-primary border-primary/20">
                                                Juridique
                                            </span>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>15 janvier 2026</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    <span>8 min de lecture</span>
                                                </div>
                                            </div>
                                        </div>

                                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                            Comment Réduire le Temps d'Attente Téléphonique en Cabinet d'Avocat en 2026
                                        </h1>

                                        <p className="text-xl text-muted-foreground mb-8">
                                            Les cabinets d'avocats perdent 30% de leurs prospects à cause d'un temps d'attente téléphonique trop long. Découvrez 5 stratégies concrètes pour transformer votre standard en atout commercial.
                                        </p>

                                        <div className="flex items-center gap-3 pb-8 border-b border-border">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                                <User className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <div className="font-semibold">Équipe Synapse</div>
                                                <div className="text-sm text-muted-foreground">Experts IA pour Professionnels du Droit</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Article Content */}
                                    <div className="prose prose-lg max-w-none">
                                        {/* Introduction */}
                                        <section className="mb-12">
                                            <h2 className="text-3xl font-bold mb-4">Le Coût Caché du Temps d'Attente</h2>
                                            <p className="text-lg mb-4">
                                                <strong className="text-destructive">Sonnerie. Sonnerie. Sonnerie.</strong> Votre prospect raccroche après 45 secondes d'attente. Dans 70% des cas, il ne rappellera jamais. Et dans les 30% restants ? Il aura déjà contacté 2 autres cabinets.
                                            </p>
                                            <p className="text-lg mb-4">
                                                Cette scène se répète <strong>dizaines de fois par semaine</strong> dans les cabinets d'avocats. Selon une étude CallMiner 2025, <strong className="text-primary">un temps d'attente supérieur à 60 secondes fait chuter le taux de conversion de 78%</strong>.
                                            </p>
                                            <p className="text-lg mb-4">
                                                Le pire ? Vous ne savez même pas combien de clients potentiels vous perdez. Ils raccrochent en silence, et vous ne voyez que la partie émergée de l'iceberg : les quelques personnes qui insistent jusqu'à tomber sur votre secrétariat débordé.
                                            </p>

                                            <div className="glass p-6 rounded-xl border border-destructive/30 my-6">
                                                <div className="flex items-start gap-4">
                                                    <AlertCircle className="w-6 h-6 text-destructive mt-1" />
                                                    <div>
                                                        <h3 className="font-bold text-lg mb-2">Chiffre Choc</h3>
                                                        <p className="text-muted-foreground">
                                                            Un cabinet de 3 avocats perd en moyenne <strong className="text-destructive">42 000€ de chiffre d'affaires par an</strong> à cause d'appels manqués ou mal gérés durant les heures de pointe (9h-11h et 14h-16h).
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Problématique */}
                                        <section className="mb-12">
                                            <h2 className="text-3xl font-bold mb-6">Pourquoi le Standard Téléphonique Classique Ne Fonctionne Plus</h2>

                                            <h3 className="text-2xl font-semibold mb-4">1. Le Secrétariat Surchargé</h3>
                                            <p className="text-lg mb-4">
                                                Votre secrétaire jongle entre : accueil physique, gestion d'agenda de 3 avocats, rédaction d'actes, relances de paiement, et... le téléphone qui ne cesse de sonner. <strong>Résultat : 60% des appels tombent pendant qu'elle est déjà en ligne.</strong>
                                            </p>

                                            <h3 className="text-2xl font-semibold mb-4 mt-8">2. Les Avocats en Rendez-vous</h3>
                                            <p className="text-lg mb-4">
                                                Entre 2 audiences, pendant les consultations ou en pleine rédaction, vos avocats <strong>ne peuvent pas décrocher</strong>. Et quand ils le font par obligation, cela coupe leur concentration et nuit à la qualité du conseil.
                                            </p>

                                            <h3 className="text-2xl font-semibold mb-4 mt-8">3. Le Cercle Vicieux du Rappel</h3>
                                            <p className="text-lg mb-4">
                                                Le prospect appelle 3 fois, tombe sur répondeur, <strong>vous le rappelez 6 heures plus tard</strong>... et il ne décroche plus. Vous jouez au chat et à la souris alors qu'il cherchait juste un RDV rapide.
                                            </p>
                                        </section>

                                        {/* Solution Synapse */}
                                        <section className="mb-12">
                                            <h2 className="text-3xl font-bold mb-6">5 Stratégies pour Réduire le Temps d'Attente à Zéro</h2>

                                            <div className="space-y-8">
                                                <div className="glass p-6 rounded-xl border border-primary/20">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">1</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">Décrochage Instantané 24/7 avec Assistant Vocal IA</h3>
                                                            <p className="text-muted-foreground mb-4">
                                                                Un agent vocal IA décroche <strong>en moins de 2 secondes</strong>, se présente comme le "standard du cabinet" et qualifie immédiatement la demande :
                                                            </p>
                                                            <ul className="space-y-2 text-sm">
                                                                <li className="flex items-start gap-2">
                                                                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                                                                    <span>RDV consultation : propose créneaux disponibles en direct</span>
                                                                </li>
                                                                <li className="flex items-start gap-2">
                                                                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                                                                    <span>Urgence : transfert immédiat vers avocat de garde</span>
                                                                </li>
                                                                <li className="flex items-start gap-2">
                                                                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                                                                    <span>Dossier en cours : renseigne sur l'avancement et prend note</span>
                                                                </li>
                                                                <li className="flex items-start gap-2">
                                                                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                                                                    <span>Question simple : répond via base de connaissance (tarifs, domaines, localisation)</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-6 rounded-xl border border-accent/20">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold shrink-0">2</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">Qualification Intelligente des Appels</h3>
                                                            <p className="text-muted-foreground mb-4">
                                                                L'IA pose 3-4 questions ciblées pour créer une fiche prospect complète <strong>avant même que l'avocat ne prenne l'appel</strong> :
                                                            </p>
                                                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                                                <li>Nature du litige (divorce, succession, pénal, etc.)</li>
                                                                <li>Urgence (audience imminente ou simple conseil)</li>
                                                                <li>Budget envisagé</li>
                                                                <li>Disponibilité client pour RDV</li>
                                                            </ul>
                                                            <p className="text-sm mt-3 font-semibold">Résultat : l'avocat rappelle en connaissance de cause et ferme le dossier 2x plus vite.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-6 rounded-xl border border-secondary/20">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold shrink-0">3</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">Prise de RDV en Temps Réel</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                L'assistant accède à votre agenda Google Cal / Outlook et <strong>propose 3 créneaux</strong> au prospect séance tenante. Plus de ping-pong par email.
                                                            </p>
                                                            <div className="bg-background/50 p-4 rounded-lg border border-border text-sm italic">
                                                                <p className="mb-2"><strong>Prospect :</strong> "Je voudrais voir Maître Durand pour un divorce."</p>
                                                                <p className="mb-2"><strong>IA :</strong> "Maître Durand est disponible mardi 14h, jeudi 10h ou vendredi 16h30. Quelle heure vous arrange ?"</p>
                                                                <p><strong>Prospect :</strong> "Mardi 14h parfait."</p>
                                                                <p className="mt-2"><strong>IA :</strong> "C'est noté. Vous recevrez la confirmation par SMS avec l'adresse. À mardi !"</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-6 rounded-xl border border-synapse-green/20">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-8 h-8 rounded-full bg-synapse-green text-white flex items-center justify-center font-bold shrink-0">4</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">Détection d'Urgence & Transfert Prioritaire</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                L'IA détecte les mots-clés d'urgence ("audience demain", "garde à vue", "huissier") et <strong>transfère immédiatement</strong> vers l'avocat de garde, même s'il est en réunion.
                                                            </p>
                                                            <p className="text-sm font-semibold text-synapse-green">Les vrais urgences sont traitées en &lt; 2 minutes. Les questions banales n'interrompent plus.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-6 rounded-xl border border-synapse-violet/20">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-8 h-8 rounded-full bg-synapse-violet text-white flex items-center justify-center font-bold shrink-0">5</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">Suivi & Relance Automatique</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                Un prospect demande un rappel mais ne décroche pas ? L'IA le rappelle <strong>3 fois sur 48h</strong> à des horaires différents avant d'envoyer un email récapitulatif.
                                                            </p>
                                                            <p className="text-sm">Plus aucun lead ne tombe dans les oubliettes.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Bénéfices */}
                                        <section className="mb-12">
                                            <h2 className="text-3xl font-bold mb-6">Résultats Mesurables : Le Cas du Cabinet Martineau & Associés</h2>
                                            <p className="text-lg mb-6">
                                                Cabinet parisien de 4 avocats, spécialisé en droit des affaires. Avant Synapse, ils perdaient <strong>23 appels par semaine</strong> en moyenne.
                                            </p>

                                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                                <div className="text-center p-6 glass rounded-xl border border-primary/20">
                                                    <TrendingUp className="w-12 h-12 text-primary mx-auto mb-3" />
                                                    <div className="text-4xl font-bold text-primary mb-2">+42%</div>
                                                    <div className="text-sm text-muted-foreground">Taux de conversion prospect</div>
                                                </div>
                                                <div className="text-center p-6 glass rounded-xl border border-accent/20">
                                                    <Phone className="w-12 h-12 text-accent mx-auto mb-3" />
                                                    <div className="text-4xl font-bold text-accent mb-2">100%</div>
                                                    <div className="text-sm text-muted-foreground">Appels décrochés (vs 67%)</div>
                                                </div>
                                                <div className="text-center p-6 glass rounded-xl border border-secondary/20">
                                                    <Clock className="w-12 h-12 text-secondary mx-auto mb-3" />
                                                    <div className="text-4xl font-bold text-secondary mb-2">0s</div>
                                                    <div className="text-sm text-muted-foreground">Temps d'attente moyen</div>
                                                </div>
                                            </div>

                                            <div className="glass p-8 rounded-xl border border-synapse-green/20 bg-synapse-green/5">
                                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                                    <CheckCircle2 className="w-6 h-6 text-synapse-green" />
                                                    Impact sur le CA
                                                </h3>
                                                <p className="text-lg mb-3">
                                                    En 6 mois : <strong className="text-synapse-green">+67 000€ de CA additionnel</strong>, uniquement grâce aux prospects qui auraient raccroché avant.
                                                </p>
                                                <p className="text-muted-foreground text-sm">
                                                    Coût du service IA : 290€/mois. ROI : x38 la première année.
                                                </p>
                                            </div>
                                        </section>

                                        {/* Conclusion */}
                                        <section className="mb-12">
                                            <h2 className="text-3xl font-bold mb-6">Passez à l'Action : 15 Minutes Pour Transformer Votre Standard</h2>
                                            <p className="text-lg mb-6">
                                                Réduire le temps d'attente à zéro n'est plus une option, <strong>c'est une nécessité concurrentielle</strong>. Les cabinets qui ne décrochent pas en moins de 30 secondes perdent mécaniquement des parts de marché.
                                            </p>
                                            <p className="text-lg mb-8">
                                                La bonne nouvelle ? Vous n'avez pas besoin d'embaucher 2 secrétaires supplémentaires ni d'investir dans un standard complexe. Un assistant vocal IA se déploie <strong>en 48h</strong> et s'intègre à vos outils existants (agenda, CRM, téléphonie).
                                            </p>

                                            <div className="glass p-8 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/5 to-transparent text-center">
                                                <h3 className="text-2xl font-bold mb-4">Testez Synapse Gratuitement Pendant 14 Jours</h3>
                                                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                                    Que vous soyez avocat solo ou cabinet de 20 collaborateurs, découvrez comment ne plus jamais manquer un appel important. Démo personnalisée en 15 minutes.
                                                </p>
                                                <a href="https://koalendar.com/e/meet-with-synapse" target="_blank" rel="noopener noreferrer">
                                                    <Button variant="hero" size="lg" className="group">
                                                        Réserver ma démo gratuite
                                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                                    </Button>
                                                </a>
                                                <p className="text-xs text-muted-foreground mt-4">
                                                    Aucune carte bancaire requise. Installation en 48h.
                                                </p>
                                            </div>
                                        </section>

                                        {/* FAQ */}
                                        <section className="mb-12">
                                            <h2 className="text-3xl font-bold mb-6">Questions Fréquentes</h2>
                                            <div className="space-y-4">
                                                <details className="glass p-6 rounded-xl border border-border group">
                                                    <summary className="font-semibold cursor-pointer flex items-center justify-between">
                                                        L'IA peut-elle vraiment remplacer une secrétaire juridique ?
                                                        <span className="group-open:rotate-180 transition-transform">▼</span>
                                                    </summary>
                                                    <p className="mt-4 text-muted-foreground">
                                                        L'IA ne remplace pas, elle <strong>assiste</strong>. Votre secrétaire conserve les tâches à forte valeur (rédaction, dossiers complexes) tandis que l'IA gère le flot d'appels entrants, la prise de RDV basique et les réponses FAQ. Résultat : votre secrétariat est plus efficace, moins stressé.
                                                    </p>
                                                </details>

                                                <details className="glass p-6 rounded-xl border border-border group">
                                                    <summary className="font-semibold cursor-pointer flex items-center justify-between">
                                                        Est-ce conforme au secret professionnel de l'avocat ?
                                                        <span className="group-open:rotate-180 transition-transform">▼</span>
                                                    </summary>
                                                    <p className="mt-4 text-muted-foreground">
                                                        Oui. L'IA ne divulgue aucune information confidentielle sans authentification. Elle se limite à : prendre coordonnées, qualifier la nature générale du besoin, et proposer un RDV. Aucun détail de dossier n'est discuté par téléphone, conformément à la déontologie.
                                                    </p>
                                                </details>

                                                <details className="glass p-6 rounded-xl border border-border group">
                                                    <summary className="font-semibold cursor-pointer flex items-center justify-between">
                                                        Combien de temps faut-il pour configurer le système ?
                                                        <span className="group-open:rotate-180 transition-transform">▼</span>
                                                    </summary>
                                                    <p className="mt-4 text-muted-foreground">
                                                        Installation technique : <strong>2 heures</strong>. Formation de l'IA à votre cabinet (domaines de droit, tarifs, process) : 1 session de 1h avec notre équipe. Mise en production : 48h. Vous gardez votre numéro existant.
                                                    </p>
                                                </details>

                                                <details className="glass p-6 rounded-xl border border-border group">
                                                    <summary className="font-semibold cursor-pointer flex items-center justify-between">
                                                        Quel est le coût réel comparé à une secrétaire à mi-temps ?
                                                        <span className="group-open:rotate-180 transition-transform">▼</span>
                                                    </summary>
                                                    <p className="mt-4 text-muted-foreground">
                                                        Secrétaire mi-temps : ~1800€/mois (salaire + charges). Synapse : 290€/mois. <strong>Économie : 1510€/mois</strong>, soit 18 000€/an. Sans compter les congés, arrêts maladie, turnover.
                                                    </p>
                                                </details>
                                            </div>
                                        </section>

                                        {/* Related Content */}
                                        <div className="pt-8 border-t border-border">
                                            <h3 className="text-xl font-bold mb-4">Pour aller plus loin</h3>
                                            <Link to="/secteurs/avocats" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
                                                Découvrez toutes nos solutions pour cabinets d'avocats
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Sidebar */}
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

export default ReduireTempsAttenteAvocat;
