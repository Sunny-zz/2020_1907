// 创建很多个全局过滤器
import Vue from 'vue'
Vue.filter('numberToString', function (value) {
  // 如果 !value 是 假的   意思就是 value  =    0    undefined
  if (!value) return '0.00'
  return value.toFixed(2)
})
