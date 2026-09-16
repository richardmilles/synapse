import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const solutions = [
  {
    title: "Une application interne à la place des tableurs",
    situation: "L’activité se suit dans des fichiers partagés, avec plusieurs versions, des erreurs de saisie et aucune vue d’ensemble fiable.",
    build: "Une application web taillée pour vos processus : saisie guidée, droits par rôle, circuits de validation et historique complet.",
    impact: "Une seule source de vérité et des décisions prises sur des données fiables.",
  },
  {
    title: "Un portail pour vos clients",
    situation: "Vos clients appellent ou écrivent pour connaître l’avancement de leur dossier, envoyer un document ou retrouver une facture.",
    build: "Un espace client sécurisé : suivi en temps réel, dépôt de documents, échanges, factures et paiements au même endroit.",
    impact: "Moins de sollicitations entrantes et une expérience client à la hauteur de votre service.",
  },
  {
    title: "Un agent IA intégré à vos logiciels",
    situation: "Vos équipes perdent du temps à chercher une information dans les documents, le CRM ou les échanges passés.",
    build: "Un agent IA connecté à vos sources et à vos outils, qui répond, prépare des documents et agit dans un cadre de permissions précis.",
    impact: "L’expertise de l’entreprise accessible à chacun, en quelques secondes.",
  },
  {
    title: "Un cockpit de pilotage unifié",
    situation: "Les chiffres sont éparpillés entre le CRM, la comptabilité, le support et la production. Chaque réunion commence par une consolidation manuelle.",
    build: "Vos logiciels connectés entre eux et un tableau de pilotage actualisé en continu, avec des alertes sur les écarts qui comptent.",
    impact: "Une direction qui pilote sur des données à jour, pas sur celles du mois dernier.",
  },
  {
    title: "Votre propre plateforme SaaS",
    situation: "Votre savoir-faire pourrait devenir un produit vendu à vos clients ou à votre marché, mais il n’existe encore que dans vos méthodes internes.",
    build: "La conception et le développement d’une plateforme complète : parcours utilisateurs, abonnements, espaces multi-clients et intégrations.",
    impact: "Un nouvel actif numérique et une source de revenus récurrents.",
  },
  {
    title: "Des flux fiables entre vos outils",
    situation: "Les mêmes informations sont ressaisies d’un logiciel à l’autre et les erreurs de synchronisation se découvrent trop tard.",
    build: "Des échanges de données documentés et supervisés entre vos applications, avec des alertes et des procédures de reprise.",
    impact: "Des équipes libérées des ressaisies et des données cohérentes partout.",
  },
];

const AUTOPLAY_DELAY = 6000;

export const BuildCarousel = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef<number | null>(null);
  const count = solutions.length;

  const goTo = useCallback((next: number) => setIndex(((next % count) + count) % count), [count]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const previous = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    const timer = window.setTimeout(next, AUTOPLAY_DELAY);
    return () => window.clearTimeout(timer);
  }, [index, paused, next]);

  return (
    <section className="premium-usecases" aria-roledescription="carrousel" aria-label="Ce que nous construisons">
      <div className="premium-shell">
        <div className="premium-section-head">
          <div><p className="premium-section-label">Ce que nous construisons</p><h2>Des solutions qui changent<br />la façon de travailler.</h2></div>
          <p>Applications internes, portails, agents IA, plateformes : chaque solution part d’une situation concrète et vise un changement mesurable.</p>
        </div>

        <div
          className="premium-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") next();
            if (event.key === "ArrowLeft") previous();
          }}
          onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; setPaused(true); }}
          onTouchEnd={(event) => {
            if (touchStart.current !== null) {
              const delta = event.changedTouches[0].clientX - touchStart.current;
              if (delta < -50) next();
              if (delta > 50) previous();
            }
            touchStart.current = null;
            setPaused(false);
          }}
        >
          <div className="premium-carousel__viewport">
            <div className="premium-carousel__track" style={{ transform: `translateX(-${index * 100}%)` }}>
              {solutions.map((solution, slideIndex) => (
                <article
                  className="premium-carousel__slide"
                  key={solution.title}
                  aria-roledescription="diapositive"
                  aria-label={`${slideIndex + 1} sur ${count}`}
                  aria-hidden={slideIndex !== index}
                >
                  <div className="premium-carousel__title">
                    <span>{String(slideIndex + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}</span>
                    <h3>{solution.title}</h3>
                  </div>
                  <dl className="premium-carousel__details">
                    <div><dt>La situation</dt><dd>{solution.situation}</dd></div>
                    <div><dt>Ce que nous construisons</dt><dd>{solution.build}</dd></div>
                    <div><dt>Ce qui change</dt><dd>{solution.impact}</dd></div>
                  </dl>
                </article>
              ))}
            </div>
          </div>

          <div className="premium-carousel__controls">
            <div className="premium-carousel__dots">
              {solutions.map((solution, dotIndex) => (
                <button
                  type="button"
                  key={solution.title}
                  className={dotIndex === index ? "is-active" : ""}
                  aria-label={`Afficher : ${solution.title}`}
                  aria-current={dotIndex === index}
                  onClick={() => goTo(dotIndex)}
                >
                  {dotIndex === index && !paused && <i key={index} style={{ animationDuration: `${AUTOPLAY_DELAY}ms` }} />}
                </button>
              ))}
            </div>
            <div className="premium-carousel__arrows">
              <button type="button" aria-label="Solution précédente" onClick={previous}><ArrowLeft aria-hidden="true" /></button>
              <button type="button" aria-label="Solution suivante" onClick={next}><ArrowRight aria-hidden="true" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
