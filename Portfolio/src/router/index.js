import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';
import NotFound from'@/Projet/NotFound.vue';
 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // Route de la page d'accueil
      name: 'home',
      component: App,
    },

  
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }, 
  
  ],
});



export default router;
