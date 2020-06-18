import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// connect is higher order component that let us to modify our component have access to  to the things related to redux
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import './header.styles.scss';
const Header = ({currentUser,hidden}) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                Shop
            </Link>
            <Link >
                Contact
            </Link>
            {
                currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                 ) :(
                <Link className='option' to='/signin'>SIGN In</Link>
                 )}
                 <CartIcon/>
        </div>
        {
            hidden ? null : <CartDropdown/>

        }
    </div>
)

// this state is root0reducer

const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => ({
    currentUser,
    hidden
})
// this is nested destructuring of an object we state as a parent object from root-reducer{user:{currentUser},}
// inside that we have user teducer and from user we are destructuring currentuser

export default connect(mapStateToProps)(Header);

// connet requires 2 functions second one is optional ,and that gives us back other higher component that we passed as Header