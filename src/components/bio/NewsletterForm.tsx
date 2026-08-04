import { FormEvent, useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { bioConfig } from "@/config/bio";
import { getBioAttribution, trackBioEvent } from "@/lib/bioAnalytics";

type FormState = "idle" | "loading" | "error";

export const NewsletterForm = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState("loading");
    setError("");

    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") || "").trim();
    const consent = form.get("consent") === "on";
    const company = String(form.get("company") || "");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          consent,
          company,
          doubleOptIn: bioConfig.newsletter.doubleOptIn,
          attribution: getBioAttribution(),
        }),
      });

      const payload = (await response.json().catch(() => ({}))) as { message?: string };
      if (!response.ok) throw new Error(payload.message || "L’inscription n’a pas pu être enregistrée.");

      trackBioEvent("newsletter_signup", { doubleOptIn: bioConfig.newsletter.doubleOptIn });
      navigate("/bio/merci", { state: { subscribed: true } });
    } catch (caught) {
      setState("error");
      setError(caught instanceof Error ? caught.message : "Une erreur est survenue. Réessayez dans un instant.");
    }
  };

  return (
    <form onSubmit={submit} className="mt-6 space-y-4" noValidate>
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company">Entreprise</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>
      <label htmlFor="bio-email" className="sr-only">Adresse email</label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id="bio-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder="vous@entreprise.fr"
          className="min-h-14 min-w-0 flex-1 rounded-2xl border border-white/15 bg-black/25 px-4 text-base text-white outline-none transition placeholder:text-white/35 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/25"
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white px-5 text-sm font-bold text-[#0a0a0d] transition hover:bg-violet-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 disabled:cursor-wait disabled:opacity-70"
        >
          {state === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
          {bioConfig.newsletter.submitLabel}
          {state !== "loading" && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
        </button>
      </div>

      <label className="flex cursor-pointer items-start gap-3 text-left text-xs leading-relaxed text-white/55">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/30 bg-black accent-violet-500"
        />
        <span>{bioConfig.newsletter.consentLabel}</span>
      </label>

      {error && <p role="alert" className="rounded-xl border border-red-400/20 bg-red-400/10 px-3 py-2 text-sm text-red-100">{error}</p>}
    </form>
  );
};

