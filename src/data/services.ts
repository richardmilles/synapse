export type ServiceLink = {
  title: string;
  description: string;
  href: string;
  type: "Article" | "Ressource" | "Service";
};

export type Service = {
  slug: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  description: string;
  introduction: string;
  situations: string[];
  outcomes: string[];
  deliverables: string[];
  steps: { title: string; description: string }[];
  approachTitle: string;
  approachText: string;
  related: ServiceLink[];
  faq: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "diagnostic-processus",
    eyebrow: "Diagnostic et cadrage",
    title: "Comprendre le problème avant de choisir la solution",
    shortTitle: "Diagnostic des processus",
    description:
      "Un diagnostic concret pour repérer les blocages, clarifier les priorités et décider où une solution numérique apportera une vraie valeur.",
    introduction:
      "Une entreprise ressent souvent le problème avant de pouvoir le formuler : informations dispersées, doubles saisies, délais difficiles à tenir, outils qui communiquent mal. Le diagnostic transforme ces irritants en décisions claires. Nous observons le fonctionnement réel, les contraintes des équipes et les données disponibles avant de proposer une feuille de route réaliste.",
    situations: [
      "Les équipes passent du temps à contourner les outils existants.",
      "Un projet numérique est envisagé, mais le périmètre reste flou.",
      "Plusieurs pistes sont possibles et leur valeur doit être comparée.",
      "Une automatisation existe déjà, mais elle manque de fiabilité ou de visibilité.",
    ],
    outcomes: [
      "Une vision partagée du processus actuel et de ses points de friction.",
      "Des cas d’usage classés par impact, faisabilité et niveau de risque.",
      "Une recommandation argumentée : améliorer l’existant, intégrer un outil ou développer sur mesure.",
      "Un plan d’action exploitable avec les premières étapes, dépendances et indicateurs.",
    ],
    deliverables: [
      "Cartographie du processus et des échanges de données",
      "Liste priorisée des irritants et opportunités",
      "Scénarios de solution avec avantages et limites",
      "Feuille de route de mise en œuvre",
    ],
    steps: [
      { title: "Écouter", description: "Entretiens courts avec les personnes qui exécutent, pilotent ou subissent le processus." },
      { title: "Observer", description: "Analyse des outils, des données, des règles métier et des exceptions réellement rencontrées." },
      { title: "Prioriser", description: "Comparaison des opportunités selon la valeur attendue, l’effort, les risques et les dépendances." },
      { title: "Décider", description: "Restitution claire et choix d’un premier périmètre capable de produire un résultat mesurable." },
    ],
    approachTitle: "Un diagnostic directement relié à l’exécution",
    approachText:
      "La restitution sert à prendre une décision. Elle évite le document théorique qui décrit tout sans aider à commencer. Chaque recommandation précise ce qu’elle améliore, ce qu’elle demande et la manière dont son effet pourra être mesuré.",
    related: [
      { title: "Concevoir une solution sur mesure", description: "Passer du besoin cadré à un outil adapté au fonctionnement de l’entreprise.", href: "/services/solution-numerique-sur-mesure", type: "Service" },
      { title: "Automatiser les relances de factures", description: "Un exemple de processus à analyser avant de choisir les règles et les outils.", href: "/blog/automatiser-relance-factures", type: "Article" },
    ],
    faq: [
      { question: "Combien de temps dure un diagnostic ?", answer: "La durée dépend du nombre d’équipes et de systèmes concernés. Un périmètre ciblé peut généralement être étudié en quelques ateliers, avec une restitution rapide et directement exploitable." },
      { question: "Faut-il déjà savoir quelle technologie utiliser ?", answer: "Aucun choix technique préalable n’est nécessaire. Le diagnostic sert justement à comparer les options à partir du besoin, des contraintes et du niveau d’investissement pertinent." },
      { question: "Le diagnostic peut-il rester indépendant de la réalisation ?", answer: "Oui. Les livrables permettent de poursuivre avec Synapse, une équipe interne ou un autre prestataire." },
    ],
  },
  {
    slug: "solution-numerique-sur-mesure",
    eyebrow: "Conception et développement",
    title: "Une solution numérique construite autour de votre fonctionnement",
    shortTitle: "Solution numérique sur mesure",
    description:
      "Conception d’outils métier, portails et applications sur mesure lorsque les logiciels standards imposent trop de compromis.",
    introduction:
      "Le sur-mesure devient pertinent quand les équipes adaptent constamment leur manière de travailler aux limites des logiciels. L’objectif consiste alors à construire le bon outil, avec un périmètre maîtrisé, des interfaces simples et une architecture capable d’évoluer. Nous traduisons les règles du métier en une solution que les équipes peuvent réellement adopter.",
    situations: [
      "Les informations sont réparties entre tableurs, emails et logiciels spécialisés.",
      "Un outil standard couvre une partie du besoin et crée de nombreux contournements.",
      "Les clients ou partenaires ont besoin d’un portail dédié.",
      "Une application interne doit refléter des règles métier propres à l’entreprise.",
    ],
    outcomes: [
      "Un parcours utilisateur plus simple pour les équipes et les clients.",
      "Une source de données cohérente à la place des fichiers dispersés.",
      "Des règles métier explicites et testables.",
      "Une base technique documentée, maintenable et évolutive.",
    ],
    deliverables: [
      "Cadrage fonctionnel et parcours principaux",
      "Prototype des écrans et validation des usages",
      "Développement, tests et mise en production",
      "Documentation, transfert et plan d’évolution",
    ],
    steps: [
      { title: "Cadrer", description: "Définition du résultat attendu, des utilisateurs et du premier périmètre utile." },
      { title: "Prototyper", description: "Validation rapide des parcours et des règles avant d’investir dans le développement complet." },
      { title: "Construire", description: "Développement par étapes courtes avec démonstrations régulières et arbitrages visibles." },
      { title: "Déployer", description: "Tests, reprise des données, accompagnement des utilisateurs et suivi après mise en ligne." },
    ],
    approachTitle: "Le sur-mesure avec un périmètre maîtrisé",
    approachText:
      "Le premier livrable vise une utilisation réelle et un résultat observable. Les fonctions secondaires arrivent ensuite, sur la base des retours des utilisateurs. Cette progression réduit le risque, raccourcit le délai de mise en service et évite de construire des écrans qui resteront inutilisés.",
    related: [
      { title: "Intégrer les outils et les données", description: "Connecter la nouvelle solution au système existant sans créer un silo supplémentaire.", href: "/services/integration-api-outils", type: "Service" },
      { title: "Diagnostic des processus", description: "Clarifier le besoin et comparer le sur-mesure aux solutions disponibles.", href: "/services/diagnostic-processus", type: "Service" },
    ],
    faq: [
      { question: "Comment savoir si le sur-mesure est justifié ?", answer: "Le sur-mesure est pertinent lorsque le processus crée un avantage réel, que les outils standards imposent des contournements coûteux ou que plusieurs systèmes doivent être réunis dans un parcours cohérent." },
      { question: "Peut-on commencer par une petite version ?", answer: "Oui. Un premier périmètre centré sur un usage prioritaire permet de valider la valeur et l’adoption avant d’étendre la solution." },
      { question: "La solution peut-elle évoluer après le lancement ?", answer: "L’architecture et la documentation sont pensées pour faciliter les évolutions, les nouvelles intégrations et le transfert à une autre équipe technique." },
    ],
  },
  {
    slug: "automatisation-processus",
    eyebrow: "Automatisation fiable",
    title: "Fluidifier les opérations sans perdre le contrôle",
    shortTitle: "Automatisation des processus",
    description:
      "Des automatisations conçues autour des règles métier, des exceptions et du suivi nécessaire pour fonctionner durablement.",
    introduction:
      "Une automatisation utile ne se limite pas à relier deux outils. Elle doit gérer les données incomplètes, les indisponibilités et les exceptions. Nous concevons des workflows observables, avec des règles claires, des alertes et des procédures de reprise.",
    situations: [
      "Les mêmes informations sont ressaisies dans plusieurs logiciels.",
      "Les relances et notifications dépendent encore de vérifications manuelles.",
      "Les demandes entrantes doivent être triées puis dirigées vers la bonne personne.",
      "Des automatisations existent, mais leurs erreurs sont découvertes trop tard.",
    ],
    outcomes: [
      "Moins de tâches répétitives et de doubles saisies.",
      "Des délais plus réguliers et des responsabilités mieux définies.",
      "Une traçabilité des opérations et des erreurs.",
      "Des équipes concentrées sur les décisions et situations qui demandent leur expertise.",
    ],
    deliverables: [
      "Schéma du workflow et règles de déclenchement",
      "Gestion des exceptions et règles de validation",
      "Tableau de suivi, alertes et journal des opérations",
      "Documentation et procédure de reprise manuelle",
    ],
    steps: [
      { title: "Sélectionner", description: "Choix d’un processus stable, fréquent et suffisamment mesurable pour justifier l’automatisation." },
      { title: "Fiabiliser", description: "Définition des permissions, règles métier, exceptions et données sensibles." },
      { title: "Connecter", description: "Intégration des outils et construction du workflow avec des tests représentatifs." },
      { title: "Superviser", description: "Mise en place des alertes, journaux et indicateurs nécessaires au fonctionnement quotidien." },
    ],
    approachTitle: "Prévoir les exceptions dès la conception",
    approachText:
      "Le parcours nominal est rarement la partie la plus difficile. La qualité d’une automatisation se mesure à sa manière de gérer les données manquantes, les doublons, les délais et les indisponibilités. Ces situations sont intégrées aux tests et au suivi dès le départ.",
    related: [
      { title: "Sécurité des connecteurs IA", description: "Définir précisément ce qu’un système peut lire, préparer ou modifier.", href: "/ressources/securite-connecteurs-ia", type: "Ressource" },
      { title: "Relance des factures impayées", description: "Structurer les règles, les rythmes et les exceptions d’un processus de relance.", href: "/blog/automatiser-relance-factures", type: "Article" },
      { title: "Fidélisation automatisée", description: "Transformer les événements d’un logiciel métier en actions de réactivation et de renouvellement.", href: "/services/fidelisation-automatisee-logiciels-metiers", type: "Service" },
    ],
    faq: [
      { question: "Quels processus faut-il automatiser en premier ?", answer: "Les meilleurs candidats sont fréquents, répétitifs, relativement stables et associés à un résultat mesurable. Un processus instable doit d’abord être clarifié." },
      { question: "Que se passe-t-il lorsqu’un outil tombe en panne ?", answer: "Le workflow prévoit des tentatives contrôlées, des alertes, un journal et une procédure de reprise. Les opérations sensibles peuvent rester en attente d’une validation." },
      { question: "Peut-on modifier les règles plus tard ?", answer: "Oui. Les règles et paramètres importants sont documentés et séparés autant que possible de la logique technique afin de faciliter leur évolution." },
    ],
  },
  {
    slug: "agents-ia",
    eyebrow: "Agents IA encadrés",
    title: "Déployer un agent IA qui accélère réellement vos opérations",
    shortTitle: "Agents IA",
    description:
      "Des agents IA spécialisés, reliés aux connaissances et aux outils de l’entreprise, pour qualifier, rechercher, préparer et exécuter plus rapidement.",
    introduction:
      "Un agent IA peut analyser une demande, rechercher une information, préparer une réponse ou déclencher une action. Sa valeur dépend de la qualité du contexte, des outils connectés et de son intégration au processus. Nous partons d’un cas d’usage précis, mesurons ses résultats et étendons ensuite son périmètre.",
    situations: [
      "Une équipe traite un grand volume de demandes textuelles ou vocales.",
      "La recherche d’informations internes ralentit les réponses.",
      "Des dossiers doivent être qualifiés avant leur attribution à la bonne équipe.",
      "Un assistant générique existe déjà, mais ses réponses manquent de contexte et de constance.",
    ],
    outcomes: [
      "Un agent spécialisé sur un périmètre et des sources définis.",
      "Des actions limitées par des permissions explicites.",
      "Des réponses évaluées sur des cas réels avant la production.",
      "Une attribution claire vers la bonne équipe lorsque le dossier sort du périmètre.",
    ],
    deliverables: [
      "Définition du rôle, des limites et des critères de réussite",
      "Connexion aux connaissances et outils nécessaires",
      "Jeu d’évaluation et tests de comportement",
      "Suivi des réponses, coûts, erreurs et escalades",
    ],
    steps: [
      { title: "Cibler", description: "Choix d’une responsabilité précise, des utilisateurs et du résultat opérationnel attendu." },
      { title: "Contextualiser", description: "Organisation des instructions, connaissances, outils et droits d’accès de l’agent." },
      { title: "Évaluer", description: "Tests sur des cas réalistes, y compris les ambiguïtés, erreurs et demandes hors périmètre." },
      { title: "Déployer", description: "Mise en service progressive avec observation, corrections et possibilité de reprendre la main." },
    ],
    approachTitle: "Commencer ciblé, puis développer les usages",
    approachText:
      "Un premier périmètre permet de mesurer la précision, le temps gagné et le coût par traitement. Les fonctions et connexions supplémentaires sont ajoutées lorsque leur contribution au résultat est démontrée.",
    related: [
      { title: "Donner une mémoire durable à ses agents", description: "Comprendre comment conserver et réutiliser le contexte entre les sessions.", href: "/ressources/memoire-durable-agents-ia", type: "Ressource" },
      { title: "La boucle de progression IA", description: "Transformer les corrections humaines en améliorations mesurables.", href: "/ressources/boucle-progression-ia", type: "Ressource" },
    ],
    faq: [
      { question: "Un agent IA peut-il agir directement dans les outils ?", answer: "Oui, lorsque le cas d’usage le justifie. Les permissions peuvent limiter l’agent à la lecture, à la préparation ou à certaines actions précises avec validation." },
      { question: "Comment mesurer la qualité d’un agent ?", answer: "Un jeu de cas représentatifs permet de mesurer l’exactitude, le taux de résolution, le délai de traitement, le coût par demande et la bonne attribution des exceptions." },
      { question: "Peut-on utiliser les modèles et outils déjà choisis par l’entreprise ?", answer: "L’architecture peut s’adapter aux fournisseurs, bases documentaires et logiciels existants lorsque leurs API et leurs conditions d’utilisation le permettent." },
    ],
  },
  {
    slug: "integration-api-outils",
    eyebrow: "Intégration et données",
    title: "Faire circuler l’information entre les bons outils",
    shortTitle: "Intégration API et outils",
    description:
      "Connexion des logiciels, des données et des applications pour créer des parcours continus et limiter les silos.",
    introduction:
      "Une nouvelle solution apporte peu de valeur si elle oblige l’équipe à copier les informations vers les outils déjà utilisés. L’intégration relie CRM, facturation, support, documents et applications métier afin que chaque système reçoive la donnée dont il a besoin, au bon moment et avec une origine identifiable.",
    situations: [
      "Les données clients diffèrent selon les logiciels.",
      "Une action dans un outil doit déclencher un traitement dans un autre.",
      "Un tableau de bord doit réunir plusieurs sources fiables.",
      "Une application sur mesure doit s’intégrer au système existant.",
    ],
    outcomes: [
      "Une circulation des données documentée et contrôlée.",
      "Moins de ressaisies et d’erreurs de synchronisation.",
      "Des responsabilités claires pour chaque source de vérité.",
      "Des alertes lorsque les échanges échouent ou deviennent incohérents.",
    ],
    deliverables: [
      "Cartographie des systèmes, données et responsabilités",
      "Connecteurs API, webhooks ou traitements planifiés",
      "Règles de synchronisation et gestion des conflits",
      "Journalisation, alertes et documentation technique",
    ],
    steps: [
      { title: "Cartographier", description: "Identification des systèmes, propriétaires, formats et sources de vérité." },
      { title: "Contractualiser", description: "Définition des données échangées, règles de mise à jour, volumes et niveaux de service." },
      { title: "Intégrer", description: "Développement des échanges et tests sur les erreurs, doublons et changements de format." },
      { title: "Surveiller", description: "Suivi des flux, alertes et documentation des procédures de reprise." },
    ],
    approachTitle: "Une intégration conçue pour rester compréhensible",
    approachText:
      "Chaque échange possède une source, une destination, une règle et un responsable. Cette documentation évite les dépendances invisibles et facilite les évolutions lorsque l’un des outils change son API ou son modèle de données.",
    related: [
      { title: "Concevoir une solution sur mesure", description: "Construire un outil métier qui s’insère dans l’écosystème existant.", href: "/services/solution-numerique-sur-mesure", type: "Service" },
      { title: "Automatiser avec fiabilité", description: "Transformer les connexions entre outils en processus supervisés.", href: "/services/automatisation-processus", type: "Service" },
      { title: "Fidélisation automatisée", description: "Connecter les données clients aux actions commerciales déclenchées par les événements métier.", href: "/services/fidelisation-automatisee-logiciels-metiers", type: "Service" },
    ],
    faq: [
      { question: "Que faire lorsqu’un outil ne possède pas d’API ?", answer: "Selon le contexte, un export structuré, un traitement planifié ou une interface intermédiaire peut suffire. La fiabilité et les conditions d’utilisation restent prioritaires dans le choix." },
      { question: "Comment éviter les doublons entre les systèmes ?", answer: "La conception définit une source de vérité, des identifiants stables et des règles explicites de rapprochement et de résolution des conflits." },
      { question: "Les flux sont-ils surveillés après la mise en production ?", answer: "Les intégrations importantes disposent de journaux, d’alertes et d’indicateurs permettant de repérer rapidement les erreurs et les retards." },
    ],
  },
];

export const getServiceBySlug = (slug: string) => services.find((service) => service.slug === slug);
