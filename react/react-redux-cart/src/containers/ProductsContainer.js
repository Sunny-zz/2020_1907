import { connect } from 'react-redux'
import ProductsList from '../components/ProductsList'
import { addToCart } from '../actions'
const mapStateToProps = state => {
  return {
    products: state.products
  }
}
const ProductsContainer = connect(mapStateToProps, { addToCart })(ProductsList)
export default ProductsContainer