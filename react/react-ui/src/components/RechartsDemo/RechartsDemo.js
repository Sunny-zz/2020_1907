import React, { Component } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'
// 如何将上述组件写成全局组件任何地方可以直接使用
class RechartsDemo extends Component {
  state = {
    data: [
      {
        name1: '平面设计师11111111',
        xinziMin: 6,
        xinziMax: 8
      },
      {
        name1: '界面设计师',
        xinziMin: 8,
        xinziMax: 10
      },
      {
        name1: '移动UI设计师',
        xinziMin: 9,
        xinziMax: 11
      },
      {
        name1: '产品设计师',
        xinziMin: 10,
        xinziMax: 15
      },
      {
        name1: 'UI交互设计师',
        xinziMin: 14,
        xinziMax: 20
      }
    ]
  }
  render () {
    const { data } = this.state

    return <div>
      <button onClick={this.update}>更新数据</button>
      <LineChart width={600} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="xinziMin" stroke="#8884d8" />
        <Line type="monotone" dataKey="xinziMax" stroke="#000" />
        <Legend verticalAlign="top" height={36} />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name1" />
        <YAxis domain={[6, 24]} />
        <Tooltip />
      </LineChart>
    </div>
  }
  update = () => {
    this.setState({
      data: [...this.state.data].sort((a, b) => a.amt - b.amt)
    })
  }
}
export default RechartsDemo