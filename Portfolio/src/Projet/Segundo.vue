<template>
  <!-- Section de présentation -->
  <p id="presentation">* </p> <!-- Ancre pour la navigation -->
      <section class="Phase1">
          <!-- Titre de la section présentation -->
          <h2>Présentation :</h2>

          <!-- Photo de présentation -->
          <img src="./Illustrations/Legends.jpg" alt="Photo de présentation">

          <!-- Texte descriptif de la présentation -->
          <p>

Je me nomme Léhèn-Haldin EFFA – ANDA et je suis actuellement étudiant au Centre Européen de Formation (C.E.F).
Depuis ma jeunesse, ma passion pour l’informatique m’a naturellement orienté vers la création de sites web. Après avoir obtenu mon Diplôme National du Brevet (DNB) ainsi que mon baccalauréat, j’ai choisi de poursuivre mes études supérieures dans ce domaine passionnant.
Parallèlement, j’ai acquis trois certifications en programmation, attestant de mes compétences techniques :

</p>

          <!-- Liste des certifications obtenues -->
          <ul>
              <li>Certification pour le langage de programmation C++.</li>
              <li>Certification pour le langage de programmation Python.</li>
              <li>Certification pour le langage de programmation Java.</li>
          </ul>

          
         <!-- Suite de la présentation. -->
   
         <p>
          Ma formation et mes projets m’ont permis de développer des compétences solides en développement web et de réaliser plusieurs créations que vous pouvez découvrir ici.
         Convaincu que notre collaboration pourrait marquer le début d’une belle aventure professionnelle, je vous invite à me contacter via le formulaire ci-dessous. 
         C’est avec enthousiasme et sérieux que je serais ravi d’échanger avec vous pour répondre à vos besoins et vous accompagner dans vos projets numériques
         ⭐.       
         </p>
      </section>

  
      <p id="projets">* </p> <!-- Ancre pour la navigation -->


<section class="Phase2">
<!-- Titre de la section projets -->
<h2>Projets :</h2>

<p>Voici un aperçu de mes réalisations.</p>

<br />


<!-- Fond noir semi-transparent affiché si un modal est ouvert -->
<div v-if="open || open2 ||open3" class="backdrop"></div>


  <!-- Les modals -->

<aside class="Réalisations">

<!-- Premier modal -->


<!-- Image cliquable pour ouvrir la modal -->

  <button @click="open = true" ><img src="./Illustrations/Une.PNG" alt="Projet 1"></button>

  
  <div v-if="open" class="modal">
<!-- Titre du projet -->

<h2>Devoir sur le CV :</h2>

<!-- Lien vers le projet -->

<a href="https://github.com/SuperBarto/Renage.git" target="_blank">Voir le projet</a>

<!-- Description du projet -->
<p>Ce projet a été réalisé avec les langages Html et Css en juillet 2024.</p>

 <!-- Image illustrant le projet -->
<img src="./Illustrations/SuperLe.PNG" alt="Projet 1">

<!-- Bouton pour fermer la modal -->

<button @click="open = false" class="close-button">Fermer</button>

  </div>



<!-- Deuxième modal -->
  <button @click="open2 = true">  <img src="./Illustrations/Deux.jpg" alt="Projet 2">
  </button>

<div v-if="open2" class="modal">

<!-- Titre du projet -->
<h2>Devoir sur le cahier des charges :</h2>
      
 <!-- Lien vers le projet -->
<a href="https://github.com/SuperBarto/Cahier-des-charges.git" target="_blank">Voir le projet</a>

 <!-- Description du projet -->
 <p>Ce projet est un document PDF, il a été fait avec Microsoft Word en octobre 2024.</p>

<!-- Image illustrant le projet -->
<img src="./Illustrations/Charges.PNG" alt="Projet 2">

 
<!-- Bouton pour fermer la modal -->

    <button @click="open2 = false" class="close-button">Fermer</button>

  </div>


    <!-- Troisième modal -->

<button @click="open3 = true"> <img src="./Illustrations/Trois.png" alt="Projet 3">
</button>


<div v-if="open3" class="modal">
<!-- Titre du projet -->
<h2>Devoir sur les commentaires dynamiques :</h2>
      
<!-- Lien vers le projet -->
<a href="https://github.com/HyperMartin/DEVOIR-SUR-LE-FORMULAIRE.git" target="_blank">Voir le projet</a>
     
<!-- Description du projet -->
<p>Ce projet a été fait avec les langages Html, JavaScript et Css, il date de décembre 2024.</p>
     
<!-- Image illustrant le projet -->
<img src="./Illustrations/Formu.PNG" alt="Projet 3"> 

<button @click="open3 = false" class="close-button">Fermer</button>
</div>

</aside>

</section>

  
<!-- Section de contact -->
<p id="contact">* </p> <!-- Ancre pour la navigation -->
<section class="Phase3">
<!-- Titre de la section contact -->
<h2>Formulaire de contact :</h2>

<!-- Formulaire de contact -->
<form method="post" action="traitement.php">

<!-- Champ pour le nom -->
<label for="nom">Nom</label>
<input type="text" id="nom" name="nom" required>

<!-- Champ pour le prénom -->
<label for="prenom">Prénom</label>
<input type="text" id="prenom" name="prenom" required>

<!-- Champ pour l'objet du message -->
<label for="Sujet">Objet</label>
<input type="text" id="Sujet" name="Sujet" required>

<!-- Champ pour l'email -->
<label for="email">Email</label>
<input type="email" id="email" name="email" required>

<!-- Champ pour le message -->
<label for="message">Message</label>
<textarea id="message" name="message" rows="5" required></textarea>

<!-- Bouton pour envoyer le formulaire -->
<button type="submit">Envoyer</button>
          </form>
      </section>
</template>




<script setup>
import { ref } from 'vue';

// États pour gérer l'ouverture des modals
const open = ref(false);
const open2 = ref(false);
const open3=ref(false);
</script>


<style scoped>


 /* Espacement des sections */
 section {
    margin-top: 20px; /* Espacement supérieur */
    padding: 25px; /* Espacement interne */
  }
  

/* ========================
   PRÉSENTATION (Phase1)
  ======================== */
  
  /* Titre de la section présentation */
  .Phase1 h2 {
    text-decoration: underline; /* Soulignement pour le titre */
    color: orange; /* Couleur du texte */
  }
  
  /* Image de présentation */
  .Phase1 img {
    width: 270px; /* Largeur fixe */
    border-radius: 30%; /* Coins arrondis */
    margin: 20px 0; /* Espacement vertical */
  }
  
  /* Texte descriptif */
  .Phase1 p {
    font-weight: bold; /* Texte en gras */
    text-align: justify; /* Alignement justifié */
    margin-bottom: 20px; /* Espacement en bas */
  }
  
  /* Liste des certifications */
  .Phase1 ul {
    color: #00dbde; /* Couleur du texte */
    font-weight: bold; /* Texte en gras */
    margin-left: 20px; /* Décalage à gauche */
  }
  
  .Phase1 ul li {
    margin-bottom: 10px; /* Espacement entre les items */
  }
  
  
  /* Styles pour le fond noir */
    .backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black; /* Fond noir */
      z-index: 1001; /* Derrière le modal mais devant le reste */

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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Ombre */
  z-index: 1500; /* Superposition maximale */
}

    
     /* Titre de la section projets */
     .Phase2 h2 {
        color: red; /* Couleur du titre */
        text-decoration: underline; /* Soulignement */
        padding: 15px;/*Espace*/
      }
     
      p{ font-weight: bold;}
      
      /* Galerie de projets */
.Réalisations button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: box-shadow 0.3s ease, transform 0.3s ease; /* Animation fluide */
}

.Réalisations button:hover {
  box-shadow: 4px 4px #0000006b; /* Ombre vers le bas et à droite */
  transform: translate(2px, 2px); /* Déplace légèrement le bouton pour un effet visuel */


}  


    
      button img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        margin: 10px;
        padding: 20px;
      }
    
    /* Images dans le modal */
    .modal img {
        width: 90%;
        height: 340px;
        border-radius: 7%;
        margin: 20px;
        
    
      }
    
    
      /* Bouton de fermeture */
.close-button {
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
  

  /* ========================
   FORMULAIRE DE CONTACT (Phase3)
  ======================== */
  
  /* Conteneur principal du formulaire */
  .Phase3 form {
    display: flex; /* Flexbox pour aligner les champs verticalement */
    flex-direction: column; /* Orientation verticale */
    background-color: white; /* Fond blanc */
    padding: 20px; /* Espacement interne */
    border-radius: 10px; /* Coins arrondis */
    width: 90%; /* Largeur relative */
    max-width: 600px; /* Largeur maximale */
    margin: 20px ; /* Centre horizontalement */
  }
  
  /* Les labels des champs */
  .Phase3 label {
    margin-bottom: 8px; /* Espacement sous chaque label */
    font-weight: bold; /* Texte en gras */
    color: #333; /* Couleur du texte */
  }
  
  /* Les champs de texte */
  .Phase3 input,
  .Phase3 textarea {
    margin-bottom: 15px; /* Espacement entre les champs */
    padding: 10px; /* Espacement interne */
    border: 1px solid #ccc; /* Bordure grise */
    border-radius: 5px; /* Coins arrondis */
    font-size: 16px; /* Taille du texte */
  }
  
  /* Champ de texte spécifique pour les messages */
  .Phase3 textarea {
    resize: none; /* Désactive le redimensionnement */
    height: 300px; /* Hauteur fixe */
    width: 700px;/*Largeur*/
  }
  
  /* Bouton de soumission */
  .Phase3 button[type="submit"] {
    background-color: green; /* Fond vert */
    color: white; /* Texte blanc */
    padding: 10px; /* Espacement interne */
    border: none; /* Pas de bordure */
    border-radius: 5px; /* Coins arrondis */
    font-size: 16px; /* Taille du texte */
    cursor: pointer; /* Curseur en main */
    transition: background-color 0.3s ease; /* Transition fluide */
  }
  
  /* Effet au survol du bouton */
  .Phase3 button[type="submit"]:hover {
    background-color: darkgreen; /* Change la couleur au survol */
  }
  
  /* ========================
   Titre de la section contact
  ======================== */
  
  .Phase3 h2 {
    color: green; /* Couleur verte pour le titre */
    text-decoration: underline; /* Soulignement pour distinguer le titre */
    margin-bottom: 20px; /* Espacement inférieur */
    text-align: left; /* Gauche */
  }
  
  /* Styles appliqués aux éléments de repères pour "contact", "projets" et "présentation" */
  #contact, 
  #projets, 
  #presentation {
    opacity: 0; /* Rendre les éléments complètement invisibles */
    margin: 30px; /* Ajouter un espacement externe de 30px pour conserver leur position */
    padding: 30px; /* Ajouter un espacement interne de 30px pour garder une taille définie */
  }

</style>