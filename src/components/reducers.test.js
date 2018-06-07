import shortid from 'shortid';

const CATEGORIES_LOAD = 'CATEGORIES_LOAD';

function categories(state = [], { type, payload }) {
  switch (type) {
    case CATEGORIES_LOAD:
      return payload;
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

it('loads categories', () => {
  const state = categories([], { type: CATEGORIES_LOAD, payload: [food] });
  expect(state).toEqual([food]);

});