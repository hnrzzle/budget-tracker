import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense, updateExpense, removeExpense } from './actions';
import ExpenseItem from './ExpenseItem';
import ExpensesForm from './ExpenseForm';

export class Expenses extends Component {

  static propTypes = {
    categoryId: PropTypes.string.isRequired,
    expenses: PropTypes.array,
    addExpense: PropTypes.func.isRequired,
    updateExpense: PropTypes.func.isRequired,
    removeExpense: PropTypes.func.isRequired,
  };

  handleExpenseAdd = data => {
    this.props.addExpense(data);
  };

  handleUpdate = data => {
    this.props.updateExpense(data);
  };

  handleRemoveExpense = expense => {
    this.props.removeExpense(expense);
  };

  render() {
    const { expenses, categoryId } = this.props;
    if(!expenses) return null;

    return (
      <div>
        <h2>Expenses:</h2>
        <ExpensesForm onComplete={this.handleExpenseAdd} label="Add" categoryId={categoryId}/>
        <ul>
          {expenses.map(expense => <ExpenseItem
            key={expense.id}
            expense={expense}
            onUpdate={this.handleUpdate}
            onRemove={this.handleRemoveExpense}
          />)}     
        </ul>
      </div>
    );
  }
}

export default connect(
  (state, props) => {
    return {
      expenses: state.expensesByCategory[props.categoryId]
    };
  },
  { addExpense, updateExpense, removeExpense }
)(Expenses);