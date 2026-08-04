import { BioShell } from "@/components/bio/BioShell";
import { bioConfig } from "@/config/bio";
import { useBioPage } from "@/hooks/use-bio-page";

export default function BioLegal() {
  useBioPage({
    title: `Mentions légales | ${bioConfig.identity.name}`,
    description: "Mentions légales du site Synapse.",
    canonicalPath: "/bio/mentions-legales",
    pageId: "bio-legal",
  });

  return (
    <BioShell compact>
      <article className="bio-prose py-8 sm:py-14">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">Informations générales</p>
        <h1>Mentions légales</h1>
        <h2>Présentation du site</h2>
        <p>Ce site présente des contenus, ressources et services autour de l’intelligence artificielle, de l’automatisation et de l’accompagnement des entreprises.</p>
        <p>Les coordonnées de l’éditeur et le contact juridique seront complétés avant la mise en production.</p>
        <h2>Hébergement</h2>
        <p>{bioConfig.legal.hostingProvider}</p>
        <h2>Propriété intellectuelle</h2>
        <p>Les textes, éléments graphiques, marques, logos et contenus présents sur ce site sont protégés. Leur reproduction, diffusion ou utilisation est soumise à l’autorisation préalable de leur titulaire.</p>
        <h2>Responsabilité</h2>
        <p>Les informations publiées sont fournies à titre général et peuvent évoluer. L’utilisation des contenus et des liens proposés relève de la responsabilité de chaque visiteur.</p>
        <h2>Liens externes</h2>
        <p>Le site peut contenir des liens vers des plateformes ou services externes. Leurs contenus, conditions d’utilisation et politiques de confidentialité sont gérés par leurs éditeurs respectifs.</p>
      </article>
    </BioShell>
  );
}
