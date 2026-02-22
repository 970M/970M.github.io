# Structure du projet — 970M.github.io

> Site web personnel développé avec **Vue 3**, **Vue Router** et **Vite**.
> Hébergé sur GitHub Pages à l'adresse `https://970M.github.io`.

---

## Arborescence

```
970M.github.io/
├── index.html
├── vite.config.js
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
├── STRUCTURE.md
│
├── public/
│   └── assets/             ← images servies statiquement
│
└── src/
    ├── main.js
    ├── App.vue
    ├── assets/
    │   └── style.css
    ├── router/
    │   └── index.js
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
        └── xps.js
```

---

## Fichiers racine

### `index.html`
Point d'entrée HTML du projet. Vite l'utilise comme base pour injecter automatiquement les scripts et styles lors du build.
Il contient une seule `<div id="app">` dans laquelle Vue monte l'application, et une balise `<script type="module" src="/src/main.js">` qui démarre tout.

### `vite.config.js`
Configuration du bundler **Vite**. Active le plugin `@vitejs/plugin-vue` qui permet de compiler les fichiers `.vue` (Single File Components).
Le champ `base: '/'` indique que le site est servi à la racine du domaine (GitHub user page).

### `package.json`
Manifeste du projet Node.js. Déclare :
- les **dépendances** de production : `vue`, `vue-router`
- les **dépendances de développement** : `vite`, `@vitejs/plugin-vue`
- les **scripts** npm :
  | Commande | Rôle |
  |---|---|
  | `npm run dev` | Démarre le serveur local avec HMR (Hot Module Reload) |
  | `npm run build` | Génère le build optimisé dans `dist/` |
  | `npm run preview` | Prévisualise le build local avant déploiement |

### `package-lock.json`
Verrouille les versions exactes de toutes les dépendances installées. Généré automatiquement par `npm install`. Ne pas modifier manuellement.

### `.gitignore`
Liste les fichiers et dossiers exclus du dépôt Git :
- `node_modules/` — dépendances npm (trop volumineux pour Git)
- `dist/` — build généré (re-créé à chaque `npm run build`)
- `*.log` — fichiers de logs

---

## `public/`

### `public/assets/`
Dossier d'images et fichiers statiques. Vite copie ce dossier tel quel dans le build final sans le transformer.
Les fichiers sont accessibles via des URL absolues commençant par `/assets/...` dans CSS et dans les templates Vue.

> **Règle :** tout fichier qui doit garder son nom exact (images, favicons, polices locales) doit être placé ici.

---

## `src/` — Code source Vue

### `src/main.js`
Fichier de démarrage de l'application Vue. Il :
1. importe `createApp` depuis Vue
2. importe le composant racine `App.vue`
3. importe le router
4. importe le CSS global
5. monte l'application sur la `<div id="app">` de `index.html`

### `src/App.vue`
Composant racine de l'application. Ne contient que `<router-view />`, qui affiche le composant de la vue correspondant à l'URL courante.
C'est le point de départ de l'arbre de composants Vue.

---

## `src/assets/`

### `src/assets/style.css`
Feuille de styles CSS globale importée dans `main.js`. Contient :
- les variables CSS (palette de couleurs Gruvbox, thème 970M)
- les imports de polices Google Fonts
- les styles de tous les composants : navbar, header, carte de présentation, works, skills, 404
- les animations (`@keyframes`)

> Les URLs de fond d'écran pointent vers `/assets/image-x.jpg` (dossier `public/assets/`).

---

## `src/router/`

### `src/router/index.js`
Définit la navigation du site avec **Vue Router**. Utilise l'historique en mode hash (`#`) compatible GitHub Pages sans configuration serveur.

| Route | Composant affiché |
|---|---|
| `/` | `HomeView.vue` |
| `/works` | `WorksView.vue` |
| `/skills` | `SkillsView.vue` |
| `/contact` | `ContactView.vue` |
| Toute autre URL | `NotFoundView.vue` (404) |

---

## `src/components/`

Composants réutilisables, intégrés dans plusieurs vues.

### `src/components/NavBar.vue`
Barre de navigation présente sur chaque page. Contient les liens `<router-link>` vers toutes les sections du site ainsi qu'un sous-menu pour Works.
Les liens `<router-link>` sont gérés par Vue Router (pas de rechargement de page).

### `src/components/PresentationCard.vue`
Carte de présentation affichée dans le header de la page Home. Contient :
- le titre (nom/prénom) avec animation CSS
- le titre de profession
- une courte description
- le logo `[+|]`

---

## `src/views/`

Une vue = une page du site = un composant associé à une route dans le router.

### `src/views/HomeView.vue`
Page d'accueil. Compose la mise en page principale :
- `<NavBar />` en haut
- un `<header>` avec `<PresentationCard />` et l'image hepta
- les sections `<WorksView />` et `<SkillsView />` intégrées dans le scroll

### `src/views/WorksView.vue`
Page des expériences professionnelles. Itère sur les données du fichier `src/data/xps.js` avec `v-for` pour afficher chaque expérience dans une carte.

### `src/views/SkillsView.vue`
Page des compétences techniques. Structure en grille prête à recevoir le contenu
(section en cours de développement).

### `src/views/ContactView.vue`
Page de contact. Structure de base prête à accueillir un formulaire ou des informations de contact.

### `src/views/NotFoundView.vue`
Page d'erreur **404**. Affichée pour toute URL inconnue. Propose un lien de retour vers la page d'accueil.

---

## `src/data/`

### `src/data/xps.js`
Fichier de données JavaScript pur (pas de composant Vue). Exporte un tableau `xps` contenant les expériences professionnelles, avec pour chaque entrée :
- `id` — nom de l'entreprise
- `description` — description de la mission
- `skills` — liste des technologies utilisées
- `img` — chemin vers l'image (dans `public/assets/`)

> Séparer les données de la vue permet de les modifier sans toucher aux composants, et prépare une future intégration avec une API ou une base de données.

---

## Fichiers hérités (racine)

Ces fichiers étaient présents avant la restructuration. Ils ne sont **plus utilisés** par l'application Vite/Vue et peuvent être archivés ou supprimés.

| Fichier | Ancien rôle |
|---|---|
| `index.js` | Données et logique DOM vanilla JS |
| `vue.js` | Définition des composants et du router Vue (CDN, sans SFC) |
| `style.css` | CSS global (remplacé par `src/assets/style.css`) |
| `assets/` | Images (copiées dans `public/assets/`) |
