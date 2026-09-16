import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="premium-footer site-footer">
    <div className="premium-shell">
      <div className="premium-footer__top">
        <Link to="/" className="premium-brand premium-brand--footer" aria-label="Synapse, accueil">
          <img className="premium-brand__logo" src="/logo.png" alt="" />
          <span>Synapse<small>Systems studio</small></span>
        </Link>
        <p>Des solutions numériques conçues<br />pour accélérer votre entreprise.</p>
        <a href="mailto:contact@synapse-lab.co">contact@synapse-lab.co <ArrowUpRight aria-hidden="true" /></a>
      </div>
      <div className="premium-footer__links">
        <div><p>Navigation</p><Link to="/expertises">Expertises</Link><Link to="/ressources">Ressources</Link><Link to="/blog">Journal</Link></div>
        <div><p>Solutions</p><Link to="/services/solution-numerique-sur-mesure">Outils sur mesure</Link><Link to="/services/automatisation-processus">Automatisation</Link><Link to="/services/agents-ia">Agents IA</Link></div>
        <div><p>Informations</p><Link to="/mentions-legales">Mentions légales</Link><Link to="/politique-de-confidentialite">Confidentialité</Link><span>Paris, France</span></div>
      </div>
      <div className="premium-footer__bottom"><span>© {new Date().getFullYear()} Synapse</span><span>Clarté · Fiabilité · Transmission</span><a href="#top">Retour en haut ↑</a></div>
    </div>
  </footer>
);
