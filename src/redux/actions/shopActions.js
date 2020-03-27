import { shopActionTypes } from "../action-types/shopActionTypes";
import { userActionTypes } from "../action-types/userActionTypes";

export const updateCollections = collectionsMap => ({
  type: shopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
});
