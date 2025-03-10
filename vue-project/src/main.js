import { createApp } from 'vue';
import './assets/main.css';

import App from './App.vue';
import router from './router'; // Import Vue Router

const app = createApp(App);

app.use(router); // Use Vue Router

app.mount('#app');