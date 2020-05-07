import Vue from 'vue'
import App from './App.vue'
import './chajian/axios'
// import axios from 'axios'
import router from './router'
Vue.config.productionTip = false
// Vue.prototype.axios = axios

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
