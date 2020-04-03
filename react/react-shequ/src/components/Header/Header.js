import React, { Component } from 'react'
import './header.css'
import axios from 'axios'
class Header extends Component {
  state = {
    userInfo: null,
    token: '79b3b12e-9631-467b-9210-c68449c98a35'
  }
  componentDidMount () {
    const token = localStorage.getItem('token')
    if (token) {
      axios.post('https://www.vue-js.com/api/v1/accesstoken', { accesstoken: token }).then(res => {
        console.log(res.data)
        // 登陆成功之后存一个 token 到本地
        localStorage.setItem('token', token)
        delete res.data.success
        this.setState({
          userInfo: res.data
        })
      }).catch(() => {
        // 写成 antd 的提示
        alert('登录失败，密码不对')
      })
    }
  }
  render () {
    const { userInfo, token } = this.state
    return <header>
      <img src="https://www.vue-js.com/public/images/vue.png" alt="" />
      {/* 因为这个网站登录不需要输入用户名和密码，只需要输入一个个人的 token 码向后台发送请求即可 */}
      {
        userInfo ? <div><img src={userInfo.avatar_url} alt="" /><span>{userInfo.loginname}</span><button>登出</button></div> : <div>
          <input onChange={(event) => this.setState({ token: event.target.value })} value={token} type="text" />
          <button onClick={this.login}>登录</button>
        </div>
      }
    </header>
  }
  login = () => {
    const { token } = this.state
    if (token.trim()) {
      // 发请求登录 
      // 地址前缀 https://www.vue-js.com/api/v1/
      // 参考 api   post /accesstoken 验证 accessToken 的正确性
      axios.post('https://www.vue-js.com/api/v1/accesstoken', { accesstoken: token }).then(res => {
        // console.log(res.data)
        // 登陆成功之后存一个 token 到本地
        localStorage.setItem('token', token)
        delete res.data.success
        this.setState({
          userInfo: res.data
        })
      }).catch(() => {
        // 写成 antd 的提示
        alert('登录失败，密码不对')
      })
    }
  }
}
export default Header

// 请求解释
// 1. get /topics 主题首页
// get   https://www.vue-js.com/api/v1/topics  获取首页的列表内容
// 参数   https://www.vue-js.com/api/v1/topics?tab=all&page=1
// page Number 页数
// tab String 主题分类  all share wexx ask job good
// limit Number 每一页的主题数量

// 分页 设置的时候定义一个数组  [{tab: 'all',allNumber: 1000},{tab: 'share',allNumber: 200}] 生成对应页数的分页器
// 不知道每一个类别的总数需要自己直接设置

// 查看文章

// 对文章发送评论
// post /topic/:topic_id/replies 新建评论
// 参数 
// accesstoken String 用户的 accessToken
// content String 评论的主体
// 点赞(扩展)

// 点击任意头像调到个人信息页
// get /user/:loginname 用户详情