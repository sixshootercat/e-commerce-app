import { call, all, put, takeLatest } from 'redux-saga/effects';
import { userActionTypes } from 'redux/action-types/userActionTypes';
import { clearCart } from 'redux/actions/cartActions';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
