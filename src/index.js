import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import { Provider } from 'react-redux';
import App from './components/app/App';
import store from './store';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);