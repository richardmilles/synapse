import { useEffect } from "react";
import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Footer } from "@/components/sections/Footer";

// Composants uniques Chauffage (NOUVEAUX)
import { ChauffageHeroVisuel } from "@/components/secteurs/chauffage/ChauffageHeroVisuel";
import { ChauffageSaisonnalite } from "@/components/secteurs/chauffage/ChauffageSaisonnalite";
import { ChauffageCalculateurContrats } from "@/components/secteurs/chauffage/ChauffageCalculateurContrats";

// Composants génériques (ANCIENS)
import { SectorPainPoints } from "@/components/sectors/SectorPainPoints";
import { SectorSolution } from "@/components/sectors/SectorSolution";
import { SectorStats } from "@/components/sectors/SectorStats";
import { SectorFAQ } from "@/components/sectors/SectorFAQ";
import { SectorCTA } from "@/components/sectors/SectorCTA";

import { Phone, Clock, Thermometer, Snowflake, Sun, Calendar, Wrench, Users, Headphones, Zap } from "lucide-react";

const ChauffageClimatisationPage = () => {
    useEffect(() => {
        document.title = "Agent Vocal IA pour Chauffage & Climatisation | Synapse";
    }, []);

    const painPointsData = {
        sectorName: "Chauffage & Climatisation",
        headline: "La saisonnalité, votre pire ennemi",
        subheadline: "Décembre = standard explosé. Juillet = idem. Le reste de l'année, vous préparez la prochaine vague.",
        painPoints: [
            {
                icon: Thermometer,
                title: "+400% d'appels en hiver",
                description: "La chaudière tombe en panne le jour le plus froid. Tous les clients appellent en même temps.",
                stat: "Décembre-Janvier : +400%",
            },
            {
                icon: Snowflake,
                title: "+350% en été",
                description: "Première canicule = explosion des demandes de clim. Impossible de suivre sans renfort.",
                stat: "Juin-Août : +350%",
            },
            {
                icon: Clock,
                title: "Délai > 4h = client perdu",
                description: "En pleine panne, le client appelle tous les chauffagistes. Le premier qui rappelle gagne.",
                stat: "Délai max toléré : 4h",
            },
            {
                icon: Users,
                title: "Équipes en intervention",
                description: "Vos techniciens sont sur les toits et dans les caves. Qui répond au téléphone ?",
            },
        ],
    };

    const solutionData = {
        sectorName: "Chauffage & Climatisation",
        headline: "Votre agent IA spécialiste climat",
        subheadline: "Gestion des pics sans embauche temporaire, qualification technique automatique.",
        features: [
            {
                icon: Zap,
                title: "Absorption des pics saisonniers",
                description: "Passez de 20 à 200 appels/jour sans recruter. L'IA absorbe 100% du volume.",
            },
            {
                icon: Wrench,
                title: "Qualification panne vs installation",
                description: "L'agent différencie l'urgence (panne chauffage) de l'installation planifiable (nouvelle clim).",
            },
            {
                icon: Calendar,
                title: "Prise RDV diagnostic",
                description: "Créneaux automatiques selon le type d'intervention et la zone géographique.",
            },
            {
                icon: Headphones,
                title: "Pré-devis indicatif",
                description: "Estimation de prix selon surface, type d'équipement et complexité annoncée.",
            },
        ],
        dialogExample: {
            context: "Appel entrant le 15 décembre à 7h30",
            exchanges: [
                { role: "agent" as const, text: "Thermoconfort, bonjour ! Je suis l'assistant technique. Comment puis-je vous aider ?" },
                { role: "client" as const, text: "Ma chaudière ne démarre plus ce matin, il fait 12°C dans la maison !" },
                { role: "agent" as const, text: "Je comprends l'urgence avec ce froid. Quel est le type de votre chaudière : gaz, fioul ou électrique ?" },
                { role: "client" as const, text: "C'est une chaudière gaz, elle doit avoir 8 ans." },
                { role: "agent" as const, text: "Avez-vous vérifié si le voyant d'erreur s'affiche sur le panneau de la chaudière ? Parfois un simple reset suffit." },
                { role: "client" as const, text: "Oui j'ai essayé, il y a un code E03 qui clignote." },
                { role: "agent" as const, text: "Code E03 suggère un problème d'allumage. Nous avons un technicien disponible dans votre secteur ce matin. L'intervention urgence est à 95€ déplacement + diagnostic. Un créneau entre 9h et 11h vous convient ?" },
            ],
        },
    };

    const statsData = {
        sectorName: "Chauffage & Climatisation",
        stats: [
            { value: "+400%", label: "d'appels en Décembre-Janvier", highlight: true },
            { value: "+350%", label: "d'appels en Juin-Août" },
            { value: "4h", label: "délai max avant perte du client" },
        ],
    };

    const faqData = {
        sectorName: "Chauffage & Climatisation",
        faqs: [
            {
                question: "L'IA peut-elle aider au diagnostic à distance ?",
                answer: "Oui, l'agent peut poser des questions techniques de base : code erreur, type d'équipement, symptômes observés. Cela permet de pré-qualifier l'intervention et d'envoyer le bon technicien avec les bonnes pièces.",
            },
            {
                question: "Comment gérer les zones d'intervention ?",
                answer: "Vous définissez les zones de couverture par technicien. L'IA géolocalise le client et propose uniquement les créneaux des techniciens couvrant sa zone.",
            },
            {
                question: "Peut-on différencier maintenance et dépannage ?",
                answer: "Absolument. L'agent route les demandes de contrat d'entretien vers votre équipe commerciale et les pannes vers le planning techniciens. Chaque flux a son propre parcours.",
            },
            {
                question: "Comment gérer les demandes de devis installation ?",
                answer: "L'IA collecte les informations clés (surface, type de logement, budget approximatif) et planifie une visite technique. Vous recevez un dossier pré-qualifié.",
            },
        ],
    };

    const ctaData = {
        sectorName: "Chauffage & Climatisation",
        headline: "Prêt à absorber vos pics saisonniers ?",
        subheadline: "Ne perdez plus de clients faute de pouvoir décrocher. Notre agent IA gère 100% de vos appels, même en pleine vague de froid.",
        trustIndicators: ["Gestion pics", "Diagnostic IA", "Mise en place 48h"],
        ctaText: "Demander ma démo gratuite",
    };

    return (
        <div className="relative min-h-screen bg-background overflow-x-hidden">
            <NeuralBackground />
            <Header />

            <main className="relative z-10">
                {/* NOUVEAU Hero unique */}
                <ChauffageHeroVisuel />

                {/* ANCIENS composants génériques */}
                <SectorPainPoints {...painPointsData} />
                <SectorSolution {...solutionData} />

                {/* NOUVEAUX composants visuels uniques */}
                <ChauffageSaisonnalite />
                <ChauffageCalculateurContrats />

                {/* ANCIENS composants génériques */}
                <SectorStats {...statsData} />
                <SectorFAQ {...faqData} />
                <SectorCTA {...ctaData} />
            </main>

            <Footer />
        </div>
    );
};

export default ChauffageClimatisationPage;
