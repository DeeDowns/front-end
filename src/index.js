import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { rootReducer } from './store/reducers'

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from '../src/components/App';

import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';


const store = createStore(rootReducer, applyMiddleware(thunk, logger))

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
