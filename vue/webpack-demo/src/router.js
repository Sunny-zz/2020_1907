import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import About from './components/About'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
