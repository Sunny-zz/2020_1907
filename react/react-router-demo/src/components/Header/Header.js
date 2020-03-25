import React from 'react'
import './header.css'
import { Link, NavLink, withRouter } from "react-router-dom"
const Header = (props) => <header>
  <Link to='/'><img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="" /></Link>
  <ul className='nav'>
    <li><NavLink exact={props.location.pathname.indexOf('welcome') >= 0 ? false : true} to='/'>首页</NavLink></li>
    <li><NavLink to='/pins'>沸点</NavLink></li>
    <li><NavLink to='/topics'>话题</NavLink></li>
  </ul>
</header>
export default withRouter(Header)
