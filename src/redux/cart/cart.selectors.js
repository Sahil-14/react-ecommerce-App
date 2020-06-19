
import { createSelector } from 'reselect'

// selectors are of 2 types 
// 1.input selector  :- return piece of a state
// 2.output selector - don;t use createselector


// we are passing whole recuder state here 

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

// taking cartitems from cart


export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
    cartItems.reduce(
        (accumalatedQuantity,cartItem) => 
        accumalatedQuantity + cartItem.quantity,
        0
    )
)

// from cartItems collections single item by using reduce method 