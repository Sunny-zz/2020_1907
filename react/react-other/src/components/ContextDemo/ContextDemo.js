import React, { Component } from 'react'
import Home from './Home'
import { LoginContext } from './login-context'
import Button from './Button'
class ContextDemo extends Component {
  state = {
    isLogin: false,
    username: '',
    password: ''
  }
  render () {
    const { username, password, isLogin } = this.state
    return <div>
      <h2>Context Demo</h2>
      <div>{isLogin ? '你的头像' : '未登录'}</div>
      {
        isLogin ? '' : <div>
          <label htmlFor="">用户名</label><input onChange={(event) => {
            this.handleInput(event, 'username')
          }} value={username} type="text" /><br />
          <label htmlFor="">密码</label><input onChange={(event) => {
            this.handleInput(event, 'password')
          }} value={password} type="text" />
          <button onClick={this.login} >登录</button>
        </div>
      }
      <LoginContext.Provider value={isLogin}>
        <Home />
        <Button />
      </LoginContext.Provider>
    </div>
  }
  login = () => {
    const { username, password } = this.state
    if (username.trim() && password.trim()) {
      setTimeout(() => {
        if (username === 'admin' && password === 'admin') {
          this.setState({
            isLogin: true
          })
        } else {
          alert('用户名密码不匹配')
        }
      }, 1000);
    }
  }
  handleInput = (event, stateName) => {
    this.setState({
      [stateName]: event.target.value
    })
  }
}
export default ContextDemo