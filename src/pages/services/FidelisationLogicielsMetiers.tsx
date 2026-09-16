import type { LucideIcon } from "lucide-react";
import {
  ArrowDown,
  ArrowRight,
  Bell,
  Calendar,
  Check,
  Clock,
  Database,
  History,
  Mail,
  MessageSquare,
  RefreshCw,
  Repeat,
  ShieldCheck,
  Star,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { PageBreadcrumb } from "@/components/navigation/PageBreadcrumb";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { usePageSeo } from "@/hooks/use-page-seo";

const BOOKING_URL = "https://synapse0.neetocal.com/audit";

type Scenario = {
  icon: LucideIcon;
  title: string;
  description: string;
  flow: string[];
  outcome: string;
};

const scenarios: Scenario[] = [
  {
    icon: Star,
    title: "Après une prestation",
    description: "Le suivi commence lorsque la prestation passe au statut terminé.",
    flow: ["Prestation terminée", "Message personnalisé", "Demande d’avis", "Proposition adaptée"],
    outcome: "Entretenir la relation et préparer la suite.",
  },
  {
    icon: History,
    title: "Client devenu inactif",
    description: "La durée d’inactivité permet d’identifier les clients à réactiver.",
    flow: ["Inactivité détectée", "Segment vérifié", "Message de réactivation", "Arrêt dès le retour"],
    outcome: "Récupérer des clients sortis du radar.",
  },
  {
    icon: Repeat,
    title: "Habitude d’achat récurrente",
    description: "L’historique aide à anticiper la prochaine période probable de besoin.",
    flow: ["Fréquence observée", "Période estimée", "Rappel au bon moment", "Retour mesuré"],
    outcome: "Favoriser la récurrence sans sollicitation permanente.",
  },
  {
    icon: Calendar,
    title: "Échéance ou période importante",
    description: "Une saison, un contrat ou une date métier déclenche une campagne ciblée.",
    flow: ["Échéance à venir", "Clients concernés", "Campagne adaptée", "Résultats suivis"],
    outcome: "Anticiper les renouvellements et les besoins saisonniers.",
  },
  {
    icon: RefreshCw,
    title: "Action commencée puis interrompue",
    description: "Le système reprend un parcours au point où le client s’est arrêté.",
    flow: ["Action incomplète", "Délai contrôlé", "Relance utile", "Sortie après finalisation"],
    outcome: "Récupérer une demande, une réservation ou un renouvellement.",
  },
];

const triggers = [
  "Nouvelle transaction",
  "Prestation terminée",
  "Dernier achat",
  "Nombre de transactions",
  "Période d’inactivité",
  "Changement de statut",
  "Renouvellement prochain",
  "Annulation",
  "Processus interrompu",
  "Événement saisonnier",
  "Score ou segment client",
];

const personalization = [
  "Service ou produit utilisé",
  "Ancienneté de la relation",
  "Fréquence d’achat",
  "Valeur du client",
  "Dernière interaction",
  "Comportement précédent",
  "Contexte du déclenchement",
];

const integrationSteps = [
  { title: "Événement détecté", text: "Le logiciel enregistre une action ou un changement utile." },
  { title: "Données transmises", text: "Seules les informations nécessaires au scénario circulent." },
  { title: "Règle exécutée", text: "Le système vérifie le segment, le délai et les exclusions." },
  { title: "Action déclenchée", text: "Le message ou la tâche part vers le canal prévu." },
  { title: "Résultat mesuré", text: "Le retour est suivi et peut être renvoyé dans les outils existants." },
];

const method = [
  { number: "01", title: "Cartographier", text: "Identifier les événements disponibles, la qualité des données et les outils déjà utilisés." },
  { number: "02", title: "Prioriser", text: "Choisir un scénario selon sa valeur commerciale, sa fréquence et sa faisabilité." },
  { number: "03", title: "Concevoir", text: "Définir les règles, les messages, les segments, les exclusions et les indicateurs." },
  { number: "04", title: "Intégrer", text: "Connecter le logiciel aux canaux nécessaires et tester les situations réelles." },
  { number: "05", title: "Améliorer", text: "Observer les résultats, ajuster le système et ouvrir progressivement de nouveaux scénarios." },
];

const examples = [
  {
    title: "Outil de réservation",
    situation: "La relation s’arrête après le rendez-vous.",
    data: "Date, prestation, statut et historique du client.",
    system: "Suivi après prestation, demande d’avis et rappel futur.",
    effect: "Un parcours de fidélisation cohérent après chaque rendez-vous.",
  },
  {
    title: "Logiciel de maintenance",
    situation: "Les échéances sont connues mais les relances restent manuelles.",
    data: "Contrat, équipement, dernière intervention et prochaine échéance.",
    system: "Séquence de préparation et de renouvellement adaptée au contrat.",
    effect: "Des renouvellements anticipés et une charge manuelle réduite.",
  },
  {
    title: "Plateforme SaaS",
    situation: "La baisse d’usage est visible après le départ du client.",
    data: "Connexions, fonctionnalités utilisées, abonnement et support.",
    system: "Détection de baisse d’activité et parcours de réactivation ciblé.",
    effect: "Une intervention plus rapide lorsque l’engagement diminue.",
  },
  {
    title: "Logiciel de gestion",
    situation: "Les statuts évoluent sans produire la prochaine action commerciale.",
    data: "Statut, segment, transactions et responsable du compte.",
    system: "Règle métier, création de tâche CRM et message personnalisé.",
    effect: "Des opportunités traitées de manière régulière et traçable.",
  },
];

const metrics = [
  "Taux de réactivation",
  "Taux de renouvellement",
  "Avis obtenus",
  "Revenu généré par scénario",
  "Taux de conversion des relances",
  "Temps manuel économisé",
];

const faq = [
  {
    question: "Faut-il remplacer le logiciel existant ?",
    answer: "Le logiciel reste la source principale. La couche ajoutée exploite les événements et les données disponibles pour déclencher les actions prévues.",
  },
  {
    question: "Une API est-elle indispensable ?",
    answer: "Une API ou des webhooks facilitent les échanges en temps réel. Selon le contexte, des exports synchronisés, une base de données ou un CRM peuvent aussi fournir un point de connexion fiable.",
  },
  {
    question: "Peut-on commencer par un seul scénario ?",
    answer: "Oui. Un scénario fréquent, mesurable et techniquement accessible permet de valider l’intégration avant d’étendre le système.",
  },
  {
    question: "Comment éviter les messages inutiles ?",
    answer: "Chaque workflow définit ses exclusions, ses délais, sa fréquence maximale et ses conditions d’arrêt. Une nouvelle transaction ou un changement de statut peut interrompre immédiatement une séquence devenue inutile.",
  },
];

const FidelisationLogicielsMetiers = () => {
  usePageSeo({
    title: "Fidélisation automatisée pour logiciels métiers | Synapse",
    description: "Transformez les événements et données de votre logiciel métier en actions de fidélisation, de réactivation et de renouvellement déclenchées au bon moment.",
    canonicalPath: "/services/fidelisation-automatisee-logiciels-metiers",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Fidélisation automatisée pour logiciels métiers",
      description: "Conception et intégration de systèmes qui transforment les événements d’un logiciel métier en actions de fidélisation mesurables.",
      provider: { "@type": "Organization", name: "Synapse", url: "https://www.synapse-lab.co" },
      areaServed: "FR",
      url: "https://www.synapse-lab.co/services/fidelisation-automatisee-logiciels-metiers",
    },
  });

  return (
    <div className="site-page-premium relative min-h-screen overflow-x-hidden bg-background">
      <Header />

      <main className="relative z-10 pt-20">
        <section className="border-b border-border/60 px-4 py-14 sm:px-6 sm:py-24">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <PageBreadcrumb
                items={[
                  { label: "Services", href: "/expertises" },
                  { label: "Fidélisation automatisée" },
                ]}
                className="mb-9"
              />

              <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-end">
                <div>
                  <h1 className="max-w-5xl text-4xl font-bold leading-[1.04] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                    Transformez les données de votre logiciel métier en actions de fidélisation
                  </h1>
                  <p className="mt-7 max-w-3xl text-lg leading-8 text-foreground/85 sm:text-xl">
                    Votre logiciel sait déjà quand une prestation se termine, quand un client devient inactif ou quand un renouvellement approche. Ces événements peuvent déclencher automatiquement la prochaine action utile.
                  </p>
                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <a href={BOOKING_URL}>
                      <Button variant="hero" size="lg" className="w-full sm:w-auto">
                        Réserver un appel
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                    <a href="#scenarios" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border bg-card px-6 text-sm font-semibold transition hover:border-primary/50 hover:text-primary">
                      Voir les scénarios
                    </a>
                  </div>
                </div>

                <div className="rounded-3xl border border-primary/30 bg-card p-6 shadow-2xl shadow-primary/5 sm:p-7">
                  <div className="flex items-center gap-3 border-b border-border/70 pb-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                      <Bell className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/60">Événement détecté</p>
                      <p className="mt-1 font-semibold">Prestation terminée</p>
                    </div>
                  </div>
                  <div className="py-4 pl-5">
                    <ArrowDown className="h-5 w-5 text-primary" />
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-background p-5">
                    <div className="flex items-start gap-3">
                      <Workflow className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                      <div>
                        <p className="font-semibold">Règles vérifiées</p>
                        <p className="mt-2 text-sm leading-6 text-foreground/70">Consentement, délai, historique et condition d’arrêt.</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 pl-5">
                    <ArrowDown className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl bg-primary/10 p-5">
                    <MessageSquare className="h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm font-semibold">Action personnalisée au moment prévu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-24">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <div className="max-w-4xl">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">Le problème métier</p>
                <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-5xl">Les données gèrent l’activité. Elles peuvent aussi préparer la prochaine action commerciale.</h2>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/85">
                  Historique d’achat, dates, fréquence, services utilisés, statuts et dernière interaction décrivent déjà la relation client. Une fois la prestation terminée, cette connaissance reste souvent inutilisée jusqu’au prochain besoin exprimé par le client.
                </p>
              </div>

              <div className="mt-12 grid overflow-hidden rounded-3xl border border-border/70 bg-card md:grid-cols-2">
                <div className="p-7 sm:p-9">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-foreground/55">Fonctionnement actuel</p>
                  <ul className="mt-7 space-y-5 text-foreground/75">
                    <li className="flex gap-3"><Clock className="mt-1 h-5 w-5 shrink-0" /><span>Les équipes cherchent manuellement qui relancer.</span></li>
                    <li className="flex gap-3"><History className="mt-1 h-5 w-5 shrink-0" /><span>Les clients satisfaits disparaissent progressivement du radar.</span></li>
                    <li className="flex gap-3"><Database className="mt-1 h-5 w-5 shrink-0" /><span>Les opportunités restent présentes dans les données sans produire d’action.</span></li>
                  </ul>
                </div>
                <div className="border-t border-primary/20 bg-primary/10 p-7 sm:p-9 md:border-l md:border-t-0">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">Avec la couche ajoutée</p>
                  <ul className="mt-7 space-y-5 text-foreground/90">
                    <li className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-primary" /><span>Chaque événement utile peut alimenter une décision.</span></li>
                    <li className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-primary" /><span>Le bon segment reçoit une action adaptée au contexte.</span></li>
                    <li className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-primary" /><span>Les déclenchements et les résultats deviennent mesurables.</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="scenarios" className="border-y border-border/60 bg-card/30 px-4 py-16 sm:px-6 sm:py-24">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <div className="max-w-4xl">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Scénarios concrets</p>
                <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Cinq façons d’exploiter les événements déjà présents</h2>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/80">Chaque scénario relie un signal connu, une règle explicite, une action et une condition d’arrêt.</p>
              </div>

              <div className="mt-12 grid gap-5 lg:grid-cols-2">
                {scenarios.map((scenario, index) => {
                  const Icon = scenario.icon;
                  return (
                    <article key={scenario.title} className={`rounded-3xl border border-border/70 bg-background p-6 sm:p-8 ${index === scenarios.length - 1 ? "lg:col-span-2" : ""}`}>
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold sm:text-2xl">{scenario.title}</h3>
                          <p className="mt-2 leading-7 text-foreground/75">{scenario.description}</p>
                        </div>
                      </div>
                      <div className="mt-7 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
                        {scenario.flow.map((step, stepIndex) => (
                          <div key={step} className="flex items-center gap-2">
                            <span className="rounded-xl border border-border/70 bg-card px-3 py-2 text-xs font-semibold text-foreground/85">{step}</span>
                            {stepIndex < scenario.flow.length - 1 && <ArrowRight className="hidden h-4 w-4 text-primary/70 sm:block" />}
                          </div>
                        ))}
                      </div>
                      <p className="mt-6 border-t border-border/60 pt-5 text-sm font-semibold text-secondary">{scenario.outcome}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-24">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <div className="max-w-4xl">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">Fonctionnement général</p>
                <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Une couche connectée au logiciel existant</h2>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/80">Le logiciel métier reste la source principale. La couche ajoutée utilise les événements utiles, applique les règles définies et transmet les actions aux canaux déjà utilisés.</p>
              </div>

              <div className="mt-12 grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch">
                {[
                  { icon: Database, title: "Logiciel métier", text: "Données clients et événements" },
                  { icon: Workflow, title: "Couche d’automatisation", text: "Règles, segmentation et timing" },
                  { icon: Mail, title: "Canaux", text: "Email, SMS, CRM et notifications" },
                  { icon: RefreshCw, title: "Actions obtenues", text: "Fidélisation, avis et renouvellements" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="contents">
                      <div className="rounded-3xl border border-border/70 bg-card p-6">
                        <Icon className="h-6 w-6 text-primary" />
                        <h3 className="mt-7 font-bold">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-foreground/70">{item.text}</p>
                      </div>
                      {index < 3 && <ArrowRight className="hidden h-5 w-5 self-center text-primary lg:block" />}
                    </div>
                  );
                })}
              </div>

              <div className="mt-12 grid gap-5 lg:grid-cols-2">
                <div className="rounded-3xl border border-border/70 bg-card/70 p-7 sm:p-9">
                  <div className="flex items-center gap-3">
                    <Bell className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-bold">Événements déclencheurs</h3>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {triggers.map((trigger) => <span key={trigger} className="rounded-full border border-border/70 bg-background px-3 py-2 text-sm text-foreground/80">{trigger}</span>)}
                  </div>
                  <p className="mt-7 text-sm leading-7 text-foreground/70">Lorsqu’un événement est connu du logiciel, il peut alimenter une règle et déclencher une action.</p>
                </div>
                <div className="rounded-3xl border border-primary/25 bg-primary/10 p-7 sm:p-9">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-bold">Personnalisation du parcours</h3>
                  </div>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {personalization.map((item) => <li key={item} className="flex gap-2 text-sm leading-6 text-foreground/80"><Check className="mt-1 h-4 w-4 shrink-0 text-primary" />{item}</li>)}
                  </ul>
                  <p className="mt-7 text-sm leading-7 text-foreground/80">Un nouveau client suit un parcours différent d’un client régulier absent depuis plusieurs mois.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border/60 bg-card/30 px-4 py-16 sm:px-6 sm:py-24">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Intégration</p>
                  <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Une architecture adaptée aux capacités du logiciel</h2>
                  <p className="mt-6 text-lg leading-8 text-foreground/80">La connexion peut utiliser une API, des webhooks, des exports synchronisés, une base de données ou un CRM. Le choix dépend de la fraîcheur attendue, du volume et des capacités de l’existant.</p>

                  <ol className="mt-10 space-y-3">
                    {integrationSteps.map((step, index) => (
                      <li key={step.title} className="grid gap-3 rounded-2xl border border-border/70 bg-background p-5 sm:grid-cols-[48px_180px_1fr] sm:items-center">
                        <span className="text-sm font-bold text-primary">0{index + 1}</span>
                        <span className="font-semibold">{step.title}</span>
                        <span className="text-sm leading-6 text-foreground/70">{step.text}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <aside className="h-fit rounded-3xl border border-border/70 bg-background p-7 sm:p-8">
                  <ShieldCheck className="h-7 w-7 text-primary" />
                  <h3 className="mt-6 text-2xl font-bold">Prévoir le comportement réel</h3>
                  <ul className="mt-6 space-y-4 text-sm leading-6 text-foreground/75">
                    <li className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-primary" />Contrôle du consentement et des exclusions</li>
                    <li className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-primary" />Prévention des doublons</li>
                    <li className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-primary" />Arrêt des séquences après conversion</li>
                    <li className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-primary" />Journal des actions et gestion des erreurs</li>
                    <li className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-primary" />Limitation de la fréquence des messages</li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-24">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <div className="max-w-4xl">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">Accompagnement</p>
                <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Du diagnostic au déploiement</h2>
              </div>
              <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                {method.map((step) => (
                  <li key={step.number} className="rounded-3xl border border-border/70 bg-card/70 p-6">
                    <span className="text-sm font-bold text-primary">{step.number}</span>
                    <h3 className="mt-10 text-xl font-bold">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-foreground/70">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="border-y border-border/60 bg-card/30 px-4 py-16 sm:px-6 sm:py-24">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <div className="max-w-4xl">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Exemples d’application</p>
                <h2 className="mt-3 text-3xl font-bold sm:text-5xl">La même logique appliquée à plusieurs produits</h2>
              </div>
              <div className="mt-12 grid gap-5 lg:grid-cols-2">
                {examples.map((example) => (
                  <article key={example.title} className="rounded-3xl border border-border/70 bg-background p-7 sm:p-8">
                    <h3 className="text-2xl font-bold">{example.title}</h3>
                    <dl className="mt-7 grid gap-5 text-sm">
                      <div><dt className="font-semibold text-primary">Situation</dt><dd className="mt-1 leading-6 text-foreground/75">{example.situation}</dd></div>
                      <div><dt className="font-semibold text-primary">Données disponibles</dt><dd className="mt-1 leading-6 text-foreground/75">{example.data}</dd></div>
                      <div><dt className="font-semibold text-primary">Système possible</dt><dd className="mt-1 leading-6 text-foreground/75">{example.system}</dd></div>
                      <div><dt className="font-semibold text-primary">Effet recherché</dt><dd className="mt-1 leading-6 text-foreground/75">{example.effect}</dd></div>
                    </dl>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-24">
          <div className="container">
            <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-border/70 bg-card p-7 sm:p-9">
                <Database className="h-7 w-7 text-primary" />
                <h2 className="mt-6 text-3xl font-bold">Le logiciel reste la source de référence</h2>
                <p className="mt-5 leading-8 text-foreground/80">La couche ajoutée exploite davantage les informations disponibles tout en conservant le produit existant au centre du fonctionnement.</p>
                <ul className="mt-7 space-y-4 text-sm leading-6 text-foreground/75">
                  <li className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-primary" />Déploiement progressif, scénario par scénario</li>
                  <li className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-primary" />Règles documentées et modifiables</li>
                  <li className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-primary" />Résultats renvoyés vers le logiciel ou le CRM selon le besoin</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-primary/25 bg-primary/10 p-7 sm:p-9">
                <Clock className="h-7 w-7 text-primary" />
                <h2 className="mt-6 text-3xl font-bold">Mesurer ce que chaque scénario apporte</h2>
                <p className="mt-5 leading-8 text-foreground/80">Le suivi relie les déclenchements aux actions obtenues pour comprendre les scénarios qui produisent une valeur réelle.</p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {metrics.map((metric) => <div key={metric} className="rounded-xl border border-primary/20 bg-background/70 px-4 py-3 text-sm font-semibold">{metric}</div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border/60 bg-card/30 px-4 py-16 sm:px-6 sm:py-24">
          <div className="container">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[360px_1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">Questions fréquentes</p>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Avant de commencer</h2>
              </div>
              <div className="divide-y divide-border/70 border-y border-border/70">
                {faq.map((item) => (
                  <details key={item.question} className="group py-5">
                    <summary className="cursor-pointer list-none pr-8 font-semibold marker:hidden">{item.question}</summary>
                    <p className="mt-3 max-w-3xl pr-6 text-sm leading-7 text-foreground/75">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 sm:py-28">
          <div className="container">
            <div className="mx-auto max-w-6xl rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/20 via-card to-secondary/15 p-8 sm:p-12">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <h2 className="text-3xl font-bold sm:text-5xl">Commencer par clarifier votre besoin</h2>
                  <p className="mt-5 text-lg leading-8 text-foreground/80">Vous avez un projet, une idée à structurer ou une situation à améliorer ? Réservez un échange pour faire le point.</p>
                </div>
                <a href={BOOKING_URL} className="shrink-0">
                  <Button variant="hero" size="lg">
                    Réserver un appel
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <nav aria-label="Services liés" className="border-t border-border/60 px-4 py-12 sm:px-6">
          <div className="container">
            <div className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-3">
              <Link to="/services/diagnostic-processus" className="text-sm text-foreground/70 transition hover:text-primary">Diagnostic des processus</Link>
              <Link to="/services/automatisation-processus" className="text-sm text-foreground/70 transition hover:text-primary">Automatisation des processus</Link>
              <Link to="/services/integration-api-outils" className="text-sm text-foreground/70 transition hover:text-primary">Intégration API et outils</Link>
              <Link to="/services/solution-numerique-sur-mesure" className="text-sm text-foreground/70 transition hover:text-primary">Solution numérique sur mesure</Link>
            </div>
          </div>
        </nav>
      </main>

      <Footer />
    </div>
  );
};

export default FidelisationLogicielsMetiers;
