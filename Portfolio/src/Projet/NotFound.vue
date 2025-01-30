<template>

<!-- Début de la page et importation de Primera -->
<header>  <Primera /></header>

<!-- Contenu principal -->

<main>  
  
 <aside class="Zone">

     
<!-- Image affichant l'erreur -->

 <img src="./Illustrations/Message.PNG" alt="Image de  la page 404">


<!-- Message d'erreur -->
<p>
 
  Bonjour. 
  Il semblerait que la page cherchée n'existe pas. 
  Nous nous excusons pour le désagrément causé. Veuillez donc revenir à la page d'accueil.
</p>  


<!-- Lien vers App.vue-->

<RouterLink to="/"><span> Retour</span></RouterLink>

 </aside>

</main>


<!-- Fin de la page et importation de Tercero-->

<footer>

  <Tercero />

</footer>
  
</template>


<!-- Partie programmation pour les liens entre les fichiers-->

<script>
  // Importation du composant `RouterLink` depuis Vue Router
  // Il permet de créer des liens entre les routes dans une application Vue.js
  import { RouterLink } from "vue-router";

  // Importation des composants locaux
  // Ces composants peuvent être utilisés dans ce composant Vue
  import Primera from "./Primera.vue"; // Composant `Primera`, défini dans le fichier `Primera.vue`
  import Tercero from "./Tercero.vue"; // Composant `Tercero`, défini dans le fichier `Tercero.vue`

  export default {
    // Nom du composant Vue
    name: "NotFound",

    // Définition des composants.
    components: {
      Primera, // Associe le composant importé `Primera` au template
      Tercero, // Associe le composant importé `Tercero` au template
    },
  };
</script>



<style scoped>

.Zone {
    font-family: 'Calibri Light', Calibri, sans-serif; /* Définit une police principale avec des alternatives en cas d'indisponibilité */
    font-size: 20px; /* Taille du texte en pixels */
    font-weight: bold; /* Met le texte en gras */
    margin: 40px; /* Ajoute un espacement externe autour de la zone */
  }

  /* Style pour les images dans les balises <aside> */
  aside img {
    width: 300px; /* Largeur fixe de l'image en pixels */
    height: 300px; /* Hauteur fixe de l'image en pixels */
    margin: 80px; /* Ajoute un espacement externe autour de l'image */
    position: relative; /* Position */
    left: 460px; /* Décale l'image de 460 pixels vers la droite */
  }

  /* Style pour les balises <span> */
  span {
    background-color: orange; /* Définit une couleur de fond orange */
    color: white; /* Définit une couleur de texte blanche */
    font-weight: bold; /* Rend le texte en gras */
  }
</style>



