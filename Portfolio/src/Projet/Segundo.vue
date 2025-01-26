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

  <!-- Les modals -->

<aside class="Réalisations">

  <Modal0 />


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



<!-- Modals Phase 2-->

<script setup>
import Modal0 from './Modal0.vue';


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
  
  
 
    
     /* Titre de la section projets  et style pour le texte*/
     .Phase2 h2 {
        color: red; /* Couleur du titre */
        text-decoration: underline; /* Soulignement */
        padding: 15px;/*Espace*/
      }
     
      p{ font-weight: bold;}
      


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