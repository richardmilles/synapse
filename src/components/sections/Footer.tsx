import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

export const Footer = () => {
  return (
    <footer className="site-footer relative mt-auto border-t border-border/50">
      <div className="container px-4 py-8 sm:px-6 sm:py-9">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-4">
            <div className="mb-3 flex items-center gap-2">
              {/* Logo */}
              <div className="relative h-9 w-9">
                <img src="/logo.png" alt="Synapse Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-space-grotesk text-lg font-bold">Synapse</span>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              Du diagnostic au déploiement, nous concevons et intégrons des solutions numériques adaptées au fonctionnement de chaque entreprise.
            </p>
          </div>

          <div className="lg:col-span-4">
            <h4 className="mb-3 font-semibold text-foreground">Services</h4>
            <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`} className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services/fidelisation-automatisee-logiciels-metiers" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                  Fidélisation automatisée
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="mb-3 font-semibold text-foreground">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@synapse-lab.co" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                  <Mail className="w-4 h-4" />
                  contact@synapse-lab.co
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4" />
                  Paris, France
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-3 font-semibold text-foreground">Découvrir</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/expertises" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                  Expertises
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/ressources" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                  Ressources
                </Link>
              </li>
              <li>
                <Link to="/mentions-legales" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/politique-de-confidentialite" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-7 flex items-center justify-center border-t border-border/50 pt-5 sm:justify-start">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Synapse. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
