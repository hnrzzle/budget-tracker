import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryForm from './CategoryForm';
import Expenses from './Expenses';

export default class Category extends Component {

  static propTypes = {
    category: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
  };

  state = {
    editing: false
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleCancel = () => {
    this.setState({ editing: false });
  };

  handleUpdate = data => {
    this.props.onUpdate(data);
    this.setState({ editing: false });
  };

  render() {
    const { editing } = this.state;
    const { category, onRemove } = this.props;
    const { name, budget, timestamp } = category;

    return (
      <li key={name}>
        {editing &&
          <div>
            <CategoryForm
              category={category}
              onComplete={this.handleUpdate}
              onCancel={this.handleCancel}
            />
          </div>
        }
        <h3>Budget: ${budget} <br/> Added: {timestamp.toLocaleString().substring(0, 10)}</h3>
        {editing || <button onClick={this.handleEdit}>Edit</button>}
        <button onClick={() => onRemove(category)}>Delete</button>
        <Expenses categoryId={category.id} expenses={category.expenses}/>
      </li>
    );
  }
}