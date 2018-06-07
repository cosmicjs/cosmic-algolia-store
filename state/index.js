import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import brands from './brands/reducer';
import cart from './cart/reducer';
import categories from './categories/reducer';
import facets from './facets/reducer';
import items from './items/reducer';
import modals from './modals/reducer';

const rootReducer = combineReducers({
  brands,
  cart,
  categories,
  facets,
  items,
  modals,
});

const initializeStore = (initialState = {}) => createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

export default initializeStore;
