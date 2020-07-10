import React from 'react';
import './App.css';
import { createStore } from 'redux';
import woofyReducer from './my_react_redux/woofyReducer';
import TestMyConnect from './my_react_redux/TestMyConnect';
import { MyProvider } from './my_react_redux/my_react_redux';

const store = createStore(woofyReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function MyReactRedux() {
  return (
    <>
    <MyProvider store={store}>
      <TestMyConnect extraTest={'Just being extra'} />
    </MyProvider>
    </>
  );
}

export default MyReactRedux;
