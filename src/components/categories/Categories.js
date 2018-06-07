import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Category from './Category';
import CategoryForm from './CategoryForm';
import { loadCategories, addCategory, removeCategory } from '../actions';

class Categories extends Component {

  static propTypes = {
    categories: PropTypes.array,
    loadCategories: PropTypes.func.isRequired,
    addCategory: PropTypes.func.isRequired,
    removeCategory: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.loadCategories();
  }

  render() {
    const { categories, addCategory, removeCategory } = this.props;
    if(!categories) return null;

    return (
      <div>
        <h2>Categories</h2>
        <CategoryForm onComplete={addCategory} label="add"/>
      </div>
    );
  }


}

export default connect(

  state => ({ categories: state.categories }),

  { loadCategories, addCategory, removeCategory }
)(Categories);