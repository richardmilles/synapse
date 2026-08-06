import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { usePageSeo } from "@/hooks/use-page-seo";

const BOOKING_URL = "https://synapse0.neetocal.com/audit";

export type ResourceNavItem = {
  href: string;
  label: string;
};

type ResourceArticleLayoutProps = {
  path: string;
  title: string;
  seoTitle: string;
  description: string;
  category: string;
  format: string;
  outcome: string;
  navItems: ResourceNavItem[];
  ctaTitle: string;
  ctaText: string;
  children: React.ReactNode;
};

export const ResourceArticleLayout = ({
  path,
  title,
  seoTitle,
  description,
  category,
  format,
  outcome,
  navItems,
  ctaTitle,
  ctaText,
  children,
}: ResourceArticleLayoutProps) => {
  const canonicalUrl = `https://www.synapse-lab.co${path}`;

  usePageSeo({
    title: seoTitle,
    description,
    canonicalPath: path,
    type: "article",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: title,
      description,
      datePublished: "2026-08-06",
      dateModified: "2026-08-06",
      inLanguage: "fr-FR",
      author: { "@type": "Organization", name: "Synapse" },
      publisher: { "@type": "Organization", name: "Synapse" },
      mainEntityOfPage: canonicalUrl,
    },
  });

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <NeuralBackground />
      <Header />

      <main className="relative z-10 pt-20">
        <article>
          <header className="border-b border-border/60 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-20">
            <div className="container">
              <div className="mx-auto max-w-5xl">
                <Link to="/ressources" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary">
                  <ArrowLeft className="h-4 w-4" />
                  Toutes les ressources
                </Link>

                <div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:items-end">
                  <div>
                    <div className="mb-5 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-semibold text-primary">{category}</span>
                      <span>{format}</span>
                    </div>
                    <h1 className="text-4xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">{title}</h1>
                    <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/85 sm:text-xl">{description}</p>
                  </div>

                  <div className="rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/15 to-secondary/10 p-6">
                    <Sparkles className="h-6 w-6 text-primary" />
                    <p className="mt-4 text-sm font-semibold">À la fin de cette ressource</p>
                    <p className="mt-2 text-sm leading-6 text-foreground/80">{outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="container px-4 sm:px-6">
            <div className="mx-auto grid max-w-6xl gap-12 py-14 lg:grid-cols-[220px_minmax(0,780px)] lg:items-start lg:py-20">
              <aside className="hidden lg:sticky lg:top-28 lg:block">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white/70">Dans cette ressource</p>
                <nav className="space-y-1 border-l border-white/15 pl-4" aria-label="Sommaire">
                  {navItems.map((item) => (
                    <a key={item.href} href={item.href} className="block py-1.5 text-sm text-white/70 transition hover:translate-x-1 hover:text-primary">
                      {item.label}
                    </a>
                  ))}
                </nav>
              </aside>

              <div className="min-w-0">
                {children}

                <section className="border-t border-white/15 py-12">
                  <div className="flex flex-col gap-5 rounded-2xl border border-primary/25 bg-card/80 p-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h2 className="text-xl font-bold">{ctaTitle}</h2>
                      <p className="mt-2 max-w-xl text-sm leading-6 text-foreground/80">{ctaText}</p>
                    </div>
                    <a href={BOOKING_URL} className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-4 text-sm font-bold text-white transition hover:brightness-110">
                      Réserver un échange
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export const ResourceSectionHeading = ({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) => (
  <div className="mb-8">
    <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</span>
    <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
    {children && <div className="mt-4 text-lg leading-8 text-foreground/85">{children}</div>}
  </div>
);

