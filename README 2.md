### 🚀 Consigne : Création de la page d’administration

## 🎯 Objectif

Créer une page d’administration permettant de gérer les projets via l’API. Cette page doit inclure :

- L’affichage des travaux existants.
- Une modal pour supprimer des travaux.
- Une modal pour ajouter de nouveaux travaux.

📌 **Attention :** Il est possible de structurer le code en plusieurs composants comme dans l’exemple donné, mais ce n’est **pas obligatoire**. Tu peux tout faire dans un seul fichier si tu préfères.

---

## 🛠 Étape 1 : Mettre en place la page Admin

1. **Créer une page dédiée à l'administration**
   - Crée un fichier `Admin.jsx` et ajoute une structure de base.
   - Ajoute un **état (`useState`)** pour stocker la liste des travaux.
   - Utilise `useEffect` pour récupérer les données depuis l’API au chargement de la page.
   - API pour récupérer les travaux :
     ```http
     GET http://localhost:5678/api/works
     ```
   - Affiche les travaux sous forme de galerie.

---

## 🛠 Étape 2 : Ajouter la fonctionnalité de suppression

1. **Ajout d’un bouton “Éditer”**

   - Place un bouton “Éditer” à côté du titre **Mes Projets**.
   - Lorsque l’utilisateur clique dessus, ouvre une **modal** contenant tous les travaux.
2. **Supprimer un travail**

   - Chaque travail dans la modal doit avoir une **icône de suppression**.
   - Lorsqu’un utilisateur clique dessus, envoie une requête `DELETE` à :
     ```http
     DELETE http://localhost:5678/api/works/{id}
     ```
   - **Pense à envoyer le token de connexion** dans les headers :
     ```json
     {
       "Authorization": "Bearer token"
     }
     ```
   - Une fois la suppression effectuée, mets à jour la liste des travaux sans recharger la page.

---

## 🛠 Étape 3 : Ajouter la fonctionnalité d'ajout

1. **Ajout d’un bouton “Ajouter une photo”**

   - Ajoute un bouton **“Ajouter une photo”** dans la modal de suppression.
   - Lorsqu’un utilisateur clique dessus, ferme la modal actuelle et ouvre une **nouvelle modal** pour l’ajout d’un travail.
2. **Création du formulaire d’ajout**

   - Ajoute un champ pour **choisir une image** (afficher un aperçu).
   - Ajoute un champ pour **saisir un titre**.
   - Ajoute un menu déroulant pour **choisir une catégorie**.
   - API pour récupérer les catégories :
     ```http
     GET http://localhost:5678/api/categories
     ```
   - API pour ajouter un travail :
     ```http
     POST http://localhost:5678/api/works
     ```
   - **Données à envoyer (FormData)** :
     - `image` (fichier)
     - `title` (texte)
     - `category` (id de la catégorie)
3. **Gérer la soumission du formulaire**

   - Une fois le travail ajouté, **ferme la modal et mets à jour la liste des travaux**.

---

## 🎯 Livrable attendu

- Une page Admin avec la liste des travaux récupérée dynamiquement.
- Un bouton **Éditer** ouvrant une modal de suppression.
- Un bouton **Ajouter une photo** ouvrant une modal d’ajout.
- La possibilité de **supprimer un travail** avec mise à jour immédiate.
- La possibilité **d’ajouter un travail** en renseignant une image, un titre et une catégorie.

---

## 🚀 Bonus

Si tu veux aller plus loin :

- Ajoute une **animation d’ouverture et de fermeture** des modals.
- Ajoute une **barre de progression** pour le chargement de l’image lors de l’ajout d’un travail.
- Empêche l’ajout d’un travail si un champ est vide.

Bonne chance ! 🔥💪
