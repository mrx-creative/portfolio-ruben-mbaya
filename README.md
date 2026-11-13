# Portfolio de MBAYA MBAYA Ruben

## Pourquoi j'ai créé ce portfolio

Je suis licencié en informatique de gestion, filière Conception des systèmes d'information, à l'Institut Supérieur de Commerce de Lubumbashi (ISC). En parallèle de ma formation, je développe peu à peu le design graphique et la communication visuelle. Ces deux univers font partie de moi, mais ils étaient dispersés.

J'ai voulu les réunir au même endroit. Ce portfolio me permet de présenter mon parcours, mes expériences, mes projets et mes créations de façon claire et sincère, aux entreprises, aux recruteurs et aux clients qui voudront me connaître.

## Comment je l'ai pensé

Je voulais un site calme et sérieux, qui laisse le contenu respirer. J'ai donc choisi une palette réduite : un noir profond, un blanc cassé, un gris et un seul bleu électrique, que j'utilise avec retenue. Un bouton flottant me permet de passer du mode sombre au mode clair.

J'ai tenu à rester honnête. Je n'ai inventé aucun pourcentage de maîtrise : mes compétences portent les étiquettes « Acquis », « En formation » ou « En apprentissage », selon ce qu'elles sont vraiment aujourd'hui. Je n'ai inventé ni projet ni responsabilité : mes expériences sont présentées telles que je les ai vécues, et mes projets s'ajouteront au fur et à mesure qu'ils existeront. Le logo et le portrait sont les miens, sans retouche de mon identité.

## Comment je l'ai construit

J'ai écrit le site en HTML5, CSS3 et JavaScript natif, sans framework. Je voulais un site léger et rapide, qui fonctionne sans serveur et que je peux héberger gratuitement sur GitHub Pages. Les polices Inter et Space Grotesk se chargent en ligne quand c'est possible. Sinon, le site utilise les polices du système et reste lisible.

J'ai séparé la structure, le style et le comportement pour pouvoir les modifier facilement :

```
portfolio/
├── index.html          Structure et contenus (parcours, compétences, expériences)
├── README.md
├── css/style.css       Styles et thèmes
├── js/script.js        Configuration (projets, galerie, réseaux) et interactions
└── assets/
    ├── images/         logo.png, portrait.jpg, projects/, gallery/
    ├── documents/      CV-Ruben-Mbaya.pdf
    └── icons/
```

## Le mettre en route

J'ajoute d'abord mes propres fichiers : `assets/images/logo.png`, `assets/images/portrait.jpg` et `assets/documents/CV-Ruben-Mbaya.pdf`. Tant qu'ils manquent, le site affiche mes initiales à la place des images, et le bouton du CV n'a rien à télécharger.

Pour le tester sur mon ordinateur, j'extrais l'archive en entier, puis j'ouvre `index.html` sans le déplacer. Il a besoin des dossiers `css`, `js` et `assets` à côté de lui, sinon il n'affiche que du texte.

## Le faire évoluer

* **Réseaux sociaux** : je colle mes liens dans `SOCIAL`, dans `js/script.js`. Un champ vide masque le bouton, pour qu'aucun lien ne reste à vide.
* **Projets** : j'ajoute un objet dans `PROJECTS` et je dépose l'image dans `assets/images/projects/`.
* **Galerie** : j'ajoute un objet dans `GALLERY` et je dépose l'image dans `assets/images/gallery/`. Les catégories sont Affiches, Design graphique, Photographie et Audiovisuel.
* **Expériences et compétences** : je duplique un élément `<li>` dans `index.html`.

## Le publier sur GitHub Pages

Je crée un dépôt GitHub public, par exemple `monportfolio`, et j'y envoie le contenu du dossier `monportfolio/`, avec `index.html` à la racine du dépôt. Dans **Settings > Pages**, je choisis **Deploy from a branch**, la branche `main` et le dossier `/ (root)`. Après quelques minutes, mon site est en ligne sur `https://VOTRE-NOM.github.io/portfolio/`.

