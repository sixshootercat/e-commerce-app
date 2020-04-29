import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/crown.svg';
import CartIcon from 'components/cart-icon/CartIcon';
import CartDropDown from 'components/cart-dropdown/CartDropDown';
import { selectCurrentUser } from 'redux/selectors/userSelectors';
import { selectCartHidden } from 'redux/selectors/cartSelectors';
import { auth } from 'firebase/firebase.utils';

import './header.scss';

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);

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
          <div onClick={() => auth.signOut()} className='option'>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden ? <CartDropDown /> : null}
    </div>
  );
};

export default Header;
