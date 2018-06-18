import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm';
import Categories from './Categories';
import { loadCategories, addCategory, removeCategory, updateCategory } from './actions';
import { getCategories } from '../categories/reducers';

class Dashboard extends Component {

  static propTypes = {
    categories: PropTypes.array,
    addCategory: PropTypes.func.isRequired,
    removeCategory: PropTypes.func.isRequired,
    loadCategories: PropTypes.func.isRequired,
    updateCategory: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.loadCategories();
  }

  render() {
    const { categories, addCategory, removeCategory, updateCategory } = this.props;
    if(!categories) return null;

    return (
      <div>
        <CategoryForm onComplete={addCategory}/>
        <ul>
          {categories.map(category => <Categories
            key={category.id}
            onRemove={removeCategory}
            category={category} 
            onUpdate={updateCategory}
          />)}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({ categories: getCategories(state) }),
  { loadCategories, addCategory, removeCategory, updateCategory }
)(Dashboard);