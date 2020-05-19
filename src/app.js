import React, { useReducer } from "react";
import ReactDOM from "react-dom";
// import {Provider} from 'react-redux';
import AppRouter from "./routers/AppRouter";
// import configureStore from './store/configureStore';

import CoordinatesContext from "../src/context/coordinates-context";
import coordinatesReducer from "./reducers/map";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

// const store = configureStore();

// const jsx = (
//     <Provider store={store}>
//         <AppRouter />
//     </Provider>
// );

const App = () => {
  const [coordinates, coordinatesDispatch] = useReducer(coordinatesReducer, []);

  return (
    <CoordinatesContext.Provider value={{ coordinates, coordinatesDispatch }}>
      <AppRouter />
    </CoordinatesContext.Provider>
  );
};

const renderApp = () => {
  let hasRendered = false;
  if (!hasRendered) {
    ReactDOM.render(<App />, document.getElementById("app"));
    hasRendered = true;
  }
};

renderApp();
