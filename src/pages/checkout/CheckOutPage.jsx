import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal,
} from 'redux/selectors/cartSelectors';
import CheckOutItem from 'components/checkout-item/CheckOutItem';
import StripeButton from 'components/stripe-button/StripeButton';

import './checkout.scss';

const CheckOut = ({ cartTotal, cartItems }) => (
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

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOut);
