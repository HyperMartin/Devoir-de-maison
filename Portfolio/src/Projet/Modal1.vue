<template>

  <!-- Conteneur principal de la modale -->
  <!-- La modale est visible uniquement si `isOpen` est vrai -->
  <div v-if="isOpen" class="modal">
    
    <!-- Titre du projet affiché dans la modale -->
    <h2>{{ title }}</h2>

    <!-- Lien vers le projet -->
    <!-- Le lien s'ouvre dans un nouvel onglet grâce à `target="_blank"` -->
    <a :href="link" target="_blank">Voir le projet</a>

    <!-- Description du projet -->
    <p>{{ description }}</p>

    <!-- Image principale du projet -->
    <!-- L'attribut `:src` permet de charger dynamiquement l'image -->
    <img :src="image" :alt="title" />

    <!-- Bouton pour fermer la modale -->
    <!-- Au clic, la fonction `closeModal` est déclenchée -->
    <button @click="closeModal">Fermer</button>
  </div>

</template>

  <script setup>
  // Importation des fonctions pour définir des props et émettre des événements
  import { defineProps, defineEmits } from 'vue';

  // Définition des props
  // Ces props permettent au composant de recevoir des données dynamiques depuis le composant parent.
  const props = defineProps({
    isOpen: Boolean, // Contrôle si la modale est ouverte ou fermée (true/false)
    title: String, // Titre du projet à afficher dans la modale
    link: String, // URL du projet à afficher sous forme de lien
    description: String, // Description textuelle du projet
    image: String, // Chemin ou URL de l'image associée au projet
  });

  // Gestion des événements
  // Déclare les événements que ce composant peut émettre
  const emit = defineEmits(['close']); // L'événement 'close' est utilisé pour fermer la modale.

  // Fonction pour fermer la modale
  const closeModal = () => {
    emit('close'); // Émet l'événement 'close' vers le composant parent.
  };
</script>

  
  <style scoped>
  /* Liens vers les projets */
  .modal a {
        display: inline-block;
        margin-top: 10px;
        text-decoration: none;
        color: orange;
        font-weight: bold;
      }
      
      .modal a:hover {
        color: #0056b3;
      }
      
      .modal h2{
      
        text-decoration: underline;
        color: blue;
      }
  
      /* Bouton de fermeture */
 button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: #e0115f;

  /* Supprime les animations et effets */
  box-shadow: none !important; /* Pas d'ombre */
  transform: none !important; /* Pas de translation */
  transition: none !important; /* Pas d'animation */
}

.modal {
  position: fixed; /* Position fixe pour le garder au même endroit même lors du défilement */
  top: 50%; /* Centre verticalement */
  left: 50%; /* Centre horizontalement */
  transform: translate(-50%, -50%); /* Ajuste le positionnement au centre */
  width: 550px; /* Largeur du modal */
  height: 550px; /* Hauteur du modal */
  padding: 20px; /* Espacement interne */
  background-color: white; /* Fond blanc */
  border-radius: 8px; /* Coins arrondis */
  z-index: 1500; /* Superposition maximale */
  border: 12px solid silver;

}


   /* Images dans le modal */
   .modal img {
        width: 90%;
        height: 340px;
        border-radius: 7%;
        margin: 20px;
    
      }

  </style>
  