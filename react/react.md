## 搭建 react 项目开发环境
使用官方提供的脚手架 create-react-app 。你需要在你的机器上安装 Node >= 8.10 和 npm >= 5.6。要创建项目，请执行：
```
npx create-react-app react-hello
cd react-hello
npm start
```

## react 项目的目录结构
- node_modules 环境所需要的依赖
- public 存放项目页面的模版(index.html)
- src 存储项目源代码
- .gitignore git 忽略上传的文件
- package-lock.json 包的信息
- package.json node项目的信息

## react 的基础知识
react 的脚手架搭建出来的项目默认是单页面应用(SPA)。react 创建页面并不是使用传统的 html 文件去搭建。而是将页面拆分成很多个组件，然后把所有组件重新组合到一起形成页面。

### 单页面应用(SPA)
单页Web应用（single page web application，SPA），就是只有一张Web页面的应用，是加载单个HTML 页面并在用户与应用程序交互时动态更新该页面的Web应用程序。

### 组件
组件的创建依据页面的结构。结构很大或者里面有公共部分需要单独设置成组件。然后在导入合并到一起。
组件的类型
- 函数式组件 
  ```jsx
    function App () {
      return (
        <div>
          hello
        </div>

      );
    }
  ```
- 类组件  
继承 react 中的一个 class Component
  ```js
    import React,{ Component } from 'react'
    class Button extends Component {
      render(){
        return (
          <div>
            hello
          </div>
        )
      }
    }
  ```


组件的使用 
子组件导入到父组件内
  ```js 
  import Header from './Header'
  ```
在父组件内部,直接使用以组件名的标签(一般都是单闭合)代替子组件,class组件也是同样的使用方式
  ```jsx
    function App () {
      return (
        <div>
          <Header />
        </div>

      );
    }
  ```


组件内使用图片(本地图片要存储到 src 下)
- 当作图片的背景图写到 css 文件内，直接使用相对路径即可
- 在组件内部使用 img 标签，写地址时不能直接写相对路径。需要写网络地址或者将图片当作模块导入，然后使用

### jsx 语法
在 js 内写 html 的标签就叫 jsx 语法。如何在 jsx 内嵌入 js 语法。
只需要在 jsx 的 html 内使用花括号嵌入 js 语法。例如
```jsx
  import pic from './xx.jpg'
  <img src={pic} alt="" />
```

### 组件的 props
给组件设置 props 就是为了让组件更好的复用(跟之前的构造函数一样)。
如何设置并使用 props
- 函数式组件
  子组件内设置 props
  ```js
  const Pra = (props) => {
    return (
      <div className='pra'>
        <h3>{props.title || '默认的'}</h3>
        <p>{props.onePra}</p>
      </div>
    )
  }
  ```
  父组件内直接给子组件传递自定义属性，属性名一定要和子组件内的props 一致。

  ```js
    <Pra title='声明式' onePra='React 使创建交互式 UI .' />
  ```
- class 组件
  子组件内设置接收 props
  ```js
    class Button extends Component {
        render(){
          const {text} = this.props
          return (
            <button>{text}</button>
          )
        }
      }
  ```
  父组件内直接给子组件传递自定义属性，属性名一定要和子组件内的props 一致。

  ```js
  <Button text='文字'  />
  ```

### 组件的 state 
只要页面发生改变，就需要把改变的内容设置成 state，通过修改 state 从而达到改变页面的效果。组件的 state 一般只存在于 class 组件内。
如何设置 state,如何使用
```js
  class Count extends Component {
  state = {
    number: 10
  }
  render () {
    const { number } = this.state
    return (
      <div>
        <button onClick={this.sub}>-</button>
        <span>{number}</span>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
```
如何修改
```js
  add = () => {   
    this.setState({
      number: this.state.number + 1
    })
  }
  sub = () => {
    this.setState({
      number: this.state.number - 1
    })
  }
```

### 组件内的条件渲染

### 组件内的列表渲染

### 组件的生命周期函数(钩子)
每一个 react 组件都有自己的生命周期。生命周期分为 挂载(第一次渲染到热面中) 、 更新(修改了组件的state，或者传递给组件的 props 发生了改变) 、卸载 、 错误处理。组件的生命周期其实就是组件的一些默认定义好的方法。
- 挂载 ----> 组件首次渲染到页面中
  - constructor()  
  - static getDerivedStateFromProps()
  - render()  返回需要渲染的内容
  - componentDidMount() 组件在页面中渲染完毕,一般用来在页面初始化的时候修改 state

### react 表单 

##### 受控组件(推荐)
将表单的一些元素自带的变化的值(比如 value checked selected...),设置成 state ，然后给表单元素绑定 onChange 事件修改对应的 state(根据 event.target 获取修改的值)。

##### 非受控组件
不需要将表单的一些元素自带的变化的值设置成 state 也不写这些属性。如果想设置默认的话使用 defaultValue  defaultChecked defaultSelected，然后获取输入的结果需要使用标签的 ref 属性
ref 例子
```jsx
<input id='input' type="text" defaultValue='123' ref={inputDom => this.input = inputDom} />
// this.input 就可以获取对应 dom，可以使用 this.input.value 获取输入的内容
```

### 状态提升
多个组件需要反映相同的变化数据，这时我们建议将共享状态提升到最近的共同父组件中去。也就是将共同修改的 state 提升到共同的父组件中去, 当作props 传递给子组件。子组件想要修改父组件的 state ，需要将修改 state 的方法先在父组件中定义好，然后当做 prps 传递给子组件，子组件去执行。
其实上述问题解决的就是兄弟组件之间的交互，解决方案就是 状态提升。


### react 路由
在 react 单页面应用中，实现多页面功能就需要使用 react 路由。react 框架本身没有路由功能，但是需要单独下载 `react-router-dom` ,这是官方提供的。
react 路由的创建
- 下载包 `npm i react-router-dom`
- 使用路由提供的各种组件搭建出多页面效果
  - 路由提供的基础组件 
    - BrowserRouter  路由整体设置的组件(路由的所有功能必须包裹在该组件内)，完全模拟浏览历史记录效果
    - Link  跳转路由的组件，在页面中默认被渲染成 a 标签
    - Route  路由组件，代表的一页
    



#### 盒模型结构
- 标准模型
- ie模型
  ```css
    box-sizing: border-box;
  ```
