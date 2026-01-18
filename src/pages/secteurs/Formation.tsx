import { useEffect } from "react";
import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Footer } from "@/components/sections/Footer";

// Composants uniques Formation (NOUVEAUX Phase 3)
import { FormationHeroVisuel } from "@/components/secteurs/formation/FormationHeroVisuel";
import { FormationFunnelInscription } from "@/components/secteurs/formation/FormationFunnelInscription";
import { FormationCalculateurAnnulations } from "@/components/secteurs/formation/FormationCalculateurAnnulations";

// Composants génériques
import { SectorPainPoints } from "@/components/sectors/SectorPainPoints";
import { SectorSolution } from "@/components/sectors/SectorSolution";
import { SectorStats } from "@/components/sectors/SectorStats";
import { SectorFAQ } from "@/components/sectors/SectorFAQ";
import { SectorCTA } from "@/components/sectors/SectorCTA";

import { Users, FileX, CalendarOff, PhoneOff, CheckSquare, GraduationCap, Clock, BellRing } from "lucide-react";

const FormationPage = () => {
    useEffect(() => {
        document.title = "Assistant IA pour Organismes de Formation | Synapse";
    }, []);

    const painPointsData = {
        sectorName: "Formation",
        headline: "Ne laissez pas l'administratif vider vos salles",
        subheadline: "Entre les dossiers CPF incomplets et les annulations de dernière minute, vous perdez 20% de chiffre d'affaires chaque année.",
        painPoints: [
            {
                icon: FileX,
                title: "Dossiers incomplets",
                description: "Les stagiaires abandonnent face à la complexité administrative. Sans relance immédiate, l'inscription est perdue.",
                stat: "40% abandon parcours",
            },
            {
                icon: CalendarOff,
                title: "No-shows coûteux",
                description: "Un stagiaire qui ne vient pas le premier jour est une place perdue pour toute la session.",
            },
            {
                icon: PhoneOff,
                title: "Standard saturé",
                description: "Vos équipes passent leur temps à répondre aux mêmes questions logistiques au lieu de vendre des formations.",
            },
            {
                icon: Users,
                title: "Listes d'attente inactives",
                description: "Vous avez des gens intéressés mais personne pour les rappeler quand une place se libère.",
            },
        ],
    };

    const solutionData = {
        sectorName: "Formation",
        headline: "Le secrétariat pédagogique intelligent",
        subheadline: "Maximisez le remplissage de vos sessions grâce à l'automatisation.",
        features: [
            {
                icon: CheckSquare,
                title: "Qualification & Pré-requis",
                description: "L'IA vérifie le niveau et les critères d'éligibilité du candidat dès le premier contact.",
            },
            {
                icon: GraduationCap,
                title: "Accompagnement CPF/OPCO",
                description: "Guidage pas-à-pas pour le montage du dossier de financement, avec relance automatique des pièces.",
            },
            {
                icon: BellRing,
                title: "Gestion listes d'attente",
                description: "Une place se libère ? L'IA appelle automatiquement la liste d'attente pour combler le vide en 10 minutes.",
            },
            {
                icon: Clock,
                title: "Support Apprenants 24/7",
                description: "Réponse instantanée aux questions horaires, accès, pré-requis, sans déranger vos formateurs.",
            },
        ],
        dialogExample: {
            context: "Appel sortant - Place libérée dernière minute",
            exchanges: [
                { role: "agent" as const, text: "Bonjour, c'est l'Institut Formation Pro. Une place vient de se libérer pour la formation Excel de demain suite à une annulation." },
                { role: "client" as const, text: "Ah ! J'étais sur liste d'attente, c'est ça ?" },
                { role: "agent" as const, text: "Exactement. Vous étiez le prochain. Êtes-vous toujours disponible pour participer ?" },
                { role: "client" as const, text: "Oui, je peux m'arranger avec mon employeur." },
                { role: "agent" as const, text: "Excellent. Je vous envoie la convocation et le lien d'émargement numérique par email immédiatement. Bienvenue dans la session." },
            ],
        },
    };

    const statsData = {
        sectorName: "Formation",
        stats: [
            { value: "0", label: "place vide (objectif)", highlight: true },
            { value: "-60%", label: "charge administrative" },
            { value: "5/5", label: "satisfaction réactivité" },
        ],
    };

    const faqData = {
        sectorName: "Formation",
        faqs: [
            {
                question: "Est-ce compatible avec Qualiopi ?",
                answer: "Oui, Synapse trace tous les échanges, ce qui constitue une preuve de suivi et d'accompagnement pour vos audits Qualiopi.",
            },
            {
                question: "Comment gère-t-elle les financements ?",
                answer: "Elle peut expliquer les différents dispositifs (CPF, Pôle Emploi, OPCO) mais ne se connecte pas à EDOF à votre place (sécurité).",
            },
            {
                question: "Peut-elle faire signer les contrats ?",
                answer: "Oui, elle peut envoyer les liens Docusign/Yousign par SMS/Email après validation téléphonique.",
            },
        ],
    };

    const ctaData = {
        sectorName: "Formation",
        headline: "Remplissez vos sessions à 100%",
        subheadline: "Arrêtez de perdre de l'argent sur des places vides et des dossiers administratifs mal suivis.",
        trustIndicators: ["Compatible Qualiopi", "Gestion CPF", "Remplissage Max"],
        ctaText: "Optimiser mon taux de remplissage",
    };

    return (
        <div className="relative min-h-screen bg-background overflow-x-hidden">
            <NeuralBackground />
            <Header />

            <main className="relative z-10">
                <FormationHeroVisuel />
                <SectorPainPoints {...painPointsData} />
                <SectorSolution {...solutionData} />
                <FormationFunnelInscription />
                <FormationCalculateurAnnulations />
                <SectorStats {...statsData} />
                <SectorFAQ {...faqData} />
                <SectorCTA {...ctaData} />
            </main>

            <Footer />
        </div>
    );
};

export default FormationPage;
