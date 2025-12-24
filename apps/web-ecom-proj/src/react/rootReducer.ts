import { combineReducers } from 'redux';
import appReducers from './features/app/reducer';
import productsReducers from './features/products/reducer';

const featuresReducer = combineReducers({
  app: appReducers,
  productApp: productsReducers,
});

const rootReducer = combineReducers({
  features: featuresReducer,
});

export default rootReducer;
