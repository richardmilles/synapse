import { Check, Files, Layers3, Search, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { CopyPrompt } from "@/components/resources/CopyPrompt";
import { ResourceArticleLayout, ResourceSectionHeading } from "@/components/resources/ResourceArticleLayout";

const navItems = [
  { href: "#diagnostic", label: "Le problème" },
  { href: "#couches", label: "Les quatre couches" },
  { href: "#nettoyage", label: "Nettoyer les règles" },
  { href: "#chargement", label: "Charger au bon moment" },
  { href: "#audit", label: "Audit CONTEXTE" },
  { href: "#structure", label: "Structure recommandée" },
];

const layers = [
  { number: "01", title: "Règles permanentes", text: "Principes stables qui s’appliquent à presque toutes les demandes.", tone: "border-primary/30 bg-primary/10", width: "sm:mx-0" },
  { number: "02", title: "Contexte du projet", text: "Objectif, cible, contraintes, vocabulaire et décisions propres au projet.", tone: "border-secondary/30 bg-secondary/10", width: "sm:mx-5" },
  { number: "03", title: "Skill de la tâche", text: "Méthode précise à suivre pour réaliser une famille de tâches.", tone: "border-accent/30 bg-accent/10", width: "sm:mx-10" },
  { number: "04", title: "Références et exemples", text: "Sources, modèles et documents chargés seulement lorsqu’ils sont utiles.", tone: "border-white/20 bg-white/[0.06]", width: "sm:mx-16" },
];

const auditQuestions = [
  "Cette règle change-t-elle réellement le résultat ?",
  "Est-elle compréhensible sans connaître son historique ?",
  "Décrit-elle un comportement observable ?",
  "S’applique-t-elle partout ou à une seule tâche ?",
  "Fait-elle doublon avec une règle existante ?",
  "Contredit-elle une autre instruction ?",
  "Peut-elle être regroupée avec plusieurs micro-règles ?",
  "Le niveau de détail est-il proportionné à son importance ?",
  "Est-elle chargée au moment où elle devient utile ?",
  "Un exemple serait-il plus précis qu’une explication ?",
];

const MethodeContexte = () => (
  <ResourceArticleLayout
    path="/ressources/methode-contexte-claude"
    title="La méthode CONTEXTE"
    seoTitle="Méthode CONTEXTE : mieux organiser les instructions de Claude | Synapse"
    description="Une méthode d’audit pour nettoyer les instructions, résoudre les contradictions et charger le bon contexte au bon moment dans Claude."
    category="Productivité IA"
    format="Guide d’audit"
    outcome="Vous pourrez réduire le bruit dans vos instructions, séparer les règles par niveau et rendre les réponses plus fiables."
    navItems={navItems}
    ctaTitle="Votre environnement IA est devenu difficile à maintenir ?"
    ctaText="Nous pouvons cartographier vos instructions, éliminer les contradictions et reconstruire une architecture de contexte adaptée à vos usages."
  >
    <section id="diagnostic" className="scroll-mt-28">
      <ResourceSectionHeading eyebrow="Diagnostic" title="Plus de contexte ne signifie pas plus de précision">
        Une instruction utile peut perdre son effet lorsqu’elle est noyée dans des règles vagues, répétées ou contradictoires. Le bon système transmet juste ce qu’il faut, au moment où l’IA doit décider.
      </ResourceSectionHeading>

      <div className="grid gap-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        <div className="rounded-2xl border border-red-400/25 bg-red-400/5 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-red-300">Contexte saturé</p>
          <div className="mt-4 space-y-2">
            {["Sois clair", "Sois professionnel", "Évite les réponses trop longues", "Reste concis", "Donne assez de détails"].map((item) => (
              <div key={item} className="rounded-lg bg-white/[0.05] px-3 py-2 text-sm text-white/65">{item}</div>
            ))}
          </div>
        </div>
        <SlidersHorizontal className="mx-auto h-6 w-6 rotate-90 text-primary sm:rotate-0" />
        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">Instruction discriminante</p>
          <p className="mt-4 text-sm leading-7 text-white/85">Présente la recommandation en premier, puis les deux arguments qui la justifient. Limite la réponse à 250 mots sauf demande contraire.</p>
          <div className="mt-4 flex items-center gap-2 text-sm text-primary"><Check className="h-4 w-4" /> Résultat observable</div>
        </div>
      </div>
    </section>

    <section id="couches" className="scroll-mt-28 border-t border-white/15 py-16">
      <ResourceSectionHeading eyebrow="Architecture" title="Organiser le contexte en quatre couches">
        Chaque information possède une durée de vie et un périmètre. Les séparer évite de charger des règles éditoriales pendant une tâche technique, ou des références obsolètes dans chaque conversation.
      </ResourceSectionHeading>
      <div className="space-y-3">
        {layers.map((layer) => (
          <div key={layer.number} className={`grid gap-3 rounded-2xl border p-5 sm:grid-cols-[48px_190px_1fr] sm:items-center ${layer.tone} ${layer.width}`}>
            <span className="text-sm font-bold text-white/65">{layer.number}</span>
            <h3 className="font-bold text-white">{layer.title}</h3>
            <p className="text-sm leading-6 text-white/80">{layer.text}</p>
          </div>
        ))}
      </div>
    </section>

    <section id="nettoyage" className="scroll-mt-28 border-t border-white/15 py-16">
      <ResourceSectionHeading eyebrow="Nettoyage" title="Transformer un empilement de règles en système lisible" />
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          [Search, "Supprimer l’évidence", "Retirez les règles que le modèle suit déjà ou qui ne changent aucune décision."],
          [Files, "Regrouper les micro-règles", "Remplacez plusieurs contraintes proches par un résultat attendu clairement formulé."],
          [ShieldCheck, "Résoudre les contradictions", "Choisissez une règle principale et précisez explicitement ses exceptions."],
          [Check, "Rendre le résultat vérifiable", "Ajoutez une limite, une structure ou un critère que l’on peut contrôler."],
        ].map(([Icon, title, text]) => {
          const ItemIcon = Icon as typeof Search;
          return (
            <div key={title as string} className="rounded-2xl border border-white/15 bg-white/[0.035] p-5">
              <ItemIcon className="h-5 w-5 text-primary" />
              <h3 className="mt-4 font-bold">{title as string}</h3>
              <p className="mt-2 text-sm leading-6 text-white/80">{text as string}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-8 overflow-hidden rounded-2xl border border-white/15">
        <div className="grid sm:grid-cols-2">
          <div className="border-b border-white/15 p-5 sm:border-b-0 sm:border-r">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/55">Avant</p>
            <p className="mt-3 text-sm leading-7 text-white/70">Écris des phrases courtes. Évite les longues introductions. Va droit au but. Ne répète pas la demande. Donne la réponse rapidement.</p>
          </div>
          <div className="bg-primary/5 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">Après</p>
            <p className="mt-3 text-sm leading-7 text-white/85">Commence par la réponse ou la recommandation. Supprime toute introduction qui ne modifie pas la compréhension.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="chargement" className="scroll-mt-28 border-t border-white/15 py-16">
      <ResourceSectionHeading eyebrow="Orchestration" title="Charger chaque couche au moment utile" />
      <div className="overflow-x-auto rounded-2xl border border-white/15">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-white/[0.06] text-white"><tr><th className="px-5 py-4">Information</th><th className="px-5 py-4">Quand la charger</th><th className="px-5 py-4">Où la conserver</th></tr></thead>
          <tbody className="divide-y divide-white/10 text-white/80">
            <tr><td className="px-5 py-4 font-semibold text-white">Règles universelles</td><td className="px-5 py-4">À chaque session</td><td className="px-5 py-4">CLAUDE.md racine</td></tr>
            <tr><td className="px-5 py-4 font-semibold text-white">Contexte métier</td><td className="px-5 py-4">À l’ouverture du projet</td><td className="px-5 py-4">Dossier du projet</td></tr>
            <tr><td className="px-5 py-4 font-semibold text-white">Procédure spécialisée</td><td className="px-5 py-4">À l’appel de la tâche</td><td className="px-5 py-4">Skill dédié</td></tr>
            <tr><td className="px-5 py-4 font-semibold text-white">Exemple ou source</td><td className="px-5 py-4">Au moment de la vérification</td><td className="px-5 py-4">Références séparées</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section id="audit" className="scroll-mt-28 border-t border-white/15 py-16">
      <ResourceSectionHeading eyebrow="Contrôle" title="Les dix questions de l’audit CONTEXTE" />
      <div className="grid gap-3 sm:grid-cols-2">
        {auditQuestions.map((question, index) => (
          <div key={question} className="flex gap-3 rounded-xl border border-white/15 bg-white/[0.03] p-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">{index + 1}</span>
            <p className="text-sm leading-6 text-white/85">{question}</p>
          </div>
        ))}
      </div>
      <CopyPrompt title="Prompt d’audit CONTEXTE">{`Analyse les instructions ci-dessous comme un système de contexte.

1. Identifie les règles vagues, évidentes, redondantes ou contradictoires.
2. Classe chaque règle dans l’une des quatre couches : permanente, projet, tâche, référence.
3. Regroupe les micro-règles qui visent le même résultat.
4. Reformule chaque règle conservée sous une forme observable et vérifiable.
5. Signale les contradictions et propose une règle principale avec ses exceptions.
6. Indique quand chaque information doit être chargée.
7. Propose une version finale plus courte sans perdre les contraintes utiles.

Ne supprime aucune règle importante sans expliquer la décision.`}</CopyPrompt>
    </section>

    <section id="structure" className="scroll-mt-28 border-t border-white/15 py-16">
      <ResourceSectionHeading eyebrow="Mise en place" title="Une structure simple à faire évoluer" />
      <div className="rounded-3xl border border-white/15 bg-black/25 p-6 sm:p-8">
        <div className="flex items-center gap-3"><Layers3 className="h-5 w-5 text-accent" /><h3 className="text-xl font-bold">Arborescence recommandée</h3></div>
        <pre className="mt-6 overflow-x-auto text-sm leading-7 text-white/80">{`environnement-ia/
├── CLAUDE.md
├── projets/
│   └── nom-du-projet/
│       ├── contexte.md
│       └── decisions.md
├── skills/
│   └── nom-de-la-tache.md
└── references/
    ├── exemples/
    └── sources/`}</pre>
      </div>
    </section>
  </ResourceArticleLayout>
);

export default MethodeContexte;
