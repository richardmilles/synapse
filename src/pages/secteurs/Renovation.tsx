import { useEffect } from "react";
import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Footer } from "@/components/sections/Footer";

// Composants uniques Rénovation (NOUVEAUX)
import { RenovationHeroVisuel } from "@/components/secteurs/renovation/RenovationHeroVisuel";
import { RenovationFunnelProspects } from "@/components/secteurs/renovation/RenovationFunnelProspects";
import { RenovationEstimateurProjets } from "@/components/secteurs/renovation/RenovationEstimateurProjets";

// Composants génériques (ANCIENS)
import { SectorPainPoints } from "@/components/sectors/SectorPainPoints";
import { SectorSolution } from "@/components/sectors/SectorSolution";
import { SectorStats } from "@/components/sectors/SectorStats";
import { SectorFAQ } from "@/components/sectors/SectorFAQ";
import { SectorCTA } from "@/components/sectors/SectorCTA";

import { Phone, Clock, Calendar, AlertCircle, FileText, Home, Headphones, Zap, CheckCircle2 } from "lucide-react";

const RenovationPage = () => {
    useEffect(() => {
        document.title = "Agent Vocal IA pour Rénovation | Synapse";
    }, []);

    const painPointsData = {
        sectorName: "Rénovation",
        headline: "La rénovation : des prospects chauds qui refroidissent vite",
        subheadline: "Un prospect rénovation est en recherche active. S'il ne vous a pas au téléphone dans l'heure, il contacte 2-3 concurrents.",
        painPoints: [
            {
                icon: Clock,
                title: "60% de RDV si rappel {" < "} 1h",
                description: "Le prospect réno compare. S'il n'a pas de rappel rapide, il passe à un autre artisan.",
                stat: "60% vs 25%",
            },
            {
                icon: Phone,
                title: "Appels pendant chantier",
                description: "Vous êtes sur chantier, impossible de décrocher. Chaque appel manqué = un concurrent qui avance.",
            },
            {
                icon: Calendar,
                title: "Pics de demandes imprévisibles",
                description: "Météo, TV, bouche à oreille... Les pics d'appels sont impossibles à anticiper.",
                stat: "Pics  +200%",
            },
            {
                icon: AlertCircle,
                title: "Qualification chronophage",
                description: "Budget, délais, nature travaux, urgence... Qualifier un projet prend 15-20 minutes.",
            },
        ],
    };

    const solutionData = {
        sectorName: "Rénovation",
        headline: "Votre assistant vocal dédié BTP",
        subheadline: "Qualification automatique, RDV chantier, envoi devis, tout en 15 minutes.",
        features: [
            {
                icon: Zap,
                title: "Rappel immédiat {" < "} 15 min",
                description: "Dès qu'un formulaire arrive, l'IA rappelle. Le prospect est encore motivé.",
            },
            {
                icon: Home,
                title: "Qualification projet complète",
                description: "Type travaux, budget estimé, délais souhaités, urgence... Tout est collecté.",
            },
            {
                icon: Calendar,
                title: "RDV chantier fixé",
                description: "Proposition automatique de créneaux pour visite technique et prise de côtes.",
            },
            {
                icon: FileText,
                title: "Envoi documents",
                description: "Checklist travaux, devis type, book réalisations... Envoyés automatiquement.",
            },
        ],
        dialogExample: {
            context: "Rappel automatique 15 min après formulaire rénovation cuisine",
            exchanges: [
                { role: "agent" as const, text: "Bonjour ! Je suis l'assistant de RénoBTP. Vous nous avez contactés pour un projet de rénovation. C'est bien cela ?" },
                { role: "client" as const, text: "Oui, on souhaite refaire notre cuisine." },
                { role: "agent" as const, text: "Très bien ! Pouvez-vous me préciser : cuisine équipée complète ou juste rafraîchissement ?" },
                { role: "client" as const, text: "Complète, on veut tout changer : meubles, électroménager, carrelage..." },
                { role: "agent" as const, text: "Parfait. Avez-vous une idée du budget que vous souhaitez investir ?" },
                { role: "client" as const, text: "Entre 15 et 20 000€ maximum." },
                { role: "agent" as const, text: "Compris. Et quel est votre délai idéal pour les travaux ?" },
                { role: "client" as const, text: "On aimerait que ce soit fait avant l'été si possible." },
                { role: "agent" as const, text: "Parfait. Je vous propose qu'un de nos chefs de chantier vienne faire une visite technique cette semaine. Êtes-vous disponible jeudi après-midi ou samedi matin ?" },
            ],
        },
    };

    const statsData = {
        sectorName: "Rénovation",
        stats: [
            { value: "60%", label: "de RDV si rappel < 1h, 25% si rappel > 4h", highlight: true },
            { value: "38%", label: "de prospects abandonnent si pas de retour sous 2h" },
            { value: "45k€", label: "panier moyen rénovation complète" },
        ],
    };

    const faqData = {
        sectorName: "Rénovation",
        faqs: [
            {
                question: "L'IA peut-elle qualifier techniquement les projets ?",
                answer: "L'agent collecte les informations clés : type de travaux, surfaces, budget, délais. Il ne fait pas de chiffrage mais oriente vers le bon interlocuteur (cuisine, SDB, extension, etc.).",
            },
            {
                question: "Comment gérer les demandes urgentes (fuite, panne...) ?",
                answer: "L'IA identifie les urgences et les transfère immédiatement à l'artisan de garde ou propose un RDV express sous 24h.",
            },
            {
                question: "Peut-on envoyer un book de réalisations ?",
                answer: "Oui, l'agent peut envoyer automatiquement votre book photos, vos certifications (RGE, Qualibat), et des devis types selon le projet.",
            },
            {
                question: "Comment ça marche avec les différents corps de métier ?",
                answer: "Vous configurez les spécialités (plomberie, électricité, menuiserie, etc.). L'IA oriente vers le bon artisan ou propose un RDV avec le chef de chantier pour coordination.",
            },
        ],
    };

    const ctaData = {
        sectorName: "Rénovation",
        headline: "Prêt à convertir 60% de vos prospects en chantiers ?",
        subheadline: "Ne laissez plus un prospect refroidir. Rappelez en moins de 15 minutes.",
        trustIndicators: ["Rappel < 15 min", "Qualification auto", "Mise en place 48h"],
        ctaText: "Demander ma démo gratuite",
    };

    return (
        <div className="relative min-h-screen bg-background overflow-x-hidden">
            <NeuralBackground />
            <Header />

            <main className="relative z-10">
                {/* NOUVEAU Hero unique */}
                <RenovationHeroVisuel />

                {/* ANCIENS composants génériques */}
                <SectorPainPoints {...painPointsData} />
                <SectorSolution {...solutionData} />

                {/* NOUVEAUX composants visuels uniques */}
                <RenovationFunnelProspects />
                <RenovationEstimateurProjets />

                {/* ANCIENS composants génériques */}
                <SectorStats {...statsData} />
                <SectorFAQ {...faqData} />
                <SectorCTA {...ctaData} />
            </main>

            <Footer />
        </div>
    );
};

export default RenovationPage;
