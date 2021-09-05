import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './reducers';

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(
        thunk,
        // thunkMiddleware,
        loggerMiddleware
    ))
);

export default store;