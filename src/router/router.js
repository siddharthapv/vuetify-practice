import Vue from 'vue'
import VueRouter from 'vue-router'
const HomeView = () => import('../views/HomeView.vue');
const FilmsView = () => import('../views/StarwarsFilms.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/films',
    name: 'FilmsView',
    component: FilmsView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
