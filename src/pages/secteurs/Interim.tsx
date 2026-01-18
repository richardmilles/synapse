import { useEffect } from "react";
import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Footer } from "@/components/sections/Footer";

// Composants uniques Intérim (NOUVEAUX Phase 3)
import { InterimHeroVisuel } from "@/components/secteurs/interim/InterimHeroVisuel";
import { InterimFunnelCandidats } from "@/components/secteurs/interim/InterimFunnelCandidats";
import { InterimCalculateurAbsences } from "@/components/secteurs/interim/InterimCalculateurAbsences";

// Composants génériques
import { SectorPainPoints } from "@/components/sectors/SectorPainPoints";
import { SectorSolution } from "@/components/sectors/SectorSolution";
import { SectorStats } from "@/components/sectors/SectorStats";
import { SectorFAQ } from "@/components/sectors/SectorFAQ";
import { SectorCTA } from "@/components/sectors/SectorCTA";

import { Clock, Users, Phone, Zap, Briefcase, FileText, CheckCircle2, AlertTriangle } from "lucide-react";

const InterimPage = () => {
    useEffect(() => {
        document.title = "Agent Vocal IA pour Agences d'Intérim | Synapse";
    }, []);

    const painPointsData = {
        sectorName: "Agence d'Intérim",
        headline: "Le cauchemar du 'No-Show' matinal",
        subheadline: "Quand un intérimaire ne se présente pas à 7h, vous avez 15 minutes pour réagir. Sinon, le client est furieux.",
        painPoints: [
            {
                icon: AlertTriangle,
                title: "Absences de dernière minute",
                description: "Le téléphone sonne à 6h50 : 'Je ne peux pas venir'. Votre équipe n'arrive qu'à 8h30. C'est déjà trop tard.",
                stat: "10-15% No-Show",
            },
            {
                icon: Clock,
                title: "Sourcing chronophage",
                description: "Appeler 50 candidats pour une mission urgente prend 2 heures. Avec l'IA, cela prend 5 minutes.",
                stat: "2h gagnées/mission",
            },
            {
                icon: Phone,
                title: "Injoignabilité des candidats",
                description: "Les bons profils sont sollicités partout. Si vous ne les validez pas instantanément, ils partent ailleurs.",
            },
            {
                icon: FileText,
                title: "Administratif lourd",
                description: "Relancer pour les relevés d'heures, les contrats signés, les documents manquants... Une perte de temps immense.",
            },
        ],
    };

    const solutionData = {
        sectorName: "Agence d'Intérim",
        headline: "Votre recruteur IA disponible 24/7",
        subheadline: "Souring, préqualification et gestion des urgences automatisés.",
        features: [
            {
                icon: Zap,
                title: "Gestion des urgences (6h-9h)",
                description: "L'IA gère les appels d'absence, interroge le vivier disponible et propose un remplaçant au client avant votre arrivée.",
            },
            {
                icon: Users,
                title: "Sourcing de masse instantané",
                description: "Besoin de 10 caristes pour demain ? L'IA appelle 200 profils qualifiés en parallèle et vous livre les 10 disponibles.",
            },
            {
                icon: CheckCircle2,
                title: "Mise à jour disponibilité",
                description: "Campagnes d'appels automatiques pour tenir votre base candidats à jour 'Qui est dispo lundi ?'.",
            },
            {
                icon: FileText,
                title: "Relance administrative",
                description: "Rappel automatique pour les relevés d'heures le vendredi et les contrats non signés.",
            },
        ],
        dialogExample: {
            context: "Appel sortant - Recherche urgente Cariste",
            exchanges: [
                { role: "agent" as const, text: "Bonjour Thomas, c'est l'agence Intérim Pro. J'ai une mission urgente de Cariste CACES 3 qui démarre demain à 6h à ZI Nord. C'est payé 14€/h + primes. Es-tu disponible ?" },
                { role: "client" as const, text: "Salut, euh oui je suis dispo. C'est pour combien de temps ?" },
                { role: "agent" as const, text: "C'est une mission longue durée, 3 mois minimum. L'entreprise est LogisTrans. Ça t'intéresse toujours ?" },
                { role: "client" as const, text: "Oui carrément, c'est à côté de chez moi." },
                { role: "agent" as const, text: "Parfait. Je valide ta candidature. Tu vas recevoir un SMS avec l'adresse exacte et le contact sur place. N'oublie pas tes chaussures de sécurité !" },
            ],
        },
    };

    const statsData = {
        sectorName: "Agence d'Intérim",
        stats: [
            { value: "15 min", label: "temps moy. pour trouver un remplaçant", highlight: true },
            { value: "x10", label: "vitesse de sourcing vs humain" },
            { value: "100%", label: "base candidats à jour" },
        ],
    };

    const faqData = {
        sectorName: "Agence d'Intérim",
        faqs: [
            {
                question: "L'IA peut-elle vérifier les compétences (CACES, Permis...) ?",
                answer: "Oui, l'agent pose les questions bloquantes dès le début : 'Avez-vous votre CACES 3 à jour ?'. Si non, il met fin poliment à l'entretien.",
            },
            {
                question: "Est-ce que ça remplace mes recruteurs ?",
                answer: "Non, ça les libère du sourcing répétitif et des appels dans le vide. Ils peuvent se concentrer sur les entretiens qualitatifs et la relation client.",
            },
            {
                question: "Comment réagissent les intérimaires ?",
                answer: "Très bien, car l'IA les appelle pour leur donner du travail ! Ils apprécient la réactivité et le fait de ne pas rater d'opportunité.",
            },
            {
                question: "Peut-on lancer une campagne SMS + Appel ?",
                answer: "Absolument. L'IA peut envoyer un SMS 'Mission Cariste dispo' et appeler uniquement ceux qui répondent 'OUI' pour valider les détails.",
            },
        ],
    };

    const ctaData = {
        sectorName: "Agence d'Intérim",
        headline: "Ne perdez plus de missions faute de temps",
        subheadline: "Automatisez le sourcing et la gestion des urgences. Remplissez 100% de vos commandes.",
        trustIndicators: ["Vivier à jour", "Réactivité 24/7", "ROI immédiat"],
        ctaText: "Voir une démo sourcing",
    };

    return (
        <div className="relative min-h-screen bg-background overflow-x-hidden">
            <NeuralBackground />
            <Header />

            <main className="relative z-10">
                <InterimHeroVisuel />
                <SectorPainPoints {...painPointsData} />
                <SectorSolution {...solutionData} />
                <InterimFunnelCandidats />
                <InterimCalculateurAbsences />
                <SectorStats {...statsData} />
                <SectorFAQ {...faqData} />
                <SectorCTA {...ctaData} />
            </main>

            <Footer />
        </div>
    );
};

export default InterimPage;
