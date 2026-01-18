import { useEffect } from "react";
import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Footer } from "@/components/sections/Footer";

// Composants uniques Huissiers (NOUVEAUX)
import { HuissiersHeroVisuel } from "@/components/secteurs/huissiers/HuissiersHeroVisuel";
import { HuissiersProcessusSignification } from "@/components/secteurs/huissiers/HuissiersProcessusSignification";
import { HuissiersCalculateurDossiers } from "@/components/secteurs/huissiers/HuissiersCalculateurDossiers";

// Composants génériques (ANCIENS)
import { SectorPainPoints } from "@/components/sectors/SectorPainPoints";
import { SectorSolution } from "@/components/sectors/SectorSolution";
import { SectorStats } from "@/components/sectors/SectorStats";
import { SectorFAQ } from "@/components/sectors/SectorFAQ";
import { SectorCTA } from "@/components/sectors/SectorCTA";

import { Phone, Clock, FileText, Scale, Users, Calendar, Headphones, Zap, CheckCircle2, AlertTriangle } from "lucide-react";

const HuissiersPage = () => {
    useEffect(() => {
        document.title = "Agent Vocal IA pour Étude d'Huissier | Synapse";
    }, []);

    const painPointsData = {
        sectorName: "Huissier de Justice",
        headline: "La précision juridique sous contrainte de temps",
        subheadline: "Actes à signifier, constats urgents, exécutions... Chaque retard peut avoir des conséquences légales.",
        painPoints: [
            {
                icon: Clock,
                title: "Délais légaux stricts",
                description: "Un acte non signifié dans les délais peut invalider une procédure. Le temps est un facteur juridique critique.",
                stat: "Délais impératifs",
            },
            {
                icon: FileText,
                title: "Volume de dossiers fluctuant",
                description: "Pics imprévisibles selon les jugements rendus et les dossiers clients. Impossible de calibrer une équipe fixe.",
            },
            {
                icon: Phone,
                title: "Clients anxieux et pressés",
                description: "Vos clients (avocats, créanciers, particuliers) attendent un traitement rapide et un suivi rigoureux.",
            },
            {
                icon: Users,
                title: "Clercs en déplacement",
                description: "Vos collaborateurs sont sur le terrain pour significations et constats. Qui gère le standard ?",
            },
        ],
    };

    const solutionData = {
        sectorName: "Huissier de Justice",
        headline: "Votre secrétariat juridique automatisé",
        subheadline: "Qualification des demandes, planification des actes, suivi rigoureux des dossiers.",
        features: [
            {
                icon: Zap,
                title: "Qualification juridique automatique",
                description: "L'agent identifie le type d'acte (signification, constat, exécution, recouvrement) et oriente vers le clerc compétent.",
            },
            {
                icon: Calendar,
                title: "Planification des déplacements",
                description: "Prise de RDV automatique pour constats et significations selon les disponibilités des clercs et les zones géographiques.",
            },
            {
                icon: FileText,
                title: "Collecte pièces et informations",
                description: "Checklist automatique des documents nécessaires (jugement, contrat, pièces d'identité...) avant traitement.",
            },
            {
                icon: CheckCircle2,
                title: "Suivi et relances clients",
                description: "Rappels automatiques sur l'avancement des dossiers et demande de compléments si besoin.",
            },
        ],
        dialogExample: {
            context: "Appel entrant d'un avocat - Signification urgente",
            exchanges: [
                { role: "agent" as const, text: "Étude Maître Dubois, bonjour. Je suis l'assistante juridique. Comment puis-je vous aider ?" },
                { role: "client" as const, text: "Bonjour, Maître Laurent à l'appareil. J'ai un jugement à faire signifier en urgence." },
                { role: "agent" as const, text: "Entendu Maître. S'agit-il d'une assignation, d'une décision de justice ou d'un autre acte ?" },
                { role: "client" as const, text: "C'est un jugement du Tribunal de Grande Instance, rendu il y a 3 jours." },
                { role: "agent" as const, text: "Très bien. Avez-vous l'adresse actuelle de la personne à signifier ?" },
                { role: "client" as const, text: "Oui, 12 rue Victor Hugo à Nanterre." },
                { role: "agent" as const, text: "Parfait. Nous avons un clerc disponible demain matin dans ce secteur. Pouvez-vous nous transmettre le jugement et la copie de l'assignation par email à contact@etude-dubois.fr ?" },
                { role: "client" as const, text: "Oui, je l'envoie dans l'heure." },
                { role: "agent" as const, text: "Excellent. Dès réception des pièces, la signification sera programmée pour demain entre 9h et 12h. Vous recevrez le procès-verbal sous 48h maximum." },
            ],
        },
    };

    const statsData = {
        sectorName: "Huissier de Justice",
        stats: [
            { value: "48-72h", label: "délai moyen traitement dossier", highlight: true },
            { value: "25%", label: "de dossiers traités en urgence" },
            { value: "100%", label: "de rigueur administrative requise" },
        ],
    };

    const faqData = {
        sectorName: "Huissier de Justice",
        faqs: [
            {
                question: "L'IA peut-elle qualifier les différents types d'actes ?",
                answer: "Oui, l'agent distingue significations, constats, procès-verbaux, exécutions, recouvrements, etc. Chaque type a son parcours spécifique et ses pièces requises.",
            },
            {
                question: "Comment gérer les délais légaux ?",
                answer: "Vous paramétrez les délais critiques par type d'acte. L'IA priorise automatiquement les dossiers urgents et alerte si un délai risque d'être dépassé.",
            },
            {
                question: "Peut-on intégrer avec les logiciels métier d'huissier ?",
                answer: "Oui, nous pouvons nous connecter aux principaux logiciels du secteur pour synchroniser les dossiers, éviter les doubles saisies et assurer un suivi en temps réel.",
            },
            {
                question: "Comment assurer la confidentialité des informations ?",
                answer: "Toutes les données sont chiffrées, l'accès est strictement contrôlé, et nous sommes conformes RGPD. Le secret professionnel de l'huissier est respecté.",
            },
        ],
    };

    const ctaData = {
        sectorName: "Huissier de Justice",
        headline: "Prêt à optimiser votre étude ?",
        subheadline: "Traitez plus de dossiers avec la même équipe. Notre agent IA gère qualifica tion, planification et suivi.",
        trustIndicators: ["Qualification auto", "Conformité RGPD", "Mise en place 48h"],
        ctaText: "Demander ma démo gratuite",
    };

    return (
        <div className="relative min-h-screen bg-background overflow-x-hidden">
            <NeuralBackground />
            <Header />

            <main className="relative z-10">
                {/* NOUVEAU Hero unique */}
                <HuissiersHeroVisuel />

                {/* ANCIENS composants génériques */}
                <SectorPainPoints {...painPointsData} />
                <SectorSolution {...solutionData} />

                {/* NOUVEAUX composants visuels uniques */}
                <HuissiersProcessusSignification />
                <HuissiersCalculateurDossiers />

                {/* ANCIENS composants génériques */}
                <SectorStats {...statsData} />
                <SectorFAQ {...faqData} />
                <SectorCTA {...ctaData} />
            </main>

            <Footer />
        </div>
    );
};

export default HuissiersPage;
