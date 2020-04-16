const products = (state = [
  { id: 1, title: "iPad 4 Mini", price: 500.01, inventory: 2 },
  { id: 2, title: "H&M T-Shirt White", price: 10.99, inventory: 10 },
  { id: 3, title: "Charli XCX - Sucker CD", price: 19.99, inventory: 5 }
], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return state.map(item => {
        return item.id === action.id ? { ...item, inventory: item.inventory - 1 } : item
      })
    default:
      return state
  }
}
export default products