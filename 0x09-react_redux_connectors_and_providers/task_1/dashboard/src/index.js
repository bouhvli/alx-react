import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { Provider } from 'react-redux';
import uiReducer, { initialState } from './reducers/uiReducer';
import { Map } from 'immutable';
import { createStore } from 'redux';

const store = createStore(uiReducer, Map(initialState));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
