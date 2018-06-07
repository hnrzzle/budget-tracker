import {
  categories,
  CATEGORIES_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE } from './reducers';
import { loadCategories, addCategory, updateCategory, removeCategory } from './actions';

import shortid from 'shortid';


it('creates an add action', () => {
  const category = { name: 'fun', budget: 20 };

  const { type, payload } = addCategory(category);
  expect(type).toBe(CATEGORY_ADD);
  const { name, budget, id, timestamp } = payload;
  expect(name).toBe(category.name);
  expect(budget).toBe(category.budget);
  expect(id).toBeTruthy();
  expect(timestamp).toBeTruthy();
});

