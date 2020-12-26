import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import CustomButton from "components/CustomButton";
import CartItem from "containers/CartItem";
import { toggleCartHidden, removeItem } from "redux/actions/cartActions";
import { selectCartItems } from "redux/selectors/cartSelectors";

import "./cart-dropdown.scss";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch(toggleCartHidden);
  const history = useHistory();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <div
              key={cartItem.id}
              style={{ display: "flex", alignItems: "center" }}
            >
              <CartItem item={cartItem} />
              <span
                style={{ cursor: "pointer" }}
                onClick={() => dispatch(removeItem(cartItem))}
              >
                X
              </span>
            </div>
          ))
        ) : (
          <span className="empty-message">Cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
