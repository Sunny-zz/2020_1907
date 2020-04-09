import React, { Component } from 'react'
import axios from 'axios'
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
      // console.log(res.data.data)
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
    return <div>
      消息页面
      </div>
  }
}
export default Message