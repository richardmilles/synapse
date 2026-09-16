import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, BarChart3, Check, Clock3, MoveRight, TrendingUp } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/sections/Footer";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { ClientLogos } from "@/components/sections/ClientLogos";
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

const useCases = [
  ["Ventes", "Qualifier plus vite, relancer au bon moment et réduire la perte de prospects.", "/services/agents-ia"],
  ["Opérations", "Supprimer les ressaisies, accélérer les dossiers et absorber plus de volume.", "/services/automatisation-processus"],
  ["Service client", "Répondre immédiatement aux demandes récurrentes et raccourcir les délais.", "/services/agents-ia"],
  ["Direction", "Centraliser les indicateurs utiles et piloter avec des données à jour.", "/services/integration-api-outils"],
];

const sectors = [
  ["Avocats", "/secteurs/avocats"], ["Experts-comptables", "/secteurs/experts-comptables"],
  ["Notaires", "/secteurs/notaires"], ["Huissiers de justice", "/secteurs/huissiers-justice"],
  ["Recouvrement", "/secteurs/recouvrement-creances"], ["Courtage assurance", "/secteurs/courtage-assurance"],
  ["Courtage crédit", "/secteurs/courtage-credit"], ["Dépannage à domicile", "/secteurs/depannage-domicile"],
  ["Chauffage et climatisation", "/secteurs/chauffage-climatisation"], ["Rénovation", "/secteurs/renovation"],
  ["Sécurité et alarmes", "/secteurs/securite-alarmes"], ["Recrutement", "/secteurs/recrutement"],
  ["Intérim", "/secteurs/interim"], ["Formation professionnelle", "/secteurs/formation-professionnelle"],
  ["Services informatiques", "/secteurs/services-informatiques"],
];

const missions = [
  ["Recouvrement de créances", "Automatiser les relances", "Règles par ancienneté de créance, exceptions gérées automatiquement et tableau de suivi des encaissements.", "/services/automatisation-processus"],
  ["Courtage crédit", "Qualifier les demandes entrantes", "Un agent IA trie les dossiers par profil et urgence avant transmission au bon courtier.", "/services/agents-ia"],
  ["Dépannage à domicile", "Optimiser le planning des techniciens", "Un portail sur mesure affecte les interventions selon la zone, la disponibilité et l’urgence.", "/services/solution-numerique-sur-mesure"],
  ["Notaires", "Centraliser le suivi des dossiers", "Les outils existants sont connectés pour réunir échanges, délais et pièces dans un même espace.", "/services/integration-api-outils"],
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

        <ClientLogos />

        <section className="premium-proofbar" aria-label="Chiffres clés">
          <div className="premium-shell premium-proofbar__grid">
            <div><strong>5</strong><span>expertises réunies</span></div>
            <div><strong>4</strong><span>étapes, du cadrage au déploiement</span></div>
            <div><strong>48h</strong><span>pour un premier retour sur votre projet</span></div>
            <div><strong>100%</strong><span>conçu autour de vos opérations</span></div>
          </div>
        </section>

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

        <section className="premium-usecases">
          <div className="premium-shell">
            <div className="premium-section-head">
              <div><p className="premium-section-label">Cas d’usage</p><h2>Parler business avant<br />de parler technologie.</h2></div>
              <p>Nous partons du revenu, du coût, du délai ou de la qualité de service à améliorer. La technologie vient ensuite.</p>
            </div>
            <div className="premium-usecases__list">
              {useCases.map(([title, copy, href], index) => <Link to={href} className="premium-usecase" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p><MoveRight aria-hidden="true" /></Link>)}
            </div>
          </div>
        </section>

        <section className="premium-sectors">
          <div className="premium-shell premium-sectors__grid">
            <div><p className="premium-section-label">Expertise sectorielle</p><h2>Des solutions adaptées aux réalités de votre marché.</h2><p>Parcours client, contraintes métier, saisonnalité et outils existants sont intégrés dès le cadrage.</p></div>
            <div className="premium-sectors__links">{sectors.map(([label, href]) => <Link to={href} key={href}><span>{label}</span><ArrowUpRight /></Link>)}</div>
          </div>
        </section>

        <section className="premium-missions">
          <div className="premium-shell">
            <div className="premium-section-head">
              <div><p className="premium-section-label">Concrètement</p><h2>À quoi ressemble<br />une mission chez nous.</h2></div>
              <p>Quatre exemples représentatifs du type de projet mené, du diagnostic à la mise en production.</p>
            </div>
            <div className="premium-missions__grid">
              {missions.map(([sector, title, copy, href]) => (
                <Link to={href} className="premium-mission-card" key={title}>
                  <div className="premium-mission-card__tag"><span>{sector}</span><ArrowUpRight aria-hidden="true" /></div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <LogoMarquee />

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
              <p>Un périmètre clair, des livraisons visibles et des décisions rapides. Vous savez ce qui est construit, pourquoi et avec quel impact attendu.</p>
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
        </section>

        <section className="premium-standard">
          <div className="premium-shell premium-standard__card">
            <div><p className="premium-section-label">Notre standard</p><h2>Un actif business,<br />pas une démonstration.</h2></div>
            <ul>
              <li><Check aria-hidden="true" /><span><strong>Objectif mesurable</strong> relié à un indicateur de l’entreprise.</span></li>
              <li><Check aria-hidden="true" /><span><strong>Intégration complète</strong> avec vos logiciels et vos données.</span></li>
              <li><Check aria-hidden="true" /><span><strong>Expérience simple</strong> pour accélérer l’adoption par les équipes.</span></li>
              <li><Check aria-hidden="true" /><span><strong>Architecture évolutive</strong> pour accompagner la croissance.</span></li>
            </ul>
          </div>
        </section>

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
