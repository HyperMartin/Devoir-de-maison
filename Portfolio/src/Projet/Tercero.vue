<template>
    <section class="Dernier"> 
      <!-- Ancre pour la navigation -->
      <p id="reseaux">* </p>
      <h3>Réseaux sociaux :</h3>
  
      <!-- Liens vers les réseaux sociaux -->
      <nav>
        <a href="https://x.com/Pilganzeoffi" target="_blank">
          <img src="./Illustrations/X.png" alt="Lien vers X" title="X" />
        </a>
        <a href="https://www.linkedin.com/in/lehen-haldin-effa-anda" target="_blank">
          <img src="./Illustrations/Linkedin.PNG" alt="Lien vers LinkedIn" title="LinkedIn" />
        </a>
      </nav>
  
      <!-- Affichage dynamique de la date de dernière mise à jour -->
      <p>Dernière mise à jour : {{ formattedDate }}</p>
    </section>
  </template>
  
  <script setup>
  // Utilisation de Vue's Composition API pour gérer la date dynamique
  import { ref} from 'vue';
  
  // Variable réactive pour stocker la date formatée
  let formattedDate = ref('null');
  
 formattedDate= new Date().toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour:'numeric'
        });

  </script >
  
  <style scoped>
  /* ========================
     FOOTER
  ======================== */
  
  /* Style général du footer */
  .Dernier {
    background: #348F50; /* Dégradé vert-bleu */
    background: -webkit-linear-gradient(to right, #56B4D3, #348F50); /* Chrome/Safari */
    background: linear-gradient(to right, #56B4D3, #348F50); /* Standard */
    color: white; /* Texte blanc */
    padding: 30px; /* Espacement interne */
    font-weight: bold; /* Texte en gras */
  }
  
  .Dernier h3 {
    text-decoration: underline; /* Soulignement pour le titre */
    color: white;
  }
  
  .Dernier nav {
    padding-top: 20px;
    display: grid; /* Utilisation de CSS Grid */
    grid-template-columns: repeat(auto-fit, minmax(50px, auto)); /* Colonnes dynamiques */
    gap: 10px; /* Espacement entre les éléments */
    justify-content: start; /* Alignement à gauche */
  }
  
  .Dernier nav img {
    width: 50px; /* Taille des icônes */
    height: 50px; /* Taille proportionnelle */
    border-radius: 30%; /* Coins arrondis */
    transition: transform 0.3s ease, opacity 0.3s ease; /* Transition fluide au survol */
  }
  
  .Dernier img:hover {
    transform: scale(1.1); /* Effet d'agrandissement au survol */
    opacity: 0.8; /* Réduction de l'opacité */
  }

/* Masque l'élément de repère pour "réseaux sociaux" */
#reseaux {
    opacity: 0; /* Rendre cet élément également invisible */
}


  </style>

