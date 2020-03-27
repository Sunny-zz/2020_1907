import React from 'react'
import './home.css'
import { NavLink } from 'react-router-dom'
import View from '../View/View'
const Home = (props) => {
  // 被当做页面的组件(Route 组件的 component 属性的值的组件)，会默认接收一些 props 跟路由相关的 (history  location match)
  // console.log(props)
  const { pathname } = props.location
  console.log(props)
  return <div className='home'>
    {pathname.includes('search') ? '' : <div className="home-header">
      <ul>
        {/* 当地址栏地址是 /  或者包含  /welcome/recommended 推荐都应该变色*/}
        {/* <li><NavLink className={pathname === '/' ? 'active' : ''} to='/welcome/recommended'>推荐</NavLink></li> */}
        {/* isActive 是将之前匹配方案替换了 */}
        <li><NavLink isActive={() => pathname === '/' || pathname.indexOf('/welcome/recommended') > -1} to='/welcome/recommended'>推荐</NavLink></li>
        <li><NavLink to='/welcome/frontend'>前端</NavLink></li>
        <li><NavLink to='/welcome/backend'>后端</NavLink></li>
        <li><NavLink to='/welcome/android'>android</NavLink></li>
      </ul>
    </div>}
    {/* <Route path='/welcome/变化的' component={View} />  */}
    {/* 要做 search 筛选 只传递 pathname 不行，因为获取不到地址栏的查询信息，需要传递 location */}
    <View pathname={pathname} />
  </div>
}
export default Home