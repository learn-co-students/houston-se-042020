import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import catReducer from './reducers/catReducer';

const store = createStore(
  catReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
window.store = store;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
