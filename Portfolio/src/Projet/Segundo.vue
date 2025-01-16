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
  
      <!-- Galerie de projets -->
      <div class="Réalisations">
        <!-- Premier projet -->
        <button @click="openModal('dialog1')">
          <img src="./Illustrations/Une.PNG" title="Premier projet." alt="Projet 1" />
        </button>
  
        <!-- Deuxième projet -->
        <button @click="openModal('dialog2')">
          <img src="./Illustrations/Deux.jpg" title="Second projet." alt="Projet 2" />
        </button>
  
        <!-- Troisième projet -->
        <button @click="openModal('dialog3')">
          <img src="./Illustrations/Trois.png" title="Troisième projet." alt="Projet 3" />
        </button>
      </div>
  
      <!-- Modal pour le premier projet -->
      <div v-if="activeModal === 'dialog1'" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <button class="close-button" @click="closeModal">X</button>
          <h2>Devoir sur le CV :</h2>
          <a href="https://github.com/SuperBarto/Renage.git" target="_blank">Voir le projet</a>
          <p>Ce projet a été réalisé avec les langages HTML et CSS en juillet 2024.</p>
          <img src="./Illustrations/SuperLe.PNG" alt="Projet 1" />
        </div>
      </div>
  
      <!-- Modal pour le deuxième projet -->
      <div v-if="activeModal === 'dialog2'" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <button class="close-button" @click="closeModal">X</button>
          <h2>Devoir sur le cahier des charges :</h2>
          <a href="https://github.com/SuperBarto/Cahier-des-charges.git" target="_blank">Voir le projet</a>
          <p>Ce projet est un document PDF réalisé avec Microsoft Word en octobre 2024.</p>
          <img src="./Illustrations/Charges.PNG" alt="Projet 2" />
        </div>
      </div>
  
      <!-- Modal pour le troisième projet -->
      <div v-if="activeModal === 'dialog3'" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <button class="close-button" @click="closeModal">X</button>
          <h2>Devoir sur les commentaires dynamiques :</h2>
          <a href="https://github.com/HyperMartin/DEVOIR-SUR-LE-FORMULAIRE.git" target="_blank">Voir le projet</a>
          <p>Ce projet a été réalisé avec les langages HTML, JavaScript et CSS en décembre 2024.</p>
          <img src="./Illustrations/Formu.PNG" alt="Projet 3" />
        </div>
      </div>
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
  
  // Variable réactive pour suivre le modal actif
  const activeModal = ref(null);
  
  // Fonction pour ouvrir un modal
  const openModal = (modalId) => {
    activeModal.value = modalId;
  };
  
  // Fonction pour fermer le modal
  const closeModal = () => {
    activeModal.value = null;
  };
  </script>
  
  
  <style scoped>
  
  /* ========================
   SECTIONS GÉNÉRALES
  ======================== */
  
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
  
  /* ========================
   PROJETS (Phase2)
  ======================== */
  /* Titre de la section projets */
  .Phase2 h2 {
    color: red; /* Couleur du titre */
    text-decoration: underline; /* Soulignement */
    padding: 15px;/*Espace*/
  }
  
  /* Arrière-plan noir complet */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 1); /* Fond complètement noir */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  /* Contenu du modal */
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 400px;
    max-width: 90%;
    position: relative;
    text-align: center;
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
  }
  
  .close-button:hover {
    opacity: 0.8;
  }
  
  /* Galerie de projets */
  .Réalisations button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  
  .Réalisations img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin: 10px;
  }
  
  /* Images dans le modal */
  .modal-content img {
    width: 100%;
    height: auto;
    margin-top: 10px;
  }
  
  /* Liens vers les projets */
  .modal-content a {
    display: inline-block;
    margin-top: 10px;
    text-decoration: none;
    color: orange;
    font-weight: bold;
  }
  
  .modal-content a:hover {
    color: #0056b3;
  }
  
  .modal-content h2{
  
    text-decoration: underline;
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