import React from 'react'
import './home.css'
import { Route, NavLink } from 'react-router-dom'
import Recommended from '../Recommended/Recommenden'
import Backend from '../Backend/Backend'
import Frontend from '../Frontend/Frontend'
import Android from '../Android/Android'
const Home = (props) => {
  // 被当做页面的组件(Route 组件的 component 属性的值的组件)，会默认接收一些 props 跟路由相关的 (history  location match)
  // console.log(props)
  const { pathname } = props.location
  return <div className='home'>
    <div className="home-header">
      <ul>
        {/* 当地址栏地址是 /  或者包含  /welcome/recommended 推荐都应该变色*/}
        {/* <li><NavLink className={pathname === '/' ? 'active' : ''} to='/welcome/recommended'>推荐</NavLink></li> */}
        {/* isActive 是将之前匹配方案替换了 */}
        <li><NavLink isActive={() => pathname === '/' || pathname.indexOf('/welcome/recommended') > -1} to='/welcome/recommended'>推荐</NavLink></li>
        <li><NavLink to='/welcome/frontend'>前端</NavLink></li>
        <li><NavLink to='/welcome/backend'>后端</NavLink></li>
        <li><NavLink to='/welcome/android'>android</NavLink></li>
      </ul>
    </div>
    <Route path={pathname === '/' ? '/' : '/welcome/recommended'} component={Recommended} />
    {/* <Route exact path='/' component={Recommended} />
    <Route path='/welcome/recommended' component={Recommended} /> */}
    <Route path='/welcome/backend' component={Backend} />
    <Route path='/welcome/frontend' component={Frontend} />
    <Route path='/welcome/android' component={Android} />
  </div>
}
export default Home