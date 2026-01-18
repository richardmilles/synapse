import { useEffect } from "react";
import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Footer } from "@/components/sections/Footer";

// Composants uniques Informatique (NOUVEAUX Phase 3)
import { InformatiqueHeroVisuel } from "@/components/secteurs/informatique/InformatiqueHeroVisuel";
import { InformatiqueTicketingVisuel } from "@/components/secteurs/informatique/InformatiqueTicketingVisuel";
import { InformatiqueCalculateurTickets } from "@/components/secteurs/informatique/InformatiqueCalculateurTickets";

// Composants génériques
import { SectorPainPoints } from "@/components/sectors/SectorPainPoints";
import { SectorSolution } from "@/components/sectors/SectorSolution";
import { SectorStats } from "@/components/sectors/SectorStats";
import { SectorFAQ } from "@/components/sectors/SectorFAQ";
import { SectorCTA } from "@/components/sectors/SectorCTA";

import { AlertTriangle, Clock, BrainCircuit, ShieldAlert, Terminal, MessageSquare, Wrench, BarChart3 } from "lucide-react";

const ServicesInformatiquesPage = () => {
    useEffect(() => {
        document.title = "Assistant IA pour ESN & MSP | Synapse";
    }, []);

    const painPointsData = {
        sectorName: "ESN & MSP",
        headline: "Le support N1 tue votre rentabilité",
        subheadline: "Vos ingénieurs qualifiés perdent 40% de leur temps sur des tâches répétitives (mdp, imprimantes) au lieu de facturer du projet.",
        painPoints: [
            {
                icon: AlertTriangle,
                title: "Avalanche de tickets",
                description: "Lundi matin, 8h : 50 tickets 'Impossible de se connecter'. Votre équipe est déjà sous l'eau.",
                stat: "70% tickets récurrents",
            },
            {
                icon: Clock,
                title: "SLA non respectés",
                description: "Le temps de réponse s'allonge, les clients s'impatientent, les pénalités tombent.",
            },
            {
                icon: BrainCircuit,
                title: "Burnout technique",
                description: "Vos talents démissionnent car ils font du 'bête et méchant' toute la journée au lieu d'évoluer.",
            },
            {
                icon: ShieldAlert,
                title: "Alertes noyées",
                description: "Les vraies alertes de sécurité sont perdues dans le bruit de fond des demandes utilisateurs banales.",
            },
        ],
    };

    const solutionData = {
        sectorName: "ESN & MSP",
        headline: "Le technicien qui ne dort jamais",
        subheadline: "L'IA prend en charge le premier niveau de support, qualifie, résout et documente.",
        features: [
            {
                icon: MessageSquare,
                title: "Qualification 24/7",
                description: "L'IA décroche instantanément, identifie l'utilisateur, le poste concerné et la nature précise du problème.",
            },
            {
                icon: Terminal,
                title: "Résolution Automatisée",
                description: "Connexion aux API (AD, Office 365, RMM) pour exécuter les scripts de résolution (reset password, unlock account).",
            },
            {
                icon: Wrench,
                title: "Escalade Enrichie",
                description: "Si l'IA ne peut pas résoudre, elle crée un ticket parfait (logs, contexte, tentatives) assigné au bon groupe.",
            },
            {
                icon: BarChart3,
                title: "Base de Connaissance",
                description: "L'IA apprend des résolutions passées et suggère des solutions aux utilisateurs en self-service.",
            },
        ],
        dialogExample: {
            context: "Appel entrant - Compte verrouillé",
            exchanges: [
                { role: "agent" as const, text: "Support Informatique, bonjour. Je suis l'assistant virtuel. Quel est votre problème ?" },
                { role: "client" as const, text: "Je n'arrive plus à me connecter à ma session Windows, ça me dit compte verrouillé." },
                { role: "agent" as const, text: "Je vois. Pouvez-vous me confirmer votre matricule ou adresse email ?" },
                { role: "client" as const, text: "j.dupont@entreprise.com" },
                { role: "agent" as const, text: "Merci. Je vérifie l'état de votre compte dans l'Active Directory... Effectivement, il est verrouillé suite à 3 tentatives échouées. Voulez-vous que je le déverrouille ?" },
                { role: "client" as const, text: "Oui s'il vous plaît." },
                { role: "agent" as const, text: "C'est fait. Vous pouvez retenter de vous connecter dans 10 secondes. Auriez-vous besoin d'autre chose ?" },
            ],
        },
    };

    const statsData = {
        sectorName: "ESN & MSP",
        stats: [
            { value: "-40%", label: "volume tickets traités humains", highlight: true },
            { value: "0s", label: "temps attente téléphonique" },
            { value: "+20%", label: "marge opérationnelle" },
        ],
    };

    const faqData = {
        sectorName: "ESN & MSP",
        faqs: [
            {
                question: "Avec quels outils ITSM est-ce compatible ?",
                answer: "Nous nous connectons nativement à ServiceNow, Jira Service Management, Zendesk, Freshservice et GLPI.",
            },
            {
                question: "L'IA a-t-elle des droits admin ?",
                answer: "Non, elle utilise un compte de service aux droits restreints (principe du moindre privilège) pour exécuter des actions spécifiques via API.",
            },
            {
                question: "Comment gère-t-elle les VIP ?",
                answer: "Elle reconnaît les numéros VIP et peut soit les transférer immédiatement à un humain, soit leur offrir un traitement prioritaire.",
            },
        ],
    };

    const ctaData = {
        sectorName: "ESN & MSP",
        headline: "Passez au support proactif",
        subheadline: "Arrêtez de subir les tickets. Automatisez la routine et concentrez vos experts sur l'innovation.",
        trustIndicators: ["Sécurité ISO 27001", "Hébergement France", "Support Natif"],
        ctaText: "Libérer mon Helpdesk",
    };

    return (
        <div className="relative min-h-screen bg-background overflow-x-hidden">
            <NeuralBackground />
            <Header />

            <main className="relative z-10">
                <InformatiqueHeroVisuel />
                <SectorPainPoints {...painPointsData} />
                <SectorSolution {...solutionData} />
                <InformatiqueTicketingVisuel />
                <InformatiqueCalculateurTickets />
                <SectorStats {...statsData} />
                <SectorFAQ {...faqData} />
                <SectorCTA {...ctaData} />
            </main>

            <Footer />
        </div>
    );
};

export default ServicesInformatiquesPage;
