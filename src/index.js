import React from 'react';
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom';
import thunk from 'redux-thunk'
import { rootReducer } from './store/reducers'

import './index.css';

import App from '../src/components/App';

import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from '../src/components/App'
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk))

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
serviceWorker.unregister();
