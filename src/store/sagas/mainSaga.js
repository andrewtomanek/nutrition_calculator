import { put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";
import * as actions from "../actions";
import * as actionTypes from "../actions/actionTypes";

export function* watchStoreBuilder() {
  yield takeEvery(actionTypes.INIT_INVENTORY, initInventorySaga);
  yield takeLatest(actionTypes.SAVE_INVENTORY, purchaseStoreSaga);
}

export function* initInventorySaga(action) {
  const queryParams =
    "?auth=" +
    action.authData.token +
    '&orderBy="uid"&equalTo="' +
    action.authData.uid +
    '"';
  try {
    const response = yield axios.get(
      "https://strava-b193a.firebaseio.com/storage.json" + queryParams
    );
    yield put(actions.setInventory(response.data[action.authData.uid]));
  } catch (error) {
    yield put(actions.fetchInventoryFailed());
  }
}

export function* purchaseStoreSaga(action) {
  try {
    const response = yield axios.put(
      `https://strava-b193a.firebaseio.com/storage/${
        action.payload.uid
      }.json?auth=${action.payload.token}`,
      action.payload
    );
    yield put(actions.saveToStoreSuccess(response.data));
  } catch (error) {
    yield put(actions.saveToStoreFail(error));
  }
}
