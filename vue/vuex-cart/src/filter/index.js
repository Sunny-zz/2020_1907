// 创建很多个全局过滤器
import Vue from 'vue'
Vue.filter('numberToString', function (value) {
  if (!value) return ''
  return value.toFixed(2)
})
