### 🚀 Consigne : Création de la page de connexion  

## 🎯 Objectif  
Créer une page de connexion permettant aux utilisateurs de s'authentifier en envoyant leurs informations à l'API et en récupérant un **token de connexion** à stocker dans le `localStorage`.

---

## 📌 Étape 1 : Créer la page de connexion  

1. **Ajoute une nouvelle page dédiée à la connexion** dans ton projet React.  
   - Crée un fichier `Login.jsx`.  
   - Ajoute un formulaire avec deux champs : **email** et **mot de passe**.  
   - Ajoute un bouton pour soumettre le formulaire.  

2. **Mettre en place la navigation**  
   - Assure-toi que ton projet utilise React Router.  
   - Ajoute une route pour accéder à la page de connexion.  

---

## 📌 Étape 2 : Envoyer les informations de connexion à l'API  

1. **Préparer la requête**  
   - Lorsque l’utilisateur soumet le formulaire, envoie une requête `POST` à :  
     ```http
     POST http://localhost:5678/api/users/login
     ```
   - Les données doivent être envoyées en **JSON** avec cette structure :  
     ```json
     {
       "email": "sophie.bluel@test.tld",
       "password": "S0phie"
     }
     ```
   - Pense à inclure les **headers** pour indiquer que tu envoies du JSON.

2. **Différents moyens d'envoyer une requête `POST`**  
   - Avec `fetch` :  
     ```js
     fetch('http://localhost:5678/api/users/login', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ email, password })
     })
     ```
   - Avec `axios` (si tu l'installes) :  
     ```js
     axios.post('http://localhost:5678/api/users/login', { email, password })
     ```

---

## 📌 Étape 3 : Récupérer et stocker le token  

1. **Récupérer la réponse de l’API**  
   - Si les identifiants sont corrects, l'API te retournera un **token**.  
   - Assure-toi de bien gérer les erreurs en cas de mauvais identifiants.

2. **Stocker le token**  
   - Une fois reçu, stocke le **token** dans le `localStorage` pour permettre une connexion persistante.  
   - Exemple de stockage :  
     ```js
     localStorage.setItem('token', token);
     ```
   - Pour récupérer le token plus tard :  
     ```js
     const token = localStorage.getItem('token');
     ```
   - Pour le supprimer lors de la déconnexion :  
     ```js
     localStorage.removeItem('token');
     ```

---

## 📌 Étape 4 : Rediriger après connexion  

- Si la connexion est réussie, redirige l'utilisateur vers la page d’accueil.  
- Si l’authentification échoue, affiche un **message d'erreur**.  

---

## 🎯 Livrable attendu  
- Une page de connexion fonctionnelle.  
- Une requête `POST` envoyant les bonnes informations à l’API.  
- Un token stocké dans le `localStorage` après une connexion réussie.  
- Une redirection automatique après connexion.  
- Un message d’erreur en cas d’identifiants incorrects.  

---

## 🚀 Bonus  
Si tu veux aller plus loin :  
- Ajoute une **gestion d’erreur améliorée** en affichant un message précis selon la réponse de l’API.  
- Vérifie si un utilisateur est déjà connecté en récupérant le token depuis le `localStorage` et en l’utilisant pour éviter qu’il ne repasse par la page de connexion s’il est déjà authentifié.  

Bonne chance ! 🔥💪