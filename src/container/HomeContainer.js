import { connect } from 'react-redux';
import Home from '../components/Home';
import { addToCart, removeFromCart } from '../services/actions/actions';

const mapStateToProps = (state) => ({
    data:state
})

const mapDispatchToProps = (dispatch) => ({
    addToCartHandler:data =>dispatch(addToCart(data)),
    removeHandler:data =>dispatch(removeFromCart(data))
})



export default connect(mapStateToProps, mapDispatchToProps)(Home)
// function HomeContainer() {
//     return(
//         <h1>Home Container</h1>
//     )
// }

// export default HomeContainer;