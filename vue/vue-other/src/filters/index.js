import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
Vue.filter('upperStr', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
// 首字母大写
Vue.filter('upperFirst', function (value) {
  if (!value) return ''
  value = value.toString()
  return upperFirst(value)
})
// 从中线连接变成小驼峰
// base-button  --->   baseButton
Vue.filter('camelCase', function (value) {
  if (!value) return ''
  value = value.toString()
  return camelCase(value)
})