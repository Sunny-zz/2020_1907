import React, { Component } from 'react';
import Form from './components/Form'
import ManyCheckbox from './components/ManyCheckbox'
import Dialog from './components/Dialog/Dialog'
import './app.css'

class App extends Component {
  state = {
    show: false
  }
  render () {
    const { show } = this.state
    return (
      <div className="App">
        <div className="wrap">
          <Form />
          <hr />
          <br />
          <br />
          <ManyCheckbox />
          <hr />
          <br />
          <br />
          {/* button 修改 Dialog 组件的状态(state) */}
          {/* 兄弟元素想要控制另外一个兄弟的state ? */}
          <button >弹出对话框</button>
          <Dialog visiblity={show} />
        </div>
      </div>
    )
  }
}
export default App

