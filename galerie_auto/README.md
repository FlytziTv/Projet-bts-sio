# 🚗 Galerie Auto — Projet BTS SIO SLAM

Application web de **galerie automobile** développée avec **Next.js + React + TypeScript + Tailwind CSS**.  
Elle permet d’afficher des véhicules avec leurs informations (marque, modèle, année, carburant, prix, etc.).

## 🎯 Objectif du projet

Projet réalisé dans le cadre du **BTS SIO option SLAM** pour pratiquer :

- le développement d’une application web moderne avec Next.js,
- la structuration Front-end en composants React,
- le typage avec TypeScript,
- la mise en forme avec Tailwind CSS,
- l’organisation et la qualité du code (ESLint).

## 🧩 Fonctionnalités principales

- Affichage d’une liste de voitures
- Fiche détaillée d’un véhicule
- Recherche / filtrage par critères
- Interface responsive
- Composants UI réutilisables

## 🛠️ Stack technique

- **Framework** : Next.js `16.2.4`
- **UI** : React `19.2.4`, React DOM `19.2.4`
- **Langage** : TypeScript `^5`
- **Style** : Tailwind CSS `^4`
- **Icônes** : lucide-react `^1.8.0`
- **Qualité** : ESLint `^9`, eslint-config-next `16.2.4`

## 📁 Structure du projet (exemple)

```bash
galerie_auto/
│
├── public/              # assets statiques
├── src/
│   ├── app/             # routes Next.js (App Router)
│   ├── components/      # composants React
│   ├── lib/             # utilitaires / services
│   └── types/           # types TypeScript
├── package.json
└── README.md
```

## ⚙️ Installation

1. Cloner le dépôt :

```bash
git clone <url-du-repo>
cd galerie_auto
```

2. Installer les dépendances :

```bash
npm install
```

3. Lancer en développement :

```bash
npm run dev
```

4. Ouvrir dans le navigateur :  
  `http://localhost:3000`

## 📜 Scripts disponibles

```bash
npm run dev     # lance le serveur de développement
npm run build   # build de production
npm run start   # démarre l'app en production
npm run lint    # vérification ESLint
```

## 👨‍💻 Auteur

Projet réalisé par **[Ton Nom]**  
BTS SIO SLAM — [Nom de l’établissement]

## 📌 Améliorations possibles

- Authentification utilisateur
- Tableau de bord administrateur
- API interne (routes Next.js)
- Tests unitaires / intégration
- Déploiement cloud (Vercel)
