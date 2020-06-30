import React from 'react';
import { connect } from 'react-redux';
// connect is higher order component that let us to modify our component have access to  to the things related to redux
import { createStructuredSelector } from 'reselect'
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.actions'
import { 
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink
} from './header.styles'
const Header = ({currentUser,hidden,signOutStart}) => (
    <HeaderContainer>
        <LogoContainer  to="/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer >
            <OptionLink  to='/shop'>Shop</OptionLink>
            <OptionLink >Contact</OptionLink>
            {currentUser ? (
                <OptionLink as='div' onClick={signOutStart}>
                  SIGN OUT
                </OptionLink>
              ) : (
                <OptionLink to='/signin'>SIGN IN</OptionLink>
              )}
                 <CartIcon/>
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown/>

        }
    </HeaderContainer>
)

// this state is root0reducer

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart:() => dispatch(signOutStart())
})
// this is nested destructuring of an object we state as a parent object from root-reducer{user:{currentUser},}
// inside that we have user teducer and from user we are destructuring currentuser
//===== createStructuredSelector ===  it passes top level state directly
// without using createStructuredSelector we have to write it inthis pattern  but when we have large no of components to pass we can use createStructuredSelector instead
// const mapStateToProps = (state)  => ({
//     cartItems:selectCartItems(state)
// })
export default connect(mapStateToProps,mapDispatchToProps)(Header);

// connet requires 2 functions second one is optional ,and that gives us back other higher component that we passed as Header

//<OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>

//we can use this as //<OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
