import { useEffect } from "react";
import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Footer } from "@/components/sections/Footer";

// Composants uniques Avocats (NOUVEAUX)
import { AvocatsHeroVisuel } from "@/components/secteurs/avocats/AvocatsHeroVisuel";
import { AvocatsTimelineComparaison } from "@/components/secteurs/avocats/AvocatsTimelineComparaison";
import { AvocatsCalculateurMandats } from "@/components/secteurs/avocats/AvocatsCalculateurMandats";

// Composants génériques (ANCIENS - ON GARDE)
import { SectorPainPoints } from "@/components/sectors/SectorPainPoints";
import { SectorSolution } from "@/components/sectors/SectorSolution";
import { SectorStats } from "@/components/sectors/SectorStats";
import { SectorFAQ } from "@/components/sectors/SectorFAQ";
import { SectorCTA } from "@/components/sectors/SectorCTA";

import { Phone, Clock, Users, AlertTriangle, Calendar, FileText, Scale, Headphones, Zap, Shield } from "lucide-react";

const AvocatsPage = () => {
    useEffect(() => {
        document.title = "Agent Vocal IA pour Avocats | Synapse";
    }, []);

    const painPointsData = {
        sectorName: "Avocats",
        headline: "La réalité de votre cabinet aujourd'hui",
        subheadline: "Chaque appel manqué est un mandat potentiel perdu au profit d'un confrère plus réactif.",
        painPoints: [
            {
                icon: Phone,
                title: "Appels en parallèle",
                description: "Vos prospects contactent 3 à 5 cabinets simultanément. Le premier qui décroche crédiblement remporte le mandat.",
                stat: "3-5 cabinets contactés",
            },
            {
                icon: Clock,
                title: "Appels hors horaires",
                description: "La majorité des prospects appellent en dehors des heures de bureau. Chaque appel manqué est un client qui va chez votre concurrent.",
                stat: "67% des appels hors horaires",
            },
            {
                icon: Users,
                title: "Secrétariat débordé",
                description: "Votre secrétariat passe plus de temps à qualifier les demandes qu'à vous assister sur les dossiers en cours.",
            },
            {
                icon: AlertTriangle,
                title: "Urgences non traitées",
                description: "Les garde à vue, les référés urgents... Ces dossiers à haute valeur arrivent souvent la nuit ou le week-end.",
                stat: "Mandats premium perdus",
            },
        ],
    };

    const solutionData = {
        sectorName: "Avocats",
        headline: "Votre agent vocal dédié aux cabinets d'avocats",
        subheadline: "Une IA formée au jargon juridique qui qualifie, rassure et programme vos rendez-vous.",
        features: [
            {
                icon: Headphones,
                title: "Réponse instantanée 24/7",
                description: "Chaque appel est décroché en moins de 3 secondes, jour et nuit, week-ends et jours fériés.",
            },
            {
                icon: Scale,
                title: "Qualification juridique intelligente",
                description: "L'IA identifie le type d'affaire (pénal, civil, commercial, famille) et le niveau d'urgence.",
            },
            {
                icon: Calendar,
                title: "Prise de RDV directe",
                description: "Synchronisation avec votre agenda pour proposer automatiquement des créneaux disponibles.",
            },
            {
                icon: Zap,
                title: "Transfert des urgences",
                description: "Les garde à vue et urgences sont immédiatement transférées à l'associé de permanence.",
            },
        ],
        dialogExample: {
            context: "Appel entrant à 22h15 - Prospect en situation urgente",
            exchanges: [
                { role: "agent" as const, text: "Cabinet Martin & Associés, je suis l'assistant du cabinet. Comment puis-je vous aider ?" },
                { role: "client" as const, text: "Bonsoir, mon fils vient d'être placé en garde à vue, j'ai besoin d'un avocat de toute urgence." },
                { role: "agent" as const, text: "Je comprends l'urgence de la situation. Je vais immédiatement transférer votre appel à Maître Martin qui est de permanence ce soir. Pouvez-vous me confirmer le commissariat où votre fils est retenu ?" },
                { role: "client" as const, text: "Au commissariat du 15ème arrondissement." },
                { role: "agent" as const, text: "Très bien. Je transfère Maître Martin immédiatement. Elle vous rappelle dans les 2 prochaines minutes." },
            ],
        },
    };

    const statsData = {
        sectorName: "Avocats",
        stats: [
            { value: "78%", label: "des prospects choisissent le premier cabinet qui répond", highlight: true },
            { value: "67%", label: "des appels arrivent en dehors des heures de bureau" },
            { value: "3-5", label: "cabinets contactés en moyenne par un prospect" },
        ],
    };

    const faqData = {
        sectorName: "Avocats",
        faqs: [
            {
                question: "L'agent IA respecte-t-il le secret professionnel ?",
                answer: "Absolument. Notre système est conçu dans le respect strict de la déontologie des avocats. Aucune information n'est stockée sans votre autorisation, et les données sont hébergées en France conformément au RGPD. L'IA ne donne jamais de conseil juridique, elle qualifie et oriente uniquement.",
            },
            {
                question: "Comment l'IA différencie-t-elle les urgences des demandes classiques ?",
                answer: "L'agent est formé à identifier les situations urgentes (garde à vue, référé, expulsion imminente, etc.) grâce à un arbre décisionnel juridique. Les urgences sont immédiatement transférées à l'avocat de permanence selon vos règles.",
            },
            {
                question: "Puis-je personnaliser les questions de qualification ?",
                answer: "Oui, chaque cabinet peut définir ses propres critères de qualification : domaines de compétence, types de clients, zones géographiques, seuils de valeur de dossier, etc.",
            },
            {
                question: "Comment se passe l'intégration avec mon agenda ?",
                answer: "Nous nous intégrons avec la plupart des outils (Google Calendar, Outlook, Calendly, etc.). L'IA propose uniquement les créneaux que vous avez rendus disponibles et respecte vos règles (durée RDV, délai minimum, etc.).",
            },
            {
                question: "Combien de temps pour la mise en place ?",
                answer: "La mise en place prend généralement 48 à 72 heures. Nous configurons l'agent avec votre arborescence de domaines, vos règles de qualification et votre agenda. Un test complet est effectué avant la mise en production.",
            },
        ],
    };

    const ctaData = {
        sectorName: "Avocats",
        headline: "Prêt à ne plus jamais manquer un mandat ?",
        subheadline: "Rejoignez les cabinets qui ont augmenté leur taux de conversion de 40% grâce à notre agent vocal IA.",
        trustIndicators: ["Conforme déontologie", "RGPD France", "Mise en place 48h"],
        ctaText: "Demander ma démo gratuite",
    };

    return (
        <div className="relative min-h-screen bg-background overflow-x-hidden">
            <NeuralBackground />
            <Header />

            <main className="relative z-10">
                {/* NOUVEAU Hero unique */}
                <AvocatsHeroVisuel />

                {/* ANCIENS composants génériques */}
                <SectorPainPoints {...painPointsData} />
                <SectorSolution {...solutionData} />

                {/* NOUVEAUX composants visuels uniques */}
                <AvocatsTimelineComparaison />
                <AvocatsCalculateurMandats />

                {/* ANCIENS composants génériques */}
                <SectorStats {...statsData} />
                <SectorFAQ {...faqData} />
                <SectorCTA {...ctaData} />
            </main>

            <Footer />
        </div>
    );
};

export default AvocatsPage;
