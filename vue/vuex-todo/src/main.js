import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  // 把store内的所有内容加入到整个项目的所有组件内
  store,
  render: h => h(App)
}).$mount('#app')
