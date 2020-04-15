
import { connect } from 'react-redux'
import TodoFooter from '../components/TodoFooter'
import { changeType, clearCompleted } from '../actions';
import { getFilterTodos } from '../public'
const mapStateToProps = state => {
  return {
    filterType: state.filterType,
    activeTodosNum: getFilterTodos(state.todos, 'active').length,
    completedTodosNum: getFilterTodos(state.todos, 'completed').length
  }
}
const TodoFooterContainer = connect(mapStateToProps, { changeType, clearCompleted })(TodoFooter)
export default TodoFooterContainer