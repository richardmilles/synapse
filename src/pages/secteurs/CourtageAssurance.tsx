import { useEffect } from "react";
import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Footer } from "@/components/sections/Footer";

// Composants uniques Assurance (NOUVEAUX Phase 3)
import { AssuranceHeroVisuel } from "@/components/secteurs/assurance/AssuranceHeroVisuel";
import { AssuranceComparatifVisuel } from "@/components/secteurs/assurance/AssuranceComparatifVisuel";
import { AssuranceCalculateurRenouvellements } from "@/components/secteurs/assurance/AssuranceCalculateurRenouvellements";

// Composants génériques
import { SectorPainPoints } from "@/components/sectors/SectorPainPoints";
import { SectorSolution } from "@/components/sectors/SectorSolution";
import { SectorStats } from "@/components/sectors/SectorStats";
import { SectorFAQ } from "@/components/sectors/SectorFAQ";
import { SectorCTA } from "@/components/sectors/SectorCTA";

import { Umbrella, FileCheck, Repeat, FileSpreadsheet, ShieldAlert, Phone, Clock, Coins } from "lucide-react";

const CourtageAssurancePage = () => {
    useEffect(() => {
        document.title = "Assistant IA pour Courtiers en Assurance | Synapse";
    }, []);

    const painPointsData = {
        sectorName: "Courtage Assurance",
        headline: "La fidélité client ne tient qu'à un fil",
        subheadline: "Un client qui trouve moins cher ailleurs part sans prévenir. Le manque de proactivité dans les renouvellements vous coûte 15% de votre portefeuille chaque année.",
        painPoints: [
            {
                icon: Repeat,
                title: "Résiliation loi Hamon",
                description: "Vos clients changent d'assureur en un clic. Si vous n'êtes pas le premier à proposer mieux, vous êtes le dernier informé.",
                stat: "15% taux de chute an",
            },
            {
                icon: FileSpreadsheet,
                title: "Comparatifs chronophages",
                description: "Monter 3 devis comparatifs pour une RC Pro demande 45mn. Le faire pour chaque prospect est impossible.",
            },
            {
                icon: ShieldAlert,
                title: "Sinistres mal gérés",
                description: "La prise de déclaration de sinistre est longue et anxiogène. Un client mal accompagné à ce moment-là est un client perdu.",
            },
            {
                icon: Clock,
                title: "Injoignabilité",
                description: "Vos clients appellent quand ils ont un problème (soir/we). Votre agence est fermée.",
            },
        ],
    };

    const solutionData = {
        sectorName: "Courtage Assurance",
        headline: "Le courtier qui devance les besoins",
        subheadline: "Comparaison, renouvellement et gestion de sinistre automatisés.",
        features: [
            {
                icon: FileCheck,
                title: "Comparateur IA instantané",
                description: "Pour chaque prospect, l'IA interroge vos partenaires via API et génère un tableau comparatif top-3 en 2 minutes.",
            },
            {
                icon: Repeat,
                title: "Renouvellement proactif",
                description: "30 jours avant l'échéance, l'IA vérifie si le tarif augmente. Si oui, elle appelle le client avec une offre concurrente déjà prête.",
            },
            {
                icon: Phone,
                title: "Prise de sinistre 24/7",
                description: "L'IA rassure le client, collecte les circonstances, les photos et ouvre le dossier chez la compagnie.",
            },
            {
                icon: Coins,
                title: "Vente additionnelle",
                description: "Analyse du portefeuille pour détecter les manques (ex: 'Vous avez l'auto mais pas l'habitation') et proposer des bundles.",
            },
        ],
        dialogExample: {
            context: "Appel sortant - Anticipation hausse tarifaire",
            exchanges: [
                { role: "agent" as const, text: "Bonjour Madame Martin, c'est votre Cabinet d'Assurance. Je vous appelle car votre contrat Auto va augmenter de 12% le mois prochain." },
                { role: "client" as const, text: "Quoi ? Encore ? Je vais résilier dans ce cas !" },
                { role: "agent" as const, text: "C'est justement pour éviter ça que je vous appelle. J'ai comparé pour vous : Allianz propose les mêmes garanties pour 150€ de moins par an. Souhaitez-vous basculer ?" },
                { role: "client" as const, text: "Ah oui, si c'est les mêmes garanties, c'est super." },
                { role: "agent" as const, text: "Parfait. Je vous envoie la proposition par mail pour signature électronique. On s'occupe de la résiliation de l'ancien contrat." },
            ],
        },
    };

    const statsData = {
        sectorName: "Courtage Assurance",
        stats: [
            { value: "-50%", label: "taux de chute portefeuille", highlight: true },
            { value: "x2", label: "taux transformation devis" },
            { value: "24/7", label: "déclaration sinistres" },
        ],
    };

    const faqData = {
        sectorName: "Courtage Assurance",
        faqs: [
            {
                question: "L'IA est-elle certifiée ORIAS ?",
                answer: "L'IA agit comme un outil d'aide à la vente sous votre responsabilité. Elle ne donne pas de conseil mais présente des faits et des offres standardisées.",
            },
            {
                question: "Avec quelles compagnies ça marche ?",
                answer: "Nous nous connectons aux extranets ou API des principales compagnies (AXA, Allianz, Generali...) pour récupérer les tarifs.",
            },
            {
                question: "Peut-elle gérer les résiliations ?",
                answer: "Oui, elle peut générer et envoyer les lettres recommandées de résiliation automatiquement après signature du nouveau contrat.",
            },
        ],
    };

    const ctaData = {
        sectorName: "Courtage Assurance",
        headline: "Blindez votre portefeuille",
        subheadline: "Ne laissez plus aucun client partir à la concurrence par manque de suivi.",
        trustIndicators: ["Compatible EDI", "Conforme DDA", "ROI > x10"],
        ctaText: "Voir le comparateur IA",
    };

    return (
        <div className="relative min-h-screen bg-background overflow-x-hidden">
            <NeuralBackground />
            <Header />

            <main className="relative z-10">
                <AssuranceHeroVisuel />
                <SectorPainPoints {...painPointsData} />
                <SectorSolution {...solutionData} />
                <AssuranceComparatifVisuel />
                <AssuranceCalculateurRenouvellements />
                <SectorStats {...statsData} />
                <SectorFAQ {...faqData} />
                <SectorCTA {...ctaData} />
            </main>

            <Footer />
        </div>
    );
};

export default CourtageAssurancePage;
