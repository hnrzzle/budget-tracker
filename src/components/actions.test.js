import {
  categories,
  CATEGORIES_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE } from './reducers';
import { loadCategories, addCategory, updateCategory, removeCategory } from './actions';

import shortid from 'shortid';


it('creates an add action', () => {
  const category = { id: 1, timestamp: '2018-06-07', name: 'fun', budget: 20 };

  const { type, payload } = addCategory(category);
  expect(type).toBe(CATEGORY_ADD);

});