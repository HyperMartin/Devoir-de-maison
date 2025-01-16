<template>          
    <!-- Menu latéral ou élément décoratif -->
    <aside>
       <!-- Élément d'ancrage pour permettre de revenir au haut de la page -->
       <p id="Zen">* </p>
   </aside>
   
   <!-- En-tête principal de la page -->
   <section class="Phase0">
       <!-- Logo cliquable renvoyant à l'ancre "Zen" en haut de la page -->
       <a href="#Zen">
<img src="./Illustrations/Roll.PNG">
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
   </section>
   </template>
   
   
   
   <style scoped>
   
   /* Header fixe avec un dégradé */
   .Phase0 {
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
       font-weight: bold;/*Gras*/
   
   }
   
   /* Liens dans le header */
    nav ul {
       display: flex; /* Les liens sont alignés horizontalement */
       list-style-type: none; /* Supprime les puces des listes */
   }
   
    nav ul li a {
       color: white; /* Texte blanc */
       padding: 10px 20px; /* Espacement interne autour des liens */
       border-radius: 4px; /* Coins légèrement arrondis */
       transition: background-color 0.3s ease, color 0.3s ease; /* Effet au survol */
       text-decoration: none;/*Stopper les soulignements*/
   }
   
   /* Effet au survol des liens */
    nav ul li a:hover {
       background-color: white; /* Fond blanc */
       color: black; /* Texte noir */
   }
   
   /* Effet lumineux sur l'image du header */
    img {
       width: 100px; /* Ajustez la taille selon vos besoins */
       height: 100px;/*Hauteur*/
       border-radius: 50%; /* Rend l'image circulaire */
       box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.5); /* Lumière autour */
       background-color: #000; /* Couleur de fond pour les images transparentes */
       transition: transform 0.3s ease, box-shadow 0.3s ease; /* Effet fluide */
   }
   
    img:hover {
       transform: scale(1.1); /* Agrandit légèrement l'image */
       box-shadow: 0 0 30px 15px rgba(255, 255, 255, 0.7); /* Accentue la lumière */
   }
   #Zen{
    opacity: 0;
   }
   
   </style>