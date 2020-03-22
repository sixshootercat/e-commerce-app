import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import directoryReducer from "./directoryReducer";
import shopreducer from "./shopReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopreducer
});

export default persistReducer(persistConfig, rootReducer);
