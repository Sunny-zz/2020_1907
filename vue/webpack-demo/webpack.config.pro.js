
// 生产模式模式 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
// vue-template-complier 插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
// 从 bundle 中分离 css  需要安装最新版本 extract-text-webpack-plugin@next  支持 webpack4
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// 清理 dist 文件夹插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  // 入口文件路径 
  entry: './src/main.js',
  // 出口设置
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  devtool: 'nosources-source-map',
  resolve: {
    extensions: [".js", ".json", '.vue']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
              ]
            ],
            cacheDirectory: true,
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },

      {
        test: /\.(scss|css)$/,
        // use: [
        //   "style-loader",
        //   "css-loader",
        //   "sass-loader"
        // ]
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [
                  require('autoprefixer')(),
                  require('cssnano')()
                ]
              }
            },
            "sass-loader",
          ],
          publicPath: '../'
        })
      }
    ]
  },
  plugins: [
    // 清理 dist 文件夹
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html'
    }),
    new VueLoaderPlugin(),
    new ExtractTextPlugin({
      filename: 'css/style.css'
    }),
    new HardSourceWebpackPlugin()
  ]
}