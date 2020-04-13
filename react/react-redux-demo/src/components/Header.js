import React, { Component } from 'react'
import store from '../store'
import { connect } from 'react-redux'

class Header extends Component {
  render () {
    // console.log(this.props)
    const { num } = this.props
    return <header>
      <div>
        <span>{num}</span>
        <button onClick={this.handleClick}>+</button>
      </div>
    </header>
  }
  handleClick = () => {
    // 通过 store 的 dispatch 方法发出某类 action
    //  store.dispatch(对象{必须包含type属性})
    store.dispatch({ type: 'ADD' })
    // 虽然该过程可能执行了 
  }
}
// connect 方法功能将 store 中的某个数据或者全部数据当成 props 传递给某个组件，前提是必须使用 provider 提供之后才可以获取
// connect 用法
// connect 是一个高阶函数需要调用两次每次都需要传递参数，该方法会返回一个新的组件
// 第一次调用传递的参数是一个函数(这个函数叫 mapStateToProps )
// mapStateToProps 这个函数会接收 store 中的数据作为参数然后需要返回一个对象(这个对象其实就是 props 传递给第二个参数的 props)，对象内写该组件需要的 store 中的数据 
// 第二次调用传递的参数是一个组件
const mapStateToProps = state => {
  return {
    num: state.num
  }
}
export default connect(mapStateToProps)(Header)