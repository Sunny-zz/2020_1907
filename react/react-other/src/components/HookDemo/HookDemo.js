import React, { useState, useEffect } from 'react'
const HookDemo = (props) => {
  const add = () => {
    setCount(count + 1)
  }
  // 引入 useState 方法在 react 包中
  // 使用 useState 在函数式组件内创建一个 state，并设置 state 的默认值
  // count 是 state 的名称
  // useState() 传递的参数就是 state 的默认值
  // 也可以使用 useState 创建修改对应的 state 的方法
  const [count, setCount] = useState(0);
  // useEffect 函数调用的使用传递的参数就相当于 class 组件的生命周期 cdm cdu
  useEffect(() => {
    console.log(1111)
    // 修改 state
    // 获取真实的 dom 节点
    setTimeout(() => {
      console.log('setTimeout')
      setCount(10000)
    }, 1000);
  })
  return <div>
    <h2>测试 Hook</h2>
    <button className='btn' onClick={add}>add</button>
    <button>{count}</button>
  </div>
}
export default HookDemo