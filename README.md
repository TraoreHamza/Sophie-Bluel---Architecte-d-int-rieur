Voici une consigne claire et détaillée pour tes élèves :  

---

# 🚀 Consigne : Création du Frontend avec React  

## 📝 Objectif  
Tu vas développer la partie frontend en **React avec Vite** pour afficher les travaux de l'architecte Sophie Bluel, en utilisant l'API fournie.  

## 📂 Ce que tu as déjà  
- Un fichier `index.html` et un fichier CSS contenant le style de la page d'accueil.  
- Un dossier `backend` avec l'API **déjà faite**.  

## 🛠 Étape 1 : Préparer l'environnement  
1. **Lancer le backend**  
   - Ouvre un terminal, place-toi dans le dossier `backend`.  
   - Installe les dépendances :  
     ```bash
     npm install
     ```
   - Démarre le serveur :  
     ```bash
     npm start
     ```
   - Le backend tournera sur **http://localhost:5678**.  
   - Tu peux accéder à la documentation de l'API ici : [Swagger API Docs](http://localhost:5678/api-docs/).  

2. **Créer un projet React avec Vite**  
   - Place-toi dans le dossier où tu veux créer le projet frontend.  
   - Exécute la commande suivante :  
     ```bash
     npm create vite@latest frontend --template react
     ```
   - Entre dans le dossier créé :  
     ```bash
     cd frontend
     ```
   - Installe les dépendances :  
     ```bash
     npm install
     ```
   - Lance le serveur React :  
     ```bash
     npm run dev
     ```
   - Ouvre ton navigateur à l'adresse indiquée (généralement **http://localhost:5173**).  

## 🎨 Étape 2 : Intégrer le HTML et CSS existants  
- Remplace le contenu du fichier `App.jsx` par le router
- Dans ta page Home.jsx, tu peux reprendre le contenu du fichier `index.html`
- Place le CSS dans un fichier dédié et importe-le dans ton projet React.  

## 🔍 Étape 3 : Afficher les travaux et catégories  
Utilise l'API pour récupérer et afficher les travaux et les catégories dynamiquement :  

### 📡 Récupérer les données  
Voici les endpoints à utiliser :  
- **Récupérer toutes les catégories** :  
  ```http
  GET http://localhost:5678/api/categories
  ```
- **Récupérer tous les travaux** :  
  ```http
  GET http://localhost:5678/api/works
  ```

Utilise `fetch` ou `axios` pour récupérer ces données et afficher les travaux sur la page d’accueil.  

### 🔹 Afficher les travaux  
- Affiche les travaux sous forme de cartes ou de vignettes.  

### 🔹 Ajouter des filtres  
- Affiche les catégories sous forme de boutons.  
- Lorsqu'un bouton est cliqué, filtre les travaux pour afficher uniquement ceux correspondant à la catégorie sélectionnée.  

## 🎯 Livrable attendu  
- Un site React fonctionnel affichant dynamiquement les travaux.  
- Des boutons permettant de filtrer les travaux par catégorie.  
- Un design respectant celui du fichier CSS fourni.  

## 🚀 Bonus  
Si tu as le temps, améliore le projet en :  
- Ajoutant un **loader** lorsque les données sont en cours de chargement.  
- Ajoutant un **message d’erreur** si l’API ne répond pas.  

Bonne chance ! 💪🔥