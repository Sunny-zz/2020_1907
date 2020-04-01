import React, { Component } from 'react'
class Test extends Component {
  state = {
    num: 0
  }
  render () {
    return <div>
      <button onClick={this.add}>add</button>
      <button>{this.state.num}</button>
    </div>
  }
  add = () => {
    this.setState({
      num: this.state.num + 1
    })
  }
}
export default Test