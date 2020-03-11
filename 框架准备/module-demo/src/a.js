const a = 10
const b = 100
// 模块的导出的方式
// 1. 命名导出    导出一个变量导入时必须也是用这个变量
const c = 200
console.log(c)
// export {b}
// export {a}
// 上面的两句等价于下面 
export { a, b }
// 2. 默认导出   导出一个变量导入时随便命名

// export default { a, b }


// 命名导出和默认导出可以同时存在  命名导出可以写多次
