import React, { Component } from 'react'
import './dialog.css'
import Button from '../Button/Button'
class Dialog extends Component {
  render () {
    // dialog 对话框:  出现和消失  ， 点击确认对话框消失， 点击确定还可以帮助父组件执行想要做的事 ,点击遮罩关闭对话框
    const { visiblity, title, children, okClick, close } = this.props
    return (
      <div onClick={close} style={{ display: visiblity ? 'block' : 'none' }} className='dialog-wrapper'>
        <div onClick={(event) => event.stopPropagation()} className="dialog">
          <h2>{title}</h2>
          <div className='dialog-body'>
            {children}
          </div>
          <Button text='确定' click={() => {
            close()
            okClick()
          }} />
        </div>
      </div>
    )
  }
}
export default Dialog