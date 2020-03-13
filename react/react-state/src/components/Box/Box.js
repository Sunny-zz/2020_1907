import React, { Component } from 'react'
import './box.css'
class Box extends Component {
  state = {
    change: false,
    data: true,
    numArr: [1, 2, 3, 4, 5]
  }
  render () {
    const { change, data, numArr } = this.state
    const testList = data ? <div>数据列表</div> : <div>等一哈</div>
    const numList = numArr.length ? <div>
      <ul>
        {
          numArr.map((item, index) => <li key={index}>{item}</li>)
        }
      </ul>
    </div> : <div>数据马上到，请等一哈</div>
    return (
      <div className="box">
        <button onClick={this.changeBgc}>按钮</button>
        <div className={change ? 'box1 active' : 'box1'}></div>
        {/* 条件渲染 存在和不存在  */}
        {/* if 判断(三目)  */}
        {/* 与运算符 只能控制一个元素的存不存在 */}
        {/* 元素变量 */}
        {testList}
        <br />
        <br />
        <br />
        <hr />
        {/* 列表渲染 */}
        {/* 直接将列表做成标签列表，将生成好的标签列表直接放到页面上即可 */}
        {/* 注意 key 以及  map 的用法 */}
        {numList}
      </div>
    )
  }
  changeBgc = () => {
    this.setState({
      change: !this.state.change
    })
  }
}
export default Box

// var arr = [1,2,3]
// 遍历 依次新建标签 放对应数据 添加到页面中的某个结构内





