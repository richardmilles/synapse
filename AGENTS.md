# AGENTS.md — Notes de travail Synapse Lab

Ce fichier documente les décisions prises pendant la refonte copywriting/design du site,
pour que tout agent (ou humain) qui reprend le travail reste cohérent avec ce qui a déjà été fait.

## Contexte produit

Synapse ("Systems studio") est un studio de conseil qui vend : diagnostic de processus,
solutions numériques sur mesure, automatisation, agents IA, intégration d'outils (5 expertises).
Cible : PME et professions organisées en cabinets/réseaux (avocats, experts-comptables, notaires,
huissiers, recouvrement, courtage assurance/crédit, dépannage à domicile, chauffage/clim,
rénovation, sécurité/alarmes, recrutement, intérim, formation professionnelle, services
informatiques — 15 secteurs au total, voir `src/App.tsx` pour les routes `/secteurs/*`).

CTA principal du site : réserver un audit via `https://synapse0.neetocal.com/audit`.

## Règles de contenu (à respecter partout)

- **Ne jamais supprimer ni modifier les statistiques fournies par l'utilisateur** (ex : les
  chiffres des pages secteurs comme "78% des prospects...", "-50% taux de chute", "40% de
  conversion en plus"). Ce sont ses données, pas des inventions à corriger. Demande explicite
  de l'utilisateur après une fausse alerte de ma part sur la page Avocats.
- **Pages secteurs = produit vertical distinct** : elles vendent un "agent vocal IA" (répondeur
  téléphonique IA 24/7) par métier, différent de l'offre large présentée sur la homepage
  (diagnostic/sur-mesure/automatisation/agents IA générique). C'est voulu, ne pas harmoniser
  les deux offres. Sur ces pages : améliorer la copy et la forme comme sur la homepage, sans
  changer le produit vendu ni les statistiques.
- **Jamais de tiret cadratin (—)** dans le texte du site. Demande explicite de l'utilisateur.
- **Images fournies par l'utilisateur : toujours affichées en entier**, proportions natives
  (`width:100%; height:auto`, attributs `width`/`height` sur la balise). Jamais de
  `object-fit: cover` avec une hauteur fixe qui recadre, jamais d'étirement. Retour explicite
  de l'utilisateur après plusieurs images recadrées.
- **Jamais de faux témoignages / faux clients / fausses statistiques**. Toute preuve sociale ou
  chiffre doit être honnête et vérifiable, ou explicitement présenté comme un exemple illustratif
  ("exemples de missions", pas "témoignages clients réels" sauf si les logos/noms sont fournis
  par l'utilisateur — voir section Logos clients ci-dessous).
- **Rareté/urgence uniquement si réelle** (jamais de faux compte à rebours ou de "plus que 3
  places" mensonger) — cf. skills `marketing-psychology` et `offers`.
- Ton : direct, phrases courtes, pas de superlatifs creux ("révolutionnaire", "next-level"),
  pas de jargon marketing vide ("streamline", "innovant"). Cohérent avec le style déjà en place
  dans `src/data/services.ts` (FAQ, descriptions).
- Apostrophes typographiques (’) utilisées partout, pas d'apostrophe droite (').

## Design system homepage (`src/index.css`, classes `.premium-*`)

- Palette : fond clair `--premium-paper` (#efeee8), fond sombre `--premium-ink` (#0b0d0c),
  accent `--premium-lime` (#56d8e8, un cyan malgré le nom "lime" hérité).
- Polices : Manrope (titres), DM Sans (corps).
- **Espacements** : sections resserrées à ~96-108px de padding vertical (pas 130-145px comme au
  départ — trop de vide selon retour utilisateur). Toujours vérifier visuellement après un
  changement de padding, l'utilisateur est sensible à l'excès de vide.
- **Contraste texte sur fond sombre** : ne jamais utiliser de gris trop sombre (`#8x8x8x` ou
  moins lumineux) pour du texte de contenu sur fond `--premium-ink`. Cible : `#b8-d4` de
  luminosité pour les paragraphes, les micro-labels (10px uppercase) peuvent rester plus sombres
  (`#7c-93`) car ce sont des labels secondaires, pas du contenu à lire.
- **Logos de marque** : ne jamais mettre de fond/tuile derrière un logo transparent fourni par
  l'utilisateur — ça abîme le rendu. Les afficher tels quels sur le fond de la section.
- **Marquee (défilement infini)** : pattern réutilisable, voir `.premium-toolbelt__row` /
  `.premium-trustbar__row` + keyframes `toolbelt-scroll`. Dupliquer la liste ×2, `animation-play-
  state: paused` au survol du conteneur `__track`, `mask-image` en fondu sur les bords.

## Composants ajoutés sur la homepage (`src/pages/Index.tsx`)

Ordre des sections (haut → bas), état actuel, pensé comme un parcours visiteur
(attirer → rassurer → comprendre → prouver → expliquer → quantifier → lever les objections → convertir) :
1. Hero (accroche)
2. `ClientLogos` (confiance immédiate)
3. Proof bar
4. Intro + 3 expertises (ce que nous faisons)
5. Résultats recherchés (pourquoi)
6. `BuildCarousel` "Ce que nous construisons" (exemples concrets)
7. Réalisations (preuve)
8. Manifeste "Notre position" (différenciation, transition vers la méthode)
9. Process + `ProcessCommitments` (comment nous travaillons)
10. `LogoMarquee` écosystème technique (crédibilité technique, prolonge le "comment")
11. `RoiCalculator` (quantifier la valeur juste avant la décision)
12. FAQ (objections)
13. CTA final

Sections supprimées car redondantes (demande utilisateur) : "Cas d'usage" (remplacée par le
carrousel), "Expertise sectorielle" (doublon du menu Secteurs), "Concrètement / missions"
(doublon du carrousel et des réalisations), "Notre standard" (doublon du process).

### Masquer une section sans la supprimer

`src/config/homeSections.ts` : interrupteurs numériques (`1` = affichée, `0` = masquée) utilisés
dans `Index.tsx`. Actuellement masqués à la demande de l'utilisateur : `clientLogos` (bandeau
"Ils nous font confiance") et `proofBar` (5 / 4 / 48h / 100%). Le code reste en place, il suffit
de repasser la valeur à `1` pour réafficher. Utiliser ce mécanisme plutôt que supprimer du code
quand l'utilisateur demande de masquer une section.

### Logos clients (`src/components/sections/ClientLogos.tsx`)

Fichiers sources dans `public/clients/client-1.webp` … `client-6.webp` (convertis depuis les PNG
fournis par l'utilisateur dans `company/`, redimensionnés 240×240, fond transparent conservé).
Noms réels associés dans l'ordre : **Alenia, Valoria Conseil, Eloria, Movelia Logistique,
Solena, Avelia Services**. Ne pas ajouter de fond/tuile derrière ces logos.

### Écosystème d'outils (`src/components/sections/LogoMarquee.tsx`)

Tracés SVG copiés en dur depuis le package `simple-icons` (extraits une fois, package retiré du
projet ensuite — pas de dépendance runtime ajoutée). Si la liste d'outils doit changer, relire
les fichiers `.svg` dans `node_modules/simple-icons/icons/<slug>.svg` après réinstallation
temporaire (`npm install --no-save simple-icons`), pas besoin de le garder en dépendance.

## Process de travail établi

- Toujours lancer `npx tsc --noEmit` après une modification.
- Le serveur dev (`npm run dev`, port 8080) doit rester lancé entre les sessions de travail —
  **ne pas le tuer sans demander à l'utilisateur**, il peut l'utiliser de son côté.
- Vérifier visuellement dans Chrome (via l'outil claude-in-chrome) après chaque changement
  visuel significatif, pas seulement le type-check.
- Rien n'est commité automatiquement — demander avant `git commit`/`git push`.

## Skills marketing installées

50 skills installées dans `.agents/skills/` (depuis `coreyhaines31/marketingskills`). Les plus
utilisées jusqu'ici : `copywriting`, `cro`, `site-architecture`, `product-marketing`,
`marketing-psychology`, `offers`. À relire avant chaque nouvelle page pour ne pas se contenter
d'une passe superficielle (retour explicite de l'utilisateur sur ce point).

## Pages déjà auditées

- `src/pages/Index.tsx` (homepage) — voir détail plus haut.
- `src/pages/Expertises.tsx` — ajout d'une proof bar (5/4/48h/15) sous le hero, icônes
  lucide par service (Search/LayoutGrid/Zap/Bot/Plug via `serviceIcons`), FAQ ajoutée avant
  le CTA final (1 question par service, tirée de `service.faq[0]`).

- `src/pages/services/ServicePage.tsx` — icône de service dans le hero (via
  `src/lib/serviceIcons.tsx`, partagé avec Expertises), tous les `outcomes` affichés (plus de
  `.slice(0,3)`), icônes sur les 4 étapes de la méthode, note de disponibilité limitée sous le
  CTA final (cohérent avec la homepage).
- Pages secteurs (`src/pages/secteurs/*.tsx`) : CTA générique "Demander ma démo gratuite"
  remplacé par un texte spécifique au secteur sur 9 pages (Avocats, ChauffageClimatisation,
  CourtageCredit, Depannage, ExpertsComptables, Huissiers, Recrutement, Renovation, Securite) —
  les 6 autres avaient déjà un CTA sur mesure, servait de référence. Coquille corrigée dans
  Huissiers.tsx ("qualifica tion" → "qualification"). **Aucune statistique touchée** (règle
  ci-dessus). Le reste du copy de ces pages (pain points, features, FAQ) était déjà solide
  (spécifique, langage client, pas de jargon) — pas besoin d'une réécriture complète.
  Reste à envisager si on veut aller plus loin : harmoniser les apostrophes droites → courbes
  dans ces fichiers (risqué en regex à cause des `"agent" as const` en JS, à faire à la main
  si besoin).

  **Mise à jour — identité visuelle unifiée sur les 15 pages secteurs (fait) :**
  Les 4 composants génériques `SectorPainPoints`, `SectorSolution`, `SectorFAQ`, `SectorCTA` ont
  été entièrement réécrits pour utiliser le système éditorial `.premium-*` (fini le
  glassmorphism/glow) :
  - `SectorPainPoints` → nouvelle classe `.sector-premium-pain*` (grille de cartes sur fond ink,
    accent lime pour l'icône et le badge stat).
  - `SectorSolution` → nouvelle classe `.sector-premium-solution*` (fond paper, liste de
    features + mockup de conversation `.sector-premium-chat*` avec bulles agent en lime).
  - `SectorFAQ` → réutilise directement `.premium-faq` (accordéon natif, identique à la
    homepage).
  - `SectorCTA` → réutilise directement `.premium-cta` (fond lime, bouton ink).
  - **Bug corrigé au passage** : `.premium-faq` et le nouveau `.sector-premium-solution`
    n'avaient pas de `color` explicite — sur la homepage ça marchait par héritage du wrapper
    `.premium-home`, mais les pages secteurs n'ont pas ce wrapper (thème sombre global via
    `bg-background`), donc le texte était blanc sur fond clair = invisible. Toujours mettre un
    `color` explicite sur toute nouvelle section `.premium-*`/`.sector-premium-*` à fond clair,
    ne jamais compter sur l'héritage du wrapper.
  - Le composant `SectorHero` (déjà existant mais jamais branché — utilise `.sector-premium-hero`
    + le mockup `.sector-dashboard`) a été câblé sur les 15 pages, remplaçant les 15 heroes
    bespoke (`AvocatsHeroVisuel`, `NotairesHeroVisuel`, etc. — fichiers non supprimés, juste
    plus importés/utilisés). Chaque page a maintenant un objet `heroData` en haut du fichier
    (sectorName/headline/subheadline/badges/ctaText) construit à partir du texte déjà présent
    dans l'ancien hero, **sans changer aucune statistique**.
  - Les composants "Timeline"/"Calculateur"/"Funnel"/"Matching" propres à chaque secteur
    (~30 fichiers dans `src/components/secteurs/<secteur>/`) n'ont PAS été retouchés — certains
    sont déjà dans un style sombre neutre qui passe bien (ex: `InformatiqueTicketingVisuel`),
    d'autres restent avec l'ancien style glow. Si besoin d'aller plus loin, c'est le prochain
    chantier logique, secteur par secteur.

- `src/pages/Blog.tsx` + `src/pages/blog/*.tsx` (10 articles) et `src/pages/Resources.tsx` +
  `src/pages/resources/*.tsx` — le composant `NeuralBackground` (canvas animé de particules
  violettes, ancien système visuel) a été retiré de **toutes** les pages qui l'utilisaient
  encore : les 10 articles de blog, la ressource `TransformerClaudeSystemeTravail`, les 15 pages
  secteurs, la page service `FidelisationLogicielsMetiers` et `src/pages/legal/MainLegalPages.tsx`.
  Partout, le wrapper est passé à `className="site-page-premium relative min-h-screen
  overflow-x-hidden bg-background"` (classe déjà stylée dans `index.css`, donne la grille de
  fond discrète et les rayons de bordure cohérents avec le reste du site). Le composant
  `NeuralBackground.tsx` lui-même n'a pas été supprimé (juste devenu inutilisé) — à supprimer
  si on est sûr qu'il ne sert plus nulle part.
  Page `Resources.tsx` elle-même était déjà cohérente avec l'identité premium, pas besoin d'y
  retoucher. `ResourceArticleLayout.tsx` (template partagé par la plupart des ressources) était
  déjà bon aussi.

**Mise à jour — les 30 composants Timeline/Calculateur/Funnel/Matching (fait) :**
- `.glass` et `.glass-strong` (utilities globales dans `index.css`) redéfinies sans
  `backdrop-blur` (juste `bg-card border border-border/70`) — un seul changement qui a
  aplati l'effet verre dépoli partout où ces classes sont utilisées (30 composants secteurs +
  les encarts des articles de blog qui utilisaient aussi `.glass`).
- Les 9 fichiers avec un halo décoratif flou (`rounded-full blur-[150px]`, un `<div>` vide en
  arrière-plan) ont été nettoyés : `AvocatsCalculateurMandats`, `ChauffageCalculateurContrats`,
  `CreditSimulateurCapacite`, `DepannageCalculateurUrgences`,
  `ExpertsComptablesSimulateurClients`, `HuissiersCalculateurDossiers`,
  `RecrutementCalculateurMandats`, `RenovationEstimateurProjets`, `SecuriteCalculateurSites`.
- Vérifié visuellement : les composants Timeline/Matching/Funnel (Avocats, Recrutement,
  Formation) étaient déjà dans un style plat/sombre correct, pas besoin de les retoucher plus.
- Les couleurs `synapse-violet/blue/yellow` utilisées dans les textes en dégradé n'ont pas été
  touchées : elles pointent déjà toutes vers la même teinte cyan (~187°/211°) que le lime
  premium, donc aucun dégradé violet/jaune criard ne subsiste malgré le nom des variables.

## Header / navigation (fait)

Le header (`src/components/Header.tsx`) avait régressé lors de la refonte : liens en `<a href>`
au lieu de `<Link>` React Router, et surtout le bouton "Secteurs" pointait vers une seule page
(`/secteurs/services-informatiques`) au lieu d'un menu — d'où l'impression de "redirection
aléatoire". L'ancien header (avant refonte, voir `git show 979125a:src/components/Header.tsx`)
avait des mega-menus déroulants au survol pour Services et Secteurs : restauré à l'identique
dans l'esprit, avec le style premium :
- **Expertises** : menu déroulant avec un lien "Vue d'ensemble" (`/expertises`) + les 5 services
  (`data/services.ts`) + Fidélisation automatisée.
- **Secteurs** : mega-menu à 2 colonnes / 4 groupes (Professions juridiques, Services financiers,
  Services d'urgence, Services B2B), les 15 secteurs, repris de l'ancien header.
- Déclenchement au survol (`onMouseEnter`/`onMouseLeave`) + clic (accessible clavier/tactile),
  classes `.premium-dropdown`, `.premium-nav-item`, `.premium-nav-trigger` dans `index.css`.
- Menu mobile : les 2 dropdowns deviennent des sections accordéon (`.premium-mobile-menu__trigger`
  + `.premium-mobile-menu__sublist`), le reste inchangé.
- Tous les liens internes utilisent maintenant `<Link to>` (React Router) au lieu de `<a href>`
  pour une navigation SPA correcte (pas de rechargement complet de page) — seul `/#processus`
  reste un `<a href>` classique car c'est une ancre vers une section de la homepage.

## Réalisations (fait)

- `src/data/projects.ts` : 3 vrais projets clients présentés sous des **noms génériques**
  (Plateforme de pilotage client, Plateforme de restauration d'entreprise, Plateforme de
  gestion locative) — demande de l'utilisateur : ne jamais afficher le nom du client, ni dans
  le texte, ni dans les URL (`/realisations/plateforme-…`), ni dans les noms d'images
  (`public/realisations/plateforme-….webp`). Contenu
  condensé depuis la matière brute de l'utilisateur (ne garder que le pertinent). Structure :
  secteur, type, périmètre, tagline, contexte (titre + texte), réponse (titre + texte),
  6 modules (titre + texte), résultat, image + dimensions.
- **Homepage** (`#realisations`, entre Cas d'usage et Secteurs, fond ink) : cartes texte
  **sans image** (demande explicite : les visuels vont uniquement sur les pages dédiées).
  Slogan "Des projets livrés, pas des maquettes" refusé par l'utilisateur, remplacé.
- **Page dédiée** `src/pages/realisations/ProjectPage.tsx` (`/realisations/:slug`) : hero
  avec fiche (secteur/type/périmètre), visuel affiché en entier dans un cadre, contexte et
  réponse, grille des 6 modules, résultat (fond lime), autres réalisations, CTA.
  Classes `.case-*` dans `index.css`.
- Images sources `company/*.png` converties en `public/realisations/*.webp` (1400×1050, même
  ratio 4:3 que l'original, aucun recadrage).
- Ancres homepage (`/#realisations`, `/#processus`) : scroll géré dans `Index.tsx`
  (`useLocation` + délai pour laisser la mise en page se stabiliser) et
  `scroll-margin-top` sur `.premium-home section[id]` pour le header fixe.

## Positionnement : ce que Synapse vend (important)

Synapse **conçoit et développe des solutions sur mesure** : applications internes, portails
clients, agents IA intégrés aux logiciels, plateformes de pilotage, produits SaaS, intégrations.
**L'automatisation n'est qu'une possibilité parmi d'autres, pas l'offre principale.** Ne jamais
présenter Synapse comme une agence d'automatisation (retour très explicite de l'utilisateur).
Pas besoin de se verticaliser par secteur dans les contenus transverses.

## Section "Ce que nous construisons" et calculateur de ROI (fait)

- Ancienne section "Cas d'usage" rejetée (trop orientée automatisation). Remplacée par
  `src/components/sections/BuildCarousel.tsx` : **carrousel, une solution affichée à la fois**,
  défilement automatique (6 s, pause au survol/focus/toucher), flèches gauche/droite, points
  de progression, glissement tactile, flèches clavier. **Pas de liens** dans les cartes
  (demande explicite). 6 solutions : application interne, portail client, agent IA intégré,
  cockpit de pilotage, plateforme SaaS, flux fiables entre outils, chacune en
  La situation / Ce que nous construisons / Ce qui change. Classes `.premium-carousel*`.
- Section "Expertise sectorielle" supprimée de la homepage (redondante avec le menu).
- Calculateur de ROI `src/components/sections/RoiCalculator.tsx` : **3 variables seulement**
  (budget du projet 3 000 à 150 000 €, heures gagnées par mois, coût horaire chargé) →
  gain mensuel/annuel, délai de remboursement, ROI à 12 mois. Deux versions précédentes
  rejetées (trop orientée automatisation, puis trop de variables avec un budget partant de
  10 000 €). Classes `.premium-calc*`.

## Travail restant / prochaines pages

- `src/components/bio/BioShell.tsx` (page bio/à propos) — pas encore auditée.
