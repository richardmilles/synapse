import { ArrowRight, ChevronRight, Mail, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { BioLinkIcon } from "@/components/bio/BioLinkIcon";
import { BioShell } from "@/components/bio/BioShell";
import { NewsletterForm } from "@/components/bio/NewsletterForm";
import { bioConfig } from "@/config/bio";
import { useBioPage } from "@/hooks/use-bio-page";
import { trackBioEvent } from "@/lib/bioAnalytics";

export default function BioHome() {
  useBioPage({
    title: bioConfig.seo.title,
    description: bioConfig.seo.description,
    canonicalPath: "/bio",
    pageId: "bio-home",
  });

  const enabledPrimaryLinks = bioConfig.primaryLinks.filter((link) => link.enabled && link.href);
  const enabledSocialLinks = bioConfig.socialLinks.filter((link) => link.enabled && link.href);

  return (
    <BioShell compact>
      <section className="pb-7 pt-5 text-center sm:pt-8">
        <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-400/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.17em] text-violet-200">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_12px_rgba(196,181,253,0.9)]" aria-hidden="true" />
          {bioConfig.identity.eyebrow}
        </div>
        <h1 className="text-3xl font-bold tracking-[-0.04em] sm:text-4xl">{bioConfig.identity.handle}</h1>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-white/65">
          {bioConfig.identity.positioning}
        </p>

        {enabledSocialLinks.length > 0 && (
          <div className="mt-5 flex items-center justify-center gap-2" aria-label="Réseaux sociaux">
            {enabledSocialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                onClick={() => trackBioEvent("social_click", { linkId: link.id })}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/65 transition hover:border-violet-300/30 hover:bg-violet-400/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                <BioLinkIcon icon={link.icon} className="h-[1.15rem] w-[1.15rem]" />
              </a>
            ))}
          </div>
        )}
      </section>

      <section aria-label="Liens principaux" className="space-y-3">
        {enabledPrimaryLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            onClick={() => trackBioEvent("link_click", { linkId: link.id, destination: link.href })}
            className={`bio-link group flex min-h-[4.5rem] items-center gap-3 rounded-2xl border px-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${
              link.featured
                ? "border-violet-300/35 bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-[0_18px_55px_-25px_rgba(139,92,246,0.9)] hover:brightness-110"
                : "border-white/10 bg-white/[0.055] hover:border-white/20 hover:bg-white/[0.085]"
            }`}
          >
            <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${link.featured ? "bg-black/20" : "bg-white/[0.07] text-violet-300"}`}>
              <BioLinkIcon icon={link.icon} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[15px] font-bold">{link.label}</span>
              {link.description && <span className={`mt-0.5 block text-xs leading-snug ${link.featured ? "text-white/75" : "text-white/45"}`}>{link.description}</span>}
            </span>
            <ChevronRight className="h-5 w-5 shrink-0 opacity-55 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        ))}
      </section>

      <section className="mt-10 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 sm:p-7">
        <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-300/10 text-amber-300">
          <Sparkles className="h-5 w-5" aria-hidden="true" />
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-300">{bioConfig.presentation.eyebrow}</p>
        <h2 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.035em]">{bioConfig.presentation.title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-white/55">{bioConfig.presentation.body}</p>
        <Link
          to={bioConfig.presentation.ctaHref}
          onClick={() => trackBioEvent("offers_click", { placement: "bio-home" })}
          className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-4 text-sm font-semibold transition hover:border-violet-300/40 hover:bg-violet-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
        >
          {bioConfig.presentation.ctaLabel}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </section>

      <section id="newsletter" className="mt-5 rounded-[1.75rem] border border-violet-300/20 bg-gradient-to-br from-violet-500/15 via-white/[0.045] to-blue-500/10 p-6 sm:p-7">
        <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-400/15 text-violet-200">
          <Mail className="h-5 w-5" aria-hidden="true" />
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-300">{bioConfig.newsletter.eyebrow}</p>
        <h2 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.035em]">{bioConfig.newsletter.title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-white/55">{bioConfig.newsletter.promise}</p>
        <NewsletterForm />
      </section>
    </BioShell>
  );
}
