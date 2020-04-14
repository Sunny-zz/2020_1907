
import { connect } from 'react-redux'
import TodoFooter from '../components/TodoFooter'
const mapStateToProps = state => {
  return {
    filterType: state.filterType
  }
}
const TodoFooterContainer = connect(mapStateToProps)(TodoFooter)
export default TodoFooterContainer