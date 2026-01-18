import { useEffect } from "react";
import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Footer } from "@/components/sections/Footer";

// Composants uniques Recouvrement (NOUVEAUX Phase 3)
import { RecouvrementHeroVisuel } from "@/components/secteurs/recouvrement/RecouvrementHeroVisuel";
import { RecouvrementTimelineRelance } from "@/components/secteurs/recouvrement/RecouvrementTimelineRelance";
import { RecouvrementCalculateurCreances } from "@/components/secteurs/recouvrement/RecouvrementCalculateurCreances";

// Composants génériques
import { SectorPainPoints } from "@/components/sectors/SectorPainPoints";
import { SectorSolution } from "@/components/sectors/SectorSolution";
import { SectorStats } from "@/components/sectors/SectorStats";
import { SectorFAQ } from "@/components/sectors/SectorFAQ";
import { SectorCTA } from "@/components/sectors/SectorCTA";

import { HandCoins, Phone, Clock, FileWarning, ShieldCheck, Scale, TrendingUp, MessageCircle } from "lucide-react";

const RecouvrementPage = () => {
    useEffect(() => {
        document.title = "Agent Vocal pour Recouvrement de Créances | Synapse";
    }, []);

    const painPointsData = {
        sectorName: "Recouvrement",
        headline: "Les factures s'empilent, le cash disparaît",
        subheadline: "Chaque jour qui passe transforme une créance en perte sèche. La relance manuelle est trop lente et coûteuse.",
        painPoints: [
            {
                icon: Clock,
                title: "Délais de paiement explosifs",
                description: "Vos clients jouent la montre. Sans relance systématique à J+1, ils payent celui qui crie le plus fort.",
                stat: "DSO moyen 72 jours",
            },
            {
                icon: Phone,
                title: "Joignabilité faible",
                description: "Le débiteur ne répond pas aux numéros inconnus ou raccroche. Vos gestionnaires perdent 80% de leur temps en appels muets.",
            },
            {
                icon: FileWarning,
                title: "Promesses non tenues",
                description: "'Je fais le virement demain'... et rien n'arrrive. Le suivi de ces fausses promesses est un enfer administratif.",
            },
            {
                icon: HandCoins,
                title: "Coût de traitement élevé",
                description: "Relancer une facture de 200€ coûte plus cher en temps humain que la marge qu'elle génère.",
            },
        ],
    };

    const solutionData = {
        sectorName: "Recouvrement",
        headline: "Le négociateur qui ne lâche rien",
        subheadline: "Relance amiable, ferme et systématique pour sécuriser votre trésorerie.",
        features: [
            {
                icon: Phone,
                title: "Relance J+1 Systématique",
                description: "Dès l'échéance dépassée, l'IA appelle. Pas d'oubli, pas de sentiment, juste de la rigueur.",
            },
            {
                icon: Scale,
                title: "Négociation Plan Paiement",
                description: "L'IA peut valider un échelonnement selon vos règles : 'OK pour 3 fois, mais 1er versement de 50% ce soir'.",
            },
            {
                icon: MessageCircle,
                title: "Détection Promesse",
                description: "L'IA comprend 'Je paye demain' et programme automatiquement un rappel à J+2 pour vérifier l'encaissement.",
            },
            {
                icon: ShieldCheck,
                title: "Préservation Relation",
                description: "Un ton professionnel et courtois qui sépare le litige du commercial. Le client paye et reste client.",
            },
        ],
        dialogExample: {
            context: "Appel sortant - Retard paiement 15 jours",
            exchanges: [
                { role: "agent" as const, text: "Bonjour, ici le service comptable de la société BatiPro. Je constate que la facture F2024-89 de 1500€ est toujours en attente." },
                { role: "client" as const, text: "Ah oui, désolé, problème de trésorerie en ce moment. Je peux payer le mois prochain ?" },
                { role: "agent" as const, text: "Je comprends. Cependant nous ne pouvons pas attendre un mois entier. Je peut vous proposer un règlement en deux fois : 750€ aujourd'hui et 750€ dans 15 jours. Cela vous convient-il ?" },
                { role: "client" as const, text: "Oui ça devrait aller pour la moitié aujourd'hui." },
                { role: "agent" as const, text: "Parfait. Je vous envoie le lien de paiement sécurisé par SMS pour les premiers 750€. Je note le solde pour le 15. Merci de votre coopération." },
            ],
        },
    };

    const statsData = {
        sectorName: "Recouvrement",
        stats: [
            { value: "-30%", label: "baisse du DSO (délai paiement)", highlight: true },
            { value: "98%", label: "taux contact débiteurs" },
            { value: "x5", label: "capacité de relance / jour" },
        ],
    };

    const faqData = {
        sectorName: "Recouvrement",
        faqs: [
            {
                question: "Est-ce légal de faire appeler un robot ?",
                answer: "Oui, tant que l'IA s'identifie clairement et respecte les fréquences d'appel légales (pas de harcèlement). Synapse est configuré pour respecter strictement la loi.",
            },
            {
                question: "Peut-on personnaliser le ton ?",
                answer: "Oui. 'Amiable' pour les clients fidèles (oubli), 'Ferme' pour les mauvais payeurs récidivistes. Vous choisissez la stratégie par segment.",
            },
            {
                question: "Que se passe-t-il si le client conteste la facture ?",
                answer: "L'IA qualifie le litige ('erreur prix', 'marchandise non reçue'), met le dossier en 'Litige' dans votre CRM et notifie un humain pour résolution.",
            },
            {
                question: "Comment ça s'intègre à mon logiciel compta ?",
                answer: "Via API ou export CSV simple. Nous récupérons la liste des échus et renvoyons les statuts (Promesse, Payé, Litige) quotidiennement.",
            },
        ],
    };

    const ctaData = {
        sectorName: "Recouvrement",
        headline: "Arrêtez de faire la banque pour vos clients",
        subheadline: "Automatisez le recouvrement et récupérez votre cash plus vite.",
        trustIndicators: ["Paiement sécurisé", "Respect éthique", "Cash immédiat"],
        ctaText: "Calculer mon gain de trésorerie",
    };

    return (
        <div className="relative min-h-screen bg-background overflow-x-hidden">
            <NeuralBackground />
            <Header />

            <main className="relative z-10">
                <RecouvrementHeroVisuel />
                <SectorPainPoints {...painPointsData} />
                <SectorSolution {...solutionData} />
                <RecouvrementTimelineRelance />
                <RecouvrementCalculateurCreances />
                <SectorStats {...statsData} />
                <SectorFAQ {...faqData} />
                <SectorCTA {...ctaData} />
            </main>

            <Footer />
        </div>
    );
};

export default RecouvrementPage;
