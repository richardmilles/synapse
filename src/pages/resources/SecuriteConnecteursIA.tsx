import { AlertTriangle, Check, Download, FileKey2, LockKeyhole, Mail, ShieldCheck } from "lucide-react";
import { ResourceArticleLayout, ResourceSectionHeading } from "@/components/resources/ResourceArticleLayout";

const navItems = [
  { href: "#niveaux", label: "Niveaux d’autorisation" },
  { href: "#decision", label: "Décider en quatre questions" },
  { href: "#matrices", label: "Matrices par outil" },
  { href: "#controle", label: "Contrôle humain" },
  { href: "#checklist", label: "Checklist finale" },
];

const permissionRows = {
  drive: [
    ["Lire un fichier partagé explicitement", "Autoriser", "Périmètre limité et intention claire"],
    ["Créer un brouillon dans un dossier dédié", "Demander", "Écriture réversible mais visible"],
    ["Supprimer ou déplacer un ensemble de fichiers", "Bloquer", "Impact large ou difficile à annuler"],
  ],
  gmail: [
    ["Rechercher et résumer des messages", "Autoriser", "Lecture ciblée sans communication externe"],
    ["Préparer un brouillon de réponse", "Demander", "Le contenu doit être relu avant envoi"],
    ["Envoyer, transférer ou supprimer un email", "Bloquer", "Action externe ou perte de données"],
  ],
  notion: [
    ["Lire une page connue", "Autoriser", "Consultation d’une source précise"],
    ["Créer une page dans une base dédiée", "Demander", "Modification structurante de l’espace"],
    ["Modifier en masse une base ou ses permissions", "Bloquer", "Impact transversal sur le système"],
  ],
};

const PermissionTable = ({ rows }: { rows: string[][] }) => (
  <div className="overflow-x-auto rounded-2xl border border-white/15">
    <table className="w-full min-w-[670px] text-left text-sm">
      <thead className="bg-white/[0.06] text-white"><tr><th className="px-5 py-4">Action</th><th className="px-5 py-4">Niveau</th><th className="px-5 py-4">Pourquoi</th></tr></thead>
      <tbody className="divide-y divide-white/10 text-white/80">
        {rows.map(([action, level, reason]) => (
          <tr key={action}>
            <td className="px-5 py-4 font-semibold text-white">{action}</td>
            <td className="px-5 py-4"><span className={`rounded-full px-2.5 py-1 text-xs font-bold ${level === "Autoriser" ? "bg-emerald-400/10 text-emerald-300" : level === "Demander" ? "bg-amber-400/10 text-amber-300" : "bg-red-400/10 text-red-300"}`}>{level}</span></td>
            <td className="px-5 py-4">{reason}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SecuriteConnecteursIA = () => (
  <ResourceArticleLayout
    path="/ressources/securite-connecteurs-ia"
    title="Checklist de sécurité des connecteurs IA"
    seoTitle="Sécurité des connecteurs IA : checklist Gmail, Drive et Notion | Synapse"
    description="Définissez ce qu’un agent IA peut lire, préparer ou modifier dans Gmail, Google Drive et Notion grâce à une matrice de permissions claire."
    category="Sécurité IA"
    format="Checklist pratique"
    outcome="Vous disposerez d’une méthode simple pour autoriser les actions sûres, demander une confirmation ou bloquer les opérations sensibles."
    navItems={navItems}
    ctaTitle="Vous cherchez à faire évoluer votre activité ?"
    ctaText="Réservez un échange pour faire le point sur vos enjeux et identifier une première piste d’action réaliste."
  >
    <section id="niveaux" className="scroll-mt-28">
      <ResourceSectionHeading eyebrow="Principe" title="Trois niveaux suffisent pour décider">
        Une permission ne doit pas dépendre uniquement de l’outil. Elle dépend de l’action, de son périmètre, de sa réversibilité et de son impact externe.
      </ResourceSectionHeading>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-5"><ShieldCheck className="h-6 w-6 text-emerald-300" /><h3 className="mt-4 font-bold">Toujours autoriser</h3><p className="mt-2 text-sm leading-6 text-white/80">Lecture ciblée, recherche et analyse sans modification ni envoi.</p></div>
        <div className="rounded-2xl border border-amber-400/30 bg-amber-400/5 p-5"><AlertTriangle className="h-6 w-6 text-amber-300" /><h3 className="mt-4 font-bold">Demander à chaque fois</h3><p className="mt-2 text-sm leading-6 text-white/80">Création ou modification limitée qui reste réversible et contrôlable.</p></div>
        <div className="rounded-2xl border border-red-400/30 bg-red-400/5 p-5"><LockKeyhole className="h-6 w-6 text-red-300" /><h3 className="mt-4 font-bold">Toujours bloquer</h3><p className="mt-2 text-sm leading-6 text-white/80">Suppression, envoi externe, accès massif ou changement de permissions.</p></div>
      </div>
    </section>

    <section id="decision" className="scroll-mt-28 border-t border-white/15 py-16">
      <ResourceSectionHeading eyebrow="Décision" title="Évaluer chaque action avec quatre questions" />
      <div className="relative grid gap-3 sm:grid-cols-2">
        {[
          ["01", "L’action écrit-elle ou communique-t-elle ?", "Une lecture ciblée est généralement moins risquée qu’une action qui modifie ou envoie."],
          ["02", "Peut-on revenir en arrière ?", "Un brouillon est récupérable. Un email envoyé ou un fichier supprimé ne l’est pas toujours."],
          ["03", "Quel est le périmètre touché ?", "Une page précise et un espace entier ne doivent jamais recevoir la même autorisation."],
          ["04", "Qui subit les conséquences ?", "Plus l’action touche des clients, collègues ou partenaires, plus le contrôle humain est important."],
        ].map(([number, title, text]) => (
          <div key={number} className="rounded-2xl border border-primary/20 bg-primary/5 p-5"><span className="text-xs font-bold text-primary">{number}</span><h3 className="mt-3 font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/80">{text}</p></div>
        ))}
      </div>
    </section>

    <section id="matrices" className="scroll-mt-28 border-t border-white/15 py-16">
      <ResourceSectionHeading eyebrow="Applications" title="Matrices de départ par connecteur">
        Adaptez ces niveaux à vos propres processus. Une autorisation valable dans un dossier de test ne l’est pas automatiquement dans un espace de production.
      </ResourceSectionHeading>
      <div className="space-y-10">
        <div><div className="mb-4 flex items-center gap-3"><FileKey2 className="h-5 w-5 text-primary" /><h3 className="text-xl font-bold">Google Drive</h3></div><PermissionTable rows={permissionRows.drive} /></div>
        <div><div className="mb-4 flex items-center gap-3"><Mail className="h-5 w-5 text-secondary" /><h3 className="text-xl font-bold">Gmail</h3></div><PermissionTable rows={permissionRows.gmail} /></div>
        <div><div className="mb-4 flex items-center gap-3"><FileKey2 className="h-5 w-5 text-accent" /><h3 className="text-xl font-bold">Notion</h3></div><PermissionTable rows={permissionRows.notion} /></div>
      </div>
    </section>

    <section id="controle" className="scroll-mt-28 border-t border-white/15 py-16">
      <ResourceSectionHeading eyebrow="Garde-fous" title="Les actions qui restent sous contrôle humain" />
      <div className="rounded-3xl border border-amber-400/25 bg-amber-400/5 p-6 sm:p-8">
        <div className="grid gap-4 sm:grid-cols-2">
          {["Envoyer un message à un tiers", "Supprimer ou déplacer des données", "Modifier les droits d’accès", "Publier un contenu", "Agir sur un grand nombre d’éléments", "Traiter des données sensibles"].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/15 p-4 text-sm text-white/85"><AlertTriangle className="h-4 w-4 shrink-0 text-amber-300" />{item}</div>
          ))}
        </div>
      </div>
    </section>

    <section id="checklist" className="scroll-mt-28 border-t border-white/15 py-16">
      <ResourceSectionHeading eyebrow="Avant activation" title="Checklist finale du connecteur" />
      <div className="space-y-3">
        {["Le compte connecté est dédié ou possède le minimum de droits.", "Les dossiers, bases ou libellés accessibles sont explicitement listés.", "Les actions d’écriture demandent une confirmation.", "Les envois et suppressions sont bloqués par défaut.", "Les actions sont enregistrées dans un journal consultable.", "Une procédure de révocation immédiate est connue.", "Un test a été effectué avec des données non sensibles.", "Le propriétaire métier a validé la matrice de permissions."].map((item) => (
          <div key={item} className="flex gap-3 rounded-xl border border-white/15 bg-white/[0.03] p-4"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><p className="text-sm leading-6 text-white/85">{item}</p></div>
        ))}
      </div>
      <a href="/ressources/checklist-securite-connecteurs-ia.md" download className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 text-sm font-bold text-primary transition hover:bg-primary/15"><Download className="h-4 w-4" />Télécharger la checklist</a>
    </section>
  </ResourceArticleLayout>
);

export default SecuriteConnecteursIA;
