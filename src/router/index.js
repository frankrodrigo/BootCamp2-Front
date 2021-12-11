import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Perfil from '../views/Perfil.vue'
import Notas from '../views/Notas.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/notas',
    name: 'Notas',
    component: Notas
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: Perfil
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
