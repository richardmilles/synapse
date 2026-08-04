# Page lien en bio

## Routes

- `/bio` : page principale
- `/bio/offres` : détail des offres
- `/bio/merci` : confirmation d'inscription
- `/bio/mentions-legales` : mentions légales
- `/bio/confidentialite` : politique de confidentialité

## Modifier les contenus

Tous les textes, liens, offres, informations légales et options newsletter sont regroupés dans `src/config/bio.ts`.

Les liens dont `enabled` vaut `false` restent masqués. Ajouter l'URL réelle puis passer `enabled` à `true` suffit à les publier.

## Base de données

La page utilise Supabase PostgreSQL comme source de vérité. L'intégration reste compatible avec un autre fournisseur PostgreSQL.

1. Créer un projet Supabase.
2. Ouvrir l'éditeur SQL et exécuter `sql/001_bio_schema.sql`.
3. Dans Supabase, ouvrir `Connect` et copier l'URL du pooler en mode transaction, sur le port `6543`.
4. Ajouter cette URL comme `POSTGRES_URL` dans les variables d'environnement Vercel.
5. Ajouter `PUBLIC_SITE_URL` et `EXPORT_SECRET` à partir de `.env.example`.

Les adresses sont enregistrées directement dans `bio_subscribers`. Aucun service d'envoi n'est requis tant que `doubleOptIn` reste désactivé dans `src/config/bio.ts`.

## Emailing et double opt-in

Lorsque l'envoi d'emails sera activé, `NEWSLETTER_WEBHOOK_URL` recevra un événement à chaque inscription. Le payload contient l'email, le lien de confirmation quand le double opt-in est actif et le lien de désinscription.

Ce webhook peut être relié à Brevo, MailerLite, Kit, n8n, Make ou une fonction interne. La base PostgreSQL reste la liste de référence, ce qui permet de changer d'outil d'envoi sans perdre les contacts.

## Export CSV

L'endpoint `GET /api/subscribers-export` renvoie la liste complète au format CSV. Il exige l'en-tête :

```text
Authorization: Bearer <EXPORT_SECRET>
```

## Attribution et conversions

Utiliser une URL différente dans chaque profil :

```text
https://www.synapse-lab.co/bio?utm_source=instagram&utm_medium=social&utm_campaign=bio
https://www.synapse-lab.co/bio?utm_source=tiktok&utm_medium=social&utm_campaign=bio
https://www.synapse-lab.co/bio?utm_source=facebook&utm_medium=social&utm_campaign=bio
https://www.synapse-lab.co/bio?utm_source=youtube&utm_medium=social&utm_campaign=bio
```

Les pages vues, clics, inscriptions et clics de réservation sont enregistrés dans `bio_events`. Le suivi utilise un identifiant aléatoire limité à la session et ne dépose aucun cookie publicitaire.

## Données à compléter avant publication

- validation du positionnement affiché sous `@nerva.vi`
- image Open Graph dédiée, idéalement en 1200 × 630 pixels
- projet Supabase et variables Vercel
- webhook de l'outil d'emailing au moment d'activer les envois
