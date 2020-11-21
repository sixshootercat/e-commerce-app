import { takeLatest, call, put, all } from "redux-saga/effects";
import { shopActionTypes } from "redux/action-types/shopActionTypes";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "redux/actions/shopActions";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "firebase/firebase.utils";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
