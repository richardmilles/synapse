import { useEffect } from "react";
import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Footer } from "@/components/sections/Footer";

// Composants uniques Recrutement (NOUVEAUX)
import { RecrutementHeroVisuel } from "@/components/secteurs/recrutement/RecrutementHeroVisuel";
import { RecrutementMatchingVisuel } from "@/components/secteurs/recrutement/RecrutementMatchingVisuel";
import { RecrutementCalculateurMandats } from "@/components/secteurs/recrutement/RecrutementCalculateurMandats";

// Composants génériques (ANCIENS)
import { SectorPainPoints } from "@/components/sectors/SectorPainPoints";
import { SectorSolution } from "@/components/sectors/SectorSolution";
import { SectorStats } from "@/components/sectors/SectorStats";
import { SectorFAQ } from "@/components/sectors/SectorFAQ";
import { SectorCTA } from "@/components/sectors/SectorCTA";

import { Phone, Clock, Users, Target, FileText, Briefcase, Headphones, Zap, TrendingUp } from "lucide-react";

const RecrutementPage = () => {
    useEffect(() => {
        document.title = "Agent Vocal IA pour Cabinet Recrutement | Synapse";
    }, []);

    const painPointsData = {
        sectorName: "Recrutement",
        headline: "Le candidat actif ne vous attendra pas",
        subheadline: "65% des candidats postulent sur 3-5 offres. Le premier cabinet qui rappelle capte le talent.",
        painPoints: [
            {
                icon: Phone,
                title: "Multi-candidature généralisée",
                description: "Chaque candidat postule en parallèle. S'il n'a pas de retour dans l'heure, il avance avec vos concurrents.",
                stat: "3-5 offres par candidat",
            },
            {
                icon: Clock,
                title: "Délai de rappel critique",
                description: "Un candidat actif reçoit 2-3 appels le jour même. Le plus réactif décroche l'exclusivité.",
            },
            {
                icon: Users,
                title: "Qualification chronophage",
                description: "Compétences, expérience, prétentions, mobilité... Qualifier prend 20 minutes minimum.",
            },
            {
                icon: Target,
                title: "Routing consultant complexe",
                description: "IT, finance, industrie... Chaque consultant a sa spécialité. Router manuellement ralentit tout.",
                stat: "5-10 consultants spécialisés",
            },
        ],
    };

    const solutionData = {
        sectorName: "Recrutement",
        headline: "Votre assistant recrutement IA",
        subheadline: "Rappel immédiat, qualification complète, routing intelligent consultant.",
        features: [
            {
                icon: Zap,
                title: "Rappel candidat < 30 min",
                description: "Dès qu'une candidature arrive, l'IA rappelle. Le candidat sent qu'il est prioritaire.",
            },
            {
                icon: Briefcase,
                title: "Qualification multi-critères",
                description: "Compétences techniques, secteur, séniorité, mobilité, prétentions, disponibilité... Tout est collecté.",
            },
            {
                icon: Target,
                title: "Routing consultant auto",
                description: "Selon le profil, l'IA oriente vers le bon consultant spécialisé (IT, finance, RH, industrie...).",
            },
            {
                icon: TrendingUp,
                title: "Matching candidat-poste",
                description: "L'IA compare le profil candidat avec vos postes ouverts et calcule un score de matching.",
            },
        ],
        dialogExample: {
            context: "Rappel 20 min après candidature développeur",
            exchanges: [
                { role: "agent" as const, text: "Bonjour ! Je suis l'assistant de TalentSearch. Vous venez de postuler sur notre offre développeur full stack. Avez-vous quelques minutes ?" },
                { role: "client" as const, text: "Oui, bonjour. Je suis intéressé oui." },
                { role: "agent" as const, text: "Parfait ! Pour mieux vous orienter, pouvez-vous me confirmer vos technologies principales ?" },
                { role: "client" as const, text: "Je suis sur React/Node principalement, et un peu de Python." },
                { role: "agent" as const, text: "Excellent. Combien d'années d'expérience avez-vous sur ces technos ?" },
                { role: "client" as const, text: "5 ans d'XP, dont 3 en lead developer." },
                { role: "agent" as const, text: "Très bien. Êtes-vous en recherche active ou en veille ?" },
                { role: "client" as const, text: "Recherche active, je suis actuellement en préavis." },
                { role: "agent" as const, text: "Compris. Et quelle fourchette salariale visez-vous ?" },
                { role: "client" as const, text: "Entre 55 et 65k selon le projet." },
                { role: "agent" as const, text: "Parfait. Votre profil match à 85% avec l'offre. Je vous mets en relation avec Sophie, notre consultante spécialisée Tech. Elle vous rappelle dans l'heure pour échanger plus en détail." },
            ],
        },
    };

    const statsData = {
        sectorName: "Recrutement",
        stats: [
            { value: "65%", label: "des candidats postulent sur 3-5 offres simultanément", highlight: true },
            { value: "<30min", label: "rappel pour capter les talents actifs" },
            { value: "18%", label: "taux placement moyen (rappel rapide = +40%)" },
        ],
    };

    const faqData = {
        sectorName: "Recrutement",
        faqs: [
            {
                question: "L'IA peut-elle qualifier techniquement les candidats ?",
                answer: "L'agent collecte les informations clés : compétences, expérience, secteur, prétentions, mobilité, disponibilité. Il ne fait pas l'entretien technique mais assure la pré-qualification qui prend habituellement 20 minutes à vos consultants.",
            },
            {
                question: "Comment fonctionne le routing vers les consultants ?",
                answer: "Vous configurez les spécialités de chaque consultant (IT, finance, RH, industrie, etc.). L'IA analyse le profil candidat et route automatiquement vers le bon spécialiste, avec notification immédiate.",
            },
            {
                question: "Peut-on intégrer l'IA avec notre ATS ?",
                answer: "Oui, nous nous intégrons avec la plupart des ATS du marché (Bullhorn, Vincere, Recruitee, etc.). Les informations collectées par l'IA sont automatiquement synchronisées dans votre système.",
            },
            {
                question: "Comment gérer les candidats en veille vs recherche active ?",
                answer: "L'IA identifie le niveau d'urgence et adapte le parcours : les candidats actifs sont prioritaires et transférés immédiatement, les candidats en veille sont ajoutés à votre vivier avec relance programmée.",
            },
        ],
    };

    const ctaData = {
        sectorName: "Recrutement",
        headline: "Prêt à placer 40% de candidats en plus ?",
        subheadline: "Ne laissez plus un talent actif partir chez la concurrence. Rappelez en moins de 30 minutes.",
        trustIndicators: ["Rappel < 30 min", "Matching auto", "Mise en place 48h"],
        ctaText: "Demander ma démo gratuite",
    };

    return (
        <div className="relative min-h-screen bg-background overflow-x-hidden">
            <NeuralBackground />
            <Header />

            <main className="relative z-10">
                {/* NOUVEAU Hero unique */}
                <RecrutementHeroVisuel />

                {/* ANCIENS composants génériques */}
                <SectorPainPoints {...painPointsData} />
                <SectorSolution {...solutionData} />

                {/* NOUVEAUX composants visuels uniques */}
                <RecrutementMatchingVisuel />
                <RecrutementCalculateurMandats />

                {/* ANCIENS composants génériques */}
                <SectorStats {...statsData} />
                <SectorFAQ {...faqData} />
                <SectorCTA {...ctaData} />
            </main>

            <Footer />
        </div>
    );
};

export default RecrutementPage;
