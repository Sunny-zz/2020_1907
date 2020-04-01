import React, { Component } from 'react'
import Swiper from 'swiper'
import './swiper-demo.scss'
import SwiperComponent from 'react-id-swiper'
import Test from './Test'
class SwiperDemo extends Component {
  state = {
    // 某个 swiper 组件
    swiper: null
  }
  render () {
    const goNext = () => {
      if (this.state.swiper !== null) {
        this.state.swiper.slideNext();
      }
    };
    const goPrev = () => {
      if (this.state.swiper !== null) {
        this.state.swiper.slidePrev();
      }
    };
    // console.log(this.count)
    return <div>
      <h3>swiper 原生用法</h3>
      {/* 只需要下载 swiper  然后引入 css */}
      <div className="swiper-container one">
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-scrollbar"></div>
      </div>
      <h3>swiper 的组件用法</h3>
      {/* 在父组件内如何调用子组件的方法  在父组件内写一个子组件的 ref ，在父组件内就可以获取整个子组件的 类 了，就可以直接访问 lei 里面的方法了 */}
      <Test ref={count => this.count = count} />
      <button onClick={this.count ? this.count.add : () => { }} >外面的add</button>
      {/* 需要下载 react-id-swiper 和 swiper  然后引入 css */}
      <SwiperComponent getSwiper={this.setSwiper} >
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
      </SwiperComponent>
      <button onClick={goPrev}>Prev</button>
      <button onClick={goNext}>Next</button>
    </div>
  }
  componentDidMount () {
    // 进行真实 dom 操作
    new Swiper('.one', {
      direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })
  }
  setSwiper = swiper => {
    this.setState({
      swiper: swiper
    })
  }
}
export default SwiperDemo