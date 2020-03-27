import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'
class Post extends Component {
  state = {
    post: null,
    text: ''
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
  // 2020-03-27T00:48:07.980Z
  // moment.js
  render () {
    const { post, text } = this.state
    // const {author,isCollect,title,content,comments} = post
    return (
      <div>
        {post ? <div>
          <div>
            <div>作者 · {post.author} 创建于 · {moment().format()}</div>
            <div><button onClick={this.changeCollect}>{post.isCollect ? '已关注' : '关注'}</button></div>
            <h2>{post.title}</h2>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          <hr />
          <div className='comment-box'>
            <div>
              <input onChange={this.handleInput} value={text} type="text" />
              <button onClick={this.addComment}>评论</button>
            </div>
            {post.comments.length ? <ul className="list">
              {post.comments.map(item => <li key={item.id}><div>
                <div>
                  <span>{item.commentText}</span>
                </div>
                <button onClick={() => { this.like(item.id) }} style={{ color: item.likes.includes('123456') ? 'red' : 'black' }} >赞</button> <span>{item.likes.length ? item.likes.length : ''}</span>
              </div></li>)}
            </ul> : <div>暂无评论</div>}
          </div>
        </div> : <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585201979320&di=9da9efe892503897edf0b2e1f9f4f55e&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F357d23d074c2954d568d1a6f86a5be09d190a45116e95-0jh9Pg_fw658" alt="" />}
      </div>
    )
  }
  changeCollect = () => {
    const { post } = this.state
    axios.patch(`http://localhost:8080/articleList/${post.id}`, { isCollect: !post.isCollect }).then(res => {
      console.log(res.data)
      // 修改本地的 state 
      // 1. 自己的
      // this.setState({
      //   post: { ...post, isCollect: !post.isCollect }
      // })
      // 2. 借助后台反馈的值
      this.setState({
        post: res.data
      })
    })
  }
  like = (id) => {
    // 修改这篇文章下的某条评论里面的 likes 数组
    // http://localhost:8080/articleList/id
    // comments: []
    const { post } = this.state
    // 已知 id   [] 
    const comment = post.comments.find(item => id === item.id)
    if (comment.likes.includes("123456")) {
      const newLikes = comment.likes.filter(item => item !== "123456")
      // console.log(newLikes)
      comment.likes = newLikes
    } else {
      comment.likes.push("123456")
    }
    axios.patch(`http://localhost:8080/articleList/${post.id}`, { comments: post.comments }).then(res => {
      this.setState({
        post: res.data
      })
    })
  }
  handleInput = event => {
    this.setState({
      text: event.target.value
    })
  }
  addComment = () => {
    const { post, text } = this.state
    axios.patch(`http://localhost:8080/articleList/${post.id}`, {
      comments: [...post.comments, {
        id: new Date().getTime().toString(),
        commentText: text,
        likes: []
      }]
    }).then(res => {
      this.setState({
        post: res.data,
        text: ''
      })
    })
  }
}
export default Post