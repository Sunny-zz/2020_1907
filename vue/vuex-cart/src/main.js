import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './filter'
Vue.config.productionTip = false

// Unexpected trailing comma 最后一个属性不能加逗号
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
