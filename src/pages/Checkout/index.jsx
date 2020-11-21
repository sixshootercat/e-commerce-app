import React from "react";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "redux/selectors/cartSelectors";
import { CheckoutItem } from "components";
import { StripeButton } from "components";

import "./checkout.scss";

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const renderCartList = cartItems.map((cartItem) => (
    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
  ));

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.length ? (
        renderCartList
      ) : (
        <p style={{ fontSize: "32px", marginTop: "50px" }}>
          Empty Cart{" "}
          <span role="img" aria-label="sad">
            😥
          </span>
        </p>
      )}
      <div className="total">
        <span>TOTAL: ${cartTotal}</span>
      </div>
      <div className="test-warning">
        *Please use the following card number for payments*
        <br />
        4242 4242 4242 4242 - Exp: Any future date - CVV: Any 3 digit number
      </div>
      <StripeButton price={cartTotal} />
    </div>
  );
};

export default CheckOut;
