import React, { Component } from 'react'
import './dialog.css'
class Dialog extends Component {
  render () {
    const { visiblity } = this.props
    return (
      <div style={{ display: visiblity ? 'block' : 'none' }} className='dialog-wrapper'>
        <div className="dialog">
          <button>确定</button>
        </div>
      </div>
    )
  }
}
export default Dialog