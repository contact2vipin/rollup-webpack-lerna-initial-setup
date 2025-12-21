import { combineReducers } from 'redux';
import appReducers from './features/app/reducer';
import addToCartReducers from './features/addtocart/reducer';

const featuresReducer = combineReducers({
  app: appReducers,
  addToCart: addToCartReducers,
});

const rootReducer = combineReducers({
  features: featuresReducer,
});

export default rootReducer;
