import { ArrowUpRight, CheckCircle2, Youtube } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { BioShell } from "@/components/bio/BioShell";
import { bioConfig } from "@/config/bio";
import { useBioPage } from "@/hooks/use-bio-page";
import { trackBioEvent } from "@/lib/bioAnalytics";

export default function BioThanks() {
  const location = useLocation();
  const subscribed = Boolean((location.state as { subscribed?: boolean } | null)?.subscribed);
  const youtube = bioConfig.primaryLinks.find((link) => link.id === "youtube" && link.enabled && link.href);

  useBioPage({
    title: `Inscription confirmée | ${bioConfig.identity.name}`,
    description: "Merci pour votre inscription à la note Synapse.",
    canonicalPath: "/bio/merci",
    pageId: "bio-thanks",
  });

  return (
    <BioShell compact>
      <section className="flex min-h-[65vh] flex-col items-center justify-center py-12 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-[1.7rem] border border-emerald-300/20 bg-emerald-300/10 text-emerald-300">
          <CheckCircle2 className="h-10 w-10" aria-hidden="true" />
        </div>
        <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-violet-300">{subscribed ? "Inscription enregistrée" : "Bienvenue"}</p>
        <h1 className="mt-4 text-4xl font-bold tracking-[-0.05em] sm:text-5xl">Merci, la suite arrive par email.</h1>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/55">
          {bioConfig.newsletter.doubleOptIn
            ? "Ouvrez l’email de confirmation et validez votre inscription. Vous recevrez ensuite des cas d’usage concrets et des idées d’automatisation directement applicables."
            : "Vous recevrez bientôt la prochaine note Synapse avec des cas d’usage concrets et des idées d’automatisation directement applicables."}
        </p>

        <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
          <a
            href="https://koalendar.com/e/meet-with-synapse"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackBioEvent("booking_click", { placement: "thank-you" })}
            className="inline-flex min-h-[3.25rem] flex-1 items-center justify-center gap-2 rounded-2xl bg-white px-5 text-sm font-bold text-[#0a0a0d] transition hover:bg-violet-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          >
            Réserver un appel
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          {youtube ? (
            <a
              href={youtube.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackBioEvent("youtube_click", { placement: "thank-you" })}
              className="inline-flex min-h-[3.25rem] flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-5 text-sm font-bold transition hover:bg-white/[0.09] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              <Youtube className="h-4 w-4" aria-hidden="true" />
              Voir YouTube
            </a>
          ) : (
            <Link className="inline-flex min-h-[3.25rem] flex-1 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] px-5 text-sm font-bold transition hover:bg-white/[0.09]" to="/bio/offres">
              Voir les offres
            </Link>
          )}
        </div>
      </section>
    </BioShell>
  );
}
