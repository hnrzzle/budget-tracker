import { CATEGORIES_LOAD, CATEGORY_ADD, CATEGORY_REMOVE, CATEGORY_UPDATE } from './reducers';
import { EXPENSE_CREATE, EXPENSE_UPDATE, EXPENSE_DELETE } from './reducers';
import { postCategory, getCategories, deleteCategory, putCategory, postExpense, putExpense, deleteExpense } from '../../services/api';
import { ERROR, LOADING_START, LOADING_END } from '../app/reducers';

export const loadCategories = () => dispatch => {
  dispatch({ type: LOADING_START });
 
  getCategories()
    .then(
      categories => {
        dispatch({
          type: CATEGORIES_LOAD,
          payload: JSON.parse(categories.text)
        });
      },
      err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      })
    .then(() => {
      dispatch({ type: LOADING_END });
    });
};

export const addCategory = category => dispatch => {
  postCategory(category)
    .then(
      saved => {
        dispatch({
          type:CATEGORY_ADD,
          payload: JSON.parse(saved.text)
        });
      },
      err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
};

export const removeCategory = category => dispatch => {
  deleteCategory(category)
    .then(
      deleted => {
        if(JSON.parse(deleted.text).deleted === false) return null;
        dispatch({
          type: CATEGORY_REMOVE,
          payload: category
        });
      },
      err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
};

export const updateCategory = category => dispatch => {
  putCategory(category)
    .then(
      updated => {
        dispatch({
          type: CATEGORY_UPDATE,
          payload: JSON.parse(updated.text)
        });
      },
      err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
};

export const addExpense = expense => dispatch => {
  postExpense(expense)
    .then(
      saved => {
        dispatch({
          type: EXPENSE_CREATE,
          payload: JSON.parse(saved.text)
        });
      },
      err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
};
  
export const updateExpense = expense => dispatch => {
  putExpense(expense)
    .then(
      updated => {
        dispatch({
          type: EXPENSE_UPDATE,
          payload: JSON.parse(updated.text)
        });
      },
      err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
};

export const removeExpense = expense => dispatch => {
  deleteExpense(expense)
    .then(
      () => {
        dispatch({
          type: EXPENSE_DELETE,
          payload: expense
        });
      },
      err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
};


