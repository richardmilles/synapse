import { ArrowLeft, Share2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { bioConfig } from "@/config/bio";
import { trackBioEvent } from "@/lib/bioAnalytics";

type BioShellProps = {
  children: React.ReactNode;
  compact?: boolean;
};

export const BioShell = ({ children, compact = false }: BioShellProps) => {
  const location = useLocation();
  const isHome = location.pathname === "/bio" || location.pathname === "/bio/";

  const share = async () => {
    trackBioEvent("share_click", { page: location.pathname });
    const data = {
      title: bioConfig.seo.title,
      text: bioConfig.seo.description,
      url: window.location.href,
    };

    if (navigator.share) {
      await navigator.share(data).catch(() => undefined);
      return;
    }

    await navigator.clipboard?.writeText(window.location.href).catch(() => undefined);
  };

  return (
    <div className="bio-theme min-h-screen overflow-x-hidden bg-[#07070a] text-white selection:bg-violet-400/30">
      <div className="pointer-events-none fixed inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-[-18rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[110px]" />
        <div className="absolute right-[-12rem] top-[30rem] h-[26rem] w-[26rem] rounded-full bg-blue-500/10 blur-[110px]" />
        <div className="bio-grid absolute inset-0 opacity-30" />
      </div>

      <header className={`relative z-20 mx-auto flex w-full max-w-2xl items-center px-4 pb-3 pt-4 sm:px-6 sm:pt-6 ${isHome ? "justify-end" : "justify-between"}`}>
        {!isHome && (
          <Link to="/bio" className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Retour
          </Link>
        )}
        <button
          type="button"
          onClick={share}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/75 transition hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          aria-label="Partager cette page"
        >
          <Share2 className="h-4 w-4" aria-hidden="true" />
        </button>
      </header>

      <main className={`relative z-10 mx-auto w-full px-4 pb-16 sm:px-6 ${compact ? "max-w-2xl" : "max-w-5xl"}`}>
        {children}
      </main>

      <footer className="relative z-10 border-t border-white/10 px-5 py-7 text-center text-xs text-white/65">
        <p>© {new Date().getFullYear()} Synapse · Vos données restent sous votre contrôle.</p>
        <nav className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2" aria-label="Liens légaux">
          <Link className="transition hover:text-white" to="/bio/mentions-legales">Mentions légales</Link>
          <Link className="transition hover:text-white" to="/bio/confidentialite">Confidentialité</Link>
        </nav>
      </footer>
    </div>
  );
};
