import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from 'redux/actions/cartActions';
import {
  CollectionItemFooter,
  CollectionItemContainer,
  CollectionItemName,
  CollectionItemPrice,
  ExtStyledButton,
  Image,
} from './styles';

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <Image imageUrl={imageUrl} />
      <CollectionItemFooter>
        <CollectionItemName>{name}</CollectionItemName>
        <CollectionItemPrice>${price}</CollectionItemPrice>
      </CollectionItemFooter>
      <ExtStyledButton onClick={() => dispatch(addItem(item))} inverted>
        Add to Cart
      </ExtStyledButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
