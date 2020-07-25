import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './cart-item.scss';

const CartItem = ({ item }) => {
  const { imageUrl, price, name, quantity } = item;
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='item' />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.object,
};

export default React.memo(CartItem);
