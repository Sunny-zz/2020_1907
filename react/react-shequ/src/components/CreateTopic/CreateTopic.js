import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Box from '../Box/Box'
class CreateTopic extends Component {
  state = {
    tab: '',
    title: '',
    content: ''
  }
  render () {
    const { tab, title, content } = this.state
    return <Box title='发布话题' linkText='主页' linkAddress='/' title1={<span>哈哈哈</span>}>
      <div className='create-topic'>
        <span>选择板块:</span>
        <select value={tab} onChange={event => this.handleForm(event, 'tab')}>
          <option value="">请选择</option>
          <option value="share">分享</option>
          <option value="ask">问答</option>
          <option value="job">招聘</option>
        </select>
        {/* 打开另外一个网页依然是自己的页面  */}
        {tab === 'job' ? <span>为避免被管理员删帖，发帖时请好好阅读 <Link to='/topic/541ed2d05e28155f24676a12'>《招聘帖规范》</Link></span> : ''}
        <br />
        <input onChange={event => this.handleForm(event, 'title')} value={title} type="text" placeholder='标题字数 10 字以上' />
        <br />
        <textarea value={content} onChange={event => this.handleForm(event, 'content')}></textarea>
        <button onClick={this.submit}>提交</button>
      </div>
    </Box>
  }
  handleForm = (event, stateName) => {
    this.setState({
      [stateName]: event.target.value
    })
  }
  submit = () => {
    const { tab, title, content } = this.state
    const token = localStorage.getItem('token')
    if (tab && title.length >= 10 && content) {
      // post /topics 新建主题
      // 接收 post 参数
      // title String 标题
      // tab String 目前有 ask share job
      // content String 主体内容
      axios.post(`https://www.vue-js.com/api/v1/topics`, { tab, title, content, accesstoken: token }).then(res => {
        // console.log(res.data)
        this.props.history.push(`/topic/${res.data.topic_id}`)
      })
    }
  }

}
export default CreateTopic