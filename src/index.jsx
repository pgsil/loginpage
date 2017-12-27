import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './styles/styles.scss';

import combineReducers from './app/services/reducers';
import App from './app/App';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  combineReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);
/* eslint-enable no-underscore-dangle */

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
