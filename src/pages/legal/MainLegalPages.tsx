import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { PageBreadcrumb } from "@/components/navigation/PageBreadcrumb";
import { Footer } from "@/components/sections/Footer";
import { bioConfig } from "@/config/bio";
import { usePageSeo } from "@/hooks/use-page-seo";
import type { ReactNode } from "react";

type LegalPageShellProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

const LegalPageShell = ({ eyebrow, title, children }: LegalPageShellProps) => (
  <div className="relative min-h-screen overflow-x-hidden bg-background">
    <NeuralBackground />
    <Header />
    <main className="relative z-10 px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-36">
      <div className="container">
        <article className="mx-auto max-w-3xl text-[15px] leading-7 text-foreground/85 [&_h2]:mb-2 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_li]:mb-2 [&_p]:mb-4 [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-5">
          <PageBreadcrumb items={[{ label: title }]} className="mb-10" />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
          <h1 className="mb-12 mt-4 text-4xl font-bold leading-tight tracking-[-0.05em] text-foreground sm:text-5xl">{title}</h1>
          {children}
        </article>
      </div>
    </main>
    <Footer />
  </div>
);

export const LegalNotices = () => {
  usePageSeo({
    title: "Mentions légales | Synapse",
    description: "Mentions légales du site Synapse.",
    canonicalPath: "/mentions-legales",
    robots: "noindex,follow",
  });

  return (
    <LegalPageShell eyebrow="Informations générales" title="Mentions légales">
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
    </LegalPageShell>
  );
};

export const PrivacyPolicy = () => {
  usePageSeo({
    title: "Politique de confidentialité | Synapse",
    description: "Informations sur la collecte et l’utilisation des données sur le site Synapse.",
    canonicalPath: "/politique-de-confidentialite",
    robots: "noindex,follow",
  });

  return (
    <LegalPageShell eyebrow="Vos données" title="Politique de confidentialité">
      <p>Cette politique décrit les données traitées lorsque vous consultez le site Synapse ou vous inscrivez à sa newsletter.</p>
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
    </LegalPageShell>
  );
};
