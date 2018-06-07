import {
  categories,
  CATEGORIES_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE } from './reducers';

import shortid from 'shortid';

const categoriesData = [
  { name: 'fun', budget: 20 },
  { name: 'food', budget: 50 },
  { name: 'entertainment', budget: 40 }
];

export const addCategory = category => {
  category.id = shortid.generate();
  category.timestamp = new Date();

  return {
    type: CATEGORY_ADD,
    payload: category
  };
};