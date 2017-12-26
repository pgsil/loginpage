import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './styles/styles.scss';

import combineReducers from './app/services/reducers';
import App from './app/App';

const store = createStore(combineReducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
