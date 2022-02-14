import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {createStore} from "redux"
import reducer from './reducer/index';
import { Provider } from 'react-redux';
const countstore=createStore(
  reducer
)
ReactDOM.render(
<Provider store={countstore}>
    <App />
  </Provider>
 ,
  document.getElementById('root')
);


