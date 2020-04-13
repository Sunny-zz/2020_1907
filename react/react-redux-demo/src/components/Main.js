import React, { Component } from 'react'
import store from '../store'
import { connect } from 'react-redux'
class Main extends Component {
  state = {
    number: ''
  }
  render () {
    const { number } = this.state
    const { num } = this.props
    return <div className='main'>
      <div>
        <span>{num}</span>
        <input type="text" value={number} onChange={event => this.setState({ number: event.target.value })} />
        <button onClick={this.handleClick}>-</button>
      </div>
    </div >
  }
  handleClick = () => {
    const { number } = this.state
    // dispatch 是用来发出 action 的方法 该方法需要传递一个对象
    // 对象下必须有 type 属性,属性值是 action 的类别,还可以添加一个其他属性用于修改 state

    number.trim() ? store.dispatch({ type: 'DECREMENT', number }) : store.dispatch({ type: 'DECREMENT' })
  }
}
const mapStateToProps = state => {
  return {
    num: state.num
  }
}
export default connect(mapStateToProps)(Main)