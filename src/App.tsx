import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Sector Pages - Professions Juridiques
const AvocatsPage = lazy(() => import("./pages/secteurs/Avocats"));
const ExpertsComptablesPage = lazy(() => import("./pages/secteurs/ExpertsComptables"));
const NotairesPage = lazy(() => import("./pages/secteurs/Notaires"));
const HuissiersPage = lazy(() => import("./pages/secteurs/Huissiers"));

// Sector Pages - Services Financiers
const RecouvrementPage = lazy(() => import("./pages/secteurs/Recouvrement"));
const CourtageAssurancePage = lazy(() => import("./pages/secteurs/CourtageAssurance"));
const CourtageCreditPage = lazy(() => import("./pages/secteurs/CourtageCredit"));

// Sector Pages - Services Urgence/Domicile
const DepannagePage = lazy(() => import("./pages/secteurs/Depannage"));
const ChauffageClimatisationPage = lazy(() => import("./pages/secteurs/ChauffageClimatisation"));
const RenovationPage = lazy(() => import("./pages/secteurs/Renovation"));
const SecuritePage = lazy(() => import("./pages/secteurs/Securite"));

// Sector Pages - Services B2B
const RecrutementPage = lazy(() => import("./pages/secteurs/Recrutement"));
const InterimPage = lazy(() => import("./pages/secteurs/Interim"));
const FormationPage = lazy(() => import("./pages/secteurs/Formation"));
const ServicesInformatiquesPage = lazy(() => import("./pages/secteurs/ServicesInformatiques"));

// Blog
const BlogPage = lazy(() => import("./pages/Blog"));
const BlogArticle1 = lazy(() => import("./pages/blog/ReduireTempsAttenteAvocat"));
const BlogArticle2 = lazy(() => import("./pages/blog/AutomatiserRelanceFactures"));
const BlogArticle3 = lazy(() => import("./pages/blog/AmeliorerTauxReponseRecrutement"));
const BlogArticle4 = lazy(() => import("./pages/blog/GererNoShowFormations"));
const BlogArticle5 = lazy(() => import("./pages/blog/ReduireCoutSupportTechnique"));
const BlogArticle6 = lazy(() => import("./pages/blog/AugmenterTauxSignatureNotaire"));
const BlogArticle7 = lazy(() => import("./pages/blog/OptimiserPlanningDepannage"));
const BlogArticle8 = lazy(() => import("./pages/blog/ConversionProspectsCourtier"));
const BlogArticle9 = lazy(() => import("./pages/blog/RelanceContratMaintenance"));
const BlogArticle10 = lazy(() => import("./pages/blog/QualificationLeadsRenovation"));

// Resources
const ResourcesPage = lazy(() => import("./pages/Resources"));
const TransformerClaudeSystemeTravail = lazy(() => import("./pages/resources/TransformerClaudeSystemeTravail"));

const BioHome = lazy(() => import("./pages/bio/BioHome"));
const BioOffers = lazy(() => import("./pages/bio/BioOffers"));
const BioThanks = lazy(() => import("./pages/bio/BioThanks"));
const BioLegal = lazy(() => import("./pages/bio/BioLegal"));
const BioPrivacy = lazy(() => import("./pages/bio/BioPrivacy"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" aria-label="Chargement" />}>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Link in bio */}
          <Route path="/bio" element={<BioHome />} />
          <Route path="/bio/offres" element={<BioOffers />} />
          <Route path="/bio/merci" element={<BioThanks />} />
          <Route path="/bio/mentions-legales" element={<BioLegal />} />
          <Route path="/bio/confidentialite" element={<BioPrivacy />} />

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

          {/* Resources */}
          <Route path="/ressources" element={<ResourcesPage />} />
          <Route path="/ressources/transformer-claude-en-systeme-de-travail" element={<TransformerClaudeSystemeTravail />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
