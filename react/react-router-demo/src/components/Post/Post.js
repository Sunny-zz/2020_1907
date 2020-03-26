import React, { Component } from 'react'
import axios from 'axios'
class Post extends Component {
  state = {
    post: null
  }
  // 作为路由页面组件会被默认传递一些props
  // history   跳转历史记录 可以用作返回操作
  // location  当前页面的地址信息
  // match     路由的匹配 以及 动态路由参数信息
  componentDidMount () {
    const { id } = this.props.match.params
    // 根据 id 获取对应文章数据详情更新 post  state
    axios.get(`http://localhost:8080/articleList/${id}`).then(res => {
      // console.log(res)
      setTimeout(() => {
        this.setState({
          post: res.data
        })
      }, 1000);
    })
  }
  render () {
    const { post } = this.state
    return (
      <div>
        {post ? <h2>{post.title}</h2> : <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585201979320&di=9da9efe892503897edf0b2e1f9f4f55e&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F357d23d074c2954d568d1a6f86a5be09d190a45116e95-0jh9Pg_fw658" alt="" />}
      </div>
    )
  }
}
export default Post