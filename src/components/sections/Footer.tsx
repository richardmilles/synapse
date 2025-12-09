import { Mail, MapPin, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/50">
      <div className="container px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
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
              Agence spécialisée en Intelligence Artificielle, automatisation et transformation digitale.
              Nous aidons les entreprises à prendre de l'avance grâce aux technologies de demain.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
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

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Légal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                  CGV
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Synapse. Tous droits réservés.
          </p>
          <p className="text-sm text-muted-foreground">
            Conçu avec passion pour l'innovation
          </p>
        </div>
      </div>
    </footer>
  );
};
