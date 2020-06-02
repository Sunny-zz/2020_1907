// webpack 的基础配置文件,文件名不能修改，当 webpack 运行的时候会默认以该文件为配置文件
// entry  入口   ---> 将哪些文件打包编译
// output 出口   ---> 打包之后的存储
// loader 加载器 ---> 打包各种非js模块
// plugin 插件   ---> 各种任务
// mode   模式   ---> 生产和开发两种

// 开发模式 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
// vue-template-complier 插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  // 入口文件路径 
  entry: './src/main.js',
  // 出口设置
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // 开发模式
  mode: 'development',
  // 需要设置开发工具(打包的时候准确定位错误警告等信息)
  // 开发环境品质最高的
  devtool: 'eval-source-map',
  // 模块解析的配置  
  resolve: {
    // extensions 解析的时候可忽略的扩展名
    extensions: [".js", ".json", '.vue']
  },
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
    compress: true
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
        use: ['file-loader']
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
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
    // 自动创建 html 文件，并且会自动导入打包好之后的 js 文件 
    // 需要配置插件内容 使用 html-webpack-plugin 创建
    new HtmlWebpackPlugin({
      // 安装了  html-webpack-template 插件之后可以设置 template 属性，给 默认创建html 文件提供模板
      template: './public/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ]
}