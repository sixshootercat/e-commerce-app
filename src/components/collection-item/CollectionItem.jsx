import React from 'react';
import { useDispatch } from 'react-redux';
import CustomButton from 'components/custom-button/CustomButton';
import { addItem } from 'redux/actions/cartActions';

import './collection-item.scss';

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <CustomButton onClick={() => dispatch(addItem(item))} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
