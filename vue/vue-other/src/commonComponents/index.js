import Vue from 'vue'
// import BaseButton from './BaseButton.vue'
// 全局注册组件 BaseButton
// Vue.component('使用组件时的标签名', 被注册的组件)
// Vue.component('BaseButton', BaseButton)

// 使用官方提供的自动化全局组件注册
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// requireComponent 的作用是获取满足条件的所有组件的路径
const requireComponent = require.context(
  // 其组件目录的相对路径
  './',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /Base[A-Z]\w+\.(vue|js)$/
)

// requireComponent.keys()   获取所有组件路径的数组
requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  // componentConfig 导入路径对应的组件
  const componentConfig = requireComponent(fileName)

  // 获取组件的 PascalCase 命名
  // componentName 从组建路径中获取组件名并且将组件名改写成大驼峰方式  
  // ./base-button.vue ---> ['.','base-button.vue'] ---> base-button.vue ---> base-button  --->  BaseButton 
  const componentName = upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )
  // Vue.component('BaseButton', BaseButton)
  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})