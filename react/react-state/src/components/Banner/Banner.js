import React, { Component } from 'react'
import './banner.css'
class Banner extends Component {
  constructor() {
    super()
    console.log('组件的生命周期 挂载第一阶段 ')
  }
  state = {
    ind: 0,
    run: 0
  }
  render () {
    console.log('render 第三阶段')
    const { ind } = this.state
    const showStyle = {
      opacity: 1,
      zIndex: 1
    }
    const bgcStyle = {
      backgroundColor: 'rgba(255,255,255,1)'
    }
    // 直接在 render 下使用 this.xx 定义一个属性的话，其实整个组件内都可以获取到这个属性，类似定义了一个组件内的全局变量
    this.a = 10
    return (
      <div className="banner">
        <div onMouseEnter={this.stopAutoPlay} onMouseLeave={this.startAutoPlay} className="pic">
          <img style={ind === 0 ? showStyle : {}} src="https://img10.360buyimg.com/pop/s590x470_jfs/t1/104317/31/14860/54201/5e6a0415Eea5eb271/8311074b2ae7c32e.jpg.webp" alt="" />
          <img style={ind === 1 ? showStyle : {}} src="https://img10.360buyimg.com/da/s590x470_jfs/t1/85874/39/13876/81686/5e5dc47cE56616fef/5e845dd1351afbcf.jpg.webp" alt="" />
          <img style={ind === 2 ? showStyle : {}} src="https://img10.360buyimg.com/pop/s590x470_jfs/t1/101051/40/13732/100527/5e5f2300Ec7f901af/1213e2827877ec7e.jpg.webp" alt="" />
          <img style={ind === 3 ? showStyle : {}} src="https://imgcps.jd.com/ling/10429448896/5a6d5ae_6ZuG5Zui5aSn54mM5pel/5piO5pif55u05pKt6YCB5aW956S8/p-5bd8253082acdd181d02fa71/1ed3bd1b.jpg" alt="" />
          <img style={ind === 4 ? showStyle : {}} src="https://imgcps.jd.com/ling/28798477224/57K-6Ie0576O556z5ZGo/5ruhMjU55YePNTA/p-5bd8253082acdd181d02fa6d/cc6c4556.jpg" alt="" />
        </div>
        <ul className="list">
          <li onClick={() => { this.change(0) }} style={ind === 0 ? bgcStyle : {}}></li>
          <li onClick={() => { this.change(1) }} style={ind === 1 ? bgcStyle : {}}></li>
          <li onClick={() => { this.change(2) }} style={ind === 2 ? bgcStyle : {}}></li>
          <li onClick={() => { this.change(3) }} style={ind === 3 ? bgcStyle : {}}></li>
          <li onClick={() => { this.change(4) }} style={ind === 4 ? bgcStyle : {}}></li>
        </ul>
        <div onClick={this.left} className="left">{'<'}</div>
        <div onClick={this.right} className="right">{'>'}</div>
      </div>
    )
  }
  // 除了生命周期函数之外的方法里面想要使用 this 必须设置成箭头函数
  componentDidMount () {
    console.log('生命周期函数 挂载最后阶段 挂载完毕')

    this.autoPlay()
  }
  stopAutoPlay = () => {
    clearInterval(this.state.run)
  }
  startAutoPlay = () => {
    this.autoPlay()
  }
  autoPlay = () => {
    this.setState({
      run: setInterval(() => {
        this.right()
      }, 2000)
    })
  }
  change = (ind) => {
    this.setState({
      ind: ind
    })
  }
  left = () => {
    const { ind } = this.state
    this.setState({
      ind: ind === 0 ? 4 : ind - 1
    })
  }
  right = () => {
    const { ind } = this.state
    this.setState({
      ind: ind === 4 ? 0 : ind + 1
    })
  }
}
export default Banner