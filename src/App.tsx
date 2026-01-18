import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Sector Pages - Professions Juridiques
import AvocatsPage from "./pages/secteurs/Avocats";
import ExpertsComptablesPage from "./pages/secteurs/ExpertsComptables";
import NotairesPage from "./pages/secteurs/Notaires";
import HuissiersPage from "./pages/secteurs/Huissiers";

// Sector Pages - Services Financiers
import RecouvrementPage from "./pages/secteurs/Recouvrement";
import CourtageAssurancePage from "./pages/secteurs/CourtageAssurance";
import CourtageCreditPage from "./pages/secteurs/CourtageCredit";

// Sector Pages - Services Urgence/Domicile
import DepannagePage from "./pages/secteurs/Depannage";
import ChauffageClimatisationPage from "./pages/secteurs/ChauffageClimatisation";
import RenovationPage from "./pages/secteurs/Renovation";
import SecuritePage from "./pages/secteurs/Securite";

// Sector Pages - Services B2B
import RecrutementPage from "./pages/secteurs/Recrutement";
import InterimPage from "./pages/secteurs/Interim";
import FormationPage from "./pages/secteurs/Formation";
import ServicesInformatiquesPage from "./pages/secteurs/ServicesInformatiques";

// Blog
import BlogPage from "./pages/Blog";
import BlogArticle1 from "./pages/blog/ReduireTempsAttenteAvocat";
import BlogArticle2 from "./pages/blog/AutomatiserRelanceFactures";
import BlogArticle3 from "./pages/blog/AmeliorerTauxReponseRecrutement";
import BlogArticle4 from "./pages/blog/GererNoShowFormations";
import BlogArticle5 from "./pages/blog/ReduireCoutSupportTechnique";
import BlogArticle6 from "./pages/blog/AugmenterTauxSignatureNotaire";
import BlogArticle7 from "./pages/blog/OptimiserPlanningDepannage";
import BlogArticle8 from "./pages/blog/ConversionProspectsCourtier";
import BlogArticle9 from "./pages/blog/RelanceContratMaintenance";
import BlogArticle10 from "./pages/blog/QualificationLeadsRenovation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Sector Pages - Professions Juridiques */}
          <Route path="/secteurs/avocats" element={<AvocatsPage />} />
          <Route path="/secteurs/experts-comptables" element={<ExpertsComptablesPage />} />
          <Route path="/secteurs/notaires" element={<NotairesPage />} />
          <Route path="/secteurs/huissiers-justice" element={<HuissiersPage />} />

          {/* Sector Pages - Services Financiers */}
          <Route path="/secteurs/recouvrement-creances" element={<RecouvrementPage />} />
          <Route path="/secteurs/courtage-assurance" element={<CourtageAssurancePage />} />
          <Route path="/secteurs/courtage-credit" element={<CourtageCreditPage />} />

          {/* Sector Pages - Services Urgence/Domicile */}
          <Route path="/secteurs/depannage-domicile" element={<DepannagePage />} />
          <Route path="/secteurs/chauffage-climatisation" element={<ChauffageClimatisationPage />} />
          <Route path="/secteurs/renovation" element={<RenovationPage />} />
          <Route path="/secteurs/securite-alarmes" element={<SecuritePage />} />

          {/* Sector Pages - Services B2B */}
          <Route path="/secteurs/recrutement" element={<RecrutementPage />} />
          <Route path="/secteurs/interim" element={<InterimPage />} />
          <Route path="/secteurs/formation-professionnelle" element={<FormationPage />} />
          <Route path="/secteurs/services-informatiques" element={<ServicesInformatiquesPage />} />

          {/* Blog Pages */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/reduire-temps-attente-avocat" element={<BlogArticle1 />} />
          <Route path="/blog/automatiser-relance-factures" element={<BlogArticle2 />} />
          <Route path="/blog/ameliorer-taux-reponse-recrutement" element={<BlogArticle3 />} />
          <Route path="/blog/gerer-no-show-formations" element={<BlogArticle4 />} />
          <Route path="/blog/reduire-cout-support-technique" element={<BlogArticle5 />} />
          <Route path="/blog/augmenter-taux-signature-notaire" element={<BlogArticle6 />} />
          <Route path="/blog/optimiser-planning-depannage" element={<BlogArticle7 />} />
          <Route path="/blog/conversion-prospects-courtier" element={<BlogArticle8 />} />
          <Route path="/blog/relance-contrat-maintenance" element={<BlogArticle9 />} />
          <Route path="/blog/qualification-leads-renovation" element={<BlogArticle10 />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
