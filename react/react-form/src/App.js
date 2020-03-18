import React, { Component } from 'react';
import Form from './components/Form'
import ManyCheckbox from './components/ManyCheckbox'
import Dialog from './components/Dialog/Dialog'
import './app.css'
import Button from './components/Button/Button'
import Box from './components/Box/Box'

class App extends Component {
  state = {
    show: false,
    inputVal: '',
    address: ''
  }
  render () {
    const { show, inputVal, address } = this.state
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
          {
            address ? <div> {address} </div>
              :
              <div>
                <Button text='请输入地址' click={this.showDialog} />
                <Dialog title='地址' visiblity={show} okClick={this.changeAddress} close={this.closeDialog} >
                  {/* 这也是一种 props 的传递方式  默认当作  children 属性传递给子组件*/}
                  <input type="text" value={inputVal} onChange={this.handleInput} />
                </Dialog>
              </div>
          }
          <hr />
          <br />
          <br />
          <Box />
        </div>
      </div>
    )
  }
  showDialog = () => {
    this.setState({
      show: true
    })
  }
  handleInput = (event) => {
    this.setState({
      inputVal: event.target.value
    })
  }
  changeAddress = () => {
    this.setState({
      address: this.state.inputVal
    })
  }
  closeDialog = () => {
    this.setState({
      show: false
    })
  }
}
export default App

