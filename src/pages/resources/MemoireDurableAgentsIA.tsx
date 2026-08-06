import { ArrowDown, Blocks, BrainCircuit, Check, Code2, Database, ExternalLink, Files, Network, Search } from "lucide-react";
import { CopyPrompt } from "@/components/resources/CopyPrompt";
import { ResourceArticleLayout, ResourceSectionHeading } from "@/components/resources/ResourceArticleLayout";

const navItems = [
  { href: "#architecture", label: "Architecture" },
  { href: "#ressources", label: "Quatre types de mémoire" },
  { href: "#abstraction", label: "Niveaux d’abstraction" },
  { href: "#installation", label: "Installation" },
  { href: "#usage", label: "Quand l’utiliser" },
];

const memoryTypes = [
  [BrainCircuit, "Memories", "Préférences, faits, décisions et enseignements extraits des interactions."],
  [Blocks, "Skills", "Procédures réutilisables qui décrivent comment exécuter une tâche."],
  [Files, "Wiki", "Connaissances structurées à partir de documents et de contenus métier."],
  [Network, "Graphe de code", "Relations entre fichiers, symboles et dépendances d’un projet logiciel."],
];

const MemoireDurableAgentsIA = () => (
  <ResourceArticleLayout
    path="/ressources/memoire-durable-agents-ia"
    title="Donner une mémoire durable à ses agents IA"
    seoTitle="Mémoire durable pour agents IA avec TencentDB Agent Memory | Synapse"
    description="Comprenez comment TencentDB Agent Memory transforme conversations, documents et code en mémoire réutilisable entre les sessions et les agents IA."
    category="Infrastructure IA"
    format="Guide technique"
    outcome="Vous comprendrez les briques d’une mémoire externe, son installation locale et les cas où elle apporte une vraie continuité."
    navItems={navItems}
    ctaTitle="Un projet numérique à structurer ou à débloquer ?"
    ctaText="Nous pouvons analyser votre fonctionnement et déterminer la solution, l’accompagnement ou la technologie réellement utile."
  >
    <section id="architecture" className="scroll-mt-28">
      <ResourceSectionHeading eyebrow="Architecture" title="Séparer la mémoire du modèle">
        Un modèle ne conserve pas naturellement tout ce qu’il apprend entre deux sessions. Une couche de mémoire externe extrait, structure et retrouve les éléments utiles au moment de la prochaine tâche.
      </ResourceSectionHeading>
      <div className="rounded-3xl border border-white/15 bg-black/20 p-5 sm:p-8">
        <div className="grid gap-3 sm:grid-cols-3">
          {["Conversations", "Documents", "Code"].map((item) => <div key={item} className="rounded-xl border border-white/15 bg-white/[0.04] p-4 text-center text-sm font-semibold text-white/85">{item}</div>)}
        </div>
        <ArrowDown className="mx-auto my-4 h-6 w-6 text-primary" />
        <div className="rounded-2xl border border-primary/30 bg-primary/10 p-5 text-center"><Database className="mx-auto h-6 w-6 text-primary" /><p className="mt-3 font-bold">Extraction, structuration et indexation</p><p className="mt-2 text-sm text-white/75">TencentDB Agent Memory</p></div>
        <ArrowDown className="mx-auto my-4 h-6 w-6 text-primary" />
        <div className="grid gap-3 sm:grid-cols-4">
          {["Memories", "Skills", "Wiki", "Code graph"].map((item) => <div key={item} className="rounded-xl border border-secondary/25 bg-secondary/5 p-4 text-center text-sm font-semibold text-white/85">{item}</div>)}
        </div>
      </div>
    </section>

    <section id="ressources" className="scroll-mt-28 border-t border-white/15 py-16">
      <ResourceSectionHeading eyebrow="Modèle de données" title="Quatre formes de connaissance complémentaires" />
      <div className="grid gap-4 sm:grid-cols-2">
        {memoryTypes.map(([Icon, title, text]) => {
          const ItemIcon = Icon as typeof BrainCircuit;
          return <div key={title as string} className="rounded-2xl border border-white/15 bg-white/[0.035] p-5"><ItemIcon className="h-6 w-6 text-primary" /><h3 className="mt-4 text-lg font-bold">{title as string}</h3><p className="mt-2 text-sm leading-6 text-white/80">{text as string}</p></div>;
        })}
      </div>
      <div className="mt-8 rounded-2xl border-l-2 border-accent bg-accent/5 px-5 py-4"><p className="font-bold text-accent">Le point important</p><p className="mt-2 leading-7 text-white/85">La mémoire ne sert pas à stocker davantage. Elle sert à retrouver la bonne connaissance, sous la bonne forme, pour la tâche en cours.</p></div>
    </section>

    <section id="abstraction" className="scroll-mt-28 border-t border-white/15 py-16">
      <ResourceSectionHeading eyebrow="Recherche" title="Retrouver l’information au bon niveau d’abstraction">
        Une même source peut produire un fait précis, une synthèse intermédiaire et une connaissance générale. L’agent peut ainsi commencer large puis descendre vers le détail utile.
      </ResourceSectionHeading>
      <div className="space-y-3">
        <div className="rounded-2xl border border-primary/30 bg-primary/10 p-5 sm:mx-16"><div className="flex items-center gap-3"><Search className="h-5 w-5 text-primary" /><h3 className="font-bold">Vue générale</h3></div><p className="mt-2 text-sm text-white/80">Le concept ou la synthèse qui permet de s’orienter.</p></div>
        <div className="rounded-2xl border border-secondary/30 bg-secondary/10 p-5 sm:mx-8"><h3 className="font-bold">Contexte intermédiaire</h3><p className="mt-2 text-sm text-white/80">Les décisions, relations et sous-thèmes liés à la demande.</p></div>
        <div className="rounded-2xl border border-accent/30 bg-accent/10 p-5"><h3 className="font-bold">Preuve détaillée</h3><p className="mt-2 text-sm text-white/80">Le passage, le fichier ou le symbole précis à utiliser ou vérifier.</p></div>
      </div>
    </section>

    <section id="installation" className="scroll-mt-28 border-t border-white/15 py-16">
      <ResourceSectionHeading eyebrow="Démarrage" title="Lancer Agent Memory en local">
        Le projet est open source et fournit une installation Docker. Vérifiez les prérequis et la politique de données avant de l’utiliser avec des informations réelles.
      </ResourceSectionHeading>
      <CopyPrompt title="Installation rapide">{`git clone https://github.com/TencentCloud/TencentDB-Agent-Memory.git
cd TencentDB-Agent-Memory
docker compose up -d`}</CopyPrompt>
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          ["01", "Cloner", "Récupérer le dépôt officiel et consulter sa documentation."],
          ["02", "Démarrer", "Lancer les services nécessaires avec Docker Compose."],
          ["03", "Vérifier", "Ouvrir l’interface locale sur le port 8125 et tester avec des données non sensibles."],
        ].map(([number, title, text]) => <div key={number} className="rounded-2xl border border-white/15 bg-white/[0.035] p-5"><span className="text-xs font-bold text-primary">{number}</span><h3 className="mt-3 font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/80">{text}</p></div>)}
      </div>
      <a href="https://github.com/TencentCloud/TencentDB-Agent-Memory" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-primary/80">Consulter le dépôt officiel <ExternalLink className="h-4 w-4" /></a>
    </section>

    <section id="usage" className="scroll-mt-28 border-t border-white/15 py-16">
      <ResourceSectionHeading eyebrow="Cas d’usage" title="Quand une mémoire externe devient utile" />
      <div className="space-y-3">
        {[
          [Code2, "Agent de développement", "Retrouver l’architecture, les conventions et les relations entre composants."],
          [Files, "Assistant documentaire", "Transformer un corpus en wiki consultable avec des sources retrouvables."],
          [BrainCircuit, "Agent métier", "Conserver les préférences et décisions validées entre plusieurs sessions."],
          [Blocks, "Équipe multi-agents", "Partager des Skills et des connaissances sans dépendre d’un seul historique de conversation."],
        ].map(([Icon, title, text]) => {
          const ItemIcon = Icon as typeof Code2;
          return <div key={title as string} className="grid gap-3 rounded-2xl border border-white/15 bg-white/[0.03] p-5 sm:grid-cols-[40px_170px_1fr] sm:items-center"><ItemIcon className="h-5 w-5 text-primary" /><h3 className="font-bold">{title as string}</h3><p className="text-sm leading-6 text-white/80">{text as string}</p></div>;
        })}
      </div>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {["Définir une durée de conservation", "Exclure les secrets et données inutiles", "Permettre la suppression d’une mémoire", "Conserver la source de chaque information"].map((item) => <div key={item} className="flex items-center gap-3 rounded-xl border border-white/15 p-4 text-sm text-white/85"><Check className="h-4 w-4 shrink-0 text-primary" />{item}</div>)}
      </div>
    </section>
  </ResourceArticleLayout>
);

export default MemoireDurableAgentsIA;
