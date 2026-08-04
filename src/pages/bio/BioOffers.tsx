import { ArrowUpRight, Check } from "lucide-react";
import { BioShell } from "@/components/bio/BioShell";
import { bioConfig } from "@/config/bio";
import { useBioPage } from "@/hooks/use-bio-page";
import { trackBioEvent } from "@/lib/bioAnalytics";

export default function BioOffers() {
  useBioPage({
    title: `Offres | ${bioConfig.identity.name}`,
    description: "Audit IA, automatisations sur mesure et agents IA conçus autour de vos opérations.",
    canonicalPath: "/bio/offres",
    pageId: "bio-offers",
  });

  return (
    <BioShell>
      <section className="mx-auto max-w-3xl pb-8 pt-8 text-center sm:pt-14">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-300">Offres Synapse</p>
        <h1 className="mt-4 text-4xl font-bold leading-[1.06] tracking-[-0.05em] sm:text-6xl">
          Moins d’opérations manuelles. Plus de capacité pour avancer.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
          Chaque accompagnement part d’un problème métier mesurable et se termine par un système utilisable par vos équipes.
        </p>
      </section>

      <section className="mx-auto grid max-w-4xl gap-4 py-5 md:grid-cols-3" aria-label="Offres disponibles">
        {bioConfig.offers.map((offer) => (
          <article key={offer.id} className="flex flex-col rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 transition hover:border-violet-300/25 hover:bg-white/[0.065]">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-violet-300">{offer.eyebrow}</p>
            <h2 className="mt-4 text-2xl font-bold leading-tight tracking-[-0.035em]">{offer.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/55">{offer.problem}</p>
            <ul className="mt-6 space-y-3 text-sm text-white/75">
              {offer.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex items-start gap-2.5">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-400/15 text-violet-200">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  {deliverable}
                </li>
              ))}
            </ul>
            <a
              href={offer.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackBioEvent("booking_click", { offerId: offer.id, placement: "offers" })}
              className="mt-7 inline-flex min-h-12 items-center justify-between gap-3 rounded-2xl bg-white px-4 text-sm font-bold text-[#0a0a0d] transition hover:bg-violet-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 md:mt-auto md:translate-y-2"
            >
              {offer.ctaLabel}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </article>
        ))}
      </section>

      <section className="mx-auto mt-8 max-w-4xl rounded-[1.75rem] border border-violet-300/20 bg-gradient-to-r from-violet-500/15 to-blue-500/10 p-7 text-center sm:p-10">
        <h2 className="text-2xl font-bold tracking-[-0.035em] sm:text-3xl">Le bon point de départ tient en 30 minutes.</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/55">Présentez votre processus le plus lent. Vous repartirez avec une première lecture de son potentiel d’automatisation.</p>
        <a
          href="https://koalendar.com/e/meet-with-synapse"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackBioEvent("booking_click", { placement: "offers-footer" })}
          className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-2xl bg-white px-5 text-sm font-bold text-[#0a0a0d] transition hover:bg-violet-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
        >
          Réserver un appel
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </section>
    </BioShell>
  );
}

