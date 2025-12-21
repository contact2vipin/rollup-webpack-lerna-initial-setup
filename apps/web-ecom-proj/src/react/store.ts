import { configureStore } from '@reduxjs/toolkit';
import featuresReducer from './rootReducer';
// import createSagaMiddleware from 'redux-saga';
// import rootReducer from './featuresReducer';

//const sagaMiddleware = createSagaMiddleware();

/* const dummyReducer = () => {
    return 100;
} */

const store = configureStore({
  reducer: featuresReducer
  // reducer: dummyReducer
});

// sagaMiddleware.run(productsSaga);

export default store;