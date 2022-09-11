import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App";
import {createStore, compose} from "redux";
import {Provider} from "react-redux";
import reducers from "./reducers";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
let store = createStore(reducers, {}, composeEnhancers());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App/>
  </Provider>
);
