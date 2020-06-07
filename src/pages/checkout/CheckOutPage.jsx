import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
} from 'redux/selectors/cartSelectors';
import CheckOutItem from 'components/checkout-item/CheckOutItem';
import StripeButton from 'components/stripe-button/StripeButton';

import './checkout.scss';

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>
        <span>TOTAL: ${cartTotal}</span>
      </div>
      <div className='test-warning'>
        *Please use the following card number for payments*
        <br />
        4242 4242 4242 4242 - Exp: Any future date - CVV: Any 3 digit number
      </div>
      <StripeButton price={cartTotal} />
    </div>
  );
};

export default CheckOut;
