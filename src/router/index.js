// Hier staat welke pagina bij welke link hoort.
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// Dag 6: haal het commentaar weg bij de volgende regel
// import DetailView from '../views/DetailView.vue'
// Dag 7: haal het commentaar weg bij de volgende regel
// import ApiView from '../views/ApiView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    // Dag 6: detailpagina. Het :id is het nummer van het item in de link.
    // { path: '/item/:id', name: 'detail', component: DetailView },
    // Dag 7: API-pagina
    // { path: '/api', name: 'api', component: ApiView },
  ],
})

export default router
