import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCartHidden } from "redux/actions/cartActions";
import { selectCartItemsCount } from "redux/selectors/cartSelectors";
import { Container, ShoppingIcon, ItemCount } from "./styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartItemsCount);

  return (
    <Container onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon />
      <ItemCount>{itemCount}</ItemCount>
    </Container>
  );
};

export default CartIcon;
