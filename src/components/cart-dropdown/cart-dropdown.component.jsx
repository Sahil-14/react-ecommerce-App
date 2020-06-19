import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions'


import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                    :
                    <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())  // we are just settind togglecart hidden parameter to true by calling dispatch
        }}>
        Go to Checkout
        </CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
// const mapStateToProps = (state)  => ({  without createStructuresSelector
//     cartItems:selectCartItems(state)
// })

export default withRouter(connect(mapStateToProps)(CartDropdown));
// order of wrapping componnent is imp
// it is evaluate inside out connect first and withrouter second
// if we dont pass second parameter to connect  ie. mapTodispatch  connect will pass the disapatch into component as a prop