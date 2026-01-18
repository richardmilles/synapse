import { useEffect } from "react";
import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User, CheckCircle2, TrendingUp, Euro, AlertCircle, Phone, Mail, FileWarning } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogSidebar } from "@/components/blog/BlogSidebar";

const AutomatiserRelanceFactures = () => {
    useEffect(() => {
        document.title = "Automatiser la Relance des Factures Impayées : Guide Complet 2026 | Synapse";
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
                                            <span className="text-xs font-semibold px-3 py-1 rounded-full border bg-accent/10 text-accent border-accent/20">Finance</span>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><span>12 janvier 2026</span></div>
                                                <div className="flex items-center gap-1"><Clock className="w-4 h-4" /><span>12 min de lecture</span></div>
                                            </div>
                                        </div>
                                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Automatiser la Relance des Factures Impayées : Guide Complet 2026</h1>
                                        <p className="text-xl text-muted-foreground mb-8">72% des entreprises perdent du cash à cause d'une relance manuelle inefficace. Découvrez comment réduire votre DSO de 15 jours grâce à une stratégie de relance structurée.</p>
                                        <div className="flex items-center gap-3 pb-8 border-b border-border">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center"><User className="w-6 h-6 text-white" /></div>
                                            <div><div className="font-semibold">Équipe Synapse</div><div className="text-sm text-muted-foreground">Experts Recouvrement & Trésorerie</div></div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="prose prose-lg max-w-none space-y-8">

                                        {/* Introduction */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-4">Pourquoi les Retards de Paiement Tuent Votre Trésorerie</h2>
                                            <p className="text-lg mb-4">
                                                En France, le <strong>délai moyen de paiement est de 44 jours</strong>, soit 11 jours au-delà du délai légal de 30 jours. Pour une PME avec 500 000€ de créances clients, cela représente plus de <strong>60 000€ immobilisés</strong> en permanence.
                                            </p>
                                            <p className="text-lg mb-4">
                                                Mais le pire n'est pas là. Le vrai problème, c'est que la plupart des entreprises <strong>ne relancent pas, ou mal</strong>. Selon l'observatoire des délais de paiement, 40% des retards sont dus à un simple oubli du client – pas à une mauvaise foi ou à des difficultés financières.
                                            </p>

                                            <div className="glass p-6 rounded-xl border border-destructive/30 my-6">
                                                <div className="flex items-start gap-4">
                                                    <AlertCircle className="w-6 h-6 text-destructive mt-1 shrink-0" />
                                                    <div>
                                                        <h3 className="font-bold text-lg mb-2">Le Coût Réel des Impayés</h3>
                                                        <p className="text-muted-foreground mb-3">
                                                            Une entreprise avec 1M€ de CA et un DSO de 60 jours (au lieu de 30) perd environ :
                                                        </p>
                                                        <ul className="text-sm space-y-1 text-muted-foreground">
                                                            <li>• <strong>12 000€/an</strong> en frais financiers (coût du découvert ou du BFR)</li>
                                                            <li>• <strong>8 000€/an</strong> en temps salarié consacré aux relances manuelles</li>
                                                            <li>• <strong>15 000€/an</strong> en créances définitivement irrécouvrables</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Problème de la relance manuelle */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-4">Pourquoi la Relance Manuelle Ne Fonctionne Plus</h2>

                                            <h3 className="text-2xl font-semibold mb-3 mt-6">1. Le Problème du "Quand J'aurai le Temps"</h3>
                                            <p className="text-lg mb-4">
                                                Votre comptable a 50 factures en retard à relancer. Entre la saisie comptable, les déclarations fiscales et les demandes urgentes, la relance passe systématiquement en bas de la pile. Résultat : la première relance arrive à J+30 au lieu de J+1.
                                            </p>
                                            <p className="text-lg mb-4">
                                                Or, une étude d'Atradius montre que <strong>le taux de recouvrement chute de 10% par mois de retard</strong>. Une facture relancée à J+7 a 94% de chances d'être payée. À J+90, ce taux tombe à 74%.
                                            </p>

                                            <h3 className="text-2xl font-semibold mb-3 mt-6">2. Le Syndrome de l'Email Ignoré</h3>
                                            <p className="text-lg mb-4">
                                                La relance type ? Un email envoyé à l'adresse générique de l'entreprise, avec en objet "Facture n°XXX - Rappel". Cet email finit dans les spams, ou est ignoré parmi les 150 emails quotidiens du destinataire.
                                            </p>
                                            <p className="text-lg mb-4">
                                                <strong>Le secret d'une relance efficace</strong> : le téléphone. Un appel de 2 minutes permet de savoir immédiatement si la facture a été reçue, si elle est validée, et quand le paiement est prévu. Mais qui a le temps de passer 50 appels par semaine ?
                                            </p>

                                            <h3 className="text-2xl font-semibold mb-3 mt-6">3. L'Absence de Suivi Structuré</h3>
                                            <p className="text-lg mb-4">
                                                Sans outil dédié, impossible de savoir : qui a été relancé quand, quelle excuse a été donnée, quel engagement de paiement a été pris. Chaque relance repart de zéro, sans historique.
                                            </p>
                                        </section>

                                        {/* La solution en 5 étapes */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-6">La Stratégie de Relance en 5 Étapes (Automatisable)</h2>
                                            <p className="text-lg mb-6">
                                                Voici le processus optimal de relance, testé sur des centaines de PME. Chaque étape peut être automatisée, soit totalement, soit partiellement.
                                            </p>

                                            <div className="space-y-6">
                                                <div className="glass p-6 rounded-xl border border-synapse-green/30 bg-synapse-green/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-synapse-green text-white flex items-center justify-center font-bold shrink-0">1</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">J-7 : La Relance Préventive</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                <strong>Objectif</strong> : Rappeler l'échéance avant qu'elle ne soit dépassée.
                                                            </p>
                                                            <p className="text-muted-foreground mb-3">
                                                                Un email ou SMS automatique 7 jours avant l'échéance : "Bonjour, votre facture n°XXX de 1 500€ arrive à échéance le 15 janvier. Merci de prévoir le règlement."
                                                            </p>
                                                            <p className="text-sm font-semibold text-synapse-green">
                                                                Résultat moyen : 40% des factures sont payées avant l'échéance grâce à ce simple rappel.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-6 rounded-xl border border-primary/30 bg-primary/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">2</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><Phone className="w-5 h-5" /> J+1 : L'Appel de Vérification</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                <strong>Objectif</strong> : Confirmer que la facture est bien enregistrée côté client.
                                                            </p>
                                                            <p className="text-muted-foreground mb-3">
                                                                "Bonjour, je vous appelle concernant la facture n°XXX de 1 500€ qui était due hier. Avez-vous bien reçu cette facture ? Est-elle validée pour paiement ?"
                                                            </p>
                                                            <div className="bg-background/50 p-4 rounded-lg border border-border mt-3">
                                                                <p className="text-sm font-semibold mb-2">Ce que l'appel révèle souvent :</p>
                                                                <ul className="text-sm space-y-1 text-muted-foreground">
                                                                    <li>• "Je n'ai jamais reçu cette facture" → Renvoi immédiat</li>
                                                                    <li>• "Elle est bloquée au service achat" → Identification du bon contact</li>
                                                                    <li>• "On attend la validation du chef" → Suivi à J+7</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-6 rounded-xl border border-accent/30 bg-accent/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold shrink-0">3</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><Mail className="w-5 h-5" /> J+15 : L'Escalade Formelle</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                <strong>Objectif</strong> : Signaler que le retard devient problématique.
                                                            </p>
                                                            <p className="text-muted-foreground mb-3">
                                                                Email + Appel avec un ton plus ferme. Mention des pénalités de retard (40€ forfaitaires + intérêts légaux). Proposition d'un échéancier si le client évoque des difficultés.
                                                            </p>
                                                            <p className="text-sm font-semibold text-accent">
                                                                À ce stade, 75% des factures sont régularisées si le processus a été suivi.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-6 rounded-xl border border-secondary/30 bg-secondary/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold shrink-0">4</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><FileWarning className="w-5 h-5" /> J+30 : La Mise en Demeure</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                <strong>Objectif</strong> : Créer une trace légale et déclencher une réaction.
                                                            </p>
                                                            <p className="text-muted-foreground mb-3">
                                                                Envoi d'une lettre de mise en demeure par RAR (ou RAR dématérialisé via AR24). Cette lettre est indispensable juridiquement avant toute action contentieuse.
                                                            </p>
                                                            <div className="bg-background/50 p-4 rounded-lg border border-border mt-3">
                                                                <p className="text-sm text-muted-foreground">
                                                                    <strong>Astuce</strong> : La mise en demeure peut être automatisée. Des services comme AR24 ou Maileva permettent d'envoyer des LRAR depuis une API, sans aller à la Poste.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-6 rounded-xl border border-destructive/30 bg-destructive/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-destructive text-white flex items-center justify-center font-bold shrink-0">5</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">J+60 : Le Transfert Contentieux</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                <strong>Objectif</strong> : Passer le relais à un professionnel du recouvrement.
                                                            </p>
                                                            <p className="text-muted-foreground mb-3">
                                                                Transmission automatique du dossier complet (factures, preuves de relances, mise en demeure) à un cabinet de recouvrement ou un huissier partenaire.
                                                            </p>
                                                            <p className="text-sm text-muted-foreground">
                                                                À ce stade, le dossier est parfaitement documenté. Le cabinet peut agir immédiatement, sans vous redemander 10 fois les mêmes pièces.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Résultats concrets */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-6">Résultats Concrets : Étude de Cas</h2>
                                            <p className="text-lg mb-4">
                                                <strong>Entreprise</strong> : Société de services B2B, 2M€ de CA, 300 clients
                                            </p>
                                            <p className="text-lg mb-4">
                                                <strong>Situation avant</strong> : DSO de 58 jours, 1 comptable à mi-temps sur les relances, 3% de créances irrécouvrables par an.
                                            </p>
                                            <p className="text-lg mb-6">
                                                <strong>Après automatisation</strong> (relances email + appels IA + mise en demeure auto) :
                                            </p>

                                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                                <div className="text-center p-6 glass rounded-xl border border-primary/20">
                                                    <TrendingUp className="w-12 h-12 text-primary mx-auto mb-3" />
                                                    <div className="text-4xl font-bold text-primary mb-2">43j</div>
                                                    <div className="text-sm text-muted-foreground">DSO (vs 58j avant)</div>
                                                    <div className="text-xs text-primary font-semibold mt-1">-15 jours</div>
                                                </div>
                                                <div className="text-center p-6 glass rounded-xl border border-accent/20">
                                                    <Euro className="w-12 h-12 text-accent mx-auto mb-3" />
                                                    <div className="text-4xl font-bold text-accent mb-2">0.8%</div>
                                                    <div className="text-sm text-muted-foreground">Créances irrécouvrables</div>
                                                    <div className="text-xs text-accent font-semibold mt-1">vs 3% avant</div>
                                                </div>
                                                <div className="text-center p-6 glass rounded-xl border border-secondary/20">
                                                    <Clock className="w-12 h-12 text-secondary mx-auto mb-3" />
                                                    <div className="text-4xl font-bold text-secondary mb-2">2h</div>
                                                    <div className="text-sm text-muted-foreground">Temps comptable/semaine</div>
                                                    <div className="text-xs text-secondary font-semibold mt-1">vs 15h avant</div>
                                                </div>
                                            </div>

                                            <div className="glass p-6 rounded-xl border border-synapse-green/30 bg-synapse-green/5">
                                                <div className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-6 h-6 text-synapse-green mt-1" />
                                                    <div>
                                                        <h3 className="font-bold text-lg mb-2">Impact Financier Annuel</h3>
                                                        <p className="text-muted-foreground">
                                                            <strong className="text-synapse-green">+45 000€</strong> de trésorerie disponible (réduction du BFR) + <strong className="text-synapse-green">44 000€</strong> de créances récupérées qui auraient été perdues = <strong className="text-synapse-green">89 000€</strong> d'impact positif.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Conseils pratiques */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-6">5 Conseils Pour Bien Démarrer</h2>

                                            <div className="space-y-4">
                                                <div className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                                                    <div>
                                                        <h4 className="font-bold">1. Commencez par la relance préventive J-7</h4>
                                                        <p className="text-muted-foreground text-sm">C'est le quick win le plus facile à mettre en place. Un simple email automatique via votre logiciel de facturation.</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                                                    <div>
                                                        <h4 className="font-bold">2. Privilégiez le téléphone pour les gros montants</h4>
                                                        <p className="text-muted-foreground text-sm">Pour les factures &gt; 1000€, un appel systématique à J+1 est rentable. En dessous, l'email suffit souvent.</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                                                    <div>
                                                        <h4 className="font-bold">3. Identifiez le bon interlocuteur avant la facture</h4>
                                                        <p className="text-muted-foreground text-sm">Demandez systématiquement : "À qui envoyer les factures ? Qui valide ? Qui paye ?" avant même de facturer.</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                                                    <div>
                                                        <h4 className="font-bold">4. Documentez tout, tout le temps</h4>
                                                        <p className="text-muted-foreground text-sm">Chaque appel = une note avec date, interlocuteur, engagement pris. C'est votre arme en cas de contentieux.</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                                                    <div>
                                                        <h4 className="font-bold">5. N'ayez pas peur de la mise en demeure</h4>
                                                        <p className="text-muted-foreground text-sm">Elle n'est pas agressive, elle est professionnelle. Un client qui vous respecte comprend que c'est une étape normale.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* CTA */}
                                        <section className="mt-12">
                                            <div className="glass p-8 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/5 to-transparent text-center">
                                                <h3 className="text-2xl font-bold mb-4">Automatisez Vos Relances Dès Demain</h3>
                                                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                                    Synapse peut automatiser 100% de ce processus : relances email, appels téléphoniques par IA, et même l'envoi de mises en demeure. Découvrez comment en 15 minutes.
                                                </p>
                                                <a href="https://koalendar.com/e/meet-with-synapse" target="_blank" rel="noopener noreferrer">
                                                    <Button variant="hero" size="lg" className="group">
                                                        Réserver ma démo gratuite
                                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                                    </Button>
                                                </a>
                                            </div>
                                        </section>

                                        {/* Lien vers page secteur */}
                                        <div className="pt-8 border-t border-border">
                                            <Link to="/secteurs/recouvrement-creances" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
                                                Découvrez notre solution complète de recouvrement automatisé
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

export default AutomatiserRelanceFactures;
