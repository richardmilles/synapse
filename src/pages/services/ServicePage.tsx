import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, services } from "@/data/services";
import { usePageSeo } from "@/hooks/use-page-seo";
import { getServiceIcon, stepIcons } from "@/lib/serviceIcons";

const BOOKING_URL = "https://synapse0.neetocal.com/audit";

const ServicePageContent = ({ slug }: { slug: string }) => {
  const service = getServiceBySlug(slug);

  usePageSeo({
    title: service ? `${service.shortTitle} pour entreprises | Synapse` : "Page introuvable | Synapse",
    description: service?.description ?? "Cette page n’existe pas ou a été déplacée.",
    canonicalPath: service ? `/services/${service.slug}` : "/404",
    robots: service ? "index,follow" : "noindex,follow",
  });

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const ServiceIcon = getServiceIcon(service.slug);

  return (
    <div className="site-page-premium service-page-premium relative min-h-screen overflow-x-hidden bg-background">
      <Header />

      <main className="relative z-10 pt-20">
        <section className="border-b border-border/60 px-4 py-16 sm:px-6 sm:py-24">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <nav aria-label="Fil d’Ariane" className="mb-9 flex items-center gap-2 text-sm text-foreground/70">
                <Link to="/" className="transition hover:text-primary">Accueil</Link>
                <ChevronRight className="h-4 w-4" />
                <Link to="/expertises" className="transition hover:text-primary">Services</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-foreground">{service.shortTitle}</span>
              </nav>

              <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
                <div>
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary"><ServiceIcon className="h-6 w-6" aria-hidden="true" /></span>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{service.eyebrow}</p>
                  </div>
                  <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.04] tracking-[-0.035em] sm:text-6xl lg:text-7xl">{service.title}</h1>
                  <p className="mt-7 max-w-3xl text-lg leading-8 text-foreground/85 sm:text-xl">{service.description}</p>
                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <a href={BOOKING_URL}>
                      <Button variant="hero" size="lg" className="w-full sm:w-auto">
                        Parler de votre projet
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                    <a href="#methode" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border bg-card/60 px-6 text-sm font-semibold transition hover:border-primary/50 hover:text-primary">
                      Voir la méthode
                    </a>
                  </div>
                </div>

                <aside className="rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/15 via-card/80 to-secondary/10 p-7">
                  <p className="text-sm font-semibold text-primary">Ce que vous obtenez</p>
                  <ul className="mt-5 space-y-4">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-3 text-sm leading-6 text-foreground/85">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-24">
          <div className="container">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_420px]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">Le point de départ</p>
                <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Partir de la réalité du terrain</h2>
                <p className="mt-6 text-lg leading-8 text-foreground/85">{service.introduction}</p>
              </div>
              <div className="rounded-3xl border border-border/70 bg-card/70 p-7 sm:p-8">
                <h3 className="text-xl font-bold">Cette intervention est adaptée lorsque</h3>
                <ul className="mt-6 space-y-4">
                  {service.situations.map((situation) => (
                    <li key={situation} className="flex gap-3 leading-7 text-foreground/80">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                      <span>{situation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="methode" className="border-y border-border/60 bg-card/30 px-4 py-16 sm:px-6 sm:py-24">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">La méthode</p>
                <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Avancer par décisions vérifiables</h2>
              </div>
              <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {service.steps.map((step, index) => {
                  const StepIcon = stepIcons[index] ?? stepIcons[0];
                  return (
                    <li key={step.title} className="rounded-3xl border border-border/70 bg-background/60 p-6">
                      <div className="flex items-center justify-between">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card/60 text-primary"><StepIcon className="h-4 w-4" aria-hidden="true" /></span>
                        <span className="text-sm font-bold text-primary">0{index + 1}</span>
                      </div>
                      <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-foreground/75">{step.description}</p>
                    </li>
                  );
                })}
              </ol>

              <div className="mt-10 grid gap-8 rounded-3xl border border-primary/25 bg-primary/5 p-7 sm:p-10 lg:grid-cols-[1fr_1fr]">
                <div>
                  <h3 className="text-2xl font-bold">{service.approachTitle}</h3>
                  <p className="mt-4 leading-7 text-foreground/80">{service.approachText}</p>
                </div>
                <div>
                  <p className="font-semibold">Livrables possibles</p>
                  <ul className="mt-4 grid gap-3">
                    {service.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex gap-3 text-sm leading-6 text-foreground/80">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-24">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">Pour aller plus loin</p>
                  <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Contenus liés à ce service</h2>
                  <div className="mt-8 grid gap-4">
                    {service.related.map((item) => (
                      <Link key={item.href} to={item.href} className="group rounded-2xl border border-border/70 bg-card/65 p-5 transition hover:border-primary/40">
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{item.type}</span>
                          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:text-primary" />
                        </div>
                        <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-foreground/75">{item.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">Questions fréquentes</p>
                  <div className="mt-6 divide-y divide-border/70 border-y border-border/70">
                    {service.faq.map((item) => (
                      <details key={item.question} className="group py-5">
                        <summary className="cursor-pointer list-none pr-8 font-semibold marker:hidden">{item.question}</summary>
                        <p className="mt-3 pr-6 text-sm leading-7 text-foreground/75">{item.answer}</p>
                      </details>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 sm:pb-28">
          <div className="container">
            <div className="mx-auto max-w-6xl rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/20 via-card to-secondary/15 p-8 sm:p-12">
              <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Votre projet</p>
                  <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Clarifier le besoin et définir une première étape utile</h2>
                  <p className="mt-5 text-lg leading-8 text-foreground/80">Un échange permet de présenter le fonctionnement actuel, les contraintes et le résultat recherché.</p>
                </div>
                <div className="flex shrink-0 flex-col items-start gap-3 lg:items-end">
                  <a href={BOOKING_URL}>
                    <Button variant="hero" size="lg">
                      Réserver un appel
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <p className="max-w-[260px] text-xs italic leading-5 text-foreground/60 lg:text-right">Nombre de projets menés en parallèle volontairement limité.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <nav aria-label="Autres services" className="border-t border-border/60 px-4 py-12 sm:px-6">
          <div className="container">
            <div className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-3">
              {services.filter((item) => item.slug !== service.slug).map((item) => (
                <Link key={item.slug} to={`/services/${item.slug}`} className="text-sm text-foreground/70 transition hover:text-primary">
                  {item.shortTitle}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </main>

      <Footer />
    </div>
  );
};

const ServicePage = () => {
  const { slug = "" } = useParams();
  return <ServicePageContent slug={slug} />;
};

export default ServicePage;
