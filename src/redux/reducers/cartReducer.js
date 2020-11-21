import { cartActionTypes } from "redux/action-types/cartActionTypes";
import { addItemToCart, removeItemFromCart } from "redux/cart.utils";
import { userActionTypes } from "redux/action-types/userActionTypes";

const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case cartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
