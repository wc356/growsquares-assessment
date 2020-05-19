import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const renderApp = () => {
  let hasRendered = false;
  if (!hasRendered) {
    ReactDOM.render(<App />, document.getElementById("app"));
    hasRendered = true;
  }
};

renderApp();
