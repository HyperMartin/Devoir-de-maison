<template>

  <div>
    <!-- Fond noir semi-transparent affiché si une modale est ouverte -->
    <!-- La classe "backdrop" est affichée lorsque `activeModal` n'est pas null -->
    <div v-if="activeModal !== null" class="backdrop"></div>

    <!-- Conteneur principal des projets -->
    <aside class="projects">
      <!-- Boucle sur la liste des projets -->
      <!-- `projects` est un tableau contenant les données des projets -->
      <div v-for="(project, index) in projects" :key="index">
        <!-- Bouton pour ouvrir une modale spécifique -->
        <!-- Lors du clic, la modale correspondante est activée en réglant `activeModal` à l'index du projet -->
        <button @click="activeModal = index">
          <!-- Image miniature du projet -->
          <img :src="project.thumbnail" :alt="project.title" />
        </button>

        <!-- Composant Modal1 réutilisable -->
        <!-- Affiché uniquement si la modale correspondante est active (`activeModal === index`) -->
        <Modal1
          v-if="activeModal === index"
          :isOpen="true" 
          :title="project.title" 
          :link="project.link" 
          :description="project.description" 
          :image="project.image"
          @close="activeModal = null"
        />
      </div>
    </aside>
  </div>

</template>



  <script setup>
  // Importation de `ref` depuis Vue
  // `ref` permet de créer des variables réactives qui peuvent être suivies et mises à jour dynamiquement.
  import { ref } from 'vue';

  // Importation du composant enfant `Modal1`
  // Ce composant est utilisé pour afficher les informations d'un projet spécifique sous forme de modale.
  import Modal1 from './Modal1.vue';

  // Définition de la liste des projets
  // Chaque projet est un objet contenant plusieurs propriétés : titre, lien, description, image et miniature.
  const projects = [
    {
      // Titre du projet
      title: 'Devoir sur le CV',
      
      // Lien vers le projet hébergé sur GitHub
      link: 'https://github.com/SuperBarto/Renage.git',
      
      // Brève description du projet
      description: 'Ce projet a été réalisé avec les langages Html et Css en juillet 2024.',
      
      // URL de l'image principale du projet
      // Utilisation de `new URL` pour créer des chemins dynamiques vers les fichiers dans `src/Projet/Illustrations`
      image: new URL('@/Projet/Illustrations/SuperLe.PNG', import.meta.url).href,

      // URL de la miniature utilisée pour représenter le projet
      thumbnail: new URL('@/Projet/Illustrations/Une.PNG', import.meta.url).href,
    },
    {
      title: 'Devoir sur le cahier des charges',
      link: 'https://github.com/SuperBarto/Cahier-des-charges.git',
      description: 'Ce projet est un document PDF, il a été fait avec Microsoft Word en octobre 2024.',
      image: new URL('@/Projet/Illustrations/Charges.PNG', import.meta.url).href,
      thumbnail: new URL('@/Projet/Illustrations/Deux.jpg', import.meta.url).href,
    },
    {
      title: 'Devoir sur les commentaires dynamiques',
      link: 'https://github.com/HyperMartin/DEVOIR-SUR-LE-FORMULAIRE.git',
      description: 'Ce projet a été fait avec les langages Html, JavaScript et Css, il date de décembre 2024.',
      image: new URL('@/Projet/Illustrations/Formu.PNG', import.meta.url).href,
      thumbnail: new URL('@/Projet/Illustrations/Trois.png', import.meta.url).href,
    },
  ];

  // État de la modale active
  // `activeModal` est une variable réactive qui stocke l'index du projet actuellement affiché dans une modale.
  // Par défaut, elle est `null`, indiquant qu'aucune modale n'est ouverte.
  const activeModal = ref(null);
</script>

  
<style scoped>
/* Conteneur principal pour les projets */
.projects {
  display: flex; /* Active le modèle Flexbox pour aligner les projets */
  flex-wrap: wrap; /* Permet de passer à la ligne si nécessaire */
  gap: 20px; /* Espacement entre les éléments du conteneur */
}

/* Style pour le fond noir semi-transparent affiché derrière une modale */
.backdrop {
  position: fixed; /* Fixe le fond noir par rapport à la fenêtre */
  top: 0; /* Positionné en haut de la fenêtre */
  left: 0; /* Positionné à gauche de la fenêtre */
  width: 100%; /* Couvre toute la largeur de l'écran */
  height: 100%; /* Couvre toute la hauteur de l'écran */
  background-color: rgba(0, 0, 0, 0.5); /* Fond noir avec une opacité de 50% */
  z-index: 998; /* Niveau d'empilement pour être derrière la modale */
}

/* Styles pour les images dans les boutons */
button img {
  width: 100px; /* Largeur fixe de l'image */
  height: 100px; /* Hauteur fixe de l'image */
  object-fit: cover; /* Ajuste l'image pour qu'elle remplisse le cadre sans déformation */
  margin: 10px; /* Espacement autour de chaque image */
  padding: 20px; /* Espacement interne autour de l'image */
}

/* Style pour les boutons de la galerie de projets */
button {
  background-color: transparent; /* Arrière-plan transparent */
  border: none; /* Supprime les bordures des boutons */
  cursor: pointer; /* Change le curseur en pointeur au survol */
  padding: 0; /* Supprime tout espacement interne par défaut */
  transition: box-shadow 0.3s ease, transform 0.3s ease; /* Animation fluide sur l'ombre et la transformation */
}

/* Effet de survol pour les boutons */
button:hover {
  box-shadow: 4px 4px #0000006b; /* Ajoute une ombre au survol */
  transform: translate(2px, 2px); /* Décale légèrement le bouton vers le bas et à droite */
}

/* Styles supplémentaires pour le fond noir */
.backdrop {
  position: fixed; /* Fixe le fond noir par rapport à la fenêtre */
  top: 0; /* Positionné en haut de la fenêtre */
  left: 0; /* Positionné à gauche de la fenêtre */
  width: 100%; /* Couvre toute la largeur de l'écran */
  height: 100%; /* Couvre toute la hauteur de l'écran */
  background-color: black; /* Fond complètement noir */
  z-index: 1001; /* Niveau d'empilement plus élevé pour passer devant les autres éléments */
}
</style>
