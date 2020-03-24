import React, { Component } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import TodoFooter from './TodoFooter'
import axios from 'axios'
class TodoWrap extends Component {
  state = {
    todoText: '',
    todoList: [],
    showType: 'all',
    finish: false
  }
  componentDidMount () {
    // axios.get('http://localhost:8080/todoList').then(res => {
    //   setTimeout(() => {
    //     this.setState({
    //       todoList: res.data,
    //       finish: true
    //     })
    //   }, 1000);
    // })
    // axios.get('http://localhost:8080/todoInfo').then(res => {
    //   console.log(res.data.type)
    // })
    axios.all([axios.get('http://localhost:8080/todoList'), axios.get('http://localhost:8080/todoInfo')]).then(res => {
      // console.log(res)
      this.setState({
        todoList: res[0].data,
        finish: true,
        showType: res[1].data.type
      })
    })
  }
  render () {
    const { todoText, todoList, showType, finish } = this.state
    // console.log(todoText)
    const showTodoList = this.filterTodos(showType)
    const activeTodoNum = this.filterTodos('active').length
    const completedTodoNum = this.filterTodos('completed').length
    return (
      <div className="todo_wrap" style={{ width: '60%', margin: '0 auto' }}>
        <h1>TODO</h1>
        <TodoForm allNum={todoList.length} allTodoIsCompleted={this.allTodoIsCompleted()} todoText={todoText} changeValue={this.changeValue} addTodo={this.addTodo} clickAll={this.clickAll} />
        {finish ? todoList.length ? <div>
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
          <TodoFooter showType={showType} changeType={this.changeType} activeTodoNum={activeTodoNum} clearCompleted={this.clearCompleted} completedTodoNum={completedTodoNum} />
        </div> : <div>请添加</div> : <div>稍等一哈</div>
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
      // 1. 将输入的待办事项(todo)添加到后台数据库中
      // 2. 数据库中添加完了之后，更新本地 state
      // 3. 清空输入
      const newTodo = {
        todoText: todoText,
        isCompleted: false
      }
      axios.post('http://localhost:8080/todoList', newTodo).then(res => {
        // console.log(res.data)
        this.setState({
          todoList: [...todoList, res.data],
          todoText: ''
        })
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
    axios.patch(`http://localhost:8080/todoList/${id}`, { isCompleted: !todoList.find(item => item.id === id).isCompleted }).then(
      res => {
        // res.data  {}
        // console.log(res.data)
        this.setState({
          todoList: todoList.map(item => item.id === id ? res.data : item)
        })
      }
    )
    // todoList.find(item => item.id === id).isCompleted = !todoList.find(item => item.id === id).isCompleted
    // console.log(todoList)
    // this.setState({
    //   todoList: todoList
    // })
    // [1,2,3] ===>  [2,4,6]


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
    axios.delete(`http://localhost:8080/todoList/${id}`).then(() => {
      // 跟新本地的数组
      // 1. 使用自己的方法更新 
      // 2. 再发送一次 get 请求向后台获取所有列表数据 更新 state
      const { todoList } = this.state
      this.setState({
        todoList: todoList.filter(item => item.id !== id)
      })
    })
  }
  changeType = type => {
    axios.patch('http://localhost:8080/todoInfo', { type: type }).then(() => {
      // res.data.type
      this.setState({
        showType: type
      })
    })
  }
  // 功能型方法并不是当作事件的函数
  filterTodos = (type) => {
    return this.state.todoList.filter(item => type === 'active' ? item.isCompleted === false : type === 'completed' ? item.isCompleted === true : true)
  }
  clearCompleted = () => {
    this.setState({
      todoList: this.filterTodos('active')
    })
  }
  allTodoIsCompleted = () => {
    // 已知  []  看数组内所有的 isCompleted 是否都是 true
    return this.state.todoList.every(item => item.isCompleted)
  }
  clickAll = (event) => {
    // 如何全部修改  map 
    // 修改成 event.target.checked
    axios.all(this.state.todoList.map(item => axios.patch(`http://localhost:8080/todoList/${item.id}`, { isCompleted: event.target.checked })
    )).then(res => {
      console.log(res)
      // [
      //   {
      //     data: { 1}
      //   },
      //   {
      //     data: { 2}
      //   }
      // ]
      //   ==>
      //   [
      //     { 1},
      //     { 2}
      //   ]
      this.setState({
        todoList: res.map(item => item.data)
      })
    })
    // this.setState({
    //   todoList: this.state.todoList.map(item => {
    //     item.isCompleted = event.target.checked
    //     return item
    //   })
    // })
  }
}

// 回车添加
// 全选

// 假如你把数据放到数据库(json-server)
// 只把 todoList 放到数据库
// 1. 添加todo 刷新页面添加的还在
// 2. 能删除
// 3. 修改完成和未完成
export default TodoWrap