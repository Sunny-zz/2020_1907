import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
class Message extends Component {
  state = {
    messageInfo: null
  }
  componentDidMount () {
    // get /messages 获取已读和未读消息
    // 接收 get 参数
    // accesstoken String
    const token = localStorage.getItem('token')
    axios.get(`https://www.vue-js.com/api/v1/messages?accesstoken=${token}`).then(res => {
      console.log(res.data.data)
      this.setState({
        messageInfo: res.data.data
      })
      // 当进入到消息页的时候将所有的未读标记成已读
      // 当有未读消息的时候才会去标记成已读
      if (res.data.data.hasnot_read_messages.length > 0) {
        axios.post(`https://www.vue-js.com/api/v1/message/mark_all`, { accesstoken: token }).then(res => {
          // console.log(res)
        })
      }
    })
  }
  render () {
    const { messageInfo } = this.state
    return messageInfo ? <div className='message-box'>
      <div></div>
      <div>
        <h4>过往消息</h4>
        {/* zhaoweibing 在话题 推荐一个优秀的语音答题社区 中@了你 */}
        <ul>
          {messageInfo.has_read_messages.map(item => <li key={item.id}> <Link to={`/user/${item.author.loginname}`}>{item.author.loginname}</Link>在话题 <Link to={`/topic/${item.topic.id}#${item.reply.id}`}>{item.topic.title}</Link> 中 {item.type === 'at' ? '@' : '回复'}了你  </li>)}
        </ul>
      </div>
    </div> : <div>稍等</div>
  }
}
export default Message