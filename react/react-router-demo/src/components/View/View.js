import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import './view.css'
class View extends Component {
  state = {
    list: []
  }
  // 想要让视图更新  1. 修改对应的 state   2. props 改变了那么 props 对应的视图也会自动更新
  // 组件在页面中出现
  componentDidMount () {
    console.log('组件出现了需要获取数据')
    const type = this.getType(this.props.pathname)
    this.changeList(type)
  }
  // 实现点击父组件的 navLink 更新子组件的 list 
  // 1. 将子组件的 state  list 提升到父组件，在父组件中修改 传递给子组件
  // 2. 将点击navLink的变化当作 props 传递给子组件，子组件在接收的时候 props 时 ，更新自己的 state 

  // 生命周期钩子  
  // 首次渲染  
  // 更新   当组件的 props 或 state 发生变化时会触发更新
  // shouldComponentUpdate()    
  // render()
  // componentDidUpdate ()
  render () {
    const { list } = this.state
    // const nowType = this.getType(this.props.pathname)
    return <div className='view'>
      {
        list.length ? <ul>
          {list.map(item => <li key={item.id} ><Link to={`/post/${item.id}`}>{item.title}</Link></li>)}
        </ul> : <div><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585201979320&di=9da9efe892503897edf0b2e1f9f4f55e&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F357d23d074c2954d568d1a6f86a5be09d190a45116e95-0jh9Pg_fw658" alt="" /></div>
      }
    </div>
  }
  componentDidUpdate (prevProps) {
    // prevProps,prevState  分别代表上次的 props 和 state 
    // 1.对 DOM 进行操作 
    // 视图更新完毕 浏览器 dom 结构生成完毕，使用原生或 类似 jquery 的第三方插件获取真实的 dom 节点
    // 2.可以执行 setState 修改 state  但是修改 state 操作必须使用条件语句
    // 组件接收到的 props 发生改变时更新组件的 state 
    // if () {
    // 发请求更新 state
    // }
    if (prevProps.pathname !== this.props.pathname) {
      console.log('组件 props 更新了需要获取数据')
      const type = this.getType(this.props.pathname)
      this.changeList(type)
    }
  }
  changeList = (type) => {
    const filterStr = type === 'recommended' ? '?isRecommended=true' : `?type=${type}`
    // console.log(filterStr)
    axios.get(`http://localhost:8080/articleList${filterStr}`).then(res => {
      this.setState({
        list: res.data
      })
    })
  }
  getType = (pathname) => {
    // 方案一
    // return pathname.includes('backend') ? 'backend' : pathname.includes('android') ? 'android' : pathname.includes('frontend') ? 'frontend' : 'recommended'
    // 方案二
    const allType = ['recommended', 'frontend', 'backend', 'android']
    // pathname    /welcome/android  
    return allType.find(item => pathname.includes(item)) || 'recommended'
  }
}
export default View

