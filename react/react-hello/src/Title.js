// 创建 es6 的类组件
// import React from 'react'
// class Title extends React.Component {

// }
// 等价的
import React, { Component } from 'react'
class Title extends Component {
  // 省略了 constructor 以及内部的 super
  // 作为组件必须有一个 render 函数而且该函数必须返回一个 html 节点作为组件的结构。
  // redenr 函数导入到父组件在页面展示时默认会执行一次
  // 任何组件的 props 都是只读的不可修改
  render () {
    const { title } = this.props
    return <h1>{title}</h1>
  }
  // render = () => <h1>hello</h1>
}
export default Title


