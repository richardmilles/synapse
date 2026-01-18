import { useEffect } from "react";
import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Footer } from "@/components/sections/Footer";

// Composants uniques Sécurité (NOUVEAUX)
import { SecuriteHeroVisuel } from "@/components/secteurs/securite/SecuriteHeroVisuel";
import { SecuriteTimelineIntervention } from "@/components/secteurs/securite/SecuriteTimelineIntervention";
import { SecuriteCalculateurSites } from "@/components/secteurs/securite/SecuriteCalculateurSites";

// Composants génériques (ANCIENS)
import { SectorPainPoints } from "@/components/sectors/SectorPainPoints";
import { SectorSolution } from "@/components/sectors/SectorSolution";
import { SectorStats } from "@/components/sectors/SectorStats";
import { SectorFAQ } from "@/components/sectors/SectorFAQ";
import { SectorCTA } from "@/components/sectors/SectorCTA";

import { Phone, Shield, AlertTriangle, Clock, Lock, Calendar, Camera, Home, Headphones, Zap } from "lucide-react";

const SecuritePage = () => {
    useEffect(() => {
        document.title = "Agent Vocal IA pour Sécurité & Alarmes | Synapse";
    }, []);

    const painPointsData = {
        sectorName: "Sécurité & Alarmes",
        headline: "Vos prospects sont dans la peur",
        subheadline: "Après un cambriolage ou une tentative, le besoin de protection est immédiat et émotionnel.",
        painPoints: [
            {
                icon: AlertTriangle,
                title: "70% post-incident",
                description: "La majoritéde vos prospects appellent après un cambriolage, une tentative ou un événement inquiétant.",
                stat: "70% des demandes",
            },
            {
                icon: Clock,
                title: "Besoin de réponse < 5 min",
                description: "Un prospect anxieux qui n'a pas de réponse immédiate appelle un concurrent. L'attente est insupportable.",
                stat: "5 min max",
            },
            {
                icon: Shield,
                title: "Ton de voix = 65% de la conversion",
                description: "Le prospect a besoin d'être rassuré, pas juste informé. Le ton compte autant que le contenu.",
                stat: "65% taux conversion",
            },
            {
                icon: Phone,
                title: "Concurrence des grandes enseignes",
                description: "Verisure, Securitas Direct... Ils ont des standards 24/7. Vous devez rivaliser.",
            },
        ],
    };

    const solutionData = {
        sectorName: "Sécurité & Alarmes",
        headline: "Votre standard sécurité disponible 24/7",
        subheadline: "Un agent IA au ton rassurant qui qualifie et rassure instantanément.",
        features: [
            {
                icon: Zap,
                title: "Réponse quasi-instantanée",
                description: "Chaque appel décroché en moins de 20 secondes, 24h/24. Aucune attente anxiogène.",
            },
            {
                icon: Shield,
                title: "Ton rassurant et professionnel",
                description: "L'agent est formé pour rassurer, reformuler les inquiétudes et montrer que vous prenez la situation au sérieux.",
            },
            {
                icon: Home,
                title: "Qualification urgence/prévention",
                description: "Différenciation entre le prospect post-incident (urgence) et la démarche préventive (installation planifiée).",
            },
            {
                icon: Calendar,
                title: "Devis et RDV installation",
                description: "Estimation rapide selon le type de bien et prise de RDV pour l'audit de sécurité.",
            },
        ],
        dialogExample: {
            context: "Appel entrant à 23h15 - Post-cambriolage",
            exchanges: [
                { role: "agent" as const, text: "Sécuri-Home, bonsoir. Je suis l'assistant sécurité. Comment puis-je vous aider ?" },
                { role: "client" as const, text: "Bonsoir... On s'est fait cambrioler ce soir pendant notre absence. Je veux faire installer une alarme au plus vite." },
                { role: "agent" as const, text: "Je suis vraiment désolé pour ce que vous vivez. C'est une situation très stressante. Êtes-vous en sécurité actuellement ? Les forces de l'ordre sont-elles intervenues ?" },
                { role: "client" as const, text: "Oui, la police est venue, ils ont fait le constat. Mais là je ne me sens plus en sécurité chez moi." },
                { role: "agent" as const, text: "Je comprends parfaitement. Votre sentiment est normal et légitime. Nous pouvons intervenir très rapidement. S'agit-il d'une maison ou d'un appartement ?" },
                { role: "client" as const, text: "Une maison, avec un étage et un jardin." },
                { role: "agent" as const, text: "Nous proposons des solutions complètes : alarme intrusion, détecteurs ouverture, caméras extérieures. Un technicien peut venir dès demain matin faire un audit sécurité gratuit. 9h ou 10h, qu'est-ce qui vous convient ?" },
            ],
        },
    };

    const statsData = {
        sectorName: "Sécurité & Alarmes",
        stats: [
            { value: "70%", label: "des demandes sont post-incident", highlight: true },
            { value: "< 5 min", label: "délai max avant perte du prospect" },
            { value: "65%", label: "du taux conversion lié au ton de voix" },
        ],
    };

    const faqData = {
        sectorName: "Sécurité & Alarmes",
        faqs: [
            {
                question: "Comment l'IA gère-t-elle l'aspect émotionnel des appels ?",
                answer: "L'agent est spécifiquement formé pour adopter un ton empathique et rassurant. Il reformule les inquiétudes, valide les émotions du prospect et montre que vous prenez sa sécurité au sérieux.",
            },
            {
                question: "Peut-on différencier maison et appartement ?",
                answer: "Oui, l'agent qualifie le type de bien (maison, appartement, local pro), le nombre de pièces, les accès et adapte automatiquement la proposition (alarme simple vs système complet avec caméras).",
            },
            {
                question: "L'IA peut-elle donner des prix ?",
                answer: "Des fourchettes indicatives peuvent être communiquées selon le type de bien et de solution. Cela rassure le prospect et filtre ceux hors budget. Le devis détaillé vient après l'audit.",
            },
            {
                question: "Comment gérer la concurrence avec les grandes enseignes ?",
                answer: "Votre avantage : la proximité et la réactivité. L'IA met en avant votre ancrage local, vos délais d'intervention rapides et le suivi personnalisé que les grandes enseignes ne peuvent pas offrir.",
            },
        ],
    };

    const ctaData = {
        sectorName: "Sécurité & Alarmes",
        headline: "Prêt à rassurer vos prospects 24/7 ?",
        subheadline: "Ne laissez plus un prospect anxieux raccrocher faute de réponse. Notre agent IA rassure et convertit.",
        trustIndicators: ["Réponse < 20 sec", "Ton empathique", "Mise en place 48h"],
        ctaText: "Demander ma démo gratuite",
    };

    return (
        <div className="relative min-h-screen bg-background overflow-x-hidden">
            <NeuralBackground />
            <Header />

            <main className="relative z-10">
                {/* NOUVEAU Hero unique */}
                <SecuriteHeroVisuel />

                {/* ANCIENS composants génériques */}
                <SectorPainPoints {...painPointsData} />
                <SectorSolution {...solutionData} />

                {/* NOUVEAUX composants visuels uniques */}
                <SecuriteTimelineIntervention />
                <SecuriteCalculateurSites />

                {/* ANCIENS composants génériques */}
                <SectorStats {...statsData} />
                <SectorFAQ {...faqData} />
                <SectorCTA {...ctaData} />
            </main>

            <Footer />
        </div>
    );
};

export default SecuritePage;
