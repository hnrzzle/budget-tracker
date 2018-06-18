export const CATEGORIES_LOAD = 'CATEGORIES_LOAD';
export const CATEGORY_ADD = 'CATEGORY_ADD';
export const CATEGORY_REMOVE = 'CATEGORY_REMOVE';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';

export const EXPENSE_CREATE = 'EXPENSE_CREATE';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_DELETE = 'EXPENSE_DELETE';

export const getCategories = state => state.categories;
export const getExpenses = state => state.expensesByCategory;
export const getExpensesByCategory = (categoryId, state) => getExpenses(state)[categoryId];

export function categories(state = [], { type, payload }) {
  switch (type) {
    case CATEGORIES_LOAD:
      return payload;
    case CATEGORY_ADD:
      return [...state, payload];
    case CATEGORY_REMOVE:
      return state.filter(category => category !== payload);
    case CATEGORY_UPDATE:
      return state.map(category => category.id === payload.id ? payload : category);
    default:
      return state;
  }
}

export function expensesByCategory(state = {}, { type, payload }) {
  switch (type) {
    case CATEGORIES_LOAD:
      return payload.reduce((map, category) => {
        map[category.id] = category.expenses;
        return map;
      }, {});
    case CATEGORY_ADD:
      return {
        ...state,
        [payload.id]: []
      };
    case CATEGORY_REMOVE: {
      const copy = { ...state };
      delete copy[payload.id];
      return copy;
    }
    case EXPENSE_CREATE: {
      return {
        ...state,
        [payload.categoryId]: [
          ...state[payload.categoryId],
          payload
        ]
      };
    }
    case EXPENSE_UPDATE: {
      const copy = { ...state };
      const update = copy[payload.categoryId].map(expense => expense.id === payload.expense.id ? payload.expense : expense);
      copy[payload.categoryId] = update;
      return copy;
    }
    case EXPENSE_DELETE: {
      const copy = { ...state };
      const update = copy[payload.categoryId].filter(expense => expense.id !== payload.id);
      copy[payload.categoryId] = update;
      return copy;
    }
    default:
      return state;
  }
}