import {
  CATEGORIES_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE } from './reducers';
  
import { loadCategories, addCategory, updateCategory, removeCategory } from './actions';

describe.skip('category actions', () => {
  
  it('creates a load action', () => {
    const { type, payload } = loadCategories();
    expect(type).toBe(CATEGORIES_LOAD);
    expect(payload.length).toBe(3);
  });
  
  it('create an add action', () => {
    const category = { name: 'fun', budget: 20 };
  
    const { type, payload } = addCategory(category);
    expect(type).toBe(CATEGORY_ADD);
    const { name, budget, id, timestamp } = payload;
    expect(name).toBe(category.name);
    expect(budget).toBe(category.budget);
    expect(id).toBeTruthy();
    expect(timestamp).toBeTruthy();
  });
  
  it('create an update action', () => {
    const fun = { name: 'fun', budget: 20 };
    const action = updateCategory(fun);
    expect(action).toEqual({
      type: CATEGORY_UPDATE,
      payload: fun
    });
  });
  
  it('create a remove action', () => {
    const fun = { name: 'fun', budget: 20 };
  
    const action = removeCategory(fun);
    expect(action).toEqual({
      type: CATEGORY_REMOVE,
      payload: fun
    });
  });

});

