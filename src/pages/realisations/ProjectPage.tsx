import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/sections/Footer";
import { getProjectBySlug, projects } from "@/data/projects";
import { usePageSeo } from "@/hooks/use-page-seo";

const BOOKING_URL = "https://synapse0.neetocal.com/audit";

const ProjectPageContent = ({ slug }: { slug: string }) => {
  const project = getProjectBySlug(slug);

  usePageSeo({
    title: project ? `${project.name} | Réalisation Synapse` : "Page introuvable | Synapse",
    description: project?.tagline ?? "Cette page n’existe pas ou a été déplacée.",
    canonicalPath: project ? `/realisations/${project.slug}` : "/404",
    robots: project ? "index,follow" : "noindex,follow",
  });

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const otherProjects = projects.filter((item) => item.slug !== project.slug);

  return (
    <div className="premium-home" id="top">
      <Header />
      <main>
        <section className="case-hero">
          <div className="premium-shell">
            <nav aria-label="Fil d’Ariane" className="case-hero__breadcrumb">
              <Link to="/">Accueil</Link>
              <ChevronRight aria-hidden="true" />
              <a href="/#realisations">Réalisations</a>
              <ChevronRight aria-hidden="true" />
              <span>{project.name}</span>
            </nav>
            <div className="case-hero__grid">
              <div>
                <p className="premium-kicker"><span /> Réalisation</p>
                <h1>{project.name}</h1>
                <p className="case-hero__tagline">{project.tagline}</p>
              </div>
              <dl className="case-hero__facts">
                <div><dt>Secteur</dt><dd>{project.sector}</dd></div>
                <div><dt>Type de projet</dt><dd>{project.type}</dd></div>
                <div><dt>Périmètre</dt><dd>{project.scope.join(", ")}</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section className="case-visual">
          <div className="premium-shell">
            <figure className="case-visual__frame">
              <img src={project.image} width={project.imageWidth} height={project.imageHeight} alt={`Visuel conceptuel de la plateforme ${project.name}`} />
            </figure>
          </div>
        </section>

        <section className="case-story">
          <div className="premium-shell">
            <div className="case-story__row">
              <p className="premium-section-label">Le contexte</p>
              <div>
                <h2>{project.challengeTitle}</h2>
                <p>{project.challenge}</p>
              </div>
            </div>
            <div className="case-story__row">
              <p className="premium-section-label">Notre réponse</p>
              <div>
                <h2>{project.solutionTitle}</h2>
                <p>{project.solution}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="case-modules">
          <div className="premium-shell">
            <div className="case-modules__head">
              <p className="premium-section-label">Ce que fait la plateforme</p>
              <h2>{project.modules.length} briques conçues sur mesure.</h2>
            </div>
            <ol className="case-modules__grid">
              {project.modules.map((module, index) => (
                <li key={module.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{module.title}</h3>
                  <p>{module.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="case-outcome">
          <div className="premium-shell case-outcome__inner">
            <p className="premium-section-label premium-section-label--dark">Le résultat</p>
            <blockquote>{project.outcome}</blockquote>
          </div>
        </section>

        <section className="case-others">
          <div className="premium-shell">
            <p className="premium-section-label">Autres réalisations</p>
            <div className="case-others__grid">
              {otherProjects.map((item) => (
                <Link to={`/realisations/${item.slug}`} key={item.slug} className="case-others__card">
                  <small>{item.sector}</small>
                  <strong>{item.name}</strong>
                  <p>{item.tagline}</p>
                  <span>Voir la réalisation <ArrowRight aria-hidden="true" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="premium-cta">
          <div className="premium-shell premium-cta__inner">
            <div><p className="premium-section-label">Votre projet</p><h2>Un besoin comparable<br />dans votre entreprise ?</h2></div>
            <div className="premium-cta__action">
              <p>Présentez votre fonctionnement actuel et vos objectifs. Vous repartez avec une première lecture des priorités.</p>
              <a className="premium-button premium-button--ink" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Réserver un échange <ArrowUpRight aria-hidden="true" /></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const ProjectPage = () => {
  const { slug = "" } = useParams();
  return <ProjectPageContent slug={slug} />;
};

export default ProjectPage;
