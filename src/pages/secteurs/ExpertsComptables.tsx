import { useEffect } from "react";
import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Footer } from "@/components/sections/Footer";

// Composants uniques Experts-Comptables (NOUVEAUX)
import { ExpertsComptablesHeroVisuel } from "@/components/secteurs/experts-comptables/ExpertsComptablesHeroVisuel";
import { ExpertsComptablesCalendrierPics } from "@/components/secteurs/experts-comptables/ExpertsComptablesCalendrierPics";
import { ExpertsComptablesSimulateurClients } from "@/components/secteurs/experts-comptables/ExpertsComptablesSimulateurClients";

// Composants génériques (ANCIENS - ON GARDE)
import { SectorPainPoints } from "@/components/sectors/SectorPainPoints";
import { SectorSolution } from "@/components/sectors/SectorSolution";
import { SectorStats } from "@/components/sectors/SectorStats";
import { SectorFAQ } from "@/components/sectors/SectorFAQ";
import { SectorCTA } from "@/components/sectors/SectorCTA";

import { Phone, Clock, Users, Calendar, FileText, Calculator, Building, TrendingUp, Headphones, Zap } from "lucide-react";

const ExpertsComptablesPage = () => {
    useEffect(() => {
        document.title = "Agent Vocal IA pour Expert-Comptable | Synapse";
    }, []);

    const painPointsData = {
        sectorName: "Experts-Comptables",
        headline: "Les défis de votre cabinet comptable",
        subheadline: "Entre les pics saisonniers et la course à la réactivité, chaque appel manqué coûte une relation client de 10+ ans.",
        painPoints: [
            {
                icon: Calendar,
                title: "Échéances fiscales critiques",
                description: "Vos prospects appellent pour des échéances imminentes : bilan, TVA, liasse fiscale. Le délai de réponse est le premier critère de choix.",
                stat: "Mars-Avril : +300% d'appels",
            },
            {
                icon: Building,
                title: "Créations d'entreprise",
                description: "Le créateur d'entreprise choisit son expert-comptable en quelques heures. Si vous ne répondez pas, votre concurrent le fera.",
                stat: "82% choisissent le 1er contact",
            },
            {
                icon: Clock,
                title: "Pics impossibles à gérer",
                description: "Période fiscale = standard saturé. Vous perdez des prospects qualifiés faute de pouvoir décrocher.",
            },
            {
                icon: Users,
                title: "Secrétariat submergé",
                description: "Votre équipe passe plus de temps à répondre aux demandes basiques qu'à accompagner vos collaborateurs.",
            },
        ],
    };

    const solutionData = {
        sectorName: "Experts-Comptables",
        headline: "Votre assistant virtuel expert-comptable",
        subheadline: "Une IA qui parle comptabilité et qualifie intelligemment chaque prospect.",
        features: [
            {
                icon: Headphones,
                title: "Gestion des pics saisonniers",
                description: "Absorbez les +300% d'appels en période fiscale sans recruter de personnel temporaire.",
            },
            {
                icon: Calculator,
                title: "Qualification business complète",
                description: "Collecte automatique : SIRET, CA estimé, nombre de salariés, régime fiscal, besoins spécifiques.",
            },
            {
                icon: Calendar,
                title: "Prise de RDV intelligente",
                description: "L'IA propose des créneaux selon le type de demande (création = RDV rapide, accompagnement = RDV collaborateur).",
            },
            {
                icon: Zap,
                title: "Réponses instantanées",
                description: "Informations tarifaires, délais moyens, documents à préparer... L'IA répond aux questions courantes.",
            },
        ],
        dialogExample: {
            context: "Appel entrant à 8h30 - Créateur d'entreprise",
            exchanges: [
                { role: "agent" as const, text: "Cabinet Dupont Expertise, bonjour ! Je suis l'assistant du cabinet. Comment puis-je vous aider ?" },
                { role: "client" as const, text: "Bonjour, je crée ma SARL ce mois-ci et je cherche un expert-comptable." },
                { role: "agent" as const, text: "Félicitations pour votre projet ! Pour mieux vous orienter, pouvez-vous m'indiquer le secteur d'activité prévu et le capital de départ ?" },
                { role: "client" as const, text: "Consultant IT, capital de 5000€." },
                { role: "agent" as const, text: "Parfait. Nous accompagnons de nombreux consultants IT. Je vous propose un RDV avec notre associé spécialisé TPE/création. Êtes-vous disponible demain à 10h ou jeudi à 14h ?" },
            ],
        },
    };

    const statsData = {
        sectorName: "Experts-Comptables",
        stats: [
            { value: "82%", label: "des créateurs d'entreprise choisissent le 1er cabinet contacté", highlight: true },
            { value: "+300%", label: "d'appels en période Mars-Avril" },
            { value: "5x", label: "plus de conversions avec réponse < 5min" },
        ],
    };

    const faqData = {
        sectorName: "Experts-Comptables",
        faqs: [
            {
                question: "L'IA peut-elle répondre aux questions techniques comptables ?",
                answer: "L'IA ne donne pas de conseil comptable ou fiscal. Elle qualifie les demandes, collecte les informations nécessaires et oriente vers le bon interlocuteur. Pour les questions fréquentes (tarifs, documents à fournir, délais), elle peut fournir des réponses pré-validées par votre cabinet.",
            },
            {
                question: "Comment gérez-vous les différents types de missions ?",
                answer: "L'agent IA différencie automatiquement : création d'entreprise, tenue comptable, mission de conseil, paie, juridique annuel, etc. Chaque type de mission peut avoir son propre parcours de qualification et son propre agenda de prise de RDV.",
            },
            {
                question: "Peut-on collecter les informations SIRET et documents ?",
                answer: "Oui, l'IA peut demander et enregistrer le numéro SIRET, le régime fiscal, le CA estimé, le nombre de salariés, et même envoyer un lien pour uploader les documents nécessaires au premier RDV.",
            },
            {
                question: "Comment ça se passe en période de déclarations fiscales ?",
                answer: "C'est précisément en période de pic que l'agent IA montre sa valeur. Il absorbe le surplus d'appels, qualifie les urgences vs les demandes standard, et vous permet de vous concentrer sur la production.",
            },
        ],
    };

    const ctaData = {
        sectorName: "Experts-Comptables",
        headline: "Prêt à ne plus perdre de clients en période fiscale ?",
        subheadline: "Découvrez comment notre agent vocal peut gérer vos pics saisonniers et convertir plus de prospects.",
        trustIndicators: ["Qualification SIRET", "Gestion pics saison", "Mise en place 48h"],
        ctaText: "Demander ma démo gratuite",
    };

    return (
        <div className="relative min-h-screen bg-background overflow-x-hidden">
            <NeuralBackground />
            <Header />

            <main className="relative z-10">
                {/* NOUVEAU Hero unique */}
                <ExpertsComptablesHeroVisuel />

                {/* ANCIENS composants génériques */}
                <SectorPainPoints {...painPointsData} />
                <SectorSolution {...solutionData} />

                {/* NOUVEAUX composants visuels uniques */}
                <ExpertsComptablesCalendrierPics />
                <ExpertsComptablesSimulateurClients />

                {/* ANCIENS composants génériques */}
                <SectorStats {...statsData} />
                <SectorFAQ {...faqData} />
                <SectorCTA {...ctaData} />
            </main>

            <Footer />
        </div>
    );
};

export default ExpertsComptablesPage;
