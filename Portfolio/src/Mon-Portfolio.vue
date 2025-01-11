<template>
   <!-- Menu latéral ou élément décoratif -->
   <aside>
        <!-- Élément d'ancrage pour permettre de revenir au haut de la page -->
        <p id="Zen">* </p>
    </aside>

    <!-- En-tête principal de la page -->
    <header>

        <!-- Logo cliquable renvoyant à l'ancre "Zen" en haut de la page -->
        <a href="#Zen">
            <img src="./Illustrations/Roll.PNG" alt="Logo de la page.">
        </a>

        <!-- Titre principal du portfolio -->
        <h1>Portfolio</h1>

        <!-- Menu de navigation principal -->
        <nav>
            <ul>
                <!-- Liens vers les différentes sections du site -->
                <li><a href="#presentation">Présentation</a></li>
                <li><a href="#projets">Projets</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#reseaux">Réseaux Sociaux</a></li>
            </ul>
        </nav>
    </header>

    <!-- Contenu principal de la page -->
    <main>

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

        <!-- Section des projets -->
 <p id="projets">* </p> <!-- Ancre pour la navigation -->
 <section class="Phase2">
 <!-- Titre de la section projets -->
 <h2>Projets :</h2>
<p>Voici un aperçu de mes réalisations.</p>
<br>
  
  <div class="Réalisations">
    <!-- Section principale contenant les projets -->

    <!-- Premier projet -->
    <!-- Bouton pour ouvrir la modale associée au projet 1 -->
    <button @click="openModal('modal1')">
      <!-- Image cliquable représentant le projet 1 -->
      <img src="./Illustrations/Une.PNG" alt="Projet 1" />
    </button>

    <!-- Deuxième projet -->
    <!-- Bouton pour ouvrir la modale associée au projet 2 -->
    <button @click="openModal('modal2')">
      <!-- Image cliquable représentant le projet 2 -->
      <img src="./Illustrations/Deux.jpg" alt="Projet 2" />
    </button>

    <!-- Troisième projet -->
    <!-- Bouton pour ouvrir la modale associée au projet 3 -->
    <button @click="openModal('modal3')">
      <!-- Image cliquable représentant le projet 3 -->
      <img src="./Illustrations/Trois.png" alt="Projet 3" />
    </button>

    <!-- Modales avec <teleport> -->
    <!-- Déplacement des modales directement dans le <body> grâce à <teleport> -->
    <teleport to="body">
      <!-- Modale 1 -->
      <!-- La modale est affichée uniquement si modalVisibility.modal1 est true -->
      <div v-if="modalVisibility.modal1" class="modal-overlay">
        <div class="modal-content">
          <!-- Bouton pour fermer la modale associée au projet 1 -->
          <button class="close-button" @click="closeModal('modal1')">X</button>
          <!-- Contenu de la modale du projet 1 -->
          <h2>Devoir sur le CV :</h2>
          <a href="https://github.com/SuperBarto/Renage.git" target="_blank">Voir le projet</a>
          <p>Ce projet a été réalisé avec les langages Html et Css en juillet 2024.</p>
          <!-- Image du projet 1 -->
          <img src="./Illustrations/SuperLe.PNG" alt="Projet 1" />
        </div>
      </div>

      <!-- Modale 2 -->
      <!-- La modale est affichée uniquement si modalVisibility.modal2 est true -->
      <div v-if="modalVisibility.modal2" class="modal-overlay">
        <div class="modal-content">
          <!-- Bouton pour fermer la modale associée au projet 2 -->
          <button class="close-button" @click="closeModal('modal2')">X</button>
          <!-- Contenu de la modale du projet 2 -->
          <h2>Devoir sur le cahier des charges :</h2>
          <a href="https://github.com/SuperBarto/Cahier-des-charges.git" target="_blank">Voir le projet</a>
          <p>Ce projet est un document PDF, il a été fait avec Microsoft Word en octobre 2024.</p>
          <!-- Image du projet 2 -->
          <img src="./Illustrations/Charges.PNG" alt="Projet 2" />
        </div>
      </div>

      <!-- Modale 3 -->
      <!-- La modale est affichée uniquement si modalVisibility.modal3 est true -->
      <div v-if="modalVisibility.modal3" class="modal-overlay">
        <div class="modal-content">
          <!-- Bouton pour fermer la modale associée au projet 3 -->
          <button class="close-button" @click="closeModal('modal3')">X</button>
          <!-- Contenu de la modale du projet 3 -->
          <h2>Devoir sur les commentaires dynamiques :</h2>
          <a href="https://github.com/HyperMartin/DEVOIR-SUR-LE-FORMULAIRE.git" target="_blank">Voir le projet</a>
          <p>Ce projet a été fait avec les langages Html, JavaScript et Css, il date de décembre 2024.</p>
          <!-- Image du projet 3 -->
          <img src="./Illustrations/Formu.PNG" alt="Projet 3" />
        </div>
      </div>
    </teleport>
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
    </main>

    <!-- Pied de page -->
    <footer>
        <!-- Ancre pour la navigation -->
        <p id="reseaux">* </p>
        <h3>Réseaux sociaux :</h3>

        <!-- Liens vers les réseaux sociaux -->
        <nav>
            <a href="https://x.com/Pilganzeoffi" target="_blank">
                <img src="./Illustrations/X.png" alt="Lien vers X" title="X">
            </a>
            <a href="https://www.linkedin.com/in/lehen-haldin-effa-anda" target="_blank">
                <img src="./Illustrations/Linkedin.PNG" alt="Lien vers LinkedIn" title="LinkedIn">
            </a>
        </nav>

        <!-- Mise à jour -->
        <p id="last-updated">Dernière mise à jour : {{ lastUpdated }}</p>

    </footer>
</template>



<script >


import { reactive } from 'vue';

export default {
  name: 'LastUpdated', 

  // Définition des données réactives
  data() {
    return {
      // Propriété réactive pour stocker la date de la dernière mise à jour
      lastUpdated: '', 
    };
  },

  // Utilisation du cycle de vie "mounted" pour exécuter du code une fois le composant monté
  mounted() {
    /*
      Mettre à jour la propriété réactive `lastUpdated` avec la date actuelle
      */
     
    this.lastUpdated = new Date().toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  },
};

// Gestion de la visibilité des modales
// Chaque clé représente une modale spécifique (modal1, modal2, modal3)
const modalVisibility = reactive({
  modal1: false, // État de la modale 1 (false = fermée)
  modal2: false, // État de la modale 2 (false = fermée)
  modal3: false, // État de la modale 3 (false = fermée)
});

// Fonction pour ouvrir une modale
// Prend en paramètre l'identifiant de la modale (ex. 'modal1')
const openModal = (modalId) => {
  modalVisibility[modalId] = true; // Active la visibilité de la modale spécifiée
};

// Fonction pour fermer une modale
// Prend en paramètre l'identifiant de la modale (ex. 'modal1')
const closeModal = (modalId) => {
  modalVisibility[modalId] = false; // Désactive la visibilité de la modale spécifiée
};



</script>

<style>



/* ========================
   RÉINITIALISATION ET STYLES DE BASE
======================== */

/* Réinitialisation des marges, paddings et modèle de boîte */
* {
    margin: 0; /* Supprime les marges par défaut */
    padding: 0; /* Supprime les espaces internes */
    box-sizing: border-box; /* Assure que padding et bordures sont inclus dans les dimensions */
}

/* Style global pour le texte et la structure */
body {
    font-family: 'Calibri Light', Calibri, sans-serif; /* Police principale */
    width: 100%; /* Largeur de la page */
    height: 100%; /* Hauteur de la page */
    padding-top: 80px; /* Ajuste pour éviter de masquer le contenu sous le header */
    color: #333; /* Couleur du texte par défaut */
    font-weight: bold;/*Gras*/
}

/* ========================
   BARRE DE NAVIGATION (HEADER)
======================== */

/* Header fixe avec un dégradé */
header {
 background: #348F50;  /* solution de repli pour les anciens navigateurs */
 background: -webkit-linear-gradient(to right, #56B4D3, #348F50);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #56B4D3, #348F50); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    color: white; /* Texte blanc */
    display: flex; /* Flexbox pour aligner les éléments */
    justify-content: space-between; /* Espacement entre les éléments */
    align-items: center; /* Centrage vertical */
    padding: 16px; /* Espacement interne */
    font-weight: bold; /* Texte en gras */
    position: fixed; /* Fixe la barre en haut de la page */
    top: 0;
    left: 0;
    width: 100%; /* Barre prend toute la largeur */
    z-index: 1000; /* Priorité pour passer au-dessus des autres éléments */
}

/* Liens dans le header */
header nav ul {
    display: flex; /* Les liens sont alignés horizontalement */
    list-style-type: none; /* Supprime les puces des listes */
}

header nav ul li a {
    color: white; /* Texte blanc */
    padding: 10px 20px; /* Espacement interne autour des liens */
    border-radius: 4px; /* Coins légèrement arrondis */
    transition: background-color 0.3s ease, color 0.3s ease; /* Effet au survol */
    text-decoration: none;/*Stopper les soulignements*/
}

/* Effet au survol des liens */
header nav ul li a:hover {
    background-color: white; /* Fond blanc */
    color: black; /* Texte noir */
}

/* Effet lumineux sur l'image du header */
header img {
    width: 100px; /* Ajustez la taille selon vos besoins */
    height: 100px;/*Hauteur*/
    border-radius: 50%; /* Rend l'image circulaire */
    box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.5); /* Lumière autour */
    background-color: #000; /* Couleur de fond pour les images transparentes */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Effet fluide */
}

header img:hover {
    transform: scale(1.1); /* Agrandit légèrement l'image */
    box-shadow: 0 0 30px 15px rgba(255, 255, 255, 0.7); /* Accentue la lumière */
}

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


/* Style pour l'arrière-plan des modales */
.modal-overlay {
  position: fixed; /* Rend l'overlay fixe par rapport à la fenêtre */
  top: 0;
  left: 0;
  width: 100%; /* Couvre toute la largeur de l'écran */
  height: 100%; /* Couvre toute la hauteur de l'écran */
  background: rgba(0, 0, 0, 0.5); /* Fond semi-transparent noir */
  display: flex; /* Centre le contenu de la modale */
  align-items: center; /* Centre verticalement */
  justify-content: center; /* Centre horizontalement */
  z-index: 1000; /* S'assure que la modale est au-dessus de tout */
}

/* Style pour le contenu de la modale */
.modal-content {
  background: black; /* Fond  pour le contenu */
  padding: 1rem; /* Espacement interne */
  border-radius: 5px; /* Coins arrondis */
  width: 100%; /* Largeur par défaut */
  max-width: 500px; /* Limite la largeur maximale */
  position: relative; /* Permet de positionner le bouton de fermeture */
  text-align: center; /* Aligne le texte au centre */
  color: white;/*Couleur*/
  font-weight:  bold;/* Gras*/
  margin: 20px;
}



/* Style pour le bouton de fermeture */
.close-button {
  color: yellow;/*Couleur*/
  position: absolute; /* Positionne le bouton dans le coin supérieur droit */
  top: 10px; /* Marges depuis le haut */
  right: 10px; /* Marges depuis la droite */
  background: transparent; /* Fond transparent */
  border: none; /* Pas de bordure */
  font-size: 1.5rem; /* Taille du texte */
  cursor: pointer; /* Curseur en mode pointer */
}

/* Style des images des projets dans la section Réalisations */
.Phase2 .Réalisations img {
  width: 200px; /* Largeur des miniatures */
  height: 200px; /* Hauteur des miniatures */
  padding: 40px;/*Espace*/
}

/* Style des images dans les modales */
.modal-content img {
  width: 95%; /* Largeur des images */
  height: 150; /* Hauteur des images */
  padding: 50px; /* Espacement interne autour de l'image */

}

.Réalisations button{
  background: none; /* Supprime l'arrière-plan par défaut */
  border: none; /* Supprime les bordures par défaut */

}

.Réalisations button:hover {
  transform: scale(1.2); /* Agrandit légèrement l'image au survol */
}

.modal-content a{

  text-decoration: none; /* Supprime le soulignement des liens */
  color: white; /* Couleur du texte blanc */
  background-color: red;/*Couleur*/
  width: 150px; /* Largeur fixe */
  height: 50px; /* Hauteur fixe */
  font-weight: bold; /* Texte en gras */
  border:5px solid red;/*Bordure*/
 }

 .modal-content p,h2{

  padding: 50px;/*Espace*/

 }

 .modal-content h2{
  text-decoration: underline;/*Soulignement*/
 }




/* Titre de la section projets */
.Phase2 h2 {
    color: red; /* Couleur du titre */
    text-decoration: underline; /* Soulignement */
    padding: 15px;/*Espace*/
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


/* ========================
   FOOTER
======================== */


/* Style général du footer */
footer {

background: #348F50;  /* solution de repli pour les anciens navigateurs */
background: -webkit-linear-gradient(to right, #56B4D3, #348F50);  /* Chrome 10-25, Safari 5.1-6 */
 background: linear-gradient(to right, #56B4D3, #348F50); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

color: white; /* Texte blanc */
 padding: 30px; /* Espacement interne */
font-weight: bold; /* Texte en gras */
}

footer h3{
    text-decoration: underline;
    color: white;

}


footer nav {
    padding-top: 20px;
    display: grid; /* Active CSS Grid sur le conteneur */
    grid-template-columns: repeat(auto-fit, minmax(50px, auto)); /* Colonnes dynamiques */
    gap: 10px; /* Espacement réduit entre les éléments */
    justify-content: start; /* Alignement à gauche si nécessaire */
}

footer nav img {
    width: 50px; /* Taille des icônes */
    height: 50px; /* Conserve le ratio */
    border-radius: 30%; /* Coins arrondis */
    transition: transform 0.3s ease, opacity 0.3s ease; /* Effet au survol */
}




footer nav img:hover {
    transform: scale(1.1); /* Agrandit légèrement l'icône */
    opacity: 0.8; /* Réduit l'opacité au survol */
}



/* ========================
   MASQUER LES ÉLÉMENTS DE REPÈRES
======================== */

/* Styles appliqués aux éléments de repères pour "contact", "projets" et "présentation" */
#contact, 
#projets, 
#presentation {
    opacity: 0; /* Rendre les éléments complètement invisibles */
    margin: 30px; /* Ajouter un espacement externe de 30px pour conserver leur position */
    padding: 30px; /* Ajouter un espacement interne de 30px pour garder une taille définie */
}

/* Masque l'élément de repère pour "réseaux sociaux" */
#reseaux {
    opacity: 0; /* Rendre cet élément également invisible */
}

</style>



