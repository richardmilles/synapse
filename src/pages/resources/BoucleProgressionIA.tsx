import { BarChart3, BrainCircuit, Check, FileCheck2, FileText, FolderTree, RefreshCw, TestTube2 } from "lucide-react";
import { CopyPrompt } from "@/components/resources/CopyPrompt";
import { ResourceArticleLayout, ResourceSectionHeading } from "@/components/resources/ResourceArticleLayout";

const RESOURCE_PATH = "/ressources/boucle-progression-ia";

const navItems = [
  { href: "#principe", label: "Principe" },
  { href: "#organisation", label: "Organisation" },
  { href: "#boucle", label: "La boucle complète" },
  { href: "#regles", label: "Créer une bonne règle" },
  { href: "#tests", label: "Tester la progression" },
  { href: "#installation", label: "Mise en place" },
];

const loopSteps = [
  ["01", "Produire", "Conserver le brouillon brut", "border-primary/30 bg-primary/10 text-primary"],
  ["02", "Corriger", "Créer la version réellement validée", "border-secondary/30 bg-secondary/10 text-secondary"],
  ["03", "Comparer", "Identifier les différences significatives", "border-accent/30 bg-accent/10 text-accent"],
  ["04", "Extraire", "Formuler les préférences durables", "border-primary/30 bg-primary/10 text-primary"],
  ["05", "Valider", "Garder un contrôle humain", "border-secondary/30 bg-secondary/10 text-secondary"],
  ["06", "Mettre à jour", "Fusionner la règle avec l’existant", "border-accent/30 bg-accent/10 text-accent"],
  ["07", "Tester", "Vérifier trois cas différents", "border-primary/30 bg-primary/10 text-primary"],
  ["08", "Nettoyer", "Supprimer doublons et contradictions", "border-secondary/30 bg-secondary/10 text-secondary"],
];

const categories = [
  ["Préférence durable", "Applicable à de nombreux contenus. Elle peut devenir une règle générale."],
  ["Correction propre au sujet", "Utile pour ce contenu uniquement. Elle reste dans l’analyse."],
  ["Correction factuelle", "Elle peut produire une règle de vérification ou de recherche."],
  ["Préférence ponctuelle", "Elle reste en observation jusqu’à ce qu’elle se répète."],
  ["Instruction défaillante", "L’ancienne règle doit être modifiée ou supprimée."],
];

const BoucleProgressionIA = () => (
  <ResourceArticleLayout
    path={RESOURCE_PATH}
    title="La boucle de progression IA"
    seoTitle="Boucle de progression IA : transformer les corrections en règles | Synapse"
    description="Transformez chaque correction humaine en amélioration permanente grâce à une méthode de comparaison, de validation et de test des nouvelles règles."
    category="Méthodes IA"
    format="Méthode opérationnelle"
    outcome="Vous saurez conserver les bonnes versions, extraire les préférences durables et mesurer si vos agents progressent réellement."
    navItems={navItems}
    ctaTitle="Besoin de construire une boucle adaptée à votre processus ?"
    ctaText="Un diagnostic permet d’identifier les productions à comparer, les critères de validation et l’endroit où conserver les règles apprises."
  >
    <section id="principe" className="scroll-mt-28">
      <p className="text-lg leading-8 text-white/85">
        Une IA peut produire cent contenus sans progresser. La progression commence lorsque les écarts entre le brouillon et la version réellement validée deviennent des instructions réutilisables.
      </p>

      <div className="my-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-secondary/25 bg-secondary/5 p-6">
          <BrainCircuit className="h-6 w-6 text-secondary" />
          <h2 className="mt-4 text-xl font-bold">Mémoire</h2>
          <p className="mt-2 text-sm leading-6 text-white/80">Conserve une information sur le projet, la marque, une décision ou une contrainte.</p>
          <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-white/75">La marque vend des vêtements pour hommes de 25 à 40 ans.</div>
        </div>
        <div className="rounded-3xl border border-primary/25 bg-primary/5 p-6">
          <RefreshCw className="h-6 w-6 text-primary" />
          <h2 className="mt-4 text-xl font-bold">Progression</h2>
          <p className="mt-2 text-sm leading-6 text-white/80">Modifie directement la manière dont une tâche sera exécutée à l’avenir.</p>
          <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-white/75">Commencer chaque email par une situation concrète et limiter l’introduction à trois phrases.</div>
        </div>
      </div>

      <div className="rounded-2xl border-l-2 border-accent bg-accent/5 px-5 py-4">
        <p className="font-bold text-accent">Règle fondamentale</p>
        <p className="mt-2 leading-7 text-white/85">Une correction devient utile à long terme lorsqu’elle est transformée en instruction réutilisable.</p>
      </div>
    </section>

    <section id="organisation" className="scroll-mt-28 border-t border-white/15 py-16">
      <ResourceSectionHeading eyebrow="Fondations" title="Conserver trois états distincts">
        Le brouillon révèle le comportement actuel, la version finale matérialise le résultat attendu et le fichier de règles conserve les enseignements validés.
      </ResourceSectionHeading>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          [FileText, "Brouillon IA", "La première production reste intacte pour rendre la comparaison fiable."],
          [FileCheck2, "Version finale", "Le contenu réellement publié ou validé après les corrections humaines."],
          [BrainCircuit, "Fichier de règles", "Les instructions durables apprises à partir des écarts observés."],
        ].map(([Icon, title, text]) => {
          const ItemIcon = Icon as typeof FileText;
          return (
            <div key={title as string} className="rounded-2xl border border-white/15 bg-card/65 p-5">
              <ItemIcon className="h-5 w-5 text-primary" />
              <h3 className="mt-4 font-bold">{title as string}</h3>
              <p className="mt-2 text-sm leading-6 text-white/80">{text as string}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-3xl border border-white/15 bg-black/25 p-6 sm:p-8">
        <div className="flex items-center gap-3"><FolderTree className="h-5 w-5 text-accent" /><h3 className="text-xl font-bold">Organisation recommandée</h3></div>
        <pre className="mt-6 overflow-x-auto text-sm leading-7 text-white/80">{`boucle-progression-scripts/
├── 01-brouillons-ia/
├── 02-versions-finales/
├── 03-analyses/
├── 04-regles/
│   └── regles-editoriales.md
└── 05-tests/`}</pre>
        <p className="mt-5 text-sm leading-6 text-white/75">Utilisez exactement le même nom pour le brouillon et la version finale afin que chaque paire soit retrouvée sans ambiguïté.</p>
      </div>
    </section>

    <section id="boucle" className="scroll-mt-28 border-t border-white/15 py-16">
      <ResourceSectionHeading eyebrow="Workflow" title="Huit étapes pour apprendre sans dériver">
        La boucle sépare l’observation, la décision humaine et la mise à jour des instructions. Chaque étape produit une trace vérifiable.
      </ResourceSectionHeading>

      <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {loopSteps.map(([number, title, text, style]) => (
          <div key={number} className={`rounded-2xl border p-5 ${style}`}>
            <span className="text-xs font-bold">{number}</span>
            <h3 className="mt-3 text-lg font-bold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-white/75">{text}</p>
          </div>
        ))}
      </div>

      <h3 className="mt-10 text-xl font-bold">Classer chaque différence avant d’en faire une règle</h3>
      <div className="mt-5 space-y-3">
        {categories.map(([title, text], index) => (
          <div key={title} className="grid gap-2 rounded-2xl border border-white/15 bg-white/[0.035] p-4 sm:grid-cols-[32px_180px_1fr] sm:items-center">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">{index + 1}</span>
            <h4 className="font-bold">{title}</h4>
            <p className="text-sm leading-6 text-white/75">{text}</p>
          </div>
        ))}
      </div>

      <CopyPrompt title="Prompt de comparaison">{`Tu vas comparer deux versions du même contenu.

VERSION A : le brouillon initial produit par l’IA.
VERSION B : la version finale corrigée et validée.

Identifie les différences importantes selon : problème et accroche, promesse, principe central, structure, exemple, ton, rythme et précision factuelle.

Pour chaque différence, indique :
- ce qui a changé ;
- pourquoi la nouvelle version fonctionne mieux ;
- si la correction est générale ou propre au sujet ;
- la règle réutilisable qui pourrait en être tirée ;
- le risque de rendre cette règle trop rigide.

Ignore les changements purement cosmétiques.
Ne modifie encore aucun fichier d’instructions.
Présente d’abord les règles proposées pour validation humaine.`}</CopyPrompt>
    </section>

    <section id="regles" className="scroll-mt-28 border-t border-white/15 py-16">
      <ResourceSectionHeading eyebrow="Capitalisation" title="Le format d’une règle durable">
        Une bonne règle explique son contexte d’application, le comportement attendu, la manière de le vérifier et son origine.
      </ResourceSectionHeading>

      <div className="rounded-3xl border border-primary/25 bg-primary/5 p-6 sm:p-8">
        <pre className="overflow-x-auto text-sm leading-7 text-white/85">{`## Nom de la règle

Contexte :
Quand cette règle doit être utilisée.

Instruction :
Le comportement attendu.

Critère de validation :
La manière de vérifier que la règle est respectée.

Origine :
Date et contenus ayant permis d’identifier cette règle.`}</pre>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {[
          "La correction peut se reproduire.",
          "La règle reste compréhensible seule.",
          "Le comportement est observable.",
          "Le contexte d’application est précisé.",
          "La règle ne contredit pas l’existant.",
          "Une validation humaine précède la mise à jour.",
        ].map((item) => (
          <div key={item} className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/[0.03] p-4 text-sm text-white/80">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}
          </div>
        ))}
      </div>
    </section>

    <section id="tests" className="scroll-mt-28 border-t border-white/15 py-16">
      <ResourceSectionHeading eyebrow="Évaluation" title="Mesurer une amélioration réelle">
        Testez chaque nouvelle règle sur un sujet proche, un sujet différent et un cas où elle pourrait devenir excessive.
      </ResourceSectionHeading>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-secondary/25 bg-secondary/5 p-6">
          <TestTube2 className="h-6 w-6 text-secondary" />
          <h3 className="mt-4 text-xl font-bold">Tests de progression</h3>
          <p className="mt-2 text-sm leading-6 text-white/80">Vérifient que la règle améliore réellement le comportement ciblé.</p>
        </div>
        <div className="rounded-2xl border border-accent/25 bg-accent/5 p-6">
          <BarChart3 className="h-6 w-6 text-accent" />
          <h3 className="mt-4 text-xl font-bold">Tests de régression</h3>
          <p className="mt-2 text-sm leading-6 text-white/80">Vérifient qu’une amélioration locale ne dégrade pas les qualités déjà acquises.</p>
        </div>
      </div>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-white/15">
        <table className="w-full min-w-[620px] text-left text-sm">
          <thead className="bg-white/[0.06] text-white/85"><tr><th className="px-5 py-4">Indicateur</th><th className="px-5 py-4">À observer</th><th className="px-5 py-4">Signal positif</th></tr></thead>
          <tbody className="divide-y divide-white/10 text-white/75">
            <tr><td className="px-5 py-4 font-semibold text-white">Taux de conservation</td><td className="px-5 py-4">Part du brouillon conservée</td><td className="px-5 py-4">Progression sans baisse de qualité</td></tr>
            <tr><td className="px-5 py-4 font-semibold text-white">Corrections majeures</td><td className="px-5 py-4">Angle, structure, promesse</td><td className="px-5 py-4">Diminution régulière</td></tr>
            <tr><td className="px-5 py-4 font-semibold text-white">Erreurs récurrentes</td><td className="px-5 py-4">Défaut observé plusieurs fois</td><td className="px-5 py-4">Disparition après la règle</td></tr>
            <tr><td className="px-5 py-4 font-semibold text-white">Règles acceptées</td><td className="px-5 py-4">Propositions réellement validées</td><td className="px-5 py-4">Observations précises et utiles</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section id="installation" className="scroll-mt-28 border-t border-white/15 py-16">
      <ResourceSectionHeading eyebrow="Démarrage" title="Installer la boucle en quinze minutes" />
      <div className="space-y-3">
        {[
          "Choisir un seul processus répétitif.",
          "Créer les dossiers brouillons, versions finales, analyses, règles et tests.",
          "Enregistrer le prochain brouillon avant toute correction.",
          "Conserver la version réellement utilisée avec le même nom.",
          "Lancer le prompt de comparaison.",
          "Valider uniquement les enseignements réutilisables.",
          "Tester les règles sur trois nouveaux cas.",
          "Programmer un nettoyage mensuel du fichier.",
        ].map((step, index) => (
          <div key={step} className="flex items-center gap-4 rounded-xl border border-white/15 bg-white/[0.03] p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">{index + 1}</span>
            <p className="text-sm leading-6 text-white/85">{step}</p>
          </div>
        ))}
      </div>
    </section>
  </ResourceArticleLayout>
);

export default BoucleProgressionIA;
