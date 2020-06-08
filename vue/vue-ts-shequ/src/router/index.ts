import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Topic from '../views/Topic.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/topic/:id',
    component: Topic
  },
  {
    path: '/user/:loginname',
    component: User
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
