// Startbestand van je app. Hier hoef je niets aan te veranderen.
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

createApp(App).use(router).mount('#app')
