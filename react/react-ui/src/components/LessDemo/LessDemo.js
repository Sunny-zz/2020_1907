import React from 'react'
import './less-demo.less'
// 在 creat-react-app 环境中如何使用 css 的扩展语法 less
// 1. 安装 less 和 less-loader  npm i less less-loader 
// 2. 将 less 添加到环境中
// a. 使用 react-app-rewired 包扩展环境的配置 参考 ant design 文档 在 create-react-app 中使用
// b. 将 环境暴露出来直接对环境进行修改 (不太推荐只有会 webpck 的才能处理好)
// 在 creat-react-app 环境中如何使用 css 的扩展语法 sass
// 由于 create-react-app 内置了 sass-loader 所以 sass 语法可以直接使用，但是必须得安装 node-sass 包 不用进行环境配置直接可以使用
// 在 creat-react-app 环境中如何使用 css 的扩展语法 styled-components
const LessDemo = (props) => (<div className='less-demo'> <h2 className='title'>less 的使用</h2> </div>)
export default LessDemo