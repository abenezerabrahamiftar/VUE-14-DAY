// Hier staat welke pagina bij welke link hoort.
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/item/:id', name: 'detail', component: DetailView },
  ],
})

export default router
