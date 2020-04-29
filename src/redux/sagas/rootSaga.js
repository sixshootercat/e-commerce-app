import { all, call } from 'redux-saga/effects';
import { shopSagas } from 'redux/sagas/shopSagas';
import { userSagas } from 'redux/sagas/userSagas';

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas)]);
}
