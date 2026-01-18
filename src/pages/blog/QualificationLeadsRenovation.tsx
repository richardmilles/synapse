import { useEffect } from "react";
import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User, CheckCircle2, TrendingUp, PaintBucket, Euro, AlertCircle, Phone, Filter, Hammer } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogSidebar } from "@/components/blog/BlogSidebar";

const QualificationLeadsRenovation = () => {
    useEffect(() => {
        document.title = "Qualification Leads Rénovation : Arrêtez les Devis Gratuits Inutiles | Synapse";
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
                                            <span className="text-xs font-semibold px-3 py-1 rounded-full border bg-synapse-orange/10 text-synapse-orange border-synapse-orange/20">BTP & Rénovation</span>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><span>20 janvier 2026</span></div>
                                                <div className="flex items-center gap-1"><Clock className="w-4 h-4" /><span>14 min de lecture</span></div>
                                            </div>
                                        </div>
                                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Qualification Leads Rénovation : Arrêtez de Faire des Devis Gratuits Inutiles</h1>
                                        <p className="text-xl text-muted-foreground mb-8">Un déplacement pour devis coûte ~150€. Si le prospect n'a pas de budget ou n'est pas propriétaire, c'est une perte sèche. Filtrez automatiquement.</p>
                                        <div className="flex items-center gap-3 pb-8 border-b border-border">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-synapse-orange to-red-500 flex items-center justify-center"><User className="w-6 h-6 text-white" /></div>
                                            <div><div className="font-semibold">Équipe Synapse</div><div className="text-sm text-muted-foreground">Experts Lead Gen BTP</div></div>
                                        </div>
                                    </div>

                                    <div className="prose prose-lg max-w-none space-y-8">

                                        {/* Introduction */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-4">Le Fléau du "Touriste" du Devis</h2>
                                            <p className="text-lg mb-4">
                                                Dans la rénovation (fenêtres, isolation, solaire, toiture), la génération de leads est facile. Ce qui est dur, c'est de trouver des <strong>clients</strong>.
                                            </p>
                                            <p className="text-lg mb-4">
                                                Vos commerciaux passent leur vie sur la route. Ils arrivent chez le prospect : c'est un locataire curieux. Ou alors "c'est pour un projet dans 2 ans". Ou "je voulais juste avoir une idée du prix".
                                            </p>
                                            <p className="text-lg mb-4">
                                                Résultat : 2h perdues, du carburant brûlé, et un moral en baisse. <strong>Le volume de leads ne sert à rien si la qualité n'est pas là.</strong>
                                            </p>

                                            <div className="glass p-6 rounded-xl border border-destructive/30 my-6">
                                                <div className="flex items-start gap-4">
                                                    <AlertCircle className="w-6 h-6 text-destructive mt-1 shrink-0" />
                                                    <div>
                                                        <h3 className="font-bold text-lg mb-2">Le Coût du "Mauvais" Lead</h3>
                                                        <p className="text-muted-foreground mb-3">
                                                            <strong>Calcul rapide</strong> :
                                                        </p>
                                                        <ul className="text-sm space-y-1 text-muted-foreground">
                                                            <li>• Coût d'achat du lead (Google/Facebook/Plateforme) : 30€ - 80€</li>
                                                            <li>• Coût traitement commercial (appel, déplacement, devis) : ~150€</li>
                                                            <li>• Coût total d'un RDV non qualifié : <strong>~200€ minimum</strong></li>
                                                            <li>• Si vous en faites 10 par semaine : <strong>2 000€ perdus / semaine</strong></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Les 4 critères de qualification */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-4">La Méthode BANT (Version BTP)</h2>
                                            <p className="text-lg mb-4">
                                                Pour qu'un lead mérite un déplacement, il doit valider 4 critères impératifs. Si un seul manque, c'est un appel téléphonique, pas un RDV physique.
                                            </p>

                                            <div className="grid md:grid-cols-2 gap-4 my-6">
                                                <div className="glass p-4 rounded-xl border border-synapse-orange/20">
                                                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Euro className="w-5 h-5 text-synapse-orange" /> Budget</h4>
                                                    <p className="text-sm text-muted-foreground">Le prospect a-t-il une idée réaliste du coût ? A-t-il le financement ?</p>
                                                </div>
                                                <div className="glass p-4 rounded-xl border border-synapse-orange/20">
                                                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><User className="w-5 h-5 text-synapse-orange" /> Autorité</h4>
                                                    <p className="text-sm text-muted-foreground">Est-il propriétaire ? Est-il le seul décideur (attention aux "faut que j'en parle à ma femme") ?</p>
                                                </div>
                                                <div className="glass p-4 rounded-xl border border-synapse-orange/20">
                                                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Hammer className="w-5 h-5 text-synapse-orange" /> Besoin</h4>
                                                    <p className="text-sm text-muted-foreground">Le projet est-il concret ? (ex: "ma facture est trop haute" vs "je regarde les panneaux solaires")</p>
                                                </div>
                                                <div className="glass p-4 rounded-xl border border-synapse-orange/20">
                                                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Clock className="w-5 h-5 text-synapse-orange" /> Temps</h4>
                                                    <p className="text-sm text-muted-foreground">C'est pour quand ? "Tout de suite" ou "l'année prochaine" ?</p>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Comment l'IA qualifie */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-6">Comment l'IA Filtre 100% de Vos Leads</h2>

                                            <p className="text-lg mb-6">
                                                L'humain (commercial) a peur de demander le budget ou d'être trop direct. L'IA n'a pas ce problème psychologique. Elle pose les questions poliment mais fermement.
                                            </p>

                                            <div className="space-y-6">
                                                <div className="glass p-6 rounded-xl border border-primary/30 bg-primary/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">1</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">Le Tri Immédiat (Appel post-soumission)</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                Le lead remplit un formulaire Facebook. 2 minutes plus tard, l'IA l'appelle.
                                                            </p>
                                                            <div className="bg-background/50 p-4 rounded-lg border border-border">
                                                                <p className="text-sm text-muted-foreground italic mb-2">
                                                                    IA : "Bonjour, j'ai bien reçu votre demande pour des fenêtres. Pour que notre technicien prépare le RDV, j'ai 3 petites questions."
                                                                </p>
                                                                <p className="text-sm text-muted-foreground italic mb-2">
                                                                    IA : "Êtes-vous propriétaire de la maison ?"
                                                                </p>
                                                                <p className="text-sm text-muted-foreground italic mb-2">
                                                                    IA : "Le projet est prévu pour quand idéalement ?"
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-6 rounded-xl border border-accent/30 bg-accent/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold shrink-0">2</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">La Gestion des Objets</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                Si le prospect dit "Je suis locataire", l'IA répond poliment :
                                                                <em className="block mt-2">"D'accord, sachez que ces travaux nécessitent l'accord du propriétaire. Souhaitez-vous que nous le contactions ?"</em>
                                                            </p>
                                                            <p className="text-sm font-semibold text-accent">
                                                                Si c'est un "non", le lead est marqué "Disqualifié" automatiquement. Votre commercial n'a pas perdu 1 seconde.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="glass p-6 rounded-xl border border-secondary/30 bg-secondary/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold shrink-0">3</div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">La Prise de RDV Directe</h3>
                                                            <p className="text-muted-foreground mb-3">
                                                                Si tous les feux sont verts (Proprio + Projet court terme), l'IA propose directement un créneau :
                                                                <em className="block mt-2">"Parfait, notre expert est dans votre secteur mardi prochain. 10h ou 14h ?"</em>
                                                            </p>
                                                            <p className="text-sm font-semibold text-secondary">
                                                                Le RDV atterrit dans l'agenda du commercial avec le tag "QUALIFIÉ CHAUD".
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Étude de cas */}
                                        <section>
                                            <h2 className="text-3xl font-bold mb-6">Étude de Cas : RenoFenêtres (Menuiserie)</h2>
                                            <p className="text-lg mb-4">
                                                <strong>Contexte</strong> : Entreprise pose fenêtres/volets, 6 commerciaux, achète 300 leads/mois.
                                            </p>
                                            <p className="text-lg mb-4">
                                                <strong>Avant</strong> : Commerciaux épuisés ("les leads sont nuls"), taux de transformation RDV/Devis élevé mais Lead/RDV très bas. Beaucoup de locataires et de curieux.
                                            </p>
                                            <p className="text-lg mb-6">
                                                <strong>Après filtrage IA</strong> :
                                            </p>

                                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                                <div className="text-center p-6 glass rounded-xl border border-primary/20">
                                                    <Filter className="w-12 h-12 text-primary mx-auto mb-3" />
                                                    <div className="text-4xl font-bold text-primary mb-2">40%</div>
                                                    <div className="text-sm text-muted-foreground">Leads rejetés par l'IA</div>
                                                    <div className="text-xs text-primary font-semibold mt-1">Économie de temps massive</div>
                                                </div>
                                                <div className="text-center p-6 glass rounded-xl border border-accent/20">
                                                    <TrendingUp className="w-12 h-12 text-accent mx-auto mb-3" />
                                                    <div className="text-4xl font-bold text-accent mb-2">1/2</div>
                                                    <div className="text-sm text-muted-foreground">Taux de signature RDV</div>
                                                    <div className="text-xs text-accent font-semibold mt-1">vs 1/5 avant (car leads qualifiés)</div>
                                                </div>
                                                <div className="text-center p-6 glass rounded-xl border border-secondary/20">
                                                    <Euro className="w-12 h-12 text-secondary mx-auto mb-3" />
                                                    <div className="text-4xl font-bold text-secondary mb-2">+25%</div>
                                                    <div className="text-sm text-muted-foreground">CA Global</div>
                                                    <div className="text-xs text-secondary font-semibold mt-1">avec la même équipe</div>
                                                </div>
                                            </div>

                                            <div className="glass p-6 rounded-xl border border-synapse-green/30 bg-synapse-green/5">
                                                <div className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-6 h-6 text-synapse-green mt-1" />
                                                    <div>
                                                        <h3 className="font-bold text-lg mb-2">Moral de l'Équipe</h3>
                                                        <p className="text-muted-foreground">
                                                            Les commerciaux ne râlent plus sur la qualité des leads. Ils savent que quand ils ont un RDV, c'est un "vrai" client potentiel. Ils se concentrent sur la vente, pas sur la découverte basique.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* CTA */}
                                        <section className="mt-12">
                                            <div className="glass p-8 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/5 to-transparent text-center">
                                                <h3 className="text-2xl font-bold mb-4">Arrêtez de Gaspiller Votre Temps</h3>
                                                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                                    Laissez Synapse filtrer les curieux et les hors-cibles. Envoyez vos commerciaux uniquement là où il y a du business à signer.
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
                                            <Link to="/secteurs/renovation" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
                                                Découvrez notre solution pour entreprises de rénovation
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

export default QualificationLeadsRenovation;
