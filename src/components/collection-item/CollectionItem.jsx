import React from 'react';
import { useDispatch } from 'react-redux';
import CustomButton from 'components/custom-button/CustomButton';
import { addItem } from 'redux/actions/cartActions';
import {
  CollectionFooter,
  CollectionContainer,
  CollectionName,
  CollectionPrice,
  ExtStyledButton,
  Image,
} from './styles';

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;

  return (
    <CollectionContainer>
      <Image imageUrl={imageUrl} />
      <CollectionFooter>
        <CollectionName>{name}</CollectionName>
        <CollectionPrice>${price}</CollectionPrice>
      </CollectionFooter>
      <ExtStyledButton
        className='custom-button'
        onClick={() => dispatch(addItem(item))}
        inverted
      >
        Add to Cart
      </ExtStyledButton>
    </CollectionContainer>
  );
};

export default CollectionItem;
