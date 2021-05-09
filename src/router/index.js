import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register'
import Confirm from '../views/Confirm'

Vue.use(VueRouter)

const routes = [
  { path: '/home', name: 'Home', component: Home },
  { path: '/', name: 'Register', component: Register },
  { path: '/confirm', name: 'Confirm', component: Confirm },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
