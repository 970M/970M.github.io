# 970M.github.io

---

## PROJET

Acquérir des compétences dans les technologies Web à travers le développement d'un site personnel permettant de présenter mes activités.

    Objectifs :

    -ooo HTML/CSS
    -ooo Javascript
    --oo Vue
    ---- Vue CLI
    --oo Vue-Router
    --oo Git / GitHub (gestion des branches)
    ---- Tests Unitaires /navigateur
    ---- Intégrer une BDD
    ---o Node JS
    ---o API

    ---- Inconnu, ---o Insuffisant, --oo Moyen, -ooo Bon, oooo Maîtrisé

Mettre à jour régulièrement le logbook afin de constituer un journal de bord. J'aimerais pouvoir y intégrer mes réflexions, mes erreurs et mes démarches pour mener à terme le projet.

## BACKLOG

### --- TO DO

### Création d'un portail Web personnel comprenant :

#### E01 - Un portfolio professionnel de présentation de mes activités

##### E01.1 Page Home

##### E01.2 Page Works

##### E01.3 Page Skills

##### E01.4 Page contact

#### E02 - Amélioration et intégration de l'outil de conversion de QCM

##### E02.1 Finir la gestion du formatage du texte

##### E02.2 Intégrer le CSS

##### E02.3 Mettre le liens de la page dans le menu de la page Home

### --- DONE

---

## JOURNAL DE BORD

#### > 2022-02-06

**Ordre du jour**

Lancement du projet et initialisation du fichier README.MD

**Points soulevés / Action**

-   Définir une première livraison en terme de fonctionnalité en détaillant les exigences. Échéance brève.

-   Le site utilise Vue3 JS et comporte à ce stade:

    -   Une page home avec un style graphique intéressant
    -   La définition et l'utilisation de quelques composants
    -   L'implémentation de vue-router et d'un menu fonctionnel.
    -   Quelques essais d'animation trop chargées à mon goût (menu collant, logo qui bouge, menu flexbox)

-   Problèmes pour bien ajuster les éléments avec CSS: Comment mettre en forme la grid pour présenter les experiences ?; Menu collant qui se décale. Il faut que je fasse la formation MDN:

> https://developer.mozilla.org/fr/docs/Learn/Front-end_web_developer

-   Pressentiment que la gestion des composants va devenir complexe et qu'il faut passer à Vue CLI :

> https://www.youtube.com/watch?v=L5_KLnHjt1M

**Prochaines séances (ordres du jour)**

-   Architecture du site
-   Mise en place de Vue CLI
-   Détailler les exigences, définir une livraison

#### > 2022-02-20

**_Info_**

Projet en standby pour suivre la formation Web Mozilla Developer Network (MDN)

#### > 2026-02-22

**Ordre du jour**

Restructuration du projet avec Claude Sonnet 4.6

Le projet est restructuré et le serveur de dev tourne sur http://localhost:5173/. Voici le résumé de ce qui a été fait :

970M.github.io/
├── index.html           ← point d'entrée Vite (remplacé)
├── vite.config.js       ← config Vite (nouveau)
├── package.json         ← dépendances Vue 3 + Vue Router + Vite (nouveau)
├── public/
│   └── assets/          ← images statiques (copie de assets/)
└── src/
    ├── main.js          ← bootstrap Vue app
    ├── App.vue          ← composant racine
    ├── assets/
    │   └── style.css    ← CSS migré (url() mis à jour → /assets/...)
    ├── router/
    │   └── index.js     ← routes Vue Router
    ├── components/
    │   ├── NavBar.vue
    │   └── PresentationCard.vue
    ├── views/
    │   ├── HomeView.vue
    │   ├── WorksView.vue
    │   ├── SkillsView.vue
    │   ├── ContactView.vue
    │   └── NotFoundView.vue
    └── data/
        └── xps.js       ← données extraites de index.js


Commandes :

npm run dev → serveur local avec HMR
npm run build → build optimisé dans dist/ (à déployer sur GitHub Pages)
npm run preview → prévisualiser le build

**Points soulevés / Action**

Les anciens fichiers racine (vue.js, index.js, style.css, assets) peuvent être supprimés une fois que tu as vérifié que tout fonctionne.


**Prochaines séances (ordres du jour)**

Deux options de déploiement :

Option 1 — Déploiement manuel (simple)
Puis pousser le contenu de dist/ sur la branche gh-pages (ou la racine de main selon ta config GitHub Pages).

Option 2 — GitHub Actions (automatique, recommandé)
Créer un fichier .github/workflows/deploy.yml qui :

se déclenche à chaque git push
lance npm run build
déploie automatiquement dist/ sur GitHub Pages
Un point important : le base dans vite.config.js
Pour un GitHub user page (970M.github.io) le base: '/' actuel est correct.
Pour un GitHub project page (970M.github.io/mon-repo) il faudrait mettre base: '/mon-repo/'.

Le mode hash du router ✅
Le router utilise déjà createWebHashHistory() (URLs avec #), ce qui est compatible GitHub Pages sans aucune configuration serveur. C'est le bon choix.



Fichier GitHub Actions créé. Pour que ça fonctionne, il faut activer GitHub Pages côté GitHub :

Aller dans ton repo → Settings → Pages
Dans Source, choisir GitHub Actions (pas "Deploy from a branch")
Sauvegarder
Ensuite le cycle est automatique :

Le workflow :

se déclenche uniquement sur un push vers main
installe les dépendances (npm ci)
lance npm run build
publie le contenu de dist/ sur https://970m.github.io




#### > YYYY-MM-DD

**Ordre du jour**

**Points soulevés / Action**

**Prochaines séances (ordres du jour)**




---


