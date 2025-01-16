import { createRouter, createWebHistory } from "vue-router";
import App from "@/App.vue";
import NotFound from "@/Projet/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/", // Route d'accueil
      name: "home",
      component: App,
    },
    {
      path: "/:pathMatch(.*)*", // Route pour les pages non trouvées
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
