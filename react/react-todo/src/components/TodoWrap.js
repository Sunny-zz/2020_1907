import React, { Component } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import TodoFooter from './TodoFooter'
class TodoWrap extends Component {
  state = {
    todoText: '',
    todoList: [
      {
        id: '12de3',
        todoText: '吃饭',
        isCompleted: false
      },
      {
        id: '56tgd',
        todoText: '上课',
        isCompleted: true
      }
    ],
    showType: 'all'
  }
  render () {
    const { todoText, todoList, showType } = this.state
    // console.log(todoText)
    const showTodoList = this.filterTodos(showType)
    const activeTodoNum = this.filterTodos('active').length
    return (
      <div className="todo_wrap" style={{ width: '60%', margin: '0 auto' }}>
        <h1>TODO</h1>
        <TodoForm todoText={todoText} changeValue={this.changeValue} addTodo={this.addTodo} />
        {
          todoList.length ? <div>
            <ul>
              {
                showTodoList.map(item => <Todo key={item.id} todo={item} changeCompleted={this.changeCompleted} delTodo={this.delTodo} />)
              }
            </ul>
            {/* footer 里面需要展示未完成的条数  */}
            {/* 1. 把需要的所有数据当作 props 传递给 footer 自己计算    不推荐 */}
            {/* 2. 直接在父组件计算好个数，传递给 footer  */}
            {/* a. 在 render 直接计算，计算完毕传递 */}
            {/* b. 计算过程写成 class 的函数，使用时调用 */}
            <TodoFooter showType={showType} changeType={this.changeType} activeTodoNum={activeTodoNum} clearCompleted={this.clearCompleted} />
          </div> : <div>请添加</div>
        }
      </div>
    )
  }
  changeValue = event => {
    this.setState({
      todoText: event.target.value
    })
  }

  addTodo = () => {
    const { todoList, todoText } = this.state
    if (todoText.trim()) {
      const newTodo = {
        id: new Date().getTime(),
        todoText: todoText,
        isCompleted: false
      }
      this.setState({
        todoList: [...todoList, newTodo],
        todoText: ''
      })
    } else {
      alert('请输入有效字符')
    }
  }
  changeCompleted = (id) => {
    // console.log(id)
    // 已知  id   [xxx]   ====>  修改数组内的某个对象(id 等于已知的那个)下的 isCompleted 属性
    // find 
    const { todoList } = this.state
    // todoList.find(item => item.id === id).isCompleted = !todoList.find(item => item.id === id).isCompleted
    // console.log(todoList)
    // this.setState({
    //   todoList: todoList
    // })
    // [1,2,3] ===>  [2,4,6]
    this.setState({
      todoList: todoList.map(item => {
        if (item.id === id) {
          item.isCompleted = !item.isCompleted
        }
        return item
      })
    })

    // todoList.map(item => {
    //   const newItem = { ...item }
    //   if (newItem.id === id) {
    //     newItem.isCompleted = !newItem.isCompleted
    //   }
    //   return newItem
    // })
    // console.log(todoList)
  }
  delTodo = id => {
    // 已知 id  [xxx]   ====> 将数组内的某个对象删除
    // filter 
    const { todoList } = this.state
    this.setState({
      todoList: todoList.filter(item => item.id !== id)
    })
  }
  changeType = type => {
    this.setState({
      showType: type
    })
  }
  // 功能型方法并不是当作事件的函数
  filterTodos = (type) => {
    return this.state.todoList.filter(item => type === 'active' ? !item.isCompleted : type === 'completed' ? item.isCompleted : true)
  }
  clearCompleted = () => {
    this.setState({
      todoList: this.filterTodos('active')
    })
  }
}
// 全选
// 回车添加

// 假如你把数据放到数据库(json-server)
// 只把 todoList 放到数据库
// 1. 添加todo 刷新页面添加的还在
// 2. 能删除
// 3. 修改完成和未完成
export default TodoWrap