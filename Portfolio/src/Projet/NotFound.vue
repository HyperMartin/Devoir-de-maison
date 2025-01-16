<template>

<section class="Zone">

   <!-- Espace supérieur -->
   <div class="Espace1">
        <p>*</p>

      </div>
  
<!-- Contenu principal -->
      <aside>
        <!-- Image affichant l'erreur -->

  <img src="./Illustrations/Message.PNG" alt="Image de  la page 404">
<!-- Message d'erreur -->
<p>
 
  Bonjour. 
  Il semblerait que la page cherchée n'existe pas. 
  Nous nous excusons pour le désagrément causé. Veuillez donc revenir à la page d'accueil.
</p>  

<RouterLink to="/"><span> Retour</span></RouterLink>



  </aside>
  
      <!-- Espace inférieur -->
      <div class="Espace2">
        <p>*</p>
      </div>

</section>

</template>

<script setup>
import { RouterLink } from "vue-router";

</script>

<style scoped>
 .Zone {
    font-family: 'Calibri Light', Calibri, sans-serif; /* Police principale */
    font-size: 20px;
    font-weight: bold;
  }
  
  .Espace1 {
    background: #f12711; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #f5af19, #f12711); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #f5af19, #f12711); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    width: 100%;
    height: 210px;
    position: relative;
    top: -80px;
  }
  
  .Espace1 p {
    opacity: 0; /* Rendre les éléments complètement invisibles */
  }
  
 
  aside img {
    width: 300px;
    height: 300px;
    margin: 80px;
    position: relative;
    left: 460px;
  }
  
  .Espace2 {
    background: #f12711; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #f5af19, #f12711); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #f5af19, #f12711); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    width: 100%;
    height: 210px;
    position: relative;
    top: 80px;
  }
  
  .Espace2 p {
    opacity: 0;
  }

  span{

    text-decoration: none;
    background-color: orange;
    color: white;
    font-weight: bold;

  }
</style>