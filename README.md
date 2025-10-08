# SlupDev - Site Vitrine

Site vitrine professionnel pour SlupDev, agence de développement web et mobile.

## 🚀 Fonctionnalités

- **Design moderne et responsive** - Compatible tous appareils
- **Optimisation SEO** - Métadonnées et structure optimisées
- **Formulaire de contact** - Envoi automatique d'emails
- **Animations fluides** - Expérience utilisateur engageante
- **Performance optimisée** - Chargement rapide

## 🛠 Technologies utilisées

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique pour plus de robustesse
- **Tailwind CSS** - Framework CSS utilitaire
- **Lucide React** - Icônes modernes
- **Nodemailer** - Envoi d'emails

## 📋 Services proposés

1. **Création de sites web** - Sites vitrines et e-commerce
2. **Applications mobiles** - iOS et Android
3. **Refonte de sites** - Modernisation d'existants
4. **Optimisation SEO** - Amélioration du référencement

## 🔧 Installation

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Étapes d'installation

1. **Cloner le projet**
   ```bash
   git clone <url-du-repo>
   cd slup-dev.fr
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configuration des variables d'environnement**
   ```bash
   cp .env.example .env.local
   ```
   
   Modifier `.env.local` avec vos vraies valeurs :
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=votre-email@gmail.com
   SMTP_PASS=votre-mot-de-passe-application
   ```

4. **Lancer le serveur de développement**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 📧 Configuration Email

### Gmail

1. Activer l'authentification à deux facteurs
2. Générer un mot de passe d'application :
   - Aller dans les paramètres Google
   - Sécurité > Authentification à 2 facteurs
   - Mots de passe des applications
   - Générer un nouveau mot de passe
3. Utiliser ce mot de passe dans `SMTP_PASS`

### Autres fournisseurs

Le site est compatible avec :
- **Mailgun** - `smtp.mailgun.org`
- **SendGrid** - `smtp.sendgrid.net`
- **Outlook** - `smtp-mail.outlook.com`

## 🚀 Déploiement

### Vercel (Recommandé)

1. Connecter votre repo GitHub à Vercel
2. Ajouter les variables d'environnement dans Vercel
3. Déployer automatiquement

### Netlify

1. Connecter votre repo à Netlify
2. Configurer les variables d'environnement
3. Déployer

### Serveur VPS

1. **Build du projet**
   ```bash
   npm run build
   ```

2. **Lancer en production**
   ```bash
   npm start
   ```

## 📁 Structure du projet

```
slup-dev.fr/
├── app/
│   ├── api/contact/route.ts    # API formulaire contact
│   ├── globals.css             # Styles globaux
│   ├── layout.tsx              # Layout principal
│   └── page.tsx                # Page d'accueil
├── public/                     # Fichiers statiques
├── .env.example               # Variables d'environnement exemple
├── next.config.js             # Configuration Next.js
├── tailwind.config.js         # Configuration Tailwind
└── package.json               # Dépendances
```

## 🎨 Personnalisation

### Couleurs

Modifier les couleurs dans `tailwind.config.js` :
```javascript
colors: {
  primary: {
    600: '#2563eb', // Couleur principale
    // ...
  }
}
```

### Contenu

Modifier le contenu dans `app/page.tsx` :
- Textes et descriptions
- Services proposés
- Informations de contact

### Styles

Personnaliser les styles dans `app/globals.css` :
- Variables CSS
- Classes utilitaires
- Animations

## 📞 Contact

**Email** : contact@slup-dev.fr

## 📄 Licence

Ce projet est la propriété de SlupDev. Tous droits réservés.

---

**SlupDev** - Votre partenaire digital de confiance
