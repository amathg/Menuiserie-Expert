# Site Menuiserie Expert — Guide de démarrage

Votre site est prêt : 7 pages (Accueil, Services, Galerie, À propos, FAQ, Contact, Mentions légales), responsive, avec formulaire de contact.

## 1. Voir le site

Ouvrez simplement le fichier `index.html` (double-clic) : il s'ouvre dans votre navigateur. Naviguez ensuite entre les pages via le menu.

## 2. Activer le formulaire de contact (obligatoire)

Le formulaire de la page Contact utilise **Formspree** (service gratuit jusqu'à 50 messages/mois) pour envoyer les messages directement vers **djibyteck@gmail.com**, sans avoir besoin d'un serveur.

Étapes (5 minutes) :
1. Allez sur https://formspree.io et créez un compte gratuit avec `djibyteck@gmail.com`.
2. Créez un nouveau formulaire ("New Form"), donnez-lui un nom (ex. "Contact Menuiserie Expert").
3. Formspree vous donne un lien du type `https://formspree.io/f/abcd1234`.
4. Ouvrez le fichier `contact.html`, cherchez la ligne :
   ```
   <form id="contact-form" action="https://formspree.io/f/VOTRE_ID_FORMSPREE" method="POST">
   ```
   et remplacez `VOTRE_ID_FORMSPREE` par votre identifiant (ex. `abcd1234`).
5. Enregistrez le fichier. Le formulaire enverra désormais les messages sur votre email.

Tant que cette étape n'est pas faite, le site affiche un message clair au lieu d'envoyer le formulaire dans le vide.

## 3. Remplacer les photos de la galerie

Les images actuelles (`images/gallery-1.jpg` à `gallery-6.jpg`) sont des exemples avec un bandeau "Exemple — remplacez par...". Pour les remplacer :
1. Prenez en photo vos réalisations (bonne lumière, format paysage de préférence).
2. Renommez vos photos exactement `gallery-1.jpg`, `gallery-2.jpg`, etc. (ou modifiez les noms dans `galerie.html` et `index.html`).
3. Copiez-les dans le dossier `images/` en remplaçant les fichiers existants.

## 4. Personnaliser les textes

- **Nom de l'entreprise** : remplacez "Menuiserie Expert" dans toutes les pages si vous choisissez un autre nom (Rechercher/Remplacer dans un éditeur de texte comme VS Code ou Bloc-notes).
- **Avis clients** (page Accueil) : remplacez les avis d'exemple par les retours réels de vos clients.
- **Zone d'intervention** (page Contact) : précisez votre secteur géographique exact.
- **Mentions légales** : complétez `mentions-legales.html` avec votre statut juridique, SIRET, adresse et hébergeur — obligatoire avant mise en ligne officielle en France.

## 5. Mettre le site en ligne

Options simples et gratuites :
- **Netlify** (recommandé, le plus simple) : allez sur https://app.netlify.com/drop et glissez-déposez le dossier `site` entier. Le site est en ligne en quelques secondes avec une adresse `.netlify.app`. Vous pourrez ensuite y relier un nom de domaine personnalisé (ex. menuiserie-expert.fr).
- **GitHub Pages** : si vous connaissez GitHub, créez un dépôt, déposez les fichiers, activez "Pages" dans les paramètres.
- **Hébergeur classique (OVH, o2switch, etc.)** : envoyez tous les fichiers du dossier `site` via FTP dans le dossier racine (souvent `www` ou `public_html`).

## 6. Nom de domaine

Pour une adresse comme `www.menuiserie-expert.fr`, achetez un nom de domaine (OVH, Gandi, Namecheap...) et suivez les instructions de votre hébergeur pour le relier au site.

## Structure des fichiers

```
site/
├── index.html          Accueil
├── services.html        Nos prestations
├── galerie.html          Galerie de réalisations
├── a-propos.html         À propos / présentation
├── faq.html               Questions fréquentes
├── contact.html           Formulaire de contact
├── mentions-legales.html  Mentions légales (à compléter)
├── css/style.css          Styles du site
├── js/script.js           Menu mobile, FAQ, formulaire
└── images/                Photos, logo, favicon
```

Bon lancement !
