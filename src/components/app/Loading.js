import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLoading } from './reducers';
import PropTypes from 'prop-types';

class Loading extends Component {

  static propTypes = {
    loading: PropTypes.bool,
  };

  render() {
    const { loading } = this.props;
    if(!loading) return null;

    return (
      <div><h1>Loading...</h1></div>
    );
  }
}
export default connect(
  state => ({
    loading: getLoading(state)
  }),
  null
)(Loading);