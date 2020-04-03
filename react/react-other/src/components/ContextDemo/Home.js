import React, { Component } from 'react'
import { LoginContext } from './login-context'

class Home extends Component {
  // 将最近 provider 提供的 context 获取
  // 1. 创建一个 js 文件存储 context (React.createContext) 并设置默认值
  // 2. 在祖先组件导入这个 context 使用 Provider 将需要传递的值传递给后代的组件
  // 3. 在后代组件内想要使用祖先组件的传递 context ，先导入 context 容器，使用静态属性(static contextType) 获取祖先提供的 context，然后在组件内就可以使用 this.context 访问了
  static contextType = LoginContext;
  render () {
    console.log(this.context)
    return <div>
      <h3>前端文章</h3>
      <button>关注</button>

    </div>
  }
}
export default Home