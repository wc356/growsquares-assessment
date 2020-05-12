import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import someReducer from '../reducers/auth';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            //You can combine reducers here
            map: someReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};

//Store creation