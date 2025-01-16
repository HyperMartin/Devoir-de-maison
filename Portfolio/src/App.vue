<template>
      <header>
        <!-- Header -->
        <Primera />
      </header>

      <main>           
        <!-- Main -->
        <Segundo />
</main>

      <footer>              
        <!-- Footer -->
        <Tercero />

      </footer>   

      </template>
    
    <script>

    // Import des composants
    import Primera from "./Projet/Primera.vue";
    import Segundo from "./Projet/Segundo.vue";
    import Tercero from "./Projet/Tercero.vue";
    export default {
      name: "App",
      components: {
        Primera,
        Segundo,
        Tercero,
      },
    };
    </script>
    
    