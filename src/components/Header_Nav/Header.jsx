import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './header.styles.css';
import { ReactComponent as Logo } from '../../assets/images/crown.svg';

import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.action';

import { auth } from '../../firebase/firebase.utils';

import { createStructuredSelector } from 'reselect';
import { selectHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';

import CartIcon from '../Cart_Icon/Cart_Icon.component';
import CartDropdown from '../Cart_Dropdown/Cart_Dropdown.component';

function Header({ user, setCurrentUser, toggleHidden }) {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo />
            </Link>
            <div className='options'>
                <NavLink className='option' exact to='/shop' >Shop</NavLink>
                <NavLink className='option' exact to='/checkout' >Contact</NavLink>
                {
                    user ?
                        <div className='option' onClick={() => { auth.signOut(); setCurrentUser(null) }}>SIGN OUT</div>
                        :
                        <Link className='option' to='/login/'>SIGN IN</Link>
                }
                <CartIcon className='option' />
            </div>
            {
                toggleHidden === true ? null : <CartDropdown />
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    toggleHidden: selectHidden
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);