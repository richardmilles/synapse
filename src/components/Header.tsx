import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

const sectorGroups = [
  {
    title: "Professions Juridiques",
    sectors: [
      { label: "Avocats", href: "/secteurs/avocats" },
      { label: "Experts-comptables", href: "/secteurs/experts-comptables" },
      { label: "Notaires", href: "/secteurs/notaires" },
      { label: "Huissiers de justice", href: "/secteurs/huissiers-justice" },
    ],
  },
  {
    title: "Services Financiers",
    sectors: [
      { label: "Recouvrement", href: "/secteurs/recouvrement-creances" },
      { label: "Courtage assurance", href: "/secteurs/courtage-assurance" },
      { label: "Courtage crédit", href: "/secteurs/courtage-credit" },
    ],
  },
  {
    title: "Services Urgence",
    sectors: [
      { label: "Dépannage", href: "/secteurs/depannage-domicile" },
      { label: "Chauffage & Clim", href: "/secteurs/chauffage-climatisation" },
      { label: "Rénovation", href: "/secteurs/renovation" },
      { label: "Sécurité & Alarmes", href: "/secteurs/securite-alarmes" },
    ],
  },
  {
    title: "Services B2B",
    sectors: [
      { label: "Recrutement", href: "/secteurs/recrutement" },
      { label: "Intérim", href: "/secteurs/interim" },
      { label: "Formation", href: "/secteurs/formation-professionnelle" },
      { label: "Services IT", href: "/secteurs/services-informatiques" },
    ],
  },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSectorMenuOpen, setIsSectorMenuOpen] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const [mobileSectorOpen, setMobileSectorOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: "Projets", href: "/#projets" },
    { label: "Processus", href: "/#processus" },
    { label: "Blog", href: "/blog" },
    { label: "Ressources", href: "/ressources" },
    { label: "À propos", href: "/#apropos" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isMobileMenuOpen ? "bg-background shadow-lg" : isScrolled ? "glass-strong shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="container px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10">
              <img src="/logo.png" alt="Synapse Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold font-space-grotesk">Synapse</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <div
              className="relative"
              onMouseEnter={() => setIsServiceMenuOpen(true)}
              onMouseLeave={() => setIsServiceMenuOpen(false)}
            >
              <button
                type="button"
                aria-expanded={isServiceMenuOpen}
                aria-haspopup="true"
                onClick={() => setIsServiceMenuOpen((open) => !open)}
                className="relative flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isServiceMenuOpen ? "rotate-180" : ""}`} />
              </button>

              {isServiceMenuOpen && (
                <div className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-4">
                  <div className="rounded-2xl border border-border/80 bg-card p-5 shadow-2xl shadow-black/40">
                    <Link
                      to="/expertises"
                      className="mb-4 flex items-center justify-between rounded-xl border border-primary/25 bg-primary/10 p-4 transition hover:border-primary/50"
                      onClick={() => setIsServiceMenuOpen(false)}
                    >
                      <div>
                        <p className="font-semibold text-foreground">Vue d’ensemble</p>
                        <p className="mt-1 text-xs text-foreground/70">Les services, solutions et parcours</p>
                      </div>
                      <ChevronRight className="h-4 w-4 text-primary" />
                    </Link>
                    <ul className="grid grid-cols-2 gap-2">
                      {services.map((service) => (
                        <li key={service.slug}>
                          <Link
                            to={`/services/${service.slug}`}
                            className="block rounded-xl p-3 transition hover:bg-muted hover:text-primary"
                            onClick={() => setIsServiceMenuOpen(false)}
                          >
                            <span className="block text-sm font-semibold">{service.shortTitle}</span>
                            <span className="mt-1 block line-clamp-2 text-xs leading-5 text-foreground/65">{service.description}</span>
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link
                          to="/services/fidelisation-automatisee-logiciels-metiers"
                          className="block rounded-xl p-3 transition hover:bg-muted hover:text-primary"
                          onClick={() => setIsServiceMenuOpen(false)}
                        >
                          <span className="block text-sm font-semibold">Fidélisation automatisée</span>
                          <span className="mt-1 block line-clamp-2 text-xs leading-5 text-foreground/65">Transformer les événements d’un logiciel métier en actions utiles.</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            {/* Secteurs Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsSectorMenuOpen(true)}
              onMouseLeave={() => setIsSectorMenuOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 group">
                Secteurs
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSectorMenuOpen ? "rotate-180" : ""}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </button>

              {/* Mega Menu */}
              {isSectorMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px]">
                  <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-2xl shadow-black/40">
                    <div className="grid grid-cols-2 gap-6">
                      {sectorGroups.map((group) => (
                        <div key={group.title}>
                          <h4 className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
                            {group.title}
                          </h4>
                          <ul className="space-y-2">
                            {group.sectors.map((sector) => (
                              <li key={sector.href}>
                                <Link
                                  to={sector.href}
                                  className="block text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-200"
                                >
                                  {sector.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a href="https://synapse0.neetocal.com/audit" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="default">
                Prendre RDV
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto overscroll-contain border-t border-border/70 bg-background px-4 py-4 shadow-2xl lg:hidden sm:top-20 sm:px-6">
            <nav className="flex flex-col gap-2">
              <div>
                <button
                  type="button"
                  aria-expanded={mobileServicesOpen}
                  onClick={() => setMobileServicesOpen((open) => !open)}
                  className="flex w-full items-center justify-between py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>

                {mobileServicesOpen && (
                  <div className="mt-2 space-y-1 border-l border-border pl-4">
                    <Link
                      to="/expertises"
                      className="block py-2 text-sm font-semibold text-primary"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                      }}
                    >
                      Vue d’ensemble et parcours
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="block py-2 text-sm text-muted-foreground transition hover:text-foreground"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setMobileServicesOpen(false);
                        }}
                      >
                        {service.shortTitle}
                      </Link>
                    ))}
                    <Link
                      to="/services/fidelisation-automatisee-logiciels-metiers"
                      className="block py-2 text-sm text-muted-foreground transition hover:text-foreground"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                      }}
                    >
                      Fidélisation automatisée
                    </Link>
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Secteurs Accordion */}
              <div>
                <button
                  onClick={() => setMobileSectorOpen(!mobileSectorOpen)}
                  className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 py-2"
                >
                  Secteurs
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileSectorOpen ? "rotate-180" : ""}`} />
                </button>

                {mobileSectorOpen && (
                  <div className="pl-4 mt-2 space-y-4">
                    {sectorGroups.map((group) => (
                      <div key={group.title}>
                        <h4 className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                          {group.title}
                        </h4>
                        <ul className="space-y-1">
                          {group.sectors.map((sector) => (
                            <li key={sector.href}>
                              <Link
                                to={sector.href}
                                className="block text-sm text-muted-foreground hover:text-foreground py-1"
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setMobileSectorOpen(false);
                                }}
                              >
                                {sector.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <a href="https://synapse0.neetocal.com/audit" target="_blank" rel="noopener noreferrer" className="mt-2">
                <Button variant="hero" size="default" className="w-full">
                  Prendre RDV
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
