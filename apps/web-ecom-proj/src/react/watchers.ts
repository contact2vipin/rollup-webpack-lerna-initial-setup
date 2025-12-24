import { all } from 'redux-saga/effects';
import productsWatcher from './features/products/watcher';
// import appWatcher from './features/app/watcher';

export default function* watchers() {
  yield all([
    productsWatcher(),
    // appWatcher()
  ]);
};
