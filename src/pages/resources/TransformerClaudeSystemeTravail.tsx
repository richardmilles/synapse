import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Bot,
  BrainCircuit,
  CalendarClock,
  Check,
  ChevronRight,
  Chrome,
  ClipboardCheck,
  Download,
  ExternalLink,
  Layers3,
  PackageOpen,
  Puzzle,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import { CopyPrompt } from "@/components/resources/CopyPrompt";
import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Footer } from "@/components/sections/Footer";
import { usePageSeo } from "@/hooks/use-page-seo";

const BOOKING_URL = "https://synapse0.neetocal.com/audit";
const RESOURCE_PATH = "/ressources/transformer-claude-en-systeme-de-travail";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Transformer Claude en système de travail",
  description:
    "Guide pratique pour configurer Skills, tâches planifiées, Artifacts, plugins et Claude dans Chrome.",
  datePublished: "2026-08-06",
  dateModified: "2026-08-06",
  inLanguage: "fr-FR",
  author: { "@type": "Organization", name: "Synapse" },
  publisher: { "@type": "Organization", name: "Synapse" },
  mainEntityOfPage: `https://www.synapse-lab.co${RESOURCE_PATH}`,
};

const configurations = [
  { id: "skill", label: "Skill", role: "Conserver une méthode", icon: BrainCircuit, color: "text-primary", border: "border-primary/25", background: "bg-primary/10" },
  { id: "tache", label: "Tâche planifiée", role: "Déclencher le travail", icon: CalendarClock, color: "text-secondary", border: "border-secondary/25", background: "bg-secondary/10" },
  { id: "artifact", label: "Artifact", role: "Créer un outil réutilisable", icon: PackageOpen, color: "text-accent", border: "border-accent/25", background: "bg-accent/10" },
  { id: "plugin", label: "Plugin", role: "Assembler des capacités", icon: Puzzle, color: "text-synapse-violet", border: "border-synapse-violet/25", background: "bg-synapse-violet/10" },
  { id: "chrome", label: "Claude dans Chrome", role: "Agir dans le navigateur", icon: Chrome, color: "text-synapse-blue", border: "border-synapse-blue/25", background: "bg-synapse-blue/10" },
];

const navItems = [
  { href: "#vue-ensemble", label: "Vue d’ensemble" },
  { href: "#skill", label: "1. Skill" },
  { href: "#tache", label: "2. Tâche planifiée" },
  { href: "#artifact", label: "3. Artifact" },
  { href: "#plugin", label: "4. Plugin" },
  { href: "#chrome", label: "5. Chrome" },
  { href: "#decision", label: "Tableau de décision" },
  { href: "#plan", label: "Plan en 30 minutes" },
];

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3 text-[15px] leading-7 text-white/85">
    <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
      <Check className="h-3 w-3" />
    </span>
    <span>{children}</span>
  </li>
);

const SectionIntro = ({ number, title, summary }: { number: string; title: string; summary: string }) => (
  <div className="mb-8">
    <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Configuration {number}</span>
    <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
    <p className="mt-4 text-lg leading-8 text-foreground/85">{summary}</p>
  </div>
);

const TransformerClaudeSystemeTravail = () => {
  usePageSeo({
    title: "Transformer Claude en système de travail : guide complet | Synapse",
    description:
      "Configurez Claude avec Skills, tâches planifiées, Artifacts, plugins et Chrome grâce à une méthode progressive, des modèles copiables et une checklist.",
    canonicalPath: RESOURCE_PATH,
    type: "article",
    structuredData,
  });

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <NeuralBackground />
      <Header />

      <main className="relative z-10 pt-20">
        <article>
          <header className="border-b border-border/50 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-20">
            <div className="container">
              <div className="mx-auto max-w-5xl">
                <Link to="/ressources" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary">
                  <ArrowLeft className="h-4 w-4" />
                  Toutes les ressources
                </Link>

                <div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:items-end">
                  <div>
                    <div className="mb-5 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-semibold text-primary">Productivité IA</span>
                      <span>Guide pratique</span>
                    </div>
                    <h1 className="text-4xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                      Transformer Claude en système de travail
                    </h1>
                    <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/85 sm:text-xl">
                      Les cinq configurations à mettre en place pour dépasser le simple chatbot et construire un environnement de travail structuré, réutilisable et contrôlé.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/15 to-secondary/10 p-6">
                    <Sparkles className="h-6 w-6 text-primary" />
                    <p className="mt-4 text-sm font-semibold">À la fin de ce guide</p>
                    <p className="mt-2 text-sm leading-6 text-foreground/80">Vous saurez quelle capacité utiliser, dans quel ordre la configurer et où conserver une validation humaine.</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="container px-4 sm:px-6">
            <div className="mx-auto grid max-w-6xl gap-12 py-14 lg:grid-cols-[220px_minmax(0,780px)] lg:items-start lg:py-20">
              <aside className="hidden lg:sticky lg:top-28 lg:block">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white/70">Dans ce guide</p>
                <nav className="space-y-1 border-l border-white/10 pl-4" aria-label="Sommaire">
                  {navItems.map((item) => (
                    <a key={item.href} href={item.href} className="block py-1.5 text-sm text-white/70 transition hover:translate-x-1 hover:text-primary">
                      {item.label}
                    </a>
                  ))}
                </nav>
                <a href="/ressources/checklist-systeme-claude.md" download className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80">
                  <Download className="h-4 w-4" />
                  Télécharger la checklist
                </a>
              </aside>

              <div className="min-w-0">
                <section id="vue-ensemble" className="scroll-mt-28">
                  <p className="text-lg leading-8 text-white/85">
                    Claude produit déjà des réponses utiles dans une conversation. Sa valeur augmente lorsqu’il connaît une méthode, exécute un travail récurrent, fabrique un outil et intervient dans un environnement connecté. Chaque capacité doit recevoir une fonction précise.
                  </p>

                  <div className="my-10 rounded-3xl border border-border/60 bg-card/60 p-5 sm:p-8">
                    <div className="mb-7 flex items-center gap-3">
                      <Layers3 className="h-5 w-5 text-primary" />
                      <h2 className="text-xl font-bold">Les cinq couches du système</h2>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {configurations.map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <a key={item.id} href={`#${item.id}`} className={`group relative rounded-2xl border ${item.border} ${item.background} p-4 transition hover:-translate-y-0.5`}>
                            <div className="flex items-start gap-4">
                              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black/20 ${item.color}`}><Icon className="h-5 w-5" /></div>
                              <div>
                                <p className="text-xs font-semibold text-white/70">0{index + 1}</p>
                                <h3 className="mt-1 font-bold">{item.label}</h3>
                                <p className="mt-1 text-sm text-white/75">{item.role}</p>
                              </div>
                            </div>
                            <ChevronRight className="absolute right-4 top-4 h-4 w-4 text-white/50 transition group-hover:translate-x-1 group-hover:text-white/75" />
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mb-20 rounded-2xl border border-accent/20 bg-accent/5 p-6">
                    <p className="text-sm font-bold text-accent">Principe directeur</p>
                    <p className="mt-2 text-lg leading-8 text-white/85">Commencez par un processus réel. Rendez-le reproductible. Testez-le. Automatisez-le ensuite.</p>
                  </div>
                </section>

                <section id="skill" className="scroll-mt-28 border-t border-white/10 py-16">
                  <SectionIntro number="01" title="Créer une Skill pour une tâche répétitive" summary="Une Skill conserve une méthode spécialisée afin que Claude puisse la réappliquer sans recevoir les mêmes explications à chaque conversation." />

                  <h3 className="text-xl font-bold">Le bon signal</h3>
                  <p className="mt-3 leading-7 text-white/80">Créez une Skill lorsque vous répétez régulièrement le contexte, les étapes, les critères de qualité, les formats de sortie ou les erreurs à éviter. Une demande ponctuelle reste un prompt. Une méthode réutilisable mérite une Skill.</p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <h4 className="font-bold">Structure minimale</h4>
                      <ol className="mt-4 space-y-3 text-sm text-white/80">
                        <li><strong className="text-white/85">1. Rôle :</strong> la tâche couverte.</li>
                        <li><strong className="text-white/85">2. Entrées :</strong> les informations nécessaires.</li>
                        <li><strong className="text-white/85">3. Méthode :</strong> les étapes dans l’ordre.</li>
                        <li><strong className="text-white/85">4. Qualité :</strong> les critères de réussite.</li>
                        <li><strong className="text-white/85">5. Limites :</strong> les erreurs à éviter.</li>
                      </ol>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <h4 className="font-bold">Test de robustesse</h4>
                      <ul className="mt-4 space-y-3">
                        <Bullet>Un cas simple et représentatif.</Bullet>
                        <Bullet>Un cas ambigu qui exige une décision.</Bullet>
                        <Bullet>Un cas éloigné de l’exemple initial.</Bullet>
                      </ul>
                    </div>
                  </div>

                  <CopyPrompt title="Demande pour créer une première Skill">{`Transforme la méthode ci-dessous en Skill réutilisable.

Définis son rôle, les informations d’entrée, les étapes à suivre, les critères de qualité et les erreurs à éviter.

Indique clairement quand cette Skill doit intervenir.
Ajoute un contrôle final avant de produire le résultat.

Méthode à formaliser :
[collez ici vos instructions, exemples et corrections]`}</CopyPrompt>

                  <p className="rounded-xl border-l-2 border-primary bg-primary/5 px-5 py-4 text-sm leading-6 text-white/80"><strong className="text-white">À retenir :</strong> une bonne Skill encode un processus. Elle évite d’accumuler des consignes sans ordre.</p>
                </section>

                <section id="tache" className="scroll-mt-28 border-t border-white/10 py-16">
                  <SectionIntro number="02" title="Planifier une tâche récurrente" summary="Une tâche planifiée exécute un travail à une fréquence définie et produit un résultat stable à partir de sources identifiées." />

                  <div className="grid gap-4 sm:grid-cols-3">
                    {[
                      ["Fréquence", "Tous les matins, chaque vendredi ou avant une réunion."],
                      ["Source", "Emails, calendrier, documents, pages web ou espace connecté."],
                      ["Résultat", "Brief, tableau, rapport, liste d’actions ou alerte."],
                    ].map(([title, text]) => (
                      <div key={title} className="rounded-2xl border border-secondary/20 bg-secondary/5 p-5">
                        <h3 className="font-bold text-secondary">{title}</h3>
                        <p className="mt-2 text-sm leading-6 text-white/75">{text}</p>
                      </div>
                    ))}
                  </div>

                  <h3 className="mt-9 text-xl font-bold">Contrôle avant activation</h3>
                  <ul className="mt-4 space-y-3">
                    <Bullet>La fréquence apporte une utilité réelle.</Bullet>
                    <Bullet>Les sources et les critères de sélection sont explicites.</Bullet>
                    <Bullet>Le résultat possède un format stable.</Bullet>
                    <Bullet>Les actions sensibles restent soumises à validation.</Bullet>
                  </ul>

                  <CopyPrompt title="Modèle de tâche planifiée">{`Chaque [fréquence], consulte [sources].

Identifie [informations recherchées].
Ignore [éléments non pertinents].
Classe les résultats selon [critère].
Produis [format attendu].
Signale clairement [conditions importantes].

Demande une validation avant toute action externe ou difficile à annuler.`}</CopyPrompt>

                  <p className="rounded-xl border-l-2 border-secondary bg-secondary/5 px-5 py-4 text-sm leading-6 text-white/80"><strong className="text-white">À retenir :</strong> automatisez un processus stable avec une sortie identifiable.</p>
                </section>

                <section id="artifact" className="scroll-mt-28 border-t border-white/10 py-16">
                  <SectionIntro number="03" title="Construire un Artifact utile" summary="Un Artifact transforme une réponse en contenu autonome, interface ou outil que l’on peut consulter et réutiliser sans relancer la conversation." />

                  <div className="rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/10 to-transparent p-6 sm:p-8">
                    <p className="text-sm font-semibold text-accent">La question de départ</p>
                    <p className="mt-3 text-2xl font-bold leading-tight">Quelle action la personne doit-elle pouvoir accomplir seule ?</p>
                    <div className="mt-6 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
                      {["Calculer un prix", "Classer des priorités", "Comparer des options", "Remplir une structure", "Suivre une progression", "Générer un résultat"].map((item) => (
                        <div key={item} className="rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-white/80">{item}</div>
                      ))}
                    </div>
                  </div>

                  <h3 className="mt-9 text-xl font-bold">Processus d’amélioration</h3>
                  <div className="mt-5 space-y-3">
                    {["Construire une version minimale avec une seule fonction importante.", "Tester avec de vraies données.", "Repérer les hésitations et les résultats trop vagues.", "Ajouter uniquement ce qui corrige ces problèmes.", "Faire tester l’outil sans explication préalable."].map((step, index) => (
                      <div key={step} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">{index + 1}</span>
                        <p className="text-sm leading-6 text-white/80">{step}</p>
                      </div>
                    ))}
                  </div>

                  <CopyPrompt title="Modèle de demande pour un Artifact">{`Construis un outil qui permet de [action principale].

L’utilisateur doit pouvoir entrer [données].
L’outil doit calculer ou afficher [résultat].
Organise l’interface en [sections].
Ajoute [contrôles nécessaires].

Le résultat final doit être compréhensible et utilisable sans explication supplémentaire.`}</CopyPrompt>

                  <p className="rounded-xl border-l-2 border-accent bg-accent/5 px-5 py-4 text-sm leading-6 text-white/80"><strong className="text-white">À retenir :</strong> un bon Artifact transforme une conversation répétitive en expérience autonome.</p>
                </section>

                <section id="plugin" className="scroll-mt-28 border-t border-white/10 py-16">
                  <SectionIntro number="04" title="Installer un plugin adapté à une fonction" summary="Un plugin rassemble plusieurs capacités liées à un même type de travail : Skills, connecteurs, sous-agents et méthodes spécialisées." />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-synapse-violet/20 bg-synapse-violet/5 p-5">
                      <BrainCircuit className="h-5 w-5 text-synapse-violet" />
                      <h3 className="mt-4 font-bold">Skill</h3>
                      <p className="mt-2 text-sm leading-6 text-white/75">Une méthode spécialisée pour exécuter correctement une tâche précise.</p>
                    </div>
                    <div className="rounded-2xl border border-synapse-violet/20 bg-synapse-violet/5 p-5">
                      <Puzzle className="h-5 w-5 text-synapse-violet" />
                      <h3 className="mt-4 font-bold">Plugin</h3>
                      <p className="mt-2 text-sm leading-6 text-white/75">Un ensemble cohérent de capacités pour couvrir une fonction plus large.</p>
                    </div>
                  </div>

                  <h3 className="mt-9 text-xl font-bold">Les quatre vérifications</h3>
                  <ul className="mt-4 space-y-3">
                    <Bullet>La fonction couverte correspond à un travail réellement effectué.</Bullet>
                    <Bullet>Les capacités incluses répondent au besoin identifié.</Bullet>
                    <Bullet>Les autorisations demandées restent proportionnées.</Bullet>
                    <Bullet>Les méthodes génériques peuvent être adaptées à vos standards.</Bullet>
                  </ul>

                  <CopyPrompt title="Demande de personnalisation d’un plugin">{`Analyse les composants de ce plugin.

Explique à quelles tâches chacun peut servir dans mon activité.
Identifie les règles génériques qui doivent être personnalisées.
Pose uniquement les questions nécessaires pour l’adapter à mon processus.

Propose ensuite une configuration personnalisée en conservant les éléments indispensables à son fonctionnement.`}</CopyPrompt>

                  <p className="rounded-xl border-l-2 border-synapse-violet bg-synapse-violet/5 px-5 py-4 text-sm leading-6 text-white/80"><strong className="text-white">À retenir :</strong> choisissez un plugin pour une fonction précise, puis adaptez-le avant son usage quotidien.</p>
                </section>

                <section id="chrome" className="scroll-mt-28 border-t border-white/10 py-16">
                  <SectionIntro number="05" title="Utiliser Claude dans Chrome" summary="Claude dans Chrome permet de lire, cliquer, saisir et naviguer sur des sites afin de déplacer une partie du travail de l’analyse vers l’exécution." />

                  <div className="rounded-3xl border border-synapse-blue/20 bg-synapse-blue/5 p-6 sm:p-8">
                    <div className="flex items-center gap-3"><Chrome className="h-6 w-6 text-synapse-blue" /><h3 className="text-xl font-bold">Workflow d’enregistrement</h3></div>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {["Choisir un processus stable", "Nettoyer le parcours", "Effectuer les actions dans l’ordre", "Verbaliser les décisions", "Nommer le raccourci", "Tester sur un autre cas"].map((step, index) => (
                        <div key={step} className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/15 p-3 text-sm text-white/80">
                          <span className="font-bold text-synapse-blue">0{index + 1}</span>{step}
                        </div>
                      ))}
                    </div>
                  </div>

                  <h3 className="mt-10 text-xl font-bold">Niveau de contrôle selon le risque</h3>
                  <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
                    {[
                      ["Faible", "Lecture, recherche, comparaison, extraction", "Autonomie encadrée", "bg-emerald-400", "text-emerald-300"],
                      ["Intermédiaire", "Brouillon, saisie ou modification non critique", "Vérification avant finalisation", "bg-amber-400", "text-amber-300"],
                      ["Élevé", "Envoi, suppression, paiement, publication, signature", "Validation humaine explicite", "bg-rose-400", "text-rose-300"],
                    ].map(([level, examples, control, bar, textColor]) => (
                      <div key={level} className="grid gap-3 border-b border-white/10 bg-white/[0.025] p-4 last:border-b-0 sm:grid-cols-[110px_1fr_190px] sm:items-center">
                        <div className="flex items-center gap-2"><span className={`h-2.5 w-2.5 rounded-full ${bar}`} /><span className={`font-bold ${textColor}`}>{level}</span></div>
                        <p className="text-sm text-white/75">{examples}</p>
                        <p className="text-sm font-semibold text-white/85">{control}</p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-7 rounded-xl border-l-2 border-synapse-blue bg-synapse-blue/5 px-5 py-4 text-sm leading-6 text-white/80"><strong className="text-white">À retenir :</strong> plus une action produit des conséquences difficiles à annuler, plus la validation humaine doit intervenir avant son exécution.</p>
                </section>

                <section id="decision" className="scroll-mt-28 border-t border-white/10 py-16">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Choisir rapidement</span>
                  <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Tableau de décision</h2>
                  <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
                    <table className="w-full min-w-[640px] text-left text-sm">
                      <thead className="bg-white/[0.05] text-white/80">
                        <tr><th className="px-5 py-4">Besoin</th><th className="px-5 py-4">Configuration</th><th className="px-5 py-4">Résultat</th></tr>
                      </thead>
                      <tbody className="divide-y divide-white/10 text-white/75">
                        <tr><td className="px-5 py-4">Répéter une méthode</td><td className="px-5 py-4 font-semibold text-primary">Skill</td><td className="px-5 py-4">Processus réutilisable</td></tr>
                        <tr><td className="px-5 py-4">Relancer un travail à fréquence fixe</td><td className="px-5 py-4 font-semibold text-secondary">Tâche planifiée</td><td className="px-5 py-4">Résultat récurrent</td></tr>
                        <tr><td className="px-5 py-4">Fournir une interface autonome</td><td className="px-5 py-4 font-semibold text-accent">Artifact</td><td className="px-5 py-4">Outil ou contenu interactif</td></tr>
                        <tr><td className="px-5 py-4">Couvrir une fonction complète</td><td className="px-5 py-4 font-semibold text-synapse-violet">Plugin</td><td className="px-5 py-4">Ensemble de capacités</td></tr>
                        <tr><td className="px-5 py-4">Agir sur des pages web</td><td className="px-5 py-4 font-semibold text-synapse-blue">Claude dans Chrome</td><td className="px-5 py-4">Exécution dans le navigateur</td></tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="plan" className="scroll-mt-28 border-t border-white/10 py-16">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Passer à l’action</span>
                  <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Plan d’installation en 30 minutes</h2>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {[
                      ["0 à 5 min", "Choisir une tâche répétitive et noter son objectif, ses étapes et ses erreurs fréquentes."],
                      ["5 à 15 min", "Transformer la méthode en première Skill et la tester sur un nouveau cas."],
                      ["15 à 20 min", "Corriger les instructions vagues et retirer les règles redondantes."],
                      ["20 à 25 min", "Décider si la tâche mérite une planification, un Artifact, un plugin ou Chrome."],
                      ["25 à 30 min", "Configurer une seule extension du processus et lancer un test réel."],
                    ].map(([time, action], index) => (
                      <div key={time} className={`rounded-2xl border border-white/10 bg-white/[0.025] p-5 ${index === 4 ? "sm:col-span-2" : ""}`}>
                        <p className="text-sm font-bold text-primary">{time}</p>
                        <p className="mt-2 text-sm leading-6 text-white/80">{action}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-primary/25 bg-gradient-to-r from-primary/15 to-secondary/10 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                    <div>
                      <div className="flex items-center gap-2 text-primary"><ClipboardCheck className="h-5 w-5" /><span className="text-sm font-bold">Checklist complète</span></div>
                      <p className="mt-2 max-w-xl text-sm leading-6 text-white/80">Téléchargez la checklist au format Markdown pour la conserver, la compléter ou la partager avec votre équipe.</p>
                    </div>
                    <a href="/ressources/checklist-systeme-claude.md" download className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-bold text-background transition hover:bg-white/90">
                      <Download className="h-4 w-4" /> Télécharger
                    </a>
                  </div>
                </section>

                <section className="border-t border-white/10 py-16">
                  <div className="rounded-3xl border border-primary/25 bg-card/80 p-7 sm:p-10">
                    <Workflow className="h-7 w-7 text-primary" />
                    <h2 className="mt-5 text-3xl font-bold">Vous avez un projet ou un besoin à clarifier ?</h2>
                    <p className="mt-4 max-w-2xl leading-7 text-foreground/85">Un premier appel permet de comprendre votre fonctionnement, vos objectifs et les prochaines étapes possibles.</p>
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                      <Link to="/bio/offres" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 px-5 text-sm font-bold transition hover:border-primary/40 hover:bg-primary/10">
                        Voir l’accompagnement <ArrowRight className="h-4 w-4" />
                      </Link>
                      <a href={BOOKING_URL} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 text-sm font-bold text-white transition hover:brightness-110">
                        Réserver un échange <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </section>

                <section className="border-t border-white/10 py-12">
                  <div className="flex items-center gap-2 text-sm font-bold text-white/85"><ShieldCheck className="h-4 w-4 text-primary" />Documentation officielle</div>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {[
                      ["Créer des Skills personnalisées", "https://support.claude.com/en/articles/12512198-how-to-create-custom-skills"],
                      ["Planifier des tâches récurrentes", "https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork"],
                      ["Créer et partager des Artifacts", "https://support.claude.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them"],
                      ["Utiliser les plugins", "https://support.claude.com/en/articles/13837440-use-plugins-in-claude"],
                      ["Utiliser Claude dans Chrome", "https://support.claude.com/en/articles/12012173-get-started-with-claude-in-chrome"],
                    ].map(([label, href]) => (
                      <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-white/75 transition hover:border-primary/30 hover:text-white">
                        {label}<ExternalLink className="h-3.5 w-3.5 shrink-0" />
                      </a>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default TransformerClaudeSystemeTravail;
