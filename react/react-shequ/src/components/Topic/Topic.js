import React, { Component } from 'react'
import axios from 'axios'
import { Skeleton, message } from 'antd';
import E from 'wangeditor'
import { Link } from 'react-router-dom';
class Topic extends Component {
  state = {
    topic: null,
    comment: '',
    textareaComment: ''
  }
  componentDidMount () {
    // console.log(this.props)
    const { topicid } = this.props.match.params
    const token = localStorage.getItem('token')
    axios.get(`https://www.vue-js.com/api/v1/topic/${topicid}`).then(res => {
      const topic = res.data.data
      topic.replies.forEach(item => {
        item.showTextarea = false
      })
      // console.log(topic)
      this.setState({
        topic: topic
      })
      if (token) {
        // 将该编辑器定义成了组件内的全局变量
        // 组件的任何地方都可以访问
        this.myEditor = new E(this.editor)
        this.myEditor.customConfig.menus = [
          'head',
          'bold',
          'italic',
          'underline'
        ]
        this.myEditor.customConfig.onchange = html => {
          // console.log(html)
          // 输入的评论内容 html 需要让点击事件获取到并且发送添加请求
          // 1. 做成 state 
          // 2. 做成全局变量  this.xxx = html 
          this.setComment(html)
        }
        this.myEditor.create()
        // new E('#editor')    #editor 是代表一个原生的dom元素
      }
    })
  }
  setComment = newComment => {
    this.setState({
      comment: newComment
    })
  }
  up = reply_id => {
    // post /reply/:reply_id/ups 为评论点赞
    // console.log(reply_id)
    const token = localStorage.getItem('token')
    if (token) {
      axios.post(`https://www.vue-js.com/api/v1/reply/${reply_id}/ups`, { accesstoken: token }).then(res => {
        // console.log(res.data)
        // 更新本地的数据 state
        // 1. 直接操作 state
        // 2. 发一个新的请求获取新的 topic
        const author_id = localStorage.getItem('author_id')
        const topic = { ...this.state.topic }
        const currenReply = topic.replies.find(item => item.id === reply_id)
        if (res.data.action === 'up') {
          // 需要修改某个评论的 ups 数组
          currenReply.ups.push(author_id)
        } else {
          currenReply.ups = currenReply.ups.filter(item => item !== author_id)
        }
        // console.log(topic)
        this.setState({
          topic: topic
        })
      })
    } else {
      message.error('请先登录');
    }
  }
  handleTextarea = event => {
    this.setState({
      comment: event.target.value
    })
  }
  addComment = () => {
    // post /topic/:topic_id/replies 新建评论
    // 接收 post 参数
    // accesstoken String 用户的 accessToken
    // content String 评论的主体
    const { topic, comment } = this.state
    console.log(comment)
    if (comment.trim()) {
      const token = localStorage.getItem('token')
      const topic_id = topic.id
      axios.post(`https://www.vue-js.com/api/v1/topic/${topic_id}/replies`, { accesstoken: token, content: comment }).then(res => {
        // 更新本地的评论
        // 1. 做一个假的 reply 添加到 replies 中
        // 比如原来的评论 {id:,ups:,author:,create_at,content: }       {is: ,content,ups}
        // 2. 直接将新的整个文章数据请求回来
        // console.log(res.data)
        const { topicid } = this.props.match.params
        this.setState({
          comment: ''
        })
        this.myEditor.txt.html('')
        // 让组件刷新一下，或者整个页面刷新一下
        axios.get(`https://www.vue-js.com/api/v1/topic/${topicid}`).then(res => {
          // console.log(res.data.data)
          const topic = res.data.data
          topic.replies.forEach(item => {
            item.showTextarea = false
          })
          this.setState({
            topic: res.data.data
          })
        })
      })
    } else {
      message.info('请输入有效内容')
    }
  }
  // 点击评论的回复按钮 显示评论框和默认的评论内容
  // 差个获得焦点
  handleReply = ({ id, author }) => {
    // 出现对应的 textArea 修改 topic
    // 输如框的内容加上评论的 @作者名   修改 textareaComment
    const { topic } = this.state
    const newTopic = { ...topic }
    newTopic.replies.forEach(ele => {
      if (ele.id === id) {
        ele.showTextarea = !ele.showTextarea
      } else {
        ele.showTextarea = false
      }
    });
    this.setState({
      topic: newTopic,
      textareaComment: `@${author.loginname} `
    })
  }
  replyReply = id => {
    // post /topic/:topic_id/replies 新建评论
    // 接收 post 参数

    // accesstoken String 用户的 accessToken
    // content String 评论的主体
    // reply_id String 如果这个评论是对另一个评论的回复，请务必带上此字段。这样前端就可以构建出评论线索图。
    const { textareaComment, topic } = this.state
    const topic_id = topic.id
    if (textareaComment.trim()) {
      const token = localStorage.getItem('token')
      axios.post(`https://www.vue-js.com/api/v1/topic/${topic_id}/replies`, { accesstoken: token, content: textareaComment, reply_id: id }).then(res => {
        // 重新发一遍获取文章详情的请求
        axios.get(`https://www.vue-js.com/api/v1/topic/${topic_id}`).then(res => {
          console.log(res.data.data)
          const topic = res.data.data
          topic.replies.forEach(item => {
            item.showTextarea = false
          })
          this.setState({
            topic: res.data.data,
            textareaComment: ''
          })
        })
      })
    }
  }

  render () {
    const { topic, textareaComment } = this.state
    const token = localStorage.getItem('token')
    const author_id = localStorage.getItem('author_id')
    return topic ? <div className='topic'>
      <div className="topic-header">
        <div className='header-top'>
          <span>置顶</span>
          <h2>{topic.title}</h2>
        </div>
        <div className='header-bottom'><span>发布于·{topic.create_at}</span><span>作者 · <Link to={`/user/${topic.author.loginname}`}>{topic.author.loginname}</Link> </span></div>
      </div>
      <hr />
      {/* 文章详情的样式  所有文章的内容的 class 名都是固定的，而且小标题段落图片的样式全部都是一样的 */}
      <div className='topic-content' dangerouslySetInnerHTML={{ __html: topic.content }}></div>
      <div className="comment-box">
        <ul>
          {topic.replies.map(item => <li style={{ borderBottom: '1px solid #ccc', padding: '10px', width: '80%' }} key={item.id}><div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <Link to={`/user/${item.author.loginname}`}><img style={{ width: '40px', height: '40px' }} src={item.author.avatar_url} alt="" /></Link>
              <div>
                <Link to={`/user/${item.author.loginname}`}><span>{item.author.loginname}</span></Link>
                <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
              </div>
            </div>
            {/* 登录和不登录*/}
            {/* 回复按钮存在或不存在  */}
            {/* 不登录点赞按钮颜色不变化 登陆之后点赞按钮颜色根据用户 id 和 item.ups 比较*/}
            <div><button onClick={() => this.up(item.id)} style={{ color: item.ups.includes(author_id) ? 'red' : '#000' }}>点赞</button><span>{item.ups.length}</span>{token ? <button onClick={() => this.handleReply(item)}>回复</button> : ''}</div>
          </div>
            {
              item.showTextarea ? <div>
                <textarea onChange={(event) => this.setState({
                  textareaComment: event.target.value
                })} value={textareaComment} ></textarea> <button onClick={() => this.replyReply(item.id)}>回复</button>
              </div> : ''
            }
          </li>)}
        </ul>
        {
          token ? <div>
            <h3>添加回复</h3>
            <div ref={editor => this.editor = editor} id="editor">
            </div>
            <button onClick={this.addComment}>回复</button>
          </div> : ''
        }

      </div>
    </div> : <Skeleton active />
  }
}
export default Topic