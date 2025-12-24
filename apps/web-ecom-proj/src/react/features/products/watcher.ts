import { all, takeLatest } from 'redux-saga/effects';
import { constants } from './constants';
import * as sagas from './sagas';

export default function* watcher() {
    yield all([
        takeLatest(constants.PRODUCT_LIST, sagas.getProducts)
    ]);
}
