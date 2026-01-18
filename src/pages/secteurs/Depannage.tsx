import { useEffect } from "react";
import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Footer } from "@/components/sections/Footer";

// Composants uniques Dépannage (NOUVEAUX)
import { DepannageHeroVisuel } from "@/components/secteurs/depannage/DepannageHeroVisuel";
import { DepannageTimelineUrgence } from "@/components/secteurs/depannage/DepannageTimelineUrgence";
import { DepannageCalculateurUrgences } from "@/components/secteurs/depannage/DepannageCalculateurUrgences";

// Composants génériques (ANCIENS)
import { SectorPainPoints } from "@/components/sectors/SectorPainPoints";
import { SectorSolution } from "@/components/sectors/SectorSolution";
import { SectorStats } from "@/components/sectors/SectorStats";
import { SectorFAQ } from "@/components/sectors/SectorFAQ";
import { SectorCTA } from "@/components/sectors/SectorCTA";

import { Phone, Clock, Wrench, MapPin, AlertTriangle, Calendar, Headphones, Zap, Truck, CreditCard } from "lucide-react";

const DepannagePage = () => {
    useEffect(() => {
        document.title = "Agent Vocal IA pour Dépannage à Domicile | Synapse";
    }, []);

    const painPointsData = {
        sectorName: "Dépannage",
        headline: "L'urgence n'attend pas",
        subheadline: "Fuite d'eau, panne de chauffage, serrure bloquée... Vos clients sont dans le stress et appellent tous les dépanneurs à la fois.",
        painPoints: [
            {
                icon: Phone,
                title: "Course au premier décrochage",
                description: "En urgence, le client appelle 3-4 dépanneurs. Le premier qui répond professionnellement gagne le client.",
                stat: "80% conversion si < 2 min",
            },
            {
                icon: Clock,
                title: "93% d'appels hors horaires",
                description: "Les urgences arrivent la nuit et le week-end. Impossible de maintenir une permanence 24/7 sans agent IA.",
                stat: "93% hors horaires bureau",
            },
            {
                icon: Truck,
                title: "Équipes sur le terrain",
                description: "Vos techniciens sont en intervention. Personne pour décrocher = client perdu.",
            },
            {
                icon: AlertTriangle,
                title: "Appel perdu = 150-400€ perdus",
                description: "Chaque appel manqué est une intervention perdue. Le coût d'opportunité est énorme.",
                stat: "150-400€ par appel",
            },
        ],
    };

    const solutionData = {
        sectorName: "Dépannage",
        headline: "Votre standard virtuel dépannage 24/7",
        subheadline: "Un agent IA qui qualifie l'urgence, géolocalise et dispatche automatiquement.",
        features: [
            {
                icon: Zap,
                title: "Réponse instantanée 24/7/365",
                description: "Chaque appel est décroché en moins de 3 secondes, même à 3h du matin le 25 décembre.",
            },
            {
                icon: AlertTriangle,
                title: "Qualification urgence",
                description: "L'IA différencie l'urgence absolue (fuite active, panne totale) de l'intervention programmable.",
            },
            {
                icon: MapPin,
                title: "Géolocalisation & dispatching",
                description: "Localisation automatique du client et dispatch vers le technicien disponible le plus proche.",
            },
            {
                icon: CreditCard,
                title: "Estimation tarifaire",
                description: "Fourchette de prix immédiate pour rassurer le client et éviter les litiges.",
            },
        ],
        dialogExample: {
            context: "Appel entrant à 23h45 - Urgence plomberie",
            exchanges: [
                { role: "agent" as const, text: "Dépannage Express 24h, bonsoir. Quelle est votre urgence ?" },
                { role: "client" as const, text: "J'ai une grosse fuite sous l'évier, l'eau coule partout !" },
                { role: "agent" as const, text: "Je comprends l'urgence. Avez-vous pu couper l'arrivée d'eau sous l'évier ou au compteur ?" },
                { role: "client" as const, text: "Non, je ne sais pas comment faire !" },
                { role: "agent" as const, text: "Cherchez une vanne sous l'évier ou le robinet en forme de poignée, tournez dans le sens des aiguilles d'une montre. Pendant ce temps, pouvez-vous me donner votre adresse pour envoyer un plombier ?" },
                { role: "client" as const, text: "J'ai trouvé ! Ça s'arrête. Je suis au 45 rue des Lilas à Nanterre." },
                { role: "agent" as const, text: "Parfait, vous avez bien réagi. Notre plombier Marc est à 15 minutes de chez vous. Le dépannage de nuit est à partir de 120€, est-ce que je l'envoie ?" },
            ],
        },
    };

    const statsData = {
        sectorName: "Dépannage",
        stats: [
            { value: "80%", label: "de conversion si réponse < 2 minutes", highlight: true },
            { value: "93%", label: "des urgences hors horaires de bureau" },
            { value: "150-400€", label: "de valeur par appel perdu" },
        ],
    };

    const faqData = {
        sectorName: "Dépannage",
        faqs: [
            {
                question: "L'IA peut-elle guider le client en attendant le technicien ?",
                answer: "Oui, l'agent peut donner des consignes de sécurité basiques : couper l'eau, couper l'électricité, ne pas utiliser d'appareil, etc. Cela rassure le client et peut limiter les dégâts.",
            },
            {
                question: "Comment fonctionne le dispatching automatique ?",
                answer: "Vous nous fournissez les zones de couverture de vos techniciens et leurs disponibilités. L'IA localise le client et propose automatiquement le technicien disponible le plus proche.",
            },
            {
                question: "Peut-on donner des prix à l'avance ?",
                answer: "Oui, des fourchettes indicatives (déplacement + main d'œuvre hors pièces) peuvent être communiquées pour éviter les mauvaises surprises et rassurer le client.",
            },
            {
                question: "Comment gérer les différents corps de métier ?",
                answer: "L'agent identifie le type de panne (plomberie, électricité, serrurerie, chauffage, etc.) et dispatche vers le technicien compétent. Chaque corps de métier peut avoir son propre pool.",
            },
        ],
    };

    const ctaData = {
        sectorName: "Dépannage",
        headline: "Prêt à ne plus jamais perdre un appel d'urgence ?",
        subheadline: "Décrochez 100% des appels 24/7 et transformez chaque urgence en intervention facturée.",
        trustIndicators: ["24/7/365", "Dispatching auto", "Mise en place 48h"],
        ctaText: "Demander ma démo gratuite",
    };

    return (
        <div className="relative min-h-screen bg-background overflow-x-hidden">
            <NeuralBackground />
            <Header />

            <main className="relative z-10">
                {/* NOUVEAU Hero unique */}
                <DepannageHeroVisuel />

                {/* ANCIENS composants génériques */}
                <SectorPainPoints {...painPointsData} />
                <SectorSolution {...solutionData} />

                {/* NOUVEAUX composants visuels uniques */}
                <DepannageTimelineUrgence />
                <DepannageCalculateurUrgences />

                {/* ANCIENS composants génériques */}
                <SectorStats {...statsData} />
                <SectorFAQ {...faqData} />
                <SectorCTA {...ctaData} />
            </main>

            <Footer />
        </div>
    );
};

export default DepannagePage;
