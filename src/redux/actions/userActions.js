import { userActionTypes } from '../action-types/userActionTypes';

export const setCurrentUser = user => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});
