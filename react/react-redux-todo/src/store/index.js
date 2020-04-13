import { createStore } from 'redux';

const rootReducer = (state = {
  todos: [],
  filter: 'all'
}, action) => {
  switch (action.type) {

    default:
      return state
  }
}
const store = createStore(rootReducer)
export default store