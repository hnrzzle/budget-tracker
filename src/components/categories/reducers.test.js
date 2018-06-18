import shortid from 'shortid';
import {
  categories,
  expensesByCategory,
  CATEGORIES_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE,
  EXPENSE_CREATE,
  EXPENSE_UPDATE,
  EXPENSE_DELETE } from './reducers';

describe('categories reducer', () => {

  it('has a default value of empty array', () => {
    const state = categories(undefined, {});
    expect(state).toEqual([]);
  });

  const food = {
    id: shortid.generate(),
    timestamp: new Date(),
    name: 'food',
    budget: 100
  };

  const fun = {
    id: shortid.generate(),
    timestamp: new Date(),
    name: 'fun',
    budget: 20
  };

  it('loads categories', () => {
    const state = categories([], { type: CATEGORIES_LOAD, payload: [food] });
    expect(state).toEqual([food]);

  });

  it('adds a category', () => {
    const prevState = [];
    const state = categories(prevState, { type: CATEGORY_ADD, payload: food });
    expect(state).toEqual([food]);
  });

  it('updates a category', () => {
    const state = categories(
      [{ id: 1, timestamp: '2018-06-07', name: 'entertainment', budget: 50 }],
      {
        type: CATEGORY_UPDATE,
        payload: { id: 1, timestamp: '2018-06-07', name: 'entertainment', budget: 200 }
      }
    );
    expect(state).toEqual([{ id: 1, timestamp: '2018-06-07', name: 'entertainment', budget: 200 }]);
  });

  it('removes a category', () => {
    const state = categories([food, fun], { type: CATEGORY_REMOVE, payload: fun });
    expect(state).toEqual([food]);
  });

});

describe('expenses reducer', () => {

  const lunch = {
    id: 1,
    categoryId: 123,
    timestamp: new Date(),
    name: 'Lunch',
    price: 8
  };

  const car = {
    id: 123,
    categoryId: 123,
    name: 'Ford',
    price: 10000
  };

  it('has a default value of empty object', () => {
    const state = expensesByCategory(undefined, {});
    expect(state).toEqual({});
  });

  it('adds an entry on category add', () => {
    const state = expensesByCategory({}, { type: CATEGORY_ADD, payload: { id: 3 } });
    expect(state).toEqual({ 3: [] });
  });

  it('loads expenses', () => {
    const state = expensesByCategory({}, {
      type: CATEGORIES_LOAD,
      payload: [{
        id: 123,
        expenses: [lunch]
      },
      {
        id: 456,
        expenses: [car]
      }]
    });
    expect(state).toEqual({ 123: [lunch], 456: [car] });
  });

  it('removes an entry on category remove', () => {
    const state = expensesByCategory({ 123: [], 456: [] }, { type: CATEGORY_REMOVE, payload: { id: 123 } });
    expect(state).toEqual({ 456: [] });
  });

  it('adds an expense to a category', () => {
    const state = expensesByCategory({ 123: [lunch] }, {
      type: EXPENSE_CREATE,
      payload: {
        categoryId: 123,
        ...car
      }
    });
    const expected = { 123: [lunch, car] };
    expect(state).toEqual(expected);
  });

  it('Updates an Expense', () => {
    const state = expensesByCategory(
      { 123: [{ id: 456, name: 'bike', price: 400 }] },
      { type: EXPENSE_UPDATE, payload: { 
        categoryId: 123, expense: { id: 456, name: 'bike', price: 1000 } } });
    expect(state).toEqual({ 123: [{ id: 456, name: 'bike', price: 1000 }] });
  });

  it('deletes an expense', () => {
    const state = expensesByCategory(
      { 123: [lunch, car] },
      { type: EXPENSE_DELETE, payload: car });
    expect(state).toEqual({ 123: [lunch] });
  });
});