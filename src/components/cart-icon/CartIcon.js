import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-cart.svg';
import { toggleCartHidden } from '../../redux/actions/cartActions';
import { selectCartItemsCount } from '../../redux/selectors/cartSelectors';

import './cart-icon.scss';

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartItemsCount);

  return (
    <div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

export default CartIcon;
