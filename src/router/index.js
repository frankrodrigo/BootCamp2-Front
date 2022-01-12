import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Perfil from '../views/Perfil.vue'
import Notas from '../views/Notas.vue'
import Login from '../views/Login.vue'
import Registrarse from '../views/Registrarse.vue'

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
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registrarse',
    name: 'Registrarse',
    component: Registrarse
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
