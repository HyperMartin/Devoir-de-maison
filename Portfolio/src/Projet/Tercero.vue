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
  import { ref, onMounted } from 'vue';
  
  // Variable réactive pour stocker la date formatée
  const formattedDate = ref('');
  
  // Fonction pour obtenir et formater la date actuelle
  const updateDate = () => {
    const now = new Date(); // Date actuelle
    const day = String(now.getDate()).padStart(2, '0'); // Jour avec deux chiffres
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Mois avec deux chiffres (0-indexé)
    const year = now.getFullYear(); // Année
  
    // Mise à jour de la variable réactive avec la date formatée
    formattedDate.value = `${day}/${month}/${year}`;
  };
  
  // Appeler la fonction pour définir la date au montage du composant
  onMounted(() => {
    updateDate();
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

