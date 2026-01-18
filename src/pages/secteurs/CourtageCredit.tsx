import { useEffect } from "react";
import { Header } from "@/components/Header";
import { NeuralBackground } from "@/components/NeuralBackground";
import { Footer } from "@/components/sections/Footer";

// Composants uniques Courtage Crédit (NOUVEAUX)
import { CreditHeroVisuel } from "@/components/secteurs/courtage-credit/CreditHeroVisuel";
import { CreditTimelineCritique } from "@/components/secteurs/courtage-credit/CreditTimelineCritique";
import { CreditSimulateurCapacite } from "@/components/secteurs/courtage-credit/CreditSimulateurCapacite";

// Composants génériques (ANCIENS)
import { SectorPainPoints } from "@/components/sectors/SectorPainPoints";
import { SectorSolution } from "@/components/sectors/SectorSolution";
import { SectorStats } from "@/components/sectors/SectorStats";
import { SectorFAQ } from "@/components/sectors/SectorFAQ";
import { SectorCTA } from "@/components/sectors/SectorCTA";

import { Phone, Clock, Home, DollarSign, FileText, Calculator, Calendar, TrendingUp, Headphones, Zap } from "lucide-react";

const CourtageCreditPage = () => {
    useEffect(() => {
        document.title = "Agent Vocal IA pour Courtage en Crédit | Synapse";
    }, []);

    const painPointsData = {
        sectorName: "Courtage Crédit",
        headline: "Le timing est tout dans le courtage crédit",
        subheadline: "Un prospect crédit est disponible juste après avoir rempli un formulaire. 4 heures plus tard, il est passé à autre chose.",
        painPoints: [
            {
                icon: Clock,
                title: "< 10 min = 70% conversion",
                description: "Si vous contactez dans les 10 minutes post-formulaire, vous convertissez 70%. Après 4h, c'est 18%.",
                stat: "70% vs 18%",
            },
            {
                icon: Home,
                title: "Projet de vie = émotion",
                description: "Achat immobilier, regroupement de crédits... Ce sont des moments chargés émotionnellement.",
            },
            {
                icon: TrendingUp,
                title: "Concurrence en ligne agressive",
                description: "Comparateurs, banques en ligne, fintechs... Ils répondent vite. Vous devez faire mieux.",
            },
            {
                icon: FileText,
                title: "Qualification complexe",
                description: "Revenus, apport, situation pro, taux d'endettement... La qualification prend du temps.",
                stat: "Dossier moyen : 250k€",
            },
        ],
    };

    const solutionData = {
        sectorName: "Courtage Crédit",
        headline: "Votre assistant courtier crédit",
        subheadline: "Rappel immédiat, qualification dossier, simulation capacité, RDV conseiller.",
        features: [
            {
                icon: Zap,
                title: "Rappel en moins de 10 minutes",
                description: "Dès qu'un formulaire est soumis, l'IA rappelle. Le prospect est encore devant son écran.",
            },
            {
                icon: Calculator,
                title: "Simulation capacité d'emprunt",
                description: "Collecte revenus, charges, apport et donne une première estimation de capacité d'emprunt.",
            },
            {
                icon: FileText,
                title: "Collecte documents",
                description: "Liste des pièces à fournir envoyée automatiquement avec lien de téléchargement sécurisé.",
            },
            {
                icon: Calendar,
                title: "RDV courtier dédié",
                description: "Prise de RDV avec le courtier spécialisé (immo, regroupement, pro) selon le projet.",
            },
        ],
        dialogExample: {
            context: "Rappel automatique 5 min après formulaire achat immo",
            exchanges: [
                { role: "agent" as const, text: "Bonjour ! Je suis l'assistant de FinanceConseil. Vous venez de nous contacter pour un projet immobilier. Avez-vous quelques minutes ?" },
                { role: "client" as const, text: "Oui, bonjour. On cherche à acheter notre premier appartement sur Paris." },
                { role: "agent" as const, text: "Félicitations pour ce beau projet ! Avez-vous déjà une idée du budget que vous visez ?" },
                { role: "client" as const, text: "On regarde entre 350 et 400 000€." },
                { role: "agent" as const, text: "Très bien. Pour estimer votre capacité d'emprunt, pouvez-vous me dire vos revenus mensuels nets à deux ?" },
                { role: "client" as const, text: "Environ 5500€ à deux, on est tous les deux en CDI." },
                { role: "agent" as const, text: "Parfait, deux CDI c'est un excellent profil. Avec un apport de combien disposez-vous ?" },
                { role: "client" as const, text: "On a 40 000€ d'économies." },
                { role: "agent" as const, text: "Avec ces éléments, vous pouvez viser un financement autour de 380-400k€ selon les taux. Notre courtier immobilier peut affiner cette simulation et vous présenter les meilleures offres. Demain 18h ou samedi 10h pour un RDV téléphonique ?" },
            ],
        },
    };

    const statsData = {
        sectorName: "Courtage Crédit",
        stats: [
            { value: "70%", label: "de conversion si contact < 10 min post-formulaire", highlight: true },
            { value: "18%", label: "de conversion si contact &gt; 4h" },
            { value: "250k€", label: "valeur moyenne d'un dossier" },
        ],
    };

    const faqData = {
        sectorName: "Courtage Crédit",
        faqs: [
            {
                question: "L'IA peut-elle donner des simulations de taux ?",
                answer: "L'agent donne des estimations de capacité d'emprunt et des fourchettes de taux indicatives basées sur le profil. Le courtier affine ensuite avec les conditions réelles des partenaires bancaires.",
            },
            {
                question: "Comment gérer les différents types de projets ?",
                answer: "L'IA distingue : achat résidence principale, investissement locatif, regroupement de crédits, crédit professionnel. Chaque type a son parcours de qualification et son courtier dédié.",
            },
            {
                question: "Peut-on collecter les documents en amont ?",
                answer: "Oui, l'agent envoie automatiquement la liste des pièces à fournir et un lien sécurisé pour les télécharger. Le courtier reçoit un dossier pré-constitué.",
            },
            {
                question: "Comment se connecte-t-on aux formulaires web ?",
                answer: "Nous nous intégrons à la plupart des CRM et formulaires du marché. Dès qu'un lead arrive, l'IA est notifiée et appelle dans les minutes qui suivent.",
            },
        ],
    };

    const ctaData = {
        sectorName: "Courtage Crédit",
        headline: "Prêt à convertir 70% de vos leads en clients ?",
        subheadline: "Ne laissez plus un prospect refroidir. Contactez-le en moins de 10 minutes.",
        trustIndicators: ["Rappel < 10 min", "Simulation capacité", "Mise en place 48h"],
        ctaText: "Demander ma démo gratuite",
    };

    return (
        <div className="relative min-h-screen bg-background overflow-x-hidden">
            <NeuralBackground />
            <Header />

            <main className="relative z-10">
                {/* NOUVEAU Hero unique */}
                <CreditHeroVisuel />

                {/* ANCIENS composants génériques */}
                <SectorPainPoints {...painPointsData} />
                <SectorSolution {...solutionData} />

                {/* NOUVEAUX composants visuels uniques */}
                <CreditTimelineCritique />
                <CreditSimulateurCapacite />

                {/* ANCIENS composants génériques */}
                <SectorStats {...statsData} />
                <SectorFAQ {...faqData} />
                <SectorCTA {...ctaData} />
            </main>

            <Footer />
        </div>
    );
};

export default CourtageCreditPage;
