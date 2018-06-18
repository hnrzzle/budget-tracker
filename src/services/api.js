const request = require('superagent');
const BASE_URL = 'https://budget-tracker-server.herokuapp.com/api/hnrzzle/categories';

export const postCategory = category => {
  return request
    .post(BASE_URL)
    .send(category);
};

export const getCategories = () => {
  return request
    .get(BASE_URL);
};

export const deleteCategory = category => {
  return request
    .del(`${BASE_URL}/${category.id}`);
};

export const putCategory = category => {
  return request
    .put(`${BASE_URL}/${category.id}`)
    .send(category);
};

export const postExpense = expense => {
  return request
    .post(`${BASE_URL}/${expense.categoryId}/expenses`)
    .send(expense);
};

export const putExpense = expense => {
  return request
    .put(`${BASE_URL}/${expense.categoryId}/expenses/${expense.id}`)
    .send(expense);
};

export const deleteExpense = expense => {
  return request
    .del(`${BASE_URL}/${expense.categoryId}/expenses/${expense.id}`)
    .send(expense);
};