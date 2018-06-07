import { createStore, combineReducers } from 'redux';
import { categories } from './components/reducers';

const rootReducer = combineReducers({
  categories
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;