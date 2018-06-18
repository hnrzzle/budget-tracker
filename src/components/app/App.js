import React, { Component } from 'react';
import Dashboard from '../categories/Dashboard';
import Loading from './Loading';
import Error from './Error';

export default class App extends Component {
  render() {
    
    return (
      <main>
        <h1>Budget Tracker</h1>
        <Loading/>
        <Error/>
        <Dashboard/>
      </main>
    );
  }
}