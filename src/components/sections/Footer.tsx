import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/50">
      <div className="container px-4 sm:px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              {/* Logo */}
              <div className="relative w-10 h-10">
                <img src="/logo.png" alt="Synapse Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-bold font-space-grotesk">Synapse</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm mb-6">
              Du diagnostic au déploiement, nous concevons et intégrons des solutions numériques adaptées au fonctionnement de chaque entreprise.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
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
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
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

          <div>
            <h4 className="font-semibold text-foreground mb-4">Découvrir</h4>
            <ul className="space-y-3">
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
        <div className="mt-12 pt-8 border-t border-border/50 flex items-center justify-center sm:justify-start">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Synapse. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
