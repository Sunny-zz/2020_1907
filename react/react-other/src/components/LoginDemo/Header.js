import React, { Component } from 'react'
class Header extends Component {
  state = {
    isLogin: false,
    username: '',
    password: ''
  }
  componentDidMount () {
    // 获取存储的本地数据
    const loginUUID = localStorage.getItem('loginUUID')
    // const loginUUID = localStorage.loginUUID
    console.log(loginUUID)
    if (loginUUID) {
      setTimeout(() => {
        this.setState({
          isLogin: true
        })
      }, 1000);
    }
  }
  render () {
    const { username, password, isLogin } = this.state
    return isLogin ? <div><span>头像</span><button onClick={this.logout}>登出</button></div> : <div>
      <label htmlFor="">用户名</label><input onChange={(event) => {
        this.handleInput(event, 'username')
      }} value={username} type="text" /><br />
      <label htmlFor="">密码</label><input onChange={(event) => {
        this.handleInput(event, 'password')
      }} value={password} type="text" />
      <button onClick={this.login} >登录</button>
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

          // cookie
          // H5 的本地存储功能   ( sessionStorage  localStorage )
          // 在浏览中保存登录状态
          // 本地存储只能存储字符串  想要存储对象的话转成 json 串存储
          // sessionStorage 和 localStorage 用法完全一样只不过前者有存储时限，当浏览器标签页关闭时自动删除
          // localStorage.setItem("loginUUID", JSON.stringify({
          //   login: '869dg8766tfytr65fy'
          // }));
          localStorage.setItem('loginUUID', 'uytabduyt1')
          // localStorage.setItem("username", 'lucy');
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
  logout = () => {
    localStorage.removeItem("loginUUID");
    // localStorage.removeItem("username");
    // localStorage.clear()
    this.setState({
      isLogin: false
    })
  }
}
export default Header