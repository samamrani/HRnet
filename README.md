# HRnet - Conversion de jQuery vers React

## Description
Ce projet vise à convertir l'application **HRnet**, utilisée par **WealthHealth** pour gérer les dossiers des employés, d'une version utilisant **jQuery** à une version moderne utilisant **React**. L'application est ancienne et présente des problèmes de performance et de stabilité liés à l'utilisation de plugins jQuery, tels que les sélecteurs de date, les fenêtres modales, les menus déroulants, et les tables de données.

## Objectifs
- Convertir l'application HRnet de jQuery à React.
- Remplacer les plugins jQuery par des composants React performants.
- Améliorer les performances globales de l'application grâce à React.
- Effectuer des tests de performance avec **Lighthouse** pour comparer l'ancienne et la nouvelle version de l'application.

## Fonctionnalités converties
1. **Fenêtre modale** : Conversion du plugin `jQuery.modal.js` en un composant React.
2. **Sélecteur de date** : Remplacement du plugin jQuery par un composant React.
3. **Menus déroulants** : Conversion et optimisation.
4. **Tables de données** : Remplacement du plugin existant par une solution React plus rapide.

## Installation

1. Clonez le dépôt GitHub :
   git clone https://github.com/samamrani/HRnet-Projet-14.git

   Installez les dépendances :

npm install
Installez le composant modale samamrani-modal 

npm install samamrani-modal
Lancez l'application en local 

npm start


