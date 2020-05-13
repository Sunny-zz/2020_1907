import Vue from 'vue'
import App from './App.vue'
import './plugins/swiper'
import './plugins/echarts'
import './plugins/datav'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
