import React, { Component } from 'react';
import Categories from '../categories/Categories';


export default class App extends Component {
  render() {

    return (
      <main>
        <h1>Budget Tracker</h1>
        <Categories/>
      </main>
    );
  }
}