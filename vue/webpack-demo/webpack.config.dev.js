// webpack 的基础配置文件,文件名不能修改，当 webpack 运行的时候会默认以该文件为配置文件
// entry  入口   ---> 将哪些文件打包编译
// output 出口   ---> 打包之后的存储
// loader 加载器 ---> 打包各种非js模块
// plugin 插件   ---> 各种任务
// mode   模式   ---> 生产和开发两种

// 开发模式 

const webpack = require('webpack');
const { smart } = require('webpack-merge');
const base = require('./webpack.config.base')
module.exports = smart(base, {
  // 开发模式
  mode: 'development',
  // 需要设置开发工具(打包的时候准确定位错误警告等信息)
  // 开发环境品质最高的
  devtool: 'eval-source-map',
  // 需要使用服务器帮助我们自动编译，不需要每次执行 npm run serve 手动编译 使用  webpack-dev-server
  devServer: {
    // 在 dist 文件夹下启动服务
    // 会自动将打包后的文件编译到服务器内供使用
    contentBase: './dist',
    // 服务器端口号
    port: 8080,
    // 加上热模块替换功能
    hot: true,
    clientLogLevel: "error",
    compress: true,
    // 当浏览器地址发生改变的时候指向的所有页面都让他指向 idnex.html
    historyApiFallback: true
  },
  // 处理其他模块(非 js 模块)，需要使用 loader，
  // 配置我们的 module 
  module: {
    rules: [ // 解析 css 模块 需要添加 css 模块规则 使用 style-loader  css-loader 
      // {
      //   // 匹配模块的检测
      //   test: /\.css$/,
      //   // 使用那些 loader 解析该模块
      //   // loader 是需要顺序的，需要知道每一个 loader 具体的作用
      //   // loader 的顺序是倒序的 先执行的是 css-loader 再执行 style-loader
      //   use: [
      //     'style-loader',
      //     'css-loader'
      //   ]
      // },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          // 使用了 url-loader  file-loader 也必须下载
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              // 在 template 内的图片路径解析出问题加上该属性
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader", // 将 JS 字符串生成为 style 节点
          "css-loader",   //将 CSS 转化成 CommonJS 模块
          "sass-loader"   // 将 Sass 编译成 CSS
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})