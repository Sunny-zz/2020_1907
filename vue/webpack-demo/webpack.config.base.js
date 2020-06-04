const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
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
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
    }),
    new VueLoaderPlugin(),
    // 加快打包速度在打包模块的时候加入缓存
    new HardSourceWebpackPlugin()
  ]
}