import { all, call } from 'redux-saga/effects';
import { shopSagas } from 'redux/sagas/shopSagas';
import { userSagas } from 'redux/sagas/userSagas';
import { cartSagas } from 'redux/sagas/cartSagas';

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
