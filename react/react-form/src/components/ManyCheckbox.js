import React, { Component } from 'react'
class ManyCheckbox extends Component {
  state = {
    fruits: ['菠萝']
  }
  render () {
    const { fruits } = this.state
    // console.log(fruits)
    return (
      <div>
        <h2>请问勾选出下列你喜欢的水果</h2>
        <input type="checkbox" onChange={this.select} value='火龙果' checked={fruits.indexOf('火龙果') !== -1} /> 火龙果
        <input type="checkbox" onChange={this.select} value='菠萝' checked={fruits.indexOf('菠萝') !== -1} /> 菠萝
        <input type="checkbox" onChange={this.select} value='牛油果' checked={fruits.indexOf('牛油果') !== -1} /> 牛油果
        <input type="checkbox" onChange={this.select} value='杨桃' checked={fruits.indexOf('杨桃') !== -1} /> 杨桃
        <input type="checkbox" onChange={this.select} value='苹果' checked={fruits.indexOf('苹果') !== -1} /> 苹果
        <br />
        <br />
        <button>提交</button>
      </div>
    )
  }
  select = (event) => {
    // console.log(event.target.value)
    const fruits = [...this.state.fruits]
    const value = event.target.value
    const ind = fruits.indexOf(value)
    if (ind === -1) {
      fruits.push(value)
    } else {
      // filter 
      fruits.splice(ind, 1)
    }
    this.setState({
      fruits: fruits
    })
  }
}
export default ManyCheckbox