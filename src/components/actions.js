import {
  CATEGORIES_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE } from './reducers';

import shortid from 'shortid';

const categoriesData = () => [
  addCategory({ name: 'Fun', budget: 20 }).payload,
  addCategory({ name: 'Food', budget: 50 }).payload,
  addCategory({ name: 'Entertainment', budget: 40 }).payload
];

export const loadCategories = () => ({
  type: CATEGORIES_LOAD,
  payload: categoriesData()
});

export const addCategory = category => {
  category.id = shortid.generate();
  category.timestamp = new Date();

  return {
    type: CATEGORY_ADD,
    payload: category
  };
};

export const updateCategory = category => {
  return {
    type: CATEGORY_UPDATE,
    payload: category
  };
};
export const removeCategory = category => {
  return {
    type: CATEGORY_REMOVE,
    payload: category
  };
};