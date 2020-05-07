// 路由的所有配置
// 1. 导入相关包将路由设置成全局
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import PostList from './components/PostList.vue'
import UserList from './components/UserList.vue'
import Post from './components/Post.vue'
import About from './components/About.vue'
import NotFound from './components/NotFound.vue'
Vue.use(VueRouter)

// 2. 创建自己的路由数组

// 路由默认的匹配关系是严格匹配，只能匹配一个
const routes = [
  {
    path: '/',
    component: Home,
    // 子页面需要在父级页面对象内设置 使用 children 属性
    children: [
      {
        path: '',
        component: PostList
      },
      {
        // /home/postlist
        // 子页面的地址不需要设置完整,会自动将父页面的路径加在前面
        path: 'home/postlist',
        component: PostList
      },
      {
        path: 'home/userlist',
        component: UserList
      }
    ]
  },
  {
    path: '/about',
    redirect: '/aboutother'
  },
  {
    path: '/aboutother',
    component: About,
    // alias: '/about'
  },
  {
    // 动态路由   /post/1    /post/2    ===>    /post/:id
    path: '/post/:id',
    component: Post
  },
  {
    path: '*',
    component: NotFound
  }
]
// 3. 将创建好的路由数组初始化成路由实例

const router = new VueRouter({
  routes,
  // 路由模式
  mode: 'history'
})

// 4. 将创建好的路由实例挂载到整个项目内 (参考main.js)
export default router

