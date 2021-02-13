import { connect } from 'react-redux';
import Header from '../components/Header';
import addToCart from '../services/actions/actions';

const mapStateToProps = (state) => ({
    data: state,
})

const mapDispatchToProps = (dispatch) => ({
    
})



export default connect(mapStateToProps, mapDispatchToProps)(Header)