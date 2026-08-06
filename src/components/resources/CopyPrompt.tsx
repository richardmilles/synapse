import { useState } from "react";
import { Check, Copy } from "lucide-react";

type CopyPromptProps = {
  title: string;
  children: string;
};

export const CopyPrompt = ({ title, children }: CopyPromptProps) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-primary/20 bg-black/30">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{title}</span>
        <button
          type="button"
          onClick={copy}
          className="inline-flex min-h-9 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 text-xs font-semibold text-white/70 transition hover:border-primary/30 hover:bg-primary/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label={`Copier : ${title}`}
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Copié" : "Copier"}
        </button>
      </div>
      <pre className="whitespace-pre-wrap p-5 font-mono text-[13px] leading-6 text-white/80">{children}</pre>
    </div>
  );
};
