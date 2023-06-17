import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(store.getState())
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
