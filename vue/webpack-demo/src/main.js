// 入口文件
// 使用 vue 
import Vue from 'vue'
import App from './App.vue'
import './assets/global.scss'
Vue.filter('toString', value => value.toFixed(2))

// 将 app 组件 创建成 vue 的实例  vue的页面，挂载到 #app 的 div 内
new Vue({
  render: h => h(App)
}).$mount('#app')

