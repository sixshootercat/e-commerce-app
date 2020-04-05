import { shopActionTypes } from '../action-types/shopActionTypes';

export const updateCollections = collectionsMap => ({
  type: shopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
