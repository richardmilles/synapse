import { BioShell } from "@/components/bio/BioShell";
import { bioConfig } from "@/config/bio";
import { useBioPage } from "@/hooks/use-bio-page";

export default function BioPrivacy() {
  useBioPage({
    title: `Politique de confidentialité | ${bioConfig.identity.name}`,
    description: "Informations sur la collecte et l’utilisation des données par Synapse.",
    canonicalPath: "/bio/confidentialite",
    pageId: "bio-privacy",
  });

  return (
    <BioShell compact>
      <article className="bio-prose py-8 sm:py-14">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">Vos données</p>
        <h1>Politique de confidentialité</h1>
        <p>Cette politique décrit les données traitées lorsque vous consultez la page lien en bio de Synapse ou vous inscrivez à sa newsletter.</p>
        <h2>Données collectées</h2>
        <ul>
          <li>Adresse email et preuve du consentement lors de l’inscription.</li>
          <li>Source de visite, campagne, page consultée et clics effectués.</li>
          <li>Identifiant de session aléatoire, renouvelé avec la session du navigateur.</li>
        </ul>
        <h2>Finalités et bases légales</h2>
        <p>L’adresse email est utilisée pour envoyer les contenus demandés, sur la base de votre consentement. Les mesures d’audience servent à comprendre la performance des contenus et des parcours.</p>
        <h2>Durée de conservation</h2>
        <p>Les données liées à la newsletter sont conservées jusqu’au retrait du consentement, puis supprimées ou anonymisées selon les obligations applicables. La durée maximale prévue dans la configuration est de {bioConfig.legal.retentionMonths} mois après la dernière interaction.</p>
        <h2>Destinataires et prestataires</h2>
        <p>Les données sont accessibles à Synapse et aux prestataires strictement nécessaires à l’hébergement, à la base de données, à l’envoi des emails et à la mesure d’audience. Le site est hébergé par Vercel.</p>
        <h2>Vos droits</h2>
        <p>Vous pouvez demander l’accès, la rectification, l’effacement ou la portabilité de vos données, ainsi que retirer votre consentement. L’adresse de contact dédiée sera complétée avant la mise en production.</p>
        <h2>Désinscription</h2>
        <p>Chaque email contient un lien de désinscription. Son utilisation arrête les futurs envois et enregistre le retrait du consentement.</p>
      </article>
    </BioShell>
  );
}
