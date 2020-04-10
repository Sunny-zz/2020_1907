import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { Pagination } from 'antd';
import './home.scss'
import axios from 'axios'
class Home extends Component {
  state = {
    topics: [],
    currentPage: 1
  }
  componentDidMount () {
    const type = this.fromLocationGetType()
    //  ?tab=job&page=18    ===>  18
    // match 方法  获取匹配到的子字符串
    const currentPage = this.fromLocationGetPage()
    this.setState({
      currentPage
    })
    this.getTopics(type, currentPage)
  }
  // 获取 topics 列表 发送 get 请求 https://www.vue-js.com/api/v1/topics
  // 某一个类别 某一页
  // 根据地址栏的信息获取到 要展示的类别 (all share job ask ...)   判断地址栏是否存在某个类别
  // 还要获取对应的页 (页数已经设置成了 state ) 

  // 什么时候需要发请求  
  // 刚进页面的时候   第几页需要在地址栏获取地址栏没有就默认是第一页 
  // 切换类别 默认第一页数据
  // 分页器  
  // 同一时间段可以发出了多个请求
  // 但是当前最新的请求可能比较快，之前的请求比较慢，会导致页面先出现最新的内容而后就会被原来的内容覆盖(显示错误)
  // 取消 axios 请求
  componentDidUpdate (prevProps) {
    const { search } = this.props.location
    const oldsearch = prevProps.location.search
    if (search !== oldsearch) {
      const type = this.fromLocationGetType()
      if (!search.includes('page')) {
        // 点击了切换大类别并不是分页器
        this.setState({
          currentPage: 1
        })
        this.getTopics(type, 1)
      } else {
        // 点击了分页器
        this.getTopics(type, this.fromLocationGetPage())
      }
    }
  }
  getTopics = (type = 'all', page = '1', limit = 20) => {
    // 将 source 当成一个全局变量
    // 上来就执行一次取消 axios 请求操作
    if (this.source) {
      console.log('取消 axios 请求')
      this.source.cancel('Operation canceled by the user.');
    }
    const CancelToken = axios.CancelToken;
    this.source = CancelToken.source();
    // axios.get('/user/12345', {
    //   cancelToken: source.token
    // }).catch(function(thrown) {
    //   if (axios.isCancel(thrown)) {
    //     console.log('Request canceled', thrown.message);
    //   } else {
    //     // 处理错误
    //   }
    // });
    // 取消请求（message 参数是可选的）
    axios.get(`https://www.vue-js.com/api/v1/topics?tab=${type}&limit=${limit}&page=${page}`, {
      cancelToken: this.source.token
    }).then(res => {
      // console.log(res.data.data)
      this.setState({
        topics: res.data.data
      })
    })
  }
  changePage = (page) => {
    const type = this.fromLocationGetType()
    // 更改页面地址 1. link   2. history 相关的方法
    this.props.history.push(`?tab=${type}&page=${page}`)
    this.setState({
      currentPage: page
    })
  }
  fromLocationGetType = () => {
    const { search } = this.props.location
    return search === '' ? 'all' : search.includes('all') ? 'all' : search.includes('share') ? 'share' : search.includes('weex') ? 'weex' : search.includes('good') ? 'good' : search.includes('job') ? 'job' : 'ask'
  }
  fromLocationGetPage = () => {
    const { search } = this.props.location
    return search.includes('page') ? Number(search.match(/[0-9]{1,2}/)[0]) : 1
  }
  // 全部类别展示所有类别按钮  其他类别只展示精华或者置顶类别按钮
  getButtonText = topic => topic.top ? '置顶' : ''
  render () {
    // [{tab: 'all',allNumber: 1000},{tab: 'share',allNumber: 200}]
    const { search } = this.props.location
    const { topics, currentPage } = this.state
    const paginationArr = [
      { tab: 'all', allNumber: 1015 },
      { tab: 'good', allNumber: 15 },
      { tab: 'share', allNumber: 350 },
      { tab: 'weex', allNumber: 3 },
      { tab: 'job', allNumber: 39 },
      { tab: 'ask', allNumber: 623 }
    ]
    const paginationTotal = paginationArr.find(item => search === '' ? item.tab === 'all' : search.indexOf(item.tab) > -1).allNumber
    return <div className='home'>
      <div className="nav">
        <ul>
          <li><NavLink isActive={() => search.includes('all') || search === ''} to='/?tab=all'>全部</NavLink></li>
          <li><NavLink isActive={() => search.includes('good')} to='/?tab=good'>精华</NavLink></li>
          <li><NavLink isActive={() => search.includes('weex')} to='/?tab=weex'>weex</NavLink></li>
          <li><NavLink isActive={() => search.includes('share')} to='/?tab=share'>分享</NavLink></li>
          <li><NavLink isActive={() => search.includes('ask')} to='/?tab=ask'>问答</NavLink></li>
          <li><NavLink isActive={() => search.includes('job')} to='/?tab=job'>招聘</NavLink></li>
        </ul>
      </div>
      <hr />
      <div className='topic-list'>
        {
          topics.length ? <div>
            <ul>
              {
                topics.map(item => <li key={item.id}> <Link to={`/user/${item.author.loginname}`}><img src={item.author.avatar_url} alt="" /></Link> <span>{this.getButtonText(item)}</span><Link to={`/topic/${item.id}`}>{item.title}</Link></li>)
              }
            </ul>
            <Pagination onChange={this.changePage} current={currentPage} total={paginationTotal} defaultPageSize={20} />
          </div> : '请稍等'
        }

      </div>
    </div>
  }
}
export default Home