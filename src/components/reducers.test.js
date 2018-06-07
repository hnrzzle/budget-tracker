import shortid from 'shortid';

const CATEGORIES_LOAD = 'CATEGORIES_LOAD';
const CATEGORY_ADD = 'CATEGORY_ADD';
const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
const CATEGORY_REMOVE = 'CATEGORY_REMOVE';



function categories(state = [], { type, payload }) {
  switch (type) {
    case CATEGORIES_LOAD:
      return payload;
    case CATEGORY_ADD:
      return [...state, payload];
    case CATEGORY_UPDATE:
      return state.map(category => category.id === payload.id ? payload : category);
    case CATEGORY_REMOVE:
      return state.filter(category => category !== payload);
    default:
      return state;
  }
}


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