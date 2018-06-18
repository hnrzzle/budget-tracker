import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  name: '',
  price: ''
};

export default class ExpenseForm extends Component {

  static propTypes = {
    expense: PropTypes.object,
    categoryId: PropTypes.string.isRequired,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    label: PropTypes.string.isRequired
  };

  static getDerivedStateFromProps({ expense }, { edit }) {
    if(edit) return null;

    return {
      edit: expense ? { ...expense } : { ...defaultState }
    };
  }

  state= {
    edit: null
  };

  handleChange = ({ target }) => {
    this.setState(({ edit }) => {
      return {
        edit: {
          ...edit,
          [target.name]: target.value,
          categoryId: this.props.categoryId
        }
      };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete(this.state.edit);
    this.setState({
      edit: { ...defaultState }
    });
  };

  render() {
    const { name, price } = this.state.edit;
    const { label, onCancel } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="name" value={name} onChange={this.handleChange}/>
        </label>

        <label>
          Price:
          <input name="price" value={price} onChange={this.handleChange}/>
        </label>
        <button type="submit">{label}</button>
        {onCancel && <button type="reset" onClick={onCancel}>Cancel</button>}
      </form>
    );
  }
}