import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

const sectorGroups = [
  {
    title: "Professions juridiques",
    sectors: [
      { label: "Avocats", href: "/secteurs/avocats" },
      { label: "Experts-comptables", href: "/secteurs/experts-comptables" },
      { label: "Notaires", href: "/secteurs/notaires" },
      { label: "Huissiers de justice", href: "/secteurs/huissiers-justice" },
    ],
  },
  {
    title: "Services financiers",
    sectors: [
      { label: "Recouvrement", href: "/secteurs/recouvrement-creances" },
      { label: "Courtage assurance", href: "/secteurs/courtage-assurance" },
      { label: "Courtage crédit", href: "/secteurs/courtage-credit" },
    ],
  },
  {
    title: "Services d'urgence",
    sectors: [
      { label: "Dépannage à domicile", href: "/secteurs/depannage-domicile" },
      { label: "Chauffage et climatisation", href: "/secteurs/chauffage-climatisation" },
      { label: "Rénovation", href: "/secteurs/renovation" },
      { label: "Sécurité et alarmes", href: "/secteurs/securite-alarmes" },
    ],
  },
  {
    title: "Services B2B",
    sectors: [
      { label: "Recrutement", href: "/secteurs/recrutement" },
      { label: "Intérim", href: "/secteurs/interim" },
      { label: "Formation professionnelle", href: "/secteurs/formation-professionnelle" },
      { label: "Services informatiques", href: "/secteurs/services-informatiques" },
    ],
  },
];

const simpleLinks = [
  { label: "Ressources", href: "/ressources" },
  { label: "Journal", href: "/blog" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expertisesOpen, setExpertisesOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const [mobileExpertisesOpen, setMobileExpertisesOpen] = useState(false);
  const [mobileSectorsOpen, setMobileSectorsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const closeMobile = () => {
    setOpen(false);
    setMobileExpertisesOpen(false);
    setMobileSectorsOpen(false);
  };

  return (
    <header className={`premium-header ${scrolled ? "premium-header--scrolled" : ""}`}>
      <div className="premium-shell premium-header__inner">
        <Link to="/" className="premium-brand" aria-label="Synapse, accueil">
          <img className="premium-brand__logo" src="/logo.png" alt="" />
          <span>Synapse<small>Systems studio</small></span>
        </Link>
        <nav className="premium-nav" aria-label="Navigation principale">
          <div className="premium-nav-item" onMouseEnter={() => setExpertisesOpen(true)} onMouseLeave={() => setExpertisesOpen(false)}>
            <button type="button" className="premium-nav-trigger" aria-expanded={expertisesOpen} aria-haspopup="true" onClick={() => setExpertisesOpen((v) => !v)}>
              Expertises <ChevronDown aria-hidden="true" className={expertisesOpen ? "is-open" : ""} />
            </button>
            {expertisesOpen && (
              <div className="premium-dropdown">
                <div className="premium-dropdown__panel">
                  <Link to="/expertises" className="premium-dropdown__feature" onClick={() => setExpertisesOpen(false)}>
                    <span><strong>Vue d’ensemble</strong><small>Les 5 expertises et leurs parcours</small></span>
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                  <ul className="premium-dropdown__list">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link to={`/services/${service.slug}`} onClick={() => setExpertisesOpen(false)}>{service.shortTitle}</Link>
                      </li>
                    ))}
                    <li><Link to="/services/fidelisation-automatisee-logiciels-metiers" onClick={() => setExpertisesOpen(false)}>Fidélisation automatisée</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <a href="/#processus">Approche</a>

          <div className="premium-nav-item" onMouseEnter={() => setSectorsOpen(true)} onMouseLeave={() => setSectorsOpen(false)}>
            <button type="button" className="premium-nav-trigger" aria-expanded={sectorsOpen} aria-haspopup="true" onClick={() => setSectorsOpen((v) => !v)}>
              Secteurs <ChevronDown aria-hidden="true" className={sectorsOpen ? "is-open" : ""} />
            </button>
            {sectorsOpen && (
              <div className="premium-dropdown premium-dropdown--wide">
                <div className="premium-dropdown__panel premium-dropdown__panel--grid">
                  {sectorGroups.map((group) => (
                    <div className="premium-dropdown__group" key={group.title}>
                      <h4>{group.title}</h4>
                      <ul>
                        {group.sectors.map((sector) => (
                          <li key={sector.href}><Link to={sector.href} onClick={() => setSectorsOpen(false)}>{sector.label}</Link></li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {simpleLinks.map((link) => <Link to={link.href} key={link.label}>{link.label}</Link>)}
        </nav>
        <a className="premium-header__cta" href="https://synapse0.neetocal.com/audit" target="_blank" rel="noopener noreferrer">Démarrer un projet <ArrowUpRight aria-hidden="true" /></a>
        <button className="premium-menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}>{open ? <X /> : <Menu />}</button>
      </div>

      {open && (
        <div className="premium-mobile-menu">
          <nav aria-label="Navigation mobile">
            <button type="button" className="premium-mobile-menu__trigger" aria-expanded={mobileExpertisesOpen} onClick={() => setMobileExpertisesOpen((v) => !v)}>
              <span>01</span>Expertises <ChevronDown aria-hidden="true" className={mobileExpertisesOpen ? "is-open" : ""} />
            </button>
            {mobileExpertisesOpen && (
              <div className="premium-mobile-menu__sublist">
                <Link to="/expertises" onClick={closeMobile}>Vue d’ensemble</Link>
                {services.map((service) => <Link to={`/services/${service.slug}`} key={service.slug} onClick={closeMobile}>{service.shortTitle}</Link>)}
                <Link to="/services/fidelisation-automatisee-logiciels-metiers" onClick={closeMobile}>Fidélisation automatisée</Link>
              </div>
            )}

            <a href="/#processus" onClick={closeMobile}><span>02</span>Approche</a>

            <button type="button" className="premium-mobile-menu__trigger" aria-expanded={mobileSectorsOpen} onClick={() => setMobileSectorsOpen((v) => !v)}>
              <span>03</span>Secteurs <ChevronDown aria-hidden="true" className={mobileSectorsOpen ? "is-open" : ""} />
            </button>
            {mobileSectorsOpen && (
              <div className="premium-mobile-menu__sublist">
                {sectorGroups.flatMap((group) => group.sectors).map((sector) => (
                  <Link to={sector.href} key={sector.href} onClick={closeMobile}>{sector.label}</Link>
                ))}
              </div>
            )}

            {simpleLinks.map((link, index) => <Link to={link.href} key={link.label} onClick={closeMobile}><span>0{index + 4}</span>{link.label}</Link>)}
          </nav>
          <a className="premium-button premium-button--lime" href="https://synapse0.neetocal.com/audit" target="_blank" rel="noopener noreferrer">Parler de votre projet <ArrowUpRight /></a>
          <p>Paris · France<br />contact@synapse-lab.co</p>
        </div>
      )}
    </header>
  );
};
