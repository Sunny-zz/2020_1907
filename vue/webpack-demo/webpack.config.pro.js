// 生产模式模式 
// 从 bundle 中分离 css  需要安装最新版本 extract-text-webpack-plugin@next  支持 webpack4
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// 清理 dist 文件夹插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { smart } = require('webpack-merge');
const base = require('./webpack.config.base')
module.exports = smart(base, {
  mode: 'production',
  devtool: 'nosources-source-map',
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              esModule: false,
              name: 'images/[hash:5].[ext]'
            }
          }
        ]
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
    new ExtractTextPlugin({
      filename: 'css/style.css'
    }),
  ]
}) 