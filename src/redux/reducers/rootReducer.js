<<<<<<< HEAD
import { combineReducers } from 'redux'
import  userReducer  from './userReducer'
=======
import { combineReducers } from "redux";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
>>>>>>> 04b473d1fab55a3b17989c5953b468c704ab5457

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

export default rootReducer;
