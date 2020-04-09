import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
class User extends Component {
  state = {
    userInfo: null
  }
  componentDidMount () {
    // get /user/:loginname 用户详情
    // 示例：/api/v1/user/DongHongfei
    // console.log(this.props.match.params)
    console.log('不在用户页切换到用户才会执行')
    const username = this.props.match.params.username
    this.getUserInfo(username)
  }
  componentDidUpdate (prevProps) {
    // 组件更新了就触发  props 或者 state 发生改变
    // 因为该组件是页面(路由)组件 默认会接收路由的 props，当页面地址改变时，也就是 props 发生了改变
    // 在此处想要修改 state 的话必须加判断 否则会无限循环
    // console.log(this.props.location)
    if (this.props.location.pathname !== prevProps.location.pathname) {
      console.log('在用户页切换用户才会执行')
      const username = this.props.match.params.username
      this.getUserInfo(username)
    }
  }
  getUserInfo = username => {
    axios.get(`https://www.vue-js.com/api/v1/user/${username}`).then(res => {
      // console.log(res.data.data)
      this.setState({
        userInfo: res.data.data
      })
    })
  }
  render () {
    const { userInfo } = this.state
    return <div className='user-wrap'>
      {
        userInfo ? <div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <img style={{ width: '40px' }} src={userInfo.avatar_url} alt="" />
            <span>{userInfo.loginname}</span>
            <span>积分 {userInfo.score}</span>
            {userInfo.githubUsername ? <span>github {userInfo.githubUsername}</span> : ''}
            {userInfo.collect_topics.length ? <span>{userInfo.collect_topics.length} 话题收藏</span> : ''}
            <span>创建于 {userInfo.create_at}</span>
          </div>
          <hr />
          <div>
            <h4>最近创建的话题</h4>
            {
              userInfo.recent_topics.length ? <ul>
                {
                  userInfo.recent_topics.map(item => <li key={item.id}> <Link to={`/user/${item.author.loginname}`}><img src={item.author.avatar_url} alt="" /></Link> <Link to={`/topic/${item.id}`}>{item.title}</Link></li>)
                }
              </ul> : <span>无话题</span>
            }

          </div>
          <hr />
          <div>
            <h4>最近参与的话题</h4>
            {
              userInfo.recent_replies.length ? <ul>
                {
                  userInfo.recent_replies.map(item => <li key={item.id}> <Link to={`/user/${item.author.loginname}`}><img src={item.author.avatar_url} alt="" /></Link> <Link to={`/topic/${item.id}`}>{item.title}</Link></li>)
                }
              </ul> : <span>无话题</span>
            }
          </div>
        </div> : <div>请稍等</div>
      }
    </div>
  }
}
export default User