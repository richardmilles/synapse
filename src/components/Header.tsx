import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

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
  const [mobileSectorOpen, setMobileSectorOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "/#services" },
    { label: "Projets", href: "/#projets" },
    { label: "Processus", href: "/#processus" },
    { label: "Blog", href: "/blog" },
    { label: "À propos", href: "/#apropos" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-strong shadow-lg" : "bg-transparent"
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
          <nav className="hidden md:flex items-center gap-8">
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
                  <div className="glass-strong rounded-2xl p-6 shadow-xl border border-border/50">
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
          <div className="hidden md:block">
            <a href="https://koalendar.com/e/meet-with-synapse" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="default">
                Prendre RDV
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-2">
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

              <a href="https://koalendar.com/e/meet-with-synapse" target="_blank" rel="noopener noreferrer" className="mt-2">
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
