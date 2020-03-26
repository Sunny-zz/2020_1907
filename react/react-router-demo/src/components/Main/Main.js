import React from 'react'
import { Route, withRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Pins from '../Pins/Pins';
import Topics from '../Topics/Topics';
import Post from '../Post/Post';
// react fragments允许组件返回多个节点    <>  </>  包裹返回值
const Main = (props) => {
  // 某些不是页面组件的组件想要使用当前路由的的一些 props 信息,需要使用 withRouter 方法实现
  // 在组件导出的时候使用 withRouter 方法包裹一下
  // 这些新增的 props 回合你之前组件之间的 props 合并到一起
  // console.log(props)
  return <>
    {/* 如果页面地址中存在 welcome， 那么 Home 路由的匹配方式不能是 exact， 不存在的话匹配方式 exact */}
    {/* 如何获取当前页面的地址栏的信息  原生 window.location.href  */}

    <Route exact={props.location.pathname.indexOf('welcome') >= 0 ? false : true} path='/' component={Home} />
    <Route path='/pins' component={Pins} />
    <Route path='/topics' component={Topics} />
    {/* 设置动态路由地址 很多个地址全部都指向一个路由 说白了就是在地址中加一个变量 */}
    {/* '/post/:id'   意思是 /post/ 后面只要输入内容就成功匹配  */}
    <Route path='/post/:id' component={Post} />
  </>
}
export default withRouter(Main)