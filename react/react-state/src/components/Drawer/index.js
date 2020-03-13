import React, { Component } from 'react'
import './drawer.css'
class Drawer extends Component {
  state = {
    showDrawer: false
  }
  render () {
    const { showDrawer } = this.state
    return (
      <div className='demo-drawer'>
        <button onClick={
          () => {
            this.setState({ showDrawer: true })
          }
        }>点我打开</button>
        <div onClick={
          () => {
            this.setState({ showDrawer: false })
          }
        } className={showDrawer ? 'drawer-wrapper show' : 'drawer-wrapper'}>
          <div onClick={this.stopClick} className='drawer-container'>我来啦!</div>
        </div>
      </div>
    )
  }
  stopClick = (event) => {
    event.stopPropagation()
  }
}
export default Drawer