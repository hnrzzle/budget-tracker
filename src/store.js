import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { categories, expensesByCategory } from './components/categories/reducers';
import { error, loading } from './components/app/reducers';

const rootReducer = combineReducers({
  error,
  loading,
  categories,
  expensesByCategory
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;