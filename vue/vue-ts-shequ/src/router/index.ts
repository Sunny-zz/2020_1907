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

// 我们把项目部署到二级目录(www.xxx.cn/xxxxxx)的话如果使用的是路由的 history 模式，会出问题,需要设置 publicPath 可以项目内有些有关路径的设置也需要修改
// 不在首页刷新会直接 404  需要服务器配置相关设置
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
