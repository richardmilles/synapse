import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, ArrowUpRight, BarChart3, Clock3, TrendingUp } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/sections/Footer";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { BuildCarousel } from "@/components/sections/BuildCarousel";
import { ProcessCommitments } from "@/components/sections/ProcessCommitments";
import { RoiCalculator } from "@/components/sections/RoiCalculator";
import { homeSections } from "@/config/homeSections";
import { projects } from "@/data/projects";
import { usePageSeo } from "@/hooks/use-page-seo";

const expertiseCards = [
  {
    number: "01",
    title: "Décider où investir",
    copy: "Cartographier les opérations, chiffrer les frictions et prioriser les projets selon leur impact business.",
    link: "/services/diagnostic-processus",
    label: "Diagnostic et cadrage",
    image: "/expertise-diagnostic.webp",
  },
  {
    number: "02",
    title: "Créer un avantage métier",
    copy: "Concevoir l’application, le portail ou l’outil interne qui accélère réellement votre façon de travailler.",
    link: "/services/solution-numerique-sur-mesure",
    label: "Produit sur mesure",
    image: "/expertise-produit.webp",
  },
  {
    number: "03",
    title: "Faire plus avec la même équipe",
    copy: "Automatiser les flux à fort volume et déployer des agents IA connectés à vos logiciels et à vos données.",
    link: "/services/automatisation-processus",
    label: "Automatisation et IA",
    image: "/expertise-automation.webp",
  },
];

const faqs = [
  ["Faut-il déjà savoir quel outil ou quelle IA utiliser ?", "Non. Le diagnostic sert justement à comparer les options à partir de votre besoin réel, de vos contraintes et du niveau d’investissement pertinent. Aucun choix technique préalable n’est nécessaire."],
  ["Est-ce compatible avec nos outils actuels (CRM, ERP, logiciel métier) ?", "Oui. Nous intégrons systématiquement les systèmes déjà en place plutôt que d’imposer un outil isolé supplémentaire. Vos données restent la source de vérité."],
  ["Combien de temps avant un résultat concret ?", "Cela dépend du périmètre, mais chaque mission vise un premier livrable utilisable rapidement plutôt qu’un long projet théorique. Le cadrage initial fixe un délai réaliste et mesurable."],
  ["Quel budget faut-il prévoir pour démarrer ?", "Le diagnostic initial permet de chiffrer précisément l’effort avant tout engagement sur la suite. Vous décidez du périmètre et de l’investissement en connaissance de cause."],
  ["Qui s’occupe de notre projet une fois lancé ?", "Une équipe unique vous accompagne du cadrage au déploiement, sans transfert entre plusieurs intervenants. Vous gardez un interlocuteur qui connaît votre contexte du début à la fin."],
  ["Que se passe-t-il après la mise en production ?", "Vous repartez avec une documentation claire et une feuille de route d’évolution. La solution peut être reprise par votre équipe interne, un autre prestataire, ou suivie avec nous selon vos besoins."],
];

const Index = () => {
  usePageSeo({
    title: "Synapse | Solutions numériques, automatisation et IA",
    description: "Des solutions numériques conçues pour accélérer votre entreprise, du diagnostic au déploiement.",
    canonicalPath: "/",
  });

  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const scrollToTarget = () => document.getElementById(hash.slice(1))?.scrollIntoView({ block: "start" });
    const timer = window.setTimeout(scrollToTarget, 350);
    window.addEventListener("load", scrollToTarget, { once: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("load", scrollToTarget);
    };
  }, [hash]);

  return (
    <div className="premium-home" id="top">
      <Header />
      <main>
        <section className="premium-hero">
          <div className="premium-hero__grid" aria-hidden="true" />
          <div className="premium-shell premium-hero__inner">
            <div className="premium-hero__content">
              <p className="premium-kicker"><span /> Conseil, produits numériques et IA</p>
              <h1>Des solutions numériques conçues pour <em>votre entreprise.</em></h1>
              <p className="premium-hero__lead">Du diagnostic au déploiement, nous transformons vos besoins en outils sur mesure, automatisations et agents IA qui améliorent vos résultats.</p>
              <div className="premium-hero__actions">
                <a className="premium-button premium-button--lime" href="https://synapse0.neetocal.com/audit" target="_blank" rel="noopener noreferrer">Évaluer votre projet <ArrowUpRight aria-hidden="true" /></a>
                <Link className="premium-text-link" to="/expertises">Voir les solutions <ArrowRight aria-hidden="true" /></Link>
              </div>
              <div className="premium-hero__proof"><span>Diagnostic</span><i /><span>Conception</span><i /><span>Intégration</span><i /><span>Déploiement</span></div>
            </div>
            <div className="premium-hero__visual">
              <img src="/synapse-system-hero-blue.webp" alt="Architecture numérique reliant données, outils et opérations" />
              <div className="premium-hero__visual-label"><span>Vos outils. Vos données. Vos processus.</span><small>Réunis dans un système cohérent</small></div>
              <div className="premium-hero__index">S / 01</div>
            </div>
          </div>
          <div className="premium-shell premium-hero__footer">
            <p>Une équipe pour cadrer, concevoir et mettre en production.</p>
            <a href="#expertises">Découvrir les expertises <span>↓</span></a>
          </div>
        </section>

        {homeSections.clientLogos === 1 && <ClientLogos />}

        {homeSections.proofBar === 1 && (
          <section className="premium-proofbar" aria-label="Chiffres clés">
            <div className="premium-shell premium-proofbar__grid">
              <div><strong>5</strong><span>expertises réunies</span></div>
              <div><strong>4</strong><span>étapes, du cadrage au déploiement</span></div>
              <div><strong>48h</strong><span>pour un premier retour sur votre projet</span></div>
              <div><strong>100%</strong><span>conçu autour de vos opérations</span></div>
            </div>
          </section>
        )}

        <section className="premium-intro" id="expertises">
          <div className="premium-shell premium-two-col">
            <p className="premium-section-label">Transformer un besoin en résultat</p>
            <div>
              <h2>Le bon projet n’ajoute pas un outil. <span>Il améliore un indicateur.</span></h2>
              <p className="premium-copy-large">Plus de dossiers traités, des réponses plus rapides, un coût opérationnel réduit ou une meilleure conversion. Chaque mission commence par un objectif business et se termine par une solution utilisable.</p>
            </div>
          </div>
          <div className="premium-shell premium-expertise-grid">
            {expertiseCards.map((card) => (
              <Link to={card.link} className="premium-expertise-card" key={card.number}>
                <div className="premium-expertise-card__media"><img src={card.image} alt="" /><span>{card.number}</span><ArrowUpRight aria-hidden="true" /></div>
                <div className="premium-expertise-card__body"><p className="premium-card-label">{card.label}</p><h3>{card.title}</h3><p>{card.copy}</p></div>
              </Link>
            ))}
          </div>
        </section>

        <section className="premium-results">
          <div className="premium-shell">
            <div className="premium-section-head premium-section-head--light">
              <div><p className="premium-section-label">Résultats recherchés</p><h2>Transformer vos opérations<br />en moteur de croissance.</h2></div>
              <p>La solution est jugée sur ce qu’elle change dans votre activité, pas sur le nombre de technologies utilisées.</p>
            </div>
            <div className="premium-results__grid">
              <article className="premium-result-card">
                <div className="premium-result-card__head"><Clock3 /><span>Capacité opérationnelle</span></div>
                <h3>Traiter plus de volume sans multiplier les tâches manuelles.</h3>
                <div className="premium-bars" aria-label="Illustration de capacité croissante"><i style={{height:"28%"}} /><i style={{height:"42%"}} /><i style={{height:"55%"}} /><i style={{height:"76%"}} /><i style={{height:"94%"}} /></div>
              </article>
              <article className="premium-result-card premium-result-card--blue">
                <div className="premium-result-card__head"><TrendingUp /><span>Performance commerciale</span></div>
                <h3>Répondre plus vite et convertir davantage d’opportunités.</h3>
                <div className="premium-line-chart" aria-label="Illustration d’une progression"><span /><span /><span /><span /><span /><b /></div>
              </article>
              <article className="premium-result-card premium-result-card--paper">
                <div className="premium-result-card__head"><BarChart3 /><span>Visibilité direction</span></div>
                <h3>Suivre les flux, les délais et les résultats au même endroit.</h3>
                <div className="premium-mini-kpis"><div><small>Dossiers</small><strong>1 284</strong></div><div><small>Délai moyen</small><strong>2,4 j</strong></div><div><small>Progression</small><strong>+18%</strong></div></div>
              </article>
            </div>
          </div>
        </section>

        <BuildCarousel />

        <section className="premium-realisations" id="realisations">
          <div className="premium-shell">
            <div className="premium-section-head premium-section-head--light">
              <div><p className="premium-section-label">Réalisations</p><h2>Des projets métier<br />conçus de bout en bout.</h2></div>
              <p>Pilotage client, restauration d’entreprise, gestion locative : des systèmes construits autour du fonctionnement réel de nos clients.</p>
            </div>
            <div className="premium-realisations__grid">
              {projects.map((project, index) => (
                <Link to={`/realisations/${project.slug}`} className="premium-realisation-card" key={project.slug}>
                  <div className="premium-realisation-card__top"><span>{String(index + 1).padStart(2, "0")}</span><ArrowUpRight aria-hidden="true" /></div>
                  <p className="premium-realisation-card__sector">{project.sector}</p>
                  <h3>{project.name}</h3>
                  <p className="premium-realisation-card__tagline">{project.tagline}</p>
                  <ul className="premium-realisation-card__scope">
                    {project.scope.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <span className="premium-realisation-card__cta">Voir la réalisation</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="premium-manifesto">
          <div className="premium-shell premium-manifesto__inner">
            <p className="premium-section-label premium-section-label--dark">Notre position</p>
            <blockquote>Vous n’avez pas besoin d’une agence qui facture des heures. <em>Vous avez besoin d’une équipe responsable du résultat.</em></blockquote>
            <div className="premium-manifesto__note"><span className="premium-manifesto__rule" /><p>Un périmètre clair, un impact mesuré dès le premier livrable, et la même équipe du cadrage jusqu’au déploiement.</p></div>
          </div>
        </section>

        <section className="premium-process" id="processus">
          <div className="premium-shell premium-process__grid">
            <div className="premium-process__sticky">
              <p className="premium-section-label">De l’idée à la production</p>
              <h2>Un projet piloté par la valeur.</h2>
              <p>Chaque étape produit un livrable que vous pouvez voir, tester et valider. Vous savez ce qui est construit, pourquoi et avec quel impact attendu.</p>
              <Link className="premium-text-link premium-text-link--light" to="/expertises">Découvrir la méthode <ArrowRight aria-hidden="true" /></Link>
              <div className="premium-process__flow" aria-label="Progression du projet">
                <span><i>01</i><b>Problème</b></span>
                <span><i>02</i><b>Prototype</b></span>
                <span><i>03</i><b>Pilote</b></span>
                <span><i>04</i><b>Production</b></span>
              </div>
            </div>
            <ol className="premium-process__steps">
              <li><span>01 / Cadrage</span><h3>Chiffrer le problème</h3><p>Volumes, temps passé, coûts, pertes d’opportunités et contraintes opérationnelles.</p></li>
              <li><span>02 / Conception</span><h3>Prototyper la solution</h3><p>Parcours prioritaires, règles métier, interfaces et intégrations nécessaires.</p></li>
              <li><span>03 / Réalisation</span><h3>Livrer par étapes</h3><p>Développement, automatisation, tests sur des cas réels et démonstrations régulières.</p></li>
              <li><span>04 / Déploiement</span><h3>Mesurer et développer</h3><p>Mise en production, suivi des indicateurs, documentation et feuille de route.</p></li>
            </ol>
          </div>
          <div className="premium-shell">
            <ProcessCommitments />
          </div>
        </section>

        <LogoMarquee />

        <RoiCalculator />

        <section className="premium-faq" id="faq">
          <div className="premium-shell premium-faq__grid">
            <div>
              <p className="premium-section-label">Questions fréquentes</p>
              <h2>Avant de démarrer, les réponses aux questions qu’on nous pose le plus.</h2>
            </div>
            <div className="premium-faq__list">
              {faqs.map(([question, answer]) => (
                <details className="premium-faq__item" key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="premium-cta">
          <div className="premium-shell premium-cta__inner">
            <div><p className="premium-section-label">Votre prochaine étape</p><h2>Identifions le projet<br />qui aura le plus d’impact.</h2></div>
            <div className="premium-cta__action"><p>Présentez votre fonctionnement actuel, vos blocages et vos objectifs. Vous repartez avec une première lecture des priorités.</p><a className="premium-button premium-button--ink" href="https://synapse0.neetocal.com/audit" target="_blank" rel="noopener noreferrer">Réserver un échange <ArrowUpRight aria-hidden="true" /></a><p className="premium-cta__note">Nous limitons volontairement le nombre de projets menés en parallèle, pour rester disponibles sur chacun.</p></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
