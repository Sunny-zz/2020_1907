// webpack 的基础配置文件,文件名不能修改，当 webpack 运行的时候会默认以该文件为配置文件
// entry  入口   ---> 将哪些文件打包编译
// output 出口   ---> 打包之后的存储
// loader 加载器 ---> 打包各种非js模块
// plugin 插件   ---> 各种任务
// mode   模式   ---> 生产和开发两种
const path = require('path');

module.exports = {
  // 入口文件路径 
  entry: './src/index.js',
  // 出口设置
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
