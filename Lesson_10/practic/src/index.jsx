import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


/*
DZ - Удалить весь хлам
DZ - https://www.youtube.com/watch?v=_j4k73zoy5Y

html,css, js, react, redux,  node js 
*/