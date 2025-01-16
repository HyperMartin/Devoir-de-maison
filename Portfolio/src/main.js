import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import du routeur

// Création de l'application Vue et utilisation du routeur
const app = createApp(App);

app.use(router); // Attache le routeur à l'application
app.mount('#app'); // Monte l'application sur l'élément HTML avec l'id "app"





