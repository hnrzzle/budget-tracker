import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Category.css';

export default class Category extends Component {

  static propTypes = {
    category: PropTypes.object,
    onRemove: PropTypes.func.isRequired
    // onUpdate: PropTypes.func.isRequired
  };

  render() {
    const { category, onRemove/*, onUpdate */ } = this.props;
    const { name, budget, timestamp } = category;


    return (
      <li key={name} className={styles['category']}>
        <h3>{name}: ${budget}</h3>
        <p className="date">Added on: {timestamp.toLocaleString()}</p><button  onClick={() => onRemove(category)}>X</button>
      </li>
    );
  }
}