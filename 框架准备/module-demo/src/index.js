// 导入的方式  导入的操作必须写在 js 文件的顶部
// 导入的模块分为两种 1. 自定义的模块导入时直接写路径   2. 第三方模块导入时直接写模块名(包名) 
// 1. 命名导入  可以使用 as 重命名
// 先执行 a.js 内的语句，然后拿到导出的数据
import { a as aa, b } from './a.js'

// const c = 300
console.log(aa, b)
// console.log(c)
// 2. 默认导入   一般第三方(自己下载的)模块都是使用默认导入,有的第三方模块需要使用命名导入。
// import $ from 'jquery'
// // console.log($)
// $('.box').click(function () {
//   $(this).css('background-color', 'red')
// })

// import aaa from './a.js'
// console.log(aaa)