import React, { Component } from 'react'

import { Link, NavLink, withRouter } from "react-router-dom"

import './header.css'
class Header extends Component {
  state = {
    searchValue: ''
  }
  render () {
    const { searchValue } = this.state

    return <header>
      <Link to='/'><img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="" /></Link>
      <ul className='nav'>
        <li><NavLink exact={this.props.location.pathname.indexOf('welcome') >= 0 ? false : true} to='/'>首页</NavLink></li>
        <li><NavLink to='/pins'>沸点</NavLink></li>
        <li><NavLink to='/topics'>话题</NavLink></li>
      </ul>
      <input value={searchValue} onChange={this.handleInput} type="text" />
      <button onClick={this.search} >搜索</button>
    </header>
  }
  handleInput = event => {
    this.setState({
      searchValue: event.target.value
    })
  }
  search = () => {
    // 获取输入内容   跳转到搜索结果页
    // 如何不使用 link 组件实现页面的跳转   history 下的 push 方法
    const { searchValue } = this.state
    if (searchValue.trim()) {
      this.props.history.push(`/search?query=${this.state.searchValue}`)
    }
  }
}
export default withRouter(Header)