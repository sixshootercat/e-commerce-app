import { cartActionTypes } from "../action-types/cartActionTypes";

const initialState = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      }
    default:
      return state;
  }
};

export default cartReducer;
