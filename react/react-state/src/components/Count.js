import React, { Component } from 'react'
class Count extends Component {
  // 设置 state  数据
  state = {
    number: 10
  }
  // 使用 state
  // 在类的其他方法内可以使用 this.state 获取 state
  render () {
    const { number } = this.state
    console.log(number)
    return (
      <div>
        {/* <button onClick={this.sub.bind(this)}>-</button> */}
        <button onClick={this.sub}>-</button>
        <span>{number}</span>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
  // 可以在 class 内创建其他的方法，这些方法可以被当做事件函数
  // react 组件内的 class 内除了 react 的给好的方法(render 生命周期等)之外的方法,想要使用 this 关键字指向该组件，需要将方法定义成箭头函数
  add = () => {
    // this.state.number = 20
    // 修改 state 必须使用组件的 steState 方法修改不允许直接修改
    // 给 setState 方法传递一个对象参数，对象内写上要修改的哪一个 state 和具体的值。
    this.setState({
      number: this.state.number + 1
    })
    // 在这并不能获取到更新好之后的 state 因为 setState 操作是异步操作
    // console.log(this.state.number)
    // 当你使用 setState 修改了 state 之后，修改完成的时候 render 函数会再次执行一次，所以在 render 可以获取到最新的 state,禁止在 render 函数内修改 state

  }
  // 方法如果写成普通函数的话绑定事件的时候不能直接绑定需要使用 bind 替换一下 this 指向
  // sub () {
  //   this.setState({
  //     number: this.state.number - 1
  //   })
  // }
  sub = () => {
    this.setState({
      number: this.state.number - 1
    })

  }
}
export default Count

// this.state.number++  等价于   this.state.number = this.state.number + 1

