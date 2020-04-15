const filterType = (state = 'all', action) => {
  switch (action.type) {
    case 'CHANGE_TYPE':
      return action.filterType
    default:
      return state
  }
}
export default filterType 