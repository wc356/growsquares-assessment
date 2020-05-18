import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import mapReducer from '../reducers/map';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            //You can combine reducers here
            map: mapReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};

//Store creation