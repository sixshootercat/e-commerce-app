import { userActionTypes } from "../action-types/userActionTypes";

const initialState = {
  currentUser: null
};

const userReducer = (state = initialState, action) => {
  switch (userActionTypes.SET_CURRENT_USER) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
