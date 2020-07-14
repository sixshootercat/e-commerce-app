import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/crown.svg';

import CartIcon from 'containers/cart-icon/CartIcon';
import CartDropDown from 'containers/cart-dropdown/CartDropDown';

import { selectCurrentUser } from 'redux/selectors/userSelectors';
import { selectCartHidden } from 'redux/selectors/cartSelectors';

import { signOutStart } from 'redux/actions/userActions';

import './header.scss';

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);
  const dispatch = useDispatch();

  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {currentUser ? (
          <div onClick={() => dispatch(signOutStart())} className='option'>
            SIGN OUT
          </div>
        ) : (
          <>
            <Link className='option' to='/signin'>
              SIGN IN
            </Link>
            <Link className='option' to='/signup'>
              SIGN UP
            </Link>
          </>
        )}
        <CartIcon />
      </div>
      {!hidden ? <CartDropDown /> : null}
    </div>
  );
};

export default Header;
