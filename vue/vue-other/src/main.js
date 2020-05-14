import Vue from 'vue'
import App from './App.vue'
import './directives/index'
// 全局的 mixin 默认会加到所有的组件中，在组件生命周期 created 的时候执行
// Vue.mixin({
//   created: function () {
//     console.log('mixin')
//   }
// })
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
