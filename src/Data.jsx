const Data = [
  {
    id: 1,
    titre: "Introduction à ReactJS",
    niveau: "Débutant",
    description:
      "Comprendre les bases de React, le rôle des composants et l’architecture du framework.",
    contenu:
      "React est une bibliothèque JavaScript créée par Facebook pour construire des interfaces utilisateur. Elle est basée sur le concept de composants, du Virtual DOM et du rendu déclaratif. Dans ce chapitre, vous allez apprendre comment fonctionne React, comment créer votre premier projet et comprendre les avantages qu'il apporte.",
    video: "https://www.youtube.com/embed/Tn6-PIqc4UM",
  },
  {
    id: 2,
    titre: "JSX et Composants",
    niveau: "Débutant",
    description:
      "Découvrir JSX, les composants fonctionnels, les props et le rendu dynamique.",
    contenu:
      "JSX est une extension de syntaxe JavaScript qui permet d'écrire du code HTML dans JavaScript. Les composants sont les briques principales d'une application React. Ce chapitre explique comment créer des composants réutilisables, comment passer des props et comment gérer le rendu dynamique.",
    video: "https://www.youtube.com/embed/Ke90Tje7VS0",
  },
  {
    id: 3,
    titre: "Props : Passer des données aux composants",
    niveau: "Débutant",
    description:
      "Apprendre à utiliser les props pour envoyer des données du parent à l’enfant.",
    contenu:
      "Les props sont des paramètres que l'on envoie à un composant enfant. Elles permettent de passer des données du parent à l’enfant. Ce chapitre explique comment créer un composant réutilisable et utiliser les props pour personnaliser son contenu.",
    video: "https://www.youtube.com/embed/Ke90Tje7VS0",
  },
  {
    id: 4,
    titre: "useState : Gestion des États",
    niveau: "Débutant",
    description:
      "Apprendre à gérer les états dans un composant avec le hook useState.",
    contenu:
      "Le Hook useState permet d’ajouter un état local à un composant fonctionnel. Il retourne une valeur et une fonction permettant de la modifier. Dans ce chapitre vous verrez comment utiliser useState pour gérer des compteurs, formulaires, toggles, etc.",
    video: "https://www.youtube.com/embed/O6P86uwfdR0",
  },
  {
    id: 5,
    titre: "useEffect : Effets secondaires",
    niveau: "Intermédiaire",
    description:
      "Comprendre l'exécution des effets (API, timers, événements...).",
    contenu:
      "useEffect permet d'exécuter du code après le rendu du composant. Il est utilisé pour les appels API, le DOM, les timers et la synchronisation de données. Vous apprendrez à gérer les dépendances, les nettoyages et éviter les boucles infinies.",
    video: "https://www.youtube.com/embed/0ZJgIjIuY7U",
  },
  {
    id: 6,
    titre: "React Router",
    niveau: "Intermédiaire",
    description: "Mettre en place la navigation entre pages avec React Router.",
    contenu:
      "React Router est la bibliothèque standard pour gérer la navigation dans React. Vous apprendrez à configurer les routes, créer une navigation dynamique, gérer les paramètres d’URL et les pages 404.",
    video: "https://www.youtube.com/embed/Ul3y1LXxzdU",
  },
  {
    id: 7,
    titre: "Formulaires et gestion des inputs",
    niveau: "Intermédiaire",
    description:
      "Créer des formulaires, gérer les validations et récupérer les données.",
    contenu:
      "Les formulaires sont essentiels dans React. Vous verrez comment gérer les contrôles, validations, erreurs, champs dynamiques et soumissions. Ce module inclut aussi l’utilisation de useState, useEffect et les bonnes pratiques.",
    video: "https://www.youtube.com/embed/kGIXjimcEXw",
  },
  {
    id: 8,
    titre: "useRef : Références et valeurs persistantes",
    niveau: "Intermédiaire",
    description:
      "Manipuler directement le DOM ou stocker une valeur persistante sans re-render.",
    contenu:
      "Le Hook useRef permet de créer une référence mutable qui persiste entre les re-renders. Il est souvent utilisé pour accéder à des éléments DOM, stocker des timer IDs, ou garder une valeur sans déclencher un re-render du composant.",
    video: "https://www.youtube.com/embed/t2ypzz6gJm0",
  },
  {
    id: 9,
    titre: "useContext : Contexte global",
    niveau: "Intermédiaire",
    description:
      "Partager des données entre composants sans les passer manuellement.",
    contenu:
      "Le contexte est utilisé pour éviter le prop-drilling (passage de props sur plusieurs niveaux). Ce chapitre vous apprend à créer un context global, un provider et consommer les données dans plusieurs composants.",
    video: "https://www.youtube.com/embed/5LrDIWkK_Bc",
  },
  {
    id: 10,
    titre: "API Fetch & Axios",
    niveau: "Intermédiaire",
    description:
      "Consommer une API REST dans React, gérer les erreurs et le chargement.",
    contenu:
      "Vous apprendrez à utiliser fetch et axios pour récupérer des données depuis une API, gérer les erreurs, loaders, re-render et optimiser les appels API avec useEffect.",
    video: "https://www.youtube.com/embed/PoRJizFvM7s",
  },
  {
    id: 11,
    titre: "useReducer : Gestion avancée des états",
    niveau: "Avancé",
    description:
      "Alternative puissante à useState pour gérer des états complexes.",
    contenu:
      "useReducer permet de gérer des états multiples avec un reducer (comme Redux mais interne à React). Ce chapitre convient pour les formulaires complexes, compteurs avancés ou logique conditionnelle lourde.",
    video: "https://www.youtube.com/embed/kK_Wqx3RnHk",
  },
  {
    id: 12,
    titre: "Redux Toolkit",
    niveau: "Avancé",
    description: "Gestion d’état globale avec Redux Toolkit (RTK).",
    contenu:
      "Redux Toolkit est la version moderne de Redux. Vous apprendrez à configurer un store, créer des slices, des reducers, des actions, utiliser useDispatch et useSelector, et gérer les données globales d’une application.",
    video: "https://www.youtube.com/embed/9zySeP5vH9c",
  },
  {
    id: 13,
    titre: "Optimisation des performances",
    niveau: "Avancé",
    description:
      "Utiliser useMemo, useCallback, memo et Virtual DOM efficacement.",
    contenu:
      "React offre des hooks pour optimiser vos composants. Vous apprendrez comment éviter les re-renders inutiles, optimiser les listes, rendre votre application plus rapide et scalable.",
    video: "https://www.youtube.com/embed/THL1OPn72vo",
  },
  {
    id: 14,
    titre: "Déployer une application React",
    niveau: "Débutant",
    description:
      "Déployer un site React en production (Netlify, Vercel, GitHub Pages).",
    contenu:
      "À la fin du cours, vous apprendrez à générer une build, déployer sur Netlify ou Vercel, configurer une URL personnalisée et optimiser votre site pour le SEO.",
    video: "https://www.youtube.com/embed/4CacA0Zbb6E",
  },
  {
    id: 15,
    titre: "useMemo : Mémoisation des valeurs",
    niveau: "Avancé",
    description:
      "Optimiser les calculs lourds en les mémorisant pour éviter les recalculs inutiles.",
    contenu:
      "useMemo mémorise le résultat d'un calcul complexe tant que ses dépendances ne changent pas. Très utile pour le tri, le filtrage, les calculs coûteux ou les grandes listes. Ce chapitre vous explique quand et comment s’en servir correctement.",
    video: "https://www.youtube.com/embed/fRH7ZVGKEm8",
  },
  {
    id: 16,
    titre: "useCallback : Mémoisation des fonctions",
    niveau: "Avancé",
    description:
      "Éviter que les fonctions se recréent inutilement à chaque rendu.",
    contenu:
      "useCallback mémorise une fonction et ne la recrée que si l’une de ses dépendances change. Indispensable pour optimiser les composants enfants, éviter les re-render avec React.memo et améliorer les performances de votre application.",
    video: "https://www.youtube.com/embed/_ayFP5s69N4",
  },
];

export default Data;
