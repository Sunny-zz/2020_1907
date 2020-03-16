import React, { Component } from 'react'
import './tabs.css'
class Tab extends Component {
  state = {
    ind: 0
  }
  render () {
    const { ind } = this.state
    // 组件 return 出去的内容就相当于 html 内容，所以在 html 内要尽可能的少些一些 js 操作
    return (
      <div className='tabs'>
        <div className="items">
          {/* react 事件函数传递参数 */}
          <div onMouseEnter={() => { this.change(0) }} className={ind === 0 ? 'tab color' : 'tab'}>1</div>
          <div onMouseEnter={() => { this.change(1) }} className={ind === 1 ? 'tab color' : 'tab'}>2</div>
          <div onMouseEnter={() => { this.change(2) }} className={ind === 2 ? 'tab color' : 'tab'}>3</div>
          {/* bind 方法会生成一个与原来函数一摸一样的函数，只不过里面的this 指向被修改了，并且参数默认设置好了 */}
          <div onMouseEnter={this.change.bind(this, 3)} className={ind === 3 ? 'tab color' : 'tab'}>4</div>
        </div>
        <div className='content'>
          <div className={ind === 0 ? 'show' : ''}></div>
          <div className={ind === 1 ? 'show' : ''}></div>
          <div className={ind === 2 ? 'show' : ''}></div>
          <div className={ind === 3 ? 'show' : ''}></div>
        </div>
      </div>
    )
  }
  change = (ind) => {
    this.setState({
      ind: ind
    })
  }
}
export default Tab