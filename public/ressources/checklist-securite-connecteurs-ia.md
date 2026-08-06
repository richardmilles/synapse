# Checklist de sécurité des connecteurs IA

Utilisez cette liste avant d’autoriser un agent IA à accéder à Gmail, Google Drive, Notion ou un outil équivalent.

## 1. Définir le périmètre

- [ ] Le compte connecté possède uniquement les droits nécessaires.
- [ ] Les dossiers, pages, bases ou libellés accessibles sont listés.
- [ ] Les données sensibles et les secrets sont exclus.
- [ ] L’environnement de test est séparé de la production.

## 2. Classer chaque action

### Toujours autoriser

- Lecture ciblée d’une ressource explicitement partagée.
- Recherche et synthèse sans modification.
- Analyse locale sans communication externe.

### Demander une confirmation

- Création d’un brouillon.
- Ajout d’un élément dans un espace dédié.
- Modification limitée et réversible.

### Toujours bloquer par défaut

- Envoi ou publication auprès d’un tiers.
- Suppression ou déplacement massif.
- Modification des permissions.
- Accès global à un espace de travail.

## 3. Tester les garde-fous

- [ ] Les actions d’écriture demandent une confirmation.
- [ ] Les envois et suppressions sont bloqués.
- [ ] Chaque action est enregistrée dans un journal.
- [ ] Une limite de volume empêche les opérations massives.
- [ ] Les erreurs ne déclenchent pas une nouvelle action automatiquement.
- [ ] La révocation du connecteur a été testée.

## 4. Valider avant la mise en production

- [ ] Le propriétaire métier a validé les permissions.
- [ ] Un test a été effectué avec des données non sensibles.
- [ ] La durée de conservation des données est définie.
- [ ] Une personne est responsable de la revue des accès.
- [ ] La matrice de permissions possède une date de révision.

Source : https://www.synapse-lab.co/ressources/securite-connecteurs-ia
