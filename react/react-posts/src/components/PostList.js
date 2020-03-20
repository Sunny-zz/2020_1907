import React, { Component } from 'react'

// 在react 项目内如何使用第三方工具 
// axios 的使用
import axios from 'axios'
class PostList extends Component {
  state = {
    postList: []
  }
  render () {
    const { postList } = this.state
    return (
      <div className='post-list'>
        {postList.length ? '展示列表数据' : <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584700110399&di=8e729a7c24a04a1d915b28106622bad2&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F357d23d074c2954d568d1a6f86a5be09d190a45116e95-0jh9Pg_fw658" alt="" />}
      </div>
    )
  }
  // 在react 组件内刚进入页面就像后台发送请求更新数据需要在 cdm 生命周期内进行
  componentDidMount () {
    axios.get('http://localhost:8080/posts').then(res => {
      // console.log(res.data)
      setTimeout(() => {
        this.setState({
          postList: res.data
        })
      }, 2000);
    })
  }
}
export default PostList