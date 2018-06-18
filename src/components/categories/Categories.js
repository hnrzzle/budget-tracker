import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from './Category';

export default class Categories extends Component {

  static propTypes = {
    category: PropTypes.object,
    onRemove: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
  };

  state = {
    viewing: false
  };

  handleView = () => {
    const { viewing } = this.state;
    this.setState({ viewing: !viewing });
  };

  render() {
    const { category, onRemove, onUpdate } = this.props;
    const { viewing } = this.state;
    const { name, id } = category;

    return (
      <div>
        <li key={id}>
          <h3>{name}</h3>
          {!viewing && <button onClick={this.handleView}>Expand</button>}
          {viewing && <button onClick={this.handleView}>Hide</button>} 
        </li>
        {viewing && <Category
          category={category}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />}
      </div>
    );
  }
}