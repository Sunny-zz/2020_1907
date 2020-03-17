import React, { Component } from 'react'
class Form extends Component {
  state = {
    inputVal: '13',
    textareaVal: '空',
    checked: false,
    selectVal: '邮政',
    radioVal: '女'
  }
  render () {
    const { inputVal, textareaVal, checked, selectVal, radioVal } = this.state
    return (
      <div>
        <form onSubmit={this.submit} >
          <h2>react 的表单 受控组件 </h2>
          <h3>input</h3>
          {/* onChange 事件意思:  当 input 输入内容时就会触发 */}
          {/* <input type="text" value={val} onChange={(event) => {
          this.handler(event)
        }} /> */}
          <input type="text" value={inputVal} onChange={(event) => {
            this.handler('inputVal', event)
          }} />
          <hr />
          <h3>textarea</h3>
          <textarea cols="30" rows="10" value={textareaVal} onChange={(event) => {
            this.handler('textareaVal', event)
          }}></textarea>
          <hr />
          <h3>input 的 checkbox</h3>
          <input type="checkbox" checked={checked} onChange={(event) => {
            this.handler('checked', event)
          }} />
          <hr />
          <h3>select</h3>
          <select value={selectVal} onChange={(event) => {
            this.handler('selectVal', event)
          }} >
            <option value="顺丰">顺丰</option>
            <option value="邮政">邮政</option>
            <option value="申通">申通</option>
          </select>
          <hr />
          <h3>input 的 radio</h3>
          <label htmlFor="nan">男</label>
          <input value='男' id='nan' type='radio' name='sex' checked={radioVal === '男'} onChange={(event) => {
            this.handler('radioVal', event)
          }} />
          <label htmlFor="nv">女</label>
          <input value='女' id='nv' type='radio' name='sex' checked={radioVal === '女'} onChange={(event) => {
            this.handler('radioVal', event)
          }} />
          <hr />
          <hr />
          <h2>非受控组件</h2>
          {/* 不设置 value 的值，如想要设置默认值的话只能使用 defaultValue  */}
          {/* 定义ref获取原生dom元素 */}
          {/* ref = input => this.input = input */}
          {/* ref 等于的函数内的默认参数代表的就是 原生 dom 节点 */}
          <input id='input' type="text" defaultValue='123' ref={inputDom => this.input = inputDom} />
          <hr />
          {/* <input type="button" value="提交" onClick={this.submit} /> */}
          <input type="submit" value="提交" />
        </form>
      </div>
    )
  }
  // 当一个函数被当做事件函数的时候默认会被传递一个参数叫 event  事件对象
  handler = (stateName, event) => {
    this.setState({
      // event.target.value  是原生获取输入框内容的方法
      [stateName]: stateName === 'checked' ? event.target.checked : event.target.value
    })
  }
  // handlerCheckbox = (event) => {
  //   this.setState({
  //     checked: event.target.checked
  //   })
  // }
  // handleRadio = (event) => {
  //   console.log(event.target)
  //   this.setState({
  //     radioVal: event.target.value
  //   })
  // }
  submit = (event) => {
    event.preventDefault()
    const { inputVal, textareaVal, checked, selectVal, radioVal } = this.state
    console.log(inputVal, textareaVal, checked, selectVal, radioVal)
    // 在 react 不推荐直接使用 document 获取页面中的 dom 节点 而是推荐使用标签的 ref 属性获取
    // ref 属性就是 react 提供的一个方案，该方案可以获取对应的原生 dom 元素
    console.log(this.input.value)
  }
}
export default Form
