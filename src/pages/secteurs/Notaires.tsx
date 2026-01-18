import { useEffect } from "react";
import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Footer } from "@/components/sections/Footer";

// Composants uniques Notaires (NOUVEAUX Phase 3)
import { NotairesHeroVisuel } from "@/components/secteurs/notaires/NotairesHeroVisuel";
import { NotairesTimelineActe } from "@/components/secteurs/notaires/NotairesTimelineActe";
import { NotairesCalculateurDossiers } from "@/components/secteurs/notaires/NotairesCalculateurDossiers";

// Composants génériques
import { SectorPainPoints } from "@/components/sectors/SectorPainPoints";
import { SectorSolution } from "@/components/sectors/SectorSolution";
import { SectorStats } from "@/components/sectors/SectorStats";
import { SectorFAQ } from "@/components/sectors/SectorFAQ";
import { SectorCTA } from "@/components/sectors/SectorCTA";

import { Scale, FileText, Clock, Phone, Shield, FileCheck, Landmark, MessageSquare } from "lucide-react";

const NotairesPage = () => {
    useEffect(() => {
        document.title = "Standard IA pour Notaires & Offices | Synapse";
    }, []);

    const painPointsData = {
        sectorName: "Notaires & Offices",
        headline: "Le temps de vos clercs est précieux",
        subheadline: "Passer des heures à relancer des clients pour des pièces manquantes ou à filtrer les appels n'est pas rentable.",
        painPoints: [
            {
                icon: Phone,
                title: "Standard inondé",
                description: "Appels incessants pour des questions simples ('où en est mon dossier ?') qui interrompent la rédaction d'actes.",
                stat: "40% appels non qualifiés",
            },
            {
                icon: FileText,
                title: "Dossiers incomplets",
                description: "Relancer 5 fois par email pour obtenir un état civil ou un RIB bloque l'avancement des signatures.",
                stat: "7 jours de retard moyen",
            },
            {
                icon: Clock,
                title: "Agenda complexe",
                description: "Trouver un créneau de signature qui convient à toutes les parties et au notaire est un casse-tête.",
            },
            {
                icon: MessageSquare,
                title: "Démarchage abusif",
                description: "Vos lignes sont polluées par des appels commerciaux qui font perdre du temps au secrétariat.",
            },
        ],
    };

    const solutionData = {
        sectorName: "Notaires & Offices",
        headline: "Le secrétariat notarial du futur",
        subheadline: "Filtrage intelligent, constitution de dossiers et prise de rendez-vous automatisée.",
        features: [
            {
                icon: Shield,
                title: "Filtrage appels & Démarchage",
                description: "L'IA identifie l'objet de l'appel. Si c'est un client, elle transfère ou renseigne. Si c'est du démarchage, elle bloque.",
            },
            {
                icon: FileCheck,
                title: "Relance pièces automatique",
                description: "Campagnes d'appels sortants pour réclamer les pièces manquantes avant la date butoir.",
            },
            {
                icon: Landmark,
                title: "Prise de RDV Signature",
                description: "Synchronisation avec l'agenda de l'étude pour proposer des créneaux de signature adaptés aux parties.",
            },
            {
                icon: MessageSquare,
                title: "Réponses juridiques simples",
                description: "Information immédiate sur les coûts, les délais ou les procédures standard (succession, vente).",
            },
        ],
        dialogExample: {
            context: "Appel entrant - Demande avancement dossier",
            exchanges: [
                { role: "agent" as const, text: "Étude Maître Durand, bonjour. Je suis l'assistant virtuel. Quel est l'objet de votre appel ?" },
                { role: "client" as const, text: "Bonjour, M. Martin. Je voulais savoir si vous avez bien reçu le virement pour la vente de vendredi." },
                { role: "agent" as const, text: "Bonjour Monsieur Martin. Un instant, je vérifie votre dossier de vente Rue des Lilas. ... Oui, le virement est bien arrivé ce matin." },
                { role: "client" as const, text: "Ah super. Et l'heure du rendez-vous c'est bien 14h ?" },
                { role: "agent" as const, text: "Tout à fait. Vendredi 14h à l'étude. N'oubliez pas vos pièces d'identité originales. Avez-vous d'autres questions ?" },
                { role: "client" as const, text: "Non c'est tout, merci." },
                { role: "agent" as const, text: "Je vous en prie. À vendredi." },
            ],
        },
    };

    const statsData = {
        sectorName: "Notaires & Offices",
        stats: [
            { value: "0", label: "appel commercial transmis au clerc", highlight: true },
            { value: "-20%", label: "délai moyen signature" },
            { value: "24/7", label: "accueil téléphonique étude" },
        ],
    };

    const faqData = {
        sectorName: "Notaires & Offices",
        faqs: [
            {
                question: "L'IA respecte-t-elle le secret professionnel ?",
                answer: "Absolument. Toutes les conversations sont sécurisées, chiffrées, et l'IA ne divulgue aucune information confidentielle sans authentification préalable du client.",
            },
            {
                question: "Peut-elle accéder à notre logiciel de rédaction d'actes ?",
                answer: "Nous pouvons nous interfacer avec les principaux logiciels métier (Genapi, Fiducial...) pour lire l'état d'un dossier ou agenda, sous votre contrôle strict.",
            },
            {
                question: "Comment gère-t-elle les situations délicates (décès, divorce) ?",
                answer: "L'IA détecte l'émotion et les mots-clés sensibles. Elle adopte un ton sobre et empathique, et transfère immédiatement vers un humain si nécessaire.",
            },
            {
                question: "Est-ce compatible avec le standard existant ?",
                answer: "Oui, Synapse s'installe en 'surcouche' ou en débordement de votre standard actuel sans changer vos numéros.",
            },
        ],
    };

    const ctaData = {
        sectorName: "Notaires & Offices",
        headline: "Modernisez votre étude notariale",
        subheadline: "Offrez un service 24/7 à vos clients tout en protégeant le temps de concentration de vos clercs.",
        trustIndicators: ["Conforme RGPD", "Secret pro", "Installation fluide"],
        ctaText: "Découvrir le standard notarial",
    };

    return (
        <div className="relative min-h-screen bg-background overflow-x-hidden">
            <NeuralBackground />
            <Header />

            <main className="relative z-10">
                <NotairesHeroVisuel />
                <SectorPainPoints {...painPointsData} />
                <SectorSolution {...solutionData} />
                <NotairesTimelineActe />
                <NotairesCalculateurDossiers />
                <SectorStats {...statsData} />
                <SectorFAQ {...faqData} />
                <SectorCTA {...ctaData} />
            </main>

            <Footer />
        </div>
    );
};

export default NotairesPage;
