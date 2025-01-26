<template>
  <div>
    <!-- Header (Primera) affiché uniquement si la route est "home" -->
    <header v-if="home">
      <Primera />
    </header>

    <!-- Contenu principal basé sur les routes -->
    <main v-if="home">
      <Segundo />
    </main>

    <!-- Affichage du contenu des routes -->
    <div v-else>
      <RouterView />
    </div>

    <!-- Footer (Tercero) affiché uniquement si la route est "home" -->
    <footer v-if="home">
      <Tercero />
    </footer>
  </div>
</template>

<script>
import { useRoute } from "vue-router"; // Import de useRoute
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
  setup() {
    const route = useRoute();

    // Vérifie si la route actuelle est "home"
    const home = route.name === "home"; // Retourne true si on est sur la route "home"
    return { home };
  },
};
</script>
