import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import coordinatesReducer from "../reducers/map";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      coordinates: coordinatesReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
