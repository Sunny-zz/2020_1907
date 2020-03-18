import React, { Component } from 'react'
import './box.css'
class Box extends Component {
  state = {
    show: true
  }
  render () {
    const { show } = this.state
    // const value = show ? '200px' : '0px'
    return (
      <div>
        <button onClick={this.change}>按钮</button>
        {/* <div style={{ height: value, width: value }} className="box"></div> */}
        <div style={{ animation: show ? 'show 0.5s forwards' : 'hide 0.5s forwards' }} className="box"></div>
      </div>
    )
  }
  change = () => {
    const { show } = this.state
    this.setState({ show: !show })
  }
}
export default Box