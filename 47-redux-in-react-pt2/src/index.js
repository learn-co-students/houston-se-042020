import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import catReducer from './reducers/catReducer';

const store = createStore(
  catReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// import MyReactRedux from './MyReactRedux';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <MyReactRedux />,
// document.getElementById('root')
// );
